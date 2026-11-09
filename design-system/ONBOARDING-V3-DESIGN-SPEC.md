# TrainerTwin — Onboarding prototype V3 ("Twin-enabled"): full design specification

> **Purpose.** Feed this into the design system so that a *new page* built from it looks exactly like the V3 prototype.
> **How it was produced.** Every screen and dialog of V3 (44 desktop states at 1440×900, 15 phone states at 390×844, plus the
> first-run onboarding steps) was opened in Chrome by script, screenshotted, and its **computed styles were measured**
> (59 captures, ~4,200 distinct classed elements). Values below are those measured values, cross-checked against `tokens.css` / `app.css`.
> **Evidence.** Screenshots + the raw measurements are in [`design-system/onboarding-v3-reference/`](onboarding-v3-reference/)
> (`<screen>.png`, `m_<screen>.png` for phone, `computed-styles-census.json`). File names are cited per screen in §6.
> **Build under audit.** `onboarding/v3/app.js?v=970`, `app.css?v=928`. Light theme (dark-theme token overrides exist in `tokens.css`; not audited visually).
> **Companion file.** `ONBOARDING-V3-DECISIONS-FOR-FOUNDATIONS.md` = the *why* and the open conflicts. This file = the *what*, exactly.
> Nothing here has been applied to `foundations.html`, `TRAINERTWIN-DESIGN-SYSTEM.md` or `DECISIONS.md`.

---

## 0. The look in one paragraph

A calm, white, rounded product UI on a very light grey frame. **Figtree** only. Neutral cool greys do almost all the work; **orange `#FF5A00`**
marks the single main action on a screen and the active nav item (plus small counters). Surfaces are white cards with a 1px `#F0F0F0` edge and a
whisper-soft shadow; everything interactive is **pill-shaped (999px)** except form fields, tables and cards (8 / 12 / 16 px). Information is grouped
into **cards → tiles → rows**, never boxed by heavy rules. Status is shown with soft tinted pills (success / caution / danger / info), never saturated blocks.
Numbers are large, semibold and tabular; labels are small, secondary, sometimes UPPERCASE overlines. Motion is short (140–320 ms) and only on entrances.

---

## 1. Global structure

### 1.1 Desktop shell (≥ 768px)
| Part | Spec (measured) |
|---|---|
| Frame | `.shell` flex, full height, background **`--tt-surface-sunken` `#F7F7F7`** |
| **Left rail** | `aside.rail` **214px** wide (collapsed **72px**, toggled by the logo button; width animates 200 ms), background `#F7F7F7`, no border, padding `16 12 12`, vertical flex gap 8 |
| **Main** | `main.main` fills the rest, background **`--tt-canvas` `#FEFEFF`**, **radius 16px on the left corners only** (`16 0 0 16`), shadow `-4px 0 16px rgba(30,28,25,.06)`, scrolls on its own |
| **Page** | `.page--library` max-width **1024px**, centred, padding **`20px 64px 32px`** → **896px content column**. `.page--wide` = content 1098px (Persona library). Create/builder pages use a **720px column** (§6.9). Home adds 120px bottom padding and an orange radial glow (§6.2) |
| **Page header** (`.lib-head`) | flex, `align-items:center`, gap 16, **40px high** (32px when it only holds small filters). Left: `h1.lib-title`; right: `.lib-tools` (flex, gap 12) |
| `h1.lib-title` | **16/22, 600, −0.015em** tracking, with `.lib-mark` = **28×28 icon box, radius 8, icon colour secondary**, gap 8 |
| Section heading | `h2.page-title` **18/24, 600, −0.015em**, margin-top 32 from the header (e.g. "Twin agents for specific use cases") |
| Back-bar (detail/builder pages) | `header.create-bar` **64px tall**, background canvas, padding `0 32`, back link 14/20 regular with 16px arrow, optional action buttons right-aligned |

### 1.2 Rail contents (top → bottom)
1. **Brand row** (32px): 20px logo mark + "TrainerTwin" wordmark (600) · theme switch icon button on the right.
2. **Inbox** item with an orange count badge.
3. Section label **TWIN** → *Twin agents*, *Twin sessions*, *Twin's brain*.
4. Section label **ROLEPLAY** → *Scenarios*, *Roleplay sessions*, *Persona*.
5. (spacer) **Settings** item, then the **user card** (photo 32px + "Olga Sinenko").

| Rail element | Spec |
|---|---|
| `.nav-item` | button **190×32**, flex gap 8, padding `0 8`, **radius 8**, **14/20 regular, `--tt-text-secondary`**, 16px outline icon; hover → `--tt-fill-soft` bg + primary text |
| Active item | `aria-current="page"`: **white (`--tt-surface`) bg, text `--tt-primary-ink` `#B83E00`, weight 500, icon `--tt-primary`, `--tt-elevation-1`** |
| `.rail-label` | **11/16, 500, UPPERCASE, +0.08em, `--tt-text-tertiary`**, padding `0 8` |
| `.nav-badge` | 18px circle (min), bg **`--tt-primary`**, text white **11/18, 500**, padding `0 6` |
| `.rail-user` | **190×50, radius 12**, bg white, 1px `#F0F0F0` border, elevation-1, padding `8 12 8 8`, gap 12, name 14/20 |
| Accounts | not in the rail — they live on **Settings** as cards (§6.18) |

### 1.3 Phone shell (≤ 767px)
- Rail is hidden. **Top bar** `header.mobile-head` **56px**, canvas bg, padding `0 16`: logo + wordmark left; layout / theme / account icon buttons right.
- **Bottom tab bar** `nav.tabbar` **68px**, white, padding 8, shadow `0 -4px 16px rgba(30,28,25,.06)`: **Home · Roleplay · Twin Agents · Report · Settings**.
  Each `button.tabbar-item` = 75×52, radius 12, padding `6 0`, gap 4, **11/14, 500**, secondary text; active = primary-ink text + orange icon.
- Page padding drops to **16px** (content = 358px at 390). Grids collapse to one column; two-column summaries stack (§6.4); dialogs become near full width (§4.9).
- Breakpoints actually used in `app.css`: **1100, 960, 900, 860, 767/768, 720, 640 px**. Treat **767** as the shell switch and **720** as the "summary/tiles stack" switch.

---

## 2. Tokens (as used)

