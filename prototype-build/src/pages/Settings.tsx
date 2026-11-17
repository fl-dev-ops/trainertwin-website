import { useState } from "react";
import { PageHeader } from "@components/PageHeader";
import { Card } from "@components/Card";
import { Switch } from "@components/Switch";
import { Icon, html } from "../Svg";
import { Overline } from "../local/bits";
import data from "../data/settings.json";

const TILE = ["bg-info-subtle text-info", "bg-success-subtle text-success", "bg-caution-subtle text-caution", "bg-primary-subtle text-primary-ink"];

export function Settings() {
  const [on, setOn] = useState(data.modules.map((m) => m.on));
  return (
    <div className="mx-auto max-w-[1024px] px-16 pt-5 pb-8">
      <PageHeader title={data.title} icon={<Icon name="settings" />} />
      <div className="mt-6 flex flex-col">
        <h2 className="m-0 font-ui text-[18px] leading-6 font-title tracking-[-0.015em] text-ink">{data.who}</h2>
        <p className="m-0 font-ui text-[14px] leading-5 text-ink-secondary">{data.whoSub}</p>
      </div>
      <Overline className="mt-8 mb-3">{data.groups[0]}</Overline>
      <Card className="flex flex-col px-5 py-2">
        {data.modules.map((m, i) => (
          <div key={m.label} className={`py-3 ${i ? "border-t border-line" : ""}`}>
            <Switch side="end" hintStyle="inline" label={m.label} hint={m.help} checked={on[i]} onChange={(v) => setOn((x) => x.map((y, j) => (j === i ? v : y)))} />
          </div>
        ))}
      </Card>
      <Overline className="mt-6 mb-3">{data.groups[1]}</Overline>
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
        {data.cards.map((c, i) => (
          <button key={c.name} type="button" className="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-line-card bg-surface px-4 py-5 text-center font-ui text-ink shadow-card hover:bg-fill-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span aria-hidden="true" className={`grid h-9 w-9 place-items-center rounded-sm [&>span>svg]:h-5 [&>span>svg]:w-5 ${TILE[i % 4]}`}>{html(c.svg)}</span>
            <span className="text-[15px] leading-[22px] font-label">{c.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
