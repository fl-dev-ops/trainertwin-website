# TrainerTwin — Decision record

> **59 decisions · 11 Sep 2026 · fingerprint `48de434d`**
> 
> Generated from §1 of `TRAINERTWIN-DESIGN-SYSTEM.md` (v9.4, `12bfd584`),
> so the two cannot disagree. Regenerate rather than editing by hand.

This is the *why* file. No token values, no component code, no usage rules —
those live in the design system document. What it carries is the reasoning, so
that a year from now "why is this like this?" has an answer that isn't archaeology.

**Changing a Locked decision is a system-level change, not a tweak.**

---

## How to read this

| Status | Meaning |
|---|---|
| **Locked** | Settled. Downstream work derives from it. |
| **Reversed** | Decided one way, then changed. Both states recorded — the reason is the useful part. |
| **Accepted risk** | Known cost, taken deliberately, written down. |
| **Assumed** | Never explicitly agreed. Flag if wrong. |
| **Open** | Genuinely undecided. |

Dates are when the decision was made. `brief` means it came from the original brief.

---

## Brand

| # | Decision | Status | Date | Why |
|---|---|---|---|---|
| **D01** | **Personality: Warm Precision** | Locked | brief | Precision is structural — grid, restrained chrome, honest empty states — and carries the Studio, where a trainer stakes their reputation. Warmth is human-layer — type, copy, avatars, easing — and carries the Session, where a nervous learner is practising. |
| **D02** | **Energy lives in motion, never in colour or density** | Locked | brief | The brand spends nothing on decorative colour, so liveliness has to come from responsiveness: thinking states, streaming text, turn handoff. |
| **D03** | **One brand tier, not two** | Locked | brief | Trainer ownership is expressed through identity assets — photo, name, voice, in-session logo — not a per-trainer accent colour. Orange therefore means one thing everywhere: *the platform is acting*. This is what keeps the marketplace legible when a learner follows six trainers. |
| **D04** | **Neutrals are cool grey** | Reversed | 10 Sep 2026 | This ramp was warm olive-brown, chosen so a true grey would not read cold beside `#FF5A00`. It was reversed after the roleplay-library Figma was measured and found to use near-neutral greys: rather than let every built screen drift from the file, the system moved. Four steps are sampled from that render — canvas `#FEFEFF`, sunken `#F7F7F7`, border `#E9E9E9`, text `#1C1B1B` — and the mid-tones were tuned to hold the margins the warm ramp had, so nothing regressed crossing over. |
| **D05** | **Category colours stay OUT of the system** | Accepted risk | brief | The roleplay screen's six scenario icons use Tailwind 300-level pastels. They are page-level decoration, defined in the screen, not tokens. Accepted risk: the next screen may invent its own six and drift. If that happens, promote them to a documented categorical palette with dark-theme counterparts. |
| **D06** | **Every value sampled from a Figma gets diffed against what is built** | Locked | brief | Three times during the roleplay-library pass a colour was measured out of the file and then not wired through — the sidebar fill, the active pill fill, and the active label. All three were sitting in the measurement output. Sampling is not the check; comparing the sample to the built result is. |
| **D07** | **Figma and the system are reconciled case by case** | Locked | brief | Neither is blanket-authoritative. Each divergence gets measured, reported with its cost, and ruled on individually — which is how the cool-grey switch and the category-colour exclusion were both decided. |
| **D08** | **The mark is parametric, not traced** | Locked | brief | A 3×3 grid of 147-unit cells with every corner and fillet at r=20, verified against the supplied artwork to ~1px. It stays crisp at 20px, takes its colour from the token, and needs no second asset for dark mode. |

## Typography