### 2.1 Colour — semantic roles
| Role | Token | Light value | Where it appears (frequency across all screens) |
|---|---|---|---|
| Canvas | `--tt-canvas` | `#FEFEFF` | page background (main) |
| Surface | `--tt-surface` | `#FFFFFF` | cards, tables, popovers, inputs, secondary buttons — *the most used background (≈680 elements)* |
| Sunken | `--tt-surface-sunken` | `#F7F7F7` | app frame/rail, segmented-control track, table header rows, number tiles, usage tiles (≈170) |
| Soft fill | `--tt-fill-soft` | `#F0F0F0` | grey highlight boxes, neutral badges/chips, card edges, disabled buttons, sticky table headers, transcript bg (≈520 incl. borders) |
| Hairline / row divider | `--tt-border` (= `--tt-fill-soft-hover`) | `#E9E9E9` | row dividers, rules, rail separators |
| Card edge | `--tt-card-border` | `#F0F0F0` | 1px edge on every card/table |
| Field border | `--tt-border-field` | `#C4C4C4` | inputs, filters, selects (0.5px) |
| Field hover/focus | `--tt-border-interactive` | `#828282` | input hover/focus border |
| Text primary | `--tt-text-primary` | `#1C1B1B` | ≈3,500 text nodes |
| Text secondary | `--tt-text-secondary` | `#4A4A4A` | ≈1,600 (labels, helper, nav) |
| Text tertiary | `--tt-text-tertiary` | `#656565` | ≈540 (overlines, captions, placeholders) |
| Text muted (disabled only) | `--tt-text-muted` | `#828282` | disabled text; never for readable copy |
| **Brand** | `--tt-primary` / `-hover` / `-ink` / `-subtle` | `#FF5A00` / `#E04D00` / `#B83E00` / `#FFF4EC` | main CTA, nav badge, active-nav text (ink), selected inbox item (subtle), focus ring |
| **Dark CTA** | `--tt-cta-strong` / `--tt-on-cta-strong` | `#2B2B2B` / `#FFFFFF` | checked checkbox, selected calendar day, Olga's chat bubble |
| Success | `--tt-success` / `-subtle` / `-border` | `#1A6739` / `#EDF9F1` | success badges, check icons, progress ring, high ratings |
| Caution | `--tt-caution` / `-subtle` / `-border` | `#7F5F00` / `#FDF6E3` | low-rating chips, warnings, mid ratings |
| Danger | `--tt-danger` / `-subtle` / `-border` | `#CE2C33` / `#FFF1F1` | reported problems, error text |
| Info | `--tt-info` / `-subtle` / `-border` | `#2A63C4` / `#EEF4FF` / `#8FB6F5` | info chips, "answers only on" pill |
| Live | `--tt-live` | `#CE2C33` | recording dot only |
| Illustration gold | `--tt-gold-300` / `-500` | `#E9C86A` / `#C99A08` | three-star illustration only |
| Orange tints | `--tt-orange-100` / `-200` | `#FFE3D1` / `#FFC5A3` | twin chat bubble edge |

**Rule of thumb:** white card on `#FEFEFF` canvas on `#F7F7F7` frame; grey (`#F0F0F0` / `#F7F7F7`) is for *inset* things (boxes, tiles, headers); colour is for *status*; orange is for *the one action* and *where you are*.

**Status → tone mapping used everywhere:** success = completed / active / high rating / paid · caution = low rating / ending soon / needs a look · danger = reported problem / failure · info = informational / free trial · neutral = everything else.

### 2.2 Typography (Figtree; weights 400 / 500 / 600 only)
Base: `font-size:15px; line-height:23px` (1.5) on body. Numbers use `font-variant-numeric: tabular-nums` (`.tabular`).

| Role | Size / line | Weight | Tracking / case | Colour | Used for |
|---|---|---|---|---|---|
| Overline | **11/12–16** | 500 | **+0.09em UPPERCASE** | tertiary | card section labels ("WHAT IT DOES", "USAGE CREDIT"), settings groups, rail labels (+0.08em) |
| Column header | **12/20** | 500 | +0.04em UPPERCASE | secondary | table header rows |
| Micro / meta | 11–12 / 16–18 | 500 | – | tertiary / secondary | counters, hints, badges (12/16) |
| Caption / help | **13/18–20** | 400 | – | tertiary | help text, card descriptions, durations |
| Small control text | **13/20** | 500–600 | – | primary | small buttons (600), filters (500), chips (500) |
| Body small | **14/20** | 400 (500 for names) | – | primary / secondary | table cells, list rows, dialog text |
| Body | **15/23** | 400 | – | primary | default |
| Row / card title | **15/22** | 600 | −0.015em | primary | card titles (scenario card), field group labels |
| Dialog / inbox title | **16/24 – 17/24** | 600 | −0.01em | primary | inbox section titles (17), report reasons (16/24) |
| Page header title | **16/22** | 600 | −0.015em | primary | `.lib-title` |
| Section heading | **18/24** | 600 | −0.015em | primary | `.page-title`, setup titles, usage-card title (18/26) |
| Dialog title / step title | **20/28** | 600 | −0.01em | primary | `.confirm-title`, builder step title, persona name, panel titles |
| Metric number | **28/36 – 32/35** | 600 | tabular | primary | usage values (28), summary tiles (32) |
| Amount | 24 | 600 | −0.01em | primary | "AED 360" in the summary card |
| Italic quote | 14–15 | 400 italic | – | secondary | quoted learner turns, in “double quotes” |

### 2.3 Spacing (4pt)
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64` (`--tt-space-1…16`). Measured rhythm:
- **Gap between sibling cards / tiles: 16.** Between page header and first block: 20–32. Between sections: 24–32.
- **Card padding:** summary card `20 24` · number tile `16 20` · dialog `24` · side panel `24` · table cell `14 20` (header `10 20`) · inbox card `16 20` · setup card `32` · builder card body `24` · profile/source card `16`.
- **Row heights:** table row ≈ 59, nav item 32, input 40, small button 32, filter 32, tab bar item 52.
- **Label → field 8** (4 for captions); **field → field 12–16**; **icon → text 8**; **chip → chip 8**.

### 2.4 Radius
`4` checkbox · **`8` form fields, select/filter in headers, inbox "said" quotes, avatars' tiles, nav item, icon tile** · **`12`** panels, tiles, number tiles, usage tiles, popovers, calendar, grey highlight boxes, source cards, quote bubbles · **`16`** cards, tables, scenario/persona/agent cards, inbox panes, main frame left corners · **`24`** dialogs, builder card, setup card · **`999`** buttons, chips, badges, tags, seg control, search, credit pill, tab bar items · `50%` photos/avatars/rings · chat bubbles `20` with a **6px tail corner**.

### 2.5 Elevation
| Level | CSS | Used on |
|---|---|---|
| e1 | `0 1px 2px rgba(30,28,25,.04–.06)` (+ `0 2px 8px .05` on some) | every card, table, active nav item, rail user card |
| Button ring | `0 0 1px rgba(0,0,0,.4), 0 1px 1px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.04)` | **secondary buttons** (white, no border) |
| e2 | `0 2px 4px rgba(30,28,25,.035), 0 8px 20px rgba(30,28,25,.055)` (light) | menus, listboxes, calendar |
| Main frame | `-4px 0 16px rgba(30,28,25,.06)` | `main` left edge; tab bar `0 -4px 16px` |
| Dialog | `0 4px 8px rgba(30,28,25,.2)` + 4px white border | all popups |
| Toast | `0 8px 24px rgba(30,28,25,.12), 0 2px 6px rgba(30,28,25,.06)` | toasts |
| Avatar ring | `0 0 0 2px #fff` (stacks) / `0 0 0 3px #fff, 0 1px 6px rgba(0,0,0,.12)` (photos) | learner stacks, photos |
| Scrim | `rgb(11 10 9 / .55)` | dialog & panel backdrop |

