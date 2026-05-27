# Score Buddy — Marketing site

Static marketing landing page for **Score Buddy** (formerly Badminton Log) — the multi-sport score keeper for iPhone, iPad, and Apple Watch.

The site URL — `badmintonlog.com` — is preserved while the brand transitions.

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · static export.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Outputs static HTML/CSS/JS into `out/`. The `out/` directory is what gets deployed.

## Deploy

Deployed automatically by **Cloudflare Pages** on every push to `main`.

Build settings used in Cloudflare Pages:

| Setting | Value |
|---|---|
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |
| Node version | 20 |

Live URL: https://badmintonlog.com
