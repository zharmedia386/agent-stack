# GitHub Stars Showcase — Design

Date: 2026-11-24 · Status: draft, awaiting approval

## Intent

Turn Azhar's Notion page "⭐ GitHub Stars" (439 starred repos, 19 categories, hand-written notes per repo) into a **public showcase website**. Visitors browse what Azhar uses and recommends (agent skills, MCP servers, coding agents, open-source tools) and copy the exact install/usage snippet. The Notion notes are the value; the site makes them browsable, linkable and good-looking.

## Goals

- Every repo from the Notion page present, with its notes intact: one-liner, What, How to use (code), Reach for it when, links, language, star count.
- Browse like skillry.dev/ai-videos: hero with total count, category filter chips with counts, card grid, detail view.
- Look and feel taken from monveo.app (tokens and patterns below), light + dark.
- One shareable URL per category and per repo.
- Static, deploys to Vercel with zero server code.

## Non-goals

- Live sync with Notion or GitHub at request time.
- Accounts, comments, likes, submissions.
- Pricing, sign-in, countdown banners, or other skillry/monveo marketing chrome that doesn't apply.
- CMS or admin UI.

## Anti-goals (failure even if it works)

- Pixel-copying monveo's brand: its logo, its hero photo, its copy. We take the design system, not the identity.
- Losing or paraphrasing Azhar's notes. Text renders as written.
- A slow grid: 439 cards must filter and search instantly on a phone.
- Secrets in the repo or client bundle.

## Constraints

- Astro 7.x (latest 7.4.13) needs Node ≥22.23.4. Local default node is 22.18, so run with `PATH=/opt/homebrew/bin:$PATH` (Node 26). Set `"engines": { "node": "24.x" }` in package.json for Vercel.
- No new dependencies beyond Astro itself without asking. Search and filtering use vanilla JS. Code highlighting uses Astro's built-in Shiki (`<Code>`).
- User style: ES modules, async/await, 2-space indent, TypeScript, minimal comments.
- Notion access: Notion MCP in Claude sessions (works now). A Notion API token is needed only for the optional later re-sync script; it lives in `.env` (gitignored).

## Approaches

| | Approach | Trade-off |
|---|---|---|
| **A, chosen** | Astro static site. Data snapshot pulled once via Notion MCP into `src/data/`. Static pages for home, categories and repos. | Snapshot goes stale until re-synced. |
| B | Single HTML artifact on claude.ai | Fast, but no own URL or SEO, and hard to maintain. |
| C | Next.js reading the Notion API live | Always fresh, but needs a runtime token and more code, and the site goes down when Notion does. |

**Picked A:** Notion notes change rarely, static output is fast, deploys free on Vercel, and gives one URL per repo.

## Data

### Source

Root page `41ce82f897e5816ca8c3c63f5560b847`, plus 19 category subpages (IDs on the root page). Each subpage has the same Notion-flavored markdown shape:

- Intro paragraph.
- `## Overview`, then `<b>Group</b>` headings, each followed by a table: Repo link · One-liner · Lang · ⭐.
- `## Details`, then `### Group`, then `#### owner/repo` per repo, with bullets: `Link:` (github + optional extras), `⭐ N · Lang`, `What:`, `How to use:` (prose and/or fenced code blocks, sometimes prose after the code), `Reach for it when:`.

The root page also groups categories into sections: "AI & Agents", "Build & Ship", "Learning & Misc", "Security & Data".

### Sources of truth (decided 2026-11-24)

