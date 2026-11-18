# CLI Build

A versatile CLI tool built with **Bun** and **TypeScript** that provides AI-powered modes for code assistance, planning, and Telegram integration.

## Features

- CLI modes: Ask, Plan, and Agent
- Telegram bot integration
- NVIDIA-hosted AI models through the NVIDIA API
- Optional Firecrawl web research
- Staged file changes with approval before applying

## Prerequisites

- [Bun](https://bun.sh)
- NVIDIA API key
- Optional: Firecrawl API key and Telegram bot credentials

## Setup

```bash
bun install
```

Create a local `.env` file using `.env.example` as a template, then add your own credentials.

Start the CLI:

```bash
bun run index.ts wakeup
```

## Configuration

You can configure the model and API credentials through the CLI configuration commands. See the source README history and CLI help for available options.

**Never commit real API keys, Telegram tokens, or local configuration files.**