### 2.6 Borders
Field/filter **0.5px `#C4C4C4`** (renders 1px at 1×); cards/tables **1px `#F0F0F0`**; row dividers **1px `#E9E9E9`**; panes in Inbox **1px `#E9E9E9`**; dialogs **4px `#FFFFFF`**; focus **2px `#FF5A00`, offset 2px**; "said" quote **3px left `--tt-danger-border`**.

### 2.7 Motion
`140 ms` (hover/press) · `200 ms` (rail width, selection) · `280 ms` cubic-bezier(.2,.8,.2,1) (side panel slide-in, played once) · `320 ms` (entrances) · toast in `380 ms cubic-bezier(.2,.9,.3,1.2)`, with a 3px countdown bar. Press = `scale(.98)` on secondary buttons. Everything respects `prefers-reduced-motion`.

### 2.8 Icons
Outline set, 24px viewBox, **stroke 2**, round caps/joins, `currentColor`. Sizes: **12** chevrons (glyph 12×7, stroke ≈1.33 px) · **14** inline/title icons, ↗ in chips · **16** buttons/rows (`--tt-icon-sm`) · **18** badges in tiles · **20** brand mark · 36 tile icons. Title icons sit **before** the title, 8px gap, secondary colour. Redirect **↗** (`M7 17 17 7M8 7h9v9`) = "go to the thing behind this". Check `M5 12l5 5l10-10` (success colour) = "included/ok".

### 2.9 Z-index scale
base 0 · raised 10 · sticky 20 (rail, sticky table headers) · dropdown 30 · overlay 40 · modal 50 · toast 60 · tooltip 70.

---

## 3. Components — exact specs

### 3.1 Buttons
All: pill (999), flex centre, gap 8, 16px icons, **14/20 weight 600** (`--tt-weight-cta`) at **h40 / padding 0 16**; **small = h32 / padding 0 12 / 13px**; **icon = 32×32** (no padding). Disabled (all): bg `--tt-fill-soft`, text `--tt-text-muted`, `cursor:not-allowed`.

| Variant | Class | Fill / text | Notes |
|---|---|---|---|
| **Primary (the main action)** | `btn--strong` / `btn--primary` | **`#FF5A00` / white**; hover `#E04D00` | **In V3 *every* strong/primary button is orange** (see §9 — a deliberate experiment block). Max **one per view/dialog**. Examples: Create new, Save and Assign, Send by email, Continue, Create and publish, Calibrate, Invite learners, Done |
| **Secondary** | `btn--secondary` | white / primary text, **no border, button-ring shadow** | hover bg = 3% darker; active `scale(.98)`; focus ring 2px orange; Cancel, Respond, Try roleplay, Configure, Edit |
| **Ghost** | `btn--ghost` | transparent | hover `--tt-fill-soft`; Back, Remove, Skip, Mark… |
| Danger | `btn--danger` | transparent, danger text, 1px danger-border | destructive only |
| Icon | `btn--icon` | 32×32 | ghost or secondary; ⋮ more-menu, close ✕ |

Pairings: **Cancel (secondary) left of primary**, right-aligned, gap 8. A card/row action is a **small secondary**. Small buttons live *inside* rows/boxes; full-size buttons live in page headers and dialog footers.

### 3.2 Form controls
| Control | Spec |
|---|---|
| **Text input** `.input` | **40px**, radius 8, bg white, 0.5px `#C4C4C4`, padding `0 12`, **14/20**; hover/focus → border `#828282`, no outline; error → danger border; placeholder tertiary |
| **Textarea** | same, padding 12, line-height 23, min-height 72 (builder 72–90), vertically resizable |
| Field | label (13/20, 500, secondary) **8px above** the control; help text 13/20 tertiary below; optional "(Optional)" in tertiary |
| **Select (native)** | `.input` + custom chevron: 16px chevron at `right 12px`, `padding-right 40px`, `appearance:none` |
| **Filter dropdown** (`.home-ask-mode` in `.bot-range`) | **148×32**, label 13/20 500 + chevron, 0.5px `#C4C4C4` border, white; **radius 8 in page-header filters** (pill 999 elsewhere, e.g. date range on the agent detail page); chevron glyph 12×7, stroke ≈1.33px; menu opens below, min-width = button |
| **Search** `.lib-search` | 36px pill, white, shadow e1, magnifier left, placeholder tertiary (Scenarios header); Assign popup search = 36px pill, open by default |
| **Checkbox** | 18×18, radius 4, 0.5px field border; checked = `#2B2B2B` fill + white tick; header "select all" supports **indeterminate** |
| **Switch** `.rps-switch` | **40×24 pill**; on = `--tt-primary`, knob white |
| **Segmented control** `.seg` | track `--tt-surface-sunken`, **radius 999, padding 4, height 40**; items padding `6 16`, 14/20, 500, secondary; **selected = white + e1 shadow + primary text** (`aria-pressed`) |
| **Chips (selectable)** `.role-trait` | 32px, padding `6 16`, 13/20 500, bg `#F0F0F0`, secondary text; hover `#E9E9E9`; **selected (`aria-pressed`) = white bg + 1.5px orange inset ring**, primary text |
| Dropdown listbox (`.twin-hero-ask-menu`) | white, padding 8, gap 2, **radius 12**, 1px card-border, e2; option = padding 8, radius 8, 14px, hover `#F0F0F0`, selected tick |
| Date field | see §3.3 |

### 3.3 Date field + calendar
- Real `<input type="date">` stays (typable), but the **native picker indicator is hidden** and our **16px calendar icon** is drawn at the right. Field **150×32** (inside rows), radius pill in popups / 8 in forms.
- New picks **show the label "30 days"** (value underneath = today + 30). Choosing a date replaces the label by the date. Clearing resets. Click anywhere on the field opens the calendar.
- **Calendar popover:** width **288**, radius 12, white, 1px card-border, **e2**, padding `12 16 16`. Header: month title **14/600** + prev/next **28px** round ghost buttons (prev disabled on the current month). Weekdays: **two-letter initials** `Su Mo Tu We Th Fr Sa`, 12px secondary, tabular. Days: **34px circles**, 13px; **today = 4px orange dot under the number**; **selected = `#2B2B2B` circle, white text, weight 500**; **past days disabled** (45% opacity). Footer hint: "Dates before today can't be picked." (12/16 secondary). Esc closes the calendar before the dialog.

