# Storybook coverage of the V3 prototype

Audited 16 Nov 2026 against `onboarding-prototype/v3/` (`app.js` 18,030 lines, `app.css` 11,782, served at `http://localhost:8791/v3/index.html`).

## The honest answer to "is everything from Storybook?"

**No, and today it cannot be.** The prototype is plain HTML, CSS and JavaScript. It builds its screens as template strings and styles them with its own 1,932 CSS classes (`.btn`, `.card`, `.badge`, `.input`, `.seg`, `.menu`, `.rp-card` …). The Storybook components are React and use Tailwind classes, so the two share **no code**. The only thing they share is the design tokens (`--tt-*`), and until today the prototype's copy of those was missing 36 of them.

So "every component in the prototype comes from Storybook" is not something an audit can make true. It needs one of:

| Path | What it means | Cost |
|---|---|---|
| **A. Parity** (recommended now) | Keep the prototype as a reference. Every component pattern in it has a React twin and a story, built to the same spec and tokens. The prototype stays a visual reference. | Small per component. This is what phases 1–2 started. |
| **B. Port** | Rebuild the screens in the Next app from the Storybook components, so the product itself is made of them. | Large: 51 pages, 19 dialog builders, 568 functions. |
| **C. Shared CSS** | Pull the prototype's component CSS into one stylesheet both the prototype and Storybook use. | Medium, but it breaks the "React component with props" goal. |

What is measurable today is **parity: for each thing the prototype draws, is there a Storybook component?**

## Scale of the prototype

- 51 pages (`pageHome`, `pageTwinSessions`, `pageInbox`, `pageBilling` …)
- 19 dialog builders and 23 `<dialog>` elements, 12 menu builders
- 282 `.btn` uses, 90 `toast(` calls, 28 `<textarea>`, 8 `role="switch"`, 8 `checkbox`, 7 `<select>`, 3 `role="tooltip"`
- 1,532 of its 1,932 classes are used; most are page-specific wrappers

## Parity matrix

### Covered: a React component and a story exist

