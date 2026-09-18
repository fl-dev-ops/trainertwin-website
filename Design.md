# TrainerTwin Design

Live visual foundations (this is the page you linked):

**[TrainerTwin Design Foundations](https://claude.ai/code/artifact/e2b27adb-cef0-4e20-8cff-9035d03330ae?open_in_browser=1&via=user_open&org=39fcfcc7-0d96-48c9-87a9-2d178554644a)**

That artifact is the interactive foundations board: decisions, colour, contrast audit, type, space & shape, motion, logo, signature patterns. Flip Light / Auto / Dark in the sidebar — contrast numbers on the page recompute against the theme you are viewing.

This file is the working index for building UI. It does **not** replace the generated spec.

| What | Where | Role |
|---|---|---|
| Live foundations | [Claude artifact](https://claude.ai/code/artifact/e2b27adb-cef0-4e20-8cff-9035d03330ae?open_in_browser=1&via=user_open&org=39fcfcc7-0d96-48c9-87a9-2d178554644a) | Visual companion — tokens, type, four product patterns, live contrast |
| Local foundations | `design-system/foundations.html` | Same board, in-repo (currently labelled **v1.3**) |
| Build spec | `design-system/TRAINERTWIN-DESIGN-SYSTEM.md` | Complete instructions: tokens, base CSS, shell, components (**v9.4**, fingerprint `12bfd584`) |
| Why it looks like this | `design-system/DECISIONS.md` | Decision record, including six accepted a11y exceptions |
| Tokens that ship | `src/styles/tokens.css` | **Single source of truth.** Never invent a hex, space, or radius. |

The published artifact still shows **v0.1** in the masthead. The app ships **v9.4**. If they disagree, follow `tokens.css` and `TRAINERTWIN-DESIGN-SYSTEM.md`. Do not hand-edit those two markdown files — they are generated and will drift on the next regen.

---

## Brand

TrainerTwin lets expert trainers build an AI twin from their own material for mock interviews, 1:1 coaching, and doubt-clearing when they are not available.

**Personality: Warm Precision.** Precision is structural — grid, restrained chrome, honest empty states. Warmth is human-layer — type, copy, avatars, easing. Energy lives in **motion**, never in extra colour or density.

**Orange means the platform is acting.** One brand tier: trainer ownership is photo, name, voice, in-session logo — not a per-trainer accent. If a learner follows six trainers, orange still means one thing.

---

## Locked (do not “fix”)

These came out of the brief. Changing one is a system-level change.

1. **Primary is `#FF5A00`** — pure orange, so the whole red band stays free for error, destructive, and record.
2. **White on primary orange** (3.13:1) is deliberate. Use the `lg` button (19px) for hero / primary-path CTAs. Do not switch the label to black.
3. **One `primary` action per view.** Everyday actions are `strong` (black in light, white in dark). Utility is `secondary`. Dismissals are `ghost`. Five orange buttons means none of them is the one to press.
4. **Destructive is outlined, never filled.**
5. **Two font weights: 400 and 600.** Never 700, never `font-bold`. Reset `b, strong` to 600.
6. **Serif is titles only, above 20px.**
7. **No raw hex in product UI.** Use `var(--tt-*)`. Components never reference primitives like `--tt-orange-500`.
8. **Amber is banned.** Caution is gold (`--tt-caution`), never within 8px of a primary action. Three-level scoring is green / **neutral** / red.
9. **`--tt-live` is red; `--tt-available` is green.** Recording is a warning. Availability is reassurance. Never interchangeable. Never use orange for live/record.
10. **Mode is a view, not a session type.** Voice, text, and video share one Session Shell and one transcript.
11. **The product is light-only for visitors.** `<html data-theme="light">` is stamped. Dark is real at the token layer and in Storybook; there is no in-app switcher yet.
12. **Category / mock colours stay out of the system.** Page-level decoration, not tokens.

Six accepted contrast exceptions live in `DECISIONS.md` (D01 white-on-orange, field border at rest, muted text, status borders, badge borders). Do not “correct” them.

---

## Type

| Role | Family | Use |
|---|---|---|
| Display | **Noto Serif** 600 | Titles above 20px |
| UI | **Figtree** 400 / 600 | Everything operable, all body |
| Mono | **JetBrains Mono** 400 | Scores, durations, timestamps — always `tabular-nums` |

Marketing-only (never in product UI): IBM Plex Sans (wordmark), Hanken Grotesk (footer).

| Step | Size / leading |
|---|---|
| Marketing hero | 64 / 68, −2% |
| Marketing section | 44 / 50 |
| Product title L | Noto Serif 24 / 30 |
| Product title M | Figtree 20 / 26 |
| Product title S | Figtree 17 / 24 |
| Marketing body | 16 / 26 |
| Product body | **15 / 23** |
| Body S | 13 / 20 |
| Overline | 11 / 12, +9%, uppercase |
| Data | 13 / 20 mono |

Running text caps at 65ch. 400 for everything read; 600 for everything titled, labelled, or clickable.

---

## Colour (semantic only)

| Token | Use |
|---|---|
| `--tt-canvas` | Page |
| `--tt-surface` | Cards, panels |
| `--tt-surface-raised` | Menus, modals, toasts |
| `--tt-surface-sunken` | Sidebar, wells, inactive |
| `--tt-text-primary` / `secondary` / `tertiary` | Headings/body · supporting · labels/hints |
| `--tt-text-muted` | Placeholders and disabled **only** |
| `--tt-primary` | The one directed action, focus, active nav icon |
| `--tt-primary-ink` | Brand as text or icon on canvas (links) |
| `--tt-on-primary` | White on a primary button |
| `--tt-cta-strong` / `--tt-on-cta-strong` | Everyday filled button |
| `--tt-border` | Decorative |
| `--tt-border-field` | Inputs at rest (0.5px) |
| `--tt-border-interactive` | Hover / focus boundary |
| `--tt-danger` | Errors, destructive |
| `--tt-live` | Recording / live session only |
| `--tt-success` / `--tt-info` / `--tt-caution` | Status **text** |
| `--tt-*-border` | Status **edges** — never use the text colour as a border |
| `--tt-*-badge-border` | Badge edges (lighter than alerts) |

Links are always underlined, in `--tt-primary-ink`. Thickness goes 1px → 2px on hover.

---

## Space, shape, motion

- **4pt grid:** `--tt-space-1` … `--tt-space-24` (4–96px). Layout with `gap`, not random margins. Do not add a 10px step.
- **Radius floor is 8px.** Scale: 8 / 12 (cards) / 16 (modals) / pill. Inner radius is one step smaller than the container.
- **Borders:** 0.5px form · 1px cards/dividers · 2px focus ring at 2px offset.
- **Pills:** padding tokens `2/8`, `4/12`, `6/16` (horizontal is 3× vertical). 12px is the floor for more than two words. Set `line-height` on the pill.
- **Elevation:** light uses shadow; dark uses a hairline + a step up the neutral ramp. Cards carry elevation-1 by default. Hover on an interactive card is elevation only.
- **Motion:** purposeful — thinking, streaming text, turn handoff, score reveal, ingest progress. `quick` 140ms · `base` 200ms · `slow` 320ms. Honour `prefers-reduced-motion`.
- **Z:** base 0 · raised 10 · sticky 20 · dropdown 30 · overlay 40 · modal 50 · toast 60 · tooltip 70. Toast above modal. Never invent a number.
- **Icons:** 12 / 16 / 20 / 24. Hit area never below 24px.

---

## App shell

Sidebar on `--tt-surface-sunken`. Content and header on `--tt-canvas`. No hairline between them — the fill change *is* the divider.

Active nav is a white pill (`--tt-surface` + elevation-1). Icon `--tt-primary`, label `--tt-primary-ink`.

Page header carries **exactly one** action. If a screen needs two, the second is `secondary`. Below `md` the sidebar becomes a drawer.

Default content width `--tt-container-lg` (1200px). Body gap `--tt-space-5`; between cards `--tt-space-4`. Cards in a grid are the default content shape. **Padding lives on card sections, never the card**, so tables and images can run edge to edge.

Breakpoints match Tailwind: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

---

## Components (use what exists)

| Piece | Rule |
|---|---|
| Button | `primary` / `strong` / `secondary` / `ghost` / outlined `danger`. Sizes 32 / 40 / 50. Never a filled button on a surface of its own colour. Icon-only always has `aria-label`. |
| Field | Label → control → (hint **or** error). Error names the fix. Disabled ≠ read-only. |
| Badge | Word + colour; never colour alone. `live` is the only animated badge. |
| Alert vs toast | Alert sits next to what it describes. Toast confirms what already happened (5s). Errors that need a decision are alerts. |
| Tabs vs segments | Tabs change **content**. Segments change **mode of one thing**. |
| Card | Elevation-1 default. Interactive hover = lift only. |
| Table | Numbers right-aligned, mono, `tabular-nums`. Empty cell is an em dash. |
| Empty state | Dashed border, title, one line, **one** action. |
| Ingest | Real progress per source. Never an indeterminate bar. |
| AI disclosure | Persistent, not dismissible, names the trainer (“AI twin of Priya Raman”). Neutral, never orange. In video it is composited **inside** the frame. |
| Citations | Below the answer. Grounded / Inferred / **Outside this trainer’s material** (caution — the only state that puts the trainer’s name on something that isn’t theirs). |

**Do not invent** a dropzone, accordion, stepper, waveform, chart, date picker, breadcrumb, drawer, popover, combobox, or theme switcher. Spec exists for segmented control and waveform; the components are not built. Ask rather than improvise.

---

## Copy

Active voice. Controls say what happens (“Publish” → toast “Published”). Errors explain what broke and how to fix it — no apologies. Scorecards name the fix, not the failure.

---

## Still open

Do not treat these as settled: motion expressiveness, illustration direction, voice identity, whether the glyph stands alone at favicon size.

---

## Before you ship a screen

1. Read the [foundations artifact](https://claude.ai/code/artifact/e2b27adb-cef0-4e20-8cff-9035d03330ae?open_in_browser=1&via=user_open&org=39fcfcc7-0d96-48c9-87a9-2d178554644a) for visual intent, then implement from `TRAINERTWIN-DESIGN-SYSTEM.md` §4 + §4b + §7 + §8.
2. One primary action. Weights 400/600 only. `b, strong` reset present.
3. Every colour is a `--tt-*` token. Status borders use the `*-border` family.
4. Build and test in **light**.
5. If it is not in §8, check §12 of the build spec before making a new component.