| # | Decision | Status | Date | Why |
|---|---|---|---|---|
| **D09** | **Noto Serif display · Figtree UI · JetBrains Mono data** | Locked | brief | A serif signals *curriculum, authority, expertise* rather than "another AI product" — which is precisely the asset TrainerTwin sells. Both faces also have a real multilingual path, so English-now / multilingual-later is handled on both halves of the pairing. |
| **D10** | **Badge borders are lighter than alert borders** | Locked | 11 Sep 2026 | `--tt-*-badge-border` added 11 Sep 2026, 55% of the way from `--tt-*-border` toward the badge's own subtle fill. A badge is a small pill, usually several to a row, and the alert-strength border read as heavy at that repetition. `--tt-live` keeps the full-strength border in both — it's the one badge with a transparent fill, so the border is the only thing defining the shape. |
| **D11** | **Status borders sit at the 300 step, not full strength** | Locked | 10 Sep 2026 | Added 10 Sep 2026. Alerts and badges drew their edge in the full status colour, which measured **4.7–6.4:1 against their own fill** — text-level contrast spent on a decorative line, and the reason they read as heavy. The new `--tt-*-border` family sits at ~1.5–2.1:1 on the fill. Deliberately below SC 1.4.11's 3:1, which is correct here: an alert is not a control, and severity is carried by the icon, heading and fill, never the border alone (SC 1.4.1). `--live` is the one exception — its background is transparent, so the border is the only thing defining the pill. |
| **D12** | **Pill padding tokenised: 2/8, 4/12, 6/16** | Locked | 10 Sep 2026 | Added 10 Sep 2026, found the same way the weight bug was. Padding was never in the token layer either, so the system's own badge sat at `3px 9px` — 9px is not a step on the 4pt scale — and screens built from it drifted to 8 / 10 / 11 / 13px. A pill is radius-999 and its rounded ends optically eat about half a stem at each edge, so it needs **more** horizontal padding than the equivalent rectangular control, not the same: 3x the vertical, where a rounded-rect button is comfortable at 2x. 12px is the floor for any pill carrying more than two words. |
| **D13** | **The marketing page is a surface of this system** | Locked | 10 Sep 2026 | Audited 10 Sep 2026: 700 colour literals, 273 unique, zero `--tt-*` references — but **479 uses sat within a just-noticeable difference of an existing token**. That is drift, not design. Fixed by *deriving*: the landing keeps its own vocabulary, every value with a system equivalent points at it. Where the landing had solved something the product hadn't — night bands, marketing type steps, the 54px CTA — the system adopted its answer instead of inventing a second one. See §14. |
| **D14** | **Night bands are a scope, not a theme** | Locked | brief | Adopted from the landing. A band of editorial dark inside a light page stays night in *both* themes, so it cannot be `[data-theme="dark"]` — that would flip the whole page. `.tt-night` re-points tokens inside one section, and `strong` flips to white-on-night by the same polarity rule it follows in dark theme. |
| **D15** | **`--tt-live` is red, `--tt-available` is green** | Locked | 10 Sep 2026 | Split 10 Sep 2026. Recording is a *warning* — you are being captured — and borrows the red of a record light. Availability is *reassurance* — this trainer can be reached now. The landing used one word for both. Never interchangeable. |
| **D16** | **The hot red-orange `#EC3013` is dropped** | Locked | brief | It measured **1.24:1 against `--tt-danger`** — visually the error colour — and contradicted the reason `#FF5A00` was chosen: to keep the whole red band free for error, destructive and record. Marketing uses `--tt-primary`. |
| **D17** | **IBM Plex Sans and Hanken Grotesk are marketing-only** | Locked | brief | Already shipping and deliberately scoped; the fault was that the system never declared them, so they read as drift. Now named, restriction intact: neither appears in product UI, which stays three roles wide. |
| **D18** | **Marketing body is 16px, product body is 15px** | Locked | brief | Both correct. A marketing paragraph is read at arm's length in a long scroll; a product table cell at a glance in a dense grid. The landing used 16px in 152 places against a scale with no step for it — the scale was missing a step. |
| **D19** | **Light is the default theme, not system-following** | Reversed | 11 Sep 2026 | Reversed 11 Sep 2026. The brand brief's original answer was "Both equal, system-following" — that was never wrong on its own, but the product shipped with no theme switcher, so "system-following" meant every visitor's OS silently picked their theme with no way to change it. `<html data-theme="light">` is now stamped in the root layout; Storybook's toolbar default moved from `system` to `light` to match. Dark stays fully built — every token has a dark value and Storybook can still exercise it — it is just dormant until a switcher ships. Revisit when one does. |
| **D20** | **Two weights: 400 regular, 600 semibold** | Locked | 10 Sep 2026 | Added 10 Sep 2026. Weight was the one type axis never tokenised — families were, sizes were, weight was not — so each component picked its own literal and the system drifted to four (800 wordmark and metrics, 700 buttons and labels, 600 titles, 500 mono meta). Screens came out heavier than intended because nothing stated an intent. Two steps is enough: Figtree 400 and 600 separate cleanly at 13px, and a third step only gives drift a place to hide. |
| **D21** | **`b`/`strong` reset to 600 globally** | Locked | brief | The UA default is `bold` = 700, outside the scale. It silently overrode correctly-specified components wherever content used emphasis — the largest single source of stray 700s. Reset once at the root rather than per component. |
| **D22** | **Serif is titles only, above 20px** | Locked | brief | It is the voice of authorship, not of interface. Below 20px it stops being legible at UI density. |
| **D23** | **Text bars, not lettering, in illustration** | Locked | brief | Keeps artwork language-agnostic, which matters once the product is localised. |

