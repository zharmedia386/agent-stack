import { readFile, readdir, writeFile } from 'node:fs/promises';
import type { Block, Category, Link, Repo, StarsData } from '../src/data/types.ts';

export type GhStar = {
  starred_at: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  homepage: string | null;
};

type NotionEntry = Pick<Repo, 'slug' | 'links' | 'oneLiner' | 'what' | 'howTo' | 'reachFor'> & { group: string };
export type ParsedPage = { category: Category; entries: NotionEntry[]; overviewRows: number };

const RECENT = 'recently-starred';

// GitHub renamed these after the Notion snapshot; the API redirect isn't available offline.
const ALIASES: Record<string, string> = { 'trina-app/trina-ax': 'trina-app/trina-ax-cp' };

// Notion escapes "_" and auto-links domain-like names ("[x.dev](http://x.dev)").
const cleanSlug = (raw: string) => raw.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/\\(.)/g, '$1').trim();
const matchKey = (slug: string) => {
  const key = slug.toLowerCase();
  return ALIASES[key] ?? key;
};

export const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function parseStarLabel(label: string): number {
  const match = label.trim().toLowerCase().match(/^([\d.]+)\s*([km])?$/);
  if (!match) return 0;
  const multiplier = match[2] === 'm' ? 1_000_000 : match[2] === 'k' ? 1_000 : 1;
  return Math.round(Number(match[1]) * multiplier);
}

export function parseIndex(md: string): { id: string; title: string; section: string }[] {
  const pages: { id: string; title: string; section: string }[] = [];
  let section = '';
  for (const match of md.matchAll(/^## (.+)$|<page url="[^"]*\/p\/([0-9a-f]+)[^"]*">\s*\n([^\n]+)\n<\/page>/gm)) {
    if (match[1]) section = match[1].trim();
    else pages.push({ id: match[2], title: match[3].trim(), section });
  }
  return pages;
}

// Notion escapes literal pipes inside table cells as "\|".
const splitRow = (row: string) => row.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*(?<!\\)\|\s*/);

function parseHowTo(chunk: string): Block[] {
  const blocks: Block[] = [];
  const lines = chunk.split('\n');
  let prose: string[] = [];
  const flushProse = () => {
    const text = prose.join('\n').trim();
    if (text) {
      for (const paragraph of text.split(/\n\s*\n/)) {
        const value = paragraph.trim().replace(/^- /, '');
        if (value) blocks.push({ type: 'text', value });
      }
    }
    prose = [];
  };
  for (let index = 0; index < lines.length; index++) {
    const fence = lines[index].match(/^(\s*)```(\S*)/);
    if (!fence) {
      prose.push(lines[index]);
      continue;
    }
    flushProse();
    const indent = fence[1].length;
    const code: string[] = [];
    for (index++; index < lines.length && !/^\s*```\s*$/.test(lines[index]); index++) {
      code.push(lines[index].slice(Math.min(indent, lines[index].search(/\S|$/))));
    }
    blocks.push({ type: 'code', lang: fence[2] || 'txt', value: code.join('\n') });
  }
  flushProse();
  return blocks;
}

function parseDetail(body: string) {
  const linkLine = body.split('\n').find((line) => line.startsWith('- ') && line.includes('[github](')) ?? '';
  const links: Link[] = [...linkLine.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)]
    .map((match) => ({ label: match[1], url: match[2] }))
    .filter((link) => link.label.toLowerCase() !== 'github');

  // Notion entries use "- <b>Label:</b>" bullets in varying order; each section runs to the next label.
  const sections: Record<string, string> = {};
  const labels = [...body.matchAll(/^- <b>([^<]+):<\/b>/gm)];
  labels.forEach((match, index) => {
    const from = match.index + match[0].length;
    const to = labels[index + 1]?.index ?? body.length;
    sections[match[1].trim()] = body.slice(from, to).trim();
  });

  const inside = sections["What's inside"];
  return {
    links,
    what: [sections.What ?? '', inside ? `<b>What's inside:</b> ${inside}` : ''].filter(Boolean).join('\n\n'),
    howTo: parseHowTo(sections['How to use'] ?? sections.How ?? ''),
    reachFor: sections['Reach for it when'] ?? '',
  };
}

