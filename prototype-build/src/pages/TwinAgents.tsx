import { useEffect, useRef, useState } from "react";
import { PageHeader, SectionHeading } from "@components/PageHeader";
import { ConfirmDialog } from "@components/Modal";
import { Button } from "@components/Button";
import { AgentCard } from "@components/AgentCard";
import { TwinAllCard } from "@components/Cards";
import type { MenuEntry } from "@components/Menu";
import { Icon, MenuIcon } from "../Svg";
import { CreditPill } from "../local/CreditPill";
import { CreditPopover } from "../local/CreditPopover";
import { ShareDialog } from "../overlays/ShareDialog";
import { AssignDialog } from "../overlays/AssignDialog";
import { TWIN_BOTS, TWIN_ALL, type Bot } from "../generated";

const PRESENCE = "https://i.pravatar.cc/240?img=32";
const FACES = [1, 2, 3, 4].map((n) => `../media/learner-${n}.png`);
const NAMES = ["Aisha", "James", "Nora", "Leo", "Priya"];

/** The prototype's `roleLearnerAvatars`: four photos, then "+1". */
function learnersFor(index: number) {
  return NAMES.map((name, i) => ({ name, src: i < FACES.length ? FACES[(i + index) % FACES.length] : undefined }));
}

const noop = () => {};
type Dlg = { kind: "share" | "assign" | "remove"; bot: Bot } | null;
const mk = (open: (k: "share" | "assign" | "remove", b: Bot) => void, bot: Bot, twin: boolean, edit: (id: string) => void, go: (id: string, sub: string) => void): MenuEntry[] => [
  { label: "Configure", icon: <MenuIcon name="edit" />, onSelect: () => edit(bot.id) },
  { label: "Calibrate", icon: <MenuIcon name="sliders" />, onSelect: () => go(bot.id, "calibrate") },
  ...(twin ? [] : [{ label: "Try as learner", icon: <MenuIcon name="play" />, onSelect: () => go(bot.id, "try") } as MenuEntry]),
  { label: "Assign", icon: <MenuIcon name="assign" />, onSelect: () => open("assign", bot) },
  { label: "Share", icon: <MenuIcon name="share" />, onSelect: () => open("share", bot) },
  ...(twin ? [] : ["divider" as const, { label: "Remove", icon: <MenuIcon name="trash" />, danger: true, onSelect: () => open("remove", bot) } as MenuEntry]),
];

export function TwinAgents({ onNew = noop, onOpen = noop, onEdit = noop, onGo = noop }: { onNew?: () => void; onOpen?: (id: string) => void; onEdit?: (id: string) => void; onGo?: (id: string, sub: string) => void }) {
  // The prototype starts with these two removed (state.botsRemoved).
  const [removed, setRemoved] = useState<string[]>(["quiet-clients", "objection-handling"]);
  const [dlg, setDlg] = useState<Dlg>(null);
  const [lastDlg, setLastDlg] = useState<Dlg>(null);
  const [credit, setCredit] = useState(false);
  const creditRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!credit) return;
    const away = (e: PointerEvent) => { if (!creditRef.current?.contains(e.target as Node)) setCredit(false); };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [credit]);
  const openDlg = (kind: "share" | "assign" | "remove", bot: Bot) => { const d = { kind, bot }; setDlg(d); setLastDlg(d); };
  const closeDlg = () => setDlg(null);
  const bots: Bot[] = TWIN_BOTS.filter((b) => !removed.includes(b.id));
  const cur = dlg ?? lastDlg;
  return (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader
        title="Twin Agents"
        icon={<Icon name="setup" />}
        tools={
          <>
            <div ref={creditRef} className="relative">
              <CreditPill left={200} total={1000} onClick={() => setCredit((c) => !c)} />
              {credit ? <CreditPopover total={1000} used={416} idle={384} onBuy={() => setCredit(false)} /> : null}
            </div>
            {/* v3 sets button text to weight 500 on this page (.page--twin-profile .lib-tools .btn). */}
            <Button className="font-medium!" onClick={onNew}>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              Create new
            </Button>
          </>
        }
      />
      <div className="mt-10 flex items-center justify-between gap-3">
        <SectionHeading className="mt-0!">Twin for all use cases</SectionHeading>
      </div>
      <div>
        <TwinAllCard
          name="Olga’s twin"
          meta="Last updated 29 Oct, 13:00"
          metaIcon={<svg viewBox="0 0 12 12" fill="none"><path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          photoSrc={PRESENCE}
          learners={learnersFor(0)}
          actions={mk(openDlg, TWIN_ALL, true, onEdit, onGo)}
        />
      </div>
      <div className="mt-10 flex items-center justify-between gap-3">
        <SectionHeading className="mt-0!">Twin agents for specific use cases</SectionHeading>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {bots.map((bot, i) => (
          <AgentCard
            key={bot.id}
            kind="twin"
            title={bot.title}
            description={bot.blurb}
            quote={bot.quote}
            index={i}
            faceVideoSrc="../media/twin-listening.mp4"
            learners={learnersFor(i)}
            actions={mk(openDlg, bot, false, onEdit, onGo)}
            onOpen={() => onOpen(bot.id)}
            className="w-auto"
          />
        ))}
      </div>
      {cur ? (
        <>
          <ShareDialog open={dlg?.kind === "share"} onClose={closeDlg} botId={cur.bot.id} botTitle={cur.bot.title} />
          <AssignDialog open={dlg?.kind === "assign"} onClose={closeDlg} botTitle={cur.bot.title} />
          <ConfirmDialog
            open={dlg?.kind === "remove"}
            onClose={closeDlg}
            title={`Remove “${cur.bot.title}”?`}
            description="It will stop answering and disappear from your twin’s bots."
            confirmLabel="Remove"
            confirmVariant="danger"
            icon={<MenuIcon name="trash" />}
            onConfirm={() => { setRemoved((r) => [...r, cur.bot.id]); closeDlg(); }}
          />
        </>
      ) : null}
    </div>
  );
}
