import { ScenarioSection, type Scenario } from "./ScenarioSection";

/**
 * Each audience has its own scenario list. "Current Learners" is drawn across
 * 374:11948 / 376:12032 / 380:12045 / 380:12044; "Leads conversion" comes from
 * 353:10883, with 393:12546 behind its first item.
 *
 * `scene` names the mockup a scenario plays. Where a scenario has no frames of
 * its own it borrows the closest one rather than showing an invented mockup,
 * and anything still unnamed falls back to the first in its list.
 */
const CURRENT_LEARNERS: Scenario[] = [
  {
    label: "Technical interview",
    icon: "/tt/ic-imac-code.svg",
    body: "Learners run realistic scenarios with your Twin whenever they're ready not only when you are.",
    scene: "code",
  },
  {
    label: "System design",
    icon: "/tt/ic-automation.svg",
    scene: "whiteboard",
  },
  {
    label: "Co-trainer for on your zoom calls",
    icon: "/tt/ic-text-scan-ai.svg",
    scene: "cotrainer",
  },
  {
    label: "24/7 Chat - Doubt clearance",
    icon: "/tt/ic-brand-line.svg",
    scene: "doubt",
  },
];

const LEADS: Scenario[] = [
  {
    label: "Embed your twin in website",
    icon: "/tt/ic-text-scan-ai.svg",
    body: "Visitors ask their doubts on your course page and your Twin answers them, in your voice, on your behalf.",
    scene: "leadembed",
  },
  /* Both play a current-learner mockup rather than one of their own: a lead
     on a Twin page is asking the same doubts a learner asks, and a trial run
     is the same 1:1 the coaching scene already draws. */
  {
    label: "Dedicated Twin Page",
    icon: "/tt/ic-brand-line.svg",
    scene: "doubt",
  },
  {
    label: "Trail practice with your twin",
    icon: "/tt/ic-code-asterisk.svg",
    scene: "coaching",
  },
];

/**
 * Community is the scenarios that still apply once a course is over — derived
 * from the current-learner list rather than restated, so the copy, icon and
 * scene stay in step if the entry is edited. 1:1 Coaching used to be the other
 * one; it is no longer in the list above, so it is no longer picked up here.
 */
const COMMUNITY: Scenario[] = CURRENT_LEARNERS.filter((item) =>
  ["24/7 Chat - Doubt clearance"].includes(item.label),
);

/**
 * The three audiences. The tab group that used to switch between them has been
 * taken out, so only the first is rendered — the other two are kept here rather
 * than deleted because their scenarios exist nowhere else on the page.
 */
const AUDIENCES = [
  {
    id: "current",
    tab: "Current Learners",
    heading: "current Learners",
    scenarios: CURRENT_LEARNERS,
  },
  {
    id: "leads",
    tab: "Leads conversion",
    heading: "Leads you want to convert",
    scenarios: LEADS,
  },
  {
    id: "community",
    tab: "Learners community",
    heading: "your past-learner Community",
    scenarios: COMMUNITY,
  },
] as const;

export function UseCases() {
  return (
    <ScenarioSection
      id="use-cases"
      eyebrow="Interactive Twin"
      heading="Give every learner a way to learn from you, anytime."
      scenarios={AUDIENCES[0].scenarios}
      topRule
    />
  );
}
