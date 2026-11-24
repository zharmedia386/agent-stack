import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tilePose } from './corridor.ts';

test('tiles fade in at the start of the path and out at the end', () => {
  assert.equal(tilePose(0, 700, 800, 0, 0).opacity, 0);
  assert.equal(tilePose(0.5, 700, 800, 0, 0).opacity, 1);
  assert.ok(tilePose(0.995, 700, 800, 0, 0).opacity < 0.1);
});

test('tiles grow and come forward as they travel', () => {
  const near = tilePose(0.8, 700, 800, 0, 0);
  const far = tilePose(0.2, 700, 800, 0, 0);
  assert.ok(near.scale > far.scale);
  assert.ok(near.z > far.z);
});

test('tiles travel from bottom-left to top-right', () => {
  const start = tilePose(0.1, 700, 800, 0, 0);
  const end = tilePose(0.9, 700, 800, 0, 0);
  assert.ok(end.x > start.x);
  assert.ok(end.y < start.y);
});

test('pointer tilts the tile and transform is compositor-only', () => {
  const still = tilePose(0.5, 700, 800, 0, 0);
  const tilted = tilePose(0.5, 700, 800, 1, 0);
  assert.notEqual(still.transform, tilted.transform);
  assert.match(still.transform, /^translate3d\(/);
});
