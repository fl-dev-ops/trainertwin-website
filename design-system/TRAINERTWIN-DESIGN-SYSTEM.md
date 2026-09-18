# TrainerTwin Design System — Build Instructions

> **Version 9.4 · 10 Sep 2026 · fingerprint `12bfd584`**
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
2. **Two font weights: 400 and 600.** Never 700, never `font-bold`. 400 for
   everything read; 600 for everything titled, labelled, or clickable.
3. **Every screen sits in the app shell** (§7) — sidebar on `--tt-surface-sunken`,
   content on `--tt-canvas`, page header carrying exactly **one** action. §7 has a
   fully assembled screen to copy the proportions from.
4. **Cards in a grid** are the default content shape (§8). Padding lives on the
   card's sections, never the card, or a table can't run edge to edge inside one.
5. **One `primary` action per view.** Everything else is `strong` (the everyday
   action), `secondary` (the soft grey utility), or `ghost`. Five orange buttons on
   a screen means none of them is the one to press.
6. **Never write a hex.** Every colour is a `var(--tt-*)`; both themes then work
   without you doing anything. And never use a status *text* colour as a border —
   borders take the `--tt-*-border` family.
7. **Six accepted exceptions exist** (§1) and are deliberate. Do not "fix" them.
8. **Check §12 before inventing a component.** Several things are specced but not
   built, and an invented component becomes a permanent inconsistency.
9. **The product is light-only for now.** `data-theme="light"` is stamped in the
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
| **One brand tier, not two** | Trainer ownership is expressed through identity assets — photo, name, voice, in-session logo — not a per-trainer accent colour. Orange therefore means one thing everywhere: *the platform is acting*. This is what keeps the marketplace legible when a learner follows six trainers. |
| **Neutrals are cool grey — REVERSED 10 Sep 2026** | This ramp was warm olive-brown, chosen so a true grey would not read cold beside `#FF5A00`. It was reversed after the roleplay-library Figma was measured and found to use near-neutral greys: rather than let every built screen drift from the file, the system moved. Four steps are sampled from that render — canvas `#FEFEFF`, sunken `#F7F7F7`, border `#E9E9E9`, text `#1C1B1B` — and the mid-tones were tuned to hold the margins the warm ramp had, so nothing regressed crossing over. |
| **Category colours stay OUT of the system** | The roleplay screen's six scenario icons use Tailwind 300-level pastels. They are page-level decoration, defined in the screen, not tokens. Accepted risk: the next screen may invent its own six and drift. If that happens, promote them to a documented categorical palette with dark-theme counterparts. |
| **Every value sampled from a Figma gets diffed against what is built** | Three times during the roleplay-library pass a colour was measured out of the file and then not wired through — the sidebar fill, the active pill fill, and the active label. All three were sitting in the measurement output. Sampling is not the check; comparing the sample to the built result is. |
| **Figma and the system are reconciled case by case** | Neither is blanket-authoritative. Each divergence gets measured, reported with its cost, and ruled on individually — which is how the cool-grey switch and the category-colour exclusion were both decided. |
| **The mark is parametric, not traced** | A 3×3 grid of 147-unit cells with every corner and fillet at r=20, verified against the supplied artwork to ~1px. It stays crisp at 20px, takes its colour from the token, and needs no second asset for dark mode. |

### Typography