### 3.4 Badges, chips, tags, avatars, ratings
| Element | Spec |
|---|---|
| **Badge** `.badge` | pill, padding `4 12`, **12/16, 500**, gap 6; neutral = `#F0F0F0` / secondary; `--success/--caution/--info/--danger/--brand` = *-subtle bg + tone text |
| **Attention chip** `.ts-attn-chip` | pill **32px**, padding `0 16`, 13/20 500, tone-subtle bg + tone text, trailing ↗ (14px); hover/pressed = 1px inset outline in its own tone; wraps (auto height, padding `6 16`) on phones |
| **Tag** `.rps-tag` | pill, padding `2 10`, 12/20 500, secondary text, **white bg + 1px `#E9E9E9`**; behaviour tags with ✓ icon |
| **Info pill** (`.rp-scope-chip`) | 24px pill, padding `0 12`, `--tt-info` on `--tt-info-subtle`, **no border**, 14px |
| **Avatar (letter)** `.rp-avatar--1…5` | circle, **600 first letter**; sizes **22px** (panels/inbox, 11px text), **28px** (tables, 12px), **32px** (report headers, 13px). Tones cycle by name: **1 success / 2 info / 3 caution / 4 danger** (each *-subtle bg + tone text) and **5 orange (`#FFE3D1` bg, `#B83E00` text)** |
| **Learner stack** `.rp-learner-avatar` | 28px circles, 12/12 600, **all one neutral grey** (`#F0F0F0`, secondary text, **2px white ring**, −8px overlap) + "+N" 11/500 |
| **Photo avatar** | 32 / 40 / 72px, `object-fit: cover`, round; persona photos 72px; letter fallback 72px 28/600 grey |
| **Stars** `.ts-stars` | five 16px stars, gap 2; **filled colour by rating**: 5 = success, 4 = caution, ≤3 = danger; empty = `--tt-border`; label under ("Very helpful", "Helpful", "Somewhat helpful") 12–13px secondary; "No rating" muted |
| Credit pill | pill 32px, padding `0 16`, `#F0F0F0`, 13px secondary text, 18px **progress ring** before it (caution at ≥ 90%) |
| Count badge | 18px orange circle, white 11/18 500 (rail, inbox tabs) |

### 3.5 Cards
| Variant | Spec |
|---|---|
| **Base card** `.card` | white, **1px `#F0F0F0`, radius 16**, e1; padding lives on sections (not the card). Interactive cards (`.is-clickable`) get a 2px orange focus ring offset 2px |
| **Scenario / agent card** `.rp-card` | **288×338**, 3-up grid gap 16. **Art area 168px** (pastel 135° 3-stop gradient, radius 16 16 0 0) containing a **quote bubble** (white, radius 12, padding 12, e1, 13/18 tertiary, 40px round face/video). Body padding `14 16 0`: **who** (12/16 500 UPPERCASE +0.06em, 72% ink) → **title 15/22 600** → **copy 13/20 tertiary (2–3 lines)**. Footer row padding 16: learner avatar stack + ⋮ icon button |
| **Persona card** `.rps-person` | white card radius 16, 4-up (gap 16), hero (72px photo + name 20/28 600 + location 14/20 secondary + grey role chip 12/22, radius pill, padding `0 10`) then label "BEHAVIOUR" (12/16 UPPERCASE) and ✓ tag list; **edit icon appears top-right on hover** (32px round, `#F0F0F0`) |
| **Summary card** | §6.4 (`.tm-rating`, `.tm-hero`): 108px tall, radius 12, 1px `#F0F0F0`, e1, padding `20 24` |
| **Number tile** | §6.4: radius 12, **bg `#F7F7F7`**, no border, padding `16 20` |
| **Usage tile** `.usage-stat` | radius 12, bg `#F7F7F7`, padding 16, 3-up gap 12 |
| **Settings cards** | `.fast-follow-card` 215×112, radius 12, 1px card-border, e1, padding `20 16`, gap 12, **centred** icon tile (36×36, radius 8, soft tinted bg) over a 15/22 500 name |
| **Source card** | radius 12, padding 16, row: logo + name + count pill + ✕ |
| **Setup card** | radius **24**, padding **32**, width 700, subtle orange "shine" border on the active step |
| **Builder card** | radius **24**, 1px edge, e1, body padding 24 (§6.9) |
| **TeeTee prompt card** | bg `#F0F0F0`, **radius 23**, padding 24, animated orange wave canvas behind; contains title 15/22 600, suggestion pills (30px, white, 13/18) and a **white ask box** (radius 16, 1px `#E9E9E9`, padding `8 8 8 18`, mic + orange send) |
| **Grey highlight box** | `#F0F0F0`, radius 12, padding 16 20 — used for "usage credit", "learner's report", respond context |

### 3.6 Tables & lists
| Part | Spec |
|---|---|
| **Table** `.an-table` | white, **radius 16**, 1px `#F0F0F0`, e1, `overflow:hidden` |
| **Header row** `.an-row--head` | **bg `#F7F7F7`**, padding `10 20`, **12/20, 500, UPPERCASE +0.04em, secondary** |
| **Row** `.an-row` | grid columns per table (`--tsess`, `--rsess`, `--acctwin`, `--bots`…), padding `14 20`, gap 12, **14/20**, **top border 1px `#E9E9E9`**, clickable rows (`.ts-rowbtn`) end with a **↗ 16px** and focus ring `-2px` inset |
| Name cell `.lr-name` | 14/500 + 28px avatar + (optional) secondary 12–13px meta under it (date · length) |
| Scores | `74 / 100` — value 14/500, "/ 100" muted; ratings = stars + label + "N issue reported" caution badge |
| Usage bar (accounts) | 4px track `#F0F0F0`, fill dark (caution when low), "168 used · 72 left" 12px under |
| **Assign list** | §4.5 — a table card whose first row is a **sticky grey header** |
| **Inbox request list** | bordered box radius 16, padding `12 16`, rows with a tone badge + sentence |
| Empty | centred icon, 15px title, 14px helper, optional secondary CTA, inside a full-width box with generous padding |

### 3.7 Menus, popovers, tooltips, toasts
- **Listbox/menu:** see §3.2. Fixed-positioned under its trigger so scroll containers can't clip; flips above if no room.
- **Tooltip** (`title` / rail tips when collapsed): z-index 70.
- **Toast** `.toast`: fixed **bottom-right 20px**, width **min(380px, 100vw−32px)**, radius 16, padding 12, flex gap 12, **tone-subtle background** (info / success / warning / error) with a **36px solid-tone circle icon** (white 18px glyph), title 14/20 600 (+ optional 13/18 secondary), ✕ 28px, 3px countdown bar; on phones left/right 16. Copy is a full sentence ending with a period.
- **Credit pill menu / dropdown menus** use the same listbox look.

### 3.8 Dialogs (popups)
One theme for all: `dialog.issue-dialog > .confirm-card` — **radius 24, 4px white border, bg gradient `#F7F7F7 → #FFFFFF` (top→bottom), shadow `0 4px 8px rgba(30,28,25,.2)`, padding 24, flex column, gap 20**, scrim `rgb(11 10 9 / .55)`. Close = 32px ghost icon button at **top 12 / right 12**.
| Part | Spec |
|---|---|
| Title `.confirm-title` | **20/28, 600** |
| Subtitle `.confirm-sub` | 14/20 secondary (e.g. "The off-plan sales process · 2 assigned · 1 selected") |
| Body | grey context box / fields / lists |
| Footer `.confirm-actions` | flex, **right-aligned, gap 8**: Cancel (secondary) + primary; primary is **disabled (grey) until valid** |
| Widths | confirm/credit **440** · try-as-learner 480 · share/respond 520 · assign **640** · "Why does this feel off?" ≈ 480 |
| Phones | width = `100vw − 32`, centred |

