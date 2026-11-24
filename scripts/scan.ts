import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type Hit = { pattern: string; match: string; line: number };

const patterns: [string, RegExp][] = [
  ['github-token', /\b(?:ghp|gho|ghs|github_pat)_[A-Za-z0-9_]{30,}/g],
  ['openai-key', /\bsk-[A-Za-z0-9_-]{20,}/g],
  ['figma-token', /\bfigd_[A-Za-z0-9_-]{30,}/g],
  ['slack-token', /\bxox[bp]-[A-Za-z0-9-]{10,}/g],
  ['local-path', /\/Users\/[^\s/]+/g],
  ['private-ip', /\b(?:10\.\d{1,3}|192\.168|172\.(?:1[6-9]|2\d|3[01]))\.\d{1,3}\.\d{1,3}\b/g],
];

export function scan(text: string): Hit[] {
  const hits: Hit[] = [];
  text.split('\n').forEach((lineText, index) => {
    for (const [pattern, regex] of patterns) {
      for (const match of lineText.matchAll(regex)) hits.push({ pattern, match: match[0], line: index + 1 });
    }
  });
  return hits;
}

if (import.meta.main) {
  const dir = 'data-raw';
  let total = 0;
  for (const file of await readdir(dir)) {
    for (const hit of scan(await readFile(join(dir, file), 'utf8'))) {
      total++;
      console.log(`${file}:${hit.line} [${hit.pattern}] ${hit.match}`);
    }
  }
  console.log(total ? `${total} hit(s)` : 'scan clean');
  process.exit(total ? 1 : 0);
}
