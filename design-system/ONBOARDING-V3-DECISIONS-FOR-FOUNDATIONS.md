# Onboarding prototype V3 ("Twin-enabled") — design decisions to fold into the design system

> Source: the V3 onboarding prototype (`onboarding/v3/app.js`, `app.css`), polished screen by screen with Bhuvan.
> Purpose: a hand-off list for updating `design-system/foundations.html` (and, through it, the generated
> `TRAINERTWIN-DESIGN-SYSTEM.md` / `DECISIONS.md`). **This file is not generated and nothing in it has been
> applied to the design system yet.**
> Local build at time of writing: `app.js?v=970`, `app.css?v=926`. Nothing after v=824 is deployed to Vercel.

How to use it: every item says **what**, **the exact values**, and **where it belongs in foundations.html**
(section names follow the headings in that file). Items marked **⚑ CHECK** conflict with, or stretch, a rule
already in `DECISIONS.md` and need a yes/no from you before they go in.

---

## 0. Read first — conflicts and open questions

| # | Item | Why it needs a decision |
|---|---|---|
| ⚑1 | **Twin reply bubble is tinted orange** (`--tt-primary-subtle` fill, `--tt-orange-100` inset line) in the calibration thread | D04 allowlists orange to three moments, and D03 says energy lives in motion, not colour. A tinted bubble spends brand colour on decoration. Either accept it as a 4th allowed moment ("the twin's voice") or use the neutral alternative (white bubble + the avatar only). |
| ⚑2 | **Olga's bubble is dark** (`--tt-cta-strong` / `--tt-on-cta-strong`) | Uses the CTA-strong pair for a non-action surface. Precedent: the landing page's trainer bubble (white text on dark). Needs to be written down as allowed for "the signed-in trainer's own message". |
| ⚑3 | **Filter dropdowns are 8px-radius rectangles, not pills** | The system's dropdown/select is a pill elsewhere (see the Assign popup toolbar before it was changed, and the credit pill). The user asked for "same corner as text fields". Decide: all selects/filters use `--tt-radius-sm` (recommended), or only page-header filters. |
| ⚑4 | **Progress ring fills with `--tt-success` (green)** | The ring was neutral dark; the user asked for green. Green here means "share that paid", not "success". Confirm green is OK as a data colour, or keep it neutral. |
| ⚑5 | **Number tiles use `--tt-surface-sunken`**, not `--tt-fill-soft` | `fill-soft` is documented as "the grey-button surface"; `sunken` is documented as the sidebar/inset. Tiles on the canvas are neither. In dark theme `sunken` (`#0A0A0A`) is darker than the canvas (`#141414`), so tiles will look recessed. Confirm, or add a `--tt-tile` token. |
| ⚑6 | **A second table-title style** (overline + rule above) | §8 "Table" has no title row. See §5.4. |
| ⚑7 | **Prototype-only behaviour** that must not become a rule: the voice recorder is a mock (counts seconds, captures nothing), "emailed" is a toast, reports and learner names in the lists are generated, the "Answers only on …" course name / 5 files / 60 samples are fixed text. | Mark as placeholder in any spec. |

---

## 1. Tokens — everything below uses existing tokens; **no new colour, radius or spacing value was introduced**

### 1.1 Colour (as used in V3)
| Role | Token | Value (light) |
|---|---|---|
| Page canvas | `--tt-canvas` | `#FEFEFF` |
| Card / popover / table surface | `--tt-surface` | `#FFFFFF` |
| Inset tile, sidebar, sunken | `--tt-surface-sunken` | `#F7F7F7` |
| Button fill, highlight box, sticky table header | `--tt-fill-soft` | `#F0F0F0` |
| Hairline / row divider | `--tt-border` | `#E9E9E9` |
| Card edge | `--tt-card-border` | `#F0F0F0` |
| Text | `--tt-text-primary` / `-secondary` `#4A4A4A` / `-tertiary` `#656565` | |
| Strong CTA (dark) | `--tt-cta-strong` `#2B2B2B`, `--tt-on-cta-strong` `#FFFFFF` | selected calendar day, Olga's bubble |
| Brand | `--tt-primary` `#FF5A00`, `--tt-primary-subtle` `#FFF4EC`, `--tt-orange-100` `#FFE3D1`, `--tt-orange-200` `#FFC5A3` | |
| Success | `--tt-success` `#1A6739` (`-subtle` for the "Responded" badge) | check icons, progress ring |
| Danger / Caution / Info | `--tt-danger`, `--tt-caution`, `--tt-info` `#2A63C4` + `-subtle`; `--tt-info-border` `#8FB6F5` | attention chips, report counts |
| Gold (illustration only) | `--tt-gold-300` `#E9C86A`, `--tt-gold-500` `#C99A08` | three-star illustration |
| Live | `--tt-live` | recording dot only |

