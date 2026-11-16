import { useEffect, useState, type ReactNode } from "react";
import { NavRail, NavGroup, NavItem, RailBrand, RailAction, RailUser } from "@components/NavRail";
import { PageHeader } from "@components/PageHeader";
import { EmptyState } from "@components/EmptyState";
import { Icon, SunIcon, MoonIcon } from "./Svg";
import { TwinAgents } from "./pages/TwinAgents";

/**
 * The V3 prototype, rebuilt from the Storybook components (src/components). Everything visible here is a
 * shared component or a thin page that composes them; anything that had to be written locally lives in
 * ./local and is a candidate for a Storybook component. Read-only copy of data: ./generated.ts.
 */
const PRESENCE = "https://i.pravatar.cc/240?img=32";

type Nav = { id: string; label: string; icon: string; meta?: string };
const TWIN: Nav[] = [
  { id: "setup", label: "Twin agents", icon: "setup" },
  { id: "calibrations", label: "Twin sessions", icon: "messages" },
  { id: "learners", label: "Twin users", icon: "learners" },
  { id: "knowledge", label: "Twin’s brain", icon: "brain" },
];
const ROLEPLAY: Nav[] = [
  { id: "roleplay", label: "Scenarios", icon: "role" },
  { id: "sessions", label: "Roleplay sessions", icon: "sessions" },
  { id: "rpsettings", label: "Persona", icon: "rpsettings" },
];
const FOOT: Nav[] = [
  { id: "usage", label: "Usage", icon: "credits", meta: "618 min" },
  { id: "billing", label: "Billing", icon: "billing" },
  { id: "support", label: "Support", icon: "lifebuoy" },
  { id: "settings", label: "Settings", icon: "settings" },
];
const ALL = [...TWIN, ...ROLEPLAY, ...FOOT];

const PAGES: Record<string, () => ReactNode> = { setup: () => <TwinAgents /> };

function readHash() {
  const h = window.location.hash.replace(/^#\/?/, "");
  return ALL.some((n) => n.id === h) ? h : "setup";
}

export function App() {
  const [page, setPage] = useState(readHash);
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const on = () => setPage(readHash());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const go = (id: string) => {
    window.location.hash = `/${id}`;
    setPage(id);
  };

  const item = (n: Nav) => (
    <NavItem key={n.id} label={n.label} icon={<Icon name={n.icon} />} meta={n.meta} active={page === n.id} onClick={() => go(n.id)} />
  );
  const current = ALL.find((n) => n.id === page)!;
  const body = PAGES[page]?.() ?? (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader title={current.label} icon={<Icon name={current.icon} />} />
      <div className="mt-8">
        <EmptyState title="Not built yet" description="This page has not been rebuilt from the Storybook components yet." />
      </div>
    </div>
  );

  return (
    <div className="flex h-full min-h-screen bg-surface-sunken">
      <NavRail
        aria-label="Main"
        collapsed={collapsed}
        className="h-full"
        brand={
          <RailBrand
            onToggle={() => setCollapsed((c) => !c)}
            actions={<RailAction label={dark ? "Switch to light" : "Switch to dark"} pressed={dark} onClick={() => setDark((d) => !d)} icon={dark ? <MoonIcon /> : <SunIcon />} />}
          />
        }
        footerNav={FOOT.map(item)}
        footer={<RailUser name="Olga Sinenko" src={PRESENCE} />}
      >
        <NavGroup label="Twin">{TWIN.map(item)}</NavGroup>
        <NavGroup label="Roleplay">{ROLEPLAY.map(item)}</NavGroup>
      </NavRail>
      <main className="relative z-10 min-w-0 flex-1 overflow-auto rounded-l-lg bg-canvas shadow-[-4px_0_16px_rgb(30_28_25/0.06)]">{body}</main>
    </div>
  );
}
