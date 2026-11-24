<!-- id: 41ce82f897e581fb9435d68bbc69989c -->
<!-- emoji: 🔌 -->
Here is the result of "fetch" for the Page with URL https://app.notion.com/p/41ce82f897e581fb9435d68bbc69989c as of 2026-11-18T12:42:40.047Z:
<page url="https://app.notion.com/p/41ce82f897e581fb9435d68bbc69989c" icon="🔌">
<ancestor-path></ancestor-path>
<properties>
{"title":"MCP Servers"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"🔌"}</iconMetadata>
<content>
Model Context Protocol servers that give coding agents extra tools. 2 repos. Usage shows the <code>claude mcp add</code> command.

## Overview

<b>Code, docs & browser context</b> (2)

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [upstash/context7](https://github.com/upstash/context7) · [Details ↓](https://app.notion.com/p/x#a) | Up-to-date, version-specific library docs for agents | TypeScript | 65.0k |
| [oraios/serena](https://github.com/oraios/serena) · [Details ↓](https://app.notion.com/p/x#b) | Symbol-level code retrieval \| editing via language servers | Python | 31.5k |

## Details

### Code, docs & browser context

#### upstash/context7

- Link: [github](https://github.com/upstash/context7) · [context7.com](https://context7.com)
- ⭐ 65.0k · TypeScript
- <b>What:</b> Serves current, version-specific documentation. Also a <code>ctx7</code> CLI.
- <b>How to use:</b>

```bash
npx ctx7 setup     # guided setup for your agent
```

- <b>Reach for it when:</b> the agent writes code against a library whose API changed recently.

#### oraios/serena

- Link: [github](https://github.com/oraios/serena) · [docs](https://oraios.github.io/serena)
- ⭐ 31.5k · Python
- <b>What:</b> Coding toolkit that uses language servers.
- <b>How to use:</b>

```bash
uv tool install -p 3.13 serena-agent
serena init
```

Then add the launch command to your client, following the [clients guide](https://oraios.github.io/serena/02-usage/030_clients.html).

- <b>Reach for it when:</b> you want IDE-grade refactors.
</content>
</page>
