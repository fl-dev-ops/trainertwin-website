# TrainerTwin Design System — Build Instructions

> **Version 9.31 · 5 Nov 2026 · fingerprint `28be37a9`** (token block unchanged since 9.25)
> Generated from `src/styles/tokens.css` — the single source of truth. Do not edit
> this file by hand; your edits will be lost on the next regeneration, and worse,
> they will silently disagree with the code the app actually ships.
>
> **Before starting a new page, check with Bhuvan that this is the current version.**
> If the fingerprint above doesn't match his copy, yours is stale.

**You are building a page for TrainerTwin.** This file is the complete design system:
the decisions behind it (§1), the rules that follow from them (§2), and everything
needed to build with it. Follow it exactly. Do not invent colours, fonts, spacing
values, radii, or components — and if something isn't covered here, check §12 before
assuming it exists, then ask rather than improvise.

TrainerTwin lets expert trainers build an AI twin from their own material, so it can
run mock interviews, 1:1 coaching, and doubt-clearing when they aren't available.

**Brand personality: Warm Precision.** Precision is structural — grid discipline,
restrained chrome, honest empty states. Warmth is in the human layer — type, copy,
avatars, easing. Energy lives in *motion*, never in extra colour or density.

---

## Start here — building a screen

Read this first; the detail is below.

1. **Paste §4 (tokens) *and* §4b (base stylesheet).** Both. §4 gives you the values,
   §4b applies them — including the `b, strong` reset, without which the page comes
   out heavy in exactly the places you didn't style.
2. **Three font weights: 400, 500, 600.** Never 700, never `font-bold`. 400 for
   everything read; 500 for field labels, badges, and inline emphasis (`b`/`strong`);
   600 for titles — card, table, section, modal, page headings, a row's name — *and*
   button/CTA labels.
3. **Figtree only, inside the product — never Noto Serif, at any size.** The
   marketing site still combines both; the product commits to one face.
4. **Every screen sits in the app shell** (§7) — sidebar on `--tt-surface-sunken`,
   content on `--tt-canvas`, page header carrying exactly **one** action. §7 has a
   fully assembled screen to copy the proportions from.
5. **Cards in a grid** are the default content shape (§8). Padding lives on the
   card's sections, never the card, or a table can't run edge to edge inside one.
6. **The default button is the orange primary — one per view or dialog (reversed 4 Nov 2026, D107).** `<Button>` with no
   variant is `--tt-primary`. A page header carries one; a dialog's confirm is the one; a row or card action is a
   small `secondary` (§2 rule 1). Orange is still **not** selection, state or decoration — selected rows, checked
   checkboxes and avatars stay neutral — and active nav is the one standing exception: its FILL stays a neutral
   lifted pill, but its dot marker and label keep `--tt-primary`/`--tt-primary-ink` (see §7).
7. **Never write a hex.** Every colour is a `var(--tt-*)`; both themes then work
   without you doing anything. And never use a status *text* colour as a border —
   borders take the `--tt-*-border` family.
8. **Six accepted exceptions exist** (§1) and are deliberate. Do not "fix" them.
   A seventh row there is *not* accepted — `primary` has no compliant size
   in-product, unresolved. Don't quietly resolve it by guessing; ask.
9. **Check §12 before inventing a component.** Several things are specced but not
   built, and an invented component becomes a permanent inconsistency.
10. **The product is light-only for now.** `data-theme="light"` is stamped in the
   root layout; there is no switcher yet. Build and test against light. Dark is
   real and correct at the token layer if you want to sanity-check it in
   Storybook, but no visitor can reach it today.

Then run the five-line self-check at the end of §4b. Every item on it has been a
real bug in this system, not a hypothetical.

---

## 1. Decision record

Everything below was decided deliberately, with the trade-off understood at the time.
**If something here looks wrong, it is more likely a considered choice than an
oversight** — read the reason before changing it. If you do change it, change it here
too, or the next person will change it back.

### Brand

