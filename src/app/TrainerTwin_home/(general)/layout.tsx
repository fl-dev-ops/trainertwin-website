import type { Metadata } from "next";
import { homeFontVariables } from "../fonts";
import "../home.css";

export const metadata: Metadata = {
  title: "TrainerTwin — build a twin of you your students can reach anytime",
  description:
    "TrainerTwin turns your knowledge and persona into a version of you your students can reach whenever they need: an interactive twin, explainer videos and promo clips.",
};

export default function TrainerTwinHomeLayout({
  children,
}: LayoutProps<"/TrainerTwin_home">) {
  return (
    /* data-theme="light" pins the page. The root layout already stamps light on
       <html> (D19), but stamping it here too means the route stays correct if a
       theme switcher ever ships and someone lands on this URL in dark: the page
       is drawn on white paper, and `strong` would otherwise flip to a white CTA
       on it. The footer is unaffected — `.tt-night` is a scope, not a theme
       (D13), so it stays night either way. */
    <div data-theme="light" className={`${homeFontVariables} tt-home flex-1`}>
      {children}
    </div>
  );
}
