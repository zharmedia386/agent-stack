# The Agent Stack

Agent skills, MCP servers and open-source tools starred by [@zharmedia386](https://github.com/zharmedia386?tab=stars), each with notes on what it does, how to use it and when to reach for it.

Static [Astro](https://astro.build) site. Repo list comes from GitHub stars; notes and categories come from a Notion page.

## Develop

Requires Node ≥ 22.23.4 (Astro 7).

```bash
npm install
npm run dev        # local dev server
npm test           # unit tests (node --test)
npm run build      # static output in dist/
```

## Refresh data

1. Snapshot Notion pages into `data-raw/<list>.md` and stars into `data-raw/github-stars.json`:
   ```bash
   gh api --paginate -H "Accept: application/vnd.github.star+json" "user/starred?per_page=100" \
     | jq -s 'add | map({starred_at, full_name: .repo.full_name, html_url: .repo.html_url, description: .repo.description, language: .repo.language, stargazers_count: .repo.stargazers_count, topics: .repo.topics, homepage: .repo.homepage})' \
     > data-raw/github-stars.json
   ```
2. `npm run parse` rebuilds `src/data/stars.json` and fails if counts don't line up.
3. `npm run scan` checks the snapshots for tokens, local paths and private IPs.

Stars without Notion notes show under "Recently starred". Renamed repos go in `ALIASES` in `scripts/parse.ts`.