## Interaction

| # | Decision | Status | Date | Why |
|---|---|---|---|---|
| **D24** | **Brand orange is rationed to one action per view** | Locked | brief | If five rows each carry an orange button, none of them reads as the one to press. `strong` is the everyday action; `primary` is the directed moment. |
| **D25** | **`strong` is one variant, not two** | Locked | brief | Black in light theme, white in dark, flipped by the token layer — so it is always the opposite polarity of its canvas and cannot be shipped invisible. Nobody has to remember which colour belongs to which theme. |
| **D26** | **Destructive is outlined, never filled** | Locked | brief | A filled destructive button carries the same visual weight as the primary action, which is how people delete a trainer's uploaded material by mistake. It also avoids a theme fork, since `--tt-danger` inverts across themes. |
| **D27** | **Icon-only buttons always carry an `aria-label`** | Locked | brief | Without one a screen reader announces "button" and nothing else — the most common accessibility failure in a toolbar. The icon is `aria-hidden`; it is decoration once the label exists. |
| **D28** | **A segmented control changes the mode of one thing; tabs navigate between different things** | Locked | brief | Getting this backwards is why some products have tabs that don't change the page and switchers that do. Two to four segments, short parallel labels, and something is always selected. |
| **D29** | **A custom dropdown only when the native `<select>` can't do it** | Locked | brief | Native options cannot carry a description, a group label, or a disabled reason. When the choice is short and self-evident the native control is more robust on mobile and costs nothing. |
| **D30** | **A date field always keeps its text input** | Locked | brief | Typing "17 sep" beats four taps through a grid, and it is the only route that works well with a screen reader. The calendar is an accelerator, never the only way in. |
| **D31** | **In a form, the error replaces the hint** | Locked | brief | Both at once is two messages under one field, and the one that matters gets skimmed past. |
| **D32** | **Disabled and read-only are different states** | Locked | brief | Disabled means "not actionable, ignore it" and greys out. Read-only means "this matters, you just can't change it here" — so it sinks to a filled well but keeps full text contrast and stays selectable. |
| **D33** | **The valid tick is used sparingly** | Locked | brief | Reserve it for checks that cost something — a lookup, a code. A tick on every satisfied field is noise that trains people to ignore all of them. |
| **D34** | **Never a filled button on a surface of its own colour** | Locked | brief | It disappears into its own background. When the surface carries the brand, the control inverts. Whichever is the figure, the other becomes the ground. |
| **D35** | **Links are always underlined** | Locked | brief | Colour alone cannot distinguish a link from surrounding text — WCAG 1.4.1, and the rule people break most. |
| **D36** | **Amber is banned outright** | Locked | brief | It sits ~25° from the brand orange and reads as a *broken* brand colour rather than a warning. Gold is quarantined instead, and never within 8px of a primary action. |
| **D37** | **Three-level scoring is green / neutral / red** | Locked | brief | The middle state is neutral, not amber. Only the poles carry hue, which reads faster — and a scorecard is exactly the artefact a colour-blind learner will be judged by. |

## Layout