| Decision | Why |
|---|---|
| **Noto Serif display · Figtree UI · JetBrains Mono data** | A serif signals *curriculum, authority, expertise* rather than "another AI product" — which is precisely the asset TrainerTwin sells. Both faces also have a real multilingual path, so English-now / multilingual-later is handled on both halves of the pairing. |
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
| **Two weights: 400 regular, 600 semibold** | Added 10 Sep 2026. Weight was the one type axis never tokenised — families were, sizes were, weight was not — so each component picked its own literal and the system drifted to four (800 wordmark and metrics, 700 buttons and labels, 600 titles, 500 mono meta). Screens came out heavier than intended because nothing stated an intent. Two steps is enough: Figtree 400 and 600 separate cleanly at 13px, and a third step only gives drift a place to hide. |
| **`b`/`strong` reset to 600 globally** | The UA default is `bold` = 700, outside the scale. It silently overrode correctly-specified components wherever content used emphasis — the largest single source of stray 700s. Reset once at the root rather than per component. |
| **Serif is titles only, above 20px** | It is the voice of authorship, not of interface. Below 20px it stops being legible at UI density. |
| **Text bars, not lettering, in illustration** | Keeps artwork language-agnostic, which matters once the product is localised. |

### Accessibility — six accepted exceptions

**This is the section most likely to be "fixed" by someone acting in good faith.
Please don't.** Each of these is a recorded decision, not a defect.

| What | Measures | Why it stands |
|---|---|---|
| White on primary orange | **3.13:1** — fails AA for normal text | Deliberate brand decision, 9 Sep 2026. It *is* compliant at large sizes (≥18.66px bold), which is exactly why the `lg` button exists at 19px. Near-black would have measured 6.33:1 at every size. |
| `--tt-border-field` at rest | **1.74:1** — below the 3:1 of WCAG 1.4.11 | Deliberate, 9 Sep 2026. `#828282` is the only step in the neutral ramp that clears 3:1, so "lighter" and "compliant" cannot both hold. The border firms to `--tt-border-interactive` on hover and focus, and that is what carries the affordance. |
| `--tt-text-muted` | **3.81:1** — fails AA for normal text | Legal by restriction: placeholders and disabled controls only, both exempt under WCAG 1.4.3. Anything a user is meant to *read* takes `--tt-text-tertiary`. |
| Status borders (`--tt-*-border`) | ~1.5–2.1:1 — below the 3:1 of SC 1.4.11 | Deliberate, 10 Sep 2026. Correct rather than tolerated: an alert is not a control, and severity is carried by the icon, heading and fill, never the border alone. `--tt-live` is exempt — its background is transparent, so its border is the only thing defining the pill, and it keeps full strength. |
| Badge borders (`--tt-*-badge-border`) | ~1.2–1.6:1 — lighter still | Added 11 Sep 2026. A badge is a small pill, often several to a row; the alert-strength border read as heavy repeated at that scale. Sits 55% closer to the badge's own subtle fill than the alert border does. `--tt-live` keeps the same exemption. |

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
| **Brand orange is rationed to one action per view** | If five rows each carry an orange button, none of them reads as the one to press. `strong` is the everyday action; `primary` is the directed moment. |
| **`strong` is one variant, not two** | Black in light theme, white in dark, flipped by the token layer — so it is always the opposite polarity of its canvas and cannot be shipped invisible. Nobody has to remember which colour belongs to which theme. |
| **Destructive is outlined, never filled** | A filled destructive button carries the same visual weight as the primary action, which is how people delete a trainer's uploaded material by mistake. It also avoids a theme fork, since `--tt-danger` inverts across themes. |
| **Icon-only buttons always carry an `aria-label`** | Without one a screen reader announces "button" and nothing else — the most common accessibility failure in a toolbar. The icon is `aria-hidden`; it is decoration once the label exists. |
| **A segmented control changes the mode of one thing; tabs navigate between different things** | Getting this backwards is why some products have tabs that don't change the page and switchers that do. Two to four segments, short parallel labels, and something is always selected. |
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
| **8px is the radius floor** | The 4px step was retired 9 Sep 2026; `--tt-radius-xs` is now an alias of `sm`. |
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

---

## 2. Non-negotiable rules

1. **The primary button is WHITE on `--tt-primary`.** This is a deliberate brand
   decision, signed off 9 Sep 2026, and it is knowingly non-compliant: white on
   `#FF5A00` is 3.13:1, which fails WCAG AA for normal text. It passes AA only at
   large sizes (≥18.66px bold or ≥24px), so **use the `lg` button — 19px bold — for
   hero and primary-path CTAs**, where it is compliant. Do not "fix" this to black.
