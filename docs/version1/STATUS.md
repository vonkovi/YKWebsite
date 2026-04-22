---
# STATUS

## Current Phase
**Phase 1 — Content Collections & Data Layer**

## Done
- [x] Tech stack decided: Astro 5 + TypeScript + Tailwind v4
- [x] Deployment decided: Vercel
- [x] Site vision documented (wireframe analysed, all pages specced)
- [x] Header icons finalised: GitHub, LinkedIn, Email (copy ykim336@ucr.edu), CV (download), Discord
- [x] Frontmatter flags decided: `featured` (grid inclusion) + `pinned` (black tile)
- [x] Docs initialized (ARCHITECTURE, PLANNING, DECISIONS, FUTURE_IMPLEMENTATIONS)
- [x] Phase 0 complete — scaffold committed

## Deviation Log
- DaisyUI v4 → v5: `npx astro add tailwind` installs Tailwind v4, not v3. DaisyUI v5 is the correct pairing. Config is CSS-based via `@plugin "daisyui"` in global.css. Logged in ADR-005.
- `z` import: Astro 5 deprecates `z` from `astro:content`. Now imported directly from `zod`.

## Next Actions
1. Add placeholder MDX content (3+ entries per collection)
2. Verify content renders without errors (`npx astro check`)
3. Advance to Phase 2 (Global Layout & Design System)
