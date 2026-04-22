---
# RESEARCH — Phase 0, Task 3: Astro Project Initialization

**Task:** Scaffold the Astro project with TypeScript, Tailwind, DaisyUI, and Google Fonts.

---

## 1. Astro Init

**Current version:** Astro 5.x (2025).

```bash
npm create astro@latest
```

Interactive prompts:
| Prompt | Our choice |
|--------|-----------|
| Template | Minimal (empty) |
| TypeScript strictness | Strict |
| Install dependencies | Yes |
| Initialize git repo | No (we do it manually) |

Tailwind is NOT included in the init wizard. Added separately:

```bash
npx astro add tailwind
```

This auto-installs `tailwindcss` + `@astrojs/tailwind`, creates `tailwind.config.mjs`, and patches `astro.config.mjs`.

---

## 2. Content Collections — Astro 5 API

Config file is `src/content.config.ts` (NOT inside `src/content/`). Requires a `loader`.

```ts
// src/content.config.ts
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

## 3. DaisyUI — Version Decision

**DaisyUI v5 requires Tailwind v4** — incompatible with Tailwind v3.
`npx astro add tailwind` installs Tailwind v3.

**Decision: pin DaisyUI to v4 for stability.**

```bash
npm install -D daisyui@4
```

`tailwind.config.mjs`:
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
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
    logs: false,
  },
};
```

**Gotcha:** `content` glob must include `.astro` or DaisyUI classes get purged in production.

---

## 4. Google Fonts — Fontsource (self-hosted)

No official Astro Google Fonts integration exists. Self-hosting via `fontsource` is the recommended approach — no external DNS request, works offline.

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

Import in base layout:
```astro
---
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/dm-sans';
---
```

---

## Open Questions
- None. All findings are clear. Proceeding to Plan.
