import { IBM_Plex_Sans, Hanken_Grotesk } from "next/font/google";

/**
 * Two families the marketing page uses that the product design system does not.
 *
 * foundations.html §03 fixes the product on a three-role system (Noto Serif /
 * Figtree) and those two already cover every operable surface
 * here. These two are scoped to this route rather than added to
 * `src/styles/fonts.ts`, so the product's type system stays three roles wide:
 *
 *   plex   — the wordmark lockup and the oversized footer watermark.
 *   hanken — the footer's own type scale, which the design draws tighter than
 *            Figtree's and which never appears above the footer boundary.
 */

export const fontWordmark = IBM_Plex_Sans({
  variable: "--l-font-wordmark",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const fontFooter = Hanken_Grotesk({
  variable: "--l-font-footer",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const landingFontVariables = `${fontWordmark.variable} ${fontFooter.variable}`;
