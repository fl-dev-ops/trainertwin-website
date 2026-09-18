import { cn } from "./cn";

export interface DisclosureMarkerProps {
  /** Full name of the trainer this twin was built from. */
  trainerName: string;
  /** Initials fallback when there is no photo. Derived from the name if omitted. */
  initials?: string;
  /** Trainer photo. Falls back to initials. */
  avatarUrl?: string;
  /**
   * Composited inside a video frame rather than sitting in the session header.
   * A likeness of a real person that can be screen-recorded must carry its
   * disclosure inside the pixels, not beside them — so in video mode this
   * appears twice, once in each placement.
   */
  overlay?: boolean;
  className?: string;
}

function toInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * The AI disclosure marker. Persistent, quiet, and never `--tt-primary` —
 * orange means *the platform is acting*, and this is a statement of fact.
 *
 * Rules it enforces by construction (foundations §07.1):
 *  - names the trainer, because the trust being extended is theirs.
 *    "AI assistant" is not a disclosure; "AI twin of Priya Raman" is.
 *  - carries no dismiss affordance.
 *  - neutral on neutral, which lands at ~7.9:1 in both themes.
 */
export function DisclosureMarker({
  trainerName,
  initials,
  avatarUrl,
  overlay = false,
  className,
}: DisclosureMarkerProps) {
  const firstName = trainerName.trim().split(/\s+/)[0];
  const avatarInitials = initials ?? toInitials(trainerName);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3",
        "font-ui text-[12px] leading-none",
        overlay
          ? "bg-surface-raised/85 text-ink backdrop-blur-sm border border-line"
          : "bg-surface-raised text-ink-secondary border border-line",
        className,
      )}
    >
      {avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={avatarUrl}
          alt=""
          className="h-5 w-5 shrink-0 rounded-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-ink text-[9px] font-semibold text-surface"
        >
          {avatarInitials}
        </span>
      )}
      <span className="whitespace-nowrap">
        AI twin of <b className="font-semibold text-ink">{trainerName}</b>{" "}
        <span className="text-ink-tertiary">· not {firstName}</span>
      </span>
    </div>
  );
}
