import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inlineMd } from './inline-md.ts';

test('turns Notion <b> into strong', () => {
  assert.equal(inlineMd('<b>x</b>'), '<strong>x</strong>');
});

test('keeps <code> but escapes its content', () => {
  assert.equal(inlineMd('<code>a<b</code>'), '<code>a&lt;b</code>');
});

test('renders http links safely', () => {
  assert.equal(inlineMd('[docs](https://x.dev)'), '<a href="https://x.dev" rel="noopener" target="_blank">docs</a>');
});

test('escapes script tags', () => {
  assert.ok(!inlineMd('<script>alert(1)</script>').includes('<script'));
});

test('drops markdown escapes', () => {
  assert.equal(inlineMd('\\~1.1 GB'), '~1.1 GB');
});

test('refuses javascript: links', () => {
  assert.ok(!inlineMd('[x](javascript:alert(1))').includes('href="javascript'));
});

test('renders backtick code', () => {
  assert.equal(inlineMd('`npx a`'), '<code>npx a</code>');
});

test('keeps link URLs containing ampersands intact', () => {
  assert.equal(inlineMd('[a](https://x.dev/?a=1&b=2)'), '<a href="https://x.dev/?a=1&amp;b=2" rel="noopener" target="_blank">a</a>');
});

test('drops the backslash before any escaped punctuation, including $', () => {
  assert.equal(inlineMd('~\\$100'), '~$100');
});

test('renders Notion auto-links (text equals the bare URL) as plain text', () => {
  assert.equal(inlineMd('One [CLAUDE.md](http://CLAUDE.md) file'), 'One CLAUDE.md file');
  assert.equal(inlineMd('[getdesign.md](http://getdesign.md)'), 'getdesign.md');
});
