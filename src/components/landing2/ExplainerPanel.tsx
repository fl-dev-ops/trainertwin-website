"use client";

import { LessonScene } from "./session/LessonScene";

/**
 * "Generate explainer video" — the first step in How it works.
 *
 * It plays the Lessons and study notes scene rather than a panel of its own:
 * that scene already tells this step end to end — the brief written, the
 * library it produces, one course playing — and drawing a second version of it
 * would mean two things to keep in step whenever the story changes.
 *
 * The scene is 591 x 445 against the frame's 380 x 302, so it is centred and
 * the frame's ground shows as a thin band above and below rather than the
 * scene being cropped.
 */
export function ExplainerPanel() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LessonScene />
    </div>
  );
}
