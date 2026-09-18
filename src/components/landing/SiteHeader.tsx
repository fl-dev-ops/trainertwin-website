"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { Logo } from "@/components/Logo";
import { cn } from "@/components/cn";
import { Container } from "./primitives";

const NAV = [
  // The first of the two scenario sections, which is Explainer Video since
  // the two were swapped.
  { label: "Use cases", href: "#explainer-video" },
  // Aims at "What you give your twin" — the setup — rather than the section
  // that carries the "How it works" eyebrow further down.
  { label: "How it works", href: "#build-your-twin" },
  { label: "Integrate", href: "#integrate" },
  { label: "Compare", href: "#how-it-differs" },
  { label: "Invite", href: "https://www.trainertwin.com/invite" },
];

/**
 * What a Twin can be trained to be. Only the tech one exists today, so the
 * other three are listed but inert — announced, not linked.
 *
 * NO FIGMA SOURCE for this menu; the subtexts are written to match the
 * page's voice and are the first thing to replace with real copy.
 */
const AUDIENCES: Array<{
  label: string;
  blurb: string;
  icon: ReactNode;
  href?: string;
  current?: boolean;
}> = [
  {
    label: "Tech Trainer",
    blurb: "Code reviews, debugging and system design",
    href: "#top",
    current: true,
    icon: <path d="M9.5 8 5.5 12l4 4M14.5 8l4 4-4 4" />,
  },
  {
    label: "Sales Trainer",
    blurb: "Pitch practice, objections and negotiation",
    icon: <path d="M4 16.5l5.5-5.5 3.5 3.5L20 7.5M15.5 7.5H20v4.5" />,
  },
  {
    label: "Communication Trainer",
    blurb: "Presentations, clarity and delivery",
    icon: (
      <>
        <path d="M4.5 6.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-6l-6 4.5v-12.5Z" />
        <path d="M8.5 8h7M8.5 11h4.5" />
      </>
    ),
  },
  {
    label: "Leadership Trainer",
    blurb: "Feedback, coaching and hard conversations",
    icon: (
      <>
        <path d="M15 19.5v-1.5a3.5 3.5 0 0 0-3.5-3.5h-4A3.5 3.5 0 0 0 4 18v1.5" />
        <circle cx="9.5" cy="8" r="3.5" />
        <path d="M20 19.5V18a3.5 3.5 0 0 0-2.6-3.4M14.5 4.7a3.5 3.5 0 0 1 0 6.6" />
      </>
    ),
  },
];

/**
 * The two sections the menu points at, drawn as cards down the right of the
 * panel. Figma 603:6621. Each carries a mark of the section it opens — the
 * frame the explainer is composed in, the rings a session reaches out over —
 * and both are animated, quietly: the panel is open for a few seconds at a
 * time and the movement is meant to be noticed at the edge of the eye.
 */
const SECTIONS = [
  {
    label: "Explainer Video",
    blurb: "Turn your expertise into explainer videos in your training style.",
    href: "#explainer-video",
    art: "frames" as const,
  },
  {
    label: "Interactive Twin",
    blurb: "Give every learner a way to learn from you, anytime.",
    href: "#use-cases",
    art: "rings" as const,
  },
];

export function SiteHeader() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menu]);

  return (
    <header
      data-sticky-header
      className="sticky top-0 z-50 border-b border-[var(--l-line)] bg-white/90 backdrop-blur-md transition-shadow duration-200 [&.is-stuck]:shadow-[0_1px_16px_rgba(22,24,28,0.06)]"
    >
      <Container className="flex h-[84px] items-center justify-between gap-6">
        <a
          href="/TrainerTwin_home"
          aria-label="TrainerTwin — home"
          className="shrink-0"
        >
          {/* The project lockup, not a re-drawing of it: same mark, same
              wordmark, already colour-correct in both themes.

              It leaves the page: this route is the tech trainer’s, and home is
              /TrainerTwin_home. The nav’s own "Home" item and the footer
              still carry #top for getting back up this page. */}
          <Logo size={22} />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          <AudienceMenu />
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-ui inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--l-ink-nav)] transition-colors duration-150 ease-standard hover:text-[var(--l-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#early-access"
          className="font-ui hidden h-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[var(--l-btn)] px-[14px] text-[16px] font-semibold whitespace-nowrap text-white transition-colors duration-150 ease-standard hover:bg-black lg:inline-flex"
        >
          Early access
        </a>

        {/* Below lg the CTA lives in the menu, so the bar carries the toggle
            in its place rather than both. */}
        <button
          type="button"
          aria-expanded={menu}
          aria-controls="mobile-menu"
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((v) => !v)}
          className="-mr-2 grid h-10 w-10 shrink-0 place-items-center rounded-[8px] text-[var(--l-ink)] transition-colors duration-150 ease-standard hover:bg-[#f4f5f8] lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            className="h-[21px] w-[21px]"
          >
            {menu ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      <MobileMenu open={menu} onNavigate={() => setMenu(false)} />
    </header>
  );
}

