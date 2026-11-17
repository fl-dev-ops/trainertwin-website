import { useState } from "react";
import { Button } from "@components/Button";
import { PageHeader } from "@components/PageHeader";
import { Card } from "@components/Card";
import { SegmentedControl } from "@components/SegmentedControl";
import { ListTable, ListRow } from "@components/ListTable";
import { Icon, html } from "../Svg";
import data from "../data/usage.json";

const COLS = "minmax(0,1fr) 140px 140px 120px";

export function Usage() {
  const [tab, setTab] = useState("overview");
  const c = data.card;
  return (
    <div className="mx-auto max-w-[1000px] px-16 pt-5 pb-8">
      <PageHeader
        title={data.title}
        icon={<Icon name="credits" />}
        description={data.sub}
        tools={
          <Button variant="secondary" className="flex-none [&_svg]:h-4 [&_svg]:w-4">
            {html(data.toolSvg)}
            {data.tool}
          </Button>
        }
      />
      <SegmentedControl aria-label="Usage" className="mt-4 mb-4" value={tab} onChange={setTab} options={data.tabs.map((t) => ({ value: t.id, label: t.label }))} />
      <Card className="mb-8 flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="m-0 font-ui text-[14px] leading-5 text-ink-secondary">{c.label}</p>
            <p className="mt-1 mb-0 font-ui text-[40px] leading-[44px] font-title text-ink">
              {c.big} <span className="text-[18px] font-normal text-ink-secondary">{c.unit}</span>
            </p>
          </div>
          <Button size="sm">{c.buy}</Button>
        </div>
        <div className="flex items-center gap-4">
          <div role="progressbar" aria-valuenow={618} aria-valuemin={0} aria-valuemax={1270} aria-label={c.barLabel} className="h-[6px] flex-1 overflow-hidden rounded-full bg-fill-soft">
            <i className="block h-full rounded-full bg-ink" style={{ width: `${c.pct}%` }} />
          </div>
          <span className="font-ui text-[13px] leading-[18px] whitespace-nowrap text-ink-secondary">{c.of}</span>
        </div>
        <p className="m-0 font-ui text-[14px] leading-[22px] text-ink-secondary">{c.note}</p>
      </Card>
      <h2 className="m-0 font-ui text-[18px] leading-6 font-title text-ink">{data.h2}</h2>
      <p className="mt-1 mb-4 font-ui text-[14px] leading-5 text-ink-secondary">{data.h2sub}</p>
      <ListTable label={data.tableLabel} className="shadow-e1">
        <ListRow head columns={COLS} className="font-normal!">
          {data.head.map((h, i) => (
            <span key={h} role="columnheader" className={i === 3 ? "text-right tabular-nums" : undefined}>{h}</span>
          ))}
        </ListRow>
        {data.rows.map((r, i) => (
          <ListRow key={i} columns={COLS}>
            <span role="cell" className="font-title">{r[0]}</span>
            <span role="cell" className="text-ink-secondary">{r[1]}</span>
            <span role="cell" className="text-ink-secondary">{r[2]}</span>
            <span role="cell" className="text-right font-title tabular-nums">{r[3]}</span>
          </ListRow>
        ))}
      </ListTable>
    </div>
  );
}
