# CLI Build

An AI-powered command-line assistant built with **Bun**, **TypeScript**, and the **Vercel AI SDK**. It provides Ask, Plan, and Agent workflows, with optional web research and Telegram integration.

## Features

- **Ask mode** — ask questions about programming and the current codebase.
- **Plan mode** — turn a goal into a structured implementation plan and select steps to execute.
- **Agent mode** — let an AI agent investigate and work on files using the tools available to the project. Proposed changes are staged for review and approval.
- **Web research** — optional Firecrawl integration for searching and extracting website content.
- **Telegram mode** — optional Telegram bot interface with owner authentication and approval interactions.

## Requirements

- [Bun](https://bun.sh/) to run TypeScript and install dependencies
- An NVIDIA API key with access to a compatible model
- Optional: Firecrawl API key for web research
- Optional: Telegram bot token and Telegram owner ID for Telegram mode

## Getting started

1. Clone the repository and open its directory.
2. Install dependencies:

   ```powershell
   bun install
   ```

3. Create a local `.env` file by copying `.env.example`, then add your own credentials. Never commit `.env`.
4. Start the interactive application:

   ```powershell
   bun run index.ts wakeup
   ```

5. Choose CLI mode, then select Ask, Plan, or Agent mode. Telegram mode is available from the startup menu when configured.

## Configuration

Copy `.env.example` to `.env` and set the values you need:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NVIDIA_API_KEY` | Yes | Authenticates requests to NVIDIA's model API |
| `NVIDIA_DEFAULT_MODEL` | Yes | Default NVIDIA model identifier |
| `FIRECRAWL_API_KEY` | No | Enables web search and website extraction |
| `TELEGRAM_BOT_TOKEN` | No | Enables the Telegram bot |
| `TELEGRAM_OWNER_ID` | No | Restricts Telegram bot access to the configured owner |

The application also supports persistent CLI configuration through `config set` and `config get` commands. For example:

```powershell
bun run index.ts config set model "nvidia/nemotron-3.5-lightning-30b-a3b"
bun run index.ts config get model
```

The CLI configuration file is stored outside the repository in the user's home directory at `~/.cli-build/config.json` (on Windows, under the user profile). Keep credentials private and never commit this file.

## Project layout

```text
cli-build/
├── ai/                 # AI provider configuration and shared memory
├── config/             # Local CLI configuration loading
├── modes/
│   ├── ask/            # Question-and-answer workflow
│   ├── plan/           # Planning and selected-step execution
│   ├── agent/          # Agent orchestration, tools, staging and approvals
│   └── telegram/       # Telegram bot integration
├── tui/                # Terminal interface and startup menu
├── website/            # Static HTML, CSS and JavaScript website
├── index.ts            # CLI entry point
├── package.json        # Dependencies and package metadata
└── bun.lock            # Bun dependency lockfile
```

## Website

The `website/` directory contains a static site. To preview it locally from the repository root:

```powershell
py -m http.server 3000 --directory website
```

Then open <http://localhost:3000> in your browser. Keep the server terminal open while using the page. This static website is separate from the interactive CLI; it does not automatically expose the CLI's AI features in a browser.

## Security

- Never commit `.env`, `.env.local`, API keys, Telegram tokens, or `~/.cli-build/config.json`.
- `.env.example` contains placeholders only and is safe to commit.
- Review staged Agent/Plan changes before approving them, especially shell commands and file operations.

## Troubleshooting

- If Bun is not recognized, restart the terminal after installing Bun and verify with `bun --version`.
- If NVIDIA returns `401 Unauthorized`, check that `NVIDIA_API_KEY` is a valid NVIDIA API key and is being loaded from `.env` or CLI configuration.
- If NVIDIA returns `410 Gone`, the configured model may have been retired; select a model currently available to your NVIDIA account.
- If the static website cannot be reached, confirm the Python HTTP server is still running and visit <http://127.0.0.1:3000>.
