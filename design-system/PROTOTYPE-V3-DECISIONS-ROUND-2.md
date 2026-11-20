# Onboarding prototype V3 — round 2 decisions to fold into the design system

> Source: the V3 onboarding prototype (`onboarding-prototype/v3/app.js`, `app.css`), polished screen by screen with Bhuvan.
> Purpose: a hand-off list for updating `design-system/foundations.html` (and, through it, the generated
> `TRAINERTWIN-DESIGN-SYSTEM.md` / `DECISIONS.md`). Same format as `ONBOARDING-V3-DECISIONS-FOR-FOUNDATIONS.md`.
> **This file is not generated and nothing in it has been applied to the design system yet.**
> Build at time of writing: `app.js?v=1182`, `app.css?v=1154` (local). Deployed to Vercel: `app.js?v=1182`, `app.css?v=1153`
> (the only difference is the semi-bold Persona names, item 4.9).

How to use it: every item says **what**, **the exact values**, and **where it belongs in foundations.html** (section names follow
the headings in that file). Items marked **⚑ CHECK** conflict with, or stretch, a rule already in `DECISIONS.md` and need a
yes/no from Bhuvan before they go in. Bhuvan decides every ⚑ item.

Section map of `foundations.html` used below:
- **Colour** — "Cool neutrals, one loud accent" (`#color`)
- **Type** — "Figtree in the product…" (`#type`)
- **Shape & space** — "4pt base, five radii, and one dark-mode rule" (`#shape`, `#space-table`)
- **Components** — "Every element, in both themes" (`#components`)
- **Screens** — "The things that define a screen"
- **Decisions** — "What I decided for you, and what I didn't" (`#decisions`)

---

## 0. Read first — conflicts and open questions

| # | Item | Why it needs a decision |
|---|---|---|
| ⚑1 | **One shared list/table shadow**, `0 2px 4px rgb(30 28 25 / .035), 0 8px 20px rgb(30 28 25 / .055)`, on every list table and the Plan / Billing information cards (§1.1) | It is not `--tt-elevation-1` (`0 1px 2px rgba(30,28,25,.06)`). It was already hard-coded on 4 tables; this round put it on 6 more. Decide: new token (suggest `--tt-elevation-list`) or fold into elevation-1. |
| ⚑2 | **Inline semi-bold (600) inside running text** — plan price, renewal date, "100 credits", "$25.00" (§3.6) | Weight rule: 600 is for titles and row names, 500 for inline emphasis (`b`/`strong`). The prototype uses 600 for the values a person scans for. |
| ⚑3 | **Yellow "Add-on" tag** uses `badge--caution` plus a 1px border and a crown icon (§3.5) | `--tt-caution` (gold) is the warning colour; "Add-on" is not a warning. The border is `color-mix(in srgb, var(--tt-caution) 40%, transparent)` — not a token. |
| ⚑4 | **Form fields in dialogs are 40px**, not 36 (§3.9) | DS says 36 (D110, still Open). Support and Edit-billing dialogs follow the build, not the spec. |
| ⚑5 | **Dialog corner radius** stays 24 (4px white border) | Already an open question in the DS (16 vs 24). Both new dialogs use the prototype's 24. |
| ⚑6 | **Activity-log side panel is 480px** (`min(480px,100vw)`) | DS side panel is 560px (D-side-panel). The prototype's existing `.sidepanel` is 480. |
| ⚑7 | **Hard-coded colours with no token**: activity dot "tried" `#7C93D6`, wave second stop `#FF8A4C` (§6.3, §4.4) | Both should become tokens, or be swapped for existing ones (`--tt-info`, `--tt-orange-400`). |
| ⚑8 | **Orange primary count per view** — Usage has one (Buy credits), Billing has one (Buy credits), the learner page has one (Add credits); the dialogs each have one (Send / Save changes) | Confirm this matches "one orange per view or dialog" (D107). Usage → Details has none. |
| ⚑9 | **Invoice list has no card chrome** (no border, no shadow, rows flush left/right) while Plan and Billing information are shadowed cards | Two table treatments on one page. Decide whether "borderless list" is a named variant of the Table component. |
| ⚑10 | **The 60px gap above the first block** on Billing (`.bl-grid { margin-top: 60px }`) | Not on the spacing scale as a named step (4pt scale: 48/64 exist). Round to 64, or keep 60. |
| ⚑11 | **Persona list header bar shows "Voice" only when at least one persona has a voice** | Behaviour, not style — confirm it should be a rule or left as prototype-only. |
| ⚑12 | **Wave animation uses a third-party library** (`react-animated-waves`, canvas) bundled into `vendor-waves.js` | The DS has no canvas / animation-library rule. Decide whether the recorder wave is a documented component or a prototype-only. |
| ⚑13 | **Prototype-only behaviour** that must not become a rule: Add credits adds 30 min in memory; CSV exports the filtered list; sessions, invoices, learners, credits and names are made-up sample data (§7) | Listed so nobody builds from them. |

