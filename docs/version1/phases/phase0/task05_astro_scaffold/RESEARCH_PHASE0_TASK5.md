---
# RESEARCH — Phase 0, Task 5: Astro Scaffold Execution

**Task:** Identify the exact sequence of commands to scaffold the Astro project.

---

## What This Task Covers

Task 3 (astro_init) covered the technical approach — versions, APIs, configuration patterns.
This task covers the execution sequence — the exact commands run in order to produce a working project.

---

## Command Sequence

### Step 1: Scaffold

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-git
```

- `.` = current directory (YKWebsite/)
- `--template minimal` = empty project, no sample pages
- `--typescript strict` = strict mode tsconfig
- `--no-git` = we handle git in task06

### Step 2: Add Tailwind

```bash
npx astro add tailwind
```

Auto-installs `tailwindcss` + `@astrojs/tailwind`, creates `tailwind.config.mjs`, patches `astro.config.mjs`.

### Step 3: Install DaisyUI v4

```bash
npm install -D daisyui@4
```

### Step 4: Install Fontsource

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

### Step 5: Create Content Directories

```bash
mkdir -p src/content/projects src/content/orgs src/content/blog
mkdir -p src/components src/layouts
```

### Step 6: Type-check

```bash
npx astro check
```

Should pass with zero errors on a fresh scaffold.

---

## Expected File Structure After Scaffold

```
YKWebsite/
  src/
    content/
      projects/
      orgs/
      blog/
    content.config.ts    ← Astro 5 Content Collections config
    components/
    layouts/
    pages/
      index.astro
  public/
  astro.config.mjs
  tailwind.config.mjs
  tsconfig.json
  package.json
  CLAUDE.md
  docs/
  UI.png
```

---

## Config Files to Edit After Scaffold

1. **`tailwind.config.mjs`** — add DaisyUI plugin, font families, content glob
2. **`astro.config.mjs`** — verify integrations (tailwind should be auto-added)
3. **`src/content.config.ts`** — define all three collections with Zod schemas
4. **`src/layouts/BaseLayout.astro`** — import fontsource fonts

---

## Open Questions at Time of Research
- None. All dependencies and versions confirmed in task03 research.
