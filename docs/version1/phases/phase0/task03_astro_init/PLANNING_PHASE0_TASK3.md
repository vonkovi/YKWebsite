---
# PLANNING — Phase 0, Task 3: Astro Configuration

**Status: Complete.**

---

## Step 1: Configure Tailwind

**Planned:** Edit `tailwind.config.mjs` with DaisyUI plugin, font families, custom colors.
**Actual:** No `tailwind.config.mjs` in Tailwind v4. All config done in `src/styles/global.css` via `@theme {}`.

Actual `src/styles/global.css`:
```css
@import "tailwindcss";
@plugin "daisyui";

@theme {
  --font-sans: 'DM Sans Variable', sans-serif;
  --font-serif: 'Playfair Display Variable', serif;

  --color-yk-dark: #2b2b2b;
  --color-yk-beige: #f5f0e8;
  --color-yk-white: #ffffff;
}

@layer base {
  body {
    font-family: var(--font-sans);
    background-color: var(--color-yk-white);
    color: var(--color-yk-dark);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
  }
}
```

---

## Step 2: Verify `astro.config.mjs`

**Planned:** `@astrojs/tailwind` integration.
**Actual:** `@tailwindcss/vite` Vite plugin (Tailwind v4 approach).

Actual `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

---

## Step 3: Create Content Collections Config

Actual `src/content.config.ts`:
```ts
import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featured: z.boolean(),
    pinned: z.boolean().default(false),
    heroImage: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    type: z.enum(['github', 'hardware', 'fullstack']),
  }),
});

const orgs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/orgs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featured: z.boolean(),
    pinned: z.boolean().default(false),
    heroImage: z.string(),
    mission: z.string(),
    url: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['opinions', 'technical', 'startup']),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, orgs, blog };
```

---

## Step 4: Type-check Result

```
Result (5 files): 0 errors, 0 warnings, 0 hints
```

---

## Checklist

- [x] Tailwind configured via `@theme {}` in `global.css` (DaisyUI, fonts, colors)
- [x] `astro.config.mjs` verified (`@tailwindcss/vite` Vite plugin present)
- [x] `src/content.config.ts` created with all three collection schemas
- [x] `npx astro check` passes with zero errors

## Outcome
Astro project fully configured. Content Collections typed and ready for content.
