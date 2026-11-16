import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";
import { Spinner } from "./Spinner";

export type ButtonVariant =
  | "primary"
  | "strong"
  | "secondary"
  | "ghost"
  | "danger"
  | "success";
/**
 * `lg` and `xl` are MARKETING ONLY as of 25 Sep 2026 — product code uses `sm`
 * or `md`. This creates a real, unresolved conflict with the `primary`
 * variant below: white-on-orange only clears WCAG AA at `lg` (19px bold).
 * Restricting product to `sm`/`md` means `primary` currently has NO
 * compliant size in-product. Not silently patched — see the note on
 * `primary` and DECISIONS.md.
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Stretch to the container. Use in mobile session controls and modal footers. */
  fullWidth?: boolean;
  /** Icon slot. Decorative only — the label must carry the meaning. */
  leadingIcon?: ReactNode;
  /**
   * Square, icon-only. REQUIRES `aria-label` — without one a screen reader
   * announces "button" and nothing else, which is the most common accessibility
   * failure in a toolbar.
   */
  iconOnly?: boolean;
  /** Unread count, rendered as a pill beside the icon. Omit rather than pass 0. */
  count?: number;
  /**
   * Shows the brand-mark loading grid where `leadingIcon` would sit (any
   * passed `leadingIcon` is ignored while loading, never both at once), and
   * disables the button. Added 25 Sep 2026 from the Figma "Processing"
   * reference — the label itself stays as passed, so callers write
   * `loading={saving} > {saving ? "Saving…" : "Save"}` rather than the
   * component inventing copy.
   */
  loading?: boolean;
  /**
   * Trailing icon slot. Decorative only. Exists for the marketing CTA's arrow —
   * `Request early access →` — which the landing page was expressing as a literal
   * character inside the label, where a screen reader reads it aloud.
   */
  trailingIcon?: ReactNode;
}

/**
 * `base` sets border WIDTH only. Border colour belongs to the variant — setting
 * it in both places lets Tailwind's generated source order decide the winner
 * rather than the order the classes are written in, which silently drops the
 * outline off `secondary` and `danger`.
 */
/**
 * rounded-full, not rounded-sm — changed 25 Sep 2026. Every button is a pill (a
 * circle when iconOnly, since icon buttons are square). This intentionally
 * breaks the system's usual "radius steps with the element" rule — Button is
 * the one control pinned to the max radius regardless of its size step.
 */
const base = cn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap",
  "font-ui font-semibold rounded-full border",
  "transition-[color,background-color,border-color,box-shadow,transform] duration-(--tt-duration-quick) ease-standard",
  // An inline SVG is flex-shrink:1 by default, so a too-tight content box
  // silently SQUASHES the glyph instead of overflowing where you would see it.
  // Belt and braces alongside the padding fix above.
  "[&_svg]:shrink-0",
  // Every glyph in a button is 16px (`--tt-icon-sm`), as the V3 prototype forces with `.btn svg`.
  "[&_svg]:h-(--tt-icon-sm) [&_svg]:w-(--tt-icon-sm)",
  // Disabled is a flat fill-soft / muted label (the prototype), chosen in JS below; `loading` keeps
  // the variant and dims to 70% so "processing" never reads as "unavailable".
);

/**
 * VARIANTS ARE THE V3 PROTOTYPE'S (decided 16 Nov 2026: "use buttons from the prototype"). Mapping
 * from the prototype's classes:
 *
 *   btn--primary, btn--strong  ->  `primary`   (BOTH render orange in the prototype: the later
 *                                  `.btn--strong` rule overrides the dark fill. The dark `strong`
 *                                  below is kept for the marketing site only.)
 *   btn--secondary             ->  `secondary` white (`--tt-surface`) with the soft shadow
 *   btn--ghost                 ->  `ghost`
 *   btn--danger                ->  `danger`
 *   btn--success               ->  `success`
 *
 * Sizes: default 36 tall with 16px padding, `sm` 32 tall with 12px padding at 13px. Every button
 * is a pill at 14px / 600. Disabled is a flat `--tt-fill-soft` with `--tt-text-muted` text and a
 * not-allowed cursor, not a faded copy of the variant.
 */
const variants: Record<ButtonVariant, string> = {
  /** The default: white on orange. At most one per view or dialog (D107). */
  primary: "border-transparent bg-primary text-on-primary enabled:hover:bg-primary-hover",

  /**
   * Black in light theme, white in dark: the neutral filled button. NOT in the V3 prototype (its
   * `btn--strong` is orange, see the mapping above); kept for the marketing site's CTAs
   * (EarlyAccessSteps, InviteForm). Whether to retire it is open.
   */
  strong: "border-transparent bg-strong text-on-strong enabled:hover:bg-strong-hover",

  /**
   * White (`--tt-surface`) with `--tt-shadow-secondary`, as the V3 prototype draws it. Hover mixes
   * 3% ink into the surface, press scales to 98%. (It was a soft grey fill before 16 Nov 2026,
   * from an earlier Figma read; the prototype is the reference.)
   */
  secondary:
    "border-transparent bg-surface text-ink shadow-secondary [&_svg]:text-ink-secondary active:scale-[0.98] enabled:hover:bg-[color-mix(in_srgb,var(--tt-text-primary)_3%,var(--tt-surface))]",

  /** Transparent, ink text, a soft grey fill on hover. */
  ghost: "border-transparent bg-transparent text-ink [&_svg]:text-ink-secondary enabled:hover:bg-fill-soft",

  /**
   * Destructive is outlined, not filled: a filled destructive button has the same weight as the
   * primary action. Soft status border (`--tt-danger-border`), danger label.
   */
  danger: "border-danger-border bg-transparent text-danger enabled:hover:bg-danger-subtle",

  /** Green fill, white label (the prototype's `btn--success`); the label flips to the subtle tint in dark. */
  success:
    "border-transparent bg-success text-surface dark:text-success-subtle enabled:hover:bg-[color-mix(in_srgb,var(--tt-text-primary)_12%,var(--tt-success))]",
};