### 3.9 Side panel (drawer)
"Reports raised": `dialog.reports-dialog` fixed to the **right edge, full height, 560px (100vw on phones)**, `border-radius 24 0 0 24`, same dialog surface; header (title 20/28/600 + "N open" sub), **list scrolls inside**; **slides in once** (`.28s cubic-bezier(.2,.8,.2,1)`) with a backdrop fade; scroll position is kept after actions. A dialog can open **on top of** the panel (Respond).

### 3.10 Progress, rings, meters
- **Ring** `credit-pill-ring`: conic fill over `#E9E9E9`, hole = ring − 4px stroke; **18px** in the credit pill (dark fill, caution ≥90%), **64px** in the Paid card (**`--tt-success` fill**, % label 13/600 centred).
- **Bar/meter:** 8px pill `#F0F0F0` with `--tt-primary` fill (home usage); 4px dark bars in account tables. **No progress bar** on the agent "Usage credit" box or the Roleplay sessions table (removed on purpose).
- Stepper (onboarding): numbered 24px circles (current = filled `#1C1B1B` white 13/500, others grey), labels 14/20 500; done = check.

### 3.11 Chat / conversation
- **Calibration thread:** Olga = right-aligned **dark bubble** (`#2B2B2B`, white text 14/20, radius `20 20 6 20`, max 88%); twin = left **tinted bubble** (`#FFF4EC`, inset 1px `#FFE3D1`, radius `20 20 20 6`) with a **32px photo avatar** beside it; under each twin reply: **"Feels like me / Feels off"** secondary small buttons (each with a thumb icon) or the chosen mark ("👍 Feels like me" 13px secondary).
- **Transcripts** (reports): grey `#F0F0F0` field, **white bubbles** radius 12, padding 12, e1, name 13/500 above text.
- **Ask box:** white, radius 16, 1px `#E9E9E9`, e1; textarea left, mic + **orange 32px round send** right.

### 3.12 Illustration & decoration
- **Pastel art tiles** (`.rp-art--0…9`): `linear-gradient(135deg, A 0%, B 50%, C 100%)` — hard-coded hex (e.g. `#a8c6ec → #d2c3e8 → #f1c6d7`, `#a8e0c9 → #bfe0e8 → #c7cdf2`, `#f3cfa0 → #f0bcc7 → #ddb8ea` …). They are **not tokens** — promote to tokens if reused.
- **Home glow:** `.main.is-home` background = two orange radial gradients at the bottom (`22%` and `8%` of primary) over canvas.
- **TeeTee waves:** animated canvas of soft orange waves on grey cards/ask areas.
- **Three-star illustration:** one large `gold-300` star centre, two `gold-500` side stars, three faint rays (tertiary @ 35%), no outline, 66px.

---

## 4. Patterns and behaviours (the rules that make pages feel the same)

### 4.1 Page header + filters
Title left; **tools right**. Filters are **four 148px dropdowns in one row**, 12px apart, 8px radius, order = *Cohort → Learner → (Agent | Roleplay) → Date* ("All cohorts", "All learners", "All twin agents"/"All roleplays", "Last 30 days"). Filtering re-computes the table **and every number**. Empty result → "No sessions match these filters."

### 4.2 Summary block (Twin sessions, Roleplay sessions) — see §6.4 for pixel specs
Order: **summary cards → 4 tiles → "Needs a look" → rule → table title → table.** No other rules.

### 4.3 "Needs a look" attention strip
Eye icon + "Needs a look" (13/500) then tone chips in **priority order** (danger → caution → info), each with ↗. Pressing a chip **filters the table** and shows a "Show all" text link; the info chip jumps to the Inbox.

### 4.4 Table title
Overline-style `TWIN SESSIONS` / `ROLEPLAY SESSIONS`, **1px `#E9E9E9` rule above it** (20px padding below the rule), 12px to the table.

### 4.5 Assign popup (twin agent / roleplay)
Width 640. Toolbar: **search (open, ≤360px) on the left, cohort select on the right**. Then **one white table card** (1px `#E9E9E9`, radius 12, max-height 340, scrolls) with a **sticky grey header** (`#F0F0F0`): `[select-all] | Learner | Minutes | Access until` (columns 38 / flex / 96 / 150; "Learner" aligns with the **name text**). Rows: checkbox · 32px avatar · name 14/500 + email/phone 12px · **minutes dropdown (96×32)** · **date field (150×32)**; controls show on ticked **and assigned** rows (assigned are editable instantly, greyed name/avatar). **Defaults on tick:** 30 min, "30 days". **"Save and Assign"** disabled until someone is ticked and every ticked learner has both. Toast: "Assigned to Nora for 30 min, until 30 Nov 2026."

### 4.6 Respond (question or report)
Dialog 520 → grey context box → "Your answer" textarea → **voice reply** (mock recorder: red pulsing dot + timer → "Voice reply · 0:12" chip + Remove) → note "Sent to {first} by email. Your twin will use it next time." → **Cancel / Send by email** (disabled until text or voice). Success: toast + row becomes a green **Responded** badge (questions) or leaves the list (reports).

### 4.7 Reports raised (panel)
Row = name+avatar left, **day + time only** right ("Today, 8:15 am") → **one grey box**: overline **LEARNER'S REPORT** · reason 16/24 600 · flagged turn in *italic, secondary, “double quotes”* (inner quotes become ‘single’) · **Respond** small secondary button inside the box at the right. **One CTA only.** Reasons are the *learner's* words: Wrong or inaccurate answer · Out of date information · Didn't answer my question · Hard to follow · Too long · Other.

