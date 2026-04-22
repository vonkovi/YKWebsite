---
# PLANNING — Phase 2, Task 5: Tailwind Theme Tokens

**Status: Complete.**

---

## Current `global.css` `@theme` Block

Already defined:
```css
--font-sans: 'DM Sans Variable', sans-serif;
--font-serif: 'Playfair Display Variable', serif;
--color-yk-dark: #2b2b2b;
--color-yk-beige: #f5f0e8;
--color-yk-white: #ffffff;
```

## Step 1: Add Missing Tokens

Extend `@theme {}` in `global.css`:

```css
@theme {
  /* existing */
  --font-sans: 'DM Sans Variable', sans-serif;
  --font-serif: 'Playfair Display Variable', serif;
  --color-yk-dark: #2b2b2b;
  --color-yk-beige: #f5f0e8;
  --color-yk-white: #ffffff;

  /* new */
  --color-yk-dark-muted: rgba(43, 43, 43, 0.4);
  --tracking-editorial: 0.15em;
}
```

## Step 2: Verify Utilities Are Available

After adding tokens, confirm Tailwind auto-generates utilities:
- `text-yk-dark` ✓
- `bg-yk-beige` ✓
- `border-yk-dark` ✓
- `font-sans` ✓
- `font-serif` ✓

Test by running `npm run build` — no errors means tokens resolved correctly.

---

## Checklist

- [x] `--color-yk-dark-muted` added to `@theme {}`
- [x] `--tracking-editorial` added to `@theme {}`
- [x] `npm run build` passes

## Outcome
Complete token set available for all Phase 2 components.
