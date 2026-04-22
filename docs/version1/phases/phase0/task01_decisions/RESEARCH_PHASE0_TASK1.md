---
# RESEARCH — Phase 0, Task 1: Stack & Design Decisions

**Task:** Establish all foundational decisions before any code is written.

---

## Framework

**Decision: Astro over Next.js.**
- Portfolio + blog is primarily static and content-heavy — Astro is purpose-built for this.
- Next.js is better when React interactivity is the priority.
- Astro has React integration (Islands) if needed, but React is a guest, not first-class.
- Ruby on Rails + React was considered and rejected — overkill for a static portfolio, adds server hosting cost and maintenance burden.

## Language

**Decision: TypeScript.**
- Astro Content Collections use Zod schemas — TypeScript makes frontmatter type-safe.
- Catches broken content at build time, not runtime.

## Styling

**Decision: Tailwind CSS.**
- Fastest path to a consistent design system.
- Works natively with Astro via `@astrojs/tailwind`.

## UI Component Library

**Decision: DaisyUI v4.**
- DaisyUI v5 requires Tailwind v4 — incompatible with the Tailwind v3 that `npx astro add tailwind` installs.
- DaisyUI v4 is a Tailwind plugin — zero JS overhead, simpler setup.
- shadcn/ui was considered but requires Astro React integration (adds complexity for a primarily static site).

## Deployment

**Decision: Vercel.**
- Zero-config Astro deployment.
- Free tier, custom domain support, instant preview URLs.

## Color & Mode

**Decision: Dark grey, white, beige palette. Light mode only.**
- Palette is light-mode-native. Dark mode would require a second fully considered palette — unnecessary scope.

## Aesthetic Reference

- Editorial design × Paul Graham (sparse, "not really trying") × Japanese minimalism.
- Thin-line borders, generous whitespace, intentional restraint.
- Reference sites: paulgraham.com, sam altman's site, claude.ai.

## Navigation Architecture

**Decision: Two hard navigation zones.**
- Portfolio zone: `/`, `/projects`, `/projects/[slug]`, `/orgs`, `/orgs/[slug]`
- Blog zone: `/blog`, `/blog/[slug]`
- Linked by a persistent header nav button. No unified navbar.
- This is an intentional editorial separation, not an oversight.

## Content Types

Three Astro Content Collections:
- `projects` — GitHub repos, hardware builds, deployed full-stack apps
- `orgs` — Founded organizations (e.g. AWEBOHACK)
- `blog` — Opinions, technical writing, startup topics

## Frontmatter Flags

**`featured: boolean`** — item appears in landing 2×3 grid and full archive grid.
**`pinned: boolean`** — item gets top-left black tile treatment. Exactly one per content type at a time.

## Header Icons

Five icons in universal header: GitHub, LinkedIn, Email (copies ykim336@ucr.edu to clipboard), CV (downloads public/resume.pdf), Discord.

## Open Questions at Time of Research
- None. All decisions locked.
