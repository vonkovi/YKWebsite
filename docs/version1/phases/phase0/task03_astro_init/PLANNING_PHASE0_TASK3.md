---
# PLANNING — Phase 0, Task 3: Astro Configuration

**Status: Pending.** Depends on task05 (scaffold) completing first.

This task covers post-scaffold configuration: Tailwind, DaisyUI, Content Collections schema.

---

## Step 1: Configure Tailwind (`tailwind.config.mjs`)

Replace the auto-generated config with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'yk-dark': '#2b2b2b',
        'yk-beige': '#f5f0e8',
        'yk-white': '#ffffff',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    logs: false,
  },
};
```

**Verify:** `.astro` is in the content glob — DaisyUI classes get purged without it.

---

## Step 2: Verify `astro.config.mjs`

`npx astro add tailwind` patches this automatically. Verify it looks like:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});
```

---

## Step 3: Create Content Collections Config (`src/content.config.ts`)

```ts
import { defineCollection, z } from 'astro:content';
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

## Step 4: Type-check

```bash
npx astro check
```

Expected: zero errors.

---

## Checklist

- [ ] `tailwind.config.mjs` updated (DaisyUI, fonts, colors, content glob)
- [ ] `astro.config.mjs` verified (tailwind integration present)
- [ ] `src/content.config.ts` created with all three collection schemas
- [ ] `npx astro check` passes with zero errors

## Depends On
- task05_astro_scaffold complete (scaffold must exist before configuring)

## Outcome
Astro project fully configured. Content Collections typed and ready for content.
