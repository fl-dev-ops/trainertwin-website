import { useEffect, useState, type ReactNode } from "react";
import { NavRail, NavGroup, NavItem, RailBrand, RailAction, RailUser } from "@components/NavRail";
import { PageHeader } from "@components/PageHeader";
import { EmptyState } from "@components/EmptyState";
import { Icon, SunIcon, MoonIcon } from "./Svg";
import { TwinAgents } from "./pages/TwinAgents";
import { TwinSessions } from "./pages/TwinSessions";
import { TwinUsers } from "./pages/TwinUsers";
import { TwinBrain } from "./pages/TwinBrain";
import { Scenarios } from "./pages/Scenarios";
import { RoleplaySessions } from "./pages/RoleplaySessions";
import { Persona } from "./pages/Persona";
import { Usage } from "./pages/Usage";
import { Billing } from "./pages/Billing";
import { Settings } from "./pages/Settings";
import { SupportDialog } from "./pages/SupportDialog";
import { AgentDetail } from "./pages/AgentDetail";
import { AgentEdit } from "./pages/AgentEdit";
import { CalibrateOverview } from "./pages/CalibrateOverview";
import { TryRoom } from "./pages/TryRoom";
import { SessionReport } from "./pages/SessionReport";
import { CreateAgent } from "./pages/CreateAgent";
import { TWIN_BOTS } from "./generated";

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
  { id: "twinusers", label: "Twin users", icon: "learners" },
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

const PAGES: Record<string, (r: { sub: string; go: (id: string, sub?: string) => void }) => ReactNode> = {
  setup: ({ sub, go }) => (sub === "new" ? <CreateAgent onBack={() => go("setup")} /> : sub.endsWith("/try") ? <TryRoom onEnd={() => go("setup", sub.split("/")[0])} /> : sub.endsWith("/calibrate") ? <CalibrateOverview title={TWIN_BOTS.find((b) => b.id === sub.split("/")[0])?.title ?? ""} onBack={() => go("setup", sub.split("/")[0])} onNow={() => {}} /> : sub.endsWith("/edit") ? <AgentEdit id={sub.split("/")[0]} onBack={() => go("setup", sub.split("/")[0])} /> : sub ? <AgentDetail id={sub} onBack={() => go("setup")} onCalibrate={() => go("setup", `${sub}/calibrate`)} onTry={() => go("setup", `${sub}/try`)} /> : <TwinAgents onNew={() => go("setup", "new")} onOpen={(id) => go("setup", id)} onEdit={(id) => go("setup", `${id}/edit`)} onGo={(id, sub) => go("setup", `${id}/${sub}`)} />),
  calibrations: ({ sub, go }) => (sub ? <SessionReport index={Number(sub)} onBack={() => go("calibrations")} /> : <TwinSessions onOpen={(i) => go("calibrations", String(i))} onAsk={() => go("knowledge", "questions")} />),
  twinusers: () => <TwinUsers />,
  knowledge: ({ sub, go }) => <TwinBrain tab={sub || "knowledge"} onTab={(t) => go("knowledge", t === "knowledge" ? "" : t)} />,
  roleplay: () => <Scenarios />,
  sessions: () => <RoleplaySessions />,
  rpsettings: () => <Persona />,
  usage: () => <Usage />,
  billing: () => <Billing />,
  settings: () => <Settings />,
};

/** `#/<nav id>` or `#/<nav id>/<sub>` (e.g. `#/setup/offplan-process` is an agent's detail page). */
function readHash(): { page: string; sub: string } {
  const [h, ...rest] = window.location.hash.replace(/^#\/?/, "").split("/");
  const sub = rest.join("/");
  return { page: ALL.some((n) => n.id === h) ? h : "setup", sub };
}

export function App() {
  const [route, setRoute] = useState(readHash);
  const page = route.page;
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [support, setSupport] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const on = () => setRoute(readHash());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  const go = (id: string, sub = "") => {
    window.history.pushState(null, "", `#/${id}${sub ? `/${sub}` : ""}`);
    setRoute({ page: id, sub });
  };

  const item = (n: Nav) => (
    <NavItem key={n.id} label={n.label} icon={<Icon name={n.icon} />} meta={n.meta} active={page === n.id && n.id !== "support"} onClick={() => (n.id === "support" ? setSupport(true) : go(n.id))} />
  );
  const current = ALL.find((n) => n.id === page)!;
  const body = PAGES[page]?.({ sub: route.sub, go }) ?? (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader title={current.label} icon={<Icon name={current.icon} />} />
      <div className="mt-8">
        <EmptyState title="Not built yet" description="This page has not been rebuilt from the Storybook components yet." />
      </div>
    </div>
  );

  if (page === "setup" && route.sub.endsWith("/try")) return <TryRoom onEnd={() => go("setup", route.sub.split("/")[0])} />;

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
      <SupportDialog open={support} onClose={() => setSupport(false)} />
      <main className="relative z-10 min-w-0 flex-1 overflow-auto rounded-l-lg bg-canvas shadow-[-4px_0_16px_rgb(30_28_25/0.06)]">{body}</main>
    </div>
  );
}
