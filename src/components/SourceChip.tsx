import { cn } from "./cn";

export type SourceConfidence = "grounded" | "inferred" | "outside";

export interface SourceChipProps {
  confidence: SourceConfidence;
  /** Where the answer came from, e.g. "Sprint Planning.pdf, p.14". Grounded only. */
  source?: string;
  className?: string;
}

const COPY: Record<SourceConfidence, string> = {
  grounded: "Grounded",
  inferred: "Inferred from your teaching style",
  outside: "Outside this trainer's material",
};

const STYLES: Record<SourceConfidence, { chip: string; dot: string }> = {
  grounded: {
    chip: "bg-surface border-line text-ink-secondary",
    dot: "bg-success",
  },
  inferred: {
    chip: "bg-surface border-line text-ink-secondary",
    dot: "bg-info",
  },
  /**
   * The only state that gets caution colour and a visible border, because it is
   * the only one where the trainer's name is attached to something that isn't
   * theirs. Everything else stays neutral so this reads as the exception.
   */
  outside: {
    chip: "bg-caution-subtle border-caution text-caution font-semibold",
    dot: "bg-caution",
  },
};

/**
 * Source attribution beneath a twin's answer (foundations §07.2).
 *
 * Chips sit BELOW the answer, never inline. Inline superscripts interrupt
 * reading, and a mock interview under time pressure cannot afford that.
 */
export function SourceChip({ confidence, source, className }: SourceChipProps) {
  const style = STYLES[confidence];
  const label = COPY[confidence];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xs border px-2.5 py-1",
        "font-ui text-[11.5px] leading-none",
        style.chip,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-[7px] w-[7px] shrink-0 rounded-full", style.dot)}
      />
      <span>
        {label}
        {confidence === "grounded" && source ? (
          <>
            {" · "}
            <b className="font-semibold text-ink">{source}</b>
          </>
        ) : null}
      </span>
    </span>
  );
}