| Pattern | In the prototype | React | Story |
|---|---|---|---|
| Button, all variants, icon-only | `.btn` ×282 (secondary 114, ghost 78, strong 76, primary 8, danger 1) | `Button` | Foundations/Button |
| Text field, label, hint | `.input` ×77, `.field` ×33, `.hint` ×21 | `Input` | Foundations/Input |
| Textarea | `<textarea>` ×28 | `Textarea` | Foundations/Textarea |
| Checkbox | ×8 | `Checkbox` | Foundations/Checkbox |
| Switch | `role="switch"` ×8 (`.rps-switch`) | `Switch` | Foundations/Switch |
| Toast | `toast(` ×90 | `Toast` (`ToastProvider`, `useToast`) | Foundations/Toast |
| Dialog, confirm dialog, side panel | 19 builders, 23 `<dialog>` | `Modal`, `ConfirmDialog`, `SidePanel` | Foundations/Modal |
| Menu | 12 builders | `Menu` | Foundations/Menu |
| Tooltip, info hint | `role="tooltip"` ×3 | `Tooltip`, `InfoHint` | Foundations/Tooltip |
| Page header, section heading, back-bar | every one of the 51 pages (`.lib-head`, `.page-title`, `.create-bar`) | `PageHeader`, `SectionHeading`, `BackBar` | Structure/PageHeader |
| Divider | `.section-divider`, `.menu-rule` | `Divider` | Foundations/Divider |
| Link | `.us-link`, `.bot-link` | `Link` | Foundations/Link |
| Empty state, gate card | `pageGate`, `.ts-empty`, `.inbox-empty` | `EmptyState`, `GateCard` | Structure/EmptyState |
| Progress, ring, skeleton | `role="progressbar"` ×2 | `ProgressBar`, `ProgressRing`, `Skeleton` | Foundations/Progress |
| Stepper | `.setup-steps`, `.step-hit` | `Stepper` | Foundations/Stepper |
| App rail / nav | `.rail`, `.nav-item`, `placeRailUserMenu` | `NavRail`, `NavGroup`, `NavItem`, `RailUser` | Structure/NavRail |
| Inline alert | `role="alert"` ×3, `role="status"` ×13 | `Alert` | Foundations/Alert |
| Underline tabs | `role="tab"` ×2 | `Tabs`, `TabPanel` | Foundations/Tabs |
| Add card, source (checkbox) card, Twin-for-all card, stat pill | `addCard`, `knowledgeFileCard`, `twinAllCard` | `AddCard`, `SourceCard`, `TwinAllCard`, `StatPill`, `LearnerStack` | Product/Cards |
| Phone header, tab bar | `.mobile-head`, `.tabbar` | `MobileHeader`, `HeaderButton`, `TabBar`, `TabBarItem` | Structure/MobileShell |
| Calendar popover, date field | `renderAssignCal`, `.assign-cal` | `Calendar`, `DateField` | Foundations/Calendar |
| Audio waveform | `.mic-wave`, the record step | `Waveform` | Foundations/Waveform |
| Select | 7 `<select>` | `Select` | Foundations/Select |
| Multi-select | `.v2-ms` | `MultiSelect` | Foundations/MultiSelect |
| Badge | `.badge` ×46 | `Badge` | Foundations/Badge |
| Avatar | `.rp-avatar`, `.profile-avatar`, `.rpa-photo` | `Avatar` | Foundations/Avatar |
| Segmented control | `.seg` ×17, `.rps-seg`, `.set-seg` | `SegmentedControl` | Foundations/SegmentedControl |
| Radio-card, image tile | `.tt-tile-neutral`, `sampleTile` | `RadioCard`, `ImageTile` | Foundations/SelectableTile |
| Card | `.card` ×61 | `Card` | Structure/Card |
| Table | `.an-table`, `.us-table`, `.lr-table` | `Table`, `TableCard` | Data/Table, Data/TableCard |
| Twin agent card, roleplay card | `twinBotCard`, `roleCard` (`.rp-card`) | `AgentCard` | Product/AgentCard |
| Number tile, attention chip, summary card | `.an-stat`, `.rp-stat`, `.ts-attn-chip` | `NumberTile`, `AttentionChip`, `SummaryCard` | Product/Metrics |
| Loading mark | `lattice-loader` ×13 | `Spinner` (a different implementation of the same mark) | Foundations/Spinner |
| Wordmark | `.wordmark`, `.lockup` | `Logo` | Foundations/Logo |

### Specced in the design system, used in the prototype, **no React component**

Ordered by how often the prototype uses it. These are the real gaps.

| # | Pattern | In the prototype | Spec |
|---|---|---|---|

### Built, but with no story

`SiriOrb` (the prototype's `.orb` ×4), `ui/motion-confetti` (the prototype's `.auth-confetti`, `.celebrate-confetti`), and the marketing components (`Aurora`, `BorderGlow`, `CursorGrid`, `FuzzyText`, `ShinyText`, `AsciiCharacter`) which are not in the prototype.

### Added from the prototype, 16 Nov 2026 (D121)

These had no spec. They were copied from the prototype's own CSS on request, so change them later if needed:

| Pattern | In the prototype | React | Story |
|---|---|---|---|
| Flow nodes | `pageStudioFlow`, `.flow-*` | `FlowNode`, `FlowSource`, `FlowStartNode`, `FlowEditRow` | Product/FlowNode |
| Voice rows | `.voice-row`, `.rps-voice` | `VoiceRow`, `VoiceListRow` | Product/VoiceRows |
| Learner rows, list-as-table | `.an-table`, `.an-row`, `.lr-*` | `ListTable`, `ListRow`, `LearnerRow`, `UsageMeter` | Data/ListTable |
| Usage card, activity rows | `.us-card`, `.al-*` | `UsageCard`, `ActivityRow` | Product/Usage |
| Chat bubbles | `.tee-msg`, `.rp-chat-line`, `.talk-bubble` | `ChatBubble`, `ChatThread` | Product/ChatBubble |

**Still not built:** the Session Shell proper (one transcript across voice, text and video).

**Inbox: removed.** The Inbox page in the V3 prototype was already unreachable (no rail item, nothing navigated to it). It is gone, with its dead helpers, actions, state and CSS. Twin's brain (the Questions and Issues tabs) shares the question and issue data and cards, so those stay. No Inbox component exists.

## What changed in this pass

