---
name: trainertwin-product-design
description: Use whenever building, editing, or reviewing any TrainerTwin UI — a screen, component, Storybook story, marketing page, mockup, or artifact — in this repo or any other conversation. Encodes the design system's tokens, its non-negotiable rules, and which things that look like bugs are actually deliberate, recorded decisions, so a fresh conversation doesn't have to re-derive months of choices or accidentally reverse one. Trigger on any request to design, build, mock up, or critique a TrainerTwin-branded interface.
license: Internal — TrainerTwin project only.
---

# TrainerTwin product design

TrainerTwin is an AI-twin platform for trainers. Brand personality: **Warm
Precision** — precision is structural (grid, restrained chrome, honest empty
states) and carries the *Studio*, where a trainer stakes their reputation;
warmth is human-layer (type, copy, avatars, easing) and carries the *Session*,
where a nervous learner is practising. Energy lives in motion, never in colour
or density — the brand spends nothing on decorative colour.

This file is a condensed, portable snapshot. **It goes stale; the repo does
not.**

## Step 0 — always do this first

**If you can see a `design-system/` directory** (you're working inside the
TrainerTwin repo, or it's been shared into this conversation): read
`design-system/TRAINERTWIN-DESIGN-SYSTEM.md` and `design-system/DECISIONS.md`
before writing anything. They are generated from `src/styles/tokens.css`, carry
a version + fingerprint, and are the actual source of truth — this file
summarizes them as of the stamp below, and the repo has moved past it more
often than not. If the two disagree, **the repo wins**, and say so rather than
silently following this file.

**If there is no repo** (a fresh conversation, an artifact, a different
project), you're building a mockup, not shipping code. Say so once, then use
the values below — they're accurate enough to produce something genuinely
on-brand. Don't invent a colour, spacing value, radius, or component that
isn't in this file.

> Snapshot source: `TRAINERTWIN-DESIGN-SYSTEM.md` v9.21, fingerprint
> `31ae1503`, 29 Sep 2026 · `DECISIONS.md` 78 decisions.

## The rules most often broken by someone new to this system

1. **`strong` (black in light theme, white in dark) is the default button.**
   Plain `<Button>Continue</Button>` — or, in a mockup, any ordinary button —
   is black/white, not orange. Reaching for the brand colour is a deliberate
   choice, not a default.
2. **Orange (`#FF5A00`) is allowlisted to exactly three moments per flow:**
   the terminal commit of a flow ("Save & finish"), a dialog's confirm, and
   the select action on a *recommended* card (paired with a `brand` badge on
   that same card). Nothing else gets an orange *fill* — not Continue/Next/
   Back, not the current onboarding step, not a selected row, not a checked
   checkbox, not an avatar, not a count pill. Two orange controls in one
   viewport means one of them is wrong. Never for errors, recording, or live
   state (those are red — see the colour table below).
   - **One standing exception, older than this rule and still correct:** the
     active nav item's *fill* is a neutral lifted pill (`surface` +
     `elevation-1`), but its small dot marker and its label keep the
     original Figma-measured `primary`/`primary-ink` — that part was never
     part of the allowlist restriction and stays orange-ish text on a
     neutral background.
3. **Selection and state are neutral**, not branded: a selected row is a soft
   grey fill, a checked checkbox/radio/switch fills with the *dark neutral*
   (`strong`) token, a chosen dropdown row's tick is plain ink, an avatar
   monogram is grey-on-grey. Selection is a state, not a call to action.
