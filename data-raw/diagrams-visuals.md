<!-- id: 41ce82f897e581c98ce5f1036934906c -->
<!-- emoji: 📐 -->
Here is the result of "fetch" for the Page with URL https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c as of 2026-11-18T12:42:32.266Z:
<page url="https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c" icon="📐">
<ancestor-path></ancestor-path>
<properties>
{"title":"Diagrams & Visuals"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"📐"}</iconMetadata>
<content>
Diagram tools, whiteboards and agent skills that turn code or ideas into visuals. 13 repos.

## Overview

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581de8653f5c927c6d4c0) | Turn a codebase into a queryable knowledge graph | Python | 149.8k |
| [excalidraw/excalidraw](https://github.com/excalidraw/excalidraw) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e58186a148d5eed69446f9) | Hand-drawn style whiteboard | TypeScript | 135.9k |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581779ff7d21ce2e6240c) | Agent skill for interactive architecture diagrams | JavaScript | 97.6k |
| [Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e58179a204eadb601d506a) | Codebase to interactive, explainable knowledge graph | TypeScript | 93.1k |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581d1a101e26314622b78) | Diagrams from markdown-like text | TypeScript | 91.1k |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e58167abeada0d86ce1ba5) | Editorial-style diagrams as self-contained HTML+SVG | HTML | 68k |
| [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e58124a6e0c4060ed7119c) | Isometric explainer illustrations of systems | JavaScript | 28k |
| [nicobailon/visual-explainer](https://github.com/nicobailon/visual-explainer) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581eaafc3cc9eda03625a) | Agent output as styled HTML pages and slides | JavaScript | 11.2k |
| [caru-ini/stack-diagram](https://github.com/caru-ini/stack-diagram) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581ef90aefac59d4fd59b) | Stack sentence to architecture diagram with logos | TypeScript | 2.6k |
| [laramint/laravel-brain](https://github.com/laramint/laravel-brain) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581af955cc40692e604ec) | Interactive graph of a Laravel app request lifecycle | PHP | 941 |
| [getartisanflow/wireflow](https://github.com/getartisanflow/wireflow) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581998079d9488869fd31) | Livewire components for AlpineFlow | PHP | 98 |
| [getartisanflow/alpineflow](https://github.com/getartisanflow/alpineflow) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e58197b853d7ea436f42d6) | Flowchart / node-graph engine for Alpine.js | TypeScript | 67 |
| [bjornleonhenry/workflow-builder](https://github.com/bjornleonhenry/workflow-builder) · [Details ↓](https://app.notion.com/p/41ce82f897e581c98ce5f1036934906c#41ce82f897e581bea4e1f7323b191cf0) | React Flow based visual workflow builder | TypeScript | 7 |

## Details

#### Graphify-Labs/graphify

- Link: [github](https://github.com/Graphify-Labs/graphify) · [homepage](https://www.graphify.com)
- ⭐ 149.8k · Python
- <b>What:</b> Skill + CLI that maps code (tree-sitter, fully local), docs, PDFs and media into a knowledge graph with community detection. Agents query the graph instead of grepping files; outputs an interactive graph.html.
- <b>How to use:</b>

```bash
uv tool install graphifyy   # or: pipx install graphifyy
graphify install            # registers the skill in your assistant
```

- Then type <code>/graphify</code> in your agent. CLI queries: <code>graphify explain "APIRouter"</code>, <code>graphify path "A" "B"</code>.
- <b>Reach for it when:</b> onboarding to a big codebase or cutting agent token use on repeated exploration.

#### excalidraw/excalidraw

- Link: [github](https://github.com/excalidraw/excalidraw) · [homepage](https://excalidraw.com)
- ⭐ 135.9k · TypeScript
- <b>What:</b> Open-source whiteboard for sketchy diagrams and wireframes, with live collaboration and end-to-end encryption. Also an embeddable React component.
- <b>How to use:</b>

```bash
npm install react react-dom @excalidraw/excalidraw
```

```javascript
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
<div style={{ height: 600 }}><Excalidraw /></div>
```

- Or just use [excalidraw.com](http://excalidraw.com).
- <b>Reach for it when:</b> quick whiteboarding, or embedding a drawing canvas in your app.

#### tt-a1i/archify

- Link: [github](https://github.com/tt-a1i/archify) · [homepage](https://archify.si)
- ⭐ 97.6k · JavaScript
- <b>What:</b> Skill for Claude Code, Codex, Cursor and OpenCode that turns a description, plan or repo into an interactive diagram with source links and path tracing.
- <b>How to use:</b>

```txt
Install Archify for me by reading https://raw.githubusercontent.com/tt-a1i/archify/main/llms.txt
```

- Then: "Use Archify to diagram a web request: Browser calls the API, the API checks Redis..."
- <b>Reach for it when:</b> you need a clickable system diagram from a sentence or from your repo.

#### Egonex-AI/Understand-Anything

- Link: [github](https://github.com/Egonex-AI/Understand-Anything) · [homepage](https://understand-anything.com/)
- ⭐ 93.1k · TypeScript
- <b>What:</b> Claude Code plugin (also Codex, Cursor, Copilot, Gemini CLI) that analyses a project with multiple agents and builds a graph of files, functions and business domains you can search and ask about.
- <b>How to use:</b>

```txt
/plugin marketplace add Egonex-AI/Understand-Anything
/plugin install understand-anything
```

- Then run <code>/understand</code>, and <code>/understand-dashboard</code> to open the viewer. Other commands: <code>/understand-chat</code>, <code>/understand-domain</code>, <code>/understand-onboard</code>.
- <b>Reach for it when:</b> learning an unfamiliar codebase visually, including its business flows.

#### mermaid-js/mermaid

- Link: [github](https://github.com/mermaid-js/mermaid) · [homepage](https://mermaid.ai/open-source/)
- ⭐ 91.1k · TypeScript
- <b>What:</b> Renders flowcharts, sequence, class, state, ER, Gantt and more from text. Built into GitHub, GitLab, Notion and many doc tools.
- <b>How to use:</b>

```bash
npm install mermaid
```

```txt
flowchart LR
  A[Client] --> B[API]
  B --> C[(DB)]
```

- In GitHub markdown, put that text in a fenced block tagged <code>mermaid</code>. Live editor: [mermaid.live](http://mermaid.live).
- <b>Reach for it when:</b> you want diagrams versioned as text next to code.

#### cathrynlavery/diagram-design

- Link: [github](https://github.com/cathrynlavery/diagram-design) · [homepage](https://diagramdesign.dev)
- ⭐ 68k · HTML
- <b>What:</b> Agent skill with \~50 diagram types (architecture, quadrant, sequence...) that outputs one clean HTML file. Can onboard your site to match brand colors and fonts.
- <b>How to use:</b>

```bash
npx skills add cathrynlavery/diagram-design
```

- Ask: "Make me an architecture diagram of my app: frontend, backend, database, Redis cache."
- <b>Reach for it when:</b> you want presentation-quality diagrams instead of default Mermaid looks.

#### wheresryan22/anatomy

- Link: [github](https://github.com/wheresryan22/anatomy) · [homepage](https://skills.wheresryan.sh/anatomy)
- ⭐ 28k · JavaScript
- <b>What:</b> Agent skill that explains a technical idea by inventing a physical machine for it and drawing it as an animated isometric SVG card (optional WebGL/3D).
- <b>How to use:</b>

```bash
npx skills add wheresryan22/anatomy -g
```

- Then: <code>/anatomy explain how a token bucket rate limiter works, interactive</code>
- <b>Reach for it when:</b> a blog post or doc needs a memorable visual of how something works.

#### nicobailon/visual-explainer

- Link: [github](https://github.com/nicobailon/visual-explainer)
- ⭐ 11.2k · JavaScript
- <b>What:</b> Skill that makes the agent answer with rich HTML (diagrams, tables, slide decks) instead of ASCII. Includes <code>/diff-review</code> and <code>/plan-review</code> commands.
- <b>How to use:</b>

```txt
/plugin marketplace add nicobailon/visual-explainer
/plugin install visual-explainer@visual-explainer-marketplace
```

- Then: "draw a diagram of our authentication flow" or <code>/diff-review</code>.
- <b>Reach for it when:</b> terminal tables/ASCII diagrams are too cramped to review.

#### caru-ini/stack-diagram

- Link: [github](https://github.com/caru-ini/stack-diagram) · [homepage](https://stacks.caru.moe)
- ⭐ 2.6k · TypeScript
- <b>What:</b> Agent skill: describe your stack in a sentence and get an architecture diagram using official service logos.
- <b>How to use:</b>

```bash
npx skills add caru-ini/stack-diagram
```

- Ask: "Diagram our stack: Next.js and a Hono API on Vercel. Postgres on Neon, auth with Clerk..."
- <b>Reach for it when:</b> a README or pitch needs a clean stack diagram fast.

#### laramint/laravel-brain

- Link: [github](https://github.com/laramint/laravel-brain) · [homepage](https://laravel-brain.laramint.dev/)
- ⭐ 941 · PHP
- <b>What:</b> Dev package that statically scans a Laravel app (routes, controllers, services, models, jobs, events, Filament, scheduler) and serves a node graph at <code>/_laravel-brain</code>. Has an MCP server too.
- <b>How to use:</b>

```bash
composer require --dev laramint/laravel-brain
```

- Run the scan per README, then open <code>/_laravel-brain</code> in your app.
- <b>Reach for it when:</b> onboarding to or auditing a Laravel codebase.

#### getartisanflow/wireflow

- Link: [github](https://github.com/getartisanflow/wireflow) · [homepage](https://artisanflow.dev)
- ⭐ 98 · PHP
- <b>What:</b> Laravel package that wraps AlpineFlow in Blade/Livewire components so you build flow diagrams with server-side state and no hand-written JS.
- <b>How to use:</b>

```bash
composer require getartisanflow/wireflow
php artisan wireflow:install
```

- Add the <code>WithWireFlow</code> trait to a Livewire component (see README).
- <b>Reach for it when:</b> you need a node/flow editor inside a Laravel Livewire app.

#### getartisanflow/alpineflow

- Link: [github](https://github.com/getartisanflow/alpineflow) · [homepage](https://artisanflow.dev)
- ⭐ 67 · TypeScript
- <b>What:</b> Directive-driven node editor for Alpine.js (like React Flow for Alpine): nodes, edges, layouts (dagre, elk, d3), animation and Yjs collaboration.
- <b>How to use:</b>

```bash
npm install @getartisanflow/alpineflow alpinejs
```

```javascript
import Alpine from 'alpinejs';
import AlpineFlow from '@getartisanflow/alpineflow';
Alpine.plugin(AlpineFlow);
Alpine.start();
```

- Then use <code>x-data="flowCanvas({ nodes, edges })"</code> with <code>x-flow-viewport</code> and <code>x-flow-node</code>.
- <b>Reach for it when:</b> you need a node-based editor in an Alpine/Laravel stack without React.

#### bjornleonhenry/workflow-builder

- Link: [github](https://github.com/bjornleonhenry/workflow-builder) · [homepage](https://workflow-builder.bjornleonhenry.com)
- ⭐ 7 · TypeScript
- <b>What:</b> Next.js 15 + React Flow + shadcn app with drag-and-drop nodes, conditional branches and a code editor for node config. A demo/starter, not a library.
- <b>How to use:</b>

```bash
git clone https://github.com/bjornleonhenry/workflow-builder.git
cd workflow-builder && npm install && npm run dev
```

- <b>Reach for it when:</b> you want a starting point for an n8n-style editor in React.
</content>
</page>