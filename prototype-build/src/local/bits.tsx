/**
 * NOT IN STORYBOOK YET. Small pieces the pages share; each is a candidate for a Storybook component.
 */

/** The learner initial circle (`.rp-avatar--1..5`): Storybook's Avatar tones, in the prototype's order. */
export const AVATAR_TONES = ["success", "info", "caution", "danger", "brand"] as const;

/** The five learners the sessions filters know, with the second line the Learner filter shows (V3 `TWIN_LEARNERS`). The value is the first name. */
export const LEARNER_OPTIONS = [
  { value: "all", label: "All learners" },
  { value: "Aisha", label: "Aisha Khan", description: "aisha.khan@gmail.com" },
  { value: "James", label: "James Carter", description: "james.carter@outlook.com" },
  { value: "Nora", label: "Nora Ali", description: "nora.ali@gmail.com" },
  { value: "Leo", label: "Leo Martin", description: "leo@martinrealty.ae" },
  { value: "Priya", label: "Priya Nair", description: "priya.nair@gmail.com" },
];
