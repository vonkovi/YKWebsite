# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

YvonKim.com is a personal portfolio and blog for Yvon Kim — electrical engineer, software engineer, and prompt engineer. It showcases ambitious projects, founded organizations, and written work across opinions, technical writing, and startup topics. The audience is the general public.

**North Star: clarity and intentional restraint.** Every design and architecture decision is evaluated against the aesthetic: editorial × Paul Graham minimalism × Japanese minimalism. If it adds noise, cut it.

---

## Repository Layout

```
src/                  ← Astro source (active development)
  content/
    projects/         ← MDX — one file per project
    orgs/             ← MDX — one file per org
    blog/             ← MDX — one file per post
  content.config.ts   ← Zod schemas for all three collections
  components/         ← Reusable Astro components
  layouts/            ← Page layout wrappers (BaseLayout.astro)
  pages/              ← File-based routing
  styles/
    global.css        ← Tailwind v4 config (@theme, @plugin "daisyui")
docs/                 ← Architecture, planning, and status docs (version1/)
public/               ← Static assets (resume PDF, images)
setup.sh              ← First-time setup script
```

---

## Active Development

Read `docs/version1/STATUS.md` first when resuming work.

### Key docs

| File | Purpose |
|------|---------|
| `docs/version1/STATUS.md` | Current phase, blockers, next actions — read first on session resume |
| `docs/version1/DECISIONS.md` | Architectural Decision Log — the *why* behind key choices. Authoritative for all locked decisions |
| `docs/version1/ARCHITECTURE.md` | Site map, page anatomy, content schemas, design system |
| `docs/version1/PLANNING.md` | Phase checklist |
| `docs/version1/FUTURE_IMPLEMENTATIONS.md` | Explicitly deferred features — do not implement now |
| `docs/version1/phases/phase0/` | Phase 0 task folders — research + planning per task |
| `docs/version1/phases/phase1/` | Phase 1 task folders — research + planning per task |
| `docs/version1/phases/phase2/` | Phase 2 task folders — research + planning per task |

### Dev commands

<!-- AUTO-GENERATED from package.json scripts -->
```bash
./setup.sh             # first-time setup from fresh clone (install + type-check)
./update.sh            # pull latest + sync deps + type-check + build
npm install            # install dependencies
npm run dev            # dev server (localhost:4321)
npm run build          # production build
npm run preview        # preview production build locally
npm run astro          # direct Astro CLI access
npx astro check        # type-check .astro and .ts files
```
<!-- END AUTO-GENERATED -->

---

## Architecture Summary

Static Astro site with three Astro Content Collections: `projects`, `orgs`, `blog`. All content is MDX flat files — no database, no server runtime.

### Two navigation zones

The site intentionally splits into two experiences connected by a persistent nav button:
- **Portfolio zone:** `/` (landing), `/projects`, `/projects/[slug]`, `/orgs`, `/orgs/[slug]`
- **Blog zone:** `/blog`, `/blog/[slug]`

### Landing page structure

1. Header — YVONKIM branding, social icons, email copy button, resume download button, "personal blog →"
2. Ambitious Projects — 2×3 featured grid (`featured: true` in frontmatter)
3. Founded Organizations — 2×3 featured grid (`featured: true` in frontmatter)
4. North Star footer — "to improve the quality of living for the average citizen by 2x"

### Key Invariants

- Static output only — no server runtime, no API routes, no database
- `featured: boolean` in frontmatter controls what appears on the landing page grids — never hardcode
- No filtering on `/projects` or `/orgs` archive pages — only `/blog` has category filters
- Light mode only — no dark mode toggle
- Email icon copies `ykim336@ucr.edu` to clipboard on click — no mailto, no contact page
- CV icon downloads `public/resume.pdf` directly
- Header icons: GitHub, LinkedIn, Email (copy), CV (download), Discord
- `featured: true` → item appears in grids; `pinned: true` → top-left black tile (one per content type)

---

## Design System

- **Palette:** Dark grey, white, beige
- **Mode:** Light only
- **Aesthetic:** Editorial × Paul Graham sparse minimalism × Japanese minimalism
- **Layout:** Thin-line borders, generous whitespace
- **Typography:** Playfair Display (headings) + DM Sans (body)
- **UI Library:** DaisyUI v5 (`@plugin "daisyui"` in global.css)

---

## Solo Project Notes

This is a solo project. No branching hierarchy, no PR process, no collab integrator. Work directly on `main` or feature branches as needed. Docs are kept current for Claude context continuity — not for team coordination.
