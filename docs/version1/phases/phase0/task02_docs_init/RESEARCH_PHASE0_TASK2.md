---
# RESEARCH — Phase 0, Task 2: Documentation Structure

**Task:** Establish the docs folder structure and golden rules before any code is written.

---

## Golden Rules of Documentation

1. **No lost context** — all research, planning, and decisions are permanent artifacts. Nothing is deleted.
2. **No outdated context** — when decisions change, docs are updated immediately.
3. **Docs before code** — the docs folder is initialized before the Astro project is scaffolded.
4. **Single source of truth** — each fact lives in exactly one place.

## Why a Versioned Folder Structure

The site is version1. Future rewrites (version2, etc.) get their own folder. This prevents old docs from becoming misleading — they are archived, not deleted.

## Folder Structure

```
docs/
  version1/
    STATUS.md                    ← current phase, blockers, next actions
    PLANNING.md                  ← phase checklists with numbered task IDs
    ARCHITECTURE.md              ← site map, page anatomy, schemas, design system
    DECISIONS.md                 ← ADR log (the why behind every locked decision)
    FUTURE_IMPLEMENTATIONS.md    ← explicitly deferred features
    phases/
      phase0/
        task01_decisions/        ← stack & design decisions
        task02_docs_init/        ← this folder
        task03_astro_init/       ← Astro configuration research
        task04_typography/       ← fonts & type system
        task05_astro_scaffold/   ← scaffold execution plan
        task06_git_init/         ← git setup
```

## Document Classification

**Non-malleable (repo root, admin-only):**
- `CLAUDE.md` — guidance for Claude Code sessions
- `README.md` — if created

**Malleable (docs/version1/):**
- `STATUS.md`, `PLANNING.md`, `ARCHITECTURE.md`, `DECISIONS.md`, `FUTURE_IMPLEMENTATIONS.md`
- Updated as decisions evolve. Never deleted.

**Phase/task-scoped (docs/version1/phases/phaseN/taskNN_descriptor/):**
- `RESEARCH_PHASEN_TASKN.md`
- `PLANNING_PHASEN_TASKN.md`
- Permanent artifacts. Never deleted.

## RPID Loop (per task)

All non-trivial tasks follow: Research → Plan → Implement → Debug.
- R: Research doc written first.
- P: Planning doc written after research is reviewed.
- I: Implementation executes the plan.
- D: Debug only if implementation breaks.

## Task Naming Convention

`task{NN}_{descriptor}/` — zero-padded two-digit number + short snake_case descriptor.
Example: `task03_astro_init/`

## Open Questions at Time of Research
- None.