---

## 1. Tokens — no new colour, radius or spacing value except where flagged ⚑

### 1.1 Elevation
| Use | Value | Where used |
|---|---|---|
| List / table / data card | `0 2px 4px rgb(30 28 25 / .035), 0 8px 20px rgb(30 28 25 / .055)` | `.an-table`, `.cal-list`, `.sess-list`, `.act-list` (already), **plus** `.us-table`, `.set-voices`, `.rp-table-card`, `.rps-list[role=list]`, Billing **Plan** and **Billing information** cards |
| No shadow, no border | Invoices list (`.bl-card.bl-inv`) | Rows only, flush, 1px dividers |
| Flat views (`.an-flat`) | none | unchanged; `.us-table`, `.rp-table-card` also drop it there |

**Belongs in:** Shape & space (elevation table) + Components → Table. ⚑1.

### 1.2 Weights (existing tokens, applied in new places)
- `--tt-weight-title` (600): learner / persona / row names, invoice price, credits-table note + amount, page / section / card titles, plan price + renewal date, "100 credits" + "$25.00" (⚑2).
- `--tt-weight-label` (500): table header cells, badges, field labels (unchanged).
- 400: everything read (descriptions, emails, dates, credits-added amount in the invoice list).

### 1.3 Radius (existing)
- 16 (`lg`): tables, list cards, Plan / Billing cards.
- 12 (`md`): the Minute packs box inside the Plan card; Credits-left card on the learner page uses the `.card` radius (16).
- 10: the 36px icon tile (new value ⚑ — closest tokens are 8 and 12).
- 999: tags, badges, chips, range switch, pill buttons.
- 24: dialogs (⚑5). 24 left corners: side panel.

### 1.4 Spacing used (4pt scale)
- Page → first block: 60 on Billing (⚑10); 32 between page sections (`--tt-space-8`).
- Card padding: 16×20 (Plan, Billing info rows 14×20), 20 (Credits-left on Usage), 16×20 (Credits-left on learner page).
- Table row padding: 14×20; header row 10×20.
- Dialog padding 24; stack gap 8; actions row gap 12, margin-top 16.
- Between the Plan row and the Add-on box: 12 margin + 16 card gap = 28.

### 1.5 Type sizes used (all Figtree)
| Role | Size / line | Weight |
|---|---|---|
| Page title with icon mark | 18 / 24 | 600 |
| Section heading (Plan, Invoices…) | 18 / 24 | 600, tracking −.015em |
| Section / page sub | 14 / 20 | 400 secondary |
| Table header cell | 12 / 18, +.04em, uppercase | 500 secondary |
| Table body | 14 / 20 | 400 |
| Row title (name) | 15 / 22 | 600 |
| Row sub (email, time) | 13 / 18 | 400 secondary |
| Big number (Usage remaining) | 40 / 44 | 600, unit 18 / 400 secondary |
| Big number (learner Credits left) | 28 / 32 | 600, unit 18 secondary |
| Eyebrow ("CREDITS LEFT") | 12 / 18, +.06em, uppercase | 500 secondary |
| Dialog title | 20 / 28 | 600 (matches DS dialog spec; the prototype was 16/22 and was corrected) |
| Dialog sub | 14 / 20 | 400 secondary |
| Field help | 13 / 20 | 400 secondary |
| Badge / tag | 12 / 20 | 500 |

