---
# PLANNING — Phase 0, Task 5: Astro Scaffold Execution

**Status: Pending.** This is the first implementation task — runs before task03 and task04.

---

## Execution Order

This task runs FIRST among implementation tasks. Tasks 03 and 04 depend on this completing.

---

## Step 1: Scaffold Astro

Run from `C:\Users\kmyn7\Projects\YKWebsite\`:

```bash
npm create astro@latest . -- --template minimal --typescript strict --no-git
```

- `.` = scaffold into current directory
- `--template minimal` = empty project, no sample pages
- `--typescript strict` = strict tsconfig
- `--no-git` = git handled separately in task06

If the CLI prompts despite flags, select:
- Template: Empty
- TypeScript: Strict
- Install dependencies: Yes
- Git: No

---

## Step 2: Add Tailwind Integration

```bash
npx astro add tailwind
```

Accept all prompts (yes to install, yes to config changes).

---

## Step 3: Install DaisyUI v4

```bash
npm install -D daisyui@4
```

---

## Step 4: Install Fontsource

```bash
npm install @fontsource-variable/playfair-display @fontsource-variable/dm-sans
```

---

## Step 5: Create Directory Structure

```bash
mkdir -p src/content/projects src/content/orgs src/content/blog
mkdir -p src/components src/layouts src/styles
```

---

## Step 6: Verify Build

```bash
npx astro check
npm run build
```

Both must pass with zero errors before proceeding to task03 and task04.

---

## Expected File Tree After This Task

```
YKWebsite/
  src/
    content/
      projects/     ← empty, ready for MDX
      orgs/         ← empty, ready for MDX
      blog/         ← empty, ready for MDX
    components/     ← empty
    layouts/        ← empty
    styles/         ← empty
    pages/
      index.astro   ← default placeholder
  public/
  astro.config.mjs  ← tailwind integration added
  tailwind.config.mjs
  tsconfig.json
  package.json
  .gitignore
```

---

## Checklist

- [ ] `npm create astro@latest` run successfully
- [ ] `npx astro add tailwind` run successfully
- [ ] `npm install -D daisyui@4` run successfully
- [ ] Fontsource packages installed
- [ ] Directory structure created (content/projects, content/orgs, content/blog, components, layouts, styles)
- [ ] `npx astro check` passes
- [ ] `npm run build` passes

## Unlocks
- task03_astro_init (configuration)
- task04_typography (fonts + layout)

## Outcome
Clean, buildable Astro project ready for configuration.
