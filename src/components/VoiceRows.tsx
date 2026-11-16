import type { ReactNode } from "react";
import { cn } from "./cn";
import { Button } from "./Button";

/**
 * Voice rows, copied from the V3 prototype on request (16 Nov 2026), no spec of their own.
 *
 * `VoiceRow`      the Voice-library row (`.voice-row`): a card row, radius 16, 1px `--tt-border`,
 *                 padding 12 / 16; name 15/22 600 with an optional line, a ghost Play and a secondary
 *                 Select on the right. Selected steps the border one colour step (no width change).
 * `VoiceListRow`  the Persona-settings row (`.rps-voice`): sits INSIDE a list card, a radio dot, name
 *                 14/20 600, a description 13/18 tertiary, and a 28px round play button; rows divide
 *                 with a hairline.
 */
export interface VoiceRowProps {
  name: string;
  detail?: string;
  selected?: boolean;
  playing?: boolean;
  onPlay?: () => void;
  onSelect?: () => void;
  className?: string;
}

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 3.5v9l7.5-4.5L5 3.5Z" /></svg>
);
const PauseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 3.5h2v9H5zM9 3.5h2v9H9z" /></svg>
);

export function VoiceRow({ name, detail, selected = false, playing = false, onPlay, onSelect, className }: VoiceRowProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 rounded-lg border bg-surface px-4 py-3 font-ui",
        selected ? "border-ink-tertiary" : "border-line",
        className,
      )}
    >
      <div className="min-w-0">
        <span className="block text-[15px] leading-[22px] font-title text-ink">{name}</span>
        {detail ? <span className="mt-0.5 block text-[13px] leading-[18px] text-ink-secondary">{detail}</span> : null}
      </div>
      <div className="flex flex-none items-center gap-2">
        <Button variant="ghost" size="sm" className="bg-fill-soft enabled:hover:bg-[color-mix(in_srgb,var(--tt-text-primary)_10%,var(--tt-surface))]" leadingIcon={playing ? <PauseIcon /> : <PlayIcon />} onClick={onPlay} aria-label={`${playing ? "Pause" : "Play"} ${name}`}>
          {playing ? "Pause" : "Play"}
        </Button>
        <Button variant="secondary" size="sm" onClick={onSelect} aria-pressed={selected}>
          {selected ? "Selected" : "Select"}
        </Button>
      </div>
    </div>
  );
}

export interface VoiceListRowProps {
  name: string;
  description?: string;
  selected?: boolean;
  playing?: boolean;
  onSelect?: () => void;
  onPlay?: () => void;
  trailing?: ReactNode;
}

/** Put several in a bordered list card; adjacent rows are divided by a hairline. */
export function VoiceListRow({ name, description, selected = false, playing = false, onSelect, onPlay, trailing }: VoiceListRowProps) {
  return (
    <div className="flex items-center gap-3 border-line px-4 py-3 font-ui not-first:border-t">
      <button type="button" role="radio" aria-checked={selected} onClick={onSelect} className="flex min-w-0 flex-1 items-center justify-between gap-3 border-0 bg-transparent p-0 text-left text-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
        <span className="flex min-w-0 flex-col">
          <span className="text-[14px] leading-5 font-title">{name}</span>
          {description ? <span className="text-[13px] leading-[18px] text-ink-tertiary">{description}</span> : null}
        </span>
        <span aria-hidden="true" className={cn("h-[18px] w-[18px] flex-none rounded-full border-[1.5px] border-strong", selected ? "bg-strong shadow-[inset_0_0_0_4px_var(--tt-surface)]" : "bg-surface")} />
      </button>
      {trailing}
      <button
        type="button"
        aria-label={`${playing ? "Pause" : "Play"} ${name}`}
        onClick={onPlay}
        className={cn(
          "inline-grid h-7 w-7 flex-none place-items-center rounded-full border-0 p-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary",
          playing ? "bg-primary-subtle text-primary" : "bg-transparent text-ink-secondary hover:bg-fill-soft hover:text-ink",
        )}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}