**Belongs in:** Type table (add the rows that are not already there), Components → Table, Dialog.

---

## 2. Icons (Tabler outline, 24×24 viewBox, `stroke-width: 2`, round caps and joins, `currentColor`)

| Icon | Used for | Size |
|---|---|---|
| `credits` (coins) | Usage nav item, Usage page mark, invoice type "Minute pack Add-ons credits" | 20 in rails / 20 in tile |
| `billing` (credit card) | Billing nav item, Billing page mark, invoice type "Plan renewal" | 20 |
| `lifebuoy` | Support nav item, Support header button | 20 / 16 in button |
| `mail` | Billing emails row | 20 in tile |
| `building` | Legal name row | 20 in tile |
| `mappin` | Billing address row | 20 in tile |
| `phone` | Phone row | 20 in tile |
| `crown` | Add-on tag | 14 inside the tag |
| check (`M5 12l5 5l10 -10`, stroke 2.5) | Active tag | 14 inside the tag |
| `receipt` (receipt-2) | added then not used (invoices went back to card / coins) | — |
| list (3 dots + 3 lines) | Activity log button | 16 |
| download | Download CSV, invoice menu | 16 / 18 |
| arrow up-right | Session row "open" | 14 |
| `learners` (existing) | Twin users nav + page mark | 20 |

Rules: one stroke weight (2) everywhere; tag icons 14; tile icons 20; button icons 16; nav icons 20. The 36px grey tile (§3.7) is the only container for a row icon.
**Belongs in:** Components → a new **Icons** list (there is none today), plus nav spec.

---

## 3. Components

### 3.1 List table — new variant "labelled table" (Usage, Twin users, Persona list, learner Sessions)
- Container: `--tt-surface`, 1px `--tt-card-border`, radius 16, `overflow: hidden`, shadow §1.1.
- **Label bar** (header row): `--tt-surface-sunken`, uppercase 12 / 18 500, +.04em, secondary; padding 10×20; **radius on the top corners only** (an explicit rule was needed because `:last-of-type` also matched it).
- Rows: grid, gap 12, padding 14×20, divider 1px `--tt-border`. Numeric cells right-aligned, tabular figures.
- **Clickable row**: `cursor: pointer`, hover `--tt-surface-sunken`, focus-visible 2px `--tt-primary` outline at −2px offset, `tabindex=0`, Enter / Space activates.
- Phone width (≤720): keep first + last column, hide the rest.
- Examples: Credits added (Note / Date / Expires / Credits), Twins and role plays, Team, Learners (Usage → Details); Twin users (Learner / Email / Assigned / Credits given / Until / Credits used); Persona list (Persona / Role / Traits / Voice); learner Sessions (Learner / Topics / Duration / Helpfulness / ↗).
**Belongs in:** Components → Table (add "label bar" and "clickable row").

### 3.2 Credits-used cell (Twin users)
Bar 6px, radius pill, track `--tt-fill-soft`, fill `--tt-text-primary`; full bar turns `--tt-caution`. Under it "N used · M left" 13 / 18 secondary; when 0 left a yellow **Low** badge sits after it. Minimum visible fill 3% when anything is used.

### 3.3 Page header with a tool button (Usage → Activity log, Billing → Support)
Title row: 28px icon mark + title 18 / 24 600; sub below 14 / 20. **One secondary (white pill, md) button, top-right, level with the title**; a 16px icon sits before its label. No divider under the header on Usage / Billing (`.us-page .set-head` border 0, margin-bottom 16).
**Belongs in:** Screens → page header.

### 3.4 Segmented control + range switch
- Segmented tabs (Overview / Details, Sessions / Credits): existing `.seg`.
- Range switch (7d / 30d / 90d): text pills 14, pressed = `--tt-fill-soft` pill, no border, right-aligned in the section header.

