import { Bricolage_Grotesque, DM_Sans } from "next/font/google";

/**
 * This exploration's own two faces — not the product's Figtree / Noto Serif,
 * and not the other marketing routes' IBM Plex Sans / Hanken Grotesk. Scoped
 * to this route only, the same way the other marketing fonts.ts files are.
 */

export const fontDisplay = Bricolage_Grotesque({
  variable: "--tte-font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const fontBody = DM_Sans({
  variable: "--tte-font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const explorationFontVariables = `${fontDisplay.variable} ${fontBody.variable}`;
