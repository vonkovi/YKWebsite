---
# PLANNING

## Phase 0 — Project Initialization ✓
- [x] P0-1: Tech stack decided (Astro, TypeScript, Tailwind)
- [x] P0-2: Docs initialized
- [x] P0-3: UI component library decided (DaisyUI v5 — Tailwind v4 forced upgrade)
- [x] P0-4: Typography decided (Playfair Display + DM Sans via fontsource)
- [x] P0-5: Astro project scaffolded
- [x] P0-6: Git initialized

## Phase 1 — Content Collections & Data Layer
- [x] P1-1: Astro Content Collections configured (projects, orgs, blog) ← completed in Phase 0
- [x] P1-2: Frontmatter schemas defined (Zod) ← completed in Phase 0
- [ ] P1-3: setup.sh created (one-command project setup)
- [ ] P1-4: Placeholder content added (3+ entries per collection)
- [ ] P1-5: Content renders without errors (`npx astro check` + `npm run build`)

## Phase 2 — Global Layout & Design System
- [ ] P2-1: Global layout component (header, footer)
- [ ] P2-2: "YVONKIM" header with social icons, email copy button, resume button
- [ ] P2-3: "personal blog →" / "← portfolio" persistent nav
- [ ] P2-4: Tailwind theme configured (colors, typography, spacing)
- [ ] P2-5: Thin-line border system established
- [ ] P2-6: North Star footer with mission statement

## Phase 3 — Landing Page (`/`)
- [ ] P3-1: Ambitious Projects 2×3 featured grid
  - [ ] P3-1a: Top-left high-contrast black tile
  - [ ] P3-1b: "more projects →" button
- [ ] P3-2: Founded Organizations 2×3 featured grid
  - [ ] P3-2a: Top-left high-contrast black tile
  - [ ] P3-2b: "more orgs →" button
- [ ] P3-3: Responsive layout

## Phase 4 — Projects & Orgs
- [ ] P4-1: Projects archive (`/projects`) — 3×4 grid
- [ ] P4-2: Project detail page (`/projects/[slug]`)
  - [ ] P4-2a: Hero media, overview, inspirations, figure/video
- [ ] P4-3: Orgs archive (`/orgs`) — 3×4 grid
- [ ] P4-4: Org detail page (`/orgs/[slug]`)
  - [ ] P4-4a: Mission, media, CTA

## Phase 5 — Blog
- [ ] P5-1: Blog index (`/blog`) — list view
  - [ ] P5-1a: Category filters: all / opinions / technical / startup
- [ ] P5-2: Article page (`/blog/[slug]`)
  - [ ] P5-2a: Long-form reading layout
  - [ ] P5-2b: Tags display
- [ ] P5-3: Import existing posts

## Phase 6 — Polish & Deploy
- [ ] P6-1: SEO (meta tags, OG image, sitemap, robots.txt)
- [ ] P6-2: Performance audit (Lighthouse)
- [ ] P6-3: Mobile QA pass
- [ ] P6-4: Deploy to Vercel
- [ ] P6-5: Custom domain: YvonKim.com
