---
# RESEARCH — Phase 3, Task 4: Responsive Layout

---

## Goal

Ensure the landing page grids and layout degrade cleanly on smaller screens. The site is primarily desktop-first (portfolio audience views on desktop), but must not break on mobile.

---

## Breakpoints (Tailwind v4 defaults)

| Prefix | Min-width | Device target |
|--------|-----------|---------------|
| (none) | 0px | Mobile base |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |

---

## Grid Responsive Strategy

The 2×3 grid collapses on mobile:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

| Breakpoint | Columns | Result |
|------------|---------|--------|
| Mobile (`< 640px`) | 1 | Stacked single column |
| Tablet (`640px–1023px`) | 2 | 2-column grid |
| Desktop (`≥ 1024px`) | 3 | Full 2×3 grid |

On mobile, the "more projects →" slot drops naturally to the end of the stacked list.

---

## Page Outer Wrapper

The `border border-yk-dark mx-4 my-4` wrapper in PortfolioLayout and BlogLayout already provides consistent side margins. On very small screens `mx-4` (16px each side) is sufficient.

---

## Header Responsive Concerns

The header on small screens (`px-6 py-4 flex items-center justify-between`) may overflow with 5 icons + page name + nav button on narrow viewports. Options:

1. **Hide page name on mobile** — `hidden md:block` on the `<span>` pageName
2. **Hide icons on mobile** — `hidden md:flex` on the icon group, show only branding + nav button
3. **Stack header** — complex, avoid

Recommended: hide the page name span on mobile (lowest information cost), keep all icons visible.

---

## Footer Responsive Concerns

`px-8 py-16` on the footer quote box. On mobile `p-10` on the quote box inner div may be too generous — can reduce to `p-6` on small screens: `p-6 md:p-10`.

---

## Tile Aspect Ratio

Grid tiles use `aspect-square` to maintain square proportions. On single-column mobile, a full-width square tile is tall — acceptable, as content is minimal (title + description).

---

## What Does NOT Need Responsive Work

- Blog layout — list view is naturally single-column
- Footer quote — text reflows naturally
- Icon buttons in header — `gap-3` already compact

---

## Testing Approach

1. `npm run dev`
2. Open browser DevTools → toggle device toolbar
3. Check at 375px (iPhone SE), 768px (iPad), 1280px (desktop)
4. Verify: no overflow, no clipping, grid collapses correctly

---

## Deviation Log

_(none yet — to be updated if implementation deviates)_
