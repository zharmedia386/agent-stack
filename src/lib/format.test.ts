import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatStars, plainText } from './format.ts';

test('formatStars abbreviates like GitHub', () => {
  assert.equal(formatStars(6), '6');
  assert.equal(formatStars(999), '999');
  assert.equal(formatStars(65000), '65.0k');
  assert.equal(formatStars(1234567), '1.2m');
});

test('plainText strips tags, link syntax and escapes for search text', () => {
  assert.equal(plainText('<b>What</b> [docs](https://x.dev) a\\_b'), 'What docs a_b');
});
