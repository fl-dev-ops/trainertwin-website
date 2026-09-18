import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrainerTwin",
  description:
    "Extend a trainer's 1:1 impact. Build a twin from your own material, and let it run mock interviews, coaching, and doubt clearing when you can't.",
};

/**
 * data-theme="light" — deliberate default, 11 Sep 2026. Reverses the original
 * "system-following" answer from the brand brief: every visitor now sees light
 * regardless of their OS preference, because the product has no theme switcher
 * yet. Dark theme is fully built and tested (every token has a dark value,
 * Storybook's toolbar exercises it), it is just unreachable until a switcher
 * ships. Remove this stamp — or make it a user preference — when one does.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${fontVariables} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
