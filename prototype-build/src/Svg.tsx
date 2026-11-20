import type { ComponentType, ReactNode } from "react";
import * as Ui from "@components/UiIcons";
import * as More from "@components/icons";
import { ICONS, MENU_ICONS } from "./generated";
import sigs from "./iconSigs.json";

type IconC = ComponentType<{ size?: number }>;
const LIBRARY = { ...Ui, ...More } as unknown as Record<string, IconC>;

/** Shape signature of an svg's drawing elements, the same one `scripts/prototype-build/gen-icons.py` writes to iconSigs.json. */
function signature(svg: string) {
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>[\s\S]*$/, "");
  const parts: string[] = [];
  for (const m of inner.matchAll(/<(path|circle|rect|line|polyline)\b([^>]*?)\/?>/g)) {
    const a: Record<string, string> = {};
    for (const x of m[2].matchAll(/([\w-]+)="([^"]*)"/g)) a[x[1]] = x[2];
    if (m[1] === "path" && a.d) parts.push("p:" + a.d.replace(/\s+/g, " ").trim());
    else if (m[1] === "circle") parts.push(`c:${a.cx},${a.cy},${a.r}`);
    else if (m[1] === "rect") parts.push(`r:${a.x ?? ""},${a.y ?? ""},${a.width},${a.height},${a.rx ?? ""}`);
    else if (m[1] === "line") parts.push(`l:${a.x1},${a.y1},${a.x2},${a.y2}`);
  }
  return parts.join("|");
}

/**
 * Turns an svg string scraped from V3 into the matching library icon (src/components/UiIcons.tsx + icons.tsx). The
 * wrapper keeps the `[&>span>svg]` sizing the pages use. Anything the library does not have yet falls back to the raw
 * markup and is listed in `window.__rawIcons` so the gap is visible.
 */
export function html(svg: string): ReactNode {
  const name = (sigs as Record<string, string>)[signature(svg)];
  const C = name ? LIBRARY[name] : undefined;
  if (C) return <span aria-hidden="true" className="contents"><C /></span>;
  if (typeof window !== "undefined") {
    const w = window as unknown as { __rawIcons?: Set<string> };
    (w.__rawIcons ??= new Set()).add(signature(svg).slice(0, 60));
  }
  return <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
}

const asSvg = (inner: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

/** An icon from the prototype's own icon set (24px grid, 2px stroke), by name; resolves to the library icon. */
export function Icon({ name }: { name: keyof typeof ICONS | string }) {
  return <>{html(asSvg(ICONS[name] ?? ""))}</>;
}

/** The small icons in the prototype's ⋮ menus. */
export function MenuIcon({ name }: { name: string }) {
  return <>{html(asSvg(MENU_ICONS[name] ?? ""))}</>;
}

export const SunIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <circle cx="8" cy="8" r="2.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 1.8v1.6M8 12.6v1.6M1.8 8h1.6M12.6 8h1.6M3.6 3.6l1.1 1.1M11.3 11.3l1.1 1.1M3.6 12.4l1.1-1.1M11.3 4.7l1.1-1.1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
export const MoonIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M9.2 2.2a5.2 5.2 0 1 0 4.6 7.6 4.4 4.4 0 0 1-4.6-7.6Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
