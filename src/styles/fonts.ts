import { Figtree, Noto_Serif } from "next/font/google";

/**
 * Shared by the Next.js root layout and the Storybook preview, so both render
 * with the real type system rather than a silent fallback.
 *
 * Weight is NOT set here — it belongs to the token layer
 * (--tt-weight-regular / --tt-weight-semibold in src/styles/tokens.css).
 * Figtree loads as a variable font, so both steps are free.
 *
 * Role split (see design-system/foundations.html §03):
 *   display — Noto Serif. MARKETING ONLY, as of 25 Sep 2026 — landing pages
 *             and src/components/home/. Never inside the product, at any
 *             size; Figtree carries every in-app title now, including large
 *             ones. Still loaded here rather than scoped to a marketing-only
 *             layout because marketing routes share this root layout; the
 *             boundary is enforced by usage, not by what loads.
 *   ui      — Figtree, everything operable, every in-product title, and — as
 *             of 29 Sep 2026 — anything counted. Numbers take Figtree with
 *             `tabular-nums`, which is LOAD-BEARING, not decoration: Figtree's
 *             default figures are proportional (111111 measures 99px against
 *             000000's 154px at 40px), so a counter without it visibly jitters
 *             and a numeric column's right edge goes ragged.
 *
 * THE BRAND IS TWO FAMILIES. JetBrains Mono was removed entirely on 29 Sep 2026
 * — no third webfont is imported, downloaded or shipped. The landing page's
 * simulated code panels still need fixed-width characters to stay aligned, so
 * `--font-mono` in globals.css now resolves to the OPERATING SYSTEM's own
 * monospace stack (ui-monospace / SFMono / Menlo). That is not a brand family
 * and costs no network request; it is whatever the reader's machine already
 * has. Nothing in product UI uses it, and no number anywhere does.
 */

export const fontUi = Figtree({
  variable: "--tt-font-ui",
  subsets: ["latin"],
  display: "swap",
});

export const fontDisplay = Noto_Serif({
  variable: "--tt-font-display",
  subsets: ["latin"],
  /* 400 and 600 for the product's own type scale; 700 was dropped 10 Sep 2026
     when it landed, since display titles there cap at 600. 300 is the one
     addition since — the v3 marketing hero's italic lead-in, which sits on
     the documented marketing-surface exception to the two-weight rule (see
     DECISIONS.md) rather than on the scale itself. Without this file, a CSS
     `font-weight: 300` on Noto Serif has nothing to match and silently renders
     at 400 — browsers synthesize bold, never light. */
  weight: ["300", "400", "600"],
  display: "swap",
});

/** Apply to <html> (app) or a wrapping element (Storybook). */
export const fontVariables = `${fontUi.variable} ${fontDisplay.variable}`;
