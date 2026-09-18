import type { Metadata } from "next";
import { landingFontVariables } from "./fonts";
import "./landing.css";

export const metadata: Metadata = {
  title: "TrainerTwin — Your training session ends. Practice shouldn't.",
  description:
    "Your AI Twin steps in for you when you need it to. It speaks like you, sees like you, and supports your students like you.",
};

export default function TrainerTwinHomeLayout({
  children,
}: LayoutProps<"/TrainerTwin_home_2">) {
  return (
    /* data-theme="light" is what pins this page. Deriving the landing's
       vocabulary from the product tokens (§14.1) means it would otherwise
       follow the reader's OS: a dark preference would repaint sections the
       design intends to be white, and `strong` would flip to a white CTA on
       white paper. The night bands are unaffected — .tt-night re-points tokens
       inside its own scope, which is exactly why it is a scope and not a
       theme (D13). */
    <div
      data-theme="light"
      className={`${landingFontVariables} tt-landing flex-1`}
    >
      {children}
    </div>
  );
}