- **Which repos:** GitHub stars of `zharmedia386` (https://github.com/zharmedia386?tab=stars), snapshotted with `gh api --paginate user/starred` into `data-raw/github-stars.json` (441 today). This also supplies fresh `stars`, `lang`, `description`, `topics` and `starred_at`.
- **Notes and categories:** Notion, matched by `owner/repo` (case-insensitive). If a repo was renamed, follow GitHub's redirect `full_name`.
- **Starred but not in Notion:** shown in a "Recently starred" category with GitHub's description as the one-liner and no detail sections (the detail page says "Notes coming soon").
- **In Notion but no longer starred:** dropped, and logged by the parser.
- **All 19 lists published.**

### Extraction

1. Fetch each of the 19 subpages with Notion MCP `notion-fetch`. Save the raw markdown to `data-raw/<slug>.md` and commit it, so it can be reparsed without Notion.
2. A Node script `scripts/parse.ts` turns `data-raw/*.md` into `src/data/stars.json`. The parser keeps "How to use" as ordered blocks (`{type:'text'|'code', lang?, value}`) so prose/code/prose order survives. Fail loudly when an entry is missing `What`.
3. Self-check in the parser: the repo count per category equals the overview table row count, and the merged total equals the GitHub star count; unmatched repos on either side are logged.

### Shape

```ts
type Block = { type: 'text'; value: string } | { type: 'code'; lang: string; value: string };
type Repo = {
  slug: string;            // "upstash/context7"
  name: string; owner: string;
  url: string;             // github url
  links: { label: string; url: string }[]; // extras: docs, site, npm…
  oneLiner: string;
  what: string;            // inline markdown (bold, code, links) kept as markdown
  howTo: Block[];
  reachFor: string;
  lang: string;
  stars: number;           // parsed from "65.0k" -> 65000
  starsLabel: string;      // "65.0k" as written
  categories: string[];    // category slugs; some repos sit in two
  group: Record<string, string>; // categorySlug -> sub-group name
};
type Category = { slug: string; title: string; emoji: string; intro: string; section: string; groups: string[]; count: number };
```

Inline markdown (bold, `code`, links) in text fields is rendered with a ~20-line local formatter. HTML is escaped first, then a small set of patterns is converted. No markdown library.

## Pages

- `/`: hero, stats strip, sticky category chip bar, search, full card grid (all 439), footer.
- `/c/[category]`: same layout. Category intro replaces the hero subtitle, and sub-group chips filter within the category. 19 pages.
- `/r/[owner]/[repo]`: detail page: name, one-liner, meta (lang, stars, categories as chips), links, What, How to use (Shiki code + copy button), Reach for it when, "More in <group>" cards. About 439 pages.
- `404`.

Filtering on `/` and `/c/*` is client-side. Every card is server-rendered, with `data-cat`, `data-group` and `data-text` (lowercased searchable text) attributes. Vanilla JS toggles `hidden`. Chip counts update with search. Query and chip state sync to the URL (`?q=&c=`) so a filtered view is shareable.

Card (skillry-style): category label + language tag at top, repo name (Inter Tight), one-liner, the first ~140 chars of "Reach for it when" as a muted line, footer `@owner` + ⭐ count. The whole card links to the detail page.

## Design system (reverse-engineered from monveo.app)

Measured from computed styles on 2026-11-24:

- **Fonts:** Inter Tight 400 for display/headings (hero 66px/1.0, h2 22px/1.3) and UI; Plus Jakarta Sans for body (16/24); IBM Plex Mono for labels, counts and code. Loaded from Google Fonts.
- **Tokens (shadcn HSL format):** `--background 0 0% 100%`, `--foreground 240 5.9% 10%` (#18181B), `--muted 240 4.8% 95.9%` (#F4F4F5), `--muted-foreground 240 3.8% 46.1%` (#71717A), `--border 220 13% 91%` (#E5E7EB), `--ring 215 25% 27%`. Dark mode is the inverse on the zinc scale (#09090B / #18181B surfaces, #FAFAFA text).
- **Glass overlays on imagery:** white at 8%, 10%, 24%, 48%, 78% and 92% opacity for nav text, pills and borders.
- **Shapes:** hero inside a rounded card (~24px radius) inset 12px from the viewport. Pill buttons (fully rounded, white fill / dark text for primary, `rgba(255,255,255,.1)` glass for secondary). Circular icon buttons. Floating light/dark toggle pill.
- **Layout patterns:** a thin announcement bar above the hero; transparent nav over the hero image (links left, logo centered, CTA right); a stats row with laurel-style badges at the bottom of the hero; light sections below with feature cards (white, 1px border, soft radius).
- **Motion:** subtle fades/rises on scroll, no heavy animation.

Mapping to this site:
- Announcement bar: "439 repos · 19 lists · updated 23 Nov 2026".
- Hero card: big Inter Tight headline, subtitle, two pills ("Browse all 439", "View on GitHub ↗"), and a stats row (repo count, list count, top category, most-starred repo).
- Below: section headers per root section ("AI & Agents", …) on the home page, and the chip bar plus grid.
- Theme toggle saved in `localStorage`, defaulting to `prefers-color-scheme`.

## Content reference (skillry.dev/ai-videos/opus-5-5)

Borrowed: count-led hero ("Browse 418 videos"), filter chips with counts, a dense card grid with a text excerpt, an `@author` line and tags. Not borrowed: pricing banner, sign-in, video players, compare mode.

## Tooling and skills

Already installed, none to add: `clone-website`/`remake` (reference for token extraction; already done above via Playwright), `design-taste-frontend` and `impeccable` (UI quality pass), `antislop-ui` and `antislop-human` (contrast and focus checks), `frontend-design`. Playwright MCP is used for visual verification against monveo screenshots at 1200px and 390px.

## Project layout

`/Users/azhar/Documents/000_Exploration/web/github-stars/`

```
data-raw/*.md          # Notion snapshots (committed)
scripts/parse.ts       # md -> src/data/stars.json (+ self-check)
src/data/stars.json
src/lib/inline-md.ts   # tiny escaped inline formatter
src/layouts/Base.astro # fonts, tokens, theme toggle
src/components/{Hero,ChipBar,Card,CodeBlock}.astro
src/pages/index.astro, c/[category].astro, r/[owner]/[repo].astro, 404.astro
src/styles/tokens.css
```

`git init` is done at scaffold time. `.gitignore` includes `.env`, `node_modules`, `dist`, `.vercel`.

## Verification

- Parser self-check passes (counts match the overview tables; merged total equals the GitHub stars snapshot).
- `astro check` and `astro build` are clean, and the page count is about 1 + 19 + unique repos + 404.
- Playwright: home, one category and one repo, at 1200px and 390px, in light and dark. No horizontal scroll. Search "figma" finds the Figma MCPs. Copy button works.
- Contrast check on text over the hero image.

## Builder's calls (not discussed; marked as Claude's proposal)

- Hero image: monveo uses a full-bleed photo. Our proposal is a generated abstract image (a field of stars/constellation over dark sky in a photographic style) saved as a local asset, with a CSS gradient fallback. No copying of monveo's photo.
- Site name (Claude's pick, Azhar may swap): **The Agent Stack**, with subtitle "441 agent skills, MCP servers & open-source tools, hand-picked and annotated by Azhar". `<title>`: "The Agent Stack · Agent Skills, MCP Servers & Open-Source Tools". Count in copy comes from data, not hardcoded. Domain: `*.vercel.app` until one is given.
- Sort order in the grid: by section/category order from Notion, then stars descending. Sorting control: none (scope).
- Deploy: Vercel preview via `vercel deploy` after approval of the built site. No production promotion without asking.
- Home grid is one flat grid. Root sections ("AI & Agents", …) only group the chips in the chip bar, not the cards.
- "439" means unique repos (the Notion root says some repos sit in two lists). A repo is deduplicated by slug. Its primary category is the first list it appears in, in Notion order, and that category sets its card label and sort position. The repo appears once in the home grid, and on each category page it belongs to. The detail page shows every category chip, plus one "More in <group>" block per category.
- Home chips filter in place (`?c=`) and show an "Open list →" link to `/c/[category]`. The `/c/*` page is the canonical URL for a category (`<link rel="canonical">`).
- Publish safety: before deploy, a scan over `data-raw/` for token-looking strings (`ghp_`, `sk-`, `figd_` with real-length values), absolute local paths (`/Users/`) and private hosts. Hits are reported to Azhar; placeholders like `YOUR_API_KEY` pass.
