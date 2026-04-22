---
# PLANNING — Phase 0, Task 4: Typography & Fonts

**Status: Pending.** Depends on task05 (scaffold) completing first.

---

## Step 1: Install Fontsource Packages

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

---

## Step 2: Create Base Layout (`src/layouts/BaseLayout.astro`)

```astro
---
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/dm-sans';

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
  <body class="font-sans bg-yk-white text-yk-dark">
    <slot />
  </body>
</html>
```

---

## Step 3: Create Global CSS (`src/styles/global.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1, h2, h3 {
    font-family: 'Playfair Display Variable', serif;
  }

  body {
    font-family: 'DM Sans Variable', sans-serif;
  }
}
```

---

## Step 4: Import Global CSS in Base Layout

Add to `BaseLayout.astro` head:

```astro
import '../styles/global.css';
```

---

## Step 5: Verify Fonts Render

Run dev server and confirm Playfair Display loads on headings, DM Sans on body.

```bash
npm run dev
```

---

## Checklist

- [ ] `@fontsource-variable/playfair-display` installed
- [ ] `@fontsource-variable/dm-sans` installed
- [ ] `src/layouts/BaseLayout.astro` created with font imports
- [ ] `src/styles/global.css` created with base layer rules
- [ ] Dev server confirms fonts rendering correctly

## Depends On
- task05_astro_scaffold complete

## Outcome
Type system in place. All pages that use BaseLayout inherit Playfair Display headings and DM Sans body automatically.
