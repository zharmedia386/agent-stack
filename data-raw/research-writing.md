<!-- id: 41ce82f897e581a38f0fc56556f9aa09 -->
<!-- emoji: 📝 -->
Here is the result of "fetch" for the Page with URL https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09 as of 2026-11-18T12:42:43.113Z:
<page url="https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09" icon="📝">
<ancestor-path></ancestor-path>
<properties>
{"title":"Research & Writing"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"📝"}</iconMetadata>
<content>
Tools and resources for research, academic writing and learning with AI. 7 repos.

## Overview

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e581efa0d4dd1d5d43144b) | Claude Code skills: research to final paper | Python | 57.4k |
| [Yuan1z0825/nature-skills](https://github.com/Yuan1z0825/nature-skills) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e581568988fd0db310e85c) | Skills for Nature-style writing and figures | Python | 54.0k |
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e5811a94d4cd5cd8c3dbb0) | Multi-agent interactive AI classroom | TypeScript | 43.9k |
| [Leey21/awesome-ai-research-writing](https://github.com/Leey21/awesome-ai-research-writing) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e5810a98e4e710290540e8) | Prompt templates and skills for paper writing | n/a | 36.0k |
| [stanford-oval/storm](https://github.com/stanford-oval/storm) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e581118965ca8a0d863cb4) | LLM system that writes cited, Wikipedia-style reports | Python | 31.9k |
| [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e5816ab4c1e1f9ce08288e) | Unofficial Python API/CLI for NotebookLM | Python | 20.3k |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) · [Details ↓](https://app.notion.com/p/41ce82f897e581a38f0fc56556f9aa09#41ce82f897e581bebb1df14fff550b01) | Multi-agent AI paper writer (to LaTeX) | Python | 3.5k |

## Details

#### Imbad0202/academic-research-skills

- Link: [github](https://github.com/Imbad0202/academic-research-skills)
- ⭐ 57.4k · Python
- <b>What:</b> Claude Code plugin covering the academic pipeline: research, writing, peer-review style critique, revision and finalizing.
- <b>How to use:</b>

```txt
/plugin marketplace add Imbad0202/academic-research-skills
/plugin install academic-research-skills
```

- <b>Reach for it when:</b> Writing a paper or literature review with Claude Code.

#### Yuan1z0825/nature-skills

- Link: [github](https://github.com/Yuan1z0825/nature-skills)
- ⭐ 54.0k · Python
- <b>What:</b> Agent skills (Chinese docs) for Nature-journal academic phrasing, paper reading and scientific figure making.
- <b>How to use:</b>

```bash
npx skills add Yuan1z0825/nature-skills --list
npx skills add Yuan1z0825/nature-skills --agent codex --skill nature-figure --yes --copy
```

- <b>Reach for it when:</b> Polishing a manuscript or figures toward high-impact journal style.

#### THU-MAIC/OpenMAIC

- Link: [github](https://github.com/THU-MAIC/OpenMAIC)
- ⭐ 43.9k · TypeScript
- <b>What:</b> Generates an interactive course with AI teacher and classmate agents from a topic or material, in one click.
- <b>How to use:</b>

```bash
git clone https://github.com/THU-MAIC/OpenMAIC.git
cd OpenMAIC
pnpm install
pnpm dev   # open http://localhost:3000
```

- <b>Reach for it when:</b> Turning material into an interactive lesson.

#### Leey21/awesome-ai-research-writing

- Link: [github](https://github.com/Leey21/awesome-ai-research-writing)
- ⭐ 36.0k · n/a
- <b>What:</b> Curated (Chinese) collection of prompts and agent skills used by researchers for translating, polishing and analyzing papers.
- <b>What's inside:</b> Part I: writing prompts (CN to EN LaTeX/Word translation, polishing, de-AI-ifying, logic checks). Part II: paper-writing agent skills with tutorials. Also links an arXiv LaTeX translator skill.
- <b>Reach for it when:</b> You need a ready polishing or translation prompt for a paper.

#### stanford-oval/storm

- Link: [github](https://github.com/stanford-oval/storm) · [homepage](http://storm.genie.stanford.edu)
- ⭐ 31.9k · Python
- <b>What:</b> STORM researches a topic via search, asks multi-perspective questions, and writes a full-length report with citations. Co-STORM adds human-in-the-loop.
- <b>How to use:</b>

```bash
pip install knowledge-storm
```

Configure an LM and a search retriever (e.g. Bing/[You.com](http://You.com) keys), then run STORMWikiRunner or the example scripts in the repo.

- <b>Reach for it when:</b> Getting a sourced first draft or overview on an unfamiliar topic.

#### teng-lin/notebooklm-py

- Link: [github](https://github.com/teng-lin/notebooklm-py)
- ⭐ 20.3k · Python
- <b>What:</b> Programmatic access to Google NotebookLM: create notebooks, add sources, generate outputs, plus an agent skill.
- <b>How to use:</b>

```bash
uv tool install "notebooklm-py[browser]"
notebooklm login
notebooklm auth check --test --json
```

- <b>Reach for it when:</b> Automating NotebookLM from scripts or an agent.

#### google-research/paper-orchestra

- Link: [github](https://github.com/google-research/paper-orchestra) · [homepage](https://yiwen-song.github.io/paper_orchestra/)
- ⭐ 3.5k · Python
- <b>What:</b> Google Research framework that turns ideas and experiment logs into a LaTeX manuscript: outline, literature review, sections, plots, refinement.
- <b>How to use:</b>

```bash
conda create -n paper_orchestra python=3.11
conda activate paper_orchestra
pip install -r requirements.txt
python paper_writing_cli.py ...   # arguments listed in README
```

- <b>Reach for it when:</b> Drafting an ML paper from your notes and results.
</content>
</page>