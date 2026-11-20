import { useSyncExternalStore } from "react";

/**
 * NOT IN STORYBOOK (app state). Minutes a trainer has added to each learner on top of what they were given
 * (V3 `state.learnerExtra`). Twin users and the learner page both read it, so adding credits shows in both.
 */
let extra: Record<string, number> = {};
const subs = new Set<() => void>();
export const addCredits = (name: string, min = 30) => {
  extra = { ...extra, [name]: (extra[name] ?? 0) + min };
  subs.forEach((f) => f());
};
export const useLearnerExtra = () => useSyncExternalStore((f) => (subs.add(f), () => subs.delete(f)), () => extra);