| # | Decision | Status | Date | Why |
|---|---|---|---|---|
| **D38** | **8px is the radius floor** | Locked | 9 Sep 2026 | The 4px step was retired 9 Sep 2026; `--tt-radius-xs` is now an alias of `sm`. |
| **D39** | **Breakpoints match Tailwind's defaults** | Locked | brief | There is no reason to invent our own, and diverging would surprise anyone who has used Tailwind before. |
| **D40** | **One ordered z-index scale; no component invents a number** | Locked | brief | Eight steps from base to tooltip. Before it existed the library had a single hardcoded `z-index: 90`, which works right up until the first dialog opens behind something. |
| **D41** | **Icon size is not hit area** | Locked | brief | Icons take one of four sizes (12/16/20/24), but the control around one is never smaller than `--tt-target-min` (24px), per WCAG 2.2 SC 2.5.8. A 17×17px dismiss button shipped before this rule existed. |
| **D42** | **The active nav item is a white pill, lifted** | Locked | brief | `--tt-surface` with `--tt-elevation-1` on the sunken rail — the same figure/ground move the segmented control's selected segment makes. Measured from the Figma, which shows a `#FEFEFF` pill over a `#ECECEC` shadow edge. |
| **D43** | **Toast sits above modal in the z-order** | Locked | brief | A toast confirming a dialog's action has to be visible while the dialog is still open. Tooltip is highest because it never blocks, so it can never trap anything. |
| **D44** | **Elevation steps must be perceptible, not just ordered** | Locked | brief | The first ladder moved 5% → 7% alpha between levels 1 and 2. Ordered correctly, invisible in practice — an interactive card lifting on hover produced no visible change. Each step now roughly doubles offset, blur and alpha. |
| **D45** | **`secondary` is a soft grey fill, not an outline** | Locked | brief | The utility-button style: toolbars, Help/Docs, notification bells. Its fill is `--tt-fill-soft`, deliberately **not** `--tt-surface-sunken` — in dark theme sunken is *darker* than the card a button sits on, so a button using it would read as a hole rather than a control. |
| **D46** | **A selected calendar day uses `cta-strong`, not `primary`** | Locked | brief | A day number is ~13px, where white-on-orange (3.13:1) stops being readable. Orange marks *today* as a dot instead, which also gives the two states distinct meanings rather than two shades of the same one. |
| **D47** | **Card hover is elevation only** | Locked | brief | No border highlight, no surface shift. A card that lifts should not simultaneously read as recessed; the two signals fight. |
| **D48** | **Every card carries elevation-1 by default** | Locked | 10 Sep 2026 | A card flat against the canvas with only a hairline is too quiet to read as a distinct object. Elevation-1 was reduced to a single layer, `0 1px 2px rgba(30,28,25,.06)`, on 10 Sep 2026 to match the Figma's flatter card. `raised` (elevation-2) is reserved for things genuinely floating. The variant formerly called `flat` was renamed `default` on 10 Sep 2026 — a variant called "flat" that casts a shadow is a lie in the API. |
| **D49** | **Card padding lives on the sections, not the card** | Locked | brief | So a card can hold a full-bleed image or an edge-to-edge table without fighting a padding it never asked for. This is the case that breaks cards which pad themselves. |
| **D50** | **Dark mode elevates with lightness, not shadow** | Locked | brief | Shadows are invisible on a near-black canvas; a hairline plus a step up the neutral ramp is the only signal that reads. |

## Product patterns

| # | Decision | Status | Date | Why |
|---|---|---|---|---|
| **D51** | **Every twin surface carries a persistent AI disclosure naming the trainer** | Locked | brief | The trust being extended is theirs. "AI assistant" is not a disclosure; "AI twin of Priya Raman" is. Never dismissible, never orange — it is a statement of fact, not a call to action. In video mode it appears twice, once composited *inside* the frame, because a likeness that can be screen-recorded must carry its disclosure in the pixels. |
| **D52** | **Answers cite three states, not two** | Locked | brief | Grounded, Inferred, and **Outside this trainer's material** — the third is the one that protects a trainer's reputation, and the only one that gets caution colour, because it is the only one where their name is attached to something that isn't theirs. |
| **D53** | **Citations sit below the answer, never inline** | Locked | brief | Inline superscripts interrupt reading, and a learner in a timed mock interview cannot afford that. |
| **D54** | **Mode is a view, not a session type** | Locked | brief | Voice, text, and video share one Session Shell and one transcript, so a learner can start in voice, drop to text for a code question, and lose nothing. Roughly 1.4× the work of one mode instead of 3×, and a better product. |
| **D55** | **Live state uses `--tt-live`, never `--tt-primary`** | Locked | brief | This is exactly the collision the orange primary was chosen to avoid; spending it here would waste that decision. |
| **D56** | **Ingest shows real progress per source** | Locked | brief | Uploading a trainer's life's work is slow and anxious. Never an indeterminate bar. |

## Tooling

