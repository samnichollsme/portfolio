# Sam Nicholls — Portfolio

The source code for my personal portfolio, live at **[samnicholls.me](https://samnicholls.me)**.

I'm a Senior Front-End Engineer based in England, focused on building intuitive and accessible web applications with React and TypeScript. This site is where I introduce myself, share the projects I'm working on and make it easy to get in touch.

It's also a project in its own right. I use it to put into practice the things I care about: clean, consistent code, accessibility, and a simple, modern design.

## What's on the site

- **Intro:** who I am and what I do.
- **Projects:** a showcase of my work. New projects are on the way, so this section currently shows a "coming soon" placeholder.
- **Contact:** email and LinkedIn, plus a one-click button to copy my email address.

## Tech stack

| | |
|---|---|
| **Framework** | [React](https://react.dev) with [TypeScript](https://www.typescriptlang.org) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Build tool** | [Vite](https://vite.dev) |
| **Runtime / package manager** | [Bun](https://bun.sh) |
| **Linting & formatting** | [Biome](https://biomejs.dev), with [Lefthook](https://lefthook.dev) pre-commit hooks |
| **Hosting** | [Cloudflare Workers](https://workers.cloudflare.com) |

## Design and accessibility

- **Monochrome with a single accent colour.** Black, white and greys, with one orange accent used sparingly for highlights. The accent is a single CSS variable (`--color-accent` in `src/index.css`), so the whole site can be re-themed by changing one line.
- **Built to WCAG 2.2 AA.** That means checked colour contrast, full keyboard support with a skip link and visible focus states, screen-reader-friendly labels, and no looping animations. It also respects reduced-motion preferences.
- **Responsive and mobile-first.**

## Getting started

You'll need [Bun](https://bun.sh) installed.

```bash
bun install    # Install dependencies (also sets up the pre-commit hook)
bun run dev    # Start the dev server at http://localhost:5173
```

### Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Start the local dev server |
| `bun run build` | Check code with Biome, type-check, then build to `dist/` |
| `bun run preview` | Preview the production build locally |
| `bun run check` | Format, lint and fix the codebase with Biome |
| `bun run lint` | Lint only |
| `bun run format` | Format only |
| `bun run deploy` | Build and deploy manually (requires `bunx wrangler login` first) |

## Project structure

```
src/
  App.tsx            # Page layout and section order
  index.css          # Tailwind import, theme tokens and global styles
  components/        # One component per file (Hero, Projects, Contact, …)
  data/site.ts       # Site content: name, email, social links, skills
```

To update my details, links or skills, edit `src/data/site.ts`. No component changes needed.

## Deployment

The site is hosted on Cloudflare Workers as static assets (configured in `wrangler.jsonc`). Cloudflare's GitHub integration **builds and deploys automatically on every push to `main`**.

The build runs Biome first, so code with lint or formatting errors fails the build and never reaches production.

## Coding standards

Conventions for components, TypeScript, styling and accessibility are documented in [CODING_STANDARDS.md](CODING_STANDARDS.md). Most of them are enforced automatically by Biome.

## Contact

- **Website:** [samnicholls.me](https://samnicholls.me)
- **Email:** [contact@samnicholls.me](mailto:contact@samnicholls.me)
- **LinkedIn:** [Sam Nicholls](https://uk.linkedin.com/in/samuel-nicholls-576253133)
