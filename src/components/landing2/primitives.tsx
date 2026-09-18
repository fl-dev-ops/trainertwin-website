import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";
import { cn } from "@/components/cn";

/**
 * Every wrapper here forwards the rest of its props, because the motion layer
 * is attribute-driven: a section marks a block for reveal by putting
 * `data-reveal` on it, and that has to survive the component boundary.
 */

/**
 * The Figma is drawn on a 1728px frame with a 1200px content column, i.e. 264px
 * of gutter a side. Below 1728 the gutter collapses before the column does.
 */
export function Container({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-6", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

/** The mono, letter-spaced kicker that opens every section. */
export function Eyebrow({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("l-eyebrow", className)} {...rest}>
      {children}
    </p>
  );
}

/**
 * Section title. 44px at the design width, stepped down twice for narrow
 * viewports — the tracking is a ratio on .l-display, so it follows on its own.
 */
export function SectionTitle({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "l-display text-[30px] leading-[1.18] sm:text-[36px] md:text-[44px] md:leading-[60px]",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

/** Solid dark pill, the page's primary action. */
type PrimaryButtonProps =
  | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>);

export function PrimaryButton({
  className,
  children,
  href,
  ...rest
}: PrimaryButtonProps) {
  // Button's `strong` at size md — the in-page CTA size. Written out because
  // this renders an anchor as often as a button, and the system component is
  // button-only.
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-ui font-semibold rounded-sm border border-transparent",
    "bg-strong text-on-strong hover:bg-strong-hover transition-colors duration-150 ease-standard",
    "h-10 px-5 text-[14px] active:scale-[0.98]",
    className,
  );

  // Given somewhere to go it renders as a link, so the CTA can be opened in a
  // new tab, copied, and read as navigation rather than as an action.
  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

/**
 * One design pixel, expressed in the units of the enclosing `.l-stage`. Use it
 * for every offset and size inside a stage so the whole mockup shrinks with its
 * column. See the FIT block in landing.css for why this is not a `scale()`.
 */
export const u = (n: number) => `calc(${n} * var(--l-u))`;

/**
 * Masked icon. The exports are solid white, so the mask lets the surrounding
 * list item colour the glyph with currentColor and animate it on hover.
 */
export function MaskIcon({
  src,
  size = 20,
  className,
}: {
  src: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("l-icon", className)}
      style={{
        // Both dimensions are set explicitly: the glyphs sit in flex rows that
        // would otherwise let a 20px box collapse to its (zero) content.
        width: size,
        height: size,
        ["--l-icon" as string]: `url(${src})`,
      }}
    />
  );
}