### 1.2 Radius
| Use | Token | px |
|---|---|---|
| Checkbox | `--tt-radius-xs` | 4 |
| **Form fields, small buttons, filter dropdowns** | `--tt-radius-sm` | 8 |
| **Cards, tiles, summary cards, grey highlight boxes, popovers, calendar** | `--tt-radius-md` | 12 |
| Modals | 24px card radius (existing `.confirm-card`) | 24 |
| Side panel | 24 on the left corners only, 0 on the right edge | 24/0 |
| Pills, chips, ring, round icon buttons | `--tt-radius-pill` | 999 |
| Chat bubble | 20px, with a 6px "tail" corner (§6.5) | 20 / 6 |

### 1.3 Space (4pt scale)
`4` label→field gap · `8` icon→text, chip gaps, field label gap · `12` list-to-field gaps, table title→table · `16` **gap between sibling cards/tiles**, popup field gaps · `20` card padding (vertical), section gaps · `24` card padding (horizontal), dialog padding · `32` panel gaps.
Rules that came out of the session:
- **16px between two cards in a row** (summary cards, tiles).
- **12px between a field group and the list under it** (Assign popup).
- **4px between a field and its label** when the label is a caption.
- Card inner padding is **20px 24px** for summary cards, **16px 20px** for number tiles, **24px** for dialogs and side panel.

### 1.4 Typography (Figtree only)
| Role | Size / line | Weight | Notes |
|---|---|---|---|
| Overline / section title | 11 / 16 | 500 | uppercase, `letter-spacing: .06em`, `--tt-text-tertiary` |
| Caption, column titles, notes | 12–13 / 16–20 | 400 | secondary colour |
| Button (sm), chip, tab | 13 | 500–600 | |
| Body small / list text | 14 / 20–22 | 400 | |
| Body | 15 | 400 | |
| Row title / card title | 16 / 24 | 600 | |
| Emphasised line (usage "190 of 300") | 18 / 24 | 600 + muted 14 for the unit | |
| Summary amount (AED) | 24 | 600 | `-0.01em` tracking |
| Metric number | 32 / 1.1 | 600 | `font-variant-numeric: tabular-nums`, `white-space: nowrap`; the "/ 100" unit is 18 / 500 muted |

Always `tabular-nums` on any number that sits in a column or changes.

### 1.5 Elevation, motion
- Cards: `--tt-elevation-1`. Popovers (calendar, menus, dropdowns): `--tt-elevation-2`.
- Side panel / dialogs: backdrop `rgb(11 10 9 / .55)`.
- **Slide-in panel: `.28s cubic-bezier(.2,.8,.2,1)`**, plays once on open (not on re-render), backdrop fades in `.28s ease`. Respect `prefers-reduced-motion`.
- Recording dot pulse: 1.2s ease-in-out, opacity .35↔1, off under reduced motion.

---

## 2. Icons
- Outline, 24 viewBox, `stroke-width: 2`, round caps/joins, `currentColor` (Tabler-style, same family as the existing icon helper).
- **Metric/card titles carry a 14px icon before the title**, secondary colour. Set used: speech bubbles (Sessions), clock (minutes), help-circle (Questions), star (help score), flag (Issues reported), coin (Paid by learners), target (Average score), eye (Needs a look).
- **Redirect ↗** (`M7 17 17 7M8 7h9v9`, stroke 2): 14px inside chips, 16px inside a 28px ghost icon button on tiles, secondary colour; hover → primary text colour (+ `surface` fill on tiles).
- **Check** (`M5 12l5 5l10-10`, stroke 2.4) 16px, `--tt-success`, for "what this covers" lists.
- **Dropdown chevron**: glyph is **12px wide × 7px tall**, stroke **1.33px effective** (viewBox cropped to the glyph: `3.8 5.8 8.4 4.9`, `stroke-width .94`). This now matches the ↗ stroke. *(Why: the old 12px box held a chevron only ~5px wide, so it read as tiny.)*
- Avatars with no photo: the **first letter of the name** in a neutral grey circle (one colour for all, centred). Photo avatars are 32px, round.

