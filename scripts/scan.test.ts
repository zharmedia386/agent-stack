import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scan } from './scan.ts';

test('flags a real-length GitHub token', () => {
  assert.equal(scan('token ghp_' + 'a'.repeat(36)).length, 1);
});

test('ignores placeholder tokens', () => {
  assert.equal(scan('--github-api-key ghp_your_token').length, 0);
  assert.equal(scan('YOUR_API_KEY').length, 0);
  assert.equal(scan('figd_YOUR_TOKEN').length, 0);
});

test('flags absolute local paths', () => {
  const hits = scan('see /Users/azhar/x');
  assert.equal(hits.length, 1);
  assert.equal(hits[0].pattern, 'local-path');
  assert.equal(hits[0].line, 1);
});

test('flags private IPs', () => {
  assert.equal(scan('host 192.168.1.20').length, 1);
  assert.equal(scan('version 10.2').length, 0);
});
