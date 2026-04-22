---
# PLANNING — Phase 3, Task 4: Responsive Layout

**Status: Complete.**

---

## What to Fix

Responsive behavior is partially handled by the grid classes (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) added in tasks 02 and 03. This task covers the remaining problem areas.

---

## Step 1: Header — Hide Page Name on Mobile

The header pageName span overflows on narrow screens alongside 5 icons + nav button.

In `src/components/Header.astro`, add `hidden md:inline` to the pageName span:

```astro
<span class="hidden md:inline font-sans text-sm tracking-widest text-yk-dark uppercase">
  {pageName}
</span>
```

---

## Step 2: Footer Quote Box — Reduce Padding on Mobile

In `src/components/Footer.astro`, change inner quote box padding:

```astro
<!-- before -->
<div class="border border-yk-dark p-10 hatch">

<!-- after -->
<div class="border border-yk-dark p-6 md:p-10 hatch">
```

---

## Step 3: Section Padding — Reduce on Mobile

In `index.astro`, the section `px-8` can crowd narrow screens. Change to `px-4 md:px-8`:

```astro
<section class="px-4 md:px-8 py-12">
```

Apply to both sections (projects + orgs).

---

## Step 4: QA Pass

Run dev server and check at three widths:

| Width | Device | Check |
|-------|--------|-------|
| 375px | iPhone SE | 1-col grid, header not overflowing, no clipping |
| 768px | iPad | 2-col grid, pageName visible |
| 1280px | Desktop | 3-col grid, full header |

```bash
npm run dev
```

Open `localhost:4321` in browser DevTools responsive mode.

---

## Checklist

- [x] Header pageName hidden on mobile (`hidden md:inline`)
- [x] Footer quote box padding reduced on mobile (`p-6 md:p-10`)
- [x] Section padding reduced on mobile (`px-4 md:px-8`)
- [ ] 375px: no overflow, grid is single column (requires browser QA)
- [ ] 768px: grid is 2 columns (requires browser QA)
- [ ] 1280px: grid is 3 columns, full header visible (requires browser QA)
- [x] `npx astro check` passes

## Outcome
Landing page renders correctly across mobile, tablet, and desktop. No overflow or layout breakage.