4. **The radius scale starts at 4px**, not 8px: `4 / 8 / 12 / 16 / pill`.
   4px is reserved for controls at or under ~20px — checkboxes, radios, a
   small inline sort button. Anything taller takes 8px or above. (This was
   briefly "8px is the floor" from 9–29 Sep 2026; that's reversed. If you see
   an 8px checkbox, that's the bug, not the spec.)
5. **Three font weights only: 400 / 500 / 600. Never 700, never `font-bold`.**
   400 for everything read. 500 for field labels, badges, table headers, and
   inline emphasis (`b`/`strong`). **600 for titles** — card, table, section,
   modal and page headings, a row's own name — *and* button/CTA labels. (This
   was briefly 500-for-titles from 25–29 Sep 2026; reversed because a title at
   the same weight as its own label reads flat. If a title looks the same
   weight as the text under it, that's the bug.)
6. **Two font families, full stop: Figtree (UI, everything) and Noto Serif**
   (display, **marketing only** — never inside the product at any size).
   There is no third, brand-owned monospace. Numbers use Figtree with
   `font-variant-numeric: tabular-nums`, not a mono face — that CSS property
   is load-bearing, not decorative: Figtree's default figures are
   proportional (measured `111111` at 99px vs `000000` at 154px at 40px), so
   dropping it makes a counter visibly jitter and a numeric column go ragged.
   If you must show literal code (a terminal mock, a snippet), that's the one
   place a monospace stack belongs, and it should just be the reader's OS
   monospace (`ui-monospace, SFMono-Regular, Menlo, monospace`) — no webfont.
7. **Never amber/yellow as a warning.** It reads as a broken version of the
   brand orange, ~25° away on the wheel. Use the gold "caution" token instead,
   and never within 8px of a primary action. A three-level score is
   green / neutral / red — the middle state is neutral, not amber.
8. **No raw hex in markup.** Every colour is a token reference. If you're
   working outside the repo and have no token file to import, define the
   tokens as CSS custom properties first (see the block below), then use
   `var(--tt-*)` — don't hand-write hex values inline, even in a mockup.
9. **An icon-only button's box IS its target — never add padding on top of a
   fixed width.** A recent real bug: a component set both a fixed width AND
   horizontal padding on the same icon-only button; they tied on CSS
   specificity, the padding won, and a 16px icon rendered squashed to 6px
   wide. One or the other, never both.
10. **Icon size and tap target are different numbers.** Icons take one of four
    sizes (12/16/20/24px); the clickable control around one is never smaller
    than 24px (WCAG 2.2 SC 2.5.8), even if that means padding around a 16px
    glyph.
11. **No divider line under a header or top nav bar.** A page's top bar (the
    back-arrow bar on a detail/builder/call screen, a page header row) sits
    straight on the canvas with no `border-bottom`, no hairline, no shadow;
    space and the content below separate it. 1px dividers are for rows inside
    cards and tables, not for the page chrome. (A floating panel's own title
    row is a different thing and may keep one.)
12. **Help text goes below the field, never between the label and the field.**
    A field reads label, then control, then its help or hint line ("This stays
    with you. Agents don't see it."). The help line sits directly under the
    control with no extra top margin: spacing comes from the container's gap.
    Errors take the same slot, in the danger colour.

## Things that look like bugs but are deliberate, recorded exceptions

**Don't "fix" these without being asked** — each was a conscious tradeoff:

- **White text on the orange primary button is 3.13:1**, which fails WCAG AA
  for normal-size text. It's compliant at large sizes only (≥18.66px bold or
  ≥24px) — that's specifically why a large marketing CTA size exists.
  In-product, orange buttons (allowlisted, rule 2 above) are currently
  non-compliant at their normal sizes; this is a recorded open gap, not an
  oversight — don't silently swap the label to black to "fix" it.
- **The resting border on form fields and the secondary button is 1.74:1**,
  below the 3:1 a UI boundary normally needs. It's the only step in the
  neutral ramp that both looks light and exists; the border firms up on
  hover/focus, which is what actually carries the affordance.
- **Placeholder/disabled text is 3.81:1**, failing AA — both states are
  exempt under WCAG 1.4.3. Anything meant to be *read* takes the next step
  up (tertiary text), not muted.
- **Alert and badge borders sit around 1.5–2:1**, deliberately below 3:1 — an
  alert or badge isn't a control, its severity rides on the icon, heading and
  fill, not the border. The one exception: a badge whose background is fully
  transparent keeps a full-strength border, because it's the only thing
  defining the shape.
- **Destructive actions are outlined, never filled.** A filled danger button
  has the same visual weight as the primary action — that's how someone
  deletes something by accident.

## Colour — light theme (dark follows the same roles, inverted; ask for the
full dark table if you need exact hex)

| Role | Hex | Use |
|---|---|---|
| `canvas` | `#FEFEFF` | The page itself. Never holds body text directly. |
| `surface` | `#FFFFFF` | Cards, panels. |
| `surface-sunken` | `#F7F7F7` | Wells, inactive areas, nav rail background. |
| `text-primary` | `#1C1B1B` | Headings, body. |
| `text-secondary` | `#4A4A4A` | Supporting copy. |
| `text-tertiary` | `#656565` | Labels, captions, table headers. |
| `text-muted` | `#828282` | Placeholders/disabled ONLY — fails AA, see above. |
| `primary` (orange) | `#FF5A00` | Allowlisted to 3 moments (rule 2). |
| `primary-hover` | `#E04D00` | |
| `primary-ink` | `#B83E00` | Brand as *text* on canvas, not a fill. |
| `primary-subtle` | `#FFF4EC` | Background for a `brand` badge only. |
| `on-primary` | `#FFFFFF` | Label on the orange button. |
| `cta-strong` (= "strong" button fill) | `#2B2B2B` light / white dark | THE default button. |
| `border` | `#E9E9E9` | Decorative only, no contrast requirement. |
| `border-field` | `#C4C4C4` | Form fields + secondary button at rest. |
| `border-interactive` | `#828282` | Hover/focus border — clears 3:1. |
| `focus` | `#FF5A00` | 2px ring, 2px offset, both themes. |
| `danger` | `#CE2C33` | Errors, destructive. |
| `live` | `#CE2C33` | Recording/live session ONLY — never orange. |
| `success` | `#1A6739` | |
| `info` | `#2A63C4` | |
| `caution` | `#7F5F00` (text) | Gold, never amber. |
| `fill-soft` | `#F0F0F0` | Selected rows, toolbar buttons — neutral, not branded. |