---

## 3. Form controls

### 3.1 Native `<select>` — custom chevron (all `select.input`)
`appearance: none`; background chevron SVG, 16px, `right 12px center`; `padding-right: 40px`; stroke `#4A4A4A` light / `#C4C4C4` dark. **Never rely on the browser chevron** (macOS draws it hard against the edge and ignores padding).

### 3.2 Filter dropdown (page-header filters, `.bot-range`)
Button 148px wide, 32px tall, **8px radius** (⚑3), 0.5px `--tt-border-field` border, 13px text, label left / chevron right, text truncates with ellipsis. Four filters sit in one row beside the page title. Menu opens at least as wide as the button.

### 3.3 Date field
- Keep the real `<input type="date">` (typable, per D54) but **hide the native picker indicator** and draw our own 16px calendar icon at the right.
- Field 150 × 32, radius pill in popups / 8px in forms (match the surrounding fields).
- **A new pick shows the label "30 days"** (value underneath = today + 30). Choosing a date replaces the label with the date; closing the calendar without choosing keeps "30 days". Clearing the date resets it.
- Clicking anywhere on the field opens the calendar.
- **Calendar popover**: 288px wide, radius 12, elevation-2, padding 12/16/16; header = month title 14/600 + prev/next 28px round ghost buttons; weekday row = **two-letter initials** (Su Mo Tu We Th Fr Sa), 12px, tabular; days = 34px circles, 13px; **today = orange dot** under the number; **selected = dark `--tt-cta-strong` circle with `--tt-on-cta-strong` text** (matches D76); **past days disabled** (45% opacity, `not-allowed`) with the footer hint "Dates before today can't be picked."; prev-month button disabled on the current month. Esc closes the calendar first, the dialog second.
- Never call the native `showPicker()`.

### 3.4 Select-all / row checkboxes
Header checkbox with **indeterminate** state, 18px, same position as the row checkboxes (left edge aligned). Ticking selects every visible, not-yet-assigned row; respects search and cohort filter.

### 3.5 Search
In the Assign popup the search is **open by default**, left of the toolbar, grows to a max of 360px, fills free space; cohort filter select sits on the right. (An expanding icon-only search was built, animated, then replaced by this.)

---

## 4. Dialogs, panels, popovers

### 4.1 Assign popup (twin agent and roleplay)
- Width **640px** (roleplay variant has no minutes/date columns).
- Title "Assign twin agent" / "Assign roleplay"; subtitle "<name> · N assigned · M selected".
- Toolbar: search (left) + cohort select (right).
- **List = one white table card** (`--tt-surface`, 1px `--tt-border`, radius 12, max-height 340, scrolls) whose **first row is a sticky grey header** (`--tt-fill-soft`, 1px rule under): `[select-all] | Learner | Minutes | Access until`.
  - "Learner" starts at the same x as the learner **name text**, not the avatar.
  - Columns: select 38px · learner flex · minutes **96px** · date **150px**, 12px gaps, 16px row padding.