/**
 * The whole nav in one sheet under the bar: the audiences, the sections, and
 * the call to action the bar gives up to make room for the toggle.
 *
 * Absolutely placed rather than in the header's flow, so opening it overlays
 * the page instead of pushing every section down by its height.
 */
function MobileMenu({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) {
  return (
    <div
      id="mobile-menu"
      hidden={!open}
      className="absolute inset-x-0 top-full border-b border-[var(--l-line)] bg-white shadow-[0_14px_34px_rgba(22,24,28,0.10)] lg:hidden"
    >
      <Container className="flex flex-col gap-1 py-4">
        <span className="font-ui px-2 pt-1 pb-2 text-[11px] font-semibold tracking-[0.06em] text-[#9aa0aa] uppercase">
          Services
        </span>
        {AUDIENCES.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                "font-ui rounded-[8px] px-2 py-2.5 text-[15px] font-medium",
                item.current
                  ? "bg-[#f4f5f8] text-[var(--l-ink)]"
                  : "text-[var(--l-ink-nav)]",
              )}
            >
              {item.label}
            </a>
          ) : (
            <span
              key={item.label}
              className="font-ui flex items-center gap-2 px-2 py-2.5 text-[15px] font-medium text-[#a8adb5]"
            >
              {item.label}
              <span className="font-ui rounded-full bg-[#f2f3f5] px-[7px] py-[2px] text-[10px] font-medium text-[#8a8f98]">
                Coming soon
              </span>
            </span>
          ),
        )}

        <span className="my-2 h-px bg-[var(--l-line)]" />

        {NAV.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            className="font-ui rounded-[8px] px-2 py-2.5 text-[15px] font-medium text-[var(--l-ink-nav)]"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#early-access"
          onClick={onNavigate}
          className="font-ui mt-3 inline-flex h-[44px] items-center justify-center rounded-[8px] bg-[var(--l-btn)] text-[16px] font-semibold text-white transition-colors duration-150 ease-standard hover:bg-black"
        >
          Early access
        </a>
      </Container>
    </div>
  );
}

/**
 * A disclosure rather than a menu widget: everything inside is a link or a
 * label, so Tab already walks it correctly and there are no arrow keys to
 * reimplement. Escape closes it and hands focus back to the trigger.
 */
