import { Avatar } from "./Avatar";
import { cn } from "./cn";

/**
 * The learner avatars on a Twin agent card, a roleplay card and the Twin-for-all card:
 * 28px, overlapped by 8, a 2px ring in the surface colour, then a `+N` disc. Pass every
 * learner; it draws `max` and counts the rest.
 */
export interface Learner {
  name: string;
  src?: string;
}

export function LearnerStack({ learners, max = 4, className }: { learners: readonly Learner[]; max?: number; className?: string }) {
  const shown = learners.slice(0, max);
  const more = learners.length - shown.length;
  return (
    <span className={cn("flex items-center", className)} role="group" aria-label="Learners">
      {shown.map((l, i) => (
        <Avatar key={l.name} src={l.src} alt={l.name} size="sm" className={cn("box-border border-2 border-surface", i > 0 && "-ml-2")} />
      ))}
      {more > 0 ? (
        <span
          className="-ml-2 grid h-7 w-7 place-items-center rounded-full bg-fill-soft-hover font-ui text-[11px] font-medium text-ink-secondary border-2 border-surface"
          aria-label={`${more} more learners`}
        >
          +{more}
        </span>
      ) : null}
    </span>
  );
}