export function parseCategoryPage(md: string, slug: string, section: string, order: number): ParsedPage {
  const content = md.slice(md.indexOf('<content>') + '<content>'.length, md.lastIndexOf('</content>'));
  const title = JSON.parse(md.match(/<properties>\s*([\s\S]*?)\s*<\/properties>/)?.[1] ?? '{}').title ?? slug;
  const emoji = md.match(/^<!-- emoji: (.+) -->$/m)?.[1] ?? '';
  const intro = content.trim().split('\n')[0].trim();
  const detailsStart = content.search(/^#{3,4} /m);
  const overview = detailsStart < 0 ? content : content.slice(0, detailsStart);
  const details = detailsStart < 0 ? '' : content.slice(detailsStart);

  const groups: string[] = [];
  const rows: { slug: string; oneLiner: string; group: string }[] = [];
  let group = '';
  for (const line of overview.split('\n')) {
    const groupMatch = line.match(/^<b>(.+?)<\/b>/);
    if (groupMatch) {
      group = groupMatch[1].trim();
      groups.push(group);
      continue;
    }
    const rowMatch = line.match(/^\| \[([^\]]+)\]\(https:\/\/github\.com\//);
    if (rowMatch) rows.push({ slug: cleanSlug(rowMatch[1]), oneLiner: splitRow(line)[1] ?? '', group });
  }

  const detailBySlug = new Map<string, string>();
  for (const chunk of details.split(/^#### /m).slice(1)) {
    const newline = chunk.indexOf('\n');
    const body = chunk.slice(newline + 1);
    const groupHeading = body.search(/^#{2,3} |^---\s*$/m);
    detailBySlug.set(cleanSlug(chunk.slice(0, newline)).toLowerCase(), groupHeading < 0 ? body : body.slice(0, groupHeading));
  }

  const entries = rows.map((row) => ({
    slug: row.slug,
    oneLiner: row.oneLiner,
    group: row.group,
    ...parseDetail(detailBySlug.get(row.slug.toLowerCase()) ?? ''),
  }));

  return {
    category: { slug, title, emoji, intro, section, groups, count: entries.length, order },
    entries,
    overviewRows: rows.length,
  };
}

export function merge(pages: ParsedPage[], stars: GhStar[], generatedAt: string): StarsData {
  const sorted = [...pages].sort((a, b) => a.category.order - b.category.order);
  const notes = new Map<string, { entry: NotionEntry; cats: { slug: string; group: string }[] }>();
  for (const page of sorted) {
    for (const entry of page.entries) {
      const key = matchKey(entry.slug);
      const existing = notes.get(key);
      if (existing) existing.cats.push({ slug: page.category.slug, group: entry.group });
      else notes.set(key, { entry, cats: [{ slug: page.category.slug, group: entry.group }] });
    }
  }

  const repos: Repo[] = stars.map((star) => {
    const [owner, name] = star.full_name.split('/');
    const note = notes.get(star.full_name.toLowerCase());
    const base = {
      slug: star.full_name, owner, name, url: star.html_url,
      lang: star.language, stars: star.stargazers_count, topics: star.topics ?? [], starredAt: star.starred_at,
    };
    if (!note) {
      return {
        ...base, links: star.homepage ? [{ label: 'site', url: star.homepage }] : [],
        oneLiner: star.description ?? '', what: '', howTo: [], reachFor: '',
        categories: [RECENT], primaryCategory: RECENT, group: {}, hasNotes: false,
      };
    }
    const { entry, cats } = note;
    return {
      ...base, links: entry.links, oneLiner: entry.oneLiner, what: entry.what, howTo: entry.howTo, reachFor: entry.reachFor,
      categories: cats.map((cat) => cat.slug), primaryCategory: cats[0].slug,
      group: Object.fromEntries(cats.map((cat) => [cat.slug, cat.group])), hasNotes: true,
    };
  });

  const categories = sorted.map((page) => ({
    ...page.category,
    count: repos.filter((repo) => repo.categories.includes(page.category.slug)).length,
  }));
  const recentCount = repos.filter((repo) => repo.primaryCategory === RECENT).length;
  if (recentCount) {
    categories.push({
      slug: RECENT, title: 'Recently starred', emoji: '✨',
      intro: 'Starred after the last Notion update. Notes coming soon.',
      section: 'New', groups: [], count: recentCount, order: Number.MAX_SAFE_INTEGER,
    });
  }

  const orderOf = new Map(categories.map((category) => [category.slug, category.order]));
  repos.sort((a, b) => orderOf.get(a.primaryCategory)! - orderOf.get(b.primaryCategory)! || b.stars - a.stars);
  return { generatedAt, repos, categories };
}

// The root page's "##" headings sit one slot off from the lists they introduce, so sections are assigned here.
const SECTIONS: Record<string, string> = {
  'agent-skills-rules': 'AI & Agents', 'coding-agents-harnesses': 'AI & Agents', 'mcp-servers': 'AI & Agents',
  'llm-infra-rag-memory-obs': 'AI & Agents', 'ai-media-video-voice-image': 'AI & Agents',
  'code-quality-dev-tools': 'Build & Ship', 'ui-kits-design': 'Build & Ship', 'diagrams-visuals': 'Build & Ship',
  'self-hosted-devops': 'Build & Ship', 'laravel-php': 'Build & Ship', 'flutter-mobile': 'Build & Ship',
  'whatsapp-chatbots': 'Build & Ship',
  'cybersecurity': 'Security & Data', 'scraping-browser-osint': 'Security & Data', 'cv-ml-old-tutorials': 'Security & Data',
  'research-writing': 'Learning & Misc', 'learning-awesome-lists': 'Learning & Misc',
  'python-gui-old-tutorials': 'Learning & Misc', 'misc': 'Learning & Misc',
};

if (import.meta.main) {
  const index = parseIndex(await readFile('data-raw/_index.md', 'utf8'));
  const files = new Set(await readdir('data-raw'));
  let failed = false;
  const pages: ParsedPage[] = [];
  for (const [order, item] of index.entries()) {
    const slug = slugify(item.title);
    if (!files.has(`${slug}.md`)) throw new Error(`missing data-raw/${slug}.md`);
    const page = parseCategoryPage(await readFile(`data-raw/${slug}.md`, 'utf8'), slug, SECTIONS[slug] ?? item.section, order);
    const missingWhat = page.entries.filter((entry) => !entry.what).map((entry) => entry.slug);
    const detailCount = page.entries.length - missingWhat.length;
    console.log(`${slug.padEnd(28)} rows ${page.overviewRows}  details ${detailCount}`);
    if (missingWhat.length) {
      failed = true;
      console.error(`  missing What: ${missingWhat.join(', ')}`);
    }
    pages.push(page);
  }

  const stars: GhStar[] = JSON.parse(await readFile('data-raw/github-stars.json', 'utf8'));
  const data = merge(pages, stars, new Date().toISOString().slice(0, 10));
  const starred = new Set(stars.map((star) => star.full_name.toLowerCase()));
  const dropped = [...new Set(pages.flatMap((page) => page.entries.map((entry) => entry.slug)))]
    .filter((slug) => !starred.has(matchKey(slug)));
  const recent = data.repos.filter((repo) => !repo.hasNotes).map((repo) => repo.slug);
  console.log(`dropped (in Notion, not starred): ${dropped.length} ${dropped.join(', ')}`);
  console.log(`recently starred (no notes): ${recent.length} ${recent.join(', ')}`);
  console.log(`total repos: ${data.repos.length} / github stars: ${stars.length}`);
  if (data.repos.length !== stars.length) failed = true;

  await writeFile('src/data/stars.json', JSON.stringify(data, null, 2) + '\n');
  if (failed) process.exit(1);
}
