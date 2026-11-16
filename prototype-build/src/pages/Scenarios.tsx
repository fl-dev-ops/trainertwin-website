import { useState } from "react";
import { PageHeader, SectionHeading } from "@components/PageHeader";
import { Button } from "@components/Button";
import { AgentCard } from "@components/AgentCard";
import { SegmentedControl } from "@components/SegmentedControl";
import type { MenuEntry } from "@components/Menu";
import { Icon, MenuIcon } from "../Svg";
import { SearchField } from "../local/SearchField";
import data from "../data/roleplay.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const noop = () => {};
const actions: MenuEntry[] = [
  { label: "Try as learner", icon: <MenuIcon name="play" />, onSelect: noop },
  { label: "Assign", icon: <MenuIcon name="assign" />, onSelect: noop },
  { label: "Share", icon: <MenuIcon name="share" />, onSelect: noop },
  "divider",
  { label: "Remove", icon: <MenuIcon name="trash" />, danger: true, onSelect: noop },
];

export function Scenarios() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("published");
  const [view, setView] = useState("card");
  const cards = data.cards.filter((c) => c.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader
        title={data.title}
        icon={<Icon name="role" />}
        tools={
          <>
            <SearchField icon={html(data.searchSvg)} placeholder={data.placeholder} label="Search scenarios" value={q} onChange={setQ} />
            <Button>
              {html(data.newSvg)}
              {data.newLabel}
            </Button>
          </>
        }
      />
      <div className="mt-8 flex flex-col items-start gap-3">
        <SectionHeading className="mt-0!">{data.sectionTitle}</SectionHeading>
        <div className="flex items-center justify-between gap-3 self-stretch">
          <SegmentedControl aria-label="Status" value={status} onChange={setStatus} options={data.status.map((s) => ({ value: s.id, label: s.label }))} />
          <SegmentedControl aria-label="View" value={view} onChange={setView} options={data.view.map((v) => ({ value: v.id, label: "", icon: html(v.svg) }))} />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        {cards.map((c) => (
          <AgentCard
            key={c.title}
            kind="roleplay"
            title={c.title}
            description={c.copy}
            quote={c.quote}
            index={c.art}
            client={{ name: c.who, src: c.face }}
            learners={[...c.learners, { name: "Priya" }]}
            actions={actions}
            onOpen={noop}
            className="w-auto"
          />
        ))}
      </div>
    </div>
  );
}
