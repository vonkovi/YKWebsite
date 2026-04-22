---
# RESEARCH — Phase 2, Task 5: Tailwind Theme Tokens

**Task:** Confirm and extend the Tailwind v4 theme tokens in `global.css` to cover all design system needs.

---

## Current State

`src/styles/global.css` already defines:

```css
@theme {
  --font-sans: 'DM Sans Variable', sans-serif;
  --font-serif: 'Playfair Display Variable', serif;
  --color-yk-dark: #2b2b2b;
  --color-yk-beige: #f5f0e8;
  --color-yk-white: #ffffff;
}
```

## What Still Needs Adding

### Spacing tokens (if needed)
Tailwind v4 has built-in spacing scale — custom tokens only needed for project-specific values (e.g. border width, grid gap).

### Border tokens
The editorial aesthetic uses a specific thin border. Define once:
```css
--border-thin: 1px solid #2b2b2b;
```

### Typography scale
Tailwind v4 includes `text-sm`, `text-base`, `text-lg` etc. Project-specific sizes only if wireframe demands them.

## Tailwind v4 Token Approach

In Tailwind v4, `@theme {}` variables map directly to utility classes:
- `--color-yk-dark` → `bg-yk-dark`, `text-yk-dark`, `border-yk-dark`
- `--font-sans` → `font-sans`
- `--font-serif` → `font-serif`

No additional configuration needed — tokens are auto-available as utilities.

## What This Task Is NOT

Not a full redesign pass. Just ensuring the token set is complete enough for Phase 2 components (header, footer, borders). Design polish comes later.

## Open Questions
- None.
