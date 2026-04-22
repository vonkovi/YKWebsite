---
# PLANNING — Phase 3, Task 9: Grid Counts

**Status: Pending.**

Covers issue #6 from UI review.

---

## Target Counts

| Section | Tiles | Layout |
|---------|-------|--------|
| Ambitious Projects | 6 | 2 rows × 3 cols |
| Founded Organizations | 3 | 1 row × 3 cols |

---

## Projects: 6 Tiles

Current placeholder data has only 3 projects (sim42, awebohack_hardware, portfolio_site). Need 3 more placeholder projects with `featured: true`.

Add to `src/content/projects/`:
- `placeholder_project_4.mdx` — featured: true, pinned: false
- `placeholder_project_5.mdx` — featured: true, pinned: false
- `placeholder_project_6.mdx` — featured: true, pinned: false

Update query in `index.astro`:
```ts
.slice(0, 5)  // keeps up to 5 non-pinned + 1 pinned = 6 total
```
This is already correct — just need the data.

---

## Orgs: 3 Tiles

Current placeholder data has awebohack (pinned), org2 (featured), org3 (featured: false).

Fix: update `org3.mdx` frontmatter to `featured: true` so it appears in the grid.

Update query in `index.astro`:
```ts
.slice(0, 2)  // 2 non-pinned + 1 pinned = 3 total
```

---

## Placeholder Project Frontmatter Template

```mdx
---
title: "Placeholder Project N"
description: "Placeholder description."
date: 2024-01-01
featured: true
pinned: false
heroImage: "/images/placeholder.jpg"
tags: []
type: "github"
---

Placeholder content.
```

---

## Checklist

- [ ] 3 new placeholder project MDX files added (featured: true)
- [ ] `org3.mdx` updated to `featured: true`
- [ ] Orgs query sliced to `slice(0, 2)` for 3 total tiles
- [ ] Landing page shows 6 project tiles and 3 org tiles
- [ ] `npm run build` passes with all new routes generated

## Outcome
Projects grid fills 2 full rows (6 tiles). Orgs grid fills 1 row (3 tiles). Layout matches wireframe intent.
