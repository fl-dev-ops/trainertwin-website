import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";

/**
 * Single-select patterns (§8, "Selectable tile / radio-card"). The rule they share:
 * a selected state never changes an element's box model, so choosing one never
 * reflows its neighbours. Radio-card darkens its border by a colour step (never a
 * width step); the image tile gets an inset ring (never an outset border).
 *
 * Both are real radio inputs under a label, so grouping (`name`), arrow-key
 * navigation and form submit all come from the browser.
 */
type NativeRadio = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children" | "className">;

export interface RadioCardProps extends NativeRadio {
  title: string;
  description?: ReactNode;
  className?: string;
}

export function RadioCard({ title, description, className, ...input }: RadioCardProps) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-4 rounded-lg border border-line bg-surface p-4",
        "transition-colors duration-(--tt-duration-quick) ease-standard",
        "has-[:checked]:border-[color-mix(in_srgb,var(--tt-text-secondary)_55%,var(--tt-border))] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary",
        "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        className,
      )}
    >
      {/* The dot is negative space: a filled circle with the surface colour punched
          out by an inset shadow, not a separate dot element. */}
      <input
        type="radio"
        {...input}
        className="mt-[1px] h-[18px] w-[18px] flex-none appearance-none rounded-full border-[1.5px] border-strong bg-surface checked:bg-strong checked:shadow-[inset_0_0_0_4px_var(--tt-surface)] focus-visible:outline-none"
      />
      <span className="flex min-w-0 flex-col gap-1">
        <span className="font-ui text-[16px] leading-[22px] font-title text-ink">{title}</span>
        {description ? (
          <span className="font-ui text-[14px] leading-5 text-ink-secondary">{description}</span>
        ) : null}
      </span>
    </label>
  );
}

export interface ImageTileProps extends NativeRadio {
  src: string;
  /** Required: the tile is only an image, so this is its accessible name. */
  label: string;
  className?: string;
}

export function ImageTile({ src, label, className, ...input }: ImageTileProps) {
  return (
    <label
      className={cn(
        "relative block h-[148px] w-[128px] cursor-pointer overflow-hidden rounded-md",
        "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary",
        // A 2px INSET ring drawn over the image by a pseudo-element: an inset
        // box-shadow on the label itself would sit beneath the image and vanish.
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:content-['']",
        "has-[:checked]:after:shadow-[inset_0_0_0_2px_var(--tt-text-primary)]",
        className,
      )}
    >
      <input type="radio" aria-label={label} {...input} className="sr-only" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-cover" />
    </label>
  );
}
