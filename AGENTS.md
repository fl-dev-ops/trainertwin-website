<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:trainertwin-design-system -->

# TrainerTwin design system — read before any UI work

Before writing or editing anything visual in this repo — a component, a page,
a Storybook story, copy that renders — read:

- `design-system/TRAINERTWIN-DESIGN-SYSTEM.md` — tokens, fonts, components,
  layout, the base stylesheet. The build file. Follow it exactly: never invent
  a colour, spacing value, radius, or component that isn't in it.
- `design-system/DECISIONS.md` — the reasoning behind each choice, including
  six deliberately non-compliant accessibility exceptions. Check it before
  "fixing" anything that looks wrong — it may be a recorded decision, not a
  defect. Don't revert D01 (white on primary orange), D04 (cool neutrals),
  or any status-border exception without being asked.

Both are generated from `src/styles/tokens.css`, the real source of truth, and
carry a version + fingerprint at the top of each file. **Never hand-edit
either MD** — edit the token file (or the doc's own source, `foundations.html`
for the published one) and regenerate; a hand-edit drifts from the source on
the next regeneration and nobody notices until it's measured.

If a task needs a component not listed in §8 of the design system MD, check
§12 ("What is NOT in the system yet") before building one from scratch — an
invented component becomes a permanent inconsistency the next person copies.

<!-- END:trainertwin-design-system -->
