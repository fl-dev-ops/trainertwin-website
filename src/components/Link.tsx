import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";
import { ArrowUpRightIcon } from "./UiIcons";

/**
 * Link (§8). Underlined, always: colour alone cannot tell a link from the text around
 * it (WCAG 1.4.1), and it is the rule people break most. `--tt-primary-ink`, which
 * clears AA as text; raw `--tt-primary` does not. The underline THICKENS on hover
 * (1px to 2px) rather than the colour changing, so the affordance survives for anyone
 * who cannot see the shift.
 *
 * `href` renders an `<a>`. With no `href` and an `onClick` it renders a `<button>`
 * styled the same, for an in-page action that reads as a link ("Show all").
 * `arrow` adds the 14px redirect icon: "Total reports 16 ↗" is one link.
 */
type Common = { children: ReactNode; arrow?: boolean; className?: string };
export type LinkProps =
  | (Common & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & { href: string })
  | (Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "type"> & { href?: undefined });

const cls =
  "inline-flex min-h-6 items-center gap-1 font-ui font-label text-primary-ink underline decoration-1 underline-offset-2 hover:decoration-2 " +
  "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Link(props: LinkProps) {
  const { children, arrow, className, ...rest } = props;
  const inner = (
    <>
      {children}
      {arrow ? <ArrowUpRightIcon size={14} /> : null}
    </>
  );
  if ("href" in rest && rest.href !== undefined) {
    const { href, ...a } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={cn(cls, className)} {...a}>
        {inner}
      </a>
    );
  }
  const { href: _unused, ...b } = rest as ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
  void _unused;
  return (
    <button type="button" className={cn(cls, "m-0 border-0 bg-transparent p-0 text-[inherit]", className)} {...b}>
      {inner}
    </button>
  );
}