- **Rows**: checkbox · 32px avatar · name 14/500 + email + phone (12px secondary) · minutes dropdown · date field. Controls appear when a row is ticked **and also on already-assigned rows (editable, saved immediately)**. Assigned rows are greyed (name/avatar 60%) but their controls stay normal.
- **Defaults on tick**: minutes **30 min**, date **"30 days"** (today + 30). Minute options: 15 / 30 / 60 / 120 (small listbox under the button, fixed-positioned so the scrolling list can't clip it).
- **Footer CTA: "Save and Assign"** (primary), **disabled until at least one person is ticked and every ticked learner has minutes and a date**.
- Toast on confirm: "Assigned to Nora for 30 min, until 30 Nov 2026."

### 4.2 Respond dialog ("Respond to Aisha")
- Width **520px**. Title "Respond to {first name}", subtitle "{name} · {email}".
- **Grey context box** (`--tt-fill-soft`, radius 12, padding 12/16): either the question, or — when answering a report — overline "Learner's report", the reason in 600, and the flagged turn in italic quotes.
- Label "Your answer" + textarea (4 rows, placeholder "Type your answer the way you would say it").
- **Voice**: secondary sm button with mic icon "Record a voice reply"; while recording: red pulsing dot + "Stop 0:07"; after: grey chip "Voice reply · 0:12" + ghost "Remove".
- Note line (13px secondary): "Sent to {first} by email. Your twin will use it next time."
- Footer: Cancel (secondary) · **"Send by email"** (primary, disabled until text or a voice reply exists).
- Opens **on top of** the reports panel when launched from it. After sending: toast "Response emailed to {first}. Your twin will use it next time."; the originating row becomes a green **"Responded"** badge (questions) or leaves the list (reports).

### 4.3 Side panel — "Reports raised"
- Slides in from the **right edge**: fixed, full height, **560px** wide (100vw on small screens), left corners 24px, no right border/radius, slide-in once.
- Header "Reports raised", subtitle "<agent> · N open". List scrolls inside; scroll position is kept after a response.
- **Row** (separated by 1px rules, 16px vertical padding):
  1. Name line: avatar + name (14/600) on the left, **day + time only** ("Today, 10:40 am") 13px secondary on the **right**. *No "During the call", no turn time.*
  2. **One grey box** (`--tt-fill-soft`, radius 12, padding 16/20, full row width): overline "Learner's report" → reason 16/600 → **flagged turn in italic, secondary, in “double quotes”** (any quotes inside the turn become single ‘ ’). **"Respond" (secondary sm) sits inside the box at the right, vertically centred.** Single CTA — no "Correct the answer", no "Mark resolved".
- Resolved by responding.
- **Learner-facing report reasons** (these are the learner's words about an answer, *not* Olga's calibration vocabulary): Wrong or inaccurate answer · Out of date information · Didn't answer my question · Hard to follow · Too long · Other. (Roleplay reports keep the voice-related reasons: Wrong pronunciation, Sounds robotic, Wrong accent, Flat or no emotion, Pacing feels off…)

### 4.4 "Why does this feel off?" (calibration)
Reuses the existing Twin-off dialog: quote of the twin's reply, reason chips (Too generic · Too long · Doesn't sound like me · Missing an example · Something else), optional note, Cancel / Submit. "Feels off" in the calibration conversation now opens it; the rating is only saved on Submit (empty submit → "Pick a reason first."). "Feels like me" saves immediately.

---

## 5. Sessions pages (Twin sessions, Roleplay sessions)

### 5.1 Page header
Title (icon + name, one line, `nowrap`) on the left, **four filters on the right**: All cohorts · All learners · All twin agents / All roleplays · Last 30 days. Filters change the table **and** every number. Empty result: "No sessions match these filters."

### 5.2 Summary block (shared layout for both pages)
Order top→bottom: **summary cards → number tiles → "Needs a look" → rule → table title → table**. No other rules in the block.

**Summary cards** — two equal-width cards side by side, 16px gap, **108px tall**, radius 12, 1px `--tt-card-border`, `--tt-elevation-1`, padding 20/24.
- **Left: "Average help score"** — 66px three-star illustration (large soft-gold star centre `gold-300`, two smaller `gold-500` stars, three faint rays in tertiary @ 35%; no outline); title with 14px star icon (15px secondary); **number "4.3 / 5" at 32/600** under it ("/ 5" muted 15px); **"21 sessions rated" at the right edge, same text baseline as the number**, 14px secondary, no wrapping. (Wording is "N sessions rated", not "N of M".)
- **Right: "Paid by learners"** — 64px **ring** on the left (conic fill in `--tt-success` over `--tt-border`, hole radius 25px, % label 13/600 centred inside, tooltip explains the share: "1 of 5 sessions paid for an extension" / "6 of 27 sessions were purchased"); title with coin icon; **amount "AED 90" at 24/600 under the title**; **count ("1 extension" / "6 purchases") at the right edge on the amount's baseline**.
- Sizing history to avoid repeating: amount went 64 → 48 → 24px; illustration 88 → 66px; cards went 7fr/5fr → equal.

**Number tiles** — **four tiles in one row**, 16px gap, radius 12, padding 16/20, `--tt-surface-sunken` fill (⚑5), no border, no dividers.
- Label: 14px icon + 14px secondary text.
- Value: 32/600 tabular, left.
- **↗ icon button at the right, vertically centred on the number** (28px, ghost). It goes where the number leads: Issues reported → filters the table to sessions with issues and scrolls to it; Questions (Twin) → Inbox › Ask Olga; Sessions / Average score → scroll to the table. **Minutes tiles have no arrow.**
- **No note line under the number** (the "Conversations held", "Time spent talking", "1 scored 80+", "In 3 sessions" lines were removed as redundant).
- Twin tiles: Sessions · Twin minutes · Questions · Issues reported. Roleplay tiles: Sessions · Practice minutes · Average score (`71 / 100`) · Issues reported. ("Weakest area most often" was removed — the table already has that column.)

