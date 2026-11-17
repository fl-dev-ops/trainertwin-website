# Storybook gaps found by rebuilding the V3 prototype

*17 Nov 2026. Source: `prototype-build/` (the app at `/storybook-build/index.html`), which rebuilds V3 from
`src/components`. Everything it had to write itself is either in `prototype-build/src/local/` (marked "NOT IN
STORYBOOK YET") or is plain Tailwind repeated on pages. This is the ranked list of what to add to the library.*

How to read the evidence: counts are from `prototype-build/src` on 17 Nov 2026 (17 pages, 8 local pieces, 27 Storybook
components imported). "Uses" means places in the build that wrote the pattern by hand.

## 0. Already in Storybook but not used by the build (fix the build, not the library)

| Component | What happened |
|---|---|
| `BackBar` (in `PageHeader.tsx`) | The build had hand-rolled the 64px back header in 5 places (detail, edit, calibrate, create, session report). **Done 17 Nov 2026:** all five now use `BackBar` (its `actions` slot carries the detail page's date filter, Calibrate and ⋮), and the page comparisons did not change. Twin's brain keeps its own toolbar (back, "last updated", Done) because that is a different layout. |

## 1. Ranked gaps

Ranked by how many pages need it, then by how much each copy costs to keep in step.

| # | Gap | Evidence in the build | Proposed component | Size |
|---|---|---|---|---|
| 1 | ~~**Page container**~~ (done 17 Nov, D129: `Page`) | `mx-auto max-w-[…] px-16 pt-5 pb-8` written on **14** pages, with three widths (1024, 1000, 718) | `Page` (`width: "library" \| "narrow" \| "form"`) so the padding and max-width live in one place | S |
| 2 | ~~**Page header with a subtitle**~~ (done 17 Nov, D128) | `SettingsHead` (Usage, Billing) is `PageHeader` plus a 14/20 line and one tool | Add `description` to `PageHeader`; delete `SettingsHead` | S |
| 3 | **Toolbar select / filter chip** | `FilterSelect` used **7×** (Twin sessions ×4, Roleplay sessions ×4, assign dialog, detail); `ChipSelect` in the Questions/Issues pane; both are a pill + listbox | `FilterSelect` (pill, listbox, `active` state, optional leading icon). `Select` stays the labelled form field | M |
| 4 | **Stat tiles** | Three looks written by hand: tone tiles on the agent detail (success/caution/info/neutral), `an-stat` cards on Calibrate, and `SessionsSummary` (tiles + rating card + paid ring + attention row) | `StatCard` (`tone`, overline, value, note, optional link) and `SummaryBlock` for the Twin/Roleplay sessions layout. `NumberTile` and `SummaryCard` already cover two of the looks | M |
| 5 | **List row / data list** | `ListRow` + `Avatar` + name cell repeated on **5** pages; `BrainPane` writes its own head, rows, answer-inline, ⋮ menu and empty state | `DataList` with `columns`, `head`, row `onClick`, and an `actions` slot (already added `onClick` to `ListRow`). `InboxPane` on top of it | L |
| 6 | ~~**Eyebrow / overline label**~~ (done, D129) | `Overline` used **9×** in 5 files; also hand-written in the stat tiles | A typographic primitive `Eyebrow` (11/12, 600, +.09em, uppercase) | S |
| 7 | ~~**Star rating**~~ (done, D129: `StarRating`) | `Stars` used 3× (two list pages, session report at 16 and 20px); colour by value (5 green, 4 gold, ≤3 red) | `StarRating` (`value`, `size`, auto tone) | S |
| 8 | **Search field** | `SearchField` plus two inline copies (assign dialog, Questions/Issues search) | `Input` variant `type="search"` with leading icon and clear button, pill shape for toolbars | S |
| 9 | ~~**Icon set**~~ (done 17 Nov, D128: `icons.tsx` + `Foundations/Icons`; 3 raw glyphs remain, two are brand marks) | **19** `dangerouslySetInnerHTML` icons copied from V3; **14** files define the same `html()` helper | Extend `UiIcons` to the ~45 icons V3 uses (Tabler 24px, 2px stroke) and import them by name. This is the biggest cleanup because it removes the raw-HTML escape hatch | M |
| 10 | **Accordion / collapsible card** | Create page's "New use case" card (title + chevron + body) | `Accordion` (the design system lists it under "not built") | S |
| 11 | **Drop zone and file row** | Edit and Create pages: dashed/filled drop area, file chips with a status badge and remove | `FileDropZone` and `FileRow` (the system lists "file dropzone" as not built) | M |
| 12 | **Chart** | Weekly bar chart on the agent detail, parsed from V3's SVG | `BarChart` (4–12 bars, labels, tooltip). Charts are not built yet | M |
| 13 | **Usage ring** | `UsageRing` (orange→blue conic, 72px) beside `ProgressRing` (64px, green) | A `tone="gradient"` on `ProgressRing`, or a documented second ring | S |
| 14 | **Session room** | `TryRoom`: header, aurora stage, two video tiles with badges, control cluster, timer, End | `SessionRoom` family (`VideoTile`, `ControlCluster`, `CallHeader`). The "Session Shell" is already listed as unbuilt | L |
| 15 | **Credit pill and popover** | `CreditPill` + `CreditPopover` (stacked bar, legend, buy) | `UsageMeterPill` with its popover | M |
| 16 | ~~**Card lift shadows**~~ (done, D129: `--tt-shadow-lift`, `--tt-shadow-sheet`) | **9** literal `shadow-[0_2px_4px…,0_8px_20px…]` strings in 7 files (V3 uses three different two-layer shadows) | Tokens `--tt-shadow-lift-1/2/3`, so pages say `shadow-lift`. Needs a design decision on which three | S |
| 17 | **Canvas flow board** | Twin's brain: absolute-positioned nodes, tags, connectors, zoom | A `FlowBoard` wrapper with node placement and `FlowLink`. `FlowNode` exists | M |

## 2. Suggested order

1. ~~Swap `BackBar` in~~, ~~`description` on `PageHeader` (2)~~ and ~~icons (9)~~: all done 17 Nov 2026 (D128). The build page now resolves every scraped icon to a library icon except Drive, Notion and one sparkle variant, and the 14 duplicate `html()` helpers are one function.
3. ~~`Page` (1), `Eyebrow` (6), `StarRating` (7), shadow tokens (16)~~: done 17 Nov 2026 (D129).
4. **`FilterSelect` (3) and `SearchField` (8)**: used on the busiest pages.
5. **`DataList`/`InboxPane` (5) and `StatCard`/`SummaryBlock` (4)**: the biggest wins, and the largest.
6. The rest (10–15, 17) as the pages that need them come up.

## 3. Where V3 was wrong or v3-specific (not to be copied)

- V3 resets to the light theme when some menus or dialogs open (Assign dialog, chip menus). The build stays in the chosen theme.
- The Twin agents page overrides button weight to 500 (`.page--twin-profile .lib-tools .btn`). The build keeps `Button` at 600 except there, with a page-level override. Decide whether `Button` should be 500 everywhere.
