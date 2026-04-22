---
# RESEARCH — Phase 3, Task 1: MDX Integration

---

## Problem

During Phase 2 build, all `.mdx` content files trigger: `No entry type found for <file>.mdx`. Collections return empty arrays at build time. Slug pages generate zero static routes.

**Root cause:** Astro Content Collections with the `glob` loader require `@astrojs/mdx` to process `.mdx` files. Without it, the loader finds the files but cannot parse them — they are silently skipped.

---

## Fix: Install @astrojs/mdx

```bash
npx astro add mdx
```

This command:
1. Installs `@astrojs/mdx` as a dependency
2. Automatically adds the integration to `astro.config.mjs`

Result in `astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] }
});
```

---

## What MDX Enables

- `.mdx` files in `src/content/` are parsed and typed against their Zod schema
- `getCollection('projects')` returns actual entries instead of an empty array
- `getStaticPaths()` in slug pages generates real routes per entry
- MDX body (`entry.render()` or `<Content />`) becomes renderable in pages

---

## Astro 6 MDX API

In Astro 6 with Content Collections v2 (glob loader), rendering MDX body uses:

```astro
---
const { render } = entry;
const { Content } = await render();
---
<Content />
```

Note: `entry.render()` is the Astro 6 pattern. The older `await entry.render()` from v1 collections still works but emits a deprecation hint.

---

## Verification After Install

After `npx astro add mdx`, run:
```bash
npm run build
```

Expected: No "No entry type found" warnings. Slug routes generated for all entries.

---

## No Breaking Changes

Adding `@astrojs/mdx` does not change any existing component, layout, or schema. It only unlocks the MDX parser. All Phase 2 work remains intact.

---

## Deviation Log

_(none yet — to be updated if install deviates from expectation)_