### 5.3 "Needs a look" strip
Eye icon + label "Needs a look" (13/500), then chips (32px tall pills, 13/500, trailing ↗):
- **Reported problems** — danger-subtle + danger text.
- **Low ratings** — caution-subtle + caution text ("1 rated 3★ or lower"); Roleplay version: "12 sessions with a low scorecard or a client that didn't feel real" (low = score < 70 or rating ≤ 3).
- **Questions sent to you** — info-subtle + info text (Twin only; links to Inbox › Ask Olga).
- Order = priority (problems, low ratings, questions). Pressing a chip **toggles a filter on the table** and shows a "Show all" text link; hover/active = 1px inset outline in the chip's own colour.

### 5.4 Table title + table
- **Title above the table**: overline style, e.g. `TWIN SESSIONS` / `ROLEPLAY SESSIONS`, with **a 1px `--tt-border` rule above it (20px padding below the rule)** and 12px between title and table.
- Table: rounded 16px white card, sticky-feeling grey header row (uppercase column labels), rows with 1px dividers.
- Twin table columns: Learner · Twin agent · Minutes · Questions discussed · Helpfulness (stars + label + "N issue reported" chip). Roleplay table columns: **Name · Scenario · Score · Weakest area · Rating**; the date/length sits **under the name in secondary grey**, scenario name without the persona prefix, **no progress bar, no "when" column**; the reported issue shows **under the rating** as a chip.

---

## 6. Other components decided in this round

### 6.1 Agent detail card (twin agent)
- Title; overline **WHAT IT DOES** + description; overline **ANSWERS ONLY ON** then a pill (`--tt-info-subtle` fill, `--tt-info` text, **no border**, 24px tall) "Course · Objections & follow-up course (Nov 2026 Batch)"; then **three ticked lines** (16px success check + 14/20 secondary text): "5 files" · "60 conversation samples" · "Anything else goes to you as an unanswered TwinQnA".
- **Usage credit is a light-grey box inside the card, at the bottom** (`--tt-fill-soft`, radius 12, padding 16/20): overline "USAGE CREDIT", "190 of 300 min used" (18/600 + 14 muted), "110 minutes left". **No progress bar.**
- "Who asks / Agent" was **removed**.
- Card height matches the Report card beside it.

### 6.2 "Questions your twin couldn't answer" card
Title "Questions your twin couldn't answer" (was "Most asked"; wording chosen for grammar — "Questions asked your twin couldn't answer" parses badly). Each row: question left, **"Respond" secondary sm button right** (replaces the count). After responding: green "Responded" badge.

### 6.3 "Reports raised" card
"Total reports **16 ↗**" — the number and a 14px redirect icon are one link that opens the side panel (§4.3), and the number drops as reports are answered. "Most common report" uses the learner-facing reasons.

### 6.4 Top-bar usage pill
Progress is an **18px ring** (not a bar) before "800 / 1000 minutes used"; fills clockwise; switches to caution colour at ≥ 90%.

