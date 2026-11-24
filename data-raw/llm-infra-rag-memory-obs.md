<!-- id: 41ce82f897e581af84eae8726a1b83bd -->
<!-- emoji: 🧠 -->
Here is the result of "fetch" for the Page with URL https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd as of 2026-11-18T12:44:29.527Z:
<page url="https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd" icon="🧠">
<ancestor-path></ancestor-path>
<properties>
{"title":"LLM Infra: RAG, Memory, Obs"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"🧠"}</iconMetadata>
<content>
Plumbing around LLMs: gateways and local runtimes, token compression for coding agents, agent memory, RAG and document parsing, observability, plus a few model and learning repos. 31 repos.

## Overview

<b>Gateways, UIs & local runtimes</b>

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58196aa05eb3244117e08) | Self-hosted ChatGPT-style UI for Ollama and OpenAI-compatible APIs | Svelte | 159.0k |
| [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58185926fe742017099be) | Local AI gateway: one endpoint over hundreds of providers, with free-tier routing | TypeScript | 88.5k |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58151980adc95c45ad49d) | Call 100+ LLM APIs in OpenAI format; SDK and proxy with cost tracking | Python | 63.5k |
| [router-for-me/CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581649a93ed0b0db62732) | Expose Claude Code / Codex / Gemini CLI subscriptions as an OpenAI/Claude-compatible API | Go | 58.9k |
| [mudler/LocalAI](https://github.com/mudler/LocalAI) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581869ce3dee483d304f1) | Self-hosted OpenAI-compatible server for LLMs, images, audio; CPU OK | Go | 50.4k |
| [superdesigndev/treg](https://github.com/superdesigndev/treg) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581dfb0bdf0a79291f51a) | "OpenRouter for agent tools": one CLI/account to call paid third-party tool APIs | Python | 8.4k |
| [terry3041/pyChatGPT](https://github.com/terry3041/pyChatGPT) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581b1bed7c9c7f7482a96) | Old unofficial Python wrapper for the ChatGPT web app | Python | 1.3k |

<b>Token & context compression for agents</b>

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [rtk-ai/rtk](https://github.com/rtk-ai/rtk) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581d69cc4dd3d624557c6) | CLI proxy that compresses shell output (git, tests, ls) before the agent reads it | Rust | 87.0k |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581ea860af8289e2442d3) | Compresses tool outputs, logs and RAG chunks before they hit the LLM | Python | 80.0k |
| [yamadashy/repomix](https://github.com/yamadashy/repomix) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e5813c8982e91bbf44d3e9) | Packs a whole repo into one AI-friendly file | TypeScript | 29.3k |
| [yvgude/lean-ctx](https://github.com/yvgude/lean-ctx) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e5810b8c85da77bcad572a) | Context gateway / MCP server with cached, compressed file reads for agents | Rust | 4.0k |

<b>Agent memory</b>

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581e8844aeab712de9d69) | Records agent sessions, compresses them and re-injects context next time | TypeScript | 118.1k |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58144bf34fd5993afe992) | Memory layer library/API for AI agents and apps | Python | 69.2k |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581a19492fe1efd8e17f9) | Context database for agents: memory, RAG resources and skills in one store | Python | 42.4k |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581e18e58c3ac0a44e0e2) | Open-source memory platform building a knowledge graph + vectors from your data | Python | 33.4k |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58191b28cd1a4c5bd27c3) | Memory and context API + app, usable via MCP | TypeScript | 31.7k |

<b>RAG, retrieval & document parsing</b>

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e5816eaeacd65c59579f77) | Convert PDF, Office, HTML, images etc. to Markdown | Python | 196.3k |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581c4a19be09ce4332b4f) | Turn a codebase + docs into a queryable knowledge graph; /graphify agent skill | Python | 149.8k |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58192aaafeedd96e19386) | Self-hosted RAG engine with deep document parsing and agent workflows | Go | 94.4k |
| [run-llama/llama\_index](https://github.com/run-llama/llama_index) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e5817da2c8c0492b715d9c) | Framework for indexing data and building RAG / agent apps | Python | 52.9k |
| [datalab-to/marker](https://github.com/datalab-to/marker) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58106945ee7e47e0a14f2) | Fast, accurate PDF to Markdown/JSON converter | Python | 41.0k |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58127b959dba234910c93) | Vectorless RAG: builds a tree index of a document, LLM reasons over it | Python | 40.5k |
| [tobi/qmd](https://github.com/tobi/qmd) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e5818b8075f6bca11c46ba) | Local CLI search engine for notes/docs: BM25 + vectors + rerank, has MCP | TypeScript | 31.2k |
| [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581f2a815d16dfff071d4) | Multimodal RAG (text, images, tables, equations) on top of LightRAG | Python | 24.6k |
| [zilliztech/attu](https://github.com/zilliztech/attu) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e5813291d7e8bb5e69d34e) | Web GUI for the Milvus vector database | Shell | 3.2k |

<b>Observability</b>

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [langfuse/langfuse](https://github.com/langfuse/langfuse) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581ae810ad2ee116f417b) | Open-source LLM tracing, evals, prompt management (self-hostable) | TypeScript | 37.6k |
| [latitude-dev/latitude-llm](https://github.com/latitude-dev/latitude-llm) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581fa829ac02974cae343) | Observability for AI agents: find failures in traces, verify fixes | TypeScript | 4.8k |
| [langfuse/langfuse-python](https://github.com/langfuse/langfuse-python) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581ea8d66f895f02da6f8) | Python SDK for Langfuse | Python | 0.5k |

<b>Models & learning</b>

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [deepseek-ai/DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e58172bda5e25bc59a7128) | Model card/paper repo for the DeepSeek-R1 reasoning models | – | 92.0k |
| [karpathy/nanochat](https://github.com/karpathy/nanochat) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581768a15f64203283235) | Full ChatGPT-style training pipeline in a small codebase, \~\$100 run | Python | 60.6k |
| [KalyanKS-NLP/llm-engineer-toolkit](https://github.com/KalyanKS-NLP/llm-engineer-toolkit) · [Details ↓](https://app.notion.com/p/41ce82f897e581af84eae8726a1b83bd#41ce82f897e581d6aaaac6adcfc7f439) | Curated list of 120+ LLM libraries by category | – | 11.1k |

## Details

### Gateways, UIs & local runtimes

#### open-webui/open-webui

- Link: [github](https://github.com/open-webui/open-webui) · [openwebui.com](https://openwebui.com)
- ⭐ 159.0k · Svelte
- <b>What:</b> Self-hosted chat UI that talks to Ollama and any OpenAI-compatible API. Has users, RAG over uploaded docs, tools and model presets.
- <b>How to use:</b>

```bash
pip install open-webui
open-webui serve   # then open http://localhost:8080
# or Docker
docker run -d -p 3000:8080 -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main
```

- <b>Reach for it when:</b> you want a ChatGPT-like web UI on top of local or self-chosen models.

#### cheaper-inference/OmniRoute

- Link: [github](https://github.com/cheaper-inference/OmniRoute) · [omniroute.online](https://omniroute.online)
- ⭐ 88.5k · TypeScript
- <b>What:</b> Local AI gateway with a dashboard. You connect providers (many with free tiers), get one OpenAI-compatible endpoint, and it routes/falls back between them. Also exposes an MCP server.
- <b>How to use:</b>

```bash
npm install -g omniroute
omniroute            # dashboard + API on http://localhost:20128

curl http://localhost:20128/v1/chat/completions \
  -H "Authorization: Bearer YOUR_OMNIROUTE_KEY" -H "Content-Type: application/json" \
  -d '{"model":"auto","messages":[{"role":"user","content":"Hello!"}]}'
```

- <b>Reach for it when:</b> you want Claude Code / Cursor / scripts to hit one endpoint that juggles many providers and free quotas.

#### BerriAI/litellm

- Link: [github](https://github.com/BerriAI/litellm) · [docs](https://docs.litellm.ai/docs/)
- ⭐ 63.5k · Python
- <b>What:</b> Python SDK and proxy server that calls 100+ LLM providers through the OpenAI request format, with cost tracking, budgets, fallbacks and load balancing.
- <b>How to use:</b>

```py
# pip install litellm
from litellm import completion
resp = completion(model="anthropic/claude-sonnet-4-5", messages=[{"role": "user", "content": "hi"}])
print(resp.choices[0].message.content)
```

- <b>Reach for it when:</b> your code must swap providers freely, or a team needs one gateway with keys, spend limits and logs.

#### router-for-me/CLIProxyAPI

- Link: [github](https://github.com/router-for-me/CLIProxyAPI)
- ⭐ 58.9k · Go
- <b>What:</b> Proxy server that logs into CLI subscriptions (Claude Code, Codex, Gemini, Antigravity, Grok, Kimi…) via OAuth and serves them as OpenAI / Gemini / Claude-compatible APIs, with multi-account rotation. Desktop wrapper: EasyCLIProxyAPI.
- <b>How to use:</b> 1) download a release binary (or Docker image), 2) edit <code>config.yaml</code> and sign in to each provider account via its OAuth login, 3) point any OpenAI/Claude client at the local endpoint. See the repo docs for exact flags.
- <b>Reach for it when:</b> you want to reuse a coding-plan subscription from tools that only accept an API key.

#### mudler/LocalAI

- Link: [github](https://github.com/mudler/LocalAI) · [localai.io](https://localai.io)
- ⭐ 50.4k · Go
- <b>What:</b> Self-hosted, OpenAI-compatible API server that runs LLMs, embeddings, image, audio and video models on local hardware, GPU optional.
- <b>How to use:</b>

```bash
docker run -p 8080:8080 --name local-ai -ti localai/localai:latest
# then use http://localhost:8080/v1 as the OpenAI base URL
```

- <b>Reach for it when:</b> you need a drop-in local replacement for the OpenAI API.

#### superdesigndev/treg

- Link: [github](https://github.com/superdesigndev/treg) · [treg.to](https://treg.to)
- ⭐ 8.4k · Python
- <b>What:</b> A registry + CLI for paid third-party tool APIs (scrapers, SEO, social data…). One login and balance, tools found by what they do, billed per call. Ships agent skills and a Claude Code plugin.
- <b>How to use:</b>

```bash
curl -fsSL https://treg.to/install.sh | sh
treg login
treg catalog search "backlinks for a domain"
treg call tikhub.tiktok.user.profile --query uniqueId=tiktok
```

- <b>Reach for it when:</b> an agent needs an external data API and you don't want to sign up for each vendor.

#### terry3041/pyChatGPT

- Link: [github](https://github.com/terry3041/pyChatGPT)
- ⭐ 1.3k · Python
- <b>What:</b> Unofficial wrapper that drove the ChatGPT web app with a session token (pre-official-API era). Likely broken today.
- <b>How to use:</b> <code>pip install pyChatGPT</code>, then <code>ChatGPT(session_token).send_message("...")</code>. Use the official OpenAI SDK instead.
- <b>Reach for it when:</b> only as historical reference.

### Token & context compression for agents

#### rtk-ai/rtk

- Link: [github](https://github.com/rtk-ai/rtk) · [rtk-ai.app](https://www.rtk-ai.app)
- ⭐ 87.0k · Rust
- <b>What:</b> Single-binary CLI proxy. A hook rewrites agent shell commands (<code>git status</code> → <code>rtk git status</code>) and returns compact summaries of test runs, diffs, logs and builds, cutting tokens 60–90%.
- <b>How to use:</b>

```bash
brew install rtk
rtk init -g     # register the Claude Code hook, then restart the agent
rtk gain        # see tokens saved
```

- <b>Reach for it when:</b> your coding agent burns context on noisy command output.

#### headroomlabs-ai/headroom

- Link: [github](https://github.com/headroomlabs-ai/headroom) · [docs](https://docs.headroomlabs.ai/docs)
- ⭐ 80.0k · Python
- <b>What:</b> Compresses tool outputs, logs, files and RAG chunks before they reach the model. Runs as a wrapper around a coding agent, a local proxy, or an inline library.
- <b>How to use:</b>

```bash
uv tool install --python 3.13 "headroom-ai[all]"
headroom wrap claude              # wrap a coding agent
headroom proxy --port 8787        # or run as a drop-in proxy
```

- <b>Reach for it when:</b> you want fewer tokens per request without changing app code.

#### yamadashy/repomix

- Link: [github](https://github.com/yamadashy/repomix) · [repomix.com](https://repomix.com)
- ⭐ 29.3k · TypeScript
- <b>What:</b> Packs a repository into a single XML/Markdown/plain file with a file tree, respecting .gitignore, with token counts.
- <b>How to use:</b>

```bash
npx repomix                          # writes repomix-output.xml in the current repo
npx repomix --remote yamadashy/repomix   # pack a remote GitHub repo
```

- <b>Reach for it when:</b> you want to paste a whole codebase into a chat model.

#### yvgude/lean-ctx

- Link: [github](https://github.com/yvgude/lean-ctx) · [leanctx.com](https://leanctx.com)
- ⭐ 4.0k · Rust
- <b>What:</b> Context gateway for agents: an MCP server and shell layer with cached, mode-based file reads (map, signatures, diff…), compact search and recorded context metrics.
- <b>How to use:</b>

```bash
brew tap yvgude/lean-ctx && brew install lean-ctx
lean-ctx wrap claude    # or: wrap cursor / wrap codex
lean-ctx doctor
```

- <b>Reach for it when:</b> you want agents to read less and re-read cheaply on big repos.

### Agent memory

#### thedotmack/claude-mem

- Link: [github](https://github.com/thedotmack/claude-mem) · [claude-mem.ai](https://claude-mem.ai)
- ⭐ 118.1k · TypeScript
- <b>What:</b> Plugin that captures what the agent does in each session, compresses it with an LLM, and injects the relevant bits into future sessions.
- <b>How to use:</b>

```bash
npx claude-mem install
# or inside Claude Code:
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

- <b>Reach for it when:</b> you want Claude Code to remember past work across sessions without manual notes.

#### mem0ai/mem0

- Link: [github](https://github.com/mem0ai/mem0) · [mem0.ai](https://mem0.ai)
- ⭐ 69.2k · Python
- <b>What:</b> Memory layer for agents and apps: extracts facts from conversations, stores them per user/agent, and retrieves relevant ones later. Library or hosted platform.
- <b>How to use:</b>

```py
# pip install mem0ai
from mem0 import Memory
m = Memory()
m.add("I'm vegetarian and allergic to nuts", user_id="alice")
print(m.search("what can alice eat?", user_id="alice"))
```

- <b>Reach for it when:</b> you are building a chatbot/agent that should remember users between sessions.

#### volcengine/OpenViking

- Link: [github](https://github.com/volcengine/OpenViking) · [openviking.ai](https://openviking.ai)
- ⭐ 42.4k · Python
- <b>What:</b> Context database for agents that keeps memory, knowledge resources and skills in one filesystem-like store (<code>viking://</code> paths), with session archiving and memory extraction.
- <b>How to use:</b>

```bash
uv tool install openviking --upgrade && openviking-server init
ov status
ov add-resource https://github.com/volcengine/OpenViking
ov ls viking://resources/
```

- <b>Reach for it when:</b> you want one self-hosted backend for agent memory plus RAG instead of separate tools.

#### topoteretes/cognee

- Link: [github](https://github.com/topoteretes/cognee) · [cognee.ai](https://www.cognee.ai)
- ⭐ 33.4k · Python
- <b>What:</b> Memory engine that turns your data into a knowledge graph plus vector index, then lets agents search it.
- <b>How to use:</b>

```py
# pip install cognee
import cognee, asyncio
async def main():
    await cognee.add("Natural language processing is a subfield of AI.")
    await cognee.cognify()
    print(await cognee.search("What is NLP?"))
asyncio.run(main())
```

- <b>Reach for it when:</b> you want graph-based long-term memory rather than plain vector search.

#### supermemoryai/supermemory

- Link: [github](https://github.com/supermemoryai/supermemory) · [docs](https://supermemory.ai/docs)
- ⭐ 31.7k · TypeScript
- <b>What:</b> Memory and context API (plus a consumer app) that can run locally or hosted; exposes memory to AI clients over MCP.
- <b>How to use:</b> add the hosted MCP server to your client:

```json
{
  "mcpServers": {
    "supermemory": { "url": "https://mcp.supermemory.ai/mcp" }
  }
}
```

- <b>Reach for it when:</b> you want shared memory across ChatGPT/Claude/Cursor or a memory API for an app.

### RAG, retrieval & document parsing

#### microsoft/markitdown

- Link: [github](https://github.com/microsoft/markitdown)
- ⭐ 196.3k · Python
- <b>What:</b> Converts PDF, Word, Excel, PowerPoint, HTML, images, audio and more into Markdown for LLM input. Also has an MCP server.
- <b>How to use:</b>

```bash
pip install 'markitdown[all]'
markitdown report.pdf -o report.md
```

- <b>Reach for it when:</b> you need quick, decent Markdown from office docs for a prompt or RAG pipeline.

#### Graphify-Labs/graphify

- Link: [github](https://github.com/Graphify-Labs/graphify) · [graphify.com](https://www.graphify.com)
- ⭐ 149.8k · Python
- <b>What:</b> Builds a knowledge graph from a codebase and its docs, schemas, configs and PDFs. Installs as a <code>/graphify</code> skill for Claude Code, Cursor, Codex, Gemini.
- <b>How to use:</b>

```bash
uv tool install graphifyy     # or: pipx install graphifyy
graphify install              # registers the skill in your assistant
# then in the agent:
/graphify .
# output: graphify-out/graph.html, GRAPH_REPORT.md, graph.json
```

- <b>Reach for it when:</b> onboarding to an unfamiliar repo or asking architecture questions across many files.

#### infiniflow/ragflow

- Link: [github](https://github.com/infiniflow/ragflow) · [ragflow.io](https://ragflow.io)
- ⭐ 94.4k · Go
- <b>What:</b> Self-hosted RAG engine with layout-aware document parsing, chunk inspection, citations, and an agent/workflow builder in a web UI.
- <b>How to use:</b>

```bash
git clone https://github.com/infiniflow/ragflow.git
cd ragflow/docker
docker compose -f docker-compose.yml up -d   # then open the web UI
```

- <b>Reach for it when:</b> you want a full RAG product (UI + API) over messy PDFs without writing the pipeline.

#### run-llama/llama\_index

- Link: [github](https://github.com/run-llama/llama_index) · [docs](https://developers.llamaindex.ai)
- ⭐ 52.9k · Python
- <b>What:</b> Framework for loading, indexing and querying your data with LLMs; connectors, retrievers, agents and workflows.
- <b>How to use:</b>

```py
# pip install llama-index
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
docs = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(docs)
print(index.as_query_engine().query("What is this about?"))
```

- <b>Reach for it when:</b> you are coding a custom RAG or document agent in Python.

#### datalab-to/marker

- Link: [github](https://github.com/datalab-to/marker) · [datalab.to](https://www.datalab.to)
- ⭐ 41.0k · Python
- <b>What:</b> Deep-learning PDF (and DOCX, EPUB, images…) converter to Markdown/JSON that handles tables, equations and layout well.
- <b>How to use:</b>

```bash
pip install marker-pdf
marker_single paper.pdf --output_dir out/
```

- <b>Reach for it when:</b> markitdown output is too rough for complex PDFs (papers, tables, math).

#### VectifyAI/PageIndex

- Link: [github](https://github.com/VectifyAI/PageIndex) · [pageindex.ai](https://pageindex.ai)
- ⭐ 40.5k · Python
- <b>What:</b> "Vectorless" RAG: builds a table-of-contents style tree of a long document, then an LLM navigates the tree to find answers instead of using embeddings.
- <b>How to use:</b>

```py
# pip install -U pageindex   (needs an LLM API key, e.g. OPENAI_API_KEY)
from pageindex import PageIndexClient
client = PageIndexClient(index="<model>", chat="<model>")
doc_id = client.submit_document("report.pdf")["doc_id"]
print(client.chat("What was the 2023 operating margin?", doc_id=doc_id))
```

- <b>Reach for it when:</b> long structured docs (financial reports, manuals) where chunk+embed retrieval misses context.

#### tobi/qmd

- Link: [github](https://github.com/tobi/qmd)
- ⭐ 31.2k · TypeScript
- <b>What:</b> Local search engine for Markdown notes and docs. Combines BM25, vector search and LLM re-ranking with local GGUF models. Has an MCP server.
- <b>How to use:</b>

```bash
npm install -g @tobilu/qmd
qmd collection add ~/notes --name notes
qmd embed
qmd query "quarterly planning process"
# MCP: {"mcpServers": {"qmd": {"command": "qmd", "args": ["mcp"]}}}
```

- <b>Reach for it when:</b> you want an agent (or yourself) to search a personal knowledge base fully offline.

#### HKUDS/RAG-Anything

- Link: [github](https://github.com/HKUDS/RAG-Anything) · [paper](http://arxiv.org/abs/2510.12323)
- ⭐ 24.6k · Python
- <b>What:</b> Multimodal RAG framework built on LightRAG. Parses documents with images, tables and equations and indexes them into a knowledge graph.
- <b>How to use:</b> <code>pip install 'raganything[all]'</code>, then create <code>RAGAnything(config=RAGAnythingConfig(...), llm_model_func=..., embedding_func=...)</code> and call its document processing and query methods (see README example; it wires OpenAI functions from LightRAG).
- <b>Reach for it when:</b> your RAG corpus is PDFs/slides where figures and tables matter.

#### zilliztech/attu

- Link: [github](https://github.com/zilliztech/attu)
- ⭐ 3.2k · Shell
- <b>What:</b> Web admin GUI for Milvus: browse collections, run vector searches, manage indexes and users.
- <b>How to use:</b>

```bash
docker run -d --name attu -p 3000:3000 \
  -e MILVUS_ADDRESS=host.docker.internal:19530 \
  -v attu-data:/data zilliz/attu:v3.0.0
```

- <b>Reach for it when:</b> you run Milvus and want to inspect data without writing code.

### Observability

#### langfuse/langfuse

- Link: [github](https://github.com/langfuse/langfuse) · [langfuse.com](https://langfuse.com)
- ⭐ 37.6k · TypeScript
- <b>What:</b> Open-source LLM engineering platform: traces, evals, datasets, prompt management, cost tracking. OpenTelemetry-based, self-hostable or cloud.
- <b>How to use:</b>

```bash
git clone https://github.com/langfuse/langfuse.git
cd langfuse && docker compose up    # UI on http://localhost:3000
```

- <b>Reach for it when:</b> you need to see what your LLM app or agent actually did, per request.

#### latitude-dev/latitude-llm

- Link: [github](https://github.com/latitude-dev/latitude-llm) · [latitude.so](https://latitude.so)
- ⭐ 4.8k · TypeScript
- <b>What:</b> Observability for AI agents focused on finding failure patterns in traces, handing them to a coding agent to fix, and checking the fix against real traces.
- <b>How to use:</b>

```bash
npm install @latitude-data/telemetry                  # instrument your app
npx -y @latitude-data/claude-code-telemetry install   # or trace Claude Code sessions
```

- <b>Reach for it when:</b> you want an error-monitoring style loop for agent failures.

#### langfuse/langfuse-python

- Link: [github](https://github.com/langfuse/langfuse-python) · [docs](https://langfuse.com/docs/observability/sdk/overview)
- ⭐ 0.5k · Python
- <b>What:</b> Python SDK for Langfuse: <code>@observe</code> decorator, OpenAI/LangChain integrations, manual spans.
- <b>How to use:</b>

```py
# pip install langfuse  (set LANGFUSE_PUBLIC_KEY, LANGFUSE_SECRET_KEY, LANGFUSE_HOST)
from langfuse import observe

@observe()
def answer(question: str) -> str:
    ...
```

- <b>Reach for it when:</b> sending traces from a Python app to Langfuse.

### Models & learning

#### deepseek-ai/DeepSeek-R1

- Link: [github](https://github.com/deepseek-ai/DeepSeek-R1)
- ⭐ 92.0k · –
- <b>What:</b> Release repo (paper, model card, links) for DeepSeek-R1, the open-weight RL-trained reasoning model, and its distilled Qwen/Llama variants. No code to install.
- <b>How to use:</b> download weights from Hugging Face and serve with vLLM/SGLang, or run a distilled size locally, e.g. <code>ollama run deepseek-r1</code>.
- <b>Reach for it when:</b> you need an open reasoning model or want to read how R1 was trained.

#### karpathy/nanochat

- Link: [github](https://github.com/karpathy/nanochat)
- ⭐ 60.6k · Python
- <b>What:</b> Minimal, hackable end-to-end pipeline (tokenizer, pretraining, midtraining, SFT, RL, eval, web chat UI) to train a small ChatGPT clone for about \$100.
- <b>How to use:</b> on an 8×H100 node, clone the repo and run <code>bash speedrun.sh</code> (\~4 hours), then serve the chat UI with the provided web script.
- <b>Reach for it when:</b> learning how an LLM chat model is built end to end.

#### KalyanKS-NLP/llm-engineer-toolkit

- Link: [github](https://github.com/KalyanKS-NLP/llm-engineer-toolkit)
- ⭐ 11.1k · –
- <b>What:</b> Awesome-list of 120+ LLM libraries grouped by task.
- <b>What's inside:</b> training & fine-tuning, serving/inference, RAG, agents, evaluation, prompt engineering, structured output, safety, data extraction, app frameworks.
- <b>Reach for it when:</b> looking for a library for a specific LLM task.
</content>
</page>