2. **Orange means "the platform is acting" — and it is rationed.** Focus rings, active
   nav, and the *one* directed action in view. Never for errors, recording, or live
   state. **Most buttons are NOT orange**: use `variant="strong"` (black in light
   theme, white in dark) for the everyday actions that sit alongside others like
   them. If five rows each carry an orange button, none of them reads as the one to
   press. See §8 for the full decision table.
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
5. **8px is the radius floor.** The 4px step was retired — `--tt-radius-xs` is now an
   alias of `sm`.
6. **`--tt-text-muted` fails AA for normal text (3.81:1).** Placeholder text and
   disabled controls only — both exempt. Anything meant to be read takes
   `--tt-text-tertiary`.
7. **No raw hex in markup.** Every colour comes from a `var(--tt-*)` token.
8. **Serif is titles only.** Noto Serif above 20px. Never body, labels, or buttons.
9. **Both themes must work.** Never define a colour only inside a media query or
   `[data-theme]` block — see §4.
10. **Two font weights: 400 and 600. Never 700.** Weight is tokenised
    (`--tt-weight-regular` / `--tt-weight-semibold`); writing `font-weight: 700`,
    `font-bold`, or `font-extrabold` puts you outside the system. 400 for everything
    read, 600 for everything titled, labelled, or clickable.
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
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=Noto+Serif:wght@400;600&family=JetBrains+Mono:wght@400;600&display=swap">
```

| Role | Family | Use for | Never for |
|---|---|---|---|
| Display | **Noto Serif** | Titles above 20px | Body, labels, buttons |
| UI | **Figtree** | Everything operable, all body copy | — |
| Mono | **JetBrains Mono** | Scores, durations, timestamps, token names. Always `tabular-nums`. | Prose |

**Then declare the three families as tokens** — `--tt-font-*` is referenced
throughout §4b and §8, and in the Next.js app it is supplied by
`src/styles/fonts.ts`. Outside that app (an artifact, a prototype, a one-off page)
nothing defines it, and every `font-family` silently falls back to Times:

```css
:root {
  --tt-font-display: "Noto Serif", Georgia, "Times New Roman", serif;
  --tt-font-ui:      "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --tt-font-mono:    "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
```

Weight is **not** set here — it belongs to the token layer. Figtree and JetBrains
Mono load as variable fonts, so both steps cost nothing extra.

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
| `product/title-l` | Noto Serif 600 | 24 / 30 |
| `product/title-m` | Figtree 600 | 20 / 26 |
| `product/title-s` | Figtree 600 | 17 / 24 |
| `marketing/body` | Figtree 400 | 16 / 26 — **default on marketing pages** |
| `marketing/nav` | Figtree 400 | 14 / 20 |
| `product/body` | Figtree 400 | 15 / 23 — **default** |
| `product/body-s` | Figtree 400 | 13 / 20 |
| `product/overline` | Figtree 600 | 11 / 12, +9%, uppercase |
| `data/mono` | JetBrains Mono 400 | 13 / 20, tabular-nums |

Running text stops at 65 characters per line.

**Marketing body is 16px; product body is 15px. Both are correct** — a marketing
paragraph is read at arm's length in a long scroll, a product table cell at a
glance in a dense grid. Added 10 Sep 2026 after the landing page was found using
16px in 152 places against a scale that had no step for it. The scale was missing
a step; the page was not wrong.

### Weight — two steps, and only two

| Token | Value | Use for |
|---|---|---|
| `--tt-weight-regular` | **400** | Body, help text, table cells, transcripts, placeholders — everything *read* |
| `--tt-weight-semibold` | **600** | Headings, field labels, button labels, badges, overlines, emphasis — everything *titled, labelled, or clickable* |

Role aliases, so intent is stated rather than inferred:
`--tt-weight-body` · `--tt-weight-title` · `--tt-weight-label` · `--tt-weight-cta`.

**700 is out of the scale.** At 13–15px it thickens Figtree's stems enough to close
up the counters without reading as more important than 600 — it costs legibility and
buys no hierarchy. There is no 500 either: with 400 and 600 sitting this far apart,
a third step only gives drift somewhere to hide.

```css
/* REQUIRED. Every user-agent stylesheet sets b/strong to `bold` = 700, which is
   outside this scale. Without this reset, every emphasised run, every <strong> in
   a stat row and every <b> in a twin's answer renders 700 regardless of how the
   surrounding component is specified. This was the single largest source of stray
   700s before 10 Sep 2026. */
b, strong { font-weight: var(--tt-weight-semibold); }
```

Never hard-code a weight. If you are writing `font-weight: 700` or `font-bold`,
you are outside the system.

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

  /* Type weight — TWO STEPS, added 10 Sep 2026.
     This scale did not exist until now, and its absence was the bug: families
     were tokenised but weight never was, so every component picked its own
     literal and the system drifted to four of them (800 wordmark / 800 metrics,
     700 buttons and labels, 600 titles, 500 mono meta). Screens built from the
     system came out heavier than the system intended, because nothing in the
     system stated an intent.

     Two steps, and only two. Figtree at 600 already separates cleanly from 400
     at 13px, so a third step buys nothing and gives drift somewhere to hide.
     700 is now OUT OF THE SCALE — at 13-15px it thickens the stems enough to
     close up Figtree's counters without reading as more important than 600. */
  --tt-weight-regular:  400;
  --tt-weight-semibold: 600;

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
  /* The 4px step was retired 9 Sep 2026 — 8px is the floor across the system.
     `xs` is kept as an alias so existing usages keep working, but it is no longer
     a distinct step: the scale is effectively 8 / 12 / 16 / pill. That means the
     "a chip takes one radius step below its card" rule now starts at 8 inside 12. */
  --tt-radius-xs: 8px;    /* alias of sm — chips, inputs, source citations */
  --tt-radius-sm: 8px;    /* buttons, small cards, form fields */
  --tt-radius-md: 12px;   /* panels, Studio source cards */
  --tt-radius-lg: 16px;   /* modals, the session frame */
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
  --tt-night:        #15171A;   /* the editorial dark section */
  --tt-night-deep:   #131313;   /* footer, one step deeper */
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
  --tt-info-border:    #8FB6F5;
  --tt-caution-border: #E9C86A;
  --tt-danger-border:  #F58F93;

  /* BADGE borders — added 11 Sep 2026. A badge is a small pill, usually several
     to a row (a table cell, a filter list); the alert-strength border at
     ~1.5-2.1:1 that is correct on a full-width alert reads as heavy at that
     scale, repeated. This is the same idea taken one step further: 55% toward
     the badge's own subtle fill rather than the fill's neighbour in the ramp,
     so severity keeps riding on the icon, fill and text (SC 1.4.1), and the
     border is barely there rather than merely soft. */
  --tt-primary-badge-border: #FFD0B2;
  --tt-success-badge-border: #BCE7CD;
  --tt-info-badge-border:    #C3D8FA;
  --tt-caution-badge-border: #F4E1AD;
  --tt-danger-badge-border:  #FAC5C7;

  /* Weight by role. These are what components should reference — the role names
     are the rule, so "labels are semibold" is one line to change rather than a
     grep. All four resolve to two values; that is the point. */
  --tt-weight-body:  var(--tt-weight-regular);   /* body, help text, table cells */
  --tt-weight-title: var(--tt-weight-semibold);  /* every heading, display or ui */
  --tt-weight-label: var(--tt-weight-semibold);  /* field labels, eyebrows, badges */
  --tt-weight-cta:   var(--tt-weight-semibold);  /* every button label */

  /* Light elevates with shadow. */
  /* Each step roughly doubles the ambient layer's offset, blur and alpha, so the
     jump between two levels is actually perceptible. The first version of this
     scale moved 5% -> 7% alpha between 1 and 2, which is a step on paper and
     invisible on a cream canvas — a card lifting on hover did nothing at all. */
  --tt-elevation-1: 0 1px 2px rgba(30, 28, 25, .06);
  --tt-elevation-2: 0 2px 4px rgb(30 28 25 / 0.07), 0 8px 20px rgb(30 28 25 / 0.11);
  --tt-elevation-3: 0 4px 8px rgb(30 28 25 / 0.09), 0 16px 40px rgb(30 28 25 / 0.16);
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

    --tt-fill-soft:       #2B2B2B;   /* neutral-800 — lighter than the surface */
  --tt-fill-soft-hover: #4A4A4A;   /* neutral-700 */

  --tt-border:             #2B2B2B;
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
  --tt-info-border:    #1F4C9B;
  --tt-caution-border: #7F5F00;
  --tt-danger-border:  #A81F26;

  --tt-primary-badge-border: #732600;
  --tt-success-badge-border: #13502C;
  --tt-info-badge-border:    #183D7A;
  --tt-caution-badge-border: #594200;
  --tt-danger-badge-border:  #86181D;
  --tt-available: #7FD1A0;      /* green-300, 10.12:1 on the dark canvas */

    /* Dark elevates with LIGHTNESS, not shadow. Shadows on a near-black canvas
       are invisible; a hairline plus a step up the neutral ramp is the only
       signal that reads. */
    --tt-elevation-1: 0 0 0 1px rgb(253 251 247 / 0.05);
    --tt-elevation-2: 0 0 0 1px rgb(253 251 247 / 0.07), 0 4px 16px rgb(0 0 0 / 0.5);
    --tt-elevation-3: 0 0 0 1px rgb(253 251 247 / 0.09), 0 12px 32px rgb(0 0 0 / 0.6);
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

  --tt-border:             #2B2B2B;
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
  --tt-info-border:    #1F4C9B;
  --tt-caution-border: #7F5F00;
  --tt-danger-border:  #A81F26;

  --tt-primary-badge-border: #732600;
  --tt-success-badge-border: #13502C;
  --tt-info-badge-border:    #183D7A;
  --tt-caution-badge-border: #594200;
  --tt-danger-badge-border:  #86181D;
  --tt-available: #7FD1A0;      /* green-300, 10.12:1 on the dark canvas */

  --tt-elevation-1: 0 0 0 1px rgb(253 251 247 / 0.05);
  --tt-elevation-2: 0 0 0 1px rgb(253 251 247 / 0.07), 0 4px 16px rgb(0 0 0 / 0.5);
  --tt-elevation-3: 0 0 0 1px rgb(253 251 247 / 0.09), 0 12px 32px rgb(0 0 0 / 0.6);
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
   in exactly the places you did not style. */
b, strong { font-weight: var(--tt-weight-semibold); }

/* Headings are 600, never 700. Serif only above 20px. */
h1, h2, h3, h4, h5, h6 { font-weight: var(--tt-weight-semibold); margin: 0; }
h1, h2 { font-family: var(--tt-font-display), Georgia, serif; letter-spacing: -.015em; }

/* One focus treatment everywhere. Brand orange clears 3:1 in both themes, but only
   just in light — so 2px ring at 2px offset, never 1px flush. */
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: var(--tt-border-focus) solid var(--tt-focus);
  outline-offset: 2px;
  border-radius: var(--tt-radius-xs);
}

/* Anything counted takes mono + tabular figures, so columns align. */
.tabular { font-family: var(--tt-font-mono), ui-monospace, monospace; font-variant-numeric: tabular-nums; }

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
  .filter(e => !['400','600'].includes(getComputedStyle(e).fontWeight) && e.textContent.trim())
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
| `--tt-primary` | Primary buttons, focus, active nav |
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

**Radius** — **8px is the floor**; the 4px step was retired 9 Sep 2026, so `xs` is an
alias of `sm`. The scale is effectively 8 / 12 (panels) / 16 (modals) / pill. Radii
still step *with* the element: a chip inside a card is 8 inside 12 — never the same,
never larger.

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

**The active nav item is a white pill on `--tt-surface` with `--tt-elevation-1`**,
lifted out of the sunken rail. It is the same figure/ground move the segmented
control's selected segment makes, and it is measured: the Figma's pill is `#FEFEFF`
with a `#ECECEC` shadow edge beneath it. Its icon takes `--tt-primary`; its label
takes `--tt-primary-ink`, because the Figma's `#FF5A00` label is 3.03:1 on white
while a graphic only needs 3:1 and clears at 3.13:1. The page header carries
**one** action; if a screen needs two, the second is `secondary`. Below `md` the
sidebar becomes a drawer — a 148px rail on a 375px phone leaves nothing for content.

### A screen, assembled

The shell is the frame; this is what goes in it. Copy the *proportions* from here —
almost every spacing mistake only becomes visible once the pieces sit together.

```
┌─ app shell ─────────────────────────────────────────────────────────┐
│ sidebar   │ ┌─ page header ──────────────────────────────────────┐  │
│ (sunken)  │ │ eyebrow (mono, 10px, .1em)                         │  │
│           │ │ H1  Noto Serif 600 / 20px      [Preview] [Publish] │  │ ← strong, not primary
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

- **One filled brand button per screen.** Above it is *Save changes* — the directed
  action inside the form. *Publish twin* is the page-level action and takes `strong`;
  everything else is `secondary` or `ghost`. Three orange buttons means none is the one.
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
Sizes: `sm` 32px/13px · `md` 40px/14px · `lg` 50px/19px.

| Variant | Fill | Reach for it when |
|---|---|---|
| `primary` | brand orange, white label | The action is **directed and singular** — a dialog's confirm, the one action in an empty state, or the step that moves a flow forward: **Next, Continue, Save, Publish, Submit**. |
| `strong` | **black in light theme, white in dark** | The **everyday action**, always on screen, sitting alongside others like it. Unmistakably the button without spending the brand colour. |
| `secondary` | **soft grey fill**, no border | The utility button — toolbars, Help/Docs, notification bells. Things that sit together and should not each shout. Also the **alternative** beside a primary or strong button. |
| `ghost` | transparent | Dismissals, tertiary actions, or an action repeated on every row of a long list. |
| `danger` | transparent, danger border | Destructive. **Outlined, never filled.** |

**The rule that matters:** brand orange is spent on the single most important action
in view, not on every action that happens to be important. A checklist where every
row has an orange button has no primary action at all.

`strong` is one variant, not two — the fill and label flip with the theme, so it is
always the opposite polarity of its canvas and cannot be shipped invisible. At
14.16:1 in light and 19.80:1 in dark it is the most legible button in the system, and the only
filled one with no accessibility tradeoff attached.

```css
.btn {
  display:inline-flex; align-items:center; justify-content:center; gap:var(--tt-space-2);
  font-family:var(--tt-font-ui); font-weight:var(--tt-weight-cta); white-space:nowrap; cursor:pointer;
  border:var(--tt-border-thin) solid transparent; border-radius:var(--tt-radius-sm);
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
  height:40px; padding:0 var(--tt-space-3); width:100%;
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
required." Checkboxes, radios and switches use the same 0.5px border; checked state
fills with `--tt-primary` and marks in `--tt-on-primary`.

### Button — icons, icon-only, and counts

`leadingIcon` takes an `--tt-icon-sm` (16px) glyph. `iconOnly` makes the button
square at every size — 32 / 40 / 50 — so a toolbar keeps its rhythm instead of
going oblong. `count` renders an unread pill beside the icon.

**An icon-only button always carries an `aria-label`.** Without one a screen
reader announces "button" and nothing else — the most common accessibility failure
in a toolbar. The icon itself is `aria-hidden`; it is decoration once the label
exists.

```tsx
<Button variant="secondary" leadingIcon={<Bell/>} count={1} aria-label="Notifications, 1 unread" />
<Button variant="secondary" leadingIcon={<Help/>}>Help</Button>
<Button variant="secondary" iconOnly leadingIcon={<Dots/>} aria-label="More options" />
```

The count pill is the **smallest instance of the white-on-orange exception** — at
10.5px it is far below the large-text threshold. It works because a one- or
two-digit number is a shape you recognise rather than text you read. If it ever
carries something longer, switch its label to near-black (6.33:1).

### Segmented control

Switches the **mode or representation of one thing** that stays put. Tabs, by
contrast, navigate between **different bodies of content**. Getting this wrong is
why some products have tabs that don't change the page and switchers that do.

The selected segment is a raised pill on `--tt-surface` with `--tt-elevation-1` —
the only part of the control sitting on the surface colour, which is what makes it
read as lifted out of the trough. Its icon takes brand orange; the rest stay muted,
so the eye lands on the current mode rather than a row of colour.

- **Two to four segments.** Beyond four you wanted tabs, or a select.
- **Short, parallel labels** — "Voice / Text / Video", never "Voice / Send a message".
- **Something is always selected.** There is no empty state; if nothing can be
  chosen yet, it is the wrong control.
- **Dividers vanish beside the selected pill**, whose own edge already separates it.
- **Never for destructive or committing actions** — it is a toggle, not a task.

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

Sizes: `sm` 32 · default 40 · `lg` 48. Affixes handle units and adornments — a `min`
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

### Date field

**Orange marks today. The dark CTA marks the selection.** Two different facts, so they
get two different treatments — and a day number is ~13px, far below the size at which
white-on-orange stays legible. Making "selected" orange would have put the least
readable pairing in the system on the one number people actually have to read.

- **Always keep the text input.** Typing "17 sep" beats four taps through a grid, and
  it is the only route that works well with a screen reader.
- **A disabled day needs a reason** in the hint; a greyed date with no explanation
  reads as a bug.
- Weekday initials, two letters, in `--tt-font-mono` so the columns align.

### Badges

Pill, 11.5px semibold, subtle background + matching border + matching text. Variants:
neutral, brand, success, info, caution, danger, live. **Never colour alone — every
badge carries a word.** `live` is the only animated one (pulsing dot) and the only
user of `--tt-live`.

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

### Menu, tooltip, tabs

Menu: `--tt-surface-raised`, `--tt-elevation-2`, 13.5px items, destructive item last
and below a divider. Tooltip: inverted — `--tt-text-primary` background,
`--tt-canvas` text. Tooltips explain; they never hold the only copy of something
required. Tabs: 2px bottom border in `--tt-primary` on the selected tab, label in
`--tt-primary-ink`.

### Progress, skeleton, empty state

Ingest shows **real progress per source**, never an indeterminate bar — uploading a
trainer's life's work is slow and anxious. Skeletons hold the shape of what's coming
so layout doesn't jump; pulse opacity rather than shimmer, so it survives both themes.
Empty states get a dashed `--tt-border-interactive` container, a title, one line of
copy, and exactly one action.

### Card

The default container — almost every product screen is cards in a grid.
**Padding lives on the sections, never on the card itself**, so a card can hold a
full-bleed image or an edge-to-edge table without fighting a padding it never asked
for. `overflow:hidden` is what makes the radius clip that content.

```css
.card {
  display:flex; flex-direction:column; overflow:hidden;
  background:var(--tt-surface); border-radius:var(--tt-radius-md);   /* 12 */
  border:var(--tt-border-thin) solid var(--tt-border);
  box-shadow:var(--tt-elevation-1);          /* every card, by default */
}
.card--raised { box-shadow:var(--tt-elevation-2); }
.card-head { padding:var(--tt-space-4) var(--tt-space-5); border-bottom:var(--tt-border-thin) solid var(--tt-border); }
.card-body { flex:1; padding:var(--tt-space-5); }
.card-foot { padding:var(--tt-space-3) var(--tt-space-5); border-top:var(--tt-border-thin) solid var(--tt-border); background:var(--tt-surface-sunken); display:flex; justify-content:flex-end; gap:var(--tt-space-2); }
```

Radius 12 is one step above the 8 used by controls inside it.

**Every card carries `--tt-elevation-1` by default**, so it reads as an object
sitting on the canvas rather than a region drawn on it. `raised` steps up to
elevation-2 for something genuinely floating — not every card, or the hierarchy
flattens. `interactive` lifts to elevation-2 on hover — **elevation alone carries that
hover**, with no border highlight and no surface shift, since a card that lifts
should not simultaneously read as recessed. It **contains no other control**, or
you have nested hit areas.

Remember that in dark theme elevation is a *hairline of light*, not a shadow —
shadows are invisible on a near-black canvas, so `--tt-elevation-1` resolves to a
1px ring rather than a drop shadow. The card looks correct in both themes without
a fork.

### Table

Numbers are right-aligned, mono, `tabular-nums` — a score of 8 and a score of 78
have to line up on the same right edge or the column stops being scannable. The
header sticks at `--tt-z-raised`. Wide tables scroll in their own
`overflow-x:auto` container, never the page. Row hover changes the **surface**, not
the border — shifting borders make a long table twitch. An empty cell gets an em
dash; blank reads as a rendering bug.

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

---

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

---

## 11. If you're building a Claude Artifact

- The three-state theming in §4 is exactly what Artifacts need. Use it as-is.
- Write page content only — no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags.
- Put the Google Fonts `<link>` and the whole `<style>` block inline at the top.
- Google Fonts is the **only** external host Artifacts allow. All three families
  qualify. Everything else must be inlined or a data URI.
- `body` must set an explicit `background: var(--tt-canvas)`. A transparent body
  borrows the host page's colour and breaks in one theme.
- Wide content (tables, code) needs `overflow-x: auto` on its own container.

---

## 12. What is NOT in the system yet

Don't hunt for these — they haven't been built. If you need one, say so rather than
inventing it, because an invented component becomes a permanent inconsistency.

**Components not built:** file dropzone · segmented control · accordion · stepper /
wizard · audio waveform · charts · date & time picker · breadcrumb · drawer /
bottom sheet · popover · combobox / autocomplete · **theme switcher** — dark
exists at the token layer and in Storybook's toolbar, but nothing lets a visitor
choose it; see §1, Interaction.

**Pagination was built 10 Sep 2026** (`Pagination.tsx`) — no longer belongs on the
list above; it was left on it by mistake.

**Marketing and blog:** there are **no prose styles** — a blog post rendered today
would be unstyled, because no `h1`–`h4`, `ul`, `ol`, `blockquote`, `pre`, `figure` or
`hr` rules exist. There is also no hero, feature grid, pricing table, testimonial
card, FAQ, or footer.

**No conventions yet for:** dates, durations, numbers, or ₹ currency formatting.

Two of the not-built items — **segmented control** and **audio waveform** — are
already specified in the Session Shell decision (§1, Product patterns). The spec
exists; the component does not.

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
| `#131722` | 6 | `var(--tt-night)` | `#15171A` | 14 |
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
| `#0F1420` | 4 | `var(--tt-night)` | `#15171A` | 15 |
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

Radii off the 8 / 12 / 16 / pill scale: **`r14`** and **`r20`** on two card
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
