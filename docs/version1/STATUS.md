---
# STATUS

## Current Phase
**Phase 3 — Landing Page Grid**

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

## Deviation Log
- DaisyUI v4 → v5: `npx astro add tailwind` installs Tailwind v4, not v3. DaisyUI v5 is the correct pairing. Config is CSS-based via `@plugin "daisyui"` in global.css. Logged in ADR-005.
- `z` import: Astro 5/6 deprecates `z` from `astro:content`. Now imported directly from `zod`.
- Astro version: researched 5.x, installed 6.1.8. No API impact.
- MDX collection warning: "No entry type found" on `.mdx` files — `@astrojs/mdx` integration not yet installed. Slug pages generate empty routes. Fix in Phase 3.

## Next Actions
1. Install `@astrojs/mdx` integration so content collections load MDX files
2. Build landing page grid — 2×3 Projects grid + 2×3 Orgs grid using `featured: true` items
3. Implement pinned black tile (top-left, `pinned: true` item)