| # | Decision | Status | Date | Why |
|---|---|---|---|---|
| **D57** | **Storybook is the living library** | Locked | brief | It is ahead of what Figma would give us on the free plan, and it is the thing that actually ships. |
| **D58** | **Figma via Tokens Studio, free tier** | Locked | brief | Gets the foundation in without an upgrade. On free, export runs from **Token Sets** (Themes export is Pro), and each set becomes one variable collection. Light and Dark arrive as two collections rather than two modes — that is a plan limit, not an import limit. |
| **D59** | **`src/styles/tokens.css` is the single source of truth** | Locked | brief | Every other artefact — this file, the Figma export, the foundations page — is generated from it. Hand-editing any of them puts the system out of sync with what the app ships. |

---

## Accepted accessibility exceptions

**This is the section most likely to be "fixed" by someone acting in good faith.**
Each of these is a recorded decision with a measured number attached, not a defect.

| What | Measures | Why it stands |
|---|---|---|
| White on primary orange | **3.13:1** — fails AA for normal text | Deliberate brand decision, 9 Sep 2026. It *is* compliant at large sizes (≥18.66px bold), which is exactly why the `lg` button exists at 19px. Near-black would have measured 6.33:1 at every size. |
| `--tt-border-field` at rest | **1.74:1** — below the 3:1 of WCAG 1.4.11 | Deliberate, 9 Sep 2026. `#828282` is the only step in the neutral ramp that clears 3:1, so "lighter" and "compliant" cannot both hold. The border firms to `--tt-border-interactive` on hover and focus, and that is what carries the affordance. |
| `--tt-text-muted` | **3.81:1** — fails AA for normal text | Legal by restriction: placeholders and disabled controls only, both exempt under WCAG 1.4.3. Anything a user is meant to *read* takes `--tt-text-tertiary`. |
| Status borders (`--tt-*-border`) | ~1.5–2.1:1 — below the 3:1 of SC 1.4.11 | Deliberate, 10 Sep 2026. Correct rather than tolerated: an alert is not a control, and severity is carried by the icon, heading and fill, never the border alone. `--tt-live` is exempt — its background is transparent, so its border is the only thing defining the pill, and it keeps full strength. |
| Badge borders (`--tt-*-badge-border`) | ~1.2–1.6:1 — lighter still | Added 11 Sep 2026. A badge is a small pill, often several to a row; the alert-strength border read as heavy repeated at that scale. Sits 55% closer to the badge's own subtle fill than the alert border does. `--tt-live` keeps the same exemption. |

The axe colour-contrast rule is disabled **for the Button component's stories only**.
Every other component in the library runs the full gate at `error`, and the suite is
green at 32/32.

A fourth exception was added 10 Sep 2026: **status borders on alerts and badges sit
below the 3:1 of SC 1.4.11** (~1.5–2.1:1 against their own fill). This is correct
rather than tolerated — an alert is not a UI control, and its severity is carried by
the icon, the heading and the fill, never by the border alone (SC 1.4.1). The one
badge with a transparent background, `--live`, keeps a full-strength border because
there the border *is* the component boundary.

### Found and fixed, not accepted

| Defect | Measured | Fix |
|---|---|---|
| Light `--tt-success` on its own subtle background | 4.40:1 | green-600 → green-700 `#1A6739` |
| Dark caution text on `--tt-caution-subtle` | 3.65:1 | gold-700 → new gold-900 `#3A2A00` |
| Toast dismiss button hit area | 17×17px, below SC 2.5.8's 24×24 | `--tt-target-min: 24px` |
| `--tt-text-muted` used for 12px label text | 3.75–4.12:1 | → `--tt-text-tertiary`; caught by the a11y gate, not by review |

---

## Reversals

Kept because the reason for a reversal is more useful than the decision itself.

