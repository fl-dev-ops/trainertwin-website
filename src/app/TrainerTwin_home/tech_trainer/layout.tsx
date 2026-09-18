import type { Metadata } from "next";
import { landingFontVariables } from "./fonts";
import "./landing.css";

export const metadata: Metadata = {
  title: "TrainerTwin — Your training session ends. Practice shouldn't.",
  description:
    "Your AI Twin steps in for you when you need it to. It speaks like you, sees like you, and supports your students like you.",
};

export default function TechTrainerLayout({
  children,
}: LayoutProps<"/TrainerTwin_home/tech_trainer">) {
  return (
    <div className={`${landingFontVariables} tt-landing flex-1`}>{children}</div>
  );
}
