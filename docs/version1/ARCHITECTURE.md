---
# ARCHITECTURE

## Stack
- **Framework:** Astro 6.x (static output)
- **Language:** TypeScript 5.x (strict)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **UI Components:** DaisyUI v5 (`@plugin "daisyui"` in global.css)
- **Fonts:** fontsource-variable (Playfair Display + DM Sans — self-hosted)
- **Content:** Astro Content Collections v2 (`src/content.config.ts` + `glob` loader)
- **Deployment:** Vercel

---

## Site Map

```
/                          ← Portfolio landing (home)
/projects                  ← Projects archive — 3×4 grid
/projects/[slug]           ← Individual project deep-dive
/orgs                      ← Organizations archive — 3×4 grid
/orgs/[slug]               ← Individual org deep-dive
/blog                      ← Blog index — list with category filters
/blog/[slug]               ← Individual article
```

No standalone About or Contact page.

---

## Page Anatomy

### Universal Header
Every page shares the same header structure:
```
YVONKIM  [GH] [LI] [EMAIL] [CV] [DISCORD]  [PAGE NAME]  [nav button →]
```
- **GitHub** — external link
- **LinkedIn** — external link
- **Email** — copies `ykim336@ucr.edu` to clipboard on click
- **CV** — downloads `public/resume.pdf`
- **Discord** — external link
- **[PAGE NAME]** — current section label (PORTFOLIO, BLOG, PROJECTS/ALL, etc.)
- **[nav button]** — toggles between portfolio zone and blog zone

### Landing Page (`/`)
1. Header (PAGE NAME: PORTFOLIO, nav: "blog →")
2. **Ambitious Projects** — 2×3 grid. Top-left = pinned black tile. "more projects →" bottom-right.
3. **Founded Organizations** — 2×3 grid. Top-left = pinned black tile. "more orgs →" bottom-right.
4. **North Star** — "To improve the quality of living for the average citizen by 2x."

### Projects Archive (`/projects`)
1. Header (PAGE NAME: PROJECTS/ALL, nav: "blog →")
2. "ambitious projects" heading
3. 3×4 grid — top-left = pinned black tile, rest ordered by date

### Project Detail (`/projects/[slug]`)
1. Header (PAGE NAME: PROJECTS/[SLUG], nav: "blog →")
2. Hero media area (image or video)
3. Overview section
4. Inspirations section
5. Figure / video section

### Orgs Archive (`/orgs`)
1. Header (PAGE NAME: ORGS/ALL, nav: "blog →")
2. "founded organizations" heading
3. 3×4 grid — top-left = pinned black tile, rest ordered by date

### Org Detail (`/orgs/[slug]`)
1. Header (PAGE NAME: ORGS/[SLUG], nav: "blog →")
2. Mission section
3. "Like what you see?" CTA
4. Figure / video section

### Blog Index (`/blog`)
1. Header (PAGE NAME: BLOG, nav: "portfolio →")
2. Category filters: all / opinions / technical / startup
3. List view — title, date, category

### Article (`/blog/[slug]`)
1. Header (PAGE NAME: BLOG/[SLUG], nav: "portfolio →")
2. Mission section
3. "Why the opinion" section
4. Figure / video
5. Conclusion

---

## Content Collections

```
src/content/
  projects/     ← MDX — one file per project
  orgs/         ← MDX — one file per org
  blog/         ← MDX — one file per post
```

### Project frontmatter
```ts
title: string
description: string
date: Date
featured: boolean   // appears in landing 2×3 grid and /projects archive
pinned: boolean     // top-left black tile (only one should be true at a time)
heroImage: string
tags: string[]
githubUrl?: string
liveUrl?: string
type: 'github' | 'hardware' | 'fullstack'
```

### Org frontmatter
```ts
title: string
description: string
date: Date
featured: boolean   // appears in landing 2×3 grid and /orgs archive
pinned: boolean     // top-left black tile (only one should be true at a time)
heroImage: string
mission: string
url?: string
```

### Blog frontmatter
```ts
title: string
description: string
date: Date
category: 'opinions' | 'technical' | 'startup'
tags: string[]
```

---

## Design System

- **Palette:** Dark grey, white, beige
- **Mode:** Light only
- **Aesthetic:** Editorial × Paul Graham (sparse, undesigned intentionally) × Japanese minimalism
- **Layout:** Thin-line borders, generous whitespace, consistent header placement on every page
- **Typography:** Playfair Display (headings) + DM Sans (body)

---

## Key Invariants
- Static output only — no server runtime, no database
- All content lives in `src/content/` as MDX flat files
- `featured: true` → item appears in the 2×3 landing grid and the full archive grid
- `pinned: true` → item gets top-left black tile treatment (exactly one per content type)
- No filtering on `/projects` or `/orgs` — only `/blog` has category filters
- Two hard navigation zones: Portfolio zone and Blog zone, linked via persistent header nav button
- Email icon copies `ykim336@ucr.edu` to clipboard — no mailto, no contact page
- CV icon downloads `public/resume.pdf` directly