### 3.5 Tags / badges (extends §Badge)
| Tag | Style | Notes |
|---|---|---|
| Active | default badge (`--tt-fill-soft`, secondary text) + **check icon 14** before the text, padding-left 8, gap 4 | height stays 24 |
| Add-on | `badge--caution` + **crown 14** + **1px border** (caution 40%) | sits right after the title (⚑3) |
| Paid | default badge | |
| Low | `badge--caution` | existing |

### 3.6 Inline semi-bold values
`<b class="bl-price">` = weight 600, `--tt-text-primary`, no size change. Used for the plan price, renewal date, credit count, pack price. (⚑2)

### 3.7 Row icon tile
36×36, radius 10, `--tt-fill-soft`, icon 20 in `--tt-text-secondary`, `flex: none`, 12–16 gap to the text. Used in the Billing information rows and the invoice rows.

### 3.8 Label / value row (Billing information)
Row = tile + label (15 / 22 600, flex 1) + value right-aligned (14 / 20 secondary, `max-width: 60%`, `white-space: pre-line` so a multi-line address breaks on newlines). Rows separated by 1px `--tt-border`, padding 14×20. Card = shadowed list card with no inner padding. Section head: title 18 / 24 + **Edit** (ghost sm) on the right.

### 3.9 Dialogs — Contact support, Edit billing information
- Native `<dialog>`, `issue-dialog` / `issue-card`; width `min(660px, 100vw − 32)`; padding 24; stack gap 8.
- **Title 20 / 28 600**, sub 14 / 20, label 13 / 500, input 40 (⚑4), help 13 / 20.
- Close = 32px ghost icon button at top 12 / right 12.
- Actions: Cancel (ghost) + primary (orange), right-aligned, gap 12. **Primary disabled until valid.** Esc and a scrim click close.
- Support: Subject (text) + Message (textarea, min 84); Send enabled when both have text; toast "Message sent. We’ll reply to your email."
- Edit billing: Billing emails (+ help "Separate several emails with commas."), Legal name, Billing address (textarea, 3 rows, newline = line break), Phone (tel); Save changes needs emails + legal name + address; toast "Billing information updated."
- Opened from: Support nav item and the Billing header button (same dialog).
**Belongs in:** Components → Modal / Dialog.

### 3.10 Side panel — Activity log
Right-edge panel (existing `.sidepanel`: fixed right, full height, scrim, 24px left corners, slide-in once). Head: title 18-ish `card-title` + sub, close ghost icon. **Toolbar** under the head: filter select (Everything / Calls / Credits added), entries count (13, secondary, right), **Download CSV** (secondary sm, download icon). List: rows 14 padding, dot 8px + name 14 / 20 + time 13 / 18 muted + amount 14 600 right. Filter changes re-render the list; CSV exports the **filtered** rows. Closes on ×, Esc, scrim, or leaving the page. (⚑6, ⚑7)
**Belongs in:** Components → Side panel (add the toolbar).

### 3.11 Invoice actions menu
"…" ghost icon sm per row; popover 200px wide, right-aligned under the button, items 40px (icon 18 + label): Download invoice, Download receipt. One open at a time; outside click closes.

### 3.12 Add-on box (inside a card)
`--tt-surface-sunken`, radius 12, padding 16, **no border**, margin-top 12. Row layout: text left (title 15 / 22 600 + Add-on tag + sub), actions **top-right** (See usage = secondary sm, Buy credits = primary sm). Description has 8px padding-top and a deliberate break after "paid;". At ≤720 the actions drop below.

### 3.13 Buttons (clarifications, no new variant)
- **Primary (orange)**: Buy credits (Usage card + Billing add-on), Add credits (learner), Send / Save changes (dialogs).
- **Secondary (white pill)**: Support, Activity log, See usage, Download CSV.
- **Ghost**: Edit, Cancel, Previous / Next.

---

## 4. Pages and layouts