## Type scale

| Token | Face / weight | Size / line-height |
|---|---|---|
| `marketing/hero` | Noto Serif 600 | 64/68 |
| `marketing/section` | Noto Serif 600 | 44/50 |
| `product/title-l` | Figtree **600** | 24/30 |
| `product/title-m` | Figtree **600** | 20/26 |
| `product/title-s` | Figtree **600** | 17/24 |
| `marketing/body` | Figtree 400 | 16/26 |
| `product/body` | Figtree 400 | 15/23 — default |
| `product/body-s` | Figtree 400 | 13/20 |
| `product/overline` | Figtree 500 | 11/12, +9% tracking, uppercase |
| `data/numeric` | Figtree 400 | 13/20, `tabular-nums` required |

Running text stops at 65 characters per line.

## Space, shape, motion

- **Space (4pt base):** 4·8·12·16·20·24·32·40·48·64·80·96px.
- **Radius:** `4` (controls ≤~20px) · `8` (buttons, small cards, fields) ·
  `12` (panels) · `16` (modals) · `pill` (999px, every button).
- **Border width:** 0.5px form fields/checkboxes, 1px cards/dividers, 2px
  focus ring.
- **Icon size:** 12 (inside chips/tiny labels) · **16 default** (buttons,
  inputs, menu items) · 20 (alerts, section headers) · 24 (empty states).
- **Motion:** 80/140/200/320/480ms steps, standard ease
  `cubic-bezier(.2,0,0,1)`. Scoped to "purposeful" — thinking states,
  streaming, turn handoff, progress. Not decorative.

## Button — the pattern most worth getting right

Five variants, descending emphasis, `danger` outside the ladder:

| Variant | Fill | When |
|---|---|---|
| `strong` **(default)** | dark neutral / white in dark | Almost everything: Continue, Next, Back, Save, every row action. |
| `primary` | orange, white label | **Opt-in, 3 cases only** — see rule 2. |
| `secondary` | soft grey fill, no border | Utility buttons that sit together (toolbar, Help, Docs). |
| `ghost` | transparent | Dismissals, an action repeated on every row of a long list. |
| `danger` | transparent, danger border | Destructive. Outlined, never filled. |

Every button is a full pill (`border-radius: 999px`), a circle when
icon-only. Sizes: small (32px/13px) and medium (40px/14px) for product; a
large 50px/19px size and an extra-large 54px/16px size exist but are
**marketing-only** — product UI never uses them. An icon-only button is
square (32/40/50px) with **zero padding** — the box is the target (rule 9).

## Card, Table, Badge — the shortest version

- **Card:** light border + very soft shadow (not the general elevation
  shadow — cards get their own, lighter token). Footer has **no background**,
  just a top border. Padding lives on the card's *sections*, not the card
  itself, so a table can run edge-to-edge inside one.
- **Table:** sticky header, row hover is a background change (never a
  border), numeric columns right-aligned with `tabular-nums`, wide tables
  scroll in their own container (never the page).
- **Badge:** pill, 11.5px medium (500), no border on filled tones (colour
  alone would violate WCAG 1.4.1, so every badge still carries a word). The
  `brand` (orange-tinted) tone is reserved for the "recommended" marker —
  not a general category label.

## Building outside the repo (a mockup, prototype, or Artifact)

- Define the tokens above as CSS custom properties in a `:root` block, then
  reference them with `var(--tt-*)` — don't hardcode hex in the markup.
- Three-state theming: a bare `:root` block for light, `@media
  (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])`
  for dark-by-OS, and `:root[data-theme="dark"]` for an explicit toggle.
  `strong`'s fill and label are the one thing that should *flip polarity*
  between the two themes (black↔white) rather than just re-map colours.
- Load Figtree and Noto Serif from Google Fonts (the only external host most
  artifact surfaces allow); don't load a third family for numbers or code —
  use the OS monospace stack for literal code, and Figtree+`tabular-nums`
  for everything else.
- `body` needs an explicit `background: var(--tt-canvas)` — a transparent
  body silently borrows the host page's colour and breaks in one theme.
- State plainly, once, that this is a mockup and not wired to the real
  `tokens.css` — don't imply it's production-ready TrainerTwin code if it
  isn't.

## If something here contradicts what you build

Say so. This file is a snapshot with a stamp on it, not a guess — if the
live repo's `design-system/TRAINERTWIN-DESIGN-SYSTEM.md` has a newer version
number, defer to it and mention the gap, the same way you'd flag any other
stale documentation.
