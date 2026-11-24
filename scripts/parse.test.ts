import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCategoryPage, parseIndex, parseStarLabel, merge, type GhStar } from './parse.ts';

const mini = readFileSync(new URL('./fixtures/mini.md', import.meta.url), 'utf8');
const page = parseCategoryPage(mini, 'mcp-servers', 'AI & Agents', 3);
const [context7, serena] = page.entries;

test('parseStarLabel handles k, m and plain numbers', () => {
  assert.equal(parseStarLabel('65.0k'), 65000);
  assert.equal(parseStarLabel('6'), 6);
  assert.equal(parseStarLabel('1.2m'), 1200000);
});

test('category metadata comes from the page', () => {
  assert.equal(page.category.title, 'MCP Servers');
  assert.equal(page.category.emoji, '🔌');
  assert.deepEqual(page.category.groups, ['Code, docs & browser context']);
  assert.ok(page.category.intro.startsWith('Model Context Protocol servers'));
  assert.equal(page.overviewRows, 2);
});

test('entries carry overview and detail fields', () => {
  assert.equal(page.entries.length, 2);
  assert.equal(context7.slug, 'upstash/context7');
  assert.equal(context7.oneLiner, 'Up-to-date, version-specific library docs for agents');
  assert.equal(serena.oneLiner, 'Symbol-level code retrieval \\| editing via language servers');
  assert.equal(context7.group, 'Code, docs & browser context');
  assert.deepEqual(context7.links, [{ label: 'context7.com', url: 'https://context7.com' }]);
  assert.ok(context7.what.includes('<code>ctx7</code>'));
  assert.ok(context7.reachFor.startsWith('the agent writes code'));
});

test('how-to keeps block order and code language', () => {
  assert.equal(context7.howTo[0].type, 'code');
  assert.equal(context7.howTo[0].type === 'code' && context7.howTo[0].lang, 'bash');
  assert.deepEqual(serena.howTo.map((block) => block.type), ['code', 'text']);
  assert.ok(serena.howTo[1].value.startsWith('Then add the launch command'));
});

test('parseIndex assigns sections and titles in order', () => {
  const index = parseIndex('## A\n\n<page url="https://app.notion.com/p/abc">\nFoo & Bar\n</page>\n\n## B\n\n<page url="https://app.notion.com/p/def">\nBaz\n</page>');
  assert.deepEqual(index, [
    { id: 'abc', title: 'Foo & Bar', section: 'A' },
    { id: 'def', title: 'Baz', section: 'B' },
  ]);
});

const gh = (full_name: string, extra: Partial<GhStar> = {}): GhStar => ({
  starred_at: '2026-11-20T00:00:00Z', full_name, html_url: `https://github.com/${full_name}`,
  description: 'desc', language: 'Go', stargazers_count: 10, topics: [], homepage: null, ...extra,
});

test('merge matches case-insensitively and prefers GitHub numbers', () => {
  const data = merge([page], [gh('Upstash/Context7', { language: null, stargazers_count: 70000 })], '2026-11-24');
  const repo = data.repos.find((r) => r.slug === 'Upstash/Context7');
  assert.ok(repo);
  assert.equal(repo.hasNotes, true);
  assert.equal(repo.lang, null);
  assert.equal(repo.stars, 70000);
  assert.equal(repo.primaryCategory, 'mcp-servers');
});

test('merge puts un-noted stars into recently-starred and drops unstarred notes', () => {
  const data = merge([page], [gh('upstash/context7'), gh('new/repo', { description: null })], '2026-11-24');
  assert.equal(data.repos.length, 2);
  const fresh = data.repos.find((r) => r.slug === 'new/repo');
  assert.ok(fresh);
  assert.equal(fresh.hasNotes, false);
  assert.equal(fresh.primaryCategory, 'recently-starred');
  assert.equal(fresh.oneLiner, '');
  assert.equal(data.categories.find((c) => c.slug === 'recently-starred')?.count, 1);
  assert.equal(data.repos.some((r) => r.slug === 'oraios/serena'), false);
});

test('a repo in two lists appears once with both categories', () => {
  const other = parseCategoryPage(mini, 'ui-kits-design', 'Build & Ship', 7);
  const data = merge([other, page], [gh('upstash/context7')], '2026-11-24');
  assert.equal(data.repos.length, 1);
  assert.deepEqual(data.repos[0].categories, ['mcp-servers', 'ui-kits-design']);
  assert.equal(data.repos[0].primaryCategory, 'mcp-servers');
  assert.equal(data.categories.find((c) => c.slug === 'ui-kits-design')?.count, 1);
});

test('details parse when the page has no "## Details" heading', () => {
  const noHeading = mini.replace('## Details\n\n', '');
  const parsed = parseCategoryPage(noHeading, 'x', 'S', 0);
  assert.ok(parsed.entries.every((entry) => entry.what));
});

test('escaped underscores and auto-linked headings still match', () => {
  const tricky = mini
    .replace('[upstash/context7](https://github.com/upstash/context7)', '[up\\_stash/context7.dev](https://github.com/up_stash/context7.dev)')
    .replace('#### upstash/context7', '#### up\\_stash/[context7.dev](http://context7.dev)');
  const parsed = parseCategoryPage(tricky, 'x', 'S', 0);
  assert.equal(parsed.entries[0].slug, 'up_stash/context7.dev');
  assert.ok(parsed.entries[0].what.startsWith('Serves current'));
});

test('renamed repos match through the alias table', () => {
  const renamed = parseCategoryPage(mini.replaceAll('upstash/context7', 'trina-app/trina-ax'), 'x', 'S', 0);
  const data = merge([renamed], [gh('trina-app/trina-ax-cp')], '2026-11-24');
  assert.equal(data.repos[0].hasNotes, true);
});

test('bullet order, "How:" label, "What\'s inside" and bare link lines are handled', () => {
  const variant = mini.replace(
    /#### oraios\/serena[\s\S]*?(?=<\/content>)/,
    [
      '#### oraios/serena',
      '',
      '- [github](https://github.com/oraios/serena) · [docs](https://oraios.github.io/serena) · ⭐ 31.5k · Python',
      '- <b>What:</b> Coding toolkit.',
      "- <b>What's inside:</b> Lessons and quizzes.",
      '- <b>Reach for it when:</b> refactors.',
      '- <b>How:</b> <code>pip install serena</code>, then run it.',
      '',
    ].join('\n'),
  );
  const serena = parseCategoryPage(variant, 'x', 'S', 0).entries[1];
  assert.equal(serena.what, "Coding toolkit.\n\n<b>What's inside:</b> Lessons and quizzes.");
  assert.equal(serena.reachFor, 'refactors.');
  assert.deepEqual(serena.howTo, [{ type: 'text', value: '<code>pip install serena</code>, then run it.' }]);
  assert.deepEqual(serena.links, [{ label: 'docs', url: 'https://oraios.github.io/serena' }]);
});

test('the last entry of a group does not swallow the next group heading', () => {
  const twoGroups = mini.replace('#### oraios/serena', '### Another group\n\n#### oraios/serena');
  const context7 = parseCategoryPage(twoGroups, 'x', 'S', 0).entries[0];
  assert.equal(context7.reachFor, 'the agent writes code against a library whose API changed recently.');
});