/** Disabled: flat fill, muted label, not-allowed. `secondary` keeps its shadow, as in the prototype. */
const disabledStyle = "cursor-not-allowed border-transparent bg-fill-soft text-ink-muted [&_svg]:text-current";

/**
 * Icon-only buttons are square at every size, so a toolbar keeps its rhythm.
 *
 * NO `px-0` here any more — fixed 29 Sep 2026, and it was a real bug, not a
 * tidy-up. These used to carry `px-0` while `sizes` carried `px-3`/`px-5`, so
 * every icon-only button rendered BOTH classes. They tie on specificity, so the
 * winner is decided by Tailwind's generated source order rather than by the
 * order they are written — and `px-3` was winning. An `sm` icon button is 32px
 * wide, so 12px of padding each side plus 1px of border each side left an 8px
 * content box, and since an inline SVG defaults to `flex-shrink: 1` the 16px
 * icon was squashed to **6px wide by 16px tall** rather than overflowing, which
 * is why it looked thin and small instead of visibly broken.
 *
 * Padding now lives in its own map and the component picks exactly one of the
 * two, so no tie exists to resolve. This is the same lesson already recorded
 * above for the disabled/loading opacity — two utilities keyed the same way
 * must never both be emitted.
 */
const iconSizes: Record<ButtonSize, string> = {
  sm: "w-8",
  md: "w-9",
  lg: "w-[50px]",
  xl: "w-[54px]",
};

/**
 * Horizontal padding for a LABELLED button. Mutually exclusive with
 * `iconSizes` — the component emits one or the other, never both.
 */
const paddings: Record<ButtonSize, string> = {
  sm: "px-3",
  md: "px-4",
  lg: "px-6",
  xl: "px-6",
};

/**
 * `xl` is the MARKETING call to action, added 10 Sep 2026.
 *
 * The landing page had hand-rolled the same dark CTA at four different specs —
 * heights 34 / 44 / 48 / 54, radii 8 / 10 / 12, weights 600 and 700 — for what
 * is semantically one button. Three of those map onto sm / md / lg; the fourth
 * did not exist here, so it is added rather than forcing the marketing page to
 * compromise. 16px label, because marketing body copy is 16px (see the type
 * scale) and a CTA should not read smaller than the paragraph above it.
 *
 * Product screens should not reach for this. If an in-app button needs to be
 * 54px tall, the page hierarchy is wrong, not the button.
 */
const sizes: Record<ButtonSize, string> = {
  sm: "h-8 text-[13px]",
  md: "h-9 text-[14px]",
  lg: "h-[50px] text-[19px]",
  xl: "h-[54px] text-[16px]",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leadingIcon,
  iconOnly = false,
  count,
  trailingIcon,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled && !loading;
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        base,
        isDisabled ? cn(disabledStyle, variant === "secondary" && "shadow-secondary") : variants[variant],
        sizes[size],
        // Exactly one of these — never both. See the note on `iconSizes`.
        iconOnly ? iconSizes[size] : paddings[size],
        fullWidth && "w-full",
        
        // Lighter than true-disabled, and non-interactive without looking
        // "unavailable" — matches the Figma reference's still-legible,
        // pastel-toned "Processing" state, distinct from its separate,
        // fully-grey "Disabled" state.
        loading && "pointer-events-none opacity-70",
        className,
      )}
      {...rest}
    >
      {loading ? (
        // aria-hidden on the wrapper, not just the button's own aria-busy —
        // the Spinner's internal role="status" is for standalone use. Nested
        // inside an aria-hidden ancestor it's suppressed entirely, so a screen
        // reader announces the button's one "busy" state once, not twice.
        <span aria-hidden="true" className="inline-flex shrink-0">
          <Spinner size={size === "sm" ? "sm" : "md"} />
        </span>
      ) : leadingIcon ? (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {leadingIcon}
        </span>
      ) : null}
      {children}
      {trailingIcon ? (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {trailingIcon}
        </span>
      ) : null}
      {typeof count === "number" ? (
        <span
          className={cn(
            "inline-grid h-[18px] min-w-[18px] shrink-0 place-items-center rounded-full px-[5px]",
            "font-ui text-[10.5px] font-semibold leading-none tabular-nums",
            // Was bg-primary. A count is not a call to action, and an orange
            // dot on every toolbar button is most of why the product read as
            // orange. It inverts against its own button instead: `strong` is
            // already the theme's opposite polarity, so a pill on top of it
            // must come back to surface/ink or it is black-on-black in light
            // theme and white-on-white in dark. Both pairs flip with the
            // token layer, so neither can be shipped invisible.
            variant === "strong"
              ? "bg-surface text-ink"
              : "bg-strong text-on-strong",
          )}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}