| Decision | Why |
|---|---|
| **Primary is `#FF5A00`** — pure orange, not the red-orange alternative | Keeps the whole red band free for error, destructive, and record states. Non-negotiable in a product built on recording and deleting a trainer's material. |
| **Personality: Warm Precision** | Precision is structural — grid, restrained chrome, honest empty states — and carries the Studio, where a trainer stakes their reputation. Warmth is human-layer — type, copy, avatars, easing — and carries the Session, where a nervous learner is practising. |
| **Energy lives in motion, never in colour or density** | The brand spends nothing on decorative colour, so liveliness has to come from responsiveness: thinking states, streaming text, turn handoff. |
| **Orange is allowlisted to three moments — 29 Sep 2026** | The rule used to be "the single directed action in view", which in practice meant every screen's Continue button, plus the active nav item, plus every selected row, plus every avatar. A screen with fifteen orange elements has no primary action. Orange now appears only on: the **terminal commit** of a flow (*Save & finish*), a **dialog's confirm**, and the **select action on a recommended card** — plus the logo mark. `strong` (black/white) became the Button default the same day, in product *and* marketing, so the restrained result is what you get by writing no variant at all. **Reversed 4 Nov 2026 for buttons — the default Button is the orange primary, one per view or dialog (D107).** |
| **Selection is neutral, not branded — 29 Sep 2026** | Selected rows, checked checkboxes and chosen dropdown items all moved to `--tt-fill-soft` + a weight or ink step. Selection is a state, not a destination; it should be legible without spending the one colour that means *press this*. The checkbox beside a selected row already carries the signal in a second channel, so this satisfies SC 1.4.1 with colour doing less work, not more. (Active nav's *fill* follows the same neutral rule, but its icon dot and label were never part of this — they keep the older, Figma-measured `--tt-primary`/`--tt-primary-ink`; corrected 30 Sep 2026 after a later pass mistakenly grouped them in.) |
| **One brand tier, not two** | Trainer ownership is expressed through identity assets — photo, name, voice, in-session logo — not a per-trainer accent colour. Orange therefore means one thing everywhere: *the platform is acting*. This is what keeps the marketplace legible when a learner follows six trainers. |
| **Neutrals are cool grey — REVERSED 10 Sep 2026** | This ramp was warm olive-brown, chosen so a true grey would not read cold beside `#FF5A00`. It was reversed after the roleplay-library Figma was measured and found to use near-neutral greys: rather than let every built screen drift from the file, the system moved. Four steps are sampled from that render — canvas `#FEFEFF`, sunken `#F7F7F7`, border `#E9E9E9`, text `#1C1B1B` — and the mid-tones were tuned to hold the margins the warm ramp had, so nothing regressed crossing over. |
| **Category colours stay OUT of the system** | The roleplay screen's six scenario icons use Tailwind 300-level pastels. They are page-level decoration, defined in the screen, not tokens. Accepted risk: the next screen may invent its own six and drift. If that happens, promote them to a documented categorical palette with dark-theme counterparts. |
| **Every value sampled from a Figma gets diffed against what is built** | Three times during the roleplay-library pass a colour was measured out of the file and then not wired through — the sidebar fill, the active pill fill, and the active label. All three were sitting in the measurement output. Sampling is not the check; comparing the sample to the built result is. |
| **Figma and the system are reconciled case by case** | Neither is blanket-authoritative. Each divergence gets measured, reported with its cost, and ruled on individually — which is how the cool-grey switch and the category-colour exclusion were both decided. |
| **The mark is parametric, not traced** | A 3×3 grid of 147-unit cells with every corner and fillet at r=20, verified against the supplied artwork to ~1px. It stays crisp at 20px, takes its colour from the token, and needs no second asset for dark mode. |

### Typography

| Decision | Why |
|---|---|
| **JetBrains Mono removed entirely — 29 Sep 2026** | Bhuvan, twice: *"Numbers, pagination texts are in some other font family. Bring back to Figtree itself. I only have two font families — Figtree and Noto Serif,"* then *"Still we are using some other font family? Stick to two font families. Remove others."* The webfont is gone from `fonts.ts` and from both Google Fonts links — nothing third is downloaded. `--tt-font-mono` survives as a **declared token pointing at the OS monospace stack**, not as a deletion: 41 declarations across the marketing CSS say `font-family: var(--tt-font-mono);` with no fallback, and an undefined custom property invalidates the whole declaration, so removing the name would have silently dropped fixed-width from every code mock and terminal on the landing site. Non-code uses that were hiding in it — a footer status label, two hero eyebrows, two percentage readouts — moved to Figtree. Table figures, the pagination counter and every meta/eyebrow label moved off JetBrains Mono. **`tabular-nums` becomes load-bearing rather than decorative:** Figtree's default figures are proportional, measuring 99px vs 154px for `111111` vs `000000` at 40px — without the property a counter visibly jitters and a numeric column's right edge goes ragged. Measured in the browser against the real loaded face before the switch, not assumed. Mono survives only for *code* on marketing surfaces, the same kind of scoped exception Noto Serif has. |
| **Noto Serif display · Figtree UI — two families, full stop** | A serif signals *curriculum, authority, expertise* rather than "another AI product" — which is precisely the asset TrainerTwin sells. Both faces also have a real multilingual path, so English-now / multilingual-later is handled on both halves of the pairing. |
| **Night surfaces darkened** | `--tt-night` `#15171A` → `#111215`, `--tt-night-deep` `#131313` → `#0F0F0F`. Bhuvan's call, 11 Sep 2026 — made directly in `tokens.css` rather than through this file, which is the correct way to change a token (see the file's own header) but meant the MD went stale until this regeneration caught it. Contrast improves rather than regresses: on-night text moves from 17.96:1 to 18.73:1, on-night-3 from 4.67:1 to 4.87:1 — darker background, same light text. |
| **Badge borders are lighter than alert borders** | `--tt-*-badge-border` added 11 Sep 2026, 55% of the way from `--tt-*-border` toward the badge's own subtle fill. A badge is a small pill, usually several to a row, and the alert-strength border read as heavy at that repetition. `--tt-live` keeps the full-strength border in both — it's the one badge with a transparent fill, so the border is the only thing defining the shape. |
| **Status borders sit at the 300 step, not full strength** | Added 10 Sep 2026. Alerts and badges drew their edge in the full status colour, which measured **4.7–6.4:1 against their own fill** — text-level contrast spent on a decorative line, and the reason they read as heavy. The new `--tt-*-border` family sits at ~1.5–2.1:1 on the fill. Deliberately below SC 1.4.11's 3:1, which is correct here: an alert is not a control, and severity is carried by the icon, heading and fill, never the border alone (SC 1.4.1). `--live` is the one exception — its background is transparent, so the border is the only thing defining the pill. |
| **Pill padding tokenised: 2/8, 4/12, 6/16** | Added 10 Sep 2026, found the same way the weight bug was. Padding was never in the token layer either, so the system's own badge sat at `3px 9px` — 9px is not a step on the 4pt scale — and screens built from it drifted to 8 / 10 / 11 / 13px. A pill is radius-999 and its rounded ends optically eat about half a stem at each edge, so it needs **more** horizontal padding than the equivalent rectangular control, not the same: 3x the vertical, where a rounded-rect button is comfortable at 2x. 12px is the floor for any pill carrying more than two words. |
| **The marketing page is a surface of this system** | Audited 10 Sep 2026: 700 colour literals, 273 unique, zero `--tt-*` references — but **479 uses sat within a just-noticeable difference of an existing token**. That is drift, not design. Fixed by *deriving*: the landing keeps its own vocabulary, every value with a system equivalent points at it. Where the landing had solved something the product hadn't — night bands, marketing type steps, the 54px CTA — the system adopted its answer instead of inventing a second one. See §14. |
| **Night bands are a scope, not a theme** | Adopted from the landing. A band of editorial dark inside a light page stays night in *both* themes, so it cannot be `[data-theme="dark"]` — that would flip the whole page. `.tt-night` re-points tokens inside one section, and `strong` flips to white-on-night by the same polarity rule it follows in dark theme. |
| **`--tt-live` is red, `--tt-available` is green** | Split 10 Sep 2026. Recording is a *warning* — you are being captured — and borrows the red of a record light. Availability is *reassurance* — this trainer can be reached now. The landing used one word for both. Never interchangeable. |
| **The hot red-orange `#EC3013` is dropped** | It measured **1.24:1 against `--tt-danger`** — visually the error colour — and contradicted the reason `#FF5A00` was chosen: to keep the whole red band free for error, destructive and record. Marketing uses `--tt-primary`. |
| **IBM Plex Sans and Hanken Grotesk are marketing-only** | Already shipping and deliberately scoped; the fault was that the system never declared them, so they read as drift. Now named, restriction intact: neither appears in product UI, which stays three roles wide. |
| **Marketing body is 16px, product body is 15px** | Both correct. A marketing paragraph is read at arm's length in a long scroll; a product table cell at a glance in a dense grid. The landing used 16px in 152 places against a scale with no step for it — the scale was missing a step. |
| **Light is the default theme, not system-following** | Reversed 11 Sep 2026. The brand brief's original answer was "Both equal, system-following" — that was never wrong on its own, but the product shipped with no theme switcher, so "system-following" meant every visitor's OS silently picked their theme with no way to change it. `<html data-theme="light">` is now stamped in the root layout; Storybook's toolbar default moved from `system` to `light` to match. Dark stays fully built — every token has a dark value and Storybook can still exercise it — it is just dormant until a switcher ships. Revisit when one does. |
| **Buttons are full-radius pills, not radius-sm rectangles** | Changed 25 Sep 2026. An icon-only button is a circle now, not a rounded square. The one control pinned to the max radius regardless of size, breaking the usual "radius steps with the element" rule on purpose — a button should read as reachable, not as a small panel. |
| **Filled badges and labels lost their border** | Changed 25 Sep 2026. A coloured fill already reads as a shape; a border on top of it was doubling up. `--live`/`--available` badges and the `outside` source chip keep theirs — structural, not stylistic, since their background is transparent and the border is the only thing defining the pill. `--tt-*-badge-border` (11 Sep) is retired, unused. |
| **Cards get their own lighter border and shadow** | Changed 25 Sep 2026. `--tt-border`/`--tt-elevation-1` are shared by every divider and resting surface; a card's outer edge sits next to open canvas on every side and read as heavier than an internal divider at the same value. New `--tt-card-border` / `--tt-card-shadow`, one step lighter — internal dividers between a card's own sections are unaffected. |
| **The card footer is a divider, not a filled band** | Changed 25 Sep 2026, resolving a divergence flagged and left open on 10 Sep: the source screen used a hairline over a plain row; this shipped with a `--tt-surface-sunken` fill instead. The fill is gone. |
| **`lg`/`xl` are marketing-only; product uses `sm`/`md` only** | Changed 25 Sep 2026. Creates an unresolved conflict: `primary`'s white-on-orange only clears WCAG AA at `lg`. Restricting product to `sm`/`md` leaves `primary` with no compliant size in-product — not silently patched, see the accepted-exceptions table and the note on `Button`'s `primary` variant. |
| **`body` explicitly sets `font-weight: 400`** | Found 25 Sep 2026. Every subtext element computed to 400 anyway — the browser's own UA default — but only by accident; the real `globals.css` never had the line the MD's own §4b base stylesheet has always shown. `TableCard`'s description and the table row's secondary line also now set `font-normal` explicitly at the call site, not just by inheritance. |
| **One loader, one states demo — 29 Sep 2026** | The spec document carried *two* near-identical button-states rows: one using a generic 14px circular spinner (`.c-spin`), one using the real brand-mark grid (`.c-spinner`). Bhuvan picked the brand grid and asked for them merged. Done, and `.c-spin` plus its `c-rot` keyframe were **deleted** rather than left as dead CSS somebody copies. The surviving row keeps the SVG plus icon rather than a `+` character — a text glyph sits on the font's baseline instead of the icon's optical centre and renders at the label's weight, not the icon stroke. **A bug surfaced in the merge:** `.c-btn--loading` (0,1,0) was being outranked by `.c-btn:disabled` (0,1,1), so a loading button rendered at 45% — pixel-identical to true disabled, which is precisely what the note beneath it promises never happens. Introduced by the 25 Sep loader work in this same file; the React Button had already been fixed for the identical trap and the CSS mirror kept it. Now `.c-btn--loading:disabled`, which wins at 0,2,1. |
| **Button gained a `loading` state and its own loading mark** | Added 25 Sep 2026 from Figma node 885:274. Not a generic spinner — the brand mark's 3x3 grid, decomposed into nine cells with an independent keyframe each (a uniform staggered animation can't reproduce the reference's dip through the centre cell). `loading` is visually and semantically distinct from `disabled` (70% vs 45% opacity) — the reference showed them as two different states and the component was built to keep them that way rather than let two `:disabled`-keyed utilities decide by accident. |
| **Titles are semibold again — REVERSED 29 Sep 2026** | Bhuvan, from a built screen: *"use tt weight semibold 600 for table, card, section titles, user name in the table. Current one look very flat."* The 25 Sep pass moved titles 600 → 500 to fix "too much font weight", and overshot the other way: with titles, labels, badges and inline emphasis **all** at 500, a card or table had no weight contrast between its heading and its own content. `--tt-weight-title` now points at semibold. Deliberately narrow — labels stay 500 and `b`/`strong` stay 500, so the original heavy-bold complaint is not re-created; the difference is one step between title and label, which is exactly what 25 Sep removed. Found while doing it: the role tokens were still not wired — every component wrote the primitive `font-medium`, so this would have been a fourteen-file sweep. `font-title`/`font-label`/`font-cta`/`font-body` are now real Tailwind utilities and the components use them, so the next move is genuinely one line. |
| **Three weights: 400 / 500 / 600 — revised 25 Sep 2026, was two** | The 10 Sep fix solved the four-weight drift but overshot: 600 on every title and every `<b>` read as too heavy in the product (Bhuvan's call, benchmarked against Town.com). At the time, 500 took over titles, labels and inline emphasis, with 600 held back for button/CTA labels only — titles moved back to 600 on 29 Sep 2026 (D33), so today it's labels and inline emphasis that keep 500. A second bug surfaced while making this 25 Sep change: the role aliases (`--tt-weight-title` etc.) existed since 10 Sep but were never wired — every component referenced Tailwind's `font-semibold`/`font-medium` primitives directly, not the role. That wiring didn't actually land until 29 Sep 2026; the claim that it was "fixed at the same time" here was itself wrong, see D33. |
| **Two weights: 400 regular, 600 semibold** | Added 10 Sep 2026. Weight was the one type axis never tokenised — families were, sizes were, weight was not — so each component picked its own literal and the system drifted to four (800 wordmark and metrics, 700 buttons and labels, 600 titles, 500 mono meta). Screens came out heavier than intended because nothing stated an intent. Two steps is enough: Figtree 400 and 600 separate cleanly at 13px, and a third step only gives drift a place to hide. |
| **`b`/`strong` reset to 600 globally** | The UA default is `bold` = 700, outside the scale. It silently overrode correctly-specified components wherever content used emphasis — the largest single source of stray 700s. Reset once at the root rather than per component. |
| **Noto Serif is marketing-only — reversed 25 Sep 2026** | Was "serif on in-product titles above 20px"; narrowed to nowhere in the product, at any size. Bhuvan's call. The product now commits fully to Figtree, including its largest titles (modal headings, page headers, the composed-screen title at 24px). The landing site and `src/components/home/` are unaffected — still combine both faces. `Card`'s `display` prop stays for marketing's use of the shared component; product code must never pass it. |
| **Serif is titles only, above 20px** | It is the voice of authorship, not of interface. Below 20px it stops being legible at UI density. |
| **Text bars, not lettering, in illustration** | Keeps artwork language-agnostic, which matters once the product is localised. |

### Accessibility — six accepted exceptions, one unresolved gap

**This is the section most likely to be "fixed" by someone acting in good faith.
Please don't.** Each of these is a recorded decision, not a defect.

| What | Measures | Why it stands |
|---|---|---|
| White on primary orange | **3.13:1** — fails AA for normal text | Deliberate brand decision, 9 Sep 2026. It *is* compliant at large sizes (≥18.66px bold), which is exactly why the `lg` button exists at 19px. Near-black would have measured 6.33:1 at every size. |
| `--tt-border-field` at rest | **1.74:1** — below the 3:1 of WCAG 1.4.11 | Deliberate, 9 Sep 2026. `#828282` is the only step in the neutral ramp that clears 3:1, so "lighter" and "compliant" cannot both hold. The border firms to `--tt-border-interactive` on hover and focus, and that is what carries the affordance. |
| `--tt-text-muted` | **3.81:1** — fails AA for normal text | Legal by restriction: placeholders and disabled controls only, both exempt under WCAG 1.4.3. Anything a user is meant to *read* takes `--tt-text-tertiary`. |
| Status borders (`--tt-*-border`) | ~1.5–2.1:1 — below the 3:1 of SC 1.4.11 | Deliberate, 10 Sep 2026. Correct rather than tolerated: an alert is not a control, and severity is carried by the icon, heading and fill, never the border alone. `--tt-live` is exempt — its background is transparent, so its border is the only thing defining the pill, and it keeps full strength. |
| Badge border (`--tt-primary-badge-border`) | ~1.2–1.6:1 — lighter still | Added 11 Sep 2026, **now marketing-only**. A badge is a small pill, often several to a row; the alert-strength border read as heavy repeated at that scale, so this sits 55% closer to the badge's own subtle fill. Product badges dropped their borders entirely on 25 Sep 2026 and the other four tokens in this family went with them — but that cull checked the React components and *not* the marketing CSS, where nine call sites still pointed here. One of them was a `border:` shorthand, which an undefined custom property makes invalid outright, silently removing the border. Restored 29 Sep 2026 at its original value. `--tt-live` keeps the same exemption. |
| `primary` at `sm`/`md` | **UNRESOLVED, not an exception** | `lg`, the only size at which white-on-orange clears AA, is marketing-only as of 25 Sep 2026. `primary` in-product still has no compliant configuration. **Narrowed but not closed on 29 Sep 2026:** restricting orange to three allowlisted moments cut the exposure from roughly three orange buttons per *screen* to three per *flow*, and `strong` — 19.78:1, no tradeoff — now absorbs everything else. Rarer is not compliant. 3.13:1 is still 3.13:1 on the buttons that remain. **Widened again 4 Nov 2026 (D107):** the default button is orange again, so the 3.13:1 pair is on every view, one per view rather than three per flow. Needs a decision, not a shrug — see §8 Button. |

The axe colour-contrast rule is switched off **for the Button component's stories
only**. Every other component in the library runs the full gate at `error`.

Two contrast bugs were found and **fixed rather than accepted**: light
`--tt-success` moved green-600 → green-700 (it measured 4.40:1 on its own subtle
background), and dark `--tt-caution-subtle` moved gold-700 → a newly added gold-900
(caution text on it measured 3.65:1). A third — a 17×17px toast dismiss button,
below the 24×24 of WCAG 2.2 SC 2.5.8 — was fixed in the structure pass.

### Interaction

| Decision | Why |
|---|---|
| **`secondary` buttons get a small shadow — 30 Sep 2026, light value raised same day, CORRECTED 2 Oct 2026** | `strong` and `primary` read as buttons through their fill; `secondary`'s fill (`--tt-fill-soft`) is a near-invisible step off the surface, so it gets a small proportionate lift instead of true elevation. `strong`/`primary`/`ghost`/`danger` stay flat — this is scoped to `secondary` only. The 30 Sep light-theme value was only ever *derived*, never measured — that prototype session was dark-only — and the first pass copied `--tt-elevation-1`'s own near-invisible alpha, which Bhuvan couldn't find on the built page; raised same day to a single warm-dark layer, `0 1px 3px rgba(30,28,25,.16)`. **2 Oct 2026: this pass caught the prototype in light theme and actually measured it** — four separate secondary buttons across three screens ("Connect", "Sign up" x2, "Sign up with Google"), 100% consistent: a near-black three-layer recipe, `0 0 1px rgba(0,0,0,.4), 0 1px 1px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.04)` — a hairline, a contact shadow, and a soft spread, not one flat layer. `--tt-shadow-secondary` now carries this measured value. Dark theme's value (`0 0 1px rgb(253 251 247/.45), 0 1px 2px rgb(0 0 0/.35)`) was measured live on 30 Sep and is unchanged — re-confirmed exact on the same screens this pass. |
| **Checked checkboxes stay dark-neutral, not orange — confirmed 30 Sep 2026, re-confirmed 2 Oct 2026** | The same onboarding prototype used orange (`--tt-primary`) for its checked state, in both the original pass and this one's knowledge-grid checkboxes. Reviewed and kept as dark-neutral (`--tt-cta-strong`) — that's the whole reason this moved off orange on 29 Sep: a column of checked boxes shouldn't all light up in brand colour. The prototype's choice was not adopted here, twice. |
| **Selectable tile / radio-card — selection is a colour or inset-shadow change, never a border-width or box-model change — added 2 Oct 2026** | Measured from the onboarding flow's voice and avatar-look pickers: a radio-card's selected state darkens its 1px border by a colour step (`--tt-border` to `--tt-text-tertiary`), never widens it; an image tile's selected state is a 2px **inset** ring (`box-shadow: inset 0 0 0 2px var(--tt-text-primary)`), never an outset border. Either drawn as a normal growing border would shift neighbouring tiles by the stroke width on select/deselect. The radio control itself is a filled circle with its "dot" punched out as a 4px white inset-shadow ring, not a separate drawn dot — see §8 Selectable tile / radio-card. |
| **Auth modal fields and OAuth button run 48px/pill, not the standard 40px/8px — scoped to that modal, measured 2 Oct 2026** | The welcome/sign-up modal's email, password, and "Sign up with Google" controls are taller and fully pill-radius, with their border at `--tt-border-interactive` even at rest (no hover needed to look "ready"). Treated like the auth modal's gradient illustration — a deliberate, scoped exception for one branded welcome moment, not a change to the general `Input`/`Button` spec. A settings form or table filter still uses the ordinary 40px, 8px-radius controls. |
| **Dark-mode `--tt-fill-soft` was silently missing — found and fixed 30 Sep 2026** | The pair existed in the SYSTEM-dark block (`@media prefers-color-scheme: dark`) but was never copied into the EXPLICIT `[data-theme="dark"]` block, so any visitor with an explicit dark toggle (not just a dark OS) fell through to the light value and `secondary` rendered light-grey on near-black. Found by checking a real dark Storybook against the onboarding prototype's (correctly dark) secondary-button colour. Both dark blocks now carry `#2B2B2B` / `#4A4A4A`, matching. |
| **Brand orange is allowlisted, not rationed — 29 Sep 2026** | "One per view" still produced an orange button on every view, plus orange nav, selection and avatars around it. The list is now absolute: a flow's terminal commit, a dialog's confirm, a recommended card's select. `strong` is the default and does everything else. **Reversed 4 Nov 2026 for buttons — the default Button is the orange primary, one per view or dialog (D107).** |
| **The radius scale starts at 4px again — REVERSED 29 Sep 2026** | The 4px step was retired 9 Sep 2026 on the rule "8px is the floor", which left `xs` a dead alias of `sm` and the scale effectively 8/12/16. The cost landed on the smallest controls: an 18px checkbox at 8px radius rounds 44% of its own half-width and reads as a lozenge rather than a square with softened corners. A radius has to step *with* the element, and there was no step below 8 for an 18px control to take. Scale is 4/8/12/16/pill; 4 is reserved for controls at or under ~20px. Repointing `xs` moved five marketing usages, the source chip and the table's inline sort button down with it — all verified small enough — and `.c-option` in the spec document, a 46px menu row, was moved up to `sm` rather than left on the smallest step. |
| **The checkmark is a 1px stroke, not a filled glyph — 29 Sep 2026** | Bhuvan: *"checkmark inside the check box should be 1px thick."* It was a `clip-path` polygon, where stroke weight is implied by the outline's geometry rather than stated — it worked out around 2px, heavy against a 0.5px field border and impossible to change without redrawing the path. Two borders on a rotated 5×9 box give an exact, stated 1px that cannot drift, and the indeterminate dash dropped to 1px to match so both states read as one control drawn with one pen. |
| **Two utilities for the same property must never both be emitted — 29 Sep 2026** | Icon-only buttons shipped their glyph squashed to 6×16px for weeks. `iconSizes` set `px-0`, `sizes` set `px-3`, both landed on the element, and single-class Tailwind utilities tie on specificity — so Tailwind's generated source order picked the winner, which was `px-3`. The 32px button was left an 8px content box, and an inline SVG's default `flex-shrink: 1` squashed the icon rather than overflowing it, which is why it read as "small" rather than "broken". The same trap was already documented in this component for the disabled/loading opacity and fixed there by computing one class in JS; it was simply never applied to the size maps. Padding now lives in its own map, and the component emits padding **or** width, never both. Worth noting the plain CSS in `foundations.html` was always correct, because `.c-btn--icon.c-btn--sm` outranks `.c-btn--sm` on specificity — the spec and the code had diverged with the spec right. |
| **`strong` is one variant, not two** | Black in light theme, white in dark, flipped by the token layer — so it is always the opposite polarity of its canvas and cannot be shipped invisible. Nobody has to remember which colour belongs to which theme. |
| **Destructive is outlined, never filled** | A filled destructive button carries the same visual weight as the primary action, which is how people delete a trainer's uploaded material by mistake. It also avoids a theme fork, since `--tt-danger` inverts across themes. |
| **Icon-only buttons always carry an `aria-label`** | Without one a screen reader announces "button" and nothing else — the most common accessibility failure in a toolbar. The icon is `aria-hidden`; it is decoration once the label exists. |
| **Segmented Control is the default tabbed-content pattern — reversed 25 Sep 2026** | Was "segmented control = mode of one thing, tabs = different content." That distinction was never how people actually reach for these — Bhuvan's call, prompted by the Session Shell's own Voice/Text/Video switcher wanting genuinely different content per pane. What decides now is the *shape* of the choice (2–4 short parallel options, always one selected), not a technicality about what's behind it. The old tabs pattern survives as **Underline Tabs**, demoted to secondary and reachable only by that name — see §8. |
| **A custom dropdown only when the native `<select>` can't do it** | Native options cannot carry a description, a group label, or a disabled reason. When the choice is short and self-evident the native control is more robust on mobile and costs nothing. |
| **A date field always keeps its text input** | Typing "17 sep" beats four taps through a grid, and it is the only route that works well with a screen reader. The calendar is an accelerator, never the only way in. |
| **In a form, the error replaces the hint** | Both at once is two messages under one field, and the one that matters gets skimmed past. |
| **Disabled and read-only are different states** | Disabled means "not actionable, ignore it" and greys out. Read-only means "this matters, you just can't change it here" — so it sinks to a filled well but keeps full text contrast and stays selectable. |
| **The valid tick is used sparingly** | Reserve it for checks that cost something — a lookup, a code. A tick on every satisfied field is noise that trains people to ignore all of them. |
| **Never a filled button on a surface of its own colour** | It disappears into its own background. When the surface carries the brand, the control inverts. Whichever is the figure, the other becomes the ground. |
| **Links are always underlined** | Colour alone cannot distinguish a link from surrounding text — WCAG 1.4.1, and the rule people break most. |
| **Amber is banned outright** | It sits ~25° from the brand orange and reads as a *broken* brand colour rather than a warning. Gold is quarantined instead, and never within 8px of a primary action. |
| **Three-level scoring is green / neutral / red** | The middle state is neutral, not amber. Only the poles carry hue, which reads faster — and a scorecard is exactly the artefact a colour-blind learner will be judged by. |

### Layout

| Decision | Why |
|---|---|
| **Radius scale gains a 24px step, `xl` — 30 Sep 2026** | Three surfaces in the onboarding prototype — the full-page setup card, the sign-up modal, and the empty-state "gate" card — all measured 24px, one step above the existing 16px ceiling, each correctly paired with an elevation shadow for its role. Reserved for the LARGEST elevated surfaces only; `lg` (16px) stays correct for an ordinary modal or the session frame. |
| **The header nav is a per-page pattern, not a persistent top bar — 30 Sep 2026** | Confirmed from a live reference: icon + page title on the left, a segmented All/Published/Draft-style filter and a search field in the middle, one primary action (`+ New`) on the right — all inside `<main>`, sitting above the page's own content, not a site-wide chrome bar outside the sidebar. The sidebar itself collapses to icon-only alongside it. |
| **Sidebar is 248px, not 148px — corrected 30 Sep 2026** | The 148px figure predates any real build and was never checked against one. Measured live off a running onboarding prototype: 248px wide, 12px padding both sides, 8px gap between nav items — comfortable room for a label like "Layout & structure" plus its icon, which 148px never actually had. This document's own small illustrative shell mockup (§8) keeps 148px on purpose, as a compact proportional diagram, not a pixel claim. **Superseded 4 Nov 2026 — 214px (D96).** |
| **Two content-alignment patterns, not one — 30 Sep 2026** | A focused-task screen (onboarding, auth, an empty-state gate) centers its content in a fixed-width column, `margin: 0 auto` — 640px and 420px confirmed live, picked per screen, never universal. A dashboard/app-shell screen goes full-bleed instead, with padding for breathing room (measured `16px 32px 32px`, asymmetric) rather than a max-width. Pick by what the screen IS: a form or gate is one task and reads better centered; a dashboard needs the width for a grid or table. A page header's action shares its title's container either way — it never floats alone at the physical viewport edge while the title sits centered or padded. |
| **`.c-shell-content` padding becomes `16px 32px 32px` — 30 Sep 2026, was uniform `--tt-space-4`** | Matches the confirmed live app-shell padding above — more generous at the sides than the top, not a flat 16px box. |
| **A source/knowledge card grid is fixed two-column, not flexible — 30 Sep 2026** | Two 316px columns, `--tt-space-4` (16px) gap — not `auto-fit, minmax()`. Deliberately different from an ordinary Card grid (still `auto-fit, minmax(260px, 1fr)`, unchanged): every card in a source picker carries the same shape, and a flexible width would misalign the checkboxes across rows. |
| **The radius scale starts at 4px — REVERSED 29 Sep 2026** | Was "8px is the radius floor," set 9 Sep 2026, `--tt-radius-xs` aliasing `sm`. Reversed after an 18px checkbox at 8px radius rounded 44% of its own half-width and read as a lozenge; there was no step below 8 for a control that small to take. `xs` is 4px again, reserved for controls at or under ~20px — checkboxes, radios, the inline sort button. |
| **Breakpoints match Tailwind's defaults** | There is no reason to invent our own, and diverging would surprise anyone who has used Tailwind before. |
| **One ordered z-index scale; no component invents a number** | Eight steps from base to tooltip. Before it existed the library had a single hardcoded `z-index: 90`, which works right up until the first dialog opens behind something. |
| **Icon size is not hit area** | Icons take one of four sizes (12/16/20/24), but the control around one is never smaller than `--tt-target-min` (24px), per WCAG 2.2 SC 2.5.8. A 17×17px dismiss button shipped before this rule existed. |
| **The active nav item is a white pill, lifted** | `--tt-surface` with `--tt-elevation-1` on the sunken rail — the same figure/ground move the segmented control's selected segment makes. Measured from the Figma, which shows a `#FEFEFF` pill over a `#ECECEC` shadow edge. |
| **Toast sits above modal in the z-order** | A toast confirming a dialog's action has to be visible while the dialog is still open. Tooltip is highest because it never blocks, so it can never trap anything. |
| **Elevation steps must be perceptible, not just ordered** | The first ladder moved 5% → 7% alpha between levels 1 and 2. Ordered correctly, invisible in practice — an interactive card lifting on hover produced no visible change. Each step now roughly doubles offset, blur and alpha. |
| **`secondary` is a soft grey fill, not an outline** | The utility-button style: toolbars, Help/Docs, notification bells. Its fill is `--tt-fill-soft`, deliberately **not** `--tt-surface-sunken` — in dark theme sunken is *darker* than the card a button sits on, so a button using it would read as a hole rather than a control. |
| **A selected calendar day uses `cta-strong`, not `primary`** | A day number is ~13px, where white-on-orange (3.13:1) stops being readable. Orange marks *today* as a dot instead, which also gives the two states distinct meanings rather than two shades of the same one. |
| **Card hover is elevation only** | No border highlight, no surface shift. A card that lifts should not simultaneously read as recessed; the two signals fight. |
| **Every card carries elevation-1 by default** | A card flat against the canvas with only a hairline is too quiet to read as a distinct object. Elevation-1 was reduced to a single layer, `0 1px 2px rgba(30,28,25,.06)`, on 10 Sep 2026 to match the Figma's flatter card. `raised` (elevation-2) is reserved for things genuinely floating. The variant formerly called `flat` was renamed `default` on 10 Sep 2026 — a variant called "flat" that casts a shadow is a lie in the API. |
| **Card padding lives on the sections, not the card** | So a card can hold a full-bleed image or an edge-to-edge table without fighting a padding it never asked for. This is the case that breaks cards which pad themselves. |
| **Dark mode elevates with lightness, not shadow** | Shadows are invisible on a near-black canvas; a hairline plus a step up the neutral ramp is the only signal that reads. |

### Product patterns

| Decision | Why |
|---|---|
| **Every twin surface carries a persistent AI disclosure naming the trainer** | The trust being extended is theirs. "AI assistant" is not a disclosure; "AI twin of Priya Raman" is. Never dismissible, never orange — it is a statement of fact, not a call to action. In video mode it appears twice, once composited *inside* the frame, because a likeness that can be screen-recorded must carry its disclosure in the pixels. |
| **Answers cite three states, not two** | Grounded, Inferred, and **Outside this trainer's material** — the third is the one that protects a trainer's reputation, and the only one that gets caution colour, because it is the only one where their name is attached to something that isn't theirs. |
| **Citations sit below the answer, never inline** | Inline superscripts interrupt reading, and a learner in a timed mock interview cannot afford that. |
| **Mode is a view, not a session type** | Voice, text, and video share one Session Shell and one transcript, so a learner can start in voice, drop to text for a code question, and lose nothing. Roughly 1.4× the work of one mode instead of 3×, and a better product. |
| **Live state uses `--tt-live`, never `--tt-primary`** | This is exactly the collision the orange primary was chosen to avoid; spending it here would waste that decision. |
| **Ingest shows real progress per source** | Uploading a trainer's life's work is slow and anxious. Never an indeterminate bar. |

### Tooling

| Decision | Why |
|---|---|
| **Storybook is the living library** | It is ahead of what Figma would give us on the free plan, and it is the thing that actually ships. |
| **Figma via Tokens Studio, free tier** | Gets the foundation in without an upgrade. On free, export runs from **Token Sets** (Themes export is Pro), and each set becomes one variable collection. Light and Dark arrive as two collections rather than two modes — that is a plan limit, not an import limit. |
| **`src/styles/tokens.css` is the single source of truth** | Every other artefact — this file, the Figma export, the foundations page — is generated from it. Hand-editing any of them puts the system out of sync with what the app ships. |


### Onboarding V3 round — 4 Nov 2026

| Decision | Why |
|---|---|
| **Onboarding V3 hand-off folded in — 4 Nov 2026** | Product's hand-off list was walked against this record item by item. **Applied:** everything in D91–D110 (D102–D106 from the second, measured pass; D107–D108 are Bhuvan's calls the same day). **Not applied as rules:** the six items it marked ⚑ CHECK, plus the off-scale values and contradictions found while folding in — all Open (§13). No token changed, so the `tokens.css` fingerprint is unchanged. One bug fixed on the way: the foundations `.c-avatar` demo was brand-ink, contradicting the locked neutral-avatar rule and the real `Avatar.tsx`. |
| **Two summary cards in a row are equal width, 16px apart, 108px tall, and share a baseline** | A number and its count sit on one text baseline with the count pushed to the card's right edge (24px in): “4.3 / 5 … 21 sessions rated”, “AED 90 … 1 extension”. Radius 12, 1px `--tt-card-border`, the standard Card shadow, padding 20×24. Wording is “N sessions rated”, never “N of M”. Sizing history so it isn't repeated: amount 64→48→24px, illustration 88→66px, columns 7fr/5fr→equal. |
| **Number tiles carry a number and nothing else** | Four to a row, 16px gap, radius 12, padding 16×20, no border, no dividers; label = 14px icon + 14px secondary, value 32/600 `tabular-nums`. The ↗ ghost button (28px) is **centred on the number** and goes where the number leads; minutes tiles have none. No note line under the number — if a note repeats the label, delete it. (Fill is `--tt-surface-sunken`, still Open as ⚑5.) |
| **Attention chips are filters, ordered by priority** | 32px pills, 13/500, trailing ↗: Reported problems (danger-subtle), Low ratings (caution-subtle), Questions sent to you (info-subtle, Twin only). Pressing one toggles a filter on the table and shows a “Show all” link; hover and pressed are a 1px inset outline in the chip's own colour. Each carries a word, never colour alone. |
| **The calendar popover is 288px, Sunday-first, with 34px day circles** | Replaces the earlier 268px, Monday-first, 32px-day sketch. Header month 14/600 + 28px round ghost nav (previous disabled on the current month); two-letter weekday initials (Su Mo …), 12px, `tabular-nums`, Figtree; today = orange dot, selected = `--tt-cta-strong` (D76); past days disabled at 45% with the footer hint “Dates before today can't be picked.” “Access until” defaults to the label “30 days” (value = today + 30). Keep the typable `<input type="date">` (D54), hide the native indicator, never call `showPicker()`. |
| **A page-header filter is a 148×32, 8px-radius dropdown; the chevron is drawn** | Same listbox and `--tt-radius-sm` as the 36px Dropdown — so ⚑3's “rectangle, not pill” is the existing rule, not an exception. The chevron is a 12×7 glyph at ~1.33px effective stroke (viewBox cropped to the glyph), matching the ↗ arrow. A native `<select class="input">` gets `appearance: none` plus a 16px background chevron at `right 12px center`, `padding-right: 40px`; never the browser's own (macOS draws it hard against the edge). |
| **The sidebar rail is 214px — reversed 4 Nov 2026, was 248px** | It went 248 → 198 → 214 while the V3 prototype was polished; 214 is what its labels, icons and padding settled at. Collapsed stays 72px. The section label is “ROLEPLAY”, one word. Supersedes the 30 Sep 2026 measurement (248px, itself a correction of 148px). |
| **A side panel slides in from the right edge; a dialog may open over it** | 560px (100vw on small screens), full height, 24px on the left corners only, slide-in plays once on open. Respond (520px) opens on top of Reports raised; both sit at `--z-modal`, DOM order decides, the top-most closes first, and a toast (`--z-toast`) appears above both. Native `<dialog>` top-layer caveats in the Layering entry still apply. |
| **One CTA per row where the action is “deal with this”; a grey box holds what the learner said** | “Respond” (secondary, sm) sits inside the row's grey box at the right. The grey box (`--tt-fill-soft`, radius 12) is the learner's words; italic + “double quotes” is a quoted turn; plain text is our labels. Resolved by responding — no “Correct the answer”, no “Mark resolved”. Learner-facing report reasons are the learner's vocabulary, not Olga's calibration vocabulary. |
| **A share of a whole is a ring; usage credit has no bar at all** | Rings fill clockwise over `--tt-border`; the 18px top-bar ring turns caution at ≥ 90%. Usage credit inside the agent card is a grey box with the number and “minutes left” and **no progress bar**. Ingest keeps its real per-source bar (D86). The ring's green fill is Open (⚑4). |
| **“Roleplay” is one word everywhere** | Nav, titles, buttons, toasts. Buttons: Save and Assign · Send by email · Respond · Show all. Labels: Access until · Minutes · Your answer · Learner's report · Reported turn. Titles: Average help score · Paid by learners · Needs a look · Questions your twin couldn't answer · Reports raised · Answers only on. |
| **A photo-less avatar shows the first letter of the name** | Photo avatars are 32px and round; letter avatars are 22 / 28 / 32px, 600, centred. The green “Responded” badge replaces a question's Respond button once an answer is sent; a report row leaves its list instead. **The fill colour is deliberately not decided here:** the 29 Sep 2026 rule is one neutral colour, the first hand-off agrees, but the measured V3 spec cycles five tones by name — see Still open. |
| **A third page pattern: the 896px library page** | `20 64 32` padding inside a 1024 max-width gives an 896 content column — measured on the V3 lists, tables and dashboards. Wide pages (Persona library) take a 1098 column; create and builder pages 720. It sits **beside** the centred column (focused tasks, 640 / 420) and the full-bleed `16 32 32` pattern, replacing neither; which one a dashboard uses is Open. The frame is `--tt-surface-sunken`; the main sheet is `--tt-canvas` with radius 16 on its left corners and a `-4px 0 16px rgba(30,28,25,.06)` shadow. |
| **The phone shell is a 56px top bar and a 68px bottom tab bar, switched at 767px** | Rail hidden ≤ 767. Top bar 56px (logo + wordmark left; layout / theme / account right). Tab bar 68px, white, padding 8, five tabs — Home · Roleplay · Twin Agents · Report · Settings — each 75×52, radius 12, 11/14 500, active = primary-ink text + orange icon. Page padding 16 (358px at 390); grids go one column; **summary cards, tiles and tables switch at 720** (cards stack with the picture above the title, tiles 2×2); dialogs are `100vw − 32`. |
| **Page headers are 40px, title left, tools right, one primary action** | `.lib-head`: align-items centre, gap 16, 40px high (32px when it holds only small filters). Title 16/22 600 with a 28×28 icon box (radius 8, secondary); tools are flex with gap 12. Section headings are 18/24 600 with 32px above. Detail and builder pages swap the header for a 64px back-bar (canvas, padding `0 32`, back link 14/20 with a 16px arrow). |
| **States and defaults behave the same on every page** | A disabled primary is grey with muted text and is enabled only when the form is valid — never hidden. Defaults are pre-filled and visible (30 min, “30 days”); required choices start empty and read “Select”. Hover changes colour, not size. A destructive or irreversible action opens a confirm dialog with Cancel + the action. Toasts are one sentence, past tense, no exclamation mark. Quotes are “double” (‘single’ inside), apostrophes typographic; dates read “Today, 8:15 am”, “Yesterday, 4:20 pm”, “Monday, 9:18 am”, “30 Nov 2026”. |
| **Star ratings are five 16px stars with a word under them; the learner stack stays neutral** | Filled colour follows the rating — 5 success, 4 caution, ≤ 3 danger; empty stars are `--tt-border`; the label (“Very helpful”, “Helpful”, “Somewhat helpful”, “No rating”) carries the meaning so colour is never alone. This is a rating scale, not the interview rubric (which still avoids caution). A learner stack is 28px circles in one neutral grey with a 2px white ring and −8px overlap, “+N” at 11/500. |
| **The default button is the orange primary — one per view or dialog** | Reverses D04 and D45, on Bhuvan's call (4 Nov 2026, “Orange everywhere”), for product screens. The default `<Button>` is `--tt-primary` with `--tt-on-primary`, at most one per view or dialog — Create new, Continue, Save and Assign, Send by email, Create and publish, Calibrate, Done — exactly what the V3 build already ships (an `EXPERIMENT` block in its app.css overrode `btn--strong`). **What does not change:** orange is still not selection or state — selected rows, checked checkboxes (D41), the selected calendar day (D76), avatars, the current onboarding step, count pills and chat tints stay out (the V3 build's orange switch, chip ring, inbox selection and count badge remain Open); a row or card action is a small `secondary`; destructive stays outlined; live state stays `--tt-live` (D85). The dark `strong` variant stays defined (`--tt-cta-strong` still drives checkboxes and the calendar day) but is no longer the default, and its remaining role is Open. **Cost, taken knowingly:** white on orange is 3.13:1 at 13–14px (D01's accepted exception) — the exposure widens from three buttons per flow to one per view, and the unresolved “`primary` has no compliant size” item now applies to every primary. Marketing CTAs are not covered by V3 and keep `strong` until decided. |
| **The page-header “Create new” label is weight 500** | Measured at 500 in V3 where every other CTA label is 600; Bhuvan confirmed 500 is its weight, so it is recorded as the one named exception to “CTA labels are 600” rather than normalised. Do not “fix” it to 600 without being asked. |
| **The `md` button is 36px** | Changed from 40px on Bhuvan's call (4 Nov 2026). Sizes are now `sm` 32 · `md` 36 · `lg` 50 · `xl` 54; the icon-only `md` button is 36×36 (it stays square at every size). The 14px label and the padding are unchanged. **Consequence:** inputs, selects and dropdown triggers were still 40px, so they moved to 36 too (D110). `Button.tsx` now maps `md` to `h-9`. |
| **Form fields are 36px, the same as the md button** | Changed from 40px on Bhuvan's call (4 Nov 2026, “Both to 36”), so a field and an `md` button on one row share a height. `Input`, `Select`, the dropdown trigger and the multi-select's resting height are now 36px (`h-9` / `min-h-9`); the multi-select and listbox-triggered fields still grow past 36 when chips wrap. Width, 8px radius, 14px text and 0.5px border are unchanged; the 32px `sm` field and the 48px auth-modal fields (D43) are unchanged. Resolves the open question in D109. Updated in `Button.tsx`, `Input.tsx`, `Select.tsx` and `MultiSelect.tsx`; the page-header filter stays a 32px compact sibling. |

---

### Sign-in flow round — 5 Nov 2026

| Decision | Why |
|---|---|
| **The sign-in flow, Build my twin to Twin ready, folded in: 5 Nov 2026** | Bhuvan: “Double check all the components in this whole flow and update the design system and components.” The V3 build was walked live at 1024×768: eleven in-app screens, then the sign-in flow (Your link, Here's what we found, Add your voice, Voice library, Record, Recorded, the live call with “What we found about you”, the Add knowledge dialog, Twin ready). Every button, field, card and colour was read from computed styles. **Result:** 40 distinct colour uses, 33 resolve exactly to a token and 7 are alpha blends or a UA default; every filled button is the orange primary at `md` 36 or `sm` 32 (D107, D109); cards match §8 except the radius-16 rows already open; **fields in the build are still 40px** where the system says 36 (D110), recorded as Open. New surfaces are in the “Sign-in flow, measured” table (§8). The build's class `btn--strong` is the orange primary, a naming drift and not the black variant. |
| **The full-page setup card has four widths and one anatomy** | Radius `--tt-radius-xl` (24), padding 32, no border, `--tt-elevation-2`, centred under the page title and stepper. Width follows the content: **480** for a form or a choice (Build my twin, Add your voice, Voice library, Record), **600** for the “What we found about you” card beside the video, **640** for a result (Twin is ready), **680** for a list (Here's what we found). Replaces the earlier single 640 / 700. `Card` gains `variant="setup"`, the first V3 surface built as a component, and it is the one card that pads itself and has no border. |
| **The components now follow D107** | `Button.tsx` defaults to `primary`; its comments and Storybook stories were rewritten around “one orange per view”. The two marketing CTAs that need black (EarlyAccessSteps, InviteForm) pass `variant="strong"` explicitly, so nothing changes on the marketing site. Row and card actions that had relied on the old default (the Card story's Open source, the neighbour card's Select, the checklist rows) are `secondary`. `Pagination` was already `secondary`. Until now the docs said orange and the code said black. |

## 2. Non-negotiable rules

1. **The default button is the orange primary — one per view or dialog.**
   *Reversed 4 Nov 2026 (D107); it was `strong`, black in light and white in dark.* Writing
   `<Button>Continue</Button>` with no variant gets brand orange on product screens. A page
   header carries one; a dialog's confirm is the one; a row or card action is a small
   `secondary`; two orange buttons in one viewport means one of them is wrong. The dark
   `strong` variant stays defined but is no longer the default — marketing CTAs keep it
   until decided.
2. **Orange is the one main action — not state, selection or decoration.** Not on this
   list, and therefore neutral: selected rows, checked checkboxes, chosen dropdown items,
   the selected calendar day (D76), the current onboarding step, avatars, count pills and
   chat tints; and the active nav item's *fill* (its icon dot and label stay
   `--tt-primary`/`--tt-primary-ink` — see §7). Never for errors, recording, or live state.
   See §8 for the full decision table.
2a. **The primary button is WHITE on `--tt-primary`.** A deliberate brand decision,
   signed off 9 Sep 2026, knowingly non-compliant: white on `#FF5A00` is 3.13:1,
   which fails WCAG AA for normal text. It passes only at large sizes (≥18.66px bold
   or ≥24px) and `lg` is marketing-only, so the orange buttons that remain are
   non-compliant and the gap is recorded as open. Do not "fix" this to black
   without being asked.
3. **Never use amber/yellow as a warning.** It sits ~25° from the brand orange and
   reads as a broken brand colour. Use `--tt-caution` (gold), never within 8px of a
   primary action. For three-level scoring use green / neutral / red — the middle
   state is neutral, not amber.
4. **Form controls and the secondary button use a 0.5px border in
   `--tt-border-field`** (neutral 300) at rest, firming to
   `--tt-border-interactive` on hover and focus. The resting value is 1.74:1 — below
   the 3:1 WCAG 1.4.11 asks of an interactive boundary. Deliberate decision
   (9 Sep 2026): `#828282` is the only step in this ramp that passes, so lighter and
   compliant cannot both hold; the hover/focus firming carries the affordance. Cards
   and dividers use 1px (`--tt-border-thin`); the focus ring is 2px at 2px offset.
5. **The radius scale starts at 4px.** `--tt-radius-xs` is 4px, reserved for
   controls at or under ~20px (checkboxes, radios, the inline sort button) —
   REVERSED 29 Sep 2026 from "8px is the floor," which left an 18px checkbox
   rounding 44% of its own half-width. Everything else steps 8 / 12 / 16 / 24 / pill
   — 24 (`xl`) added 30 Sep 2026 for the largest elevated surfaces only (a
   full-page setup card, an auth modal, an empty-state gate); it is not a
   general-purpose step and `lg` (16px) stays the default for an ordinary modal.
6. **`--tt-text-muted` fails AA for normal text (3.81:1).** Placeholder text and
   disabled controls only — both exempt. Anything meant to be read takes
   `--tt-text-tertiary`.
7. **No raw hex in markup.** Every colour comes from a `var(--tt-*)` token.
8. **Serif is marketing-only, full stop.** Not "titles above 20px" — nowhere in the
   product, at any size. `src/components/home/` and the landing site may combine
   Noto Serif with Figtree; every product screen commits to Figtree alone.
9. **Both themes must work.** Never define a colour only inside a media query or
   `[data-theme]` block — see §4.
10. **Three font weights: 400, 500, 600. Never 700.** Weight is tokenised
    (`--tt-weight-regular` / `-medium` / `-semibold`); writing `font-weight: 700`,
    `font-bold`, or `font-extrabold` puts you outside the system. 400 for everything
    read, 500 for labels/badges/inline emphasis, 600 for titles *and* button/CTA
    labels — titles moved back to 600 on 29 Sep 2026; see §3.
11. **You MUST include the `b, strong` reset** from §4b. Every browser sets them to
    `bold` = 700, so without it every emphasised run, every `<strong>` in a stat row
    and every `<b>` in a twin's answer renders 700 no matter how carefully the
    surrounding component is specified. This is the single most common way a
    TrainerTwin screen comes out looking wrong.
12. **Pills use `--tt-pad-pill-*` and set their own `line-height`.** Horizontal
    padding is 3× the vertical, never 2× — a `radius-pill` end optically eats about
    half a stem at each edge. 12px is the floor for any pill carrying more than two
    words. Left to inherit, body's 23px line-height makes an 11px badge stand 35px
    tall, and the padding gets blamed for what is really the line box.
13. **Never use a status *text* colour as a border colour.** `--tt-success`,
    `--tt-danger`, `--tt-info`, `--tt-caution` are text values; at 4.7–6.4:1 against
    their own subtle fill they make every alert and badge shout. Borders take the
    `--tt-*-border` family (§5).

---

## 3. Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=Noto+Serif:wght@400;600&display=swap">
```

| Role | Family | Use for | Never for |
|---|---|---|---|
| Display | **Noto Serif** | Marketing titles above 20px only | Anywhere inside the product, regardless of size |
| UI | **Figtree** | Everything operable, all body copy | — |
| ~~Mono~~ | **REMOVED 29 Sep 2026** — the brand is two families. Nothing third is downloaded or shipped. | Where characters genuinely must be fixed-width — landing-page code mocks and simulated terminals — `--tt-font-mono` resolves to the **operating system's own** monospace (`ui-monospace, SFMono-Regular, Menlo, monospace`). Not a brand family, no network request. | **All product UI, and all numbers.** Scores, durations, timestamps, counters and table figures are Figtree with `tabular-nums`. |

**Then declare the families as tokens** — `--tt-font-*` is referenced
throughout §4b and §8, and in the Next.js app it is supplied by
`src/styles/fonts.ts`. Outside that app (an artifact, a prototype, a one-off page)
nothing defines it, and every `font-family` silently falls back to Times. Two
webfonts, not three — mono was removed entirely 29 Sep 2026 and resolves to
whatever monospace the reader's OS already has:

```css
:root {
  --tt-font-display: "Noto Serif", Georgia, "Times New Roman", serif;
  --tt-font-ui:      "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --tt-font-mono:    ui-monospace, SFMono-Regular, Menlo, monospace;
}
```

Weight is **not** set here — it belongs to the token layer. Figtree loads as a
variable font, so every step costs nothing extra.

### Marketing-only faces

Two more families, adopted 10 Sep 2026 from the landing page. **Neither ever
appears in product UI** — the product stays three roles wide.

| Role | Family | Use for |
|---|---|---|
| Wordmark | **IBM Plex Sans** 600 | The wordmark lockup and the oversized footer watermark |
| Footer | **Hanken Grotesk** 400/600 | The footer's own tighter scale. Never above the footer boundary. |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&family=Hanken+Grotesk:wght@400;600&display=swap">
```
```css
:root {
  --tt-font-wordmark: "IBM Plex Sans", var(--tt-font-ui), sans-serif;
  --tt-font-footer:   "Hanken Grotesk", var(--tt-font-ui), sans-serif;
}
```

### Type scale

| Token | Face / weight | Size / line-height |
|---|---|---|
| `marketing/hero` | Noto Serif 600 | 64 / 68, −2% |
| `marketing/section` | Noto Serif 600 | 44 / 50 |
| `product/title-l` | Figtree 600 | 24 / 30 |
| `product/title-m` | Figtree 600 | 20 / 26 |
| `product/title-s` | Figtree 600 | 17 / 24 |
| `marketing/body` | Figtree 400 | 16 / 26 — **default on marketing pages** |
| `marketing/nav` | Figtree 400 | 14 / 20 |
| `product/body` | Figtree 400 | 15 / 23 — **default** |
| `product/body-s` | Figtree 400 | 13 / 20 |
| `product/overline` | Figtree 500 | 11 / 12, +9%, uppercase |
| `data/numeric` | Figtree 400 | 13 / 20, **tabular-nums (required)** |

Running text stops at 65 characters per line.

**`product/overline` takes `--tt-text-tertiary` — confirmed live 2 Oct 2026.**
The type-scale row above specs size/weight/tracking/case; colour wasn't pinned
down until this pass found it twice in real use (a "SETTINGS" page eyebrow, a
"COACHING TYPE" card label), both rendering at `#656565` in light theme — a
byte-exact match for `--tt-text-tertiary`, not `--tt-text-muted` (which fails AA
for normal text and exists for legal/timestamp copy only, §6).

**Marketing body is 16px; product body is 15px. Both are correct** — a marketing
paragraph is read at arm's length in a long scroll, a product table cell at a
glance in a dense grid. Added 10 Sep 2026 after the landing page was found using
16px in 152 places against a scale that had no step for it. The scale was missing
a step; the page was not wrong.

### Weight — three steps, revised 25 Sep 2026 (was two), titles re-raised 29 Sep

| Token | Value | Use for |
|---|---|---|
| `--tt-weight-regular` | **400** | Body, help text, table cells, transcripts, placeholders — everything *read* |
| `--tt-weight-medium` | **500** | Field labels, table headers, badges, overlines, inline emphasis (`b`/`strong`) — everything *slightly more important than the words around it* |
| `--tt-weight-semibold` | **600** | **Titles** — card, table, section, modal and page headings, plus a row's primary name — and button/CTA labels. |

**Use the ROLE name, never the primitive.** `font-title`, `font-label`, `font-cta`
and `font-body` are real Tailwind utilities as of 29 Sep 2026 — writing
`font-semibold` on a heading works today and silently stops tracking the system the
next time a role moves:

`--tt-weight-body` (regular) · `--tt-weight-title` (**semibold**) ·
`--tt-weight-label` (medium) · `--tt-weight-cta` (semibold).

**Why revised, twice.** The 10 Sep fix collapsed a four-weight drift
(800/700/600/500) down to two, which killed the drift but overshot: 600 on every
title *and* every `<b>` read as too heavy — Bhuvan's call, benchmarked against
Town.com, where hierarchy comes from size and colour rather than from spending the
maximum weight on everything that isn't body text.

**29 Sep 2026 — titles went back to 600.** That pass overshot in the other
direction. Moving titles to 500 left them at the *same* weight as labels, badges
and inline emphasis, so a card or table had no weight contrast between its heading
and its own content and read flat — Bhuvan again, from a built screen. The fix is
narrow on purpose: **titles only.** Labels stay 500 and `b`/`strong` stay 500, so
the original complaint about heavy bold text is not re-created. Hierarchy now comes
from size, colour *and* one weight step between title and label — which is what the
25 Sep pass removed.

`700` stays out of the scale for the original reason — at 13–15px it closes up
Figtree's counters, regardless of which side of either revision you're on.

**The role aliases were not actually wired until 29 Sep 2026** — and the 25 Sep
note here claimed otherwise, which was wrong. The aliases existed from 10 Sep, but
every product component referenced Tailwind's `font-semibold`, and after 25 Sep
`font-medium` — both of which map to the **primitives** `--tt-weight-semibold` /
`--tt-weight-medium`, not to `--tt-weight-title` or `--tt-weight-label`. Swapping
one primitive for another is not wiring; "one line to change" stayed aspirational,
and the 29 Sep title reversal would have been a fourteen-file sweep.

Fixed properly on 29 Sep: `globals.css` aliases the four role tokens, which
generates `font-title` / `font-label` / `font-cta` / `font-body`, and the
components use those. **Write the role, not the weight** — `font-title` on a
heading, never `font-semibold`. A component reaching for the primitive still
compiles and silently stops tracking the system the next time a role moves.

```css
/* REQUIRED. Every user-agent stylesheet sets b/strong to `bold` = 700, which is
   outside this scale. Without this reset, every emphasised run, every <strong> in
   a stat row and every <b> in a twin's answer renders 700 regardless of how the
   surrounding component is specified. Medium, not semibold — inline emphasis only
   needs to read as slightly more important, not as loud as a button. */
b, strong { font-weight: var(--tt-weight-medium); }

/* Same UA-default bug, different element, found 25 Sep 2026: th is bold by default
   too. Every table's own header styling already overrides it, so this was invisible
   until an EMPTY header cell (a select-all checkbox column with no text and no
   weight class of its own) rendered at 700 with nothing to catch it. */
th { font-weight: var(--tt-weight-medium); }
```

Never hard-code a weight. If you are writing `font-weight: 700` or `font-bold`
inside the product, you are outside the system.

---

## 4. Tokens — paste this whole block

Three layers: primitives → semantic → your CSS. **Components use the semantic layer
only.** Referencing a primitive like `--tt-orange-500` in a component is a bug.

Theme resolves in three states and all three must be handled: an explicit choice
stamps `data-theme`, while the default "system" setting stamps nothing and only
`prefers-color-scheme` applies. The block below already does this.

```css
/* ---------------------------------------------------------------- 1. PRIMITIVES */
:root {
  /* Brand. 500 is the mark. */
  --tt-orange-50:  #FFF4EC;
  --tt-orange-100: #FFE3D1;
  --tt-orange-200: #FFC5A3;
  --tt-orange-300: #FFA36B;
  --tt-orange-400: #FF7E33;
  --tt-orange-500: #FF5A00;
  --tt-orange-600: #E04D00;
  --tt-orange-700: #B83E00;
  --tt-orange-800: #8E3000;
  --tt-orange-900: #6B2400;
  --tt-orange-950: #3A1300;

  /* Cool neutrals. REVERSED 10 Sep 2026 — this ramp was warm olive-brown until the
     roleplay-library Figma was measured and found to use near-neutral greys. The
     anchors marked below are sampled from that render, so screens built from the
     Figma match by construction rather than by eye. The mid-tones were then tuned
     to hold the contrast margins the warm ramp had: text-tertiary moved 5.83 ->
     5.78:1, border-interactive 3.99 -> 3.81:1. */
  --tt-neutral-0:    #FFFFFF;
  --tt-neutral-25:   #FEFEFF;   /* page canvas          (from Figma) */
  --tt-neutral-50:   #F7F7F7;   /* sidebar, sunken      (from Figma) */
  --tt-neutral-100:  #F0F0F0;
  --tt-neutral-200:  #E9E9E9;   /* borders              (from Figma) */
  --tt-neutral-300:  #C4C4C4;
  --tt-neutral-400:  #A3A3A3;
  --tt-neutral-500:  #828282;
  --tt-neutral-600:  #656565;
  --tt-neutral-700:  #4A4A4A;
  --tt-neutral-800:  #2B2B2B;   /* the dark CTA         (from Figma) */
  --tt-neutral-900:  #1C1B1B;   /* body text            (from Figma) */
  --tt-neutral-950:  #141414;
  --tt-neutral-1000: #0A0A0A;

  --tt-red-50:  #FFF1F1;
  --tt-red-100: #FFE0E1;
  --tt-red-300: #F58F93;
  --tt-red-500: #E5484D;
  --tt-red-600: #CE2C33;
  --tt-red-700: #A81F26;
  --tt-red-900: #6B1216;

  --tt-green-50:  #EDF9F1;
  --tt-green-100: #D3F0DE;
  --tt-green-300: #7FD1A0;
  --tt-green-500: #2E9E5B;
  --tt-green-600: #23834A;
  --tt-green-700: #1A6739;
  --tt-green-900: #0E3E22;

  --tt-blue-50:  #EEF4FF;
  --tt-blue-100: #DBE7FF;
  --tt-blue-300: #8FB6F5;
  --tt-blue-500: #3B7DE8;
  --tt-blue-600: #2A63C4;
  --tt-blue-700: #1F4C9B;
  --tt-blue-900: #12305F;

  /* Gold, not amber. Amber sits ~25deg from the brand and reads as a broken
     brand colour rather than a warning. Never within 8px of a primary action. */
  --tt-gold-50:  #FDF6E3;
  --tt-gold-100: #F8EAC0;
  --tt-gold-300: #E9C86A;
  --tt-gold-500: #C99A08;
  --tt-gold-600: #A87E00;
  --tt-gold-700: #7F5F00;
  --tt-gold-900: #3A2A00;

  /* Type weight — THREE STEPS, revised 25 Sep 2026 (was two, added 10 Sep).
     This scale did not exist until 10 Sep, and its absence was the bug: families
     were tokenised but weight never was, so every component picked its own
     literal and the system drifted to four of them (800 wordmark / 800 metrics,
     700 buttons and labels, 600 titles, 500 mono meta). The fix at the time was
     to collapse everything to two steps, 400 and 600.

     That overshot: 600 on every title and every <b>/<strong> reads as too heavy
     in the product (Bhuvan's call, referencing Town.com's restraint — titles and
     inline emphasis there carry hierarchy through size and colour, not through
     maximum available weight). 700 is still OUT OF THE SCALE for the reason
     given at the time — it closes up Figtree's counters. But a single "570 for
     everything that isn't body text" was never fine-grained enough to tell a
     title from a button.

     So: 400 body, 500 for anything that needs to read as slightly more
     important (labels, badges, inline emphasis), 600 for the places that
     should stand apart from their own content — titles AND the button/CTA
     label. Titles moved back to 600 on 29 Sep 2026, reversing the paragraph
     above for titles specifically: 500 flattened a card's heading against its
     own body text, with no step left between them. See the role aliases below;
     they are what changed, not the primitives. */
  --tt-weight-regular:  400;
  --tt-weight-medium:   500;
  --tt-weight-semibold: 600;

  /* Font family — THE BRAND IS TWO FAMILIES: Figtree and Noto Serif. Both are
     loaded by next/font (src/styles/fonts.ts), which supplies --tt-font-ui and
     --tt-font-display; neither is declared here, because a token file cannot
     name a hashed webfont.

     --tt-font-mono is different, and it is declared here BECAUSE it is no longer
     a webfont. JetBrains Mono was removed entirely 29 Sep 2026 — nothing third
     is downloaded or shipped. But 41 declarations across the marketing CSS say
     `font-family: var(--tt-font-mono);` with NO fallback, and an undefined
     custom property makes the whole declaration invalid, so deleting the name
     would have silently dropped fixed-width from every code mock and terminal
     on the landing page. It now resolves to the reader's own operating-system
     monospace: no request, no licence, not a brand family.

     Use it ONLY where characters must be fixed-width to stay aligned — the
     simulated code panels and terminals. Never in product UI. Never for
     numbers: those are Figtree with `font-variant-numeric: tabular-nums`. */
  --tt-font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;

  /* Space — 4pt base */
  --tt-space-1: 4px;   --tt-space-2: 8px;   --tt-space-3: 12px;
  --tt-space-4: 16px;  --tt-space-5: 20px;  --tt-space-6: 24px;
  --tt-space-8: 32px;  --tt-space-10: 40px; --tt-space-12: 48px;
  --tt-space-16: 64px; --tt-space-20: 80px; --tt-space-24: 96px;

  /* Pill padding — added 10 Sep 2026, same reason the weight scale was.
     Padding was never tokenised either, so badges and tags each invented their
     own: the system's own .c-badge sat at 9px (not even a step on the 4pt
     scale), and screens built from it drifted to 8 / 10 / 11 / 13.

     A pill is radius-999, and a rounded end optically eats roughly half a stem
     of space at each edge — so a pill needs MORE horizontal padding than the
     equivalent rectangular control, not the same. Hence 3x the vertical here,
     where a rounded-rect button is comfortable at 2x. 12px is the floor for
     anything carrying more than two words. */
  --tt-pad-pill-sm: 2px 8px;    /* counts, status dots, inline flags */
  --tt-pad-pill-md: 4px 12px;   /* badges, tags, eyebrow labels — the default */
  --tt-pad-pill-lg: 6px 16px;   /* filter chips, stat pills, anything clickable */

  /* Shape — radii step with the element. A chip inside a card takes the radius
     one step below the card's: never the same, never larger. */
  /* REVERSED 29 Sep 2026 — the 4px step is back, and the scale starts there.
     It was retired 9 Sep 2026 in favour of "8px is the floor across the system",
     which left `xs` as a dead alias of `sm` and the scale effectively 8/12/16.
     The cost showed up on the smallest controls: an 18px checkbox at 8px radius
     is rounding 44% of its own half-width, which reads as a lozenge rather than
     a square with softened corners. A radius has to step with the element, and
     with no step below 8 there was nothing for an 18px control to take.
     The scale is 4 / 8 / 12 / 16 / 24 / pill (24 added 30 Sep 2026, see below),
     and "a chip takes one step below its card" starts at 4 inside 8 again. */
  --tt-radius-xs: 4px;    /* checkboxes, radios, and anything at or under ~20px */
  --tt-radius-sm: 8px;    /* buttons, small cards, form fields */
  --tt-radius-md: 12px;   /* panels, Studio source cards */
  --tt-radius-lg: 16px;   /* modals, the session frame */
  /* Added 30 Sep 2026, one step above `lg` — the onboarding flow's full-page
     setup card, the sign-up modal, and the empty-state "gate" card (Home,
     Analytics, Role play before a twin exists) all measured at 24px, not 16.
     Reserved for the LARGEST elevated surfaces only — a full-screen flow's own
     card, an auth modal, a gated empty state. `lg` stays correct for an
     ordinary modal or the session frame; this is one tier above that, not a
     replacement for it. */
  --tt-radius-xl: 24px;   /* full-page setup cards, auth modals, empty-state gates */
  --tt-radius-pill: 999px;

  /* Border widths. Forms take the hairline: on a 2x display 0.5px renders as a
     true one-device-pixel rule, which is the point. On a 1x display browsers
     round it up to 1px rather than dropping it, so the boundary never vanishes.
     Thinness does not lower the contrast bar — --tt-border-interactive still
     clears the 3:1 that WCAG 1.4.11 requires of an interactive boundary. */
  --tt-border-form: 0.5px;      /* inputs, selects, textareas, checkboxes */
  --tt-border-thin: 1px;        /* cards, panels, dividers */
  --tt-border-focus: 2px;       /* focus ring, at 2px offset */

  /* Layout — page-level max-widths. These are `max-width` values, not breakpoints:
     a container caps how wide content grows, a breakpoint decides when the layout
     changes shape. Most pages want `lg`; long-form reading wants `prose`. */
  --tt-container-prose: 65ch;   /* running text — the reading-measure cap */
  --tt-container-sm: 640px;     /* auth, single-column forms, focused tasks */
  --tt-container-md: 900px;     /* articles, settings, the Studio's detail panes */
  --tt-container-lg: 1200px;    /* default app content width */
  --tt-container-xl: 1440px;    /* wide marketing sections */

  /* Breakpoints. Declared here for reference only — CSS cannot read a custom
     property inside a media query, so these values are also set in globals.css
     under Tailwind's @theme, which is what actually generates sm:/md:/lg: variants.
     Values match Tailwind's defaults deliberately: there is no reason to invent our
     own, and diverging would surprise anyone who has used Tailwind before.
       sm 640px · md 768px · lg 1024px · xl 1280px · 2xl 1536px            */

  /* Layering. A single ordered scale, so no component ever picks a number.
     Two deliberate choices worth knowing:
       - toast sits ABOVE modal, because a toast confirming a modal's action has to
         be visible while the modal is still open.
       - tooltip is highest; it is never blocking, so it can never trap anything.
     Native <dialog> opened with showModal() renders in the browser's top layer and
     ignores z-index entirely — do not try to stack against it. */
  --tt-z-base: 0;
  --tt-z-raised: 10;      /* cards lifted on hover, sticky section headers */
  --tt-z-sticky: 20;      /* sticky table headers, the app sidebar */
  --tt-z-dropdown: 30;    /* menus, popovers, select panels */
  --tt-z-overlay: 40;     /* scrims and backdrops */
  --tt-z-modal: 50;       /* dialogs, drawers */
  --tt-z-toast: 60;       /* above modal, on purpose */
  --tt-z-tooltip: 70;     /* always last */

  /* Icon sizes. Four steps, and icons take one of them — nothing in between.
     Before this scale existed the library had shipped twelve different sizes. */
  --tt-icon-xs: 12px;   /* inside chips and 11-12px labels */
  --tt-icon-sm: 16px;   /* DEFAULT — buttons, inputs, menu items, close controls */
  --tt-icon-md: 20px;   /* alerts, section headers */
  --tt-icon-lg: 24px;   /* empty states, feature marks */

  /* Minimum hit area for anything clickable, per WCAG 2.2 SC 2.5.8. An icon may be
     16px, but the control around it is never smaller than this. Where a control is
     wrapped in a <label>, the label counts toward the target. */
  --tt-target-min: 24px;

  /* Motion — PROVISIONAL, held at "purposeful" pending review.
     Licensed cases only: thinking, streaming, turn handoff, score reveal,
     ingest progress. */
  --tt-duration-instant: 80ms;
  --tt-duration-quick: 140ms;
  --tt-duration-base: 200ms;
  --tt-duration-slow: 320ms;
  --tt-duration-deliberate: 480ms;
  --tt-ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --tt-ease-enter: cubic-bezier(0, 0, 0, 1);
  --tt-ease-exit: cubic-bezier(0.3, 0, 1, 1);
}

/* ---------------------------------------------------- 2. SEMANTIC — LIGHT (base)
   The bare :root block is the COMPLETE light palette. Every token that exists in
   dark must exist here, or the un-stamped system-default state renders one
   theme's text on the other theme's ground. */
:root {
  --tt-canvas:         #FEFEFF;
  --tt-surface:        #FFFFFF;
  --tt-surface-raised: #FFFFFF;
  --tt-surface-sunken: #F7F7F7;

  --tt-text-primary:   #1C1B1B;  /* 16.45:1 on canvas — AAA */
  --tt-text-secondary: #4A4A4A;  /*  9.09:1 — AAA */
  --tt-text-tertiary:  #656565;  /*  5.83:1 — AA  */
  --tt-text-muted:     #828282;  /*  3.99:1 — FAILS AA for normal text. Legal uses:
                                       placeholder text and disabled controls only,
                                       both exempt from WCAG 1.4.3. Anything a user
                                       is meant to READ takes --tt-text-tertiary. */

  --tt-primary:        #FF5A00;
  --tt-primary-hover:  #E04D00;
  --tt-primary-ink:    #B83E00;  /* brand as TEXT on canvas — 5.45:1 */
  --tt-primary-subtle: #FFF4EC;
  --tt-on-primary:     #FFFFFF;  /* DELIBERATE BRAND DECISION, 9 Sep 2026.
                                    White on #FF5A00 is 3.13:1 and FAILS WCAG AA for normal
                                    text. It passes AA only at large sizes (>=18.66px bold
                                    or >=24px). Near-black (#0A0A0A) would be 6.33:1.
                                    Signed off by Bhuvan; do not silently 'fix' this. */

  /* The neutral CTA. Renders BLACK in light theme and WHITE in dark theme — one
     variant, flipped by the token layer, so it is always the opposite polarity of
     its canvas and can never be shipped invisible. 19.78:1 in both themes (AAA).
     Used for the ordinary, always-present actions that would fight each other if
     they were all brand orange. See Button variant="strong". */
  --tt-cta-strong:       #2B2B2B;   /* neutral-1000 */
  --tt-cta-strong-hover: #4A4A4A;   /* neutral-900 — lifts slightly on hover */
  --tt-on-cta-strong:    #FFFFFF;

  /* Soft fill — the grey-button surface. NOT --tt-surface-sunken: in dark theme
     sunken is *darker* than the card it sits on, so a button using it would read as
     a hole rather than a control. This steps away from the surface in whichever
     direction the theme requires. */
  --tt-fill-soft:       #F0F0F0;   /* neutral-100 */
  --tt-fill-soft-hover: #E9E9E9;   /* neutral-200 */

  --tt-border:             #E9E9E9;  /* decorative only, no contrast requirement */
  /* Card gets its own, lighter border — added 25 Sep 2026. --tt-border is the
     general divider (table rows, card headers/footers, dropdowns); a card's own
     outer edge sits next to open canvas on every side and reads as heavier than
     an internal divider at the same value. One step lighter on the neutral ramp
     (neutral-100, not neutral-200). */
  --tt-card-border:        #F0F0F0;
  --tt-border-interactive: #828282;  /* 3.99:1 light / 4.50:1 dark — one value, both themes */
  --tt-border-field:       #C4C4C4;  /* neutral-300. DELIBERATE DECISION, 9 Sep 2026.
                                        Form fields and the secondary button, at rest.
                                        1.79:1 on surface — FAILS the 3:1 that WCAG 1.4.11
                                        asks of an interactive boundary. #828282 (3.84:1) is
                                        the only step in this ramp that passes, so "lighter"
                                        and "compliant" cannot both hold. Mitigated by firming
                                        the border to --tt-border-interactive on hover/focus.
                                        Signed off by Bhuvan; do not silently revert. */
  --tt-focus:              #FF5A00;  /* 3.03:1 light — clears 3:1 only just, hence 2px + 2px offset */

  --tt-danger:         #CE2C33;
  --tt-danger-subtle:  #FFF1F1;
  --tt-live:           #CE2C33;  /* recording / live session ONLY — never --tt-primary */
  --tt-success:        #1A6739;  /* green-700, not -600: -600 was 4.40:1 on success-subtle */
  --tt-success-subtle: #EDF9F1;
  --tt-info:           #2A63C4;
  --tt-info-subtle:    #EEF4FF;
  --tt-caution:        #7F5F00;
  --tt-caution-subtle: #FDF6E3;

  /* NIGHT SURFACES — adopted from the marketing page 10 Sep 2026.
     An editorial dark section inside an otherwise light page. This is not dark
     THEME: it is a band of night that stays night in both themes, which is why
     these are declared once and never redefined below. The product had no such
     concept; the landing page had a good one, so it was taken rather than
     reinvented.

     Values are the landing's (--l-night, --l-night-deep, --l-hero-panel), with
     one correction: its tertiary was #7A7E86, which measures 4.41:1 on --tt-night
     and fails AA by a hair. Rather than invent a value, this uses neutral-500,
     already in the ramp, at 4.67:1. */
  --tt-night:        #111215;   /* the editorial dark section — darkened 11 Sep 2026 per Bhuvan */
  --tt-night-deep:   #0F0F0F;   /* footer, one step deeper */
  --tt-night-panel:  #241C1B;   /* warm near-black behind hero artwork */
  --tt-on-night:     #FFFFFF;   /* 17.96:1 */
  --tt-on-night-2:   #B6B6B6;   /*  8.86:1 — secondary copy */
  --tt-on-night-3:   #828282;   /*  4.67:1 — was #7A7E86 at 4.41:1, FIXED */
  --tt-line-night:   #373737;   /* 1.51:1, decorative hairline — same accepted
                                   basis as the status borders; not a boundary */

  /* Availability — the MARKETING green. Split from --tt-live 10 Sep 2026 because
     they are opposite messages wearing the same word: --tt-live is red because
     recording is a warning (you are being captured); --tt-available is green
     because it is reassurance (this trainer can be reached now). Never
     interchange them. The landing's #22C55E is 2.28:1 on white and can only ever
     be a dot; this value carries a label. */
  --tt-available: #23834A;      /* green-600, 4.75:1 on white */

  /* Status BORDERS — added 10 Sep 2026. Alerts and badges used to draw their
     edge in the full-strength status colour, which measured 4.7-6.4:1 against
     their own fill: text-level contrast spent on a decorative line, which is
     exactly why they read as heavy. These sit at the 300 step, ~1.5-2.1:1 on
     the fill — present, but no longer shouting.

     Deliberately below the 3:1 of SC 1.4.11, and that is correct here: an alert
     is not a control, and its severity is carried by the icon, the heading and
     the fill, never by the border alone (SC 1.4.1). Do not "fix" these back. */
  --tt-primary-border: #FFA36B;
  --tt-success-border: #7FD1A0;
  /* MARKETING BADGE BORDER — the lone survivor of the --tt-*-badge-border family.
     The other four were culled 25 Sep 2026 when Badge/SourceChip dropped their
     borders. That cull checked the React components and NOT the marketing CSS,
     where nine call sites across TrainerTwin_home{,_v1,_v3}/home.css still point
     here — one of them inside a `border:` shorthand, which an undefined var makes
     invalid outright, removing the border entirely. Restored 29 Sep 2026 at its
     original value; it is a lighter step than --tt-primary-border on purpose
     (55% toward the badge's own subtle fill), so a repeated badge edge stays
     barely-there. Marketing only — product badges have no border at all. */
  --tt-primary-badge-border: #FFD0B2;
  --tt-info-border:    #8FB6F5;
  --tt-caution-border: #E9C86A;
  --tt-danger-border:  #F58F93;

  /* BADGE borders — added 11 Sep 2026, REMOVED 25 Sep 2026. A filled badge lost
     its border entirely (the fill alone reads as a shape; the two together were
     doubling up), so this whole family went from "the alert border, but even
     lighter" to unused in one step. Left as a note rather than silently
     deleted: if a filled badge ever needs a border again, this is where the
     lighter-than-alert step used to live, not --tt-*-border. */

  /* Weight by role. These are what components should reference — the role names
     are the rule, so "titles are medium, buttons stay semibold" is one line to
     change rather than a grep. It wasn't followed until 25 Sep 2026: every
     product component referenced Tailwind's own font-semibold directly instead
     of these, so when the weight needed to change it meant editing thirteen
     files, not one. That is fixed now — see src/components/*. */
  --tt-weight-body:  var(--tt-weight-regular);   /* body, help text, table cells */
  /* REVERSED 29 Sep 2026 — titles are semibold again.
     They were moved 600 -> 500 on 25 Sep ("too much font weight for titles and
     bold texts"). That pass overshot in the other direction: with titles, labels
     and inline emphasis all sitting at 500, a table or card had no weight
     contrast left between its heading and its own content, and the result read
     flat. 600 is back on TITLES ONLY — labels stay 500 and `b`/`strong` stay
     500, so the original complaint about heavy bold text is not re-created.
     The scale still has three steps; what changed is which step titles take. */
  --tt-weight-title: var(--tt-weight-semibold);  /* headings, card/modal/page titles, row names */
  --tt-weight-label: var(--tt-weight-medium);    /* field labels, table headers, badges */
  --tt-weight-cta:   var(--tt-weight-semibold);  /* button labels only — stays heavier
                                                     on purpose; a button is the one
                                                     thing on screen meant to be pressed */

  /* Light elevates with shadow. */
  /* Each step roughly doubles the ambient layer's offset, blur and alpha, so the
     jump between two levels is actually perceptible. The first version of this
     scale moved 5% -> 7% alpha between 1 and 2, which is a step on paper and
     invisible on a cream canvas — a card lifting on hover did nothing at all. */
  --tt-elevation-1: 0 1px 2px rgba(30, 28, 25, .06);
  --tt-elevation-2: 0 2px 4px rgb(30 28 25 / 0.07), 0 8px 20px rgb(30 28 25 / 0.11);
  --tt-elevation-3: 0 4px 8px rgb(30 28 25 / 0.09), 0 16px 40px rgb(30 28 25 / 0.16);

  /* Card's own resting shadow, lighter than elevation-1 — added 25 Sep 2026,
     same reasoning as the border above: a card sits on open canvas, not inside
     another surface, so it doesn't need as much lift to read as an object.
     Raised/hover states still escalate through elevation-2/3 unchanged. */
  --tt-card-shadow: 0 1px 2px rgba(30, 28, 25, .04);

  /* Secondary/outline button shadow — added 30 Sep 2026, from the onboarding
     flow's "Connect Google Drive"/"Connect Notion" buttons (confirmed on
     three separate buttons there, not a one-off). `strong` and `primary`
     read as buttons through their fill; `secondary` has no fill to speak of
     (`--tt-fill-soft` is a near-invisible step off the surface), so it gets a
     touch of lift instead — proportionate to a small pill, not a full
     elevation step.

     CORRECTED 2 Oct 2026: the original light-theme value above was a derived
     guess, never measured — that prototype session was dark-only, and the
     comment said so at the time. This pass caught the prototype running in
     light theme too, and measured its actual secondary-button shadow on four
     separate instances across three screens ("Connect", "Sign up" x2, "Sign
     up with Google"): a near-black three-layer recipe, not this file's usual
     warm-dark single-layer idiom. The three layers do three different jobs —
     a 1px near-opaque hairline that reads as a crisp edge at any zoom, a 1px
     contact shadow, and a soft 4px spread for lift — which is why one flatter
     layer never quite matched. Dark-theme's value (below, in both dark
     blocks) WAS measured live at the time and is unchanged here; it already
     matched exactly. */
  --tt-shadow-secondary: 0 0 1px rgba(0, 0, 0, .4), 0 1px 1px rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .04);
}

/* The two dark blocks below are intentionally duplicated rather than combined in a
   selector list: `:root:not([data-theme="light"])` must stay inside the media query
   (system dark), while `:root[data-theme="dark"]` must stay outside it (explicit
   choice beating a light OS). Grouping them would break one of the two cases. */

/* System dark — guarded so an explicit light choice beats a dark OS. */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --tt-canvas:         #141414;
    --tt-surface:        #1C1B1B;
    --tt-surface-raised: #2B2B2B;
    --tt-surface-sunken: #0A0A0A;

    --tt-text-primary:   #FEFEFF;  /* 17.97:1 — AAA */
    --tt-text-secondary: #C4C4C4;  /* 10.39:1 — AAA */
    --tt-text-tertiary:  #A3A3A3;  /*  6.93:1 — AA  */
    --tt-text-muted:     #828282;  /*  4.50:1 — AA  */

    --tt-primary:        #FF5A00;
    --tt-primary-hover:  #FF7E33;
    --tt-primary-ink:    #FF7E33;
    --tt-primary-subtle: #3A1300;
    --tt-on-primary:     #FFFFFF;  /* identical to light — the button is theme-invariant */

    --tt-cta-strong:       #FFFFFF;   /* neutral-0 — the mirror of light's near-black */
    --tt-cta-strong-hover: #F0F0F0;   /* neutral-100 — dims slightly on hover */
    --tt-on-cta-strong:    #0A0A0A;

    --tt-fill-soft:       #2B2B2B;   /* neutral-800 — lighter than the surface */
    --tt-fill-soft-hover: #4A4A4A;   /* neutral-700 */

  --tt-border:             #2B2B2B;
  --tt-card-border:        #242323;  /* blend toward the dark surface, half-way to -900 */
    --tt-border-interactive: #828282;
    --tt-border-field:       #4A4A4A;  /* neutral-700 — mirrors the light relationship */
    --tt-focus:              #FF5A00;

    --tt-danger:         #F58F93;
    --tt-danger-subtle:  #6B1216;
    --tt-live:           #E5484D;
    --tt-success:        #7FD1A0;
    --tt-success-subtle: #0E3E22;
    --tt-info:           #8FB6F5;
    --tt-info-subtle:    #12305F;
    --tt-caution:        #E9C86A;
    --tt-caution-subtle: #3A2A00;  /* gold-900: gold-700 was 3.65:1 under caution text */

  /* Status borders, dark. The 700 step — one rung above the -900 fill, so the
     edge is felt without competing with the -300 text sitting on it. */
  --tt-primary-border: #B83E00;
  --tt-success-border: #1A6739;
  /* Marketing badge border, dark — see the light block above. */
  --tt-primary-badge-border: #732600;
  --tt-info-border:    #1F4C9B;
  --tt-caution-border: #7F5F00;
  --tt-danger-border:  #A81F26;

  --tt-available: #7FD1A0;      /* green-300, 10.12:1 on the dark canvas */

    /* Dark elevates with LIGHTNESS, not shadow. Shadows on a near-black canvas
       are invisible; a hairline plus a step up the neutral ramp is the only
       signal that reads. */
    --tt-elevation-1: 0 0 0 1px rgb(253 251 247 / 0.05);
    --tt-card-shadow: 0 0 0 1px rgb(253 251 247 / 0.035);
    --tt-elevation-2: 0 0 0 1px rgb(253 251 247 / 0.07), 0 4px 16px rgb(0 0 0 / 0.5);
    --tt-elevation-3: 0 0 0 1px rgb(253 251 247 / 0.09), 0 12px 32px rgb(0 0 0 / 0.6);
    /* Measured directly off the onboarding prototype's secondary buttons. */
    --tt-shadow-secondary: 0 0 1px rgb(253 251 247 / 0.45), 0 1px 2px rgb(0 0 0 / 0.35);
  }
}

/* Explicit dark — beats a light OS. */
:root[data-theme="dark"] {
  --tt-canvas:         #141414;
  --tt-surface:        #1C1B1B;
  --tt-surface-raised: #2B2B2B;
  --tt-surface-sunken: #0A0A0A;

  --tt-text-primary:   #FEFEFF;
  --tt-text-secondary: #C4C4C4;
  --tt-text-tertiary:  #A3A3A3;
  --tt-text-muted:     #828282;

  --tt-primary:        #FF5A00;
  --tt-primary-hover:  #FF7E33;
  --tt-primary-ink:    #FF7E33;
  --tt-primary-subtle: #3A1300;
  --tt-on-primary:     #FFFFFF;

  --tt-cta-strong:       #FFFFFF;   /* neutral-0 — the mirror of light's near-black */
  --tt-cta-strong-hover: #F0F0F0;   /* neutral-100 — dims slightly on hover */
  --tt-on-cta-strong:    #0A0A0A;

  /* Found missing 30 Sep 2026 while checking a live Storybook against an
     onboarding prototype's secondary-button colour. This pair existed in the
     SYSTEM-dark block above but was never copied here — so an explicit
     data-theme="dark" (Storybook's toolbar, or any visitor without a dark OS)
     fell through to the light value, #F0F0F0, and `secondary` rendered as a
     light-grey patch on a near-black canvas. The two dark blocks are supposed
     to be identical (see the note at the top of this file); this is exactly
     the silent-drift failure that note warns about. */
  --tt-fill-soft:       #2B2B2B;   /* neutral-800 — lighter than the surface */
  --tt-fill-soft-hover: #4A4A4A;   /* neutral-700 */

  --tt-border:             #2B2B2B;
  --tt-card-border:        #242323;  /* blend toward the dark surface, half-way to -900 */
  --tt-border-interactive: #828282;
  --tt-border-field:       #4A4A4A;  /* neutral-700 — mirrors the light relationship */
  --tt-focus:              #FF5A00;

  --tt-danger:         #F58F93;
  --tt-danger-subtle:  #6B1216;
  --tt-live:           #E5484D;
  --tt-success:        #7FD1A0;
  --tt-success-subtle: #0E3E22;
  --tt-info:           #8FB6F5;
  --tt-info-subtle:    #12305F;
  --tt-caution:        #E9C86A;
  --tt-caution-subtle: #3A2A00;  /* gold-900: gold-700 was 3.65:1 under caution text */

  /* Status borders, dark. The 700 step — one rung above the -900 fill, so the
     edge is felt without competing with the -300 text sitting on it. */
  --tt-primary-border: #B83E00;
  --tt-success-border: #1A6739;
  /* Marketing badge border, dark — see the light block above. */
  --tt-primary-badge-border: #732600;
  --tt-info-border:    #1F4C9B;
  --tt-caution-border: #7F5F00;
  --tt-danger-border:  #A81F26;

  --tt-available: #7FD1A0;      /* green-300, 10.12:1 on the dark canvas */

  --tt-elevation-1: 0 0 0 1px rgb(253 251 247 / 0.05);
  --tt-card-shadow: 0 0 0 1px rgb(253 251 247 / 0.035);
  --tt-elevation-2: 0 0 0 1px rgb(253 251 247 / 0.07), 0 4px 16px rgb(0 0 0 / 0.5);
  --tt-elevation-3: 0 0 0 1px rgb(253 251 247 / 0.09), 0 12px 32px rgb(0 0 0 / 0.6);
  --tt-shadow-secondary: 0 0 1px rgb(253 251 247 / 0.45), 0 1px 2px rgb(0 0 0 / 0.35);
}
```

---

## 4b. Base stylesheet — paste this too

The token block above defines the values. This block *applies* them. Without it a
page has the right palette and still comes out wrong — this is the file that stops
the two most common failures (stray 700s, and text that ignores the type stack).

```css
*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--tt-canvas);
  color: var(--tt-text-primary);
  font-family: var(--tt-font-ui), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 15px;
  line-height: 23px;
  font-weight: var(--tt-weight-regular);
  -webkit-font-smoothing: antialiased;
}

/* REQUIRED — not optional, not a nicety.
   Every user-agent stylesheet sets b/strong to `bold` = 700, which is outside this
   system's scale. Emphasis in *content* therefore bypasses every correctly-specified
   component and renders 700 regardless. Omit this line and the page will look heavy
   in exactly the places you did not style. Medium, not semibold, as of 25 Sep 2026 —
   inline emphasis only needs to read as slightly more important than the words
   around it, not as loud as a button. */
b, strong { font-weight: var(--tt-weight-medium); }

/* Same UA-default bug, different element: th is bold by default too. Every table's
   own header styling overrides this already, so it only ever shows on an empty
   header cell (a select-all checkbox column, say) with no weight class of its own. */
th { font-weight: var(--tt-weight-medium); }

/* Headings are medium, never semibold — semibold is reserved for buttons. Serif
   only above 20px, and marketing-only even then (see §1, §3). */
h1, h2, h3, h4, h5, h6 { font-weight: var(--tt-weight-medium); margin: 0; }
/* Figtree by default — this base sheet is pasted into product screens most
   often, and product never uses the serif face. A marketing page that wants
   Noto Serif on its own h1/h2 applies it explicitly (see §3), the way the
   landing site's own stylesheets already do; it never inherits it from here. */
h1, h2 { font-family: var(--tt-font-ui), -apple-system, sans-serif; letter-spacing: -.015em; }

/* One focus treatment everywhere. Brand orange clears 3:1 in both themes, but only
   just in light — so 2px ring at 2px offset, never 1px flush. */
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: var(--tt-border-focus) solid var(--tt-focus);
  outline-offset: 2px;
  border-radius: var(--tt-radius-xs);
}

/* Anything counted takes Figtree + tabular figures — 29 Sep 2026, was mono.
   `tabular-nums` is load-bearing here, not a nicety: Figtree's default figures
   are proportional and measured 99px vs 154px for "111111" vs "000000" at 40px.
   Drop the property and every counter jitters as its digits change. */
.tabular { font-family: var(--tt-font-ui), sans-serif; font-variant-numeric: tabular-nums; }

img { max-width: 100%; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

**Self-check before you ship a screen.** Every one of these has been a real bug:

```js
// paste in the console — all five must come back clean
[...document.querySelectorAll('*')]
  .filter(e => !['400','500','600'].includes(getComputedStyle(e).fontWeight) && e.textContent.trim())
  .map(e => e.tagName + '.' + e.className);            // 1. must be []

[...document.querySelectorAll('*')]
  .filter(e => /rgb/.test(e.style.cssText) || /#[0-9a-f]{3,6}/i.test(e.style.cssText));
                                                        // 2. must be [] — no raw hex
getComputedStyle(document.body).fontFamily;             // 3. must start with Figtree
document.documentElement.scrollWidth <= window.innerWidth; // 4. must be true
[...document.querySelectorAll('button,a')]
  .filter(e => e.getBoundingClientRect().height < 24);  // 5. must be [] — SC 2.5.8
```

---

## 5. Colour usage

### Status borders

| Token | Light | Dark |
|---|---|---|
| `--tt-primary-border` | `#FFA36B` | `#B83E00` |
| `--tt-success-border` | `#7FD1A0` | `#1A6739` |
| `--tt-info-border` | `#8FB6F5` | `#1F4C9B` |
| `--tt-caution-border` | `#E9C86A` | `#7F5F00` |
| `--tt-danger-border` | `#F58F93` | `#A81F26` |

Use these for **alert and badge edges**. Never use `--tt-success` / `--tt-danger` /
`--tt-info` / `--tt-caution` as a border colour — those are the *text* values, and at
4.7–6.4:1 against their own fill they make every alert shout.

Exception: a badge with a **transparent** background (`--live`) keeps the full-strength
border, because there the border is the only thing defining the pill.


| Token | Use for |
|---|---|
| `--tt-canvas` | The page itself |
| `--tt-surface` | Cards, panels |
| `--tt-surface-raised` | Menus, modals, toasts, popovers |
| `--tt-surface-sunken` | Wells, code blocks, inactive areas |
| `--tt-text-primary` | Headings, body |
| `--tt-text-secondary` | Supporting copy |
| `--tt-text-tertiary` | Labels, captions, table headers, hints |
| `--tt-text-muted` | Placeholders + disabled ONLY |
| `--tt-primary` | Primary buttons — one per view or dialog (§2 rule 2), focus rings, and the active nav item's dot marker (its label takes `--tt-primary-ink` instead — see §7). **Not** selection, and not the active nav item's own fill — that stays a lifted neutral pill. Corrected 30 Sep 2026: an earlier pass here overcorrected §7's older, Figma-measured active-nav spec into "neutral everywhere," which was never actually true of the icon or label. |
| `--tt-primary-ink` | Brand as *text* or icon on canvas |
| `--tt-on-primary` | Text on a primary button (white) |
| `--tt-border` | Decorative separation |
| `--tt-border-interactive` | Inputs, toggles — anything operable |
| `--tt-danger` | Errors, destructive |
| `--tt-live` | Recording / live session ONLY |
| `--tt-success` `--tt-info` `--tt-caution` | Status |

### Verified contrast

| Pair | Light | Dark |
|---|---|---|
| text-primary on canvas | 17.05:1 | 18.28:1 |
| text-secondary on canvas | 8.79:1 | 10.56:1 |
| text-tertiary on canvas | 5.78:1 | 7.30:1 |
| **on-primary (white) on primary** | **3.13:1 — large text only** | **3.13:1 — large text only** |
| on-cta-strong on cta-strong | 14.16:1 / 19.80:1 | 14.16:1 / 19.80:1 |
| primary-ink on canvas | 5.59:1 | 7.27:1 |
| border-interactive (hover/focus) | 3.81:1 | 4.79:1 |
| **border-field (at rest)** | **1.74:1 — accepted** | **1.94:1 — accepted** |

---

## 6. Space, shape, elevation, motion

### Pill padding

| Token | Value | Use for |
|---|---|---|
| `--tt-pad-pill-sm` | `2px 8px` | Counts, status dots, inline flags |
| `--tt-pad-pill-md` | `4px 12px` | Badges, tags, eyebrow labels — **the default** |
| `--tt-pad-pill-lg` | `6px 16px` | Filter chips, stat pills, anything clickable |

Horizontal is 3x vertical, not 2x. A `radius-pill` end optically eats about half a
stem of space at each edge, so a pill needs more side padding than the rectangular
control it sits next to. **12px is the floor** for any pill carrying more than two words.

Also set `line-height` explicitly on a pill. Left to inherit, body's 23px makes an
11px badge stand 35px tall — the padding looks wrong when the line box is the
real problem.


**Space** — 4pt base, `--tt-space-1` … `--tt-space-24` (4, 8, 12, 16, 20, 24, 32, 40,
48, 64, 80, 96px). Lay out with flex/grid + `gap`, not per-element margins.

**Radius** — the scale **starts at 4px**: 4 (`xs`) / 8 (`sm`) / 12 (panels) / 16
(modals) / pill. Radii step *with* the element — a chip inside a card is 8 inside
12, never the same, never larger — and **4 is for controls at or under ~20px**:
checkboxes, radios, the tiny inline sort button. Anything taller takes `sm` or above.

> The 4px step was retired on 9 Sep 2026 in favour of "8px is the floor", which
> left `xs` a dead alias of `sm`. **Reversed 29 Sep 2026.** An 18px checkbox at 8px
> is rounding 44% of its own half-width and reads as a lozenge, and with no step
> below 8 there was nothing smaller for it to take.

**Border width** — `--tt-border-form` **0.5px** (inputs, selects, textareas, checkboxes,
secondary button) · `--tt-border-thin` 1px (cards, panels, dividers) ·
`--tt-border-focus` 2px. On a 2× display 0.5px is a true one-device-pixel rule; on 1×
browsers round up rather than dropping it, so the boundary never vanishes.

**Border colour** — `--tt-border-field` at rest (neutral 300 light / neutral 700 dark),
`--tt-border-interactive` on hover and focus, `--tt-border` for decoration.

**Elevation** — each step roughly doubles the ambient layer's offset, blur and alpha,
so the jump between two levels is actually perceptible. The first version of this
scale moved 5% → 7% alpha between 1 and 2, which is a step on paper and invisible on
a cream canvas — a card lifting on hover did nothing at all.

Light mode elevates with **shadow**; dark mode elevates with **lightness** (hairline plus a step up the neutral ramp). Shadows are invisible on a
near-black canvas.

**Motion** — purposeful only. `quick` 140ms · `base` 200ms · `slow` 320ms with
`--tt-ease-standard`. Animate only: thinking states, streaming text, turn handoff,
score reveal, ingest progress. Always honour `prefers-reduced-motion`.

**Focus** — one treatment everywhere:

```css
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: 2px solid var(--tt-focus);
  outline-offset: 2px;
}
```

---

## 7. Layout & structure

Everything in §8 goes *inside* a screen. This is what the screen is made of.

**App shell** — sidebar on `--tt-surface-sunken` (`#F7F7F7`, straight from the Figma),
top bar and content on `--tt-canvas`. The fill change *is* the divider between them —
there is no rule, because the Figma has no border pixel there.

**Sidebar width is 214px — changed 4 Nov 2026, was 248px (and 148px before 30 Sep 2026).**
It went 248 → 198 → 214 while the V3 prototype was polished; 214 is what its labels,
icons and padding settled at, with 12px padding (`--tt-space-3`) on both sides and an
8px gap (`--tt-space-2`) between nav items. Collapsed stays 72px; the section label is
“ROLEPLAY”, one word. This document's own small illustrative shell mockup (§8) still
uses 148px — a compact, proportional diagram, not a claim about real pixels.

**The active nav item is a white pill on `--tt-surface` with `--tt-elevation-1`**,
lifted out of the sunken rail. It is the same figure/ground move the segmented
control's selected segment makes, and it is measured: the Figma's pill is `#FEFEFF`
with a `#ECECEC` shadow edge beneath it. Its icon takes `--tt-primary`; its label
takes `--tt-primary-ink`, because the Figma's `#FF5A00` label is 3.03:1 on white
while a graphic only needs 3:1 and clears at 3.13:1. The page header carries
**one** action; if a screen needs two, the second is `secondary`. Below `md` the
sidebar becomes a drawer — a 214px rail on a 375px phone leaves little for content.

**Two content-alignment patterns, not one — confirmed live 30 Sep 2026.** A
focused-task screen (onboarding, auth, an empty-state gate) **centers** its
content in a fixed-width column — 640px for the onboarding flow's own card,
420px for a smaller gate card, both `margin: 0 auto` inside the content area,
never flush to either edge. A dashboard/app-shell screen (Home, Analytics, Role
play once populated) goes **full-bleed** instead: the page fills the whole
content area and gets breathing room from padding, not from a max-width —
measured as `16px 32px 32px` (top / sides / bottom), asymmetric on purpose, more
generous at the sides than the old uniform `--tt-space-4` this document
previously specced for `.c-shell-content` (now updated to match, §8). Pick the
pattern by what the screen IS, not by habit: a form or a gate is a single task
and reads better centered; a dashboard needs the width for a card grid or a
table and reads worse artificially narrowed. A page header's own action button
follows whichever pattern its screen uses — it never floats disconnected at the
physical viewport edge while the title sits in a centered or padded column; the
title and the action share the same container.

### Desktop and phone shell — V3 measured

From `ONBOARDING-V3-DESIGN-SPEC.md` §1, measured at 1440×900 and 390×844, 4 Nov 2026. **Verdict** is against this document: *Matches* = already specified; *New* = not in the system yet; *Differs* = a different number for something specified; *Conflicts* = contradicts a locked decision and is **not applied** (§13).

| Part | Measured value | Verdict | Note |
|---|---|---|---|
| Frame | `.shell` flex, full height, background `--tt-surface-sunken` | New | The grey the whole app sits on. |
| Left rail | 214px wide, 72px collapsed (logo button toggles, width animates 200ms); `--tt-surface-sunken`, no border; padding 16 12 12; flex column, gap 8 | Matches | 214 already recorded (D96). |
| Main | `--tt-canvas`, radius 16 on the left corners only (`16 0 0 16`), shadow `-4px 0 16px rgba(30,28,25,.06)`, scrolls on its own | New | The lifted white sheet next to the rail. |
| Library page | max-width 1024, centred, padding `20 64 32` → 896px content column | New | Third page pattern; does not replace the centred or full-bleed ones below. |
| Wide page / builder column | Wide page content 1098px (Persona library); create and builder pages 720px column | New | Picked per screen, like the 640 / 420 centred columns. |
| Home | Library page + 120px bottom padding + an orange radial glow (22% and 8% of primary) at the bottom | Conflicts | Decorative orange; see §10 (illustration and glow). |
| Page header `.lib-head` | flex, align-items centre, gap 16, 40px high (32px when it holds only small filters); title left, `.lib-tools` right (flex, gap 12) | Matches | Same per-page header pattern, now with numbers. |
| Page title | 16/22, 600, −.015em, with a 28×28 icon box (radius 8, secondary) | New | Off the type scale (§10). |
| Section heading | 18/24, 600, −.015em, margin-top 32 from the header | New | Off the type scale (§10). |
| Back-bar (detail and builder pages) | 64px tall, canvas, padding `0 32`; back link 14/20 with a 16px arrow, optional actions right | New |  |
| Nav item | 190×32, gap 8, padding `0 8`, radius 8, 14/20 regular secondary, 16px outline icon; hover = `--tt-fill-soft` + primary text | Matches |  |
| Active nav item | `--tt-surface` fill, label `--tt-primary-ink`, weight 500, icon `--tt-primary`, `--tt-elevation-1` | Matches | The recorded neutral pill + orange text exception. |
| Rail label | 11/16, 500, UPPERCASE, +.08em, tertiary, padding `0 8` | Differs | System overline is +.09em; .01em apart. |
| Nav count badge | 18px circle minimum, `--tt-primary` fill, white 11/18 500, padding `0 6` | Conflicts | D04: no orange count pill. See §10. |
| User card | 190×50, radius 12, white, 1px `--tt-card-border`, elevation-1, padding `8 12 8 8`, gap 12, name 14/20 | New | Photo 32px + name. |
| Rail order | Brand row (32px, theme switch right) · Inbox · TWIN: Twin agents, Twin sessions, Twin's brain · ROLEPLAY: Scenarios, Roleplay sessions, Persona · spacer · Settings · user card | New | Accounts live on Settings as cards, not in the rail. |
| Phone: top bar | ≤ 767px: rail hidden; `header.mobile-head` 56px, canvas, padding `0 16`; logo + wordmark left, layout / theme / account icon buttons right | New | Not in the system today. |
| Phone: tab bar | `nav.tabbar` 68px, white, padding 8, shadow `0 -4px 16px rgba(30,28,25,.06)`; Home · Roleplay · Twin Agents · Report · Settings; item 75×52, radius 12, 11/14 500; active = primary-ink text + orange icon | New |  |
| Phone: content | Page padding 16 (358px at 390); grids go one column; dialogs `100vw − 32` | New |  |
| Breakpoints | 1100, 960, 900, 860, 767/768, 720, 640. Treat **767** as the shell switch and **720** as the summary / tiles stack switch | Differs | System breakpoints are Tailwind's; these are the ones the build actually uses. |

**Nesting:** white card on the `#FEFEFF` canvas on the `#F7F7F7` frame. Grey is for *inset* things — boxes, tiles, headers; colour is for *status*; brand colour is for where you are. **Status → tone, used everywhere:** success = completed, active, high rating, paid · caution = low rating, ending soon, needs a look · danger = reported problem, failure · info = informational, free trial · neutral = everything else.

### Page recipe, states and screen index — V3

The recipe for a **new page that looks like V3**. Pixel captures live in `design-system/onboarding-v3-reference/` (44 desktop, 15 phone, `computed-styles-census.json`) — look values up there before inventing one. Where the recipe implies an orange primary or a 16px card, those are the V3 build's values and are Open (§13).

1. **Frame.** Inside the shell — rail 214 + canvas main. Column 896 (library page), 720 for a create flow, or full-bleed for canvases.
2. **Header.** Icon title left; filters or the primary action right. One primary button per view.
3. **Group into cards;** grey only for inset elements; 16px between cards.
4. **Numbers:** 32/600 tabular, label above (14 secondary + 14px icon), optional ↗ right.
5. **Lists are tables:** header `--tt-surface-sunken`, 12/20 500 UPPERCASE +.04em, padding `10 20`; rows 14/20, padding `14 20`, 1px `--tt-border` dividers, trailing ↗ 16px on clickable rows.
6. **Status = tinted pill.** Counts = a count badge. Ratings = stars + a label.
7. **Actions in a row = one small secondary button;** in dialogs = Cancel + the primary, disabled until valid.
8. **Popups = the shared dialog;** lists beside the page = the right-edge panel.
9. **Copy:** sentence case, “Roleplay”, verbs on buttons, full-sentence toasts.
10. **Phone:** top bar + bottom tab bar, one column, summary cards stack with the picture above the title, tiles 2×2, dialogs `100vw − 32`.
11. **States:** focus ring 2px at 2px offset; hover = soft grey; disabled = grey + muted text; show defaults.

**Screen index.**

| Screen | Route / state | Composition |
|---|---|---|
| Twin agents | list | Header: title + credit pill + Create new. Heading “Twin agents for specific use cases”. 3-up grid of agent cards (288×338; ⋮ menu: Edit, Calibrate, Assign, Share, History, Pause, Remove). |
| Home | first screen / phone tab | Greeting in the header. Usage card (18/26 title, 28/36 credits, 8px meter, three usage tiles). “Your action needed” list card. Orange glow behind. |
| Twin agent detail | card | Back bar + date range + Calibrate. Two equal columns: agent card (what it does, answers-only-on pill, three ticked lines, usage-credit grey box, no bar) and Report card (four soft tiles, weekly bars, line chart). Then Questions-couldn't-answer, Reports raised, Calibration \| Sessions. |
| Twin sessions · Roleplay sessions | nav | Header + four filters; summary cards → number tiles → Needs a look → rule → table title → table. Phones: cards stack with the picture above the title, tiles 2×2, table overflows horizontally. |
| Twin / Roleplay session report | row click | 720 column: header card (avatar, name, date·length, video), Learner feedback (stars + quote + issues), topic chips, transcript (grey field, white bubbles). Roleplay adds a scoring rubric and learner goals. |
| Calibration thread | Twin agent › Calibration | Back, twin photo 56px, three metric cards, date, bubble thread, Feels like me / Feels off. |
| Twin's brain | nav | Full-bleed dotted canvas; three node cards (Knowledge, Training style, Voice and avatar) joined by curves; Done top-right; zoom bottom-right. |
| Scenarios | nav | Header: search pill + New. “Created roleplays” + Published \| Draft segmented + view toggle; 3-up scenario cards. Empty draft tab: full-width box, secondary Create roleplay. |
| Scenario builder | New | Back bar; 720 column; TeeTee card (collapses to a Generate-with-AI line); builder card (radius 24) with tabs Scenarios · Agent role · Learner · Rubric · Success; step head; step body; actions Back · Next, last step Try roleplay · Save as draft · Create and publish. |
| Persona library · detail | nav | Wide page; 4-up persona cards; detail = large card + two-column definition table + sticky Create roleplay. |
| Inbox | nav | Twin \| Roleplay segmented with counts; 232px left menu (All alerts · Access requests · Ask Olga · Reported issues · Access ending soon) + 1px-bordered pane; cards with small CTAs on the right. |
| Settings | nav | Name + description; MODULES card with switches; ACCOUNTS: four centred settings cards (Usage, Cohorts, Learners, Team). |
| Accounts: Cohorts · Learners · Team | Settings › | Back to Settings; icon title + primary (New cohort / Invite learners / Invite member); section head with subtext + 148×32 filter; Learners adds Twin users \| Roleplay users. |
| Profile · Analytics · Gen videos · Ask my twin · Create twin agent | nav | Narrow profile column; Analytics ask card + stat cards + table; video tile grid; 640px ask box hero; 720 TeeTee create card. |
| Sign-in flow: Build my twin | signed out (`?onboarding=1` or Profile › Log out) | Page title and a three-step stepper (Your link · Finding you · Persona) above a 480 setup card: LinkedIn / website input, Type of trainer select, Primary use case multi-select, full-width primary Next. |
| Sign-in flow: Here's what we found | step 2 | 680 setup card: one row card per source with a tick and a ghost “Not me”, a grey add-a-link box, Back (ghost) and Looks right (primary) over a hairline. |
| Sign-in flow: voice | step 3 | 480 setup card: Add your voice (two full-width secondary buttons around “Or”), Voice library (rows with Play and Select), Record (timer, waveform, Stop), Recorded (picked-voice row). |
| Sign-in flow: live call | after the voice | Full-bleed: a 320 video card, name pill, caption bubble and three 54px round controls on the left; a 600 “What we found about you” card on the right (summary, tag chips, collapse). “Feels off” opens the shared dialog to add knowledge. |
| Sign-in flow: Twin is ready | end | 640 setup card: 160px portrait, “Olga's twin is ready”, a grey three-row summary (Voice, Persona, Knowledge), primary Add knowledge and secondary Speak again. |
| Dialogs | popups | Credit usage 440 · Try as learner 480 · Share / Respond 520 · Assign 640 · “Why does this feel off?” ≈ 480. |

### A screen, assembled

The shell is the frame; this is what goes in it. Copy the *proportions* from here —
almost every spacing mistake only becomes visible once the pieces sit together.

```
┌─ app shell ─────────────────────────────────────────────────────────┐
│ sidebar   │ ┌─ page header ──────────────────────────────────────┐  │
│ (sunken)  │ │ eyebrow (Figtree, 10px, .1em, uppercase)           │  │
│           │ │ H1  Figtree 600 / 20px         [Preview] [Publish] │  │ ← strong, not primary
│           │ │ 47 sources · trained 2h ago                        │  │
│           │ ├─ tabs ─────────────────────────────────────────────┤  │
│           │ │ Sources* Pedagogy Guardrails Sessions              │  │
│           │ ├─ body: --tt-surface-sunken, space-5 ───────────────┤  │
│           │ │ ⚠ alert — sits ABOVE what it describes             │  │
│           │ │ ┌─ 1.5fr ───────────────┐ ┌─ 1fr ────────────────┐ │  │
│           │ │ │ card: table + badges  │ │ card: progress       │ │  │
│           │ │ │ card: form + labels   │ │ card: disclosure     │ │  │
│           │ │ │        [Cancel][Save] │ │ ⓘ alert (rail)       │ │  │ ← Save is the ONE primary
│           │ │ └───────────────────────┘ └──────────────────────┘ │  │
│           │ └────────────────────────────────────────────────────┘  │
└───────────┴────────────────────────────────────────────────────────┘
```

Gaps: `--tt-space-5` around the body, `--tt-space-4` between cards and columns.
Columns are `minmax(0,1.5fr) minmax(0,1fr)`, collapsing to one below `md`.

**Four rules that only become visible at this scale:**

- **This screen has no orange button at all**, and that is the normal case. *Save
  changes* and *Publish twin* are both `strong`; everything else is `secondary` or
  `ghost`. Orange would appear here only if *Publish twin* were a modal's confirm —
  which is the dialog case, not the page case (§2 rule 2).
- **Alerts sit next to what they describe**, not stacked at the top of the page. The
  caution belongs above the sources it's about; the info sits in the rail beside the
  readiness meter.
- **A badge inside a card takes the radius one step below the card's** — pill inside
  12px, never matching, never larger.
- **Card padding lives on head/body/foot**, never on the card, or a table can't run
  edge to edge inside one.

A live version of this screen is in §09 of `foundations.html`.

**Containers** cap how wide content *grows*. Breakpoints decide when the layout
*changes shape*. Different jobs, non-interchangeable values.

| Token | Value | For |
|---|---|---|
| `--tt-container-prose` | 65ch | Running text — the reading-measure cap |
| `--tt-container-sm` | 640px | Auth, single-column forms |
| `--tt-container-md` | 900px | Articles, settings, detail panes |
| `--tt-container-lg` | 1200px | **Default app content** |
| `--tt-container-xl` | 1440px | Wide marketing sections |

**Breakpoints** — `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.
These match Tailwind's defaults deliberately; diverging would surprise anyone who
has used Tailwind. Note CSS cannot read a custom property inside a media query, so
these live in `@theme` in `globals.css`, which is what generates the variants.

**Layering** — one ordered scale, so no component ever invents a number.

```
--tt-z-base 0 · raised 10 · sticky 20 · dropdown 30
--tt-z-overlay 40 · modal 50 · toast 60 · tooltip 70
```

Two deliberate choices: **toast sits above modal**, because a toast confirming a
dialog's action must be visible while the dialog is still open; and **tooltip is
highest**, because it never blocks, so it can never trap anything. A `<dialog>`
opened with `showModal()` renders in the browser's top layer and ignores z-index
entirely — do not try to stack against it.

**Icon sizes** — four steps, nothing in between. `--tt-icon-xs` 12 (chips, 11–12px
labels) · `sm` 16 (**default** — buttons, inputs, menus) · `md` 20 (alerts, section
headers) · `lg` 24 (empty states, feature marks).

**Icon size is not hit area.** A 16px icon needs a control around it of at least
`--tt-target-min` (24px), per WCAG 2.2 SC 2.5.8. Where a control sits inside a
`<label>`, the label counts toward the target.

---

## 8. Components

### Button

Five variants, in descending emphasis, plus `danger` outside the ladder.
Sizes: `sm` 32px/13px · `md` 36px/14px (was 40px until 4 Nov 2026, D109). **`lg` (50px/19px) and `xl` are marketing-only as of 25 Sep 2026** — product code uses `sm`/`md`.

**`primary` is the default (reversed 4 Nov 2026, D107).** `<Button>` with no variant is brand orange — one per view or dialog; see §2 rule 1.

| Variant | Fill | Reach for it when |
|---|---|---|
| `strong` | black in light theme, white in dark | **Defined, not the default** (reversed 4 Nov 2026). Marketing CTAs keep it until decided; its role in product is Open (§13). |
| `primary` **(default)** | brand orange, white label | **The one main action of a view or dialog** — Create new, Continue, Save and Assign, Send by email, Create and publish, Done. A row or card action is `secondary`. Never two in one viewport. |
| `secondary` | **soft grey fill**, no border | The utility button — toolbars, Help/Docs, notification bells. Things that sit together and should not each shout. Also the **alternative** beside a primary or strong button. |
| `ghost` | transparent | Dismissals, tertiary actions, or an action repeated on every row of a long list. |
| `danger` | transparent, danger border | Destructive. **Outlined, never filled.** |

> **⚠ `primary` has no compliant size in-product, still unresolved.**
> White-on-orange only clears WCAG AA at `lg` (19px bold) — that's the entire
> reason `lg` existed. `lg`/`xl` are marketing-only, and nothing replaced the
> compliant size. **Reversed 4 Nov 2026 (D107): the exposure widens.** The 29 Sep allowlist had narrowed this to three
> orange buttons per flow; every view's primary is orange again, so the 3.13:1 pair now appears on every
> screen. Options, none formally chosen: let `primary` alone keep `lg`
> in-product; move to a near-black label at `sm`/`md`; or accept that the three
> allowlisted moments are a documented exception like the other six.
> See DECISIONS.md.

**The rule that matters:** one orange button per view or dialog. If a second filled button is
tempting, it is a `secondary` — and a list where five rows each carry a button gets five
secondaries, not five orange buttons.

**Selection and state are neutral.** A selected row is `--tt-fill-soft`, a checked
checkbox fills with `--tt-cta-strong`, a chosen dropdown item's tick is
`--tt-text-primary`, and an avatar monogram is `--tt-fill-soft` on
`--tt-text-secondary`. None of these is a call to action and none of them should
look like one. The active nav item's *fill* follows the same rule (a neutral
lifted pill plus a weight step) — but unlike the others, its icon dot and label
are the one deliberate exception, keeping `--tt-primary`/`--tt-primary-ink` from
the original Figma measurement (§7).

`strong` is one variant, not two — the fill and label flip with the theme, so it is
always the opposite polarity of its canvas and cannot be shipped invisible. At
14.16:1 in light and 19.80:1 in dark it is the most legible button in the system, and the only
filled one with no accessibility tradeoff attached.

```css
/* rounded-full, not radius-sm — 25 Sep 2026. Every button is a pill (a circle
   when icon-only), the one control pinned to the max radius regardless of its
   size step. This breaks the usual "radius steps with the element" rule on
   purpose: a button should read as reachable, not as a small panel. */
.btn {
  display:inline-flex; align-items:center; justify-content:center; gap:var(--tt-space-2);
  font-family:var(--tt-font-ui); font-weight:var(--tt-weight-cta); white-space:nowrap; cursor:pointer;
  border:var(--tt-border-thin) solid transparent; border-radius:var(--tt-radius-pill);
  transition:background var(--tt-duration-quick) var(--tt-ease-standard);
}
.btn--primary { background:var(--tt-primary); color:var(--tt-on-primary); }
.btn--primary:hover { background:var(--tt-primary-hover); }
.btn--strong  { background:var(--tt-cta-strong); color:var(--tt-on-cta-strong); }
.btn--strong:hover { background:var(--tt-cta-strong-hover); }
.btn--danger  { background:transparent; color:var(--tt-danger); border-color:var(--tt-danger); }
```

Set border **width** in the base class and border **colour** in the variant. Setting
colour in both lets CSS source order silently drop the outline.

**Never put a filled button on a surface of its own colour.** A primary button on a
brand-orange banner disappears into its own background. When the surface carries the
brand, the control inverts — white or outlined. Whichever one is the figure, the
other becomes the ground.

### Form controls

```css
.input {
  height:36px; padding:0 var(--tt-space-3); width:100%;
  font-family:var(--tt-font-ui); font-size:14px; color:var(--tt-text-primary);
  background:var(--tt-surface); border-radius:var(--tt-radius-sm);   /* 8px */
  border:var(--tt-border-form) solid var(--tt-border-field);   /* light at rest */
}
.input:hover, .input:focus { border-color:var(--tt-border-interactive); }
.input::placeholder { color:var(--tt-text-muted); }
.input[aria-invalid="true"] { border-color:var(--tt-danger); }
```

Every field is label + control + (hint | error). The error **replaces** the hint, is
wired with `aria-describedby`, and **names the fix, not the failure**:
"Add a name so learners can see whose twin they're talking to" — never "This field is
required." Checkboxes, radios and switches use the same 0.5px border and the **4px `xs`
radius** (they are 18px — the smallest step is theirs). Checked state fills with
`--tt-cta-strong` and marks in `--tt-on-cta-strong`, never the brand orange.

The checkmark is a **1px stroke**, drawn as two borders on a rotated box:

```css
.check:checked::after {
  content: ""; width: 5px; height: 9px;
  border-right: 1px solid var(--tt-on-cta-strong);
  border-bottom: 1px solid var(--tt-on-cta-strong);
  rotate: 45deg; translate: 1px -1px;   /* re-centres the rotated box */
}
```

Not a `clip-path` polygon. A polygon's stroke weight is implied by its outline
geometry rather than stated — the retired one worked out around 2px, which is heavy
against a 0.5px field border and impossible to adjust without redrawing the path.
The indeterminate dash is 1px tall to match, so both states read as one control
drawn with one pen.

### Button — icons, icon-only, and counts

`leadingIcon` takes an `--tt-icon-sm` (16px) glyph. `iconOnly` makes the button
square at every size — 32 / 36 / 50 — which, combined with the full-radius
change above, renders as a **circle**, so a toolbar keeps its rhythm instead of
going oblong. `count` renders an unread pill beside the icon.

**What you get by default:** a 16px glyph centred in a 32px (`sm`) or 36px (`md`)
target. The glyph stays 16px at every button size — only the target grows. That
16px is `--tt-icon-sm`, the documented default; the scale is 12 / 16 / 20 / 24 and
an icon takes one of those, never a value in between. Both targets clear the 24px
of WCAG 2.2 SC 2.5.8 with room to spare, so `sm` is safe for a table row action.

> **Fixed 29 Sep 2026 — icon-only buttons were rendering their glyph squashed.**
> `iconSizes` carried `px-0` while `sizes` carried `px-3`/`px-5`, so both were
> emitted onto the same element. Single-class Tailwind utilities tie on
> specificity, so the winner was whichever Tailwind wrote last — and `px-3` won.
> On a 32px-wide `sm` button that left an 8px content box, and because an inline
> SVG is `flex-shrink: 1` by default the 16px glyph was **squashed to 6px wide by
> 16px tall** instead of overflowing where it would have been obvious. Padding now
> lives in its own map and exactly one of padding/width is emitted. The CSS in
> this document was never affected — `.c-btn--icon.c-btn--sm` is a two-class
> selector and outranks `.c-btn--sm` — so the spec and the component had silently
> disagreed, with the spec correct.

**An icon-only button always carries an `aria-label`.** Without one a screen
reader announces "button" and nothing else — the most common accessibility failure
in a toolbar. The icon itself is `aria-hidden`; it is decoration once the label
exists.

```tsx
<Button variant="secondary" leadingIcon={<Bell/>} count={1} aria-label="Notifications, 1 unread" />
<Button variant="secondary" leadingIcon={<Help/>}>Help</Button>
<Button variant="secondary" iconOnly leadingIcon={<Dots/>} aria-label="More options" />
```

### Button — loading state

Added 25 Sep 2026 from the Figma reference at node 885:274 ("loader gif
animation and button loader place"). `loading` shows the loading mark where
`leadingIcon` would sit (any passed `leadingIcon` is ignored while loading —
never both at once) and disables the button. The label is **not** replaced or
invented by the component — pass it yourself, so the caller controls the copy:

```tsx
<Button loading={isSaving}>
  {isSaving ? "Processing 12 sources" : "Add source"}
</Button>
```

No `variant` — *Add source* is an ordinary action, so it is `strong` like almost
everything else. A loading state does not earn orange; the terminal commit it
sometimes sits on does.

**Loading is not disabled**, visually or semantically, and the two must stay
distinguishable: loading is `opacity-70`, true disabled is `opacity-45` — the
Figma reference shows them as two clearly different states (a legible pastel
button vs. a flat grey one), and the component computes whichever single
opacity applies rather than letting two `:disabled`-keyed utilities race.
Both set the native `disabled` attribute (real keyboard/click blocking);
loading additionally sets `aria-busy="true"`.

### The loading mark

Not a generic spinner — the brand mark's own 3x3 grid (§9 Logo), decomposed
into its nine cells so a brightness sweep can chase around them. Component:
`Spinner.tsx`. Three opacity levels (1.0 / 0.7 / 0.4, floor 0.15) sweep through
an 8-frame cycle read from the Figma export at native resolution; the sweep
dips through the centre cell once per cycle, which is why this ships as **nine
separate keyframe blocks** (one per cell) rather than one animation with eight
staggered delays — a uniform stagger can't reproduce that dip.

```css
@keyframes tt-spin-0 { /* …eight more steps, one block per of the 9 cells… */ }
.tt-spinner-cell {
  animation: var(--tt-spin-name) 960ms linear infinite;   /* NOT --tt-duration-*
     — that scale is for interaction response; this is ambient and loops. */
}
```

Standalone (outside a Button), `<Spinner/>` carries its own `role="status"` and
an `aria-label` ("Loading" by default, or pass one with more context) — that is
the *only* signal available then, so it announces. Inside `Button`, the whole
thing is wrapped `aria-hidden`, because the button's own `aria-busy` plus its
visible label already say "busy" once; without the wrapper a screen reader
would hear it twice.

`prefers-reduced-motion` freezes the grid on whatever frame it's on, per the
system-wide reduced-motion rule (§4b) — busy state is still conveyed by
`aria-busy`, which is what matters for assistive tech; the frozen grid is a
visual-only trade-off, not an accessibility one.

The count pill is the **smallest instance of the white-on-orange exception** — at
10.5px it is far below the large-text threshold. It works because a one- or
two-digit number is a shape you recognise rather than text you read. If it ever
carries something longer, switch its label to near-black (6.33:1).

### Segmented control — the default tabbed-content pattern

Reversed 25 Sep 2026 — this used to be "mode of one thing only, tabs handle
different content." Drop that: what decides is the **shape of the choice**, not
a technicality about what's rendered underneath. Voice / Text / Video on the
Session Shell can hold three genuinely different panes now, same control.

The selected segment is a raised pill on `--tt-surface` with `--tt-elevation-1` —
the only part of the control sitting on the surface colour, which is what makes it
read as lifted out of the trough. Its icon takes brand orange; the rest stay muted,
so the eye lands on the current selection rather than a row of colour.

- **Two to four segments.** Beyond four, reach for Underline Tabs (below) or a select.
- **Short, parallel labels** — "Voice / Text / Video", never "Voice / Send a message".
- **Something is always selected.** There is no empty state; if nothing can be
  chosen yet, it is the wrong control.
- **Dividers vanish beside the selected pill**, whose own edge already separates it.
- **Never for destructive or committing actions** — it is a toggle, not a task.

### Underline Tabs — secondary, name it to use it

The pattern this replaced as the default. Still real, still correct in the
right place — but reach for **Segmented Control** first, and only use Underline
Tabs when a screen specifically calls for it **by this name**. It earns that
name when the choice genuinely doesn't fit a pill row: more than four options,
a wide horizontal nav bar where pills would read as buttons, or a place that
already borrows the browser-tab metaphor (many sections of one large object —
Sources / Pedagogy / Guardrails / Sessions, from the composed screen in §7).

2px bottom border in `--tt-primary` on the selected tab, label in
`--tt-primary-ink`. Otherwise the same rules as Segmented Control: something
is always selected, labels stay short and parallel.

### Form control states

Every field is **label → control → (help | error)**, wired with `aria-describedby`.
**The error replaces the help text**; both at once is two messages under one field,
and the one that matters gets skimmed.

| State | Treatment |
|---|---|
| empty | placeholder in `--tt-text-muted` — legal here, it *is* a placeholder |
| filled | normal text, `--tt-border-field` at rest |
| hover / focus | border firms to `--tt-border-interactive`; focus adds the 2px ring |
| error | `--tt-danger` border + message, `aria-invalid="true"` |
| valid | `--tt-success` border + tick. **Sparingly** — reserve it for checks that cost something (a lookup, a code); a tick on every satisfied field is noise |
| disabled | greyed, `not-allowed`. "Not actionable, ignore it" |
| read-only | sunken fill, no border, **full text contrast**. "This matters, you just can't change it here" |

Sizes: `sm` 32 · default 36 (was 40 until 4 Nov 2026, D110) · `lg` 48. Affixes handle units and adornments — a `min`
suffix beats putting "in minutes" in the label. A character counter turns
`--tt-danger` and bold once over the limit.

**Error copy names the fix, not the failure.** "Add a name so learners can see whose
twin they're talking to" — never "This field is required."

### Multi-select

Chips inside the field, each individually removable, with a listbox below. **The field
grows to fit and never scrolls horizontally** — a chip you cannot see is a value you
will forget you set. Chips sit on `--tt-fill-soft`.

### Dropdown

**The custom listbox needs ~40 lines of JS and that is part of the spec, not an
extra.** Trigger toggles `hidden` and `aria-expanded`; opening moves focus to the
selected option; Arrow keys cycle; Escape and Tab close; Escape returns focus to
the trigger; clicking outside closes. Picking an option copies only the option's
*label* into the trigger — not its description. A trigger with no listbox behind
it is a picture of a dropdown, which is what this document shipped until
11 Sep 2026.

**The two dropdowns look nothing alike when open, and that is a browser constraint,
not a gap here.** A native `<select>`'s popup is drawn by the operating system —
you can style the closed control, but the open menu ignores every token in this
file and renders as a grey system panel on macOS. So the choice is partly visual:
if the menu opens somewhere the brand has to hold, use the custom listbox. Use the
native one only where the choice is short, self-evident, and mostly used on mobile.


A custom listbox rather than a native `<select>`, because native options cannot carry
a description, a group label, or a disabled reason. **Use the native one when the
choice is short and self-evident** — it is more robust on mobile and costs nothing.
The selected tick is `--tt-primary`; the selected row sits on `--tt-fill-soft`.

**Filter dropdown (page header) — 4 Nov 2026.** 148×32, `--tt-radius-sm`, 0.5px `--tt-border-field`, 13px text, label left and chevron right; a long label truncates with an ellipsis, never wraps; the menu opens at least as wide as the button. Four sit in one row beside the page title and change the table **and** every number above it (empty: “No sessions match these filters.”). Its chevron is a 12×7 glyph at ~1.33px effective stroke — `viewBox="3.8 5.8 8.4 4.9"`, `stroke-width=".94"` — so it matches the ↗ arrow; the 36px Dropdown keeps the 16px / 1.75 chevron (unification is Open, §13). A native `<select class="input">` gets `appearance: none`, a 16px background chevron at `right 12px center`, `padding-right: 40px`, stroke `#4A4A4A` light / `#C4C4C4` dark. **Never rely on the browser's chevron.**

### Date field

**Orange marks today. The dark CTA marks the selection.** Two different facts, so they
get two different treatments — and a day number is ~13px, far below the size at which
white-on-orange stays legible. Making "selected" orange would have put the least
readable pairing in the system on the one number people actually have to read.

**Calendar popover — full spec added 4 Nov 2026** (replaces the earlier 268px,
Monday-first, 32px-day sketch):

- **Always keep the text input.** Typing "17 sep" beats four taps through a grid, and
  it is the only route that works well with a screen reader. Keep the real
  `<input type="date">` typable, **hide the native picker indicator**, draw our own 16px
  calendar icon at the right, and **never call the native `showPicker()`**. Clicking
  anywhere on the field opens the popover.
- **288px wide**, `--tt-radius-md`, `--tt-elevation-2`, padding 12 / 16 / 16. Header: month
  title 14/600 and previous / next as 28px round ghost buttons (previous disabled on
  the current month). Weekday row: **two-letter initials, Sunday-first** (Su Mo Tu We Th
  Fr Sa), 12px, `--tt-font-ui` with `tabular-nums`. Days: 34px circles, 13px.
- **Today = an orange dot under the number; selected = `--tt-cta-strong` circle with
  `--tt-on-cta-strong` text** (D76).
- **Past days are disabled** (45% opacity, `not-allowed`) and the footer says why:
  "Dates before today can't be picked." Esc closes the calendar first, the dialog second.
  A disabled day always needs a reason in the UI.
- **"Access until" defaults to the label "30 days"** (value underneath = today + 30).
  Choosing a date replaces the label with the date; closing without choosing keeps
  "30 days"; clearing resets it. Field is 150×32 in a popup row. Whether a date field in a
  popup is a pill or `--tt-radius-sm` is Open (§13) — recommended: `--tt-radius-sm`.

### Badges

Pill, 11.5px medium, subtle background + matching text. Variants: neutral,
brand, success, info, caution, danger, live, available. **Never colour alone —
every badge carries a word.** `live` is the only animated one (pulsing dot).

**`success` also marks “Responded”** (4 Nov 2026) — the green badge that replaces a question's Respond button once an answer is sent. **A photo-less avatar is the first letter of the name** (22 / 28 / 32px, 600, centred); photo avatars are 32px and round. **Fill colour is Open** — neutral by the 29 Sep rule, but the measured V3 build cycles five tones by name (§13).

**`brand` is the RECOMMENDED marker and nothing else — narrowed 29 Sep 2026.**
Use it on the one option the product is steering toward, paired with a `primary`
select button on that same card. It is not a category label and not a "this is
ours" decoration: a grid where every card carries a brand badge is exactly the
failure the 29 Sep pass exists to undo — six orange pills, and no recommendation
legible among them. For a category or a type, reach for `neutral`.

**No border, as of 25 Sep 2026** — a coloured fill already reads as a shape;
a border on top of it was doubling up. `live` and `available` are the
exceptions, and they're structural, not stylistic: both have a **transparent**
background, so their border is the only thing defining the pill at all —
remove it there and you've deleted the badge, not lightened it. Four of the five
`--tt-*-badge-border` tokens this replaced are retired; `--tt-primary-badge-border`
was restored 29 Sep 2026 because nine marketing call sites still referenced it
(see §1).

### Alerts (inline) vs Toasts (transient)

**Alert** sits in the flow next to what it describes, uses the `*-subtle` background
with a matching border and icon, and is for anything the user must act on.
**Toast** is bottom-right, stacked, auto-dismisses at 5s, uses `--tt-surface-raised`
with `--tt-elevation-3`, and confirms something that already happened. Errors needing
a decision go in an alert, never a toast — a toast can be missed.

Toasts announce themselves: `role="status"` normally, `role="alert"` for errors.

### Modal

`--tt-surface-raised`, `--tt-radius-lg`, `--tt-elevation-3`, scrim at
`rgb(11 10 9 / .55)`. Use the native `<dialog>` element. Reserved for decisions that
must be made now, or that are destructive. **The confirm button takes the variant of
the action, not of the dialog** — a delete dialog confirms with the danger button.

### Side panel (drawer), Respond dialog, Assign dialog

Specced 4 Nov 2026 from the V3 prototype; none is a `.tsx` component yet. Backdrop for all
three is `rgb(11 10 9 / .55)`. **Dialog corner radius is 24 in the prototype and
`--tt-radius-lg` (16) in the Modal above — unresolved (§13); build to 16 until decided.**

- **Side panel.** 560px wide (100vw on small screens), full height, slides in from the
  **right edge**, 24px on the left corners only, no right border or radius; slide-in plays
  once on open, not on re-render. Header "Reports raised" + subtitle "<agent> · N open"; the
  list scrolls inside and keeps its position after a response. At `--tt-z-modal`.
- **Respond dialog (520px).** Title "Respond to {first name}", subtitle "{name} · {email}". A
  grey context box (`--tt-fill-soft`, radius 12, padding 12×16): the question, or — for a
  report — overline "Learner's report", the reason in 600, the flagged turn in italic quotes.
  Label "Your answer" + 4-row textarea (placeholder "Type your answer the way you would say
  it"). Voice: secondary sm "Record a voice reply" with a mic icon; recording shows a
  `--tt-live` dot + "Stop 0:07"; afterwards a grey chip "Voice reply · 0:12" + ghost "Remove".
  Note (13px secondary): "Sent to {first} by email. Your twin will use it next time." Footer:
  Cancel (secondary) · **Send by email** (primary — the dialog's confirm), disabled until there
  is text or a voice reply. **The recorder in the prototype is a mock** — specify the control,
  not the behaviour.
- **Assign dialog (640px; Roleplay has no minutes or date columns).** Title "Assign twin
  agent" / "Assign roleplay"; subtitle "<name> · N assigned · M selected". Toolbar: search left
  (open by default, grows to 360px), cohort select right. Then the list-as-table card (see
  Table). Rows: checkbox · 32px avatar · name 14/500 + email + phone (12px secondary) · minutes
  dropdown (15 / 30 / 60 / 120) · date field; controls appear when a row is ticked and also on
  already-assigned rows (editable, saved immediately; assigned rows grey their name/avatar to 60%
  only). On tick: **30 min** and **"30 days"**. Footer CTA **Save and Assign**, disabled until at
  least one person is ticked **and** every ticked learner has minutes and a date. Toast: "Assigned
  to Nora for 30 min, until 30 Nov 2026."
- **Stacking.** A dialog may open over a drawer (Respond over Reports raised). Both sit at
  `--tt-z-modal`, DOM order decides, the top-most closes first (Esc, backdrop), and a toast
  appears above both (`--tt-z-toast`).
- **Report row.** 1px rules between rows, 16px vertical padding. Name line: avatar + name 14/600
  on the left, **day and time only** ("Today, 10:40 am", 13px secondary) on the right. Then one
  grey box (`--tt-fill-soft`, radius 12, padding 16×20, full row width): overline "Learner's
  report" → reason 16/600 → the flagged turn in italic secondary inside “double quotes” (inner
  quotes become ‘single’). **"Respond" (secondary sm) sits inside the box at the right,
  vertically centred.** One CTA per row.
- **Learner-facing report reasons** are the learner's words about an answer, not Olga's
  calibration vocabulary: Wrong or inaccurate answer · Out of date information · Didn't answer my
  question · Hard to follow · Too long · Other. Roleplay reports keep the voice reasons (Wrong
  pronunciation, Sounds robotic, Wrong accent, Flat or no emotion, Pacing feels off…).
- **Agent detail card.** Title; overline WHAT IT DOES + description; overline ANSWERS ONLY ON +
  a 24px `--tt-info-subtle` / `--tt-info` pill, **no border**; three ticked lines (16px
  `--tt-success` check + 14/20 secondary). **Usage credit is a grey box at the bottom** (`--tt-fill-soft`,
  radius 12, padding 16×20): overline USAGE CREDIT, "190 of 300 min used" (18/600 + 14 muted),
  "110 minutes left". **No progress bar.** Height matches the Report card beside it.
- **"Questions your twin couldn't answer"** (was "Most asked"): each row is the question and a
  **Respond** secondary sm button (replaces the count); afterwards the green **Responded** badge.
  **"Reports raised"** card: "Total reports **16 ↗**" — the number and a 14px redirect icon are one
  link that opens the side panel, and the number drops as reports are answered.
- **"Why does this feel off?"** reuses the existing Twin-off dialog (quote, reason chips Too
  generic · Too long · Doesn't sound like me · Missing an example · Something else, optional note,
  Cancel / Submit). The rating saves only on Submit (empty: "Pick a reason first."); "Feels like me"
  saves immediately.
- **Top-bar usage pill:** an 18px ring before "800 / 1000 minutes used", filling clockwise,
  switching to caution at ≥ 90%.
- **Calibration chat bubbles are not specced** — Olga's dark bubble and the twin's orange-tinted
  bubble both stretch an existing rule and are Open (⚑1, ⚑2, §13). Until decided, a chat surface
  keeps the neutral bubble.
- **Prototype-only, never a rule (⚑7):** the voice recorder is a mock; "emailed" is a toast; the
  reports and learner names are generated; "Answers only on …", "5 files" and "60 samples" are
  fixed text. Mark all of it as placeholder.

### Menu, tooltip

Menu: `--tt-surface-raised`, `--tt-elevation-2`, 13.5px items, destructive item last
and below a divider. Tooltip: inverted — `--tt-text-primary` background,
`--tt-canvas` text. Tooltips explain; they never hold the only copy of something
required. (Tabs moved to their own entry, §8 Underline Tabs, 25 Sep 2026.)

### Progress, skeleton, empty state

Ingest shows **real progress per source**, never an indeterminate bar — uploading a
trainer's life's work is slow and anxious. Skeletons hold the shape of what's coming
so layout doesn't jump; pulse opacity rather than shimmer, so it survives both themes.
Empty states get a dashed `--tt-border-interactive` container, a title, one line of
copy, and exactly one action.

**Ring — a share of a whole, 4 Nov 2026.** A conic fill over `--tt-border` filling clockwise (64px with a 25px hole and the percentage at 13/600 inside; or 18px in the top bar, switching to caution at ≥ 90%). The 64px ring fills with `--tt-success` — green as a data colour is Open (⚑4, §13). Usage credit inside the agent card has **no bar at all**; ingest keeps its real per-source bar.

### Card

The default container — almost every product screen is cards in a grid.
**Padding lives on the sections, never on the card itself**, so a card can hold a
full-bleed image or an edge-to-edge table without fighting a padding it never asked
for. `overflow:hidden` is what makes the radius clip that content.

```css
/* Card gets its own, lighter border and shadow — 25 Sep 2026. --tt-border and
   --tt-elevation-1 are shared by every internal divider and resting surface in
   the system; a card's outer edge sits next to open canvas on every side, not
   inside another surface, and reads as heavier than an internal divider at the
   same value. --tt-card-border / --tt-card-shadow are one step lighter — see §4.
   The footer is a divider now, not a filled band: it shipped with a
   surface-sunken fill that diverged from the source screen (a hairline over a
   plain row), and that fill is gone as of the same date. */
.card {
  display:flex; flex-direction:column; overflow:hidden;
  background:var(--tt-surface); border-radius:var(--tt-radius-md);   /* 12 */
  border:var(--tt-border-thin) solid var(--tt-card-border);
  box-shadow:var(--tt-card-shadow);          /* every card, by default */
}
.card--raised { box-shadow:var(--tt-elevation-2); }
.card-head { padding:var(--tt-space-4) var(--tt-space-5); border-bottom:var(--tt-border-thin) solid var(--tt-border); }
.card-body { flex:1; padding:var(--tt-space-5); }
.card-foot { padding:var(--tt-space-3) var(--tt-space-5); border-top:var(--tt-border-thin) solid var(--tt-border); display:flex; justify-content:flex-end; gap:var(--tt-space-2); }
```

Radius 12 is one step above the 8 used by controls inside it. The border and
shadow above are **card-scoped** — internal dividers between a card's own
head/body/foot stay on the general `--tt-border`, since those sit between two
identically-coloured sections rather than against open canvas.

**`setup` (5 Nov 2026, D112).** The full-page onboarding card: `--tt-radius-xl` (24), no border, `--tt-elevation-2`, padding 32 **on the card itself**. It is the one card that pads itself, because its children are a form, not full-bleed media, and the one without a border. Centred, 480 / 600 / 640 / 680 wide. Built as `Card variant="setup"`.

```css
.card--setup { border-radius:var(--tt-radius-xl); border:0; padding:var(--tt-space-8); box-shadow:var(--tt-elevation-2); }
```

**Every card carries a resting shadow by default**, so it reads as an object
sitting on the canvas rather than a region drawn on it. `raised` steps up to
elevation-2 for something genuinely floating — not every card, or the hierarchy
flattens. `interactive` lifts to elevation-2 on hover — **elevation alone carries that
hover**, with no border highlight and no surface shift, since a card that lifts
should not simultaneously read as recessed. It **contains no other control**, or
you have nested hit areas.

Remember that in dark theme elevation is a *hairline of light*, not a shadow —
shadows are invisible on a near-black canvas, so `--tt-card-shadow` resolves to a
1px ring rather than a drop shadow. The card looks correct in both themes without
a fork.

### Full-page setup card, auth modal, empty-state gate

Added 30 Sep 2026, from a running onboarding prototype — three distinct surfaces
that share one visual treatment: `border-radius: var(--tt-radius-xl)` (24px, not
the ordinary card's 12) and an elevation shadow scaled to how much the surface
needs to separate from the page behind it. Confirmed on three separate instances,
not built as real components yet — specced here so the radius and shadow pairing
is right when they are:

| Surface | Radius | Shadow | Column width |
|---|---|---|---|
| Full-page setup card (an onboarding flow's own container) | `--tt-radius-xl` | `--tt-elevation-2` | 480 / 600 / 640 / 680 by content (D112) |
| Auth / sign-up modal | `--tt-radius-xl` | `--tt-elevation-3` | — (modal, not a column) |
| Empty-state "gate" card (Home/Analytics/Roleplay before a twin exists) | `--tt-radius-xl` | `--tt-elevation-2` | 420px |

**All three are centered, confirmed live 30 Sep 2026** — `margin: 0 auto` inside
the content area, at their own fixed width, never flush left or full-bleed. This
is the "focused-task" half of the two-content-alignment-patterns rule above
(§7): the width in the table is what fit that specific screen's content, not a
universal number — a different full-page card can pick its own width, as long
as it's centered rather than left-aligned.

An auth modal's illustration or empty-state hero may carry a decorative gradient
— measured as `linear-gradient(135deg, #AFD1F5, #D9C4F0 55%, #F4C7D6)` — but that
gradient is scoped to that one illustration band, never a general card treatment.

**The auth modal's own fields and OAuth button run taller and fully pill-shaped —
measured 2 Oct 2026, scoped to that modal only.** 48px tall (not the standard
36px `.input`/`.btn`), `border-radius: var(--tt-radius-pill)` (not the standard
8px `.input` radius), border colour at rest is `--tt-border-interactive`
(`#828282`) rather than `--tt-border-field` — the field looks "ready" without
waiting for hover. Treat this the same way as the gradient above: a deliberate,
larger, friendlier moment for one welcome screen, not a change to the general
`Input` or `Button` spec — a settings form or a table filter still uses the
ordinary 36px / 8px-radius controls.

### Card grid

Confirmed live 30 Sep 2026: a source/knowledge card grid is CSS grid, two fixed
316px columns, `gap: var(--tt-space-4)` (16px) — not an `auto-fit`/`minmax`
flexible grid. Ordinary `Card` demos elsewhere in this document (§8, above) do
use `auto-fit, minmax(260px, 1fr)`, which is still correct for a general card
grid; this fixed two-column layout is specific to a source/knowledge picker
where every card carries the same shape (checkbox, name, stat pill) and a
flexible width would misalign the checkboxes across rows.

### Add card (dashed)

An empty "add a new one" tile inside a card grid — `border: 1px dashed
var(--tt-border)`, same `--tt-radius-md` as its siblings, centered `+` icon and
label in `--tt-text-secondary`, no fill. Added 30 Sep 2026 from the onboarding
flow's "Add knowledge" tile. Reach for it wherever a grid of cards needs its own
trailing "add" affordance, rather than a separate button floating outside the grid.

### Stat pill

A small pill showing a count against a source or item — "14 pages", "36 posts" —
`background: var(--tt-fill-soft)`, `border-radius: var(--tt-radius-pill)`,
`color: var(--tt-text-secondary)`, `font-variant-numeric: tabular-nums`. Added
30 Sep 2026 from the onboarding flow's knowledge-source cards. Distinct from
Button's `count` prop (an unread-count badge glued to a button) — this is a
standalone stat, sitting inside a card, not attached to a control.

### Summary card, number tile, attention chip

Specced 4 Nov 2026 from the V3 Twin and Roleplay sessions pages; none is a `.tsx` component yet.
**Block order, top to bottom: summary cards → number tiles → "Needs a look" → rule → table title →
table.** No other rules.

- **Summary cards.** Two in a row: equal width, 16px gap, 108px tall, `--tt-radius-md`, 1px
  `--tt-card-border`, the standard Card shadow, padding 20×24. **A number and its count share one
  text baseline**, the count pushed to the card's right edge, 24px in from it. Wording is "21
  sessions rated" — never "of 27".
  - *Average help score:* 66px three-star illustration (large `gold-300` star centre, two smaller
    `gold-500`, three faint rays in tertiary at 35%, no outline); title with a 14px star icon (15px
    secondary); "4.3 / 5" at 32/600 with the "/ 5" muted 15px.
  - *Paid by learners:* 64px ring on the left (see Progress), title with a coin icon, **amount at
    24/600 under the title**, count ("1 extension" / "6 purchases") at the right edge on the amount's
    baseline; the ring's tooltip states the share ("1 of 5 sessions paid for an extension" / "6 of 27
    sessions were purchased").
- **Number tiles.** Four in one row, 16px gap, radius 12, padding 16×20, no border, no dividers,
  fill `--tt-surface-sunken` (Open, ⚑5). Label = 14px icon + 14px secondary; value 32/600
  `tabular-nums`. **No note line under the number.** The ↗ button is a 28px ghost, **vertically
  centred on the number**, secondary colour (hover → primary text + `--tt-surface` fill). It goes where
  the number leads: Issues reported filters the table and scrolls to it; Questions (Twin) → Inbox ›
  Ask Olga; Sessions / Average score scroll to the table; **minutes tiles have no arrow.** Twin tiles:
  Sessions · Twin minutes · Questions · Issues reported. Roleplay tiles: Sessions · Practice minutes ·
  Average score (`71 / 100`) · Issues reported.
- **Attention chips** ("Needs a look": 14px eye icon + 13/500 label). 32px pills, 13/500, trailing ↗
  14px: **Reported problems** `--tt-danger-subtle` / `--tt-danger`; **Low ratings** caution-subtle
  (Roleplay: "12 sessions with a low scorecard or a client that didn't feel real" — low is score < 70
  or rating ≤ 3); **Questions sent to you** info-subtle (Twin only). Order is priority. Pressing a chip
  toggles a table filter and shows a "Show all" text link; hover and pressed = a 1px inset outline in
  the chip's own colour.
- **Icons.** Outline, 24 viewBox, stroke 2, round caps and joins, `currentColor`. Metric and card
  titles carry a 14px icon in secondary colour (speech bubbles · clock · help-circle · star · flag ·
  coin · target · eye); check (`M5 12l5 5l10-10`, stroke 2.4) 16px `--tt-success` for "what this
  covers" lists; redirect ↗ (`M7 17 17 7M8 7h9v9`) 14px in chips, 16px inside a 28px ghost button.
  14px is off the 12 / 16 / 20 / 24 icon scale — Open (§13).

### Selectable tile / radio-card

Added 2 Oct 2026, from the onboarding flow's voice and avatar-look pickers —
two more single-select patterns, alongside the checkbox-card (Card grid, above,
for *multi*-select) and `secondary`'s own selected-state rules. All three
communicate "chosen" without changing the element's footprint, so a selection
never reflows its neighbours.

**Radio-card** (e.g. "Your voice" vs. "Voice from library") — a `--tt-radius-md`
(16px) card, same size whichever way it is set:

```css
.c-radio-card {
  border-radius: var(--tt-radius-md); border: 1px solid var(--tt-border); padding: var(--tt-space-4);
}
.c-radio-card.is-selected { border-color: var(--tt-text-tertiary); } /* #E9E9E9 -> ~#919191, no width change */
```

The radio control itself is a filled circle with a **white ring punched out by an
inset shadow**, not a separate dot element:

```css
.c-radio {
  width: 18px; height: 18px; border-radius: var(--tt-radius-pill);
  border: 1.5px solid var(--tt-cta-strong);
}
.c-radio:checked {
  background: var(--tt-cta-strong);
  box-shadow: inset 0 0 0 4px var(--tt-surface); /* the "dot" is negative space, not a drawn shape */
}
```

**Image-tile** (e.g. the avatar "look" picker) — a 128×148px tile,
`border-radius: var(--tt-radius-md)` (12px), `object-fit: cover`. Selection is a
**2px inset ring**, not a border, for the same reflow-proof reason:

```css
.c-tile { border-radius: var(--tt-radius-md); overflow: hidden; }
.c-tile img { width: 100%; height: 100%; object-fit: cover; }
.c-tile.is-selected { box-shadow: inset 0 0 0 2px var(--tt-text-primary); }
```

Three techniques, one rule in common: **a selected state never changes an
element's box model.** A checkbox fills, a radio-card's border darkens by a
colour step (never a width step), and a tile gets an inset ring (never an
outset border) — any of the three would shift a neighbour by the stroke width
if drawn as a normal border instead.

### Table

Numbers are right-aligned Figtree with `tabular-nums` — a score of 8 and a score of 78
have to line up on the same right edge or the column stops being scannable. The
header sticks at `--tt-z-raised`. Wide tables scroll in their own
`overflow-x:auto` container, never the page. Row hover changes the **surface**, not
the border — shifting borders make a long table twitch. An empty cell gets an em
dash; blank reads as a rendering bug.

**Table title row and the list-as-table card — 4 Nov 2026, title row proposed (⚑6).** Above a table: an overline title (`TWIN SESSIONS`, 11/500, `.09em` — the system overline, tertiary) with a 1px `--tt-border` rule above it (20px padding below the rule) and 12px between title and table — the only rule in a summary block, none around tiles. The V3 sessions-table header band is `--tt-surface-sunken`, same as the system Table; only the Assign list's sticky header is `--tt-fill-soft` (Open, ⚑5). A selectable list is **one table card** — `--tt-surface`, 1px `--tt-border`, radius 12, max-height 340px scrolling inside — whose first row is the sticky header `[select-all] | Learner | Minutes | Access until` (select 38 · learner flex · minutes 96 · date 150, 12px gaps, 16px row padding; "Learner" starts at the name text, not the avatar). Select-all is an 18px checkbox with an indeterminate state, ticking every visible, not-yet-assigned row and respecting search and the cohort filter. **Roleplay table:** Name · Scenario · Score · Weakest area · Rating; date and length under the name in secondary grey; no progress bar, no "when" column; a reported issue is a chip under the rating.

### Link

**Underlined, always.** Colour alone cannot distinguish a link from its surrounding
text — WCAG 1.4.1, and the rule people break most. Use `--tt-primary-ink`, which
clears AA as text; raw `--tt-primary` does not. The underline *thickens* on hover
rather than the colour changing, so the affordance survives for anyone who cannot
see the shift.

```css
.link { color:var(--tt-primary-ink); text-decoration:underline;
        text-underline-offset:2px; text-decoration-thickness:1px; }
.link:hover { text-decoration-thickness:2px; }
```

### Divider

`border-top: var(--tt-border-thin) solid var(--tt-border)`. Use one only where
whitespace has already failed — most things read better with more space and no line.

### AI disclosure marker

Any surface where a twin speaks carries a persistent, non-dismissible marker naming
the trainer: **"AI twin of Priya Raman"**. Neutral colours only, never orange — this
is a statement of fact, not a call to action. "AI assistant" is not a disclosure.

### Source chips

Twin answers cite below the answer, never inline. Three states: **Grounded** (green
dot, names the file), **Inferred** (blue dot), **Outside this trainer's material** —
the only one with `--tt-caution` colour and a visible border, because it's the only
one where the trainer's name is attached to something that isn't theirs.

### V3 measured component values and verdicts

Every component in `ONBOARDING-V3-DESIGN-SPEC.md` §3, 4 Nov 2026, set against this document. **Nothing marked Differs or Conflicts has been applied** — those rows record what the prototype does so the decision can be made with the numbers in front of you (§13). **New** rows are specced here as measured and can be built from.

| Component | V3 measured value | Verdict | Against the system |
|---|---|---|---|
| Button | pill 999; **h36** / padding `0 16` / 14/20 600; small h32 / `0 12` / 13px; 16px icons, gap 8 | Matches | Re-measured 5 Nov 2026: the build moved `md` from 40 to 36 and now matches D109. |
| Icon button | 32×32, ghost or secondary (⋮ menu, close) | Matches | The `sm` icon button is 32 in both; `md` is 36 (D109). |
| Secondary button | white, no border, button-ring shadow `0 0 1px rgba(0,0,0,.4), 0 1px 1px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.04)`; hover 3% darker; active `scale(.98)` | Differs | System secondary is `--color-fill-soft` + `--shadow-secondary`. |
| Disabled button | `--color-fill-soft` bg, `--color-text-muted` text, `not-allowed` | Differs | System uses 45% opacity. |
| Primary action colour | Every primary / `btn--strong` button is orange (`--color-primary`, white label); one per view or dialog | Matches | Adopted 4 Nov 2026 (D107). The V3 `EXPERIMENT` block is now the spec, not a deviation. |
| Header “Create new” | label weight 500 (every other CTA is 600) | Differs | Kept as measured (D108): the one named exception to “CTA labels are 600”. |
| Text input | 40px, radius 8, white, 0.5px `--color-border-field`, padding `0 12`, 14/20; hover / focus `--color-border-interactive` | Differs | System fields are now 36px (D110); V3 measured 40. |
| Textarea | same, padding 12, line-height 23, min-height 72 (builder 72–90), vertically resizable | New |  |
| Field | label 13/20 500 secondary, 8px above; help 13/20 tertiary below; “(Optional)” in tertiary | Matches | 4px when the label is a caption (first hand-off). |
| Checkbox | 18×18, radius 4, 0.5px border; checked = `--color-cta-strong` + white tick; header supports indeterminate | Matches |  |
| Switch | 40×24 pill; on = `--color-primary`, knob white | Conflicts | System switch is 40×22 and `cta-strong` (selection is neutral). |
| Segmented control | track `--color-surface-sunken`, radius 999, padding 4, height 40; items `6 16`, 14/20 500; selected = white + elevation-1 + **primary** text | Differs | System: padding 3, 13px, text-primary, orange icon. |
| Selectable chip | 32px, `6 16`, 13/20 500, `--color-fill-soft`; selected = white + 1.5px **orange** inset ring | Conflicts | Selection is neutral (29 Sep 2026). |
| Dropdown listbox | white, padding 8, gap 2, radius 12, 1px card-border, elevation-2; option padding 8, radius 8, 14px | Differs | System listbox: radius 8, padding 4. |
| Search | 36px pill, white, elevation-1, magnifier left; Assign-popup search open by default | New |  |
| Badge | pill, padding `4 12`, 12/16 500, gap 6; tone-subtle bg + tone text | Differs | System badge text is 11.5px. |
| Tag | pill, padding `2 10`, 12/20 500 secondary, white + 1px `--color-border`; behaviour tags carry a ✓ | New |  |
| Info pill | 24px, padding `0 12`, `--color-info` on `--color-info-subtle`, no border, 14px | New | Used for “Answers only on”. |
| Letter avatar | circle, 600 first letter; 22px (11px text) · 28px (12px) · 32px (13px); five tones cycling by name: success / info / caution / danger / orange | Conflicts | Locked rule: avatars are neutral (29 Sep 2026). |
| Learner stack | 28px circles, 12/12 600, one neutral grey, 2px white ring, −8px overlap, “+N” 11/500 | New | Neutral — consistent with the locked rule. |
| Stars | five 16px, gap 2; 5 = success, 4 = caution, ≤3 = danger; empty = `--color-border`; label under (“Very helpful”) | New | Never colour alone — the label carries the word. |
| Credit pill | 32px pill, padding `0 16`, `--color-fill-soft`, 13px secondary, 18px ring before it (caution at ≥ 90%) | New |  |
| Nav / tab count badge | 18px orange circle, white 11/18 500 | Conflicts | D04. |
| Base card | white, 1px `--color-card-border`, **radius 16**, elevation-1; padding on sections | Differs | System Card is radius 12. |
| Scenario / agent card | 288×338, 3-up, gap 16; art 168px (135° three-stop pastel gradient, radius 16 16 0 0) with a quote bubble (white, radius 12, padding 12, 13/18); body `14 16 0`: who 12/16 500 UPPERCASE +.06em → title 15/22 600 → copy 13/20 tertiary; footer learner stack + ⋮ | New | Pastel gradients are hard-coded hex. |
| Persona card | radius 16, 4-up gap 16; 72px photo + name 20/28 600 + location 14/20 + grey role chip; label BEHAVIOUR + ✓ tags; edit icon top-right on hover (32px, `--color-fill-soft`) | New |  |
| Settings card | 215×112, radius 12, 1px card-border, elevation-1, padding `20 16`, gap 12; centred 36×36 icon tile (radius 8, soft tint) over a 15/22 500 name | New |  |
| Usage tile | radius 12, `--color-surface-sunken`, padding 16, 3-up gap 12 | New | Same dark-theme caveat as number tiles (⚑5). |
| Source card | radius 12, padding 16, logo + name + count pill + ✕ | New |  |
| TeeTee prompt card | `--color-fill-soft`, radius 23, padding 24, orange wave canvas behind; title 15/22 600, 30px white suggestion pills, white ask box (radius 16, 1px border, padding `8 8 8 18`, mic + orange send) | New | Decorative orange. |
| Setup / builder card | radius 24; setup padding 32, width 480 / 600 / 640 / 680 by content, no border, elevation-2; builder body padding 24 | Matches | Large surfaces take `--radius-xl` (D112). Built as `Card variant="setup"`. |
| Table | radius 16, 1px card-border, elevation-1; header `--color-surface-sunken`, 12/20 500 UPPERCASE +.04em, padding `10 20`; rows 14/20, padding `14 20`, gap 12, top border 1px `--color-border`; clickable rows end in ↗ 16px with an inset focus ring | Differs | System Table: radius 12, 10px header at +.09em, padding 12/16. |
| Inbox request list | bordered box radius 16, padding `12 16`, rows = tone badge + sentence | New |  |
| Usage bar (accounts) | 4px track `--color-fill-soft`, dark fill (caution when low), “168 used · 72 left” 12px under | New |  |
| Meter (home usage) | 8px pill `--color-fill-soft`, `--color-primary` fill | Matches | System progress is a primary fill (6px). |
| Toast | bottom-right 20px, width min(380px, 100vw−32px), radius 16, padding 12, gap 12; **tone-subtle** bg, 36px solid-tone circle icon with a white glyph, 14/20 600 title + optional 13/18, ✕ 28px, 3px countdown bar; in `380ms cubic-bezier(.2,.9,.3,1.2)` | Differs | System toast: raised surface, elevation-3, 16px tone icon. |
| Dialog surface | `dialog.issue-dialog > .confirm-card`: radius 24, **4px white border**, gradient `#F7F7F7 → #FFFFFF`, shadow `0 4px 8px rgba(30,28,25,.2)`, padding 24, gap 20; close = 32px ghost at top 12 / right 12; title 20/28 600, sub 14/20 secondary; footer right-aligned, gap 8 | Differs | System Modal: radius 16, raised surface, elevation-3. Radius is the open question (§10). |
| Transcript | grey `--color-fill-soft` field; white bubbles, radius 12, padding 12, elevation-1, name 13/500 above text | New |  |
| Ask box | white, radius 16, 1px `--color-border`, elevation-1; textarea left, mic + orange 32px round send right | New | Orange send is part of the orange experiment. |
| Inbox menu | 232px left menu; items 40px pill, 14/20; **selected = `--color-primary-subtle` bg + 600 text**, orange count badge | Conflicts | Selected rows take `--color-fill-soft`. |
| Stepper | 24px circles; current = `--color-text-primary` fill + white 13/500, others grey; labels 14/20 500; done = check | Matches | Matches the 30 Sep stepper measurement. |
| Pastel art tiles | `linear-gradient(135deg, A 0%, B 50%, C 100%)`, ten hard-coded sets (e.g. `#a8c6ec → #d2c3e8 → #f1c6d7`) | Conflicts | Not tokens. Promote or mark illustration-only. |
| Motion | 140ms hover / press · 200ms rail width, selection · 280ms side panel · 320ms entrances; press = `scale(.98)` on secondary buttons | Differs | System: 140 / 200 / 320 tokens; 280 is not one. |
| Avatar ring | `0 0 0 2px #fff` (stacks) / `0 0 0 3px #fff, 0 1px 6px rgba(0,0,0,.12)` (photos) | New | Not elevation tokens. |
| Icon sizes | 12 (chevron glyph 12×7) · 14 (inline / title, ↗ in chips) · 16 · 18 (tile badges) · 20 (brand mark) · 36 (tile icons) | Differs | System scale is 12 / 16 / 20 / 24. |

**Type roles measured in V3** (Figtree; 400 / 500 / 600 only; body 15/23):

| Role | Size / line · weight · tracking | Verdict |
|---|---|---|
| Overline | 11/12–16 · 500 · +.09em UPPERCASE · tertiary | Matches |
| Column header | 12/20 · 500 · +.04em UPPERCASE · secondary | New |
| Caption / help | 13/18–20 · 400 · tertiary | Matches |
| Small control text | 13/20 · 500–600 | Matches |
| Body small | 14/20 · 400 (500 for names) | New |
| Row / card title | 15/22 · 600 · −.015em | New |
| Dialog / inbox title | 16/24 – 17/24 · 600 · −.01em | New |
| Page header title | 16/22 · 600 · −.015em | New |
| Section heading | 18/24 · 600 · −.015em (usage-card title 18/26) | New |
| Dialog / step title | 20/28 · 600 · −.01em | Matches |
| Metric number | 28/36 – 32/35 · 600 · tabular | New |
| Amount | 24 · 600 · −.01em | Matches |
| Italic quote | 14–15 · 400 italic · secondary, in “double quotes” | New |

---

### Sign-in flow, measured — 5 Nov 2026

Build my twin to Twin is ready, read live at 1024×768 (`?r=978`, signed out). **Verdict** as in the table above. **Across all 21 screens walked** (11 in-app, 10 sign-in states): every filled button is the orange primary at `md` 36 / 14 / 600 or `sm` 32 / 13 / 600, pill-shaped, with the header “Create new” at 500 (D108); secondary is white with the button ring, ghost is transparent. **Colour:** 40 distinct colour uses, 33 resolve exactly to a token; the other 7 are alpha blends (ink at 72%, white at 78%, fill-soft at 50%, black at 28% behind the call clock, ink at 16% for the credit bar), the selected voice border (a grey between `--color-border-field` and `--color-border-interactive`) and one button's inherited UA black that is never shown. **Cards:** radius 12 (Card, found rows, type banner) and 16 (usage, persona, rps, features, inbox, voice rows) both appear; the setup card is 24. The 12-versus-16 split is the open item already in §13.

| Part | Measured value | Verdict | Against the system |
|---|---|---|---|
| Setup card | 480 / 600 / 640 / 680, radius 24, padding 32, no border, elevation-2 | Matches | D112. Widths are new. |
| Stepper | Your link · Finding you · Persona; 24px circle, 13/500; current = `--color-text-primary` fill with a white numeral; each step 32 tall, 12 gap inside, 24 between | Matches | Same as the 30 Sep stepper, placed above the card. |
| Title and sub | 20/28 600; sub 14/20 secondary, 360 measure on the choice cards | Matches |  |
| Field and select | label 13/20 500 secondary, 8 above; control **40px**, padding `0 12`, 14/20, radius 8, 0.5px `--color-border-field`; select adds 40 right padding for the chevron | Differs | System fields are 36 (D110). The build still has 40; the system stands. |
| Multi-select | trigger is a field (40); menu padding 8, radius 8, elevation-2; options 36 tall, radius 4, 13/500 secondary, checkbox + label | Differs | System resting height 36; listbox radius 8, padding 4. |
| Primary action | full-width `md` (36) primary, one per card; ghost Back beside it on the list page | Matches | D107. |
| Choice buttons | two full-width secondary `md`, 16px icon + label, “Or” between (13/23 `--color-text-muted`, centred) | New | Secondary is white with the button ring here (the Differs row above). |
| Found-profile row | Card (radius 12, card-border, elevation-1), 88 tall; head padding 16, gap 12; 40px round photo or a 40px `--color-fill-soft` icon tile; title 14/20 600 + handle 14/20 400, meta under; trailing tick + ghost `sm` “Not me”; unticked rows dim | New |  |
| Add-a-link box | `--color-fill-soft`, radius 16, padding 12, gap 12; 40px input + secondary Add | New | Radius 16 against the usual 12. |
| List foot | hairline `--color-border` above, padding-top 20, gap 12; Back ghost, Looks right primary | New |  |
| Voice row | 58 tall, radius 16, padding `12 16`, 1px `--color-border`, gap 12; name 15/22 600; Play (ghost `sm`, icon) + Select (secondary `sm`) | New | Radius 16 inside a 24 card; found rows are 12. |
| Picked-voice row | 80 tall, radius 16, padding 16, gap 16, 1px border darkens when selected; icon, name, “0:28 · Recorded”, Play (secondary `sm`) | New | Selection is neutral, as the rule says. |
| Recording | “Recording · 0:12” 13/23 secondary; waveform 32 tall, 3px gap; full-width primary Stop | New |  |
| Call: video card | 320×320, radius 32, `--color-fill-soft`, elevation-2; name pill 26 tall, white, padding `4 10`, 13/18 500, 1px ring; clock chip on a 28% black scrim | Differs | Radius 32 is off the scale (24 is the largest). |
| Call: controls | three 54×54 round buttons: mic and chat = `--color-fill-soft` + 1px `--color-border`; hang-up = solid `--color-danger`, white glyph | Differs | System `md` icon button is 36; destructive is outlined, never filled. Open. |
| “What we found about you” | setup card 600, padding 32; ghost icon `sm` collapse; section titles 14/20 600; grey summary box; tag chips with a tick | Differs | Chips 34 tall (`6 12`, 13/20 500, `--color-fill-soft`, 1px `--color-border`) against the 32 selectable chip. |
| Add-knowledge dialog | the shared dialog: radius 24, 4px white border, `0 4px 8px` shadow | Differs | The open dialog question in §10. |
| Twin is ready | setup card 640; 160px portrait; title 20/28 600; sub 14 secondary; grey three-row summary (tick or ! , label, right value; “Not added yet” in caution); caption “You spoke for 0:00”; primary Add knowledge + secondary Speak again, centred | New |  |

## 9. Logo

3×3 grid of 147-unit cells on a 441 viewBox, corners and fillets at r=20. Inherits
`currentColor`, so it reverses over imagery with no second asset.

```html
<svg viewBox="0 0 441 441" width="28" height="28" fill="currentColor" aria-hidden="true">
  <path d="M20 0L421 0A20 20 0 0 1 441 20L441 127A20 20 0 0 1 421 147L314 147A20 20 0 0 0 294 167L294 274A20 20 0 0 0 314 294L421 294A20 20 0 0 1 441 314L441 421A20 20 0 0 1 421 441L314 441A20 20 0 0 1 294 421L294 314A20 20 0 0 0 274 294L167 294A20 20 0 0 0 147 314L147 421A20 20 0 0 1 127 441L20 441A20 20 0 0 1 0 421L0 314A20 20 0 0 1 20 294L127 294A20 20 0 0 0 147 274L147 167A20 20 0 0 0 127 147L20 147A20 20 0 0 1 0 127L0 20A20 20 0 0 1 20 0Z"/>
</svg>
```

Lockup = mark + "TrainerTwin" in Figtree, −0.022em, at 1.16× the mark's height, gap
0.3× the mark. Minimums: lockup 104px wide, mark alone 20px. Below 104px use the mark,
never a squeezed wordmark. Clear space = the mark's own height on all four sides. On
canvas the mark is `--tt-primary`; over photography it reverses to `--tt-canvas`, with
no tinting, ever.

---

## 10. Writing

Active voice. Name things as people recognise them, not how the system is built. A
control says exactly what happens ("Publish" → toast "Published"). Errors explain what
broke and how to fix it — no apologies. In scorecards, "needs work" copy names the fix,
not the failure: this is the moment the product is either a coach or a critic.

**"Roleplay" is one word everywhere** — nav, titles, buttons, toasts — never "Role play" (4 Nov 2026). Buttons: **Save and Assign**, **Send by email**, **Respond**, **Show all**. Labels: Access until · Minutes · Your answer · Learner's report · Reported turn. Titles: Average help score · Paid by learners · Needs a look · Questions your twin couldn't answer · Reports raised · Answers only on. Counts: "21 sessions rated" (no "of 27"), "6 purchases", "1 extension". **If a stat note repeats its label, delete it.**

**States and defaults (D105).** A disabled primary is grey with muted text, enabled only when the form is valid — never hidden. Defaults are pre-filled and visible; required choices read “Select”. A destructive action opens a confirm dialog with Cancel + the action. Toasts: one sentence, past tense, no exclamation mark. Quotes “double” (‘single’ inside), apostrophes typographic. Dates: “Today, 8:15 am”, “Yesterday, 4:20 pm”, “Monday, 9:18 am”, “30 Nov 2026”. More buttons: Create and publish · Try roleplay · Save as draft · Invite learners · Calibrate · Copy link.

---

## 11. If you're building a Claude Artifact

- The three-state theming in §4 is exactly what Artifacts need. Use it as-is.
- Write page content only — no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags.
- Put the Google Fonts `<link>` and the whole `<style>` block inline at the top.
- Google Fonts is the **only** external host Artifacts allow. Figtree and Noto
  Serif both qualify. Mono is not a webfont any more — it resolves to the
  reader's own OS monospace, so it needs no link at all. Everything else must
  be inlined or a data URI.
- `body` must set an explicit `background: var(--tt-canvas)`. A transparent body
  borrows the host page's colour and breaks in one theme.
- Wide content (tables, code) needs `overflow-x: auto` on its own container.

---

## 12. What is NOT in the system yet

Don't hunt for these — they haven't been built. If you need one, say so rather than
inventing it, because an invented component becomes a permanent inconsistency.

**Components not built:** file dropzone · accordion · audio waveform · charts ·
date & time picker · breadcrumb · bottom sheet · popover · combobox /
autocomplete · full-page setup card · auth/sign-up modal · empty-state gate card ·
stat pill · dashed add card · per-page header (icon + title + filter + search +
action, §7) · nav rail with an active-item state · summary card · number tile · attention chip · side panel (drawer) · respond and assign dialogs · calendar popover (all specced in §8, 4 Nov 2026). None of these are real `.tsx`
components yet — each has a spec (this file) or a live reference (a foundations
demo, or the onboarding prototype checked 30 Sep 2026) to build from, so build
from that rather than inventing your own shape.

**Pagination was built 10 Sep 2026** (`Pagination.tsx`) — no longer belongs on the
list above; it was left on it by mistake.

**Theme switcher, resolved 29 Sep 2026** — an icon-only toggle exists as a real,
working pattern in `foundations.html`'s own rail header (light ↔ dark, no
"system" button; see §1) and independently matches an onboarding prototype's own
toggle checked 30 Sep 2026. Still not a `.tsx` product component, but no longer
spec-less — build `ThemeToggle.tsx` from either reference rather than inventing a
new shape.

**Stepper / wizard, resolved 30 Sep 2026** — the onboarding prototype's own
"1 Find you · 2 Knowledge & training style · 3 Twin presence" row is a real,
working numbered-step pattern, measured directly: a 24px circle
(`--tt-radius-pill`), 13px/500 numeral. The **current** step measured
`#FEFEFF` fill with `#1C1B1B` text in dark theme — `--tt-text-primary`'s exact
value used as a background, one value off pure white/`--tt-cta-strong`
(`#FFFFFF`). Close enough that it reads as the same "opposite polarity of the
canvas" move `strong` makes; close enough that it's probably worth just using
`--tt-cta-strong`/`--tt-on-cta-strong` outright when this gets built, rather
than inventing a fourth near-white value with no name. Steps not yet reached
are `--tt-surface-raised` fill with `--tt-text-secondary` — a notch above the
surface it sits on, not `--tt-fill-soft` as an earlier draft of this entry
guessed before it was actually measured. Still not a `.tsx` component, but no
longer spec-less.

**Marketing and blog:** there are **no prose styles** — a blog post rendered today
would be unstyled, because no `h1`–`h4`, `ul`, `ol`, `blockquote`, `pre`, `figure` or
`hr` rules exist. There is also no hero, feature grid, pricing table, testimonial
card, FAQ, or footer.

**No conventions yet for:** dates, durations, numbers, or ₹ currency formatting.

**Audio waveform** is already specified in the Session Shell decision (§1,
Product patterns) but not built. Segmented control *is* built — §8 — and has
been since before this list was last checked; it was stale.

---

## 13. Still open

Genuinely undecided. Don't treat any of these as settled.

- **Motion expressiveness** — held at "purposeful". Revisit once there is a working
  session to feel; this is the one thing that cannot be judged from a spec.
- **Illustration direction** — three were proposed (Grid, Paper, Echo) with a
  recommendation of Grid as the base borrowing Paper's human marks. Nothing chosen,
  so there is no illustration style to follow yet.
- **Voice identity** — the twin speaks in two of three modes and has no spec at all:
  pace, warmth, whether it clones the trainer's actual voice, and how it sounds
  saying "I don't know." Arguably a bigger brand surface than colour.
- **Whether the glyph stands alone** at favicon and avatar-fallback size, or needs a
  drawn monogram.
- **Onboarding V3 — chat bubbles (⚑1, ⚑2).** The twin's calibration reply is tinted orange
  (`--tt-primary-subtle` fill, `--tt-orange-100` inset line) and Olga's is the dark CTA pair. D04's exclusions
  (selection, state, tints — reversed only for buttons by D107) and D03 (energy lives in motion, not colour) still apply — so either the tint is a
  fourth allowed moment ("the twin's voice") or it becomes a white bubble with the avatar only. Olga's
  dark bubble has precedent in the landing page's trainer bubble but needs writing down as allowed for
  "the signed-in trainer's own message". Neither radius (20px, 6px tail) is on the scale. **Not applied.**
- **Onboarding V3 — selects and date fields: radius (⚑3).** The system dropdown is already `--tt-radius-sm`, so the page-header filter follows the existing rule (§8). Still open: the V3 build mixes the two — page-header filters are 8px, but the agent-detail date range, the credit pill and the date field in popups are pills. Recommended: every select, filter and date field takes `--tt-radius-sm`; the credit pill stays a pill (a status chip, not a control).
- **Onboarding V3 — green ring (⚑4).** `--tt-success` fills the "Paid by learners" ring; confirm green is
  allowed as a data colour, else the ring goes neutral.
- **Onboarding V3 — number-tile fill (⚑5).** Number and usage tiles use `--tt-surface-sunken`, which in dark theme (`#0A0A0A`) is darker than the canvas (`#141414`), so tiles recess (confirmed on foundations). Decide, or add a `--tt-tile` token. **The table-header half is resolved:** sessions-table headers are `surface-sunken`, matching the system Table; only the Assign list's sticky header is `fill-soft`.
- **Onboarding V3 — table title row (⚑6).** Overline with a rule above; adopt it or keep titles in the card
  header.
- **Onboarding V3 — off-scale values.** The hand-offs say they introduced no new colour, radius or spacing — true for those, not for these. *Type:* 32 / 28 / 18 / 16 / 15⁄22 and a 14px body-small, 12⁄20 column headers (scale: 24 / 20 / 17 / 15 / 13 / 11); the metric unit is 15px in one card, 18/500 in another. Overline tracking is **not** a conflict — measured `.09em`, same as the system. *Icons:* 14, 18 and 36px (scale: 12 / 16 / 20 / 24) and the 12×7 chevron. *Radius:* cards, tables and agent / persona cards at 16 vs Card 12; dialogs and the side panel at 24 vs Modal 16; chat bubbles 20 / 6. *Motion:* slide-in `.28s cubic-bezier(.2,.8,.2,1)`, toast `380ms cubic-bezier(.2,.9,.3,1.2)`, a 1.2s recording pulse vs `--tt-duration-slow` 320ms, `--tt-ease-enter`, the 1.6s `c-pulse`. *Shadow:* the button ring, dialog `0 4px 8px` + a 4px white border, toast and avatar rings are not elevation tokens. *Colour:* gold in an in-product illustration and ten hard-coded pastel gradients. Each needs a token or a snap to the scale.
- **What is left of `strong`, and the cost of an orange default (D107).** The dark `strong` variant is still defined (`--tt-cta-strong` drives checkboxes and the calendar day) but nothing in product now uses it as a button — keep it for a second filled button, merge it into `primary`, or retire it. Marketing CTAs are not covered by V3 and still use `strong`. And the standing accessibility item gets wider: white on orange is 3.13:1 at 13–14px and every view now carries one, not three per flow. Options, none chosen: `primary` alone keeps `lg` in product; a near-black label at `sm`/`md`; or accept it as a documented exception.
- **Selection and state in orange.** The V3 build uses brand colour for the switch "on" state, a selected chip's 1.5px inset ring, the selected inbox menu item (`--tt-primary-subtle`), the selected segmented item's text, and the nav / tab count badge. The system says selection is neutral and a count pill is not orange. Each is a one-line decision; none is applied.
- **Letter-avatar colour — the two V3 sources disagree.** The first hand-off says one neutral grey; the measured spec says five tones cycling by name (success, info, caution, danger, orange). The 29 Sep rule is neutral. D101 covers only the first-letter rule; the learner stack is neutral in both.
- **V3 surfaces that differ from the system's.** Card and table radius 16 (Card is 12); the shared dialog (radius 24, 4px white border, `#F7F7F7 → #FFFFFF` gradient, `0 4px 8px` shadow) vs Modal (16, raised surface, elevation-3); the toast; the secondary button (white with a button-ring shadow vs `fill-soft`); disabled as grey fill vs 45% opacity; the 32px icon button vs 40; the listbox radius 12 vs 8. See the Differs rows in §8.
- **The 896px library page vs the `16 32 32` full-bleed padding (D102).** Both documented; say which a dashboard uses.
- **V3 build gaps.** The Assign popup's columns overlap at 390px; data tables overflow horizontally on phones; builder tabs still show 22px number badges although numbers were once asked to go; ten pastel art gradients, the toast icon white and the avatar tints are hard-coded; **dark theme was not audited** — every V3 value here is light only.
- **Sign-in form fields are 40px (D110 says 36).** The build's `.input`, native select, multi-select trigger and the add-a-link input still measure 40 while its buttons were moved to 36. The system's 36 stands; the build needs to follow, or the system moves back.
- **The call room.** The hang-up control is a solid red 54px circle (the system's destructive button is outlined), the video card's radius is 32 (off the scale) and the round controls are 54 against a 36 `md` icon button. Adopt as a named exception for the call room, or pull them onto the scale.
- **Chips at 34px and rows at radius 16.** The tag chips measure 34 (selectable chip 32). The voice row, picked-voice row and add-a-link box are radius 16 inside a radius-24 card while the found-profile rows are 12. Pick one row radius.
- **Class naming drift in the build.** `btn--strong` there is the orange primary. Anyone porting by class name would get the black variant; port by look, or rename in the build.
- **`tokens.css` still says "Role play"** in a comment (the `--tt-radius-xl` note). It is generated into §4's
  token block, so it was left alone; fix it at the source.

## 14. Reconciling the marketing page

Written 10 Sep 2026 for the thread that owns `/TrainerTwin_home`. Everything here
is measured, not estimated — counts come from `src/components/landing/**/*.tsx`
plus `src/app/TrainerTwin_home/landing.css`.

**The finding.** 700 colour literals across 273 unique values, and **zero**
`--tt-*` references in the landing components. But they sort into three piles that
need completely different handling:

| Pile | Values | Uses | What to do |
|---|---|---|---|
| Within a JND of a system token | 186 | **479** | Mechanical swap. No visible change. |
| Genuinely different | 63 | 130 | Look at each; most are near-neighbours that drifted further. |
| Third-party / mock colours | 13 | 58 | **Leave them.** See below. |

Nobody chose `#242424` over `#2B2B2B` — they are indistinguishable. That first
pile is entropy, not design.

### 14.1 Architecture — derive, don't replace

The landing keeps its own vocabulary. Every value with a system equivalent points
at the system:

```css
/* src/app/TrainerTwin_home/landing.css — the .tt-landing block */
--l-brand:      var(--tt-primary);        /* was #fe5900 — one digit off the brand */
--l-btn:        var(--tt-cta-strong);     /* was #202020 */
--l-ink:        var(--tt-text-primary);   /* was #16181c */
--l-ink-nav:    var(--tt-text-secondary);
--l-ink-body:   var(--tt-text-tertiary);
--l-line:       var(--tt-border);         /* was #ebebeb */
--l-paper:      var(--tt-surface);
--l-paper-soft: var(--tt-surface-sunken); /* was #f8f8f8 */

/* these now exist in the system — it adopted the landing's own values */
--l-night:       var(--tt-night);
--l-night-deep:  var(--tt-night-deep);
--l-hero-panel:  var(--tt-night-panel);
--l-ink-onnight:   var(--tt-on-night);
--l-ink-onnight-2: var(--tt-on-night-2);
--l-ink-onnight-3: var(--tt-on-night-3);   /* was #7A7E86 = 4.41:1, FAILED AA */
--l-line-night:  var(--tt-line-night);

/* two decisions, not swaps */
--l-live:   var(--tt-available);   /* green stays, but as its own token */
--l-accent: var(--tt-primary);     /* #ec3013 is DROPPED — see below */
```

**`--l-accent` is removed, not remapped.** `#EC3013` measures **1.24:1 against
`--tt-danger`** — the same colour as an error — and the whole palette was built
around keeping the red band free. It appears in `Hero.tsx` (the 34px badge),
`WebEmbedPanel.tsx` (×2), and `session/studio.tsx`. Those become `--tt-primary`.

### 14.2 The mechanical swaps

Top 30 by usage; the full set is 186 values / 479 uses. Δ is perceptual distance —
anything under 40 is below a just-noticeable difference at UI sizes.

| Literal | Uses | Replace with | Token value | Δ |
|---|---|---|---|---|
| `#242424` | 69 | `var(--tt-neutral-800)` | `#2B2B2B` | 21 |
| `#1B1D21` | 31 | `var(--tt-neutral-900)` | `#1C1B1B` | 11 |
| `#5A6069` | 21 | `var(--tt-neutral-600)` | `#656565` | 21 |
| `#9AA0AA` | 18 | `var(--tt-neutral-400)` | `#A3A3A3` | 19 |
| `#1B1F27` | 6 | `var(--tt-neutral-900)` | `#1C1B1B` | 22 |
| `#FF8A1E` | 6 | `var(--tt-orange-400)` | `#FF7E33` | 38 |
| `#3A4250` | 6 | `var(--tt-neutral-700)` | `#4A4A4A` | 31 |
| `#DFDFDF` | 6 | `var(--tt-neutral-200)` | `#E9E9E9` | 30 |
| `#131722` | 6 | `var(--tt-night)` | `#111215` | 25 |
| `#3F4650` | 5 | `var(--tt-neutral-700)` | `#4A4A4A` | 21 |
| `#E6E9EF` | 5 | `var(--tt-neutral-200)` | `#E9E9E9` | 10 |
| `#7F858F` | 5 | `var(--tt-neutral-500)` | `#828282` | 22 |
| `#E5ECF2` | 5 | `var(--tt-neutral-200)` | `#E9E9E9` | 16 |
| `#111318` | 5 | `var(--tt-neutral-950)` | `#141414` | 8 |
| `#E8F6EC` | 5 | `var(--tt-green-50)` | `#EDF9F1` | 13 |
| `#F1EBFD` | 5 | `var(--tt-blue-50)` | `#EEF4FF` | 19 |
| `#B6BDCC` | 5 | `var(--tt-neutral-300)` | `#C4C4C4` | 30 |
| `#E4E9FB` | 4 | `var(--tt-blue-100)` | `#DBE7FF` | 17 |
| `#F4F8FC` | 4 | `var(--tt-neutral-50)` | `#F7F7F7` | 9 |
| `#9AA0A8` | 4 | `var(--tt-neutral-400)` | `#A3A3A3` | 18 |
| `#0F1420` | 4 | `var(--tt-night)` | `#111215` | 19 |
| `#5B6272` | 4 | `var(--tt-neutral-600)` | `#656565` | 27 |
| `#E9F1FD` | 4 | `var(--tt-blue-50)` | `#EEF4FF` | 11 |
| `#E5E2E1` | 3 | `var(--tt-neutral-200)` | `#E9E9E9` | 19 |
| `#989898` | 3 | `var(--tt-neutral-400)` | `#A3A3A3` | 33 |
| `#FE5900` | 3 | `var(--tt-orange-500)` | `#FF5A00` | 3 |
| `#C8C4C2` | 3 | `var(--tt-neutral-300)` | `#C4C4C4` | 7 |
| `#2F7FF0` | 3 | `var(--tt-blue-500)` | `#3B7DE8` | 23 |
| `#1C2C4A` | 3 | `var(--tt-blue-900)` | `#12305F` | 39 |
| `#ECEFF3` | 3 | `var(--tt-neutral-100)` | `#F0F0F0` | 8 |

### 14.3 Look at these individually

| Literal | Uses | Replace with | Token value | Δ |
|---|---|---|---|---|
| `#6B7280` | 18 | `var(--tt-neutral-500)` | `#828282` | 48 |
| `#8B8F96` | 11 | `var(--tt-neutral-500)` | `#828282` | 43 |
| `#8A8F98` | 6 | `var(--tt-neutral-500)` | `#828282` | 45 |
| `#14213D` | 4 | `var(--tt-neutral-800)` | `#2B2B2B` | 50 |
| `#EC3013` | 4 | `var(--tt-orange-600)` | `#E04D00` | 67 |
| `#BAD3F8` | 4 | `var(--tt-blue-100)` | `#DBE7FF` | 69 |
| `#0A7A3C` | 4 | `var(--tt-green-700)` | `#1A6739` | 45 |
| `#6F737A` | 3 | `var(--tt-neutral-500)` | `#828282` | 44 |
| `#E5342B` | 3 | `var(--tt-red-600)` | `#CE2C33` | 44 |
| `#D4C800` | 3 | `var(--tt-gold-500)` | `#C99A08` | 95 |
| `#1A7AE8` | 3 | `var(--tt-blue-500)` | `#3B7DE8` | 49 |
| `#8A93A3` | 3 | `var(--tt-neutral-400)` | `#A3A3A3` | 51 |

Most are neutrals that drifted further than the rest. `#6B7280` and `#8B8F96`
(29 uses combined) are Tailwind's default greys leaking in — those should be
`--tt-neutral-500`.

### 14.4 Leave these alone

`#4A2CE0` ×7 · `#0AAD51` ×6 · `#2F6FE0` ×6 · `#CDBCF6` ×6 · `#F5169C` ×5 · `#B3E0C1` ×5 · `#7A6A2A` ×4 · `#1E3A8A` ×4 · `#22C55E` ×4 · `#1474EA` ×4 · `#5B5BEA` ×3 · `#4F46E5` ×2 · `#E8F0FF` ×2

These are **third-party product colours inside the illustration mocks** —
`RolePlayPanel`, `LessonScene`, `DoubtChatScene`, `SharePanel`. Decision D05 keeps
category colours out of the system deliberately. They are correct as literals; the
only change is to mark them so they stop reading as drift:

```tsx
/** MOCK — third-party brand colour, deliberately outside the palette (D05). */
const MOCK_VIOLET = "#4a2ce0";
```

### 14.5 Buttons

One semantic button — the dark CTA — is implemented four times:

| Where | Now | Becomes |
|---|---|---|
| `SiteHeader` "Early access" | h34 r8 w600 | `<Button variant="strong" size="sm">` |
| `InviteForm` "Request an invite" | h44 r8 **w700** white | `<Button variant="strong" size="md">` |
| `primitives.tsx` CTA | h48 **r10** w600 | `<Button variant="strong" size="lg">` |
| `BuildYourTwin` "Request early demo →" | h54 **r12** w600 | `<Button variant="strong" size="xl" trailingIcon={<Arrow/>}>` |

`size="xl"` and `trailingIcon` were **added to the system for this** — the landing
needed a 54px marketing CTA that didn't exist. The arrow moves out of the label
string, where a screen reader currently reads it aloud.

`strong` is theme- and night-aware, so the white-on-night footer variant comes free
instead of being a fifth hand-roll.

### 14.6 Space

**Over half of all spacing is off the 4pt grid** — 119 off vs 107 on for padding,
64 vs 64 for gap.

| Value | Uses | Becomes |
|---|---|---|
| `10px` | **86** | `--tt-space-2` (8) or `--tt-space-3` (12) |
| `7px` | 14 | `--tt-space-2` |
| `6px` | 12 | `--tt-space-2` |
| `2px` | 12 | `--tt-space-1` |
| `18px` | 8 | `--tt-space-4` (16) or `space-5` (20) |

**Do not add a 10px step to the system.** A 4pt scale with a 10 in it is not a 4pt
scale. Where 8 feels tight and 12 feels loose, the cause is almost always
line-height, not padding.

### 14.7 Radius and type

Radii off the 4 / 8 / 12 / 16 / 24 / pill scale: **`r14`** and **`r20`** on two card
treatments, plus `r9` and `r10`. Snap to the nearest step.

Font sizes: `14.5px`, `25.52px`, `30px`, `36px`, `18px` are strays — snap to the
scale. **`16px` (×152) and `14px` (×29) are now correct** — they are
`marketing/body` and `marketing/nav`, added to §3 for exactly this.

### 14.8 Night bands

The landing hand-built its dark sections. The system now has them (§7): put
`.tt-night` on the section and every component inside works untouched — text,
borders and `strong` all re-point. Replace the hand-written overrides with the
scope.

### 14.9 Two things to fix that aren't drift

1. **`--l-ink-onnight-3` was `#7A7E86`** — 4.41:1 on `--l-night`, which **fails AA**
   by a hair. The system's adopted value uses neutral-500 at 4.67:1.
2. **No `<noscript>` fallback for `.l-reveal`.** Reduced-motion is handled well,
   but with JS off every revealed section stays at `opacity: 0`. One rule fixes it.

### 14.10 What NOT to change

The landing does several things better than the product system did, and they were
adopted **into** the system rather than flattened:

- **`--l-u`, the container-query unit** — `calc(100cqi / var(--l-design))`. Keep it
  exactly as it is; the fractional values inside `.l-stage` are correct by design
  and must not be snapped to the 4pt grid.
- **The reveal/parallax motion system**, including dropping `will-change` after
  play and the reduced-motion guard.
- **The blueprint grid surfaces** — `--l-grid-step`, `.l-grid-light/dark`.
- **The night palette**, now `--tt-night-*`.

---