function AudienceMenu() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closing = useRef<number | undefined>(undefined);

  /* Hover opens it, and leaving closes it after a beat. The beat matters: the
     panel hangs 18px below the trigger, and without it the pointer would leave
     the menu on the way down and shut it before it arrived. Mouse only —
     pointerenter fires on a tap too, and on a touch screen the press should
     open the menu rather than open-and-immediately-close it. */
  const hover = (opening: boolean) => (event: ReactPointerEvent) => {
    if (event.pointerType !== "mouse") return;
    window.clearTimeout(closing.current);
    if (opening) setOpen(true);
    else closing.current = window.setTimeout(() => setOpen(false), 160);
  };

  useEffect(() => () => window.clearTimeout(closing.current), []);

  useEffect(() => {
    if (!open) return;

    const onPointer = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      trigger.current?.focus();
    };

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      className="relative"
      onPointerEnter={hover(true)}
      onPointerLeave={hover(false)}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls="audience-menu"
        onClick={() => setOpen((v) => !v)}
        className="font-ui inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--l-ink-nav)] transition-colors duration-150 ease-standard hover:text-[var(--l-ink)]"
      >
        Services
        <svg
          aria-hidden="true"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className={cn(
            "mt-px transition-transform duration-200 ease-standard",
            open && "rotate-180",
          )}
        >
          <path
            d="M1 1.25 4.5 4.75 8 1.25"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* The 18px the panel hangs below the trigger, made hoverable, so the
          pointer can cross the gap without leaving the menu. */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-full left-0 h-[18px] w-[699px]",
          open ? "block" : "hidden",
        )}
      />

      <div
        id="audience-menu"
        /* Kept in the tree rather than `hidden`, which would take it out of
           the layout and leave the fade nothing to run on. `inert` is what
           keeps its links out of the tab order and off the screen reader while
           it is closed; visibility is in the transition so it flips only once
           the panel has finished fading, rather than the moment it starts. */
        inert={!open}
        className={cn(
          "absolute top-[calc(100%+18px)] -left-3 w-[699px] rounded-[16px] border border-[var(--l-line)] bg-white p-2 shadow-[0_14px_40px_rgba(22,24,28,0.12)]",
          /* The frame gives the list 315 and no icons; ours has them, so the
             column is widened just enough that no subtext wraps, and the cards
             take what is left of the 699. */
          "grid grid-cols-[336px_1px_minmax(0,1fr)] gap-2",
          "origin-top transition-[opacity,transform,visibility] duration-200 ease-standard",
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "pointer-events-none invisible -translate-y-2 scale-[0.985] opacity-0",
        )}
      >
        <div className="flex flex-col">
          {AUDIENCES.map((item) => {
            const body = (
              <>
                <span
                  className={cn(
                    "l-menu-tile grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[9px]",
                    item.current
                      ? "bg-[var(--l-brand)]/10 text-[var(--l-brand)]"
                      : "bg-[#f3f5f8] text-[#3f4650]",
                  )}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="l-menu-icon h-[17px] w-[17px]"
                  >
                    {item.icon}
                  </svg>
                </span>

                <span className="min-w-0 flex-1">
                  <span className="font-ui flex items-center gap-2 text-[15px] font-semibold text-[var(--l-ink)]">
                    {item.label}
                    {item.href ? null : (
                      <span className="font-ui rounded-full bg-[#f2f3f5] px-[7px] py-[2px] text-[10px] font-medium whitespace-nowrap text-[#8a8f98]">
                        Coming soon
                      </span>
                    )}
                  </span>
                  <span className="font-ui mt-1 block text-[13px] leading-[18px] text-[var(--l-ink-body)]">
                    {item.blurb}
                  </span>
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={item.current ? "page" : undefined}
                className={cn(
                  "l-menu-row flex items-start gap-3 rounded-[10px] p-2.5 text-[var(--l-ink-nav)] transition-colors duration-150 ease-standard",
                  item.current ? "bg-[#f4f5f8]" : "hover:bg-[#f7f8fa]",
                )}
              >
                {body}
              </a>
            ) : (
              // Not a link and not focusable: there is nowhere for it to go yet.
              <span
                key={item.label}
                className="l-menu-row flex items-start gap-3 rounded-[10px] p-2.5"
              >
                {body}
              </span>
            );
          })}
        </div>

        <span aria-hidden="true" className="my-1 block bg-[var(--l-line)]" />

        <div className="flex flex-col gap-2 py-1 pr-1">
          {SECTIONS.map((section) => (
            <a
              key={section.label}
              href={section.href}
              onClick={() => setOpen(false)}
              className="group relative flex-1 overflow-hidden rounded-[12px] border border-[var(--l-line)] bg-white p-[18px] transition-colors duration-150 ease-standard hover:border-[#d8dbe2]"
            >
              {section.art === "frames" ? <FramesArt /> : <RingsArt />}
              <span className="font-ui relative block text-[15px] font-semibold text-[var(--l-ink)]">
                {section.label}
              </span>
              <span className="font-ui relative mt-2 block max-w-[205px] text-[13px] leading-[19px] text-[var(--l-ink-body)]">
                {section.blurb}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * The Explainer Video mark: a line that wanders the dot field on the field's
 * own 9px pitch, turning at right angles like a snake.
 *
 * The route is authored rather than generated. It has to look unplanned, but a
 * random walk would give the server and the client different paths, and a new
 * one on every render — this is one wander, drawn once, that never repeats
 * itself closely enough to be read as a loop in the few seconds the menu is
 * open.
 */
const SNAKE =
  "M13 94 H40 V58 H22 V22 H67 V49 H94 V13 H121 V76 H85 V112 H40 V85";

function FramesArt() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 block w-[132px] overflow-hidden"
    >
      <span className="l-dotfield absolute inset-0 block" />
      <svg
        className="absolute top-0 left-0"
        width="132"
        height="132"
        viewBox="0 0 132 132"
        fill="none"
      >
        <defs>
          <linearGradient
            id="l-menu-snake"
            x1="0"
            y1="0"
            x2="132"
            y2="132"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f9c08a" />
            <stop offset="0.55" stopColor="#f2803c" />
            <stop offset="1" stopColor="#dd5312" />
          </linearGradient>
        </defs>
        {/* The trail: the same run, wider and faint, a beat behind the head. */}
        <path className="l-snake l-snake-tail" d={SNAKE} pathLength={100} />
        <path className="l-snake" d={SNAKE} pathLength={100} />
      </svg>
    </span>
  );
}

/**
 * The Interactive Twin mark: rings out from the corner with a live arc running
 * each one, at a different rate per ring so they never line up.
 */
function RingsArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 132 108"
      className="pointer-events-none absolute right-0 bottom-0 block h-[108px] w-[132px]"
      fill="none"
    >
      {[40, 62, 84].map((r, i) => (
        <g key={r}>
          <circle cx="122" cy="100" r={r} stroke="#e7eaf0" strokeWidth="1" />
          <circle
            className="l-ring"
            cx="122"
            cy="100"
            r={r}
            stroke="#f2803c"
            strokeWidth="1.4"
            pathLength={100}
            strokeDasharray="7 93"
            style={{ animationDuration: `${7 + i * 2.5}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