### 4.1 Usage (`nav: usage`)
Header (icon `credits`, title Usage, sub "Where your organization's credits go. 1 credit = 1 minute of practice.", **Activity log** button top-right), then segmented **Overview / Details**.
- **Overview:** Remaining credits card (label, 40 / 44 number + "min", Buy credits primary top-right, 6px bar, "of 1,270 added", 14 / 22 note) → section "Credits added" + sub → labelled table (Note, Date, Expires, Credits; **note and credit amount are 600**).
- **Details:** section "Twins and role plays" with the 7d / 30d / 90d switch, table → "Team" table → "Learners" with search (260px) and a clickable table (Learner avatar + name 600 + email, Given, Used, Left + Low). **No Activity log section any more** — it moved to the panel (§3.10).

### 4.2 Billing (`nav: billing`)
Header (icon `billing`, **Support** top-right) → 60px → three blocks, each full width, 32px apart:
1. **Plan** card (shadowed): row = title "Paid plan" + Active tag, sub with bold price and renewal date; then the **Add-on box** (§3.12).
2. **Billing information** card (§3.8): Billing emails, Legal name, Billing address (3 lines), Phone; Edit opens the dialog.
3. **Invoices** (§4.2.1): borderless list.

#### 4.2.1 Invoice row
`[tile icon] name | date (muted) | Paid tag | price (600, right, min 80) | +N min (secondary, right, min 96) | …`
Two invoice types only: **Plan renewal** (card icon, "TrainerTwin Plan renewal") and **Minute pack Add-ons credits** (coins icon). Names carry no period or credit count. Rows flush left / right, padding 14 0, 1px dividers, no outer border or shadow (⚑9).

### 4.3 Twin users (`nav: twinusers`)
Library-style header (icon `learners`, title Twin users) → h2 "All learners" + sub "People who can learn from your twins" (stacked, not side by side) → labelled table (§3.1, §3.2). Rows open the learner page.

### 4.4 Learner page (opened from Twin users and Usage → Learners)
`← Back` (existing `.acc-back`) → header: avatar 80 (letter 32) + name 20 / 28 600 + email 16 / 22 secondary on the left; **Credits-left card on the right** (eyebrow, 28 / 32 number + "min", bar, "X of Y min used", **Add credits** primary beside it; card basis 460, shrinks, wraps below at ≤720) → segmented **Sessions / Credits** → table.
- Sessions: 10 rows each; Learner (avatar + name 600 + time), Topics (chips: 13 / 20, 1px `--tt-border`, pill, up to 2 + "+1"), Duration, Helpfulness ("–"), ↗. A row toasts "Opens the session report." (no report yet).
- Credits: Note / Date / Until / Credits.
- Add credits: +30 min (in memory only, ⚑13).

### 4.5 Persona list (`nav: rpsettings`, list view)
Adds the **label bar** (Persona / Role / Traits / Voice), the shared shadow, and **semi-bold persona names**. Header corners round at the top only.

### 4.6 Navigation changes
- Rail foot, top to bottom: **Usage** (right-aligned "618 min", hidden when the rail is collapsed), **Billing**, **Support** (opens the dialog, does not navigate), **Settings**, then the account chip.
- Twin group: **Twin agents · Twin sessions · Twin users · Twin’s brain** (Twin users is new).
- Phone tab bar unchanged (Home · Roleplay · Twin Agents · Report · Settings).
- Going to another page closes the Activity log panel and the learner page.

---

## 5. Earlier in the same working session (already in the prototype, listed so the DS catches up)
| Item | What | Notes |
|---|---|---|
| Sign up first | The flow now opens on the full-page sign-up card (login / sign-up toggle, prefilled demo email **sample@mycompany.com** and password dots, orange **Sign up** button); login goes to the app | `auth-page`, 48px pill fields (D43 exception still applies) |
| Your link auto-fill | After 2 s the link, coaching type (Sales) and use ("doubt") fill themselves; **Next is always enabled**, no validation | prototype-only behaviour |
| Stop recording | Always enabled (no minimum words) | |
| Make changes | "Make changes" opens a confirm dialog: "Do you want to make changes?" · "You’ll be disconnected from the call and taken to your twin’s knowledge base to update this information." · Cancel / Yes, make changes | confirm-dialog pattern |
| Built from | Row "16 files" + "View all ↗" opens a right-edge panel listing the files | side panel |
| Assigned to | Unassign + Edit (the Reassign dialog is unused) | |
| Account menu | Profile chip opens: Profile settings, Voices, Team, Developer API, Docs, Log out; the pages are `set-*` pages | `.rail-user-menu` |
| Twin for all use cases | One wide card above the specific agents | `.twin-all` |
| Finding-you tiles | Selectable (orange check box), **border is `--tt-border` light grey**, "Looks right" disabled until at least one is ticked | selection stays neutral except the check box |
| Favicon | White TrainerTwin mark on orange (svg + png) | |

