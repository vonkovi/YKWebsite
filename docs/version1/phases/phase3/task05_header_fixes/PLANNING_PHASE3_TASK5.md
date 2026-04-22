---
# PLANNING — Phase 3, Task 5: Header Fixes

**Status: Pending.**

Covers issues #1 and #7 from UI review.

---

## Issue 1: Spacing Between Title and Social Icons

**Problem:** "YVONKIM" branding and the social icon group are too close together.

**Fix:** Increase the gap between the branding `<a>` and the icon `<div>` in `Header.astro`.

Current header uses `flex items-center justify-between` with three children: branding, icons, pageName+navbutton. The `justify-between` distributes space, but the icons group sits too close to the branding.

Options:
- Add `ml-8` or `ml-12` to the icon group div
- Or wrap branding + icons in a single left-side flex group with explicit `gap-8`:

```astro
<!-- Left side -->
<div class="flex items-center gap-8">
  <a href="/" class="font-serif text-xl tracking-wide text-yk-dark">YVONKIM</a>
  <div class="flex items-center gap-3">
    <!-- icons -->
  </div>
</div>

<!-- Right side -->
<div class="flex items-center gap-4">
  <span class="hidden md:inline font-sans text-sm tracking-widest text-yk-dark uppercase">{pageName}</span>
  <!-- nav button -->
</div>
```

This makes the left group (branding + icons) and right group (pageName + nav) clearly separated, with explicit gap between branding and icons.

---

## Issue 7: Black Section at Top of Page

**Problem:** A black bar appears at the very top of the page above the header.

**Likely cause:** The `my-4` on the outer wrapper div in `PortfolioLayout.astro` creates a top margin, and the `<body>` background behind it is not set — defaulting to the browser's or DaisyUI's default (which may be dark/black when daisyUI theme is active).

**Fix:** Ensure `<body>` has an explicit `background-color: var(--color-yk-white)` in `global.css`. This is already set in `@layer base` — but DaisyUI v5 may be overriding it with a dark theme default.

Investigate: check whether DaisyUI is injecting a dark theme. If so, add `data-theme="light"` to `<html>` in `BaseLayout.astro`:

```astro
<html lang="en" data-theme="light">
```

This forces DaisyUI to use the light theme and prevents any dark background bleed.

---

## Checklist

- [ ] Header left side refactored — branding and icons in explicit left group with `gap-8`
- [ ] Header right side — pageName + nav button grouped on right
- [ ] Black top bar eliminated (`data-theme="light"` on `<html>` or body bg confirmed)
- [ ] `npx astro check` passes

## Outcome
Header spacing feels deliberate. No mystery black bar at top of page.
