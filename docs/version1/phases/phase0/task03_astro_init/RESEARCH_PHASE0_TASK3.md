---
# RESEARCH — Phase 0, Task 3: Astro Project Initialization

**Task:** Scaffold the Astro project with TypeScript, Tailwind, DaisyUI, and Google Fonts.

---

## 1. Astro Init

**Current version at time of research:** Astro 5.x (2025).
**Actual installed version:** Astro 6.1.8 — see Deviation Log below.

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

---

## 2. Content Collections — Astro 5/6 API

Config file is `src/content.config.ts` (NOT inside `src/content/`). Requires a `loader`.

```ts
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';
```

> **Note:** `z` must be imported from `zod` directly — importing from `astro:content` is deprecated in Astro 5+ and triggers hints in `astro check`.

---

## 3. DaisyUI — Version Decision (Pre-Implementation)

**Original plan:** Pin DaisyUI to v4 for stability (v4 = Tailwind v3 compatible).

**Actual outcome:** See Deviation Log — DaisyUI v5 was used instead.

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

This finding held — no deviation.

---

## Deviation Log

### Astro version
- **Expected:** 5.x
- **Actual:** 6.1.8
- **Impact:** None — Content Collections API and glob loader syntax is the same.

### Tailwind version
- **Expected:** `npx astro add tailwind` installs Tailwind v3 + `@astrojs/tailwind`, creates `tailwind.config.mjs`
- **Actual:** Installs Tailwind **v4** (`@tailwindcss/vite`), creates `src/styles/global.css` with `@import "tailwindcss"`, patches `astro.config.mjs` with a Vite plugin. **No `tailwind.config.mjs` exists in Tailwind v4.**
- **Impact:** All Tailwind config moved to CSS via `@theme {}`. DaisyUI plugin loaded via `@plugin "daisyui"` in CSS.

### DaisyUI version
- **Expected:** `npm install -D daisyui@4` (Tailwind v3 plugin)
- **Actual:** `npm install daisyui` (v5.5.19) — required because Tailwind v4 is installed
- **Impact:** Config syntax changed. No `tailwind.config.mjs` plugin entry. DaisyUI loaded via `@plugin "daisyui"` in `global.css`.

### `z` import
- **Expected:** `import { defineCollection, z } from 'astro:content'`
- **Actual:** `import { z } from 'zod'` — `z` from `astro:content` is deprecated
- **Impact:** `zod` is a transitive dependency of Astro — no extra install needed.