| What | From | To | Why it changed |
|---|---|---|---|
| **Neutral ramp** | Warm olive-brown | Cool grey (14 steps) | The roleplay-library Figma was measured and found to use near-neutral greys. Anchors are now sampled values (`#FEFEFF` canvas, `#F7F7F7` sidebar, `#E9E9E9` border, `#2B2B2B` CTA, `#1C1B1B` body), so screens built from that Figma match by construction rather than by eye. Mid-tones were retuned to hold the old contrast margins. |
| **Radius floor** | 4px | 8px | 4px was a distinct step nobody used consistently. The scale is now 8 / 12 / 16 / pill, and `--tt-radius-xs` survives only as an alias. |
| **Form border width** | 1px | 0.5px | On a 2× display 0.5px renders as a true one-device-pixel rule, which is the intent. |
| **Primary button label** | Near-black (6.33:1) | White (3.13:1) | Brand decision, taken with the cost measured and recorded. |
| **Elevation ladder** | e1→e2 moved 5%→7% alpha | Each step doubles offset, blur and alpha | Card hover was specified as e1→e2 and was invisible. An ordered scale is not automatically a *perceptible* one. |
| **Tab selection scripting** | One global `.c-tab` list | Scoped per `.c-tabs` container | A second tab group anywhere on the page silently stole the first one's selection. Found by building the composed-screen demo. |

---

## Process decisions

Not about the product — about how the work is done. These exist because each one
followed a mistake.

| Decision | Why |
|---|---|
| **Compute every contrast ratio before asserting it** | Two self-authored contrast bugs shipped into the doc as claims before this rule existed. |
| **A value sampled from a Figma is not done until it is wired through and diffed** | Three times a colour was measured correctly and then not applied — sidebar fill, active-pill fill, active label. Two were caught by the user, not by me. The measurement sitting in the output is not the same as the value being in the file. |
| **Verify tag balance and undefined `var()` programmatically** | An unclosed `<div>` nested a whole section inside a card, and was invisible locally because the preview was rendering at zero width. |
| **Check cross-references against target *content*, not just existence** | Two section references were wrong by one after a renumber; both pointed at real sections, just the wrong ones. |
| **The token block in the MD is regenerated from `tokens.css`, never edited** | Verified byte-identical on every publish. |
| **Non-ASCII characters are written as HTML entities** | `foundations.html` is an artifact body with no `<head>` of its own; opened as a local file it was rendering every em-dash as `â€"`. 268 characters converted. |

---

## Assumed, never explicitly agreed

Flag any of these that is wrong — they are load-bearing.

- **WCAG 2.2 AA is the floor**, with the exceptions above recorded against it.
- **One density mode.** No compact/comfortable switch anywhere in the system.
- **Delivery is CSS custom properties**, with Tailwind aliases layered on top.
- **Responsive web only.** No native app surface has been designed for.
- **English first**, with the type stack chosen so other scripts can be added later.

---

## Still open

Genuinely undecided. Nothing downstream should assume an answer.

| Question | State |
|---|---|
| **Motion expressiveness** | Held at "purposeful". Cannot be judged from a spec — revisit once there is a working session to feel. |
| **Illustration direction** | Three proposed (Grid, Paper, Echo); recommendation was Grid as the base, borrowing Paper's human marks. Nothing chosen, so there is no illustration style to follow yet. |
| **Voice identity** | The twin speaks in two of three modes and has no spec at all — pace, warmth, whether it clones the trainer's real voice, and how it sounds saying "I don't know." Arguably a bigger brand surface than colour. |
| **Does the glyph stand alone?** | At favicon and avatar-fallback size, or does it need a drawn monogram? Untested at 16px. |
| **Comparables** | Two or three products you'd be happy to be compared to. Never answered, and it would sharpen several of the open items above. |

---

## Known gaps

Not decisions — work that is specified but not built. Listed so the decision record
isn't mistaken for a completeness claim.

- **6 of 32 component families exist as React components** (Button, Card, Input, Logo, SourceChip, DisclosureMarker). The rest — Alert, Toast, Modal, Table, Badge, Avatar, Tabs, Menu, Tooltip, Checkbox, Switch, Select, Textarea, Divider, Link, Empty state, Skeleton, Progress, App shell, Segmented control — exist as CSS in the doc only.
- **No marketing/prose styles.** There are no `h1`–`h4`, `ul`, `ol`, `blockquote`, `pre`, `figure` or `hr` rules, so a blog post renders unstyled. No hero, feature grid, pricing table, testimonial, FAQ or footer either.
- **Figma re-import is overdue** — 14 neutrals changed, and the Tokens Studio export is at 9 sets / 148 tokens from before that.
- **The project is not under version control.** No git repository exists.
- **Card footer diverges from the Figma** — the Figma uses a divider over a transparent row; ours is `surface-sunken` with a top border. Flagged, undecided.
- **`src/components/landing/` is off the weight scale** — ~15 `font-bold`/700 declarations remain in the separately-designed marketing surface.
