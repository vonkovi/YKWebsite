---
# STATUS

## Current Phase
**Phase 4 — Projects & Orgs**

## Done
- [x] Tech stack decided: Astro 6 + TypeScript + Tailwind v4
- [x] Deployment decided: Vercel
- [x] Site vision documented (wireframe analysed, all pages specced)
- [x] Header icons finalised: GitHub, LinkedIn, Email (copy ykim336@ucr.edu), CV (download), Discord
- [x] Frontmatter flags decided: `featured` (grid inclusion) + `pinned` (black tile)
- [x] Docs initialized (ARCHITECTURE, PLANNING, DECISIONS, FUTURE_IMPLEMENTATIONS)
- [x] Phase 0 complete — scaffold committed
- [x] Phase 1 complete — setup.sh + 9 placeholder MDX files + verified
- [x] Phase 2 complete — update.sh, global layouts, full header, nav zones, Tailwind tokens, border system, North Star footer
- [x] Phase 3 complete — MDX integration, grids, responsive layout, UI pass (16 pages built)

## Deviation Log
- DaisyUI v4 → v5: `npx astro add tailwind` installs Tailwind v4, not v3. DaisyUI v5 is the correct pairing. Config is CSS-based via `@plugin "daisyui"` in global.css. Logged in ADR-005.
- `z` import: Astro 5/6 deprecates `z` from `astro:content`. Now imported directly from `zod`.
- Astro version: researched 5.x, installed 6.1.8. No API impact.
- DaisyUI dark theme bleed: DaisyUI v5 was injecting a dark background behind the `my-4` outer wrapper margin. Fixed by adding `data-theme="light"` to `<html>` in BaseLayout.astro.

## Next Actions
1. Build `/projects` archive page — 3×4 grid, all projects ordered by date, pinned tile top-left
2. Build `/projects/[slug]` detail page — hero, overview, inspirations, figure/video
3. Build `/orgs` archive page — 3×4 grid
4. Build `/orgs/[slug]` detail page — mission, CTA, figure/video
