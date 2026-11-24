import { test } from 'node:test';
import assert from 'node:assert/strict';
import { matches, countByCat, type CardMeta } from './filter.ts';

const figma: CardMeta = { cats: ['mcp-servers'], group: 'Design & 3D', text: 'figma context' };
const all = { q: '', cat: null, group: null };

test('search is case-insensitive', () => {
  assert.equal(matches(figma, { ...all, q: 'FIGMA' }), true);
});

test('category filter excludes other categories', () => {
  assert.equal(matches(figma, { ...all, q: 'figma', cat: 'ui-kits-design' }), false);
});

test('group filter applies', () => {
  assert.equal(matches(figma, { ...all, group: 'Design & 3D' }), true);
  assert.equal(matches(figma, { ...all, group: 'Other' }), false);
});

test('regex characters do not throw', () => {
  assert.doesNotThrow(() => matches(figma, { ...all, q: 'c++ (' }));
  assert.equal(matches(figma, { ...all, q: 'c++' }), false);
});

test('whitespace-only query matches everything', () => {
  assert.equal(matches(figma, { ...all, q: '   ' }), true);
});

test('countByCat counts per category and all', () => {
  const cards: CardMeta[] = [
    figma,
    { cats: ['mcp-servers', 'ui-kits-design'], group: 'x', text: 'shadcn figma' },
    { cats: ['misc'], group: 'y', text: 'other' },
  ];
  assert.deepEqual(countByCat(cards, ''), { all: 3, 'mcp-servers': 2, 'ui-kits-design': 1, misc: 1 });
  assert.deepEqual(countByCat(cards, 'figma'), { all: 2, 'mcp-servers': 2, 'ui-kits-design': 1 });
});
