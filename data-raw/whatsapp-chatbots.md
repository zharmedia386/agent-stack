<!-- id: 41ce82f897e58145816bc318b58098d6 -->
<!-- emoji: 💬 -->
Here is the result of "fetch" for the Page with URL https://app.notion.com/p/41ce82f897e58145816bc318b58098d6 as of 2026-11-18T12:38:08.669Z:
<page url="https://app.notion.com/p/41ce82f897e58145816bc318b58098d6" icon="💬">
<ancestor-path></ancestor-path>
<properties>
{"title":"WhatsApp & Chatbots"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"💬"}</iconMetadata>
<content>
WhatsApp client libraries and HTTP APIs, a support desk, a chatbot framework and a few older bot projects. 10 repos.

## Overview

| Repo | One-liner | Lang | ⭐ |
| --- | --- | --- | --- |
| [chatwoot/chatwoot](https://github.com/chatwoot/chatwoot) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e58193b014fc68525fdd66) | Open-source omnichannel support desk (Intercom/Zendesk alternative) | Ruby | 40.1k |
| [wwebjs/whatsapp-web.js](https://github.com/wwebjs/whatsapp-web.js) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e5812b9af1d0149de8d346) | Node.js WhatsApp client driving WhatsApp Web via Puppeteer | JavaScript | 22.9k |
| [RasaHQ/rasa](https://github.com/RasaHQ/rasa) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e581bea686cde9b58dedca) | ML framework for text and voice assistants (NLU + dialogue) | Python | 21.4k |
| [WhiskeySockets/Baileys](https://github.com/WhiskeySockets/Baileys) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e5815aa905f89395e32d16) | WebSocket-based TypeScript API for WhatsApp Web (no browser) | JavaScript | 11.7k |
| [tulir/whatsmeow](https://github.com/tulir/whatsmeow) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e581909ac8daf837d1e761) | Go library for the WhatsApp Web multi-device API | Go | 7.9k |
| [devlikeapro/waha](https://github.com/devlikeapro/waha) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e581b7a5d4e8d4dc807202) | WhatsApp HTTP API in a Docker container, multiple engines | TypeScript | 7.8k |
| [aldinokemal/go-whatsapp-web-multidevice](https://github.com/aldinokemal/go-whatsapp-web-multidevice) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e581b0a514f2a587220a97) | GOWA: Go WhatsApp REST API with UI, multi-account, webhooks, MCP | Go | 5.1k |
| [zerebos/BetterDiscordAddons](https://github.com/zerebos/BetterDiscordAddons) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e581b491d3df7d8c39657f) | Plugins and themes for BetterDiscord | TypeScript | 612 |
| [nickpettican/InstaBot](https://github.com/nickpettican/InstaBot) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e58187a2f3e6c62e60d2da) | Python bot that likes, follows and comments on Instagram (unmaintained) | Python | 213 |
| [kelilipan/eliza-line-chatbot](https://github.com/kelilipan/eliza-line-chatbot) · [Details ↓](https://app.notion.com/p/41ce82f897e58145816bc318b58098d6#41ce82f897e581cf9e1be76821aebdce) | ELIZA chatbot on LINE with line-bot-sdk-python | Python | 3 |

## Details

#### chatwoot/chatwoot

- Link: [github](https://github.com/chatwoot/chatwoot) · [homepage](https://www.chatwoot.com/help-center)
- ⭐ 40.1k · Ruby
- <b>What:</b> Rails + Vue app that puts live chat, email, WhatsApp, Telegram, Facebook and other channels into one shared inbox, with a website chat widget, bots, canned replies and reports.
- <b>How to use:</b> Self-host with Docker (see [chatwoot.com/deploy](http://chatwoot.com/deploy)) or use Heroku/DigitalOcean one-click; create an inbox, then paste the widget script into your site or connect a WhatsApp/email channel.
- <b>Reach for it when:</b> You need a shared support inbox you can self-host, or a human-handoff UI for a WhatsApp bot.

#### wwebjs/whatsapp-web.js

- Link: [github](https://github.com/wwebjs/whatsapp-web.js) · [homepage](https://wwebjs.dev)
- ⭐ 22.9k · JavaScript
- <b>What:</b> Unofficial library that logs into WhatsApp Web in a headless browser and exposes events and methods for messages, media, groups and more.
- <b>How to use:</b>

```javascript
// npm i whatsapp-web.js qrcode-terminal
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({ authStrategy: new LocalAuth() });
client.on('qr', (qr) => qrcode.generate(qr, { small: true }));
client.on('message', (msg) => { if (msg.body === '!ping') msg.reply('pong'); });
client.initialize();
```

- <b>Reach for it when:</b> Quick WhatsApp bots or automations in Node. Unofficial, so accounts can be banned; use the Cloud API for production.

#### RasaHQ/rasa

- Link: [github](https://github.com/RasaHQ/rasa) · [homepage](https://rasa.com/docs/rasa/)
- ⭐ 21.4k · Python
- <b>What:</b> Open-source framework for intent classification, entity extraction and dialogue management, with connectors for Slack, Facebook and others. Rasa Open Source is now in maintenance mode; the company focuses on its paid platform.
- <b>How to use:</b>

```bash
pip install rasa
rasa init     # scaffold + train a sample bot
rasa shell    # talk to it
```

- <b>Reach for it when:</b> You maintain an existing Rasa bot or need fully on-prem NLU. For new LLM agents, look elsewhere.

#### WhiskeySockets/Baileys

- Link: [github](https://github.com/WhiskeySockets/Baileys) · [homepage](https://baileys.wiki/)
- ⭐ 11.7k · JavaScript
- <b>What:</b> Unofficial library that speaks the WhatsApp Web multi-device protocol directly over WebSockets, so it is much lighter than browser-based clients. Docs live at [baileys.wiki](http://baileys.wiki).
- <b>How to use:</b> <code>npm i baileys</code>, create a socket with <code>makeWASocket</code>, persist login with <code>useMultiFileAuthState</code>, scan the QR, then listen to <code>messages.upsert</code> and call <code>sendMessage</code>. Follow [baileys.wiki](http://baileys.wiki) for the current API.
- <b>Reach for it when:</b> You want a lightweight Node WhatsApp bot without running Chromium. Same ban risk as other unofficial clients.

#### tulir/whatsmeow

- Link: [github](https://github.com/tulir/whatsmeow) · [homepage](https://go.mau.fi/whatsmeow)
- ⭐ 7.9k · Go
- <b>What:</b> Unofficial Go implementation of the WhatsApp Web protocol, used by the mautrix-whatsapp Matrix bridge and many Go WhatsApp APIs (including GOWA).
- <b>How to use:</b> <code>go get go.mau.fi/whatsmeow</code>, then follow the example at the top of [pkg.go.dev/go.mau.fi/whatsmeow](http://pkg.go.dev/go.mau.fi/whatsmeow): create a SQL store container, get a device, create a client, add an event handler, connect and pair via QR.
- <b>Reach for it when:</b> You build WhatsApp integrations in Go.

#### devlikeapro/waha

- Link: [github](https://github.com/devlikeapro/waha) · [homepage](https://waha.devlike.pro/)
- ⭐ 7.8k · TypeScript
- <b>What:</b> Self-hosted REST API for WhatsApp with a Swagger UI and dashboard. You choose the engine underneath: WEBJS (browser), NOWEB (Node websocket), GOWS (Go websocket) or WPP. Webhooks deliver incoming messages.
- <b>How to use:</b>

```bash
docker run -it --rm -p 3000:3000/tcp --name waha devlikeapro/waha
# open http://localhost:3000, start a session, scan the QR, then:
curl -X POST http://localhost:3000/api/sendText -H "Content-Type: application/json" \
  -d '{"session": "default", "chatId": "<phone>@c.us", "text": "Hello"}'
```

- <b>Reach for it when:</b> You want WhatsApp over HTTP from any language (n8n, PHP, Python) without embedding a library.

#### aldinokemal/go-whatsapp-web-multidevice

- Link: [github](https://github.com/aldinokemal/go-whatsapp-web-multidevice) · [homepage](https://gowa-docs.mintlify.site/)
- ⭐ 5.1k · Go
- <b>What:</b> Lightweight REST API server built on whatsmeow, with a web UI, multiple accounts, webhooks, an MCP server mode and a Chatwoot integration.
- <b>How to use:</b>

```bash
docker run --detach --publish 3000:3000 --name whatsapp \
  --volume whatsapp-storages:/app/storages \
  aldinokemal2104/go-whatsapp-web-multidevice rest
# open http://localhost:3000 and log in by QR
```

- <b>Reach for it when:</b> You want a low-memory alternative to WAHA, or WhatsApp tools exposed to an agent via MCP.

#### zerebos/BetterDiscordAddons

- Link: [github](https://github.com/zerebos/BetterDiscordAddons)
- ⭐ 612 · TypeScript
- <b>What:</b> Collection of BetterDiscord plugins such as PermissionsViewer, RoleMembers, BlurNSFW, DoNotTrack, HideDisabledEmojis and BetterFormattingRedux.
- <b>How to use:</b> Install BetterDiscord, download a plugin's <code>.plugin.js</code> from the repo, and drop it into the BetterDiscord plugins folder, then enable it in settings.
- <b>Reach for it when:</b> You use Discord heavily and want extra features like viewing role permissions. Client mods break Discord's ToS.

#### nickpettican/InstaBot

- Link: [github](https://github.com/nickpettican/InstaBot)
- ⭐ 213 · Python
- <b>What:</b> Customisable Instagram automation bot. The author no longer maintains it and warns that bots now get accounts banned.
- <b>How to use:</b> Reference only: read the code for how it scheduled likes/follows/comments.
- <b>Reach for it when:</b> Studying old social automation code. Do not run it on a real account.

#### kelilipan/eliza-line-chatbot

- Link: [github](https://github.com/kelilipan/eliza-line-chatbot) · [homepage](https://line.me/R/ti/p/%40537amjdd)
- ⭐ 3 · Python
- <b>What:</b> Small Python implementation of the 1960s ELIZA therapist bot exposed as a LINE Messaging API bot.
- <b>How to use:</b> Read it as an example of wiring a LINE webhook to a reply function with line-bot-sdk-python.
- <b>Reach for it when:</b> You need a minimal LINE bot example.
</content>
</page>