The prototype's own `tokens.css` was a drifted copy: 36 tokens missing (including `--tt-radius-xl` and `--tt-shadow-secondary`), no value disagreeing. `scripts/sync-tokens.mjs` now covers it: it appends a generated block with every missing token and fails `tokens:check` if any value disagrees. One line in `app.css` used `var(--tt-radius-xl, 16px)`; it now says `var(--tt-radius-lg)` so syncing the token cannot change how it looks (the fallback was 16, the token is 24). Cache versions bumped to `tokens.css?v=11` and `app.css?v=1155`. Checked in the browser: the Twin Agents page renders the same, no console errors.

## Update, 16 Nov 2026

Textarea, Checkbox and Switch are built with stories and moved to Covered. The Switch fills neutral per the spec while the prototype's is orange; recorded as open. `Table.tsx` still carries its own private row checkbox with the same recipe; it can be swapped for `Checkbox` when the Table is next touched.

Also 16 Nov 2026: Toast, Modal / ConfirmDialog / SidePanel, Menu and Tooltip are built and moved to Covered. Left of the specced gaps: page header, divider, link, empty state, calendar and date field, stepper, nav rail, progress, add card and the Twin-for-all card.

Also 16 Nov 2026: PageHeader (with SectionHeading and BackBar), Divider, Link and EmptyState (with GateCard) moved to Covered. Left of the specced gaps: calendar popover and date field, stepper, app rail / nav, progress and skeleton, add card, the Twin-for-all card and the knowledge checkbox card. Then the library covers everything the design system specs and it is time to offer the prototype port.

Also 16 Nov 2026: Progress (bar, ring, skeleton), Stepper and NavRail moved to Covered. Left of the specced gaps: the calendar popover and date field, the dashed add card, the Twin-for-all wide card and the knowledge checkbox card, plus Alert, Tabs, the audio waveform and the phone top bar and tab bar. The nav rail differs from the prototype in width and count colour; recorded as open.

Also 16 Nov 2026: Alert, Tabs, and the three card patterns (add, source checkbox, Twin-for-all) with StatPill and LearnerStack are Covered. Left: the calendar popover and date field, the audio waveform and the phone top bar and tab bar. Everything else the prototype draws from the design system now has a Storybook component; what remains in the prototype are the product-specific patterns listed above that have no spec.

**Correction, 16 Nov 2026:** the earlier note counting `.cal-*` ×47 as calendar usage was wrong. Those classes belong to the *Calibration* pages. The one calendar popover in the prototype is `renderAssignCal` (`.assign-cal`), used by the Assign dialog.

Also 16 Nov 2026: MobileHeader and TabBar, Calendar with DateField, and Waveform are Covered. **Every pattern the design system specifies now has a React component and a Storybook story.** What the prototype draws that is not covered are the product-specific patterns listed above that have no spec.

**Decisions, 16 Nov 2026 (D120):** the prototype is final for Toast, Modal (every popup shares the confirm dialog's surface), the switch fill (orange) and the rail (corrected by D125: 214px, an orange dot instead of a count); the ring hole follows the spec (25px radius). The components were changed to match, so the open items that listed these differences are closed. What is left open is only the set of product patterns with no spec.

Also 16 Nov 2026 (D121): the five groups above are Covered. Every pattern the prototype draws now has a Storybook component, except the Inbox (removed) and the Session Shell proper.

**Verified side by side, 17 Nov 2026 (D124):** `npm run compare:prototype` diffs 45 component cases against the prototype's own markup in light and dark. 20 differences were fixed; what remains is known noise (a 15px vs 16px root font size, element types, hover state). The harness lives in `scripts/compare-prototype/`; add a case to `cases*.mjs` for any new component.

## Suggested order for the gaps

1. ~~Toast, Modal and Side panel, Menu, Tooltip~~ done 16 Nov 2026.
2. ~~Textarea, Switch, Checkbox~~ done 16 Nov 2026.
3. ~~Page header, Divider, Link, Empty state~~ done 16 Nov 2026.
4. ~~Progress and skeleton, Stepper, rail~~ done 16 Nov 2026. Left: calendar popover and date field.
5. **Stories for `SiriOrb` and the confetti**, then decide on the product-specific patterns above.
