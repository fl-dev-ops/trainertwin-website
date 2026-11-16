import { ICONS, MENU_ICONS } from "./generated";

/** An icon from the prototype's own icon set (24px grid, 2px stroke), by name. The paths come from v3/app.js. */
export function Icon({ name }: { name: keyof typeof ICONS | string }) {
  // The prototype's paths carry their own stroke attributes, so this is a plain 24px svg.
  return <svg viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] ?? "" }} />;
}

/** The small icons in the prototype's ⋮ menus. */
export function MenuIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MENU_ICONS[name] ?? "" }} />
  );
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
