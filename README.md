# Portfolio

Personal portfolio site built with React, TypeScript, Tailwind CSS v4 and Vite.

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Contact details and social links live in `src/data/site.ts`.

## Deployment

Deployed to [samnicholls.me](https://samnicholls.me) on Cloudflare Workers (static assets, configured in `wrangler.jsonc`).
Cloudflare's GitHub integration builds and deploys automatically on every push to `main`.

- Build command: `bun run build`
- Deploy command: `bunx wrangler deploy`

To deploy manually from your machine: `bun run deploy` (requires `bunx wrangler login` first).
