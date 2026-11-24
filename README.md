# The Agent Stack

Agent skills, MCP servers and open-source tools starred by [@zharmedia386](https://github.com/zharmedia386?tab=stars), each with notes on what it does, how to use it and when to reach for it.

Static [Astro](https://astro.build) site. Repo list comes from GitHub stars; notes and categories come from a Notion page.

## Develop

Requires Node ≥ 22.23.4 (Astro 7).

```bash
npm install
npm run dev        # local dev server
npm test           # unit tests (node --test)
npm run build      # parse data-raw/ into src/data/stars.json, then build dist/
```

## Refresh data

1. Snapshot Notion pages into `data-raw/<list>.md` (by hand, via Notion MCP) and stars with `npm run fetch:stars`.
2. `npm run parse` rebuilds `src/data/stars.json` and fails if counts don't line up.
3. `npm run scan` checks the snapshots for tokens, local paths and private IPs.

The `Sync GitHub stars` workflow runs this daily (fetch, parse, test, build) and pushes only when something changed; Vercel deploys the push.

Stars without Notion notes show under "Recently starred". Renamed repos go in `ALIASES` in `scripts/parse.ts`.
