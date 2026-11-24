# The Agent Stack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A static Astro site, "The Agent Stack", that showcases Azhar's GitHub stars with his Notion notes, styled after monveo.app and browsable like skillry.dev.

**Architecture:** Two committed snapshots (Notion markdown for 19 lists, GitHub starred JSON) are parsed by a Node script into `src/data/stars.json`. Astro renders home, 19+1 category pages and one page per repo. Filtering and search are vanilla JS over server-rendered cards.

**Tech Stack:** Astro 7.x, TypeScript, Astro built-in Shiki `<Code>`, Node's built-in test runner (`node --test`, native TS type stripping on Node 26). No other dependencies.

**Spec:** `docs/superpowers/specs/2026-11-24-github-stars-site-design.md`

## Global Constraints

- Run every node/npm/npx command with `PATH=/opt/homebrew/bin:$PATH` (Node 26). Astro 7 requires Node ≥22.23.4. `package.json` has `"engines": { "node": "24.x" }`.
- The only dependency is `astro`. Anything else needs Azhar's OK.
- ES modules, async/await, 2-space indent, TypeScript, one-line comments only where the why isn't obvious.
- Site name **The Agent Stack**. Subtitle: `{count} agent skills, MCP servers & open-source tools, hand-picked and annotated by zharmedia386` (linked to github.com/zharmedia386). `<title>` on home: `The Agent Stack · Agent Skills, MCP Servers & Open-Source Tools`. Counts always come from data.
- Fonts: Inter Tight 400 (display/UI), Plus Jakarta Sans (body), IBM Plex Mono (labels/code), via Google Fonts.
- Tokens (HSL): `--background 0 0% 100%`, `--foreground 240 5.9% 10%`, `--muted 240 4.8% 95.9%`, `--muted-foreground 240 3.8% 46.1%`, `--border 220 13% 91%`, `--ring 215 25% 27%`. Dark mode uses the zinc inverse (bg #09090B, surface #18181B, text #FAFAFA, border #27272A, muted-fg #A1A1AA).
- Text from Notion renders as written; never paraphrase.
- `.env`, `node_modules`, `dist`, `.vercel` are gitignored. No tokens in the repo.
- Never `git push` and never deploy to production without asking. Commit locally per task (Azhar's rule: one squashed commit when he asks to push).

## Review Focus

1. Notion text contains raw HTML tags (`<b>What:</b>`, `<code>…</code>`) and markdown escapes (`\~1.1 GB`). They must render as bold/code/plain text, never as escaped tags or stray backslashes. Test in Task 3.
2. "How to use" can be prose only, code only, or prose → code → prose (see serena, figma-mcp). Order must survive. Test in Task 2.
3. A GitHub repo with `language: null`, `description: null` or a renamed/case-changed `full_name` must not crash and must still match its Notion entry. Test in Task 2.
4. Search input with regex characters (`c++`, `(`, `.`) or an empty query after typing: no exceptions, and an empty query restores all cards. Test in Task 4.
5. At 390px the chip bar (20 chips) must scroll horizontally inside itself, not the page. Checked in Task 6 (Playwright: `document.documentElement.scrollWidth <= innerWidth`).

---

### Task 1: Scaffold, snapshots and secret scan

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/pages/index.astro` (placeholder)
- Create: `data-raw/_index.md`, `data-raw/<slug>.md` ×19, `data-raw/github-stars.json`
- Create: `scripts/scan.ts`, `scripts/scan.test.ts`

**Interfaces:**
- Produces: `data-raw/` files with fixed names; `scan(text: string): { pattern: string; match: string; line: number }[]`

- [ ] **Step 1:** Scaffold the project in `/Users/azhar/Documents/000_Exploration/web/github-stars` (the folder already holds `docs/`): `npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git --skip-houston`, then `npm i`. Add `engines`, plus the scripts `"test": "node --test scripts/"`, `"parse": "node scripts/parse.ts"`, `"scan": "node scripts/scan.ts"`. Set `site` in the Astro config to a placeholder `https://the-agent-stack.vercel.app`. Run `git init`.
- [ ] **Step 2: Notion snapshot.** With Notion MCP `notion-fetch`, fetch the root `41ce82f897e5816ca8c3c63f5560b847`, then each of the 19 subpage IDs listed on it. Write each page's `text` field content (inside `<content>…</content>`, plus the `<page … icon="…">` attribute line and the title) verbatim to `data-raw/<slug>.md`. Slug: kebab-case of the title, with `&`, `:` and `,` dropped and "(old tutorials)" kept as `-old-tutorials` (e.g. `mcp-servers`, `llm-infra-rag-memory-obs`). Save the root page as `_index.md`. Check: 20 files, and none contains `truncated` or `unknown_block`. If one is truncated, fetch its omitted block IDs and append them.
- [ ] **Step 3: GitHub snapshot.** Run `gh api --paginate -H "Accept: application/vnd.github.star+json" "user/starred?per_page=100" | jq -s 'add | map({starred_at, full_name: .repo.full_name, html_url: .repo.html_url, description: .repo.description, language: .repo.language, stargazers_count: .repo.stargazers_count, topics: .repo.topics, homepage: .repo.homepage})' > data-raw/github-stars.json`. Check: `jq length` prints the current star count (441 at plan time).
- [ ] **Step 4: Failing test** `scripts/scan.test.ts`: `scan('token ghp_' + 'a'.repeat(36))` has length 1; `scan('--github-api-key ghp_your_token')` has length 0; `scan('YOUR_API_KEY')` has length 0; `scan('/Users/azhar/x')` has length 1 with pattern `local-path`; `scan('figd_YOUR_TOKEN')` has length 0.
- [ ] **Step 5:** Run `npm test` and expect it to fail (the module is missing).
- [ ] **Step 6:** Implement `scan` in `scripts/scan.ts`. Patterns: `ghp_|gho_|github_pat_` followed by ≥30 `[A-Za-z0-9_]`; `sk-[A-Za-z0-9]{20,}`; `figd_[A-Za-z0-9_-]{30,}`; `xox[bp]-`; `/Users/`; IPs in private ranges (`10.`, `192.168.`, `172.16–31.`). When run as main, it scans every file in `data-raw/`, prints the hits, and exits 1 if there are any.
- [ ] **Step 7:** Run `npm test` and expect PASS. Run `npm run scan`. **If there are hits, stop and show them to Azhar before continuing.**
- [ ] **Step 8:** Commit with the message `chore: scaffold astro site and snapshot notion + github stars`.

### Task 2: Parser → `src/data/stars.json`

**Files:**
- Create: `scripts/parse.ts`, `scripts/parse.test.ts`, `scripts/fixtures/mini.md`, `src/data/types.ts`, `src/data/stars.json` (generated, committed)

**Interfaces:**
- Consumes: `data-raw/*` from Task 1.
- Produces (`src/data/types.ts`):
  ```ts
  export type Block = { type: 'text'; value: string } | { type: 'code'; lang: string; value: string };
  export type Repo = {
    slug: string; owner: string; name: string; url: string;
    links: { label: string; url: string }[];
    oneLiner: string; what: string; howTo: Block[]; reachFor: string;
    lang: string | null; stars: number; topics: string[]; starredAt: string;
    categories: string[]; primaryCategory: string; group: Record<string, string>;
    hasNotes: boolean;
  };
  export type Category = { slug: string; title: string; emoji: string; intro: string; section: string; groups: string[]; count: number; order: number };
  export type StarsData = { generatedAt: string; repos: Repo[]; categories: Category[] };
  ```
  `parse.ts` exports `parseCategoryPage(md: string, slug: string, section: string, order: number): { category: Category; entries: NotionEntry[] }`, `parseIndex(md: string): { slug: string; title: string; section: string }[]`, `merge(pages, gh): StarsData`, and `parseStarLabel(s: string): number`.
  `NotionEntry` = the `Repo` fields that come from Notion (`slug, links, oneLiner, what, howTo, reachFor, group`), local to `parse.ts`.

- [ ] **Step 1: Fixture.** `scripts/fixtures/mini.md` is copied from `data-raw/mcp-servers.md`, reduced to: intro, one overview group with 2 rows (upstash/context7, oraios/serena), and their two Details entries (serena has prose after its code block).
- [ ] **Step 2: Failing tests** in `scripts/parse.test.ts`:
  - `parseStarLabel('65.0k') === 65000`, `parseStarLabel('6') === 6`, `parseStarLabel('1.2m') === 1200000`.
  - Running `parseCategoryPage(mini, 'mcp-servers', 'Build & Ship', 3)` on the fixture:
    - `entries.length === 2`
    - `category.groups` deep-equals `['Code, docs & browser context']`
    - `entries[0].oneLiner === 'Up-to-date, version-specific library docs for agents'`
    - context7 `links` deep-equals `[{label:'context7.com', url:'https://context7.com'}]` (the github link is excluded)
    - context7 `howTo[0].type === 'code'` and `.lang === 'bash'`
    - serena `howTo.map(b => b.type)` deep-equals `['code','text']`
    - `what` keeps `<code>ctx7</code>` as-is (rendering is Task 3's job)
    - `reachFor` starts with `'the agent writes code'`
  - `merge` test:
    - GitHub has `Upstash/Context7` (case differs, `language: null`) and `new/repo` (no Notion entry); Notion has `upstash/context7` and `gone/repo` (not in GitHub).
    - Result: 2 repos. context7 has `hasNotes: true`, `lang: null`, and `stars` taken from GitHub.
    - `new/repo` has `hasNotes: false`, `primaryCategory: 'recently-starred'`, and `oneLiner` = its GitHub description, or `''` when that is null.
    - A `recently-starred` category exists with `count: 1`.
    - The same repo listed in two Notion pages yields one repo with `categories` of length 2, and `primaryCategory` = the lower `order`.
- [ ] **Step 3:** Run `npm test` and expect FAIL.
- [ ] **Step 4:** Implement `parse.ts`. Overview tables give `oneLiner` and the sub-group (from the preceding `<b>Group</b>` line). Details are split on `#### `. Bullets are matched by their labels (`<b>What:</b>`, `<b>How to use:</b>`, `<b>Reach for it when:</b>`). Everything between `How to use:` and the `Reach for it when` bullet becomes ordered blocks (fenced ``` blocks become code, other non-empty paragraphs become text, with the leading `- ` stripped). `parseIndex` reads `## Section` headings and the `<page url>` titles under them. The section for "Agent Skills & Rules" etc. is the last `##` seen above it. The emoji comes from the page `icon` attribute. The main block reads `data-raw`, writes `src/data/stars.json` with a 2-space indent, and logs: per-category entry count vs overview row count (exit 1 on mismatch), unmatched Notion slugs, the recently-starred count, and the total, which must equal `github-stars.json` length (exit 1 otherwise).
- [ ] **Step 5:** Run `npm test` and expect PASS. Then `npm run parse` must exit 0. Report the log numbers to Azhar in the task summary.
- [ ] **Step 6:** Commit with the message `feat: parse notion + github snapshots into stars.json`.

### Task 3: Inline formatter

**Files:**
- Create: `src/lib/inline-md.ts`, `src/lib/inline-md.test.ts` (add `src/lib/` to the `test` script)

**Interfaces:**
- Produces: `inlineMd(src: string): string` (safe HTML)

- [ ] **Step 1: Failing tests:**
  - `inlineMd('<b>x</b>') === '<strong>x</strong>'`
  - `inlineMd('<code>a<b</code>') === '<code>a&lt;b</code>'`
  - `inlineMd('[docs](https://x.dev)') === '<a href="https://x.dev" rel="noopener" target="_blank">docs</a>'`
  - `inlineMd('<script>alert(1)</script>')` contains no `<script`
  - `inlineMd('\\~1.1 GB') === '~1.1 GB'`
  - `inlineMd('[x](javascript:alert(1))')` contains no `href="javascript`
  - `` inlineMd('`npx a`') === '<code>npx a</code>' ``
- [ ] **Step 2:** Run the tests and expect FAIL.
- [ ] **Step 3:** Implement: escape everything first, then unescape the allowed pairs `&lt;b&gt;…&lt;/b&gt;` → `<strong>` and `&lt;code&gt;` → `<code>`, convert backtick code, convert `[t](http(s)://…)` links only, and drop `\` before punctuation.
- [ ] **Step 4:** Run the tests and expect PASS.
- [ ] **Step 5:** Commit with the message `feat: add safe inline formatter for notion text`.

### Task 4: Design system, layout and filter logic

**Files:**
- Create: `src/styles/tokens.css`, `src/layouts/Base.astro`, `src/lib/filter.ts`, `src/lib/filter.test.ts`, `src/scripts/browse.ts`

**Interfaces:**
- Produces:
  - `Base.astro` props `{ title: string; description: string; canonical?: string }`. It renders the fonts, tokens, a skip link, the floating theme toggle pill (sun/moon, `localStorage` key `theme` wrapped in try/catch, `data-theme` on `<html>`, default from `prefers-color-scheme`, inline head script to avoid a flash) and the footer ("Data from Notion + GitHub · snapshot {generatedAt}").
  - `filter.ts`: `type CardMeta = { cats: string[]; group: string; text: string }`; `matches(card: CardMeta, state: { q: string; cat: string | null; group: string | null }): boolean`; `countByCat(cards: CardMeta[], q: string): Record<string, number>`.
  - `browse.ts`: wires `#q`, `[data-chip]` and `[data-card]` (with `data-cats` comma-joined, `data-group`, `data-text`); syncs `?q=&c=&g=` through `history.replaceState`; updates `[data-count]` badges; shows `#empty` when 0 cards match.

- [ ] **Step 1: Failing tests:**
  - `matches({cats:['mcp-servers'],group:'Design & 3D',text:'figma context'}, {q:'FIGMA',cat:null,group:null}) === true`
  - with `cat:'ui-kits-design'` → `false`
  - `q:'c++'` does not throw
  - `q:'   '` behaves like an empty query → `true`
  - `countByCat` over 3 cards with `q:''` returns the right per-category counts plus `all`
- [ ] **Step 2:** Run the tests and expect FAIL. Implement using plain `includes` on lowercased trimmed text (no RegExp). Run the tests and expect PASS.
- [ ] **Step 3:** Write `tokens.css` from Global Constraints, plus: `--radius-card: 24px`, `--radius-tile: 16px`, `--glass-08..92` (white at .08, .1, .24, .48, .78, .92), and type scale display `clamp(40px, 6vw, 66px)/1.0`, h2 22/1.3, body 16/24. Tokens are redefined under `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme=light])`, and again under `[data-theme=dark]`. `body` gets an explicit background.
- [ ] **Step 4:** Run `npm run build` and expect it to succeed. Commit with the message `feat: add design tokens, base layout and filter logic`.

### Task 5: Home and category pages

**Files:**
- Create: `src/components/Hero.astro`, `ChipBar.astro`, `Card.astro`, `Grid.astro`, `src/pages/index.astro`, `src/pages/c/[category].astro`, `public/hero.jpg` (or the gradient fallback)

**Interfaces:**
- Consumes: `StarsData` (Task 2), `Base` + `browse.ts` + `inlineMd` (Tasks 3–4).
- Produces: `Card.astro` props `{ repo: Repo; categories: Category[] }`, reused on the detail page.

- [ ] **Step 1: Hero image.** Generate one wide (≥2400px) photographic image of a star field over a quiet landscape at dusk, with no text or people, and save it to `public/hero.jpg` (≤400 KB, also `hero.webp`). If no image tool is available, use the fallback: a CSS radial and linear gradient (deep navy → violet → amber horizon) with a 2% noise overlay. Note which one was used in the task summary.
- [ ] **Step 2: `Hero.astro`** (monveo pattern):
  - Announcement bar above: `{repos} repos · {lists} lists · updated {date}`.
  - Inset rounded card with the image (12px page inset, `--radius-card`).
  - Transparent nav on top: links Lists / Recently starred / GitHub ↗ on the left, the "The Agent Stack" wordmark in Inter Tight in the center, and a white "Browse all" pill on the right.
  - Headline "The Agent Stack" and subtitle per Global Constraints.
  - Two pills: primary "Browse all {n}" → `#browse`; glass "Starred on GitHub ↗" → `https://github.com/zharmedia386?tab=stars`.
  - Stats row at the bottom: total repos · lists · most-starred repo name + count · newest star. Laurel marks are inline SVG.
  - Text over the image sits on a bottom gradient scrim and must pass 4.5:1.
- [ ] **Step 3: `ChipBar.astro`.**
  - Sticky under the top of the page.
  - Horizontal scroll with `overflow-x:auto` and hidden scrollbar.
  - Chips are grouped by section with a small mono section label.
  - Each chip shows `{emoji} {title}` and a mono `data-count` badge.
  - When a chip is active on home, show an "Open list →" link to `/c/{slug}`.
  - On category pages it shows sub-group chips instead.
  - Search input `#q` with placeholder "Search 441 repos…" (the count comes from data).
- [ ] **Step 4: `Card.astro`** (skillry pattern):
  - Top row: mono category label + language tag.
  - Repo name `owner/`**`name`**.
  - `oneLiner` (2-line clamp), then `reachFor` muted (2-line clamp).
  - Footer: `@owner` · ★ formatted stars.
  - White surface, 1px border, `--radius-tile`, hover lift of 2px. The whole card is an `<a href="/r/{owner}/{name}">`.
  - `data-*` attributes as in Task 4.
- [ ] **Step 5: Pages.** `index.astro` uses Base + Hero + `<section id="browse">` ChipBar + Grid + `#empty` state ("No repos match. Clear search"). Repos are sorted by primary category `order`, then by stars descending. `c/[category].astro`: `getStaticPaths` over categories (including recently-starred); a compact hero (same card style, 40vh) with the emoji, title, intro via `inlineMd`, and count; sub-group chips; canonical self-link. The home page links each category to its canonical URL.
- [ ] **Step 5b: Motion.** Cards and section headers fade and rise by 8px once on entering view (IntersectionObserver, 300ms ease-out, max 40ms stagger). Disabled under `prefers-reduced-motion`.
- [ ] **Step 6:** Run `npm run build` and expect success with ≥21 pages. Commit with the message `feat: home and category pages`.

### Task 6: Repo detail page, 404 and verification

**Files:**
- Create: `src/components/CodeBlock.astro`, `src/pages/r/[owner]/[repo].astro`, `src/pages/404.astro`

**Interfaces:**
- Consumes: `Card`, `Base`, `inlineMd`, `StarsData`.

- [ ] **Step 1: `CodeBlock.astro`.** It wraps Astro `<Code code lang theme={{light:'github-light', dark:'github-dark'}}>`. Unknown languages fall back to `'txt'`. It has a mono lang label and a Copy button (`navigator.clipboard.writeText`, label flips to "Copied" for 1.5s, `aria-live="polite"`).
- [ ] **Step 2: Detail page.**
  - Breadcrumb: Home / {primary category}.
  - H1 `owner/name`, the oneLiner, and meta chips (lang, ★ stars, every category linked).
  - Link pills: GitHub plus extra `links`.
  - Sections **What**, **How to use** (blocks in order: text via `inlineMd`, code via CodeBlock) and **Reach for it when**. When `hasNotes` is false, show the GitHub description, topics, and "Notes coming soon".
  - "More in {group}" grid of up to 6 Cards per category the repo is in, excluding itself.
  - `<title>`: `{owner}/{name} · The Agent Stack`. Meta description = oneLiner.
- [ ] **Step 3: `404.astro`** shows "Not in the stack" with a link home.
- [ ] **Step 4: Build check.** Run `npm run build`. The page count = 2 + categories + repos. Run `npx astro check` and expect 0 errors.
- [ ] **Step 5: Playwright check** (`npm run preview`). Check `/`, `/c/mcp-servers` and `/r/upstash/context7` at 1200×800 and 390×844, in light and dark:
  - Screenshots, compared against `/Users/azhar/Documents/.playwright-mcp/monveo-hero.jpg` for hero feel.
  - `document.documentElement.scrollWidth <= innerWidth` holds.
  - Typing `figma` shows only Figma-related cards, and the URL has `?q=figma`.
  - Typing `c++` gives no console error.
  - The Copy button puts the snippet on the clipboard.
  - The theme toggle persists across reload.
  - Contrast of hero text checked with `mcp__plugin_antislop-contrast__check_contrast`.
- [ ] **Step 6: Quality pass.** Run the `impeccable` / `antislop-ui` audit over the pages and fix what it flags, but only within this spec.
- [ ] **Step 7:** Commit with the message `feat: repo detail pages and 404`.

### Task 7: Vercel preview

- [ ] **Step 1:** Run `npm run scan` again (it must be clean) and `npm run build`.
- [ ] **Step 2:** Run `vercel deploy` (preview, not `--prod`) from the project root. Expect a `*.vercel.app` preview URL. If the CLI isn't logged in, stop and tell Azhar.
- [ ] **Step 3:** Open the preview URL with Playwright and repeat the home check at 390px.
- [ ] **Step 4:** Hand the URL to Azhar. Production promotion and domain only on his say.