---

## 6. Voice recording wave (⚑12)
- Replaces the 64 CSS bars on "Add your voice" (ready + recording) with `react-animated-waves` (canvas), bundled with React as `vendor-waves.js` (~240 KB, IIFE, `window.TTWaves.mount`).
- Box height **72px**, full width; **amplitude 30 live / 12 idle** (must stay under half the box height or it crops), `intensity` 1 / 0.35, `speed` 1.4 / 0.6, colours `[--tt-primary, #FF8A4C, --tt-primary]` (⚑7), `respectReducedMotion: false`.
- Timer text "Recording · 0:05" updates in place and does not remount the canvas.

---

## 7. Sample data in the prototype (include in the DS examples; do not treat as real)
| Where | Data |
|---|---|
| Usage → Credits added | Added from Olga +1,000 · Auto credited +50 · TrainerTwin added +100 · Added from Olga +30 · Auto credited +90 (to 11 Nov 2027) |
| Usage → Twins and role plays | Olga Sinenko's twin 45 calls 88 / 112 min · Objection Handling 1 call 3 / 0 min |
| Usage → Team | Olga 61 · Cathy 22 + 19 · Team 5 · Bhuvan 3 + 2 |
| Usage → Learners | 9 learners (egoryakina 60 of 60, bechir.realestate 30 of 60, …) |
| Activity log | 8 entries (calls, "tried", credits added) |
| Twin users | 7 learners, 60 min each until 12 Dec 2026 |
| Learner page | 10 sessions per learner (egoryakina's 7 from the reference + 3), topics from a pool of 13 |
| Billing | Plan $300.00 / month renews 11 Dec 2026; pack 100 credits for $25.00 |
| Invoices | 14 Nov Add-ons $25.00 +100 · 11 Nov Plan renewal $300.00 +1,000 · 2 Nov Add-ons $100.00 +400 · 20 Oct Add-ons $50.00 +200 · 11 Oct Plan renewal $250.00 +800 |
| Billing information | liveitupdxb20@gmail.com · Live it Up - F.Z.E · C1 Building, Ajman Free Zone / Ajman / United Arab Emirates · +971553897558 |

---

## 8. Where each item goes in `foundations.html` (build order for the update)
1. **Shape & space** → elevation row for the list shadow (§1.1, ⚑1), the 36px tile radius 10 (⚑), spacing notes.
2. **Components** → Table: labelled table + clickable row + credits-used cell; Badge: icon tags; **new Icons list** (§2); Dialog: Support and Edit billing; Side panel: toolbar; Menu: invoice menu; new small components — row icon tile, label / value row, Add-on box, credits-left card, topic chip.
3. **Screens** → page header with tool button; Usage; Billing; Twin users; learner page; Persona list; navigation.
4. **Decisions** → one entry per ⚑ item once you decide, plus the non-⚑ ones as dated "folded in" entries (like the 5 Nov sign-in flow entry).
5. Update the version / fingerprint note at the top of `foundations.html`.

## 9. Not done by this file (stale until the next pass)
- `TRAINERTWIN-DESIGN-SYSTEM.md` and `DECISIONS.md` are generated and are **not** updated. No generator script is in the repo (`build-pages.py` is retired). They stay stale until Bhuvan regenerates them.
- `foundations.html` already has ~60 uncommitted changed lines from before this round; the update builds on top of them.
- The Design canvas artifact and the Paper file still show the older flow (sign-up mid-flow, no Usage / Billing / Twin users).
