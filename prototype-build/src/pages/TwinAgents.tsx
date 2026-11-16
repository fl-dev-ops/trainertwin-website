import { PageHeader, SectionHeading } from "@components/PageHeader";
import { Button } from "@components/Button";
import { AgentCard } from "@components/AgentCard";
import { TwinAllCard } from "@components/Cards";
import type { MenuEntry } from "@components/Menu";
import { Icon, MenuIcon } from "../Svg";
import { CreditPill } from "../local/CreditPill";
import { TWIN_BOTS, TWIN_ALL, type Bot } from "../generated";

const PRESENCE = "https://i.pravatar.cc/240?img=32";
const FACES = [1, 2, 3, 4].map((n) => `../media/learner-${n}.png`);
const NAMES = ["Aisha", "James", "Nora", "Leo", "Priya"];

/** The prototype's `roleLearnerAvatars`: four photos, then "+1". */
function learnersFor(index: number) {
  return NAMES.map((name, i) => ({ name, src: i < FACES.length ? FACES[(i + index) % FACES.length] : undefined }));
}

const noop = () => {};
const twinAllActions: MenuEntry[] = [
  { label: "Configure", icon: <MenuIcon name="edit" />, onSelect: noop },
  { label: "Calibrate", icon: <MenuIcon name="sliders" />, onSelect: noop },
  { label: "Assign", icon: <MenuIcon name="assign" />, onSelect: noop },
  { label: "Share", icon: <MenuIcon name="share" />, onSelect: noop },
];
const botActions: MenuEntry[] = [
  { label: "Configure", icon: <MenuIcon name="edit" />, onSelect: noop },
  { label: "Calibrate", icon: <MenuIcon name="sliders" />, onSelect: noop },
  { label: "Try as learner", icon: <MenuIcon name="play" />, onSelect: noop },
  { label: "Assign", icon: <MenuIcon name="assign" />, onSelect: noop },
  { label: "Share", icon: <MenuIcon name="share" />, onSelect: noop },
  "divider",
  { label: "Remove", icon: <MenuIcon name="trash" />, danger: true, onSelect: noop },
];

export function TwinAgents() {
  // The prototype starts with these two removed (state.botsRemoved).
  const bots: Bot[] = TWIN_BOTS.filter((b) => !["quiet-clients", "objection-handling"].includes(b.id));
  return (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader
        title="Twin Agents"
        icon={<Icon name="setup" />}
        tools={
          <>
            <CreditPill left={200} total={1000} />
            {/* v3 sets button text to weight 500 on this page (.page--twin-profile .lib-tools .btn). */}
            <Button className="font-medium!">
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
          actions={twinAllActions}
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
            actions={botActions}
            onOpen={noop}
            className="w-auto"
          />
        ))}
      </div>
      <span hidden>{TWIN_ALL.id}</span>
    </div>
  );
}
