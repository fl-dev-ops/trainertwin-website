import type { HTMLAttributes } from "react";
import { cn } from "./cn";

/**
 * `flat` was renamed to `default` on 10 Sep 2026 when the default gained
 * elevation — a variant called "flat" that casts a shadow is a lie in the API.
 */
export type CardVariant = "default" | "raised" | "interactive" | "setup";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

/**
 * The default container. Almost every product screen is cards in a grid.
 *
 * Padding lives on the sections, never on the Card itself — that way a card can
 * hold a full-bleed image or a table flush to its edges without fighting a
 * padding it did not ask for. `overflow-hidden` is what makes the radius clip
 * that content correctly.
 *
 * Radius is `--tt-radius-lg` (16): a page-level card is the outer shape, and
 * the tiles, rows and quote bubbles inside it take `--tt-radius-md` (12), the
 * step below their container. Changed from 12 on 6 Nov 2026 after the V3 build
 * was found using 16 on most pages and 12 on the rest.
 */
export function Card({
  variant = "default",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden bg-surface",
        // `setup` is the full-page onboarding card (Build my twin, Voice
        // library, "Olga's twin is ready"): radius-xl, no border, elevation-2,
        // and it pads ITSELF (32px) — the one exception to "padding lives on
        // the sections", because its children are a form, not full-bleed media.
        // Measured in the V3 build, 5 Nov 2026: 480 wide for a form or choice,
        // 640 for a result, 680 for a list; always centred. Not a general card.
        variant === "setup"
          ? "rounded-xl p-8 shadow-e2"
          : cn(
              "rounded-lg",
              // Lighter than the general divider (--color-line) — a card's edge
              // sits next to open canvas on every side, not inside another
              // surface, so it doesn't need as much definition. 25 Sep 2026.
              "border border-line-card",
              // Every card carries a resting shadow so it reads as an object
              // sitting on the canvas rather than a region drawn on it —
              // shadow-card, lighter than the general elevation-1. Raised
              // escalates to elevation-2. In dark theme this is a hairline of
              // light, not a shadow — shadows are invisible on near-black.
              variant === "raised" ? "shadow-e2" : "shadow-card",
            ),
        // Hover is carried by elevation alone. No border highlight, and no surface
        // shift either — a card that lifts should not also look recessed.
        variant === "interactive" &&
          "cursor-pointer transition-shadow duration-150 ease-standard hover:shadow-e2",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Title row. Separated by a hairline so the card reads as structured, not stacked. */
export function CardHeader({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-3 border-b border-line px-5 py-4",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 px-5 py-5", className)} {...rest}>
      {children}
    </div>
  );
}

/**
 * Action row. A divider, not a sunken band — matches the source screen this was
 * drawn from (a plain row under a hairline, not a filled base), and changed
 * 25 Sep 2026 from the surface-sunken fill this shipped with originally. Still
 * right-aligned, because the confirming action belongs closest to the thumb and
 * the eye's exit.
 */
export function CardFooter({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t border-line px-5 py-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Renders the serif display face — MARKETING USE ONLY, added 25 Sep 2026.
   * Noto Serif no longer appears inside the product at any size; Figtree carries
   * every in-app title, including large ones. This prop exists purely so
   * marketing pages (src/components/home/, src/components/landing/) can reuse
   * this shared Card rather than forking one. Product code must never pass it —
   * if a product screen needs a serif moment, that is a design conversation,
   * not a prop.
   */
  display?: boolean;
}

export function CardTitle({
  display = false,
  className,
  children,
  ...rest
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        // display (marketing only) keeps semibold — an editorial headline stays
        // confident. The product title softens to medium, 25 Sep 2026.
        display
          ? "font-display text-[20px] font-semibold leading-tight"
          : "font-ui text-[15px] font-title leading-tight",
        "text-ink",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}
