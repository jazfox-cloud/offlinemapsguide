# Offline Maps Guide

Astro static content site for practical offline map guides.

## Positioning

- Domain target: `offlinemapsguide.com`
- Language: English only for MVP
- Content style: researched setup guides, not claimed first-person field tests
- SEO focus: long-tail scenario queries around offline navigation, travel data gaps, hiking, privacy, and app-specific setup

## Local Development

```bash
pnpm install
pnpm run dev
pnpm run build
```

The build output is `dist/`.

## Cloudflare Pages

Recommended GitHub-backed Pages settings:

- Build command: `pnpm run build`
- Output directory: `dist`
- Node version: `22.12.0`
- Production branch: `main`

Use a GitHub-connected Pages project instead of Direct Upload so production stays tied to the repository.

## Content Workflow

Add or update guide entries in `src/data/guides.ts`. Each guide should include:

- Long-tail search intent
- Region and category
- App focus
- Practical setup sections
- Common pitfalls
- Sources to check before publication

Weekly topic screening should use Google autocomplete, People Also Ask, related searches, and a manual SERP quality check. Prioritize weak forum results, thin old posts, and underserved app-specific problems.
