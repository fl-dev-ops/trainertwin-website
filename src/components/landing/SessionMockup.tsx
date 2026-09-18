import { CoachingScene } from "./session/CoachingScene";
import { CodeReviewScene } from "./session/CodeReviewScene";
import { ConceptScene } from "./session/ConceptScene";
import { CoTrainerScene } from "./session/CoTrainerScene";
import { CourseDemoScene } from "./session/CourseDemoScene";
import { DebugScene } from "./session/DebugScene";
import { DoubtChatScene } from "./session/DoubtChatScene";
import { LeadEmbedScene } from "./session/LeadEmbedScene";
import { LessonScene } from "./session/LessonScene";
import { ReviewScene } from "./session/ReviewScene";
import { WhiteboardScene } from "./session/WhiteboardScene";

/**
 * The scenario panel's mockup: one scene per scenario in the list.
 *
 * Six are drawn frame by frame in Figma — the code session behind "Technical
 * interview", the whiteboard behind "System design", the live class behind
 * "Co-trainer", the chat app behind "24/7 Chat", the course studio behind
 * "Lessons and study notes", and the course page behind "Course demos". The
 * other four have no frames and are composed from the vocabulary those
 * established; each says so in its own header.
 *
 * Switching scenes swaps the component outright, which is what we want: the new
 * scene's timeline is built fresh from its first beat rather than joining the
 * old one mid-lap.
 */
export type SessionScene =
  | "code"
  | "whiteboard"
  | "cotrainer"
  | "doubt"
  | "review"
  | "debug"
  | "concept"
  | "coaching"
  | "leadembed"
  | "lesson"
  | "coursedemo";

const SCENES: Record<SessionScene, () => React.JSX.Element> = {
  code: CodeReviewScene,
  whiteboard: WhiteboardScene,
  cotrainer: CoTrainerScene,
  doubt: DoubtChatScene,
  review: ReviewScene,
  debug: DebugScene,
  concept: ConceptScene,
  coaching: CoachingScene,
  leadembed: LeadEmbedScene,
  lesson: LessonScene,
  coursedemo: CourseDemoScene,
};

export function SessionMockup({ scene }: { scene: SessionScene }) {
  const Scene = SCENES[scene] ?? CodeReviewScene;
  return <Scene />;
}
