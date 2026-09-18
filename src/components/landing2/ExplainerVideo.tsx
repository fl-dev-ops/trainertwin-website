import { ScenarioSection, type Scenario } from "./ScenarioSection";

/**
 * The Explainer Video list. It shares the Interactive Twin section's shell but
 * keeps its own copy, so the two can be edited apart.
 *
 * Both have their own frames — 563:5565 for the lessons, 575:5607 for the
 * demos — and play them.
 */
const SCENARIOS: Scenario[] = [
  {
    label: "Lessons and study notes",
    icon: "/tt/ic-imac-code.svg",
    body: "Turn your expertise into engaging visual longer lessons that make complex topics easier to understand with AI twin touch",
    scene: "lesson",
  },
  {
    label: "Course demos & preview (Lead conversion)",
    icon: "/tt/ic-text-scan-ai.svg",
    body: "Showcase your teaching style and course value with compelling explainer videos that help learners decide what to learn next.",
    scene: "coursedemo",
  },
];

export function ExplainerVideo() {
  return (
    <ScenarioSection
      id="explainer-video"
      eyebrow="Explainer Video"
      heading="Turn your expertise into explainer videos in your training style."
      scenarios={SCENARIOS}
      topRule
    />
  );
}