### 4.8 Rating / feedback
"Feels like me" saves instantly. **"Feels off" always asks why** in the shared popup ("Why does this feel off?": reason chips — Too generic · Too long · Doesn't sound like me · Missing an example · Something else — + optional note; empty submit → "Pick a reason first."). Learner feedback is a **5-star rating + optional comment** ("How helpful is Olga's twin?" Not at all helpful … Extremely helpful).

### 4.9 Defaults, states, validation
- **Disabled primary = grey (`#F0F0F0`) + muted text**, enabled only when the form is valid; never hidden.
- Defaults are **pre-filled and visible** (30 min, "30 days"); required choices start empty ("Select").
- Hover: rows/cards lift by colour not size; icons buttons get `#F0F0F0`. Focus: **2px orange ring, offset 2px** on every interactive element.
- Destructive/irreversible → confirm dialog with Cancel + action.
- Toasts: one sentence, past tense, no exclamation ("Response emailed to Aisha. Your twin will use it next time.").

### 4.10 Redirect arrows
A small **↗** at the right edge means "take me to the thing behind this number/row". Tiles: Issues reported → filters the table to issues; Questions → Inbox › Ask Olga; Sessions / Average score → scroll to the table; **minutes tiles have none**.

---

## 5. Copy rules
- **"Roleplay"** is one word everywhere. **Twin** and **Roleplay** are the two product halves.
- Titles are sentence case, 1–3 words (Average help score, Paid by learners, Needs a look, Reports raised). Overlines are UPPERCASE via CSS, written in sentence case in code.
- Buttons are verbs/phrases: **Save and Assign · Send by email · Respond · Create and publish · Try roleplay · Save as draft · Show all · Invite learners · Calibrate · Copy link**.
- Counts: "21 sessions rated", "6 purchases", "1 extension" (no "of 27").
- Stat notes that repeat the label are **deleted** (tiles show only icon + label + number).
- Quotes use “double quotes” (and ‘single’ inside); apostrophes are typographic (’).
- Dates: "Today, 8:15 am", "Yesterday, 4:20 pm", "Monday, 9:18 am", "30 Nov 2026".

---

## 6. Screen-by-screen specification

Each entry: **what it is · route/state · composition (top→bottom) · notable measured values · reference file(s).**

### 6.1 Twin agents (list) — nav *Twin agents*  · `twin-agents.png`, `m_twin-agents.png`
Header: title "Twin Agents" + `.lib-tools` = **credit pill** (`800 / 1000 minutes used`, ring) + orange **Create new**. Heading `h2.page-title` "Twin agents for specific use cases". **3-up grid of agent cards** (§3.5; art variant `rp-art--twin` = quote bubble with a 40px video face). Card ⋮ menu: Edit, Calibrate, Assign, Share, History, Pause, Remove.

### 6.2 Home — nav *Home* (phone) / first screen · `home.png`, `m_home.png`
Heading "Good afternoon, Olga!" in the header (no tools). **Usage card** (white, radius 16, padding `20 24 24`): title 18/26 600 + "Resets Nov 1", subtitle, `580 credits left` (28/36 600), **8px meter** (orange fill on `#F0F0F0`), "1,420 of 2,000 used", then **3 usage tiles** (`#F7F7F7`, radius 12, padding 16: overline, 28px number, split bar orange/blue, legend dots). Then **"Your action needed"** section: list card with an action row (photo, title 15/22 600, sub 13/18 secondary, small secondary "Configure", ⋮). Background: bottom orange glow.

### 6.3 Twin agent detail — card *The off-plan sales process* · `twin-agent-detail.png`, `m_twin-agent-detail.png`
Back bar: **← Back**, right: date-range filter (pill), orange **Calibrate**, ⋮. Two columns (equal): **left agent card** (radius 16, padding 24: title 18/24 600 → overline WHAT IT DOES + description → overline ANSWERS ONLY ON + **info pill** + 3 ✓ lines (16px success check, 14/20 secondary: "5 files", "60 conversation samples", "Anything else goes to you as an unanswered TwinQnA") → **Usage credit grey box** at the bottom: overline, "190 of 300 min used" 18/600 + 14 muted, "110 minutes left" 13px; **no bar**) and **Report card** (Sessions/Help score/Avg response/Avg session tiles in soft tones — success/caution/info/neutral — plus a weekly bar chart and a feels-like-me line chart). Below, full-width cards: **"Questions your twin couldn't answer"** (rows: question 14px left, small secondary **Respond** right → green "Responded") and **"Reports raised"** (Total reports **16 ↗** link opens the panel, Most common report). Then the **Calibration | Sessions** segmented section.
Panel: `twin-agent-reports-panel.png`; dialog: `twin-agent-respond-dialog.png`.

### 6.4 Twin sessions & Roleplay sessions — nav *Twin sessions* / *Roleplay sessions* · `twin-sessions.png`, `roleplay-sessions.png`, `twin-sessions-filtered.png`, `m_twin-sessions.png`
**Header:** icon title + 4 filters (§4.1).
**Summary cards** — two equal columns, gap 16, each **108px**, radius 12, 1px `#F0F0F0`, e1, padding `20 24`, content left-aligned, secondary fact at the right edge on the **same text baseline as the number**:
- **Average help score** — 66px 3-star illustration · title (14px star icon + 15px secondary "Average help score") · **"4.1 / 5"** (32/600 + muted 15) · right: "21 sessions rated" 14px secondary.
- **Paid by learners** — **64px ring (success fill, % centred)** · title (coin icon) · **"AED 360"** 24/600 under the title · right: "6 purchases" (Twin: "1 extension").
**Number tiles** — 4 across, gap 16, **212×~98**, radius 12, `#F7F7F7`, padding `16 20`: label (14px icon + 14px secondary), number **32/600 tabular nowrap** (unit "/ 100" 18/500 muted), **↗ button (28px, ghost) at the right, vertically centred on the number** (none on the minutes tile). Twin: *Sessions · Twin minutes · Questions · Issues reported*. Roleplay: *Sessions · Practice minutes · Average score · Issues reported*. **No notes, no rules.**
**Needs a look** strip (§4.3). Roleplay chip wording: "N reported problems", "N sessions with a low scorecard or a client that didn't feel real" (low = score < 70 or rating ≤ 3).
**Rule + title + table** (§4.4). Twin columns: *Learner · Twin agent · Minutes · Questions discussed · Helpfulness*. Roleplay columns: *Name · Scenario · Score · Weakest area · Rating*, date·length in grey under the name, issue chip under the rating.
**Phones (≤720):** cards stack (one column); **each card becomes a column: picture (stars / ring) above the title**, number + count on one row beneath; tiles go **2×2** (label 13px nowrap, padding `16 12`); chips wrap inside the pill; the table keeps its columns and **overflows horizontally** (known gap, §9).

### 6.5 Twin session report — click a Twin sessions row · `twin-session-report.png`
Back bar "← The off-plan sales process". 720px column: **header card** (avatar, learner name, agent, date·length, video thumbnail 240×~135 with "Recording · 6 min"), **Learner feedback** card (stars + "4 / 5 · How helpful is Olga's twin?", quote, "Issues reported" with caution badge + sentence), **Topic discussed** chips, **Transcript** (grey field with white bubbles; each twin turn has Feels like me / Feels off). Card padding `20 24`, radius 16, gap 16.

### 6.6 Calibration thread — Twin agent › Calibration tab › a row · `calibration-thread.png`, `calibration-feels-off-dialog.png`
Back "← Calibrations". Twin photo 56px + "Olga's twin"; 3 metric cards (FEELS LIKE ME 5 / FEELS OFF 2 / RESPONSE ACCURACY 71%: overline + 28px number + 13px caption; white cards radius 16, e1); date "Today, 11:11" (13px secondary, centred); the **bubble thread** (§3.11). "Feels off" → dialog (§4.8).

### 6.7 Twin's brain — nav *Twin's brain* · `twins-brain.png`
Full-bleed **dotted canvas** (no page padding). Top bar: "← Back", centre caption "Twin's brain · Last updated 2 days ago", orange **Done** at the far right. Three **node cards** left→right joined by curved connectors: *Knowledge* (sources list with counts, Google Drive/Notion "Connected" success badges, Edit), *Training style* (3 style bullets + Edit), *Voice and avatar* (photo, "Walkthrough", audio waveform, Edit / Calibrate). Node = white card radius 12–16, e1, small coloured tag above (Knowledge = info, Training style = caution, Voice and avatar = success). Zoom control bottom-right (− 100% +).

### 6.8 Scenarios (roleplay list) — nav *Scenarios* · `scenarios.png`, `scenarios-draft-tab.png`, `m_scenarios.png`
Header: title + `.lib-tools` = **search pill** + orange **New**. Section head "Created roleplays" + **segmented Published | Draft** + grid/list view toggle (icon seg). **3-up scenario cards** (§3.5). Empty draft tab: centred icon, "No roleplay created recently", secondary "Create roleplay" in a full-width padded box.

### 6.9 Scenario builder — *New* · `scenario-builder-1…5.png`
Back bar "← Build roleplay" (+ headset icon button right). `create-scroll` padding `44 32 32`, **720px column**. Top: **TeeTee card** ("What type of roleplay to build", 3 suggestion pills, ask box) — collapses to a "Generate with AI" line when closed. Then **builder card** (radius 24, body padding 24): **tabs** `div.role-steps.seg` — *Scenarios · Agent role · Learner · Rubric · Success* (each with a 22px number badge → success check when done) → **step head** (title 20/28 600 + sub 14/20 secondary) → **step body** (labels 15/20 600, inputs 40px, textareas 72–90px; Agent role = **persona library**: horizontally scrolling 72px photos with name 14/20 500 + role 13/18 tertiary, then "Opening line" input with a sparkle button inside the bottom-right; Learner = role + **goal list** with "Add goal" button and a small "Tips to create goals" button; Rubric = rows `label · pts number input (≈60px) · Remove`, add row, helper 13px; Success = outcome textarea + "How the call can end" Agrees/Declines when fields) → **step actions** (top rule 1px `#E9E9E9`, padding-top 16, gap 12): *Back* (ghost) … *Next* (orange); last step: *Try roleplay* (secondary) · *Save as draft* (secondary) · **Create and publish** (orange).

### 6.10 Roleplay session report — click a Roleplay sessions row · `roleplay-session-report.png`
Same structure as 6.5: header card (learner, role, date·length, "Spoke with Ravi" + persona avatar, video), **Learner feedback**, **Scoring rubric** (total "74 / 100"; rows `criterion · bar (orange fill on #F0F0F0) · 26 / 30`), **Learner goals** (✓ "Met" success badge), transcript.

### 6.11 Persona library — nav *Persona* · `persona-library.png`, `persona-detail.png`, `m_persona-library.png`
`page--wide`. Header: title + orange **Create persona**. Panel head: "Real estate sales personas" (20/28 600) + intro 14/20 tertiary. **4-up persona cards** (§3.5). Detail: back "← Persona", large card: 72px photo + name 20/28 600 + location + role chip + **Edit** (secondary, right); then a two-column definition table (overline-style labels 12px UPPERCASE tertiary left, values 14–15px right: BACKGROUND, LEAD SOURCE, BUDGET, TIMELINE, AREAS, MOTIVATION, WHAT MATTERS MOST (tags with %), CONSTRAINTS, PET PEEVES, BEHAVIOUR); sticky orange **Create roleplay** pill at the bottom centre.

### 6.12 Inbox — nav *Inbox* · `inbox-all.png`, `inbox-requests.png`, `inbox-ask.png`, `inbox-issues.png`, `inbox-ending.png`, `inbox-roleplay-tab.png`, `m_inbox.png`
Header: bell/inbox title + **Twin | Roleplay** segmented control with orange count badges. **Two-column layout (gap 20):** left **232px menu** (Gmail-style: *All alerts · Access requests · Ask Olga · Reported issues · Access ending soon*; item 40px pill, 14/20, **selected = `--tt-primary-subtle` bg + 600 text**, orange count badge right) · right **pane** (white, radius 16, 1px `#E9E9E9`, padding `20 24`, gap 12). In "All alerts" the pane stacks sections (`h2` 17/24 600 + count badge, sub 14/20 secondary); inside a single view the sub becomes the pane title. **Cards** `.inbox-card` (radius 16, 1px `#E9E9E9`, padding `16 20`): who-line (22px avatar + name 600 + secondary detail), **title 16/24 600**, agent badge, quote blocks (overline label 11/16 + text; "Twin said" = 14/20 on `#F0F0F0`, radius 8, **3px danger left border**), **actions on the right as small buttons** (Answer / Dismiss, Correct the answer / Mark resolved, Open session, Open access). Requests render as a bordered list with tone badges (Free trial · info, Paid · success). Small CTAs, strong hierarchy.

### 6.13 Settings — nav *Settings* · `settings.png`, `m_settings.png`
Header "Settings". Block "Olga Sinenko" (18/24 600) + one-line description (14/20 secondary). Overline **MODULES** → card with two rows (name 14/500 + help 13/18 tertiary, **switch** right; rows padding `12 0`, divider). Overline **ACCOUNTS** → **4 settings cards** (Usage, Cohorts, Learners, Team): centred 36px tinted icon tile (different soft colour per card) + name 15/22 500.

### 6.14 Accounts › Cohorts · Learners · Team · `accounts-cohorts.png`, `accounts-learners-twin.png`, `accounts-learners-roleplay.png`, `accounts-team.png`
Back "← Settings" above the title; header = icon title + orange primary (**New cohort / Invite learners / Invite member**). Section head: title 18/24 600 + **subtext 14/20 secondary** and, on the right, the **filter** ("All cohorts" / "All roles", 148×32, 8px radius). **Learners:** segmented **Twin users | Roleplay users** sits above the "All learners" heading. Tables per §3.6 (cohort badge in grey, status badges Active = success / Ending soon = caution / Invited = caution, usage bars).

### 6.15 Profile · `profile.png`
Single narrow column (≈420–625px): overline PROFILE, name (18/24 600), lede 15 secondary; **Email/Account** card (radius 12, padding 16, overline labels + values); **Coaching type** card (overline, description, badges, "Not right? Change" link); secondary **Log out** button with icon.

### 6.16 Analytics · `analytics.png`
Title "Analytics"; heading "How your twin is doing" + subtitle. **Ask card** (grey `#F0F0F0`, radius 16, padding 20, waves) with title, white ask box, 4 topic pills. **Roleplay analytics**: section head + 4 stat cards (white, radius 12, overline + 28px number + caption) + table. **Your Twin report** with 4 more stat cards. Floating pill ask bar (translucent white, radius 999) at the bottom.

### 6.17 Gen videos · `gen-videos.png`
Header icon title + orange **Create video**. Hero card (grey, centred twin photo, "Let's make a video — Tell me what the video should be about!", ask box). "Your videos" grid: **3-up portrait video tiles** (radius 16) with duration chip top-left, caption bottom, small **Publish** (orange) / **Review** (secondary) buttons.

### 6.18 Ask my twin · `ask-twin.png`
"New chat" header; a centred **hero card** (`article.twin-hero`, radius 16, soft grey→white wash, padding 16) with the line "Create your twins for specific usecase!" (15/22 600, centred) and a **640px white ask box** (`form.home-ask`, radius 16, padding 14, 120px tall: textarea on top, below a row with the type dropdown "Bot", "Attach", mic and an orange 32px round send).

### 6.19 Create twin agent · `twin-agent-create.png`
Back bar "← Create use case"; 720px column: **TeeTee card** ("What type of twin agent to build", 3 pills, ask box) + collapsed card "New use case — Knowledge, course materials and settings" with chevron.

### 6.20 First-run onboarding · `home-onboarding-find.png`, `onboarding-2-knowledge.png`, `onboarding-3-style.png`, `onboarding-4-presence.png`, `onboarding-5-tasks.png`
Centred wizard: title "Setup your Twin" (18/24 600) + subtitle (15 secondary) + **stepper** (3 steps: Find you · Knowledge & training style · Twin presence). **Setup card** (radius 24, padding 32, width 700; active step has a faint orange shine border): step title 20/28 600, field (label 8px above, input 40px), hint 13/20 tertiary, orange **Continue** (right). Knowledge step = source cards (2-up) + upload + connect-sources cards; style step = selectable video cards (2-up, thumbnail + title + "Kept" checkbox); presence step = photo carousel + voice choice + **Meet my twin**.

### 6.21 Dialogs gallery
`credit-dialog.png` (Credit usage: two bordered rows with label + `800 / 1000`, thin bars, caption, **Done**) · `assign-twin-dialog.png`, `assign-calendar-open.png`, `assign-roleplay-dialog.png`, `m_assign-dialog.png` · `try-as-learner-dialog.png` (title, roleplay name + description, grey "YOU WILL TALK TO" persona card with photo, Cancel · **Join session**) · `twin-agent-share-dialog.png` (framed icon tile, title, helper, "Distribution link" input + **Copy link** secondary).

---

## 7. How to build a new page (recipe)
1. **Frame:** put it inside the shell (rail 214 + canvas main). Content column **896** (`page--library`, padding `20 64 32`), or **720** for a create flow, or full-bleed for canvases.
2. **Header:** `lib-head` → icon title (16/22 600) left; filters/primary action right. One orange button max.
3. **Group content into cards (white, radius 16, 1px `#F0F0F0`, e1)**; grey (`#F7F7F7` / `#F0F0F0`) only for *inset* elements; 16px between cards.
4. **Numbers:** 32/600 tabular, label above (14 secondary + 14px icon), optional ↗ right.
5. **Lists = tables** (header `#F7F7F7` UPPERCASE 12px; rows 14/20, padding `14 20`, 1px `#E9E9E9` dividers, trailing ↗).
6. **Status = tinted pill** (badge/chip). Counts = orange 18px badge. Ratings = stars + label.
7. **Actions in a row = one small secondary button**; in dialogs = Cancel + primary (disabled until valid).
8. **Popups = the shared dialog** (radius 24, 4px white border, gradient, 24 padding); lists beside the page = **right-edge panel**.
9. **Copy:** sentence case, "Roleplay", verbs on buttons, full-sentence toasts.
10. **Phone:** drop the rail for top bar + bottom tab bar, one column, stack cards with the picture above the title, tiles 2×2, make dialogs `100vw − 32`.
11. **States:** focus ring 2px orange; hover = soft grey; disabled = grey + muted text; show defaults.

---

## 8. Component inventory vs the design system (what is new / changed)
| Item | In system today? | Action |
|---|---|---|
| Rail 214px, orange-ink active item | rail exists (248) | update width + active-item spec |
| Summary card, Number tile, Attention chip | no | **add** |
| Side panel (drawer), Respond dialog, Calendar popover | no (date field rules only) | **add** |
| Sticky grey table header in a card; table title with rule | partial | **add** |
| Filter dropdown 148px, 8px radius | dropdown = pill | **decide** (§9) |
| Segmented control (Twin/Roleplay, Published/Draft, tabs) | yes | align to measured spec |
| Grey highlight box (report/usage/context) | no | **add** |
| Chat bubbles (dark / tinted) | no | **add** (conflicts, §9) |
| Toasts (tone-subtle + circle icon + countdown) | partial | align |
| Ring progress | no | **add** |
| Pastel art tiles, home glow, waves | no | token-ise or mark as illustration |

---

## 9. Known gaps, inconsistencies and decisions needed
1. **Orange everywhere.** `app.css` has an `EXPERIMENT` block that makes **every** `btn--strong` (and the mic send, flow start node) **orange**; the dark CTA is the system's original. Delete the block to return to dark CTAs. Needs a decision (D04).
2. **Button weight:** most CTAs are 600, but the page-header **Create new** measures **500** — normalise to 600.
3. **Chat bubbles:** the twin tint (orange-subtle) and Olga's dark bubble extend D03/D04 (see companion file ⚑1–⚑2).
4. **Filter radius 8 vs pill 999:** page-header filters were changed to the form-field radius; the agent-detail date range and the credit pill remain pills.
5. **Number tiles use `--tt-surface-sunken`**, which flips *darker than canvas* in dark theme.
6. **Builder tabs still show 22px number badges** (1–5 → check when done) although "remove numbers" was requested at one point — confirm which is intended.
7. **Phone gaps:** (a) the Assign popup's columns **overlap** on 390px (header "Learner/Minutes" collide, name hidden behind controls) — needs a stacked row layout; (b) data tables keep all columns and **overflow horizontally** (Rating column cut off); (c) home/usage and Settings are fine.
8. **Hard-coded colours:** pastel art gradients (`#a8c6ec`…), toast icon `#fff`, avatar tints — promote to tokens.
9. **Prototype-only behaviour (do not spec as product rules):** the voice recorder is a mock timer, "emailed" is a toast, report/learner lists and the "Answers only on … 5 files, 60 samples" copy are generated placeholders.
10. **Dark theme** tokens exist (`--tt-*` overrides) and a theme switch is in the rail, but dark visuals were not audited here.

---

## 10. Reference index (files in `design-system/onboarding-v3-reference/`)
**Desktop 1440×900:** `home`, `twin-agents`, `twin-agent-detail`, `twin-agent-reports-panel`, `twin-agent-respond-dialog`, `twin-agent-create`, `twin-agent-share-dialog`, `twin-sessions`, `twin-sessions-filtered`, `twin-session-report`, `calibration-thread`, `calibration-feels-off-dialog`, `twins-brain`, `scenarios`, `scenarios-draft-tab`, `scenario-builder-1…5`, `roleplay-sessions`, `roleplay-session-report`, `persona-library`, `persona-detail`, `inbox-all`, `inbox-requests`, `inbox-ask`, `inbox-issues`, `inbox-ending`, `inbox-roleplay-tab`, `settings`, `accounts-cohorts`, `accounts-learners-twin`, `accounts-learners-roleplay`, `accounts-team`, `profile`, `analytics`, `gen-videos`, `ask-twin`, `credit-dialog`, `assign-twin-dialog`, `assign-calendar-open`, `assign-roleplay-dialog`, `try-as-learner-dialog`, `home-onboarding-find`, `onboarding-2-knowledge`, `onboarding-3-style`, `onboarding-4-presence`, `onboarding-5-tasks` (`.png`).
**Phone 390×844 (`m_…png`):** `twin-agents`, `twin-agent-detail`, `twin-sessions`, `scenarios`, `inbox`, `settings`, `persona-library`, `assign-dialog`, `reports-panel`, `home`.
**Raw measurements:** `computed-styles-census.json` — for every capture, every classed element's computed font, colour, background, radius, border, padding, gap, shadow and size (use it to look up any value not listed above).
