---
# PLANNING — Phase 0, Task 4: Typography & Fonts

**Status: Complete.**

---

## Step 1: Install Fontsource Packages

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

Installed: `@fontsource-variable/dm-sans@5.2.8`, `@fontsource-variable/playfair-display@5.2.8`

---

## Step 2: Create Base Layout (`src/layouts/BaseLayout.astro`)

Actual implementation:
```astro
---
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/dm-sans';
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
}

const { title, description = 'YvonKim.com' } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title} — YVONKIM</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

> Note: `class="font-sans bg-yk-white text-yk-dark"` was moved to `@layer base` in `global.css` rather than inline on `<body>` — cleaner separation.

---

## Step 3: Global CSS (`src/styles/global.css`)

**Planned:** `@tailwind base/components/utilities` (Tailwind v3 syntax).
**Actual:** Tailwind v4 uses `@import "tailwindcss"`. Font and color tokens defined in `@theme {}`, applied in `@layer base`.

Actual file — see PLANNING_PHASE0_TASK3.md Step 1 for full content (global.css is shared between task03 and task04).

---

## Checklist

- [x] `@fontsource-variable/playfair-display` installed (v5.2.8)
- [x] `@fontsource-variable/dm-sans` installed (v5.2.8)
- [x] `src/layouts/BaseLayout.astro` created with font imports
- [x] Font tokens defined in `global.css` via `@theme {}`
- [x] `@layer base` applies fonts to headings and body

## Outcome
Type system in place. All pages using BaseLayout inherit Playfair Display headings and DM Sans body automatically.
