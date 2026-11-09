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
  /**
   * Fill, not border, as of 25 Sep 2026 — matches Badge. bg-surface + a border
   * was the old shape; on a white card bg-surface alone is invisible, so the
   * fill moved to bg-fill-soft rather than just deleting the border outright.
   */
  grounded: {
    chip: "bg-fill-soft text-ink-secondary",
    dot: "bg-success",
  },
  inferred: {
    chip: "bg-fill-soft text-ink-secondary",
    dot: "bg-info",
  },
  /**
   * KEPT its border on purpose, unlike the other two — this is the only state
   * that gets caution colour and a visible edge, because it is the only one
   * where the trainer's name is attached to something that isn't theirs.
   * Removing the border here would erase that signal, not just declutter it.
   */
  outside: {
    chip: "border bg-caution-subtle border-caution text-caution font-medium",
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
        "inline-flex items-center gap-1.5 rounded-xs px-2.5 py-1",
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
            <b className="font-medium text-ink">{source}</b>
          </>
        ) : null}
      </span>
    </span>
  );
}
