import type { ImgHTMLAttributes } from "react";
import { cn } from "./cn";

export type AvatarSize = "xs" | "sm" | "md" | "lg";

export interface AvatarProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
  /** Image URL. When absent or broken, the initials fallback shows instead. */
  src?: string;
  /**
   * REQUIRED. Used as the image's alt text and to derive the initials fallback.
   * An avatar with no name is a decorative circle; pass the person's name.
   */
  alt: string;
  size?: AvatarSize;
}

const sizes: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-[9.5px]",
  sm: "h-7 w-7 text-[10.5px]",
  md: "h-8 w-8 text-[12px]",
  lg: "h-11 w-11 text-[15px]",
};

/**
 * Initials are derived, never passed in — two sources for one value drift.
 * Takes the first letter of the first and last word, so "Priya Raman" -> PR and
 * a single name -> one letter rather than a doubled one.
 */
function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase();
}

export function Avatar({ src, alt, size = "md", className, ...rest }: AvatarProps) {
  const base = cn(
    "shrink-0 overflow-hidden rounded-full object-cover",
    sizes[size],
    className,
  );

  if (!src) {
    return (
      <span
        role="img"
        aria-label={alt}
        title={alt}
        className={cn(
          base,
          "grid place-items-center bg-primary-ink font-ui font-semibold text-surface",
        )}
      >
        <span aria-hidden="true">{initials(alt)}</span>
      </span>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element -- avatars are remote,
  // arbitrary-origin URLs; next/image would need every host allow-listed.
  return <img src={src} alt={alt} className={base} {...rest} />;
}