### 6.5 Calibration thread (chat bubbles)
- **Olga (right)**: `--tt-cta-strong` bubble, white text, radius 20 with a **6px bottom-right corner**.
- **Twin (left)**: **32px photo avatar** (Olga's twin) + bubble tinted `--tt-primary-subtle` with a 1px `--tt-orange-100` inset line, 6px bottom-left corner. Feedback buttons and the "Feels like me / Feels off" mark are indented 40px to sit under the bubble. (⚑1, ⚑2)
- Applies to the calibration thread only; other chat surfaces are unchanged.

### 6.3b Left navigation
Rail width **214px** (was 248; it went 248 → 198 → 214). Collapsed stays 72px. Section label is "ROLEPLAY" (one word).

---

## 7. Screens decided earlier in the session (summary — verify against the prototype before documenting)
- **Inbox**: Gmail-style — left list of sub-menus (All alerts · Access requests · Ask Olga · Reported issues · Access ending soon), Twin/Roleplay tabs, each menu its own page; no repeated title (the subtext becomes the title in title type); cards with clear hierarchy and *small* CTAs.
- **Twin / Roleplay sessions tables** were converted from card lists to tables with stat cards above (now the summary block in §5).
- **Accounts** moved into **Settings**: cards for Cohorts, Learners, Team (+ Usage), each with a centred icon on its own coloured tile and the name centred under it; page header uses the Persona-screen header style; "Features" renamed **Modules**. Learners page: filter "Filter by cohort" on the right; tabs **Twin users / Roleplay users** sit just above the list; Team: subtext as title + "Filter by role".
- **Roleplay builder**: five steps as tabs inside the card — Scenarios · Agent role · Learner · Rubric · Success (no numbers, 16px gap above the card); "Generate with AI" box collapses to a star icon + typed text; persona library scrolls horizontally with a black-shaded edit overlay; footer actions Try roleplay · Save as draft · Create and publish; empty state "No roleplay created recently" with a full-width, centred box and "Create roleplay" as secondary CTA.
- **Feedback**: NPS replaced by **5-star rating + "anything you want to add"**; helpfulness copy "How helpful is Olga's twin? — Not at all helpful … Extremely helpful".
- **"Try as learner"** opens a confirmation dialog (roleplay name + details, persona photo/name, two-line description, Cancel · Join session).
- **Persona cards**: name next to the photo, location under the name, tags under the location, behaviours as white pills with a light-grey border, edit icon appears top-right on hover.

---

## 8. Copy decisions (apply as microcopy rules)
- **"Roleplay"** is one word everywhere (nav, titles, buttons, toasts). Never "Role play".
- Buttons: **"Save and Assign"**, **"Send by email"**, **"Respond"**, **"Show all"**.
- Field labels: **"Access until"**, **"Minutes"**, **"Your answer"**, **"Learner's report"**, **"Reported turn"** (in the Respond dialog).
- Titles: **"Average help score"**, **"Paid by learners"**, **"Needs a look"**, **"Questions your twin couldn't answer"**, **"Reports raised"**, **"Answers only on"**.
- Counts: "21 sessions rated" (no "of 27"), "6 purchases", "1 extension".
- One-line rule for stat notes — if it repeats the label, delete it.

---

## 9. Reusable rules distilled
1. **Two cards in a row = equal width, 16px gap, same height.**
2. **Anything that carries a number and a count on one line shares a text baseline** (rating card, paid card).
3. **Left-align content unless asked; push the secondary fact to the card's right edge** (count, time, action), 24px from the edge incl. border.
4. **One CTA per row** where the action is "deal with this" (Respond). Secondary size `sm`.
5. **Grey highlight box = the thing the learner said**; italic + quotes = a quoted turn; plain text = our labels.
6. **No rules around tiles; rules only above a table title and between list rows.**
7. **Don't use browser-native popups/chevrons/date pickers**; draw ours with tokens.
8. **Dialog over panel** is allowed (respond over reports); close order is top-most first.
9. **Mock voice recording** is a prototype affordance only.
10. Verify at runtime — every change in this round was measured in the preview (computed styles / bounding boxes) before being reported.

---

## 10. Suggested placement in `foundations.html`
| foundations.html section | Add / update |
|---|---|
| Space (Tokens › "4pt base…") | the 16/12/4 gap rules in §1.3 |
| Type | metric number 32/600 tabular, amount 24/600, overline spec, §1.4 |
| Icons (Foundations) | §2 incl. the chevron and ↗ specs |
| Components › Form controls / Dropdown | §3.1, §3.2 (⚑3) |
| Components › Date field | §3.3 — replaces the generic note with the full calendar spec |
| Components › Modal | §4.1, §4.2 (dialogs) and the **new** side panel §4.3 (add under "Layering" too) |
| Components › Table | §5.4 (title row, sticky grey header, Assign list as a table card) |
| Components › Card / Large surfaces & stat pill | §5.2 summary cards + number tiles (**new component: "Summary tile"**), §6.1 |
| Components › Badges, labels & avatars | letter avatars; "Responded" success badge; attention chips (§5.3) |
| Components › Progress, loading & empty | rings (§5.2, §6.4) and the "no bar" decision for usage credit |
| Product-specific (AI disclosure etc.) | chat bubble roles (§6.5, ⚑1/⚑2) |
| Layouts › App shell | rail width 214px (§6.3b) |
| DECISIONS.md | new entries for ⚑1–⚑6 once decided |

*Components that are not in §8 of the system yet and are introduced here: **Summary card**, **Number tile**, **Attention chip**, **Side panel (drawer)**, **Respond dialog**, **Calendar popover** (the system documents only the date field's rules).*
