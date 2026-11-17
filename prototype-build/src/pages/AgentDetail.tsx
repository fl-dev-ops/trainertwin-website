import { useState } from "react";
import { BackBar } from "@components/PageHeader";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { SegmentedControl } from "@components/SegmentedControl";
import { Menu, type MenuEntry } from "@components/Menu";
import { FilterSelect } from "../local/FilterSelect";
import { Overline } from "../local/bits";
import { MenuIcon } from "../Svg";
import data from "../data/agent-detail.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const noop = () => {};
const shadow = "shadow-[0_1px_2px_rgb(30_28_25/0.05),0_4px_14px_rgb(30_28_25/0.07)]";
const TONES: Record<string, string> = {
  "rp-stat--sessions": "bg-success-subtle text-success",
  "rp-stat--review": "bg-caution-subtle text-caution",
  "rp-stat--score": "bg-info-subtle text-info",
  "rp-stat--neutral": "bg-fill-soft text-ink-secondary",
};
// The week chart: bars parsed from v3's svg (x, y, width, height, label).
const BARS = [...data.chart.matchAll(/class="rp-chart-bar" x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)" rx="(\d+)"><\/rect><text class="rp-chart-label" x="([\d.]+)" y="182" text-anchor="middle">([^<]+)</g)].map((m) => ({ x: +m[1], y: +m[2], w: +m[3], h: +m[4], r: +m[5], lx: +m[6], label: m[7] }));

/** NOT IN STORYBOOK YET: the 63% usage ring (the prototype's `.rp-credit-ring`, an orange-to-blue conic gradient). */
function UsageRing({ pct, label }: { pct: number; label: string }) {
  return (
    <div role="img" aria-label={`${pct}% of minutes used`} className="relative grid h-[72px] w-[72px] flex-none place-items-center font-ui text-[15px] leading-5 font-title text-ink">
      <span aria-hidden="true" className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(in oklch, var(--tt-orange-500), var(--tt-blue-600) ${pct}%, var(--tt-fill-soft) 0)`, WebkitMask: "radial-gradient(circle, transparent 28px, #000 28.5px)", mask: "radial-gradient(circle, transparent 28px, #000 28.5px)" }} />
      <span className="relative tabular-nums">{label}</span>
    </div>
  );
}

export function AgentDetail({ onBack, onCalibrate, onTry }: { id: string; onBack: () => void; onCalibrate?: () => void; onTry?: () => void }) {
  const [tab, setTab] = useState("calibration");
  const [range, setRange] = useState(data.range);
  const actions: MenuEntry[] = [
    { label: "Configure", icon: <MenuIcon name="edit" />, onSelect: noop },
    { label: "Try as learner", icon: <MenuIcon name="play" />, onSelect: () => onTry?.() },
    { label: "Assign", icon: <MenuIcon name="assign" />, onSelect: noop },
    { label: "Share", icon: <MenuIcon name="share" />, onSelect: noop },
    "divider",
    { label: "Remove", icon: <MenuIcon name="trash" />, danger: true, onSelect: noop },
  ];
  const c = data.credit;
  return (
    <div className="flex min-h-full flex-col">
      <BackBar label={data.back} onBack={onBack} actions={<div className="flex items-center gap-3">
          <FilterSelect width={124} label="Date range" options={["Last 30 days"].map((v) => ({ value: v, label: v }))} value={range} onChange={setRange} />
          <Button size="sm" onClick={onCalibrate} className="[&_svg]:h-4 [&_svg]:w-4">
            {html(data.calibrateSvg)}
            {data.calibrate}
          </Button>
          <Menu label={`More actions for ${data.title}`} items={actions} trigger={(p) => <Button variant="secondary" size="sm" iconOnly {...p} aria-label={`More actions for ${data.title}`}>{html(data.moreSvg)}</Button>} />
        </div>} />
      <div className="mx-auto w-full max-w-[1024px] px-16 pt-2 pb-8">
        <div className="grid grid-cols-2 items-stretch gap-4">
          <Card className={`col-span-2 flex flex-col p-6 ${shadow}`}>
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 flex-1">
                <h1 className="m-0 mb-5 font-ui text-[20px] leading-7 font-title tracking-[-0.015em] text-ink">{data.title}</h1>
                <Overline className="mt-0 mb-2">{data.kicker1}</Overline>
                <p className="m-0 max-w-[65ch] font-ui text-[15px] leading-[23px] text-ink-secondary">{data.scenario}</p>
              </div>
              <div className={`flex flex-none items-center gap-5 rounded-md bg-surface px-5 py-4 ${shadow}`}>
                <UsageRing pct={c.used} label={c.pct} />
                <div className="font-ui">
                  <Overline className="mb-2">{c.kicker}</Overline>
                  <p className="m-0 text-[18px] leading-6 font-title text-ink tabular-nums">{c.value} <span className="text-[14px] font-normal text-ink-secondary">{c.muted}</span></p>
                  <p className="mt-2 mb-0 text-[13px] leading-5 text-ink-secondary">{c.note}</p>
                </div>
              </div>
            </div>
            <hr className="mt-6 mb-0 h-px border-0 bg-line" />
            <div>
              <Overline className="mt-2 mb-2">{data.kicker2}</Overline>
              <button type="button" className="flex min-h-10 w-full cursor-pointer items-center gap-3 rounded-sm bg-fill-soft px-3 text-left font-ui text-[14px] leading-5 text-ink" aria-label={`View all ${data.bf.name}`}>
                <span className="grid h-5 w-5 flex-none place-items-center text-ink-secondary [&>span>svg]:h-5 [&>span>svg]:w-5">{html(data.bf.svg)}</span>
                <span className="min-w-0 flex-1 truncate tabular-nums">{data.bf.name}</span>
                <span className="inline-flex items-center gap-1 text-ink-secondary [&>span>svg]:h-4 [&>span>svg]:w-4">{data.bf.viewAll}{html(data.bf.viewAllSvg)}</span>
              </button>
            </div>
          </Card>

          <Card className={`flex flex-col p-5 ${shadow}`}>
            <h2 className="m-0 mb-4 font-ui text-[17px] leading-6 font-title tracking-[-0.015em] text-ink">{data.reportTitle}</h2>
            <div className="grid flex-1 auto-rows-fr grid-cols-2 gap-3">
              {data.stats.map((s) => {
                const tone = TONES[s.cls.split(" ")[0]];
                return (
                  <div key={s.label} className={`flex min-h-[90px] items-start justify-between gap-2 rounded-md px-4 py-3 ${s.view ? "" : "flex-col justify-between"} ${tone}`}>
                    <div>
                      <Overline className="mb-2 text-inherit!">{s.label}</Overline>
                      <p className="m-0 font-ui text-[24px] leading-[30px] font-title tracking-[-0.015em] tabular-nums">{s.value}{s.muted ? <span className="ml-1 text-ink-secondary">{s.muted}</span> : null}</p>
                    </div>
                    {s.view ? (
                      <button type="button" className="-mr-2 inline-flex h-3 cursor-pointer items-center gap-1 rounded-full px-2 font-ui text-[13px] font-medium hover:underline [&>span>svg]:h-[14px] [&>span>svg]:w-[14px]">
                        {s.view}
                        {html(s.viewSvg)}
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className={`flex flex-col p-5 ${shadow}`}>
            <h2 className="m-0 mb-4 font-ui text-[17px] leading-6 font-title tracking-[-0.015em] text-ink">{data.weeksTitle}</h2>
            <svg viewBox="0 0 720 192" role="img" aria-label="Sessions this week" className="block h-auto max-h-[120px] w-full">
              {BARS.map((b) => (
                <g key={b.label}>
                  <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={b.r} className="fill-info" />
                  <text x={b.lx} y={182} textAnchor="middle" className="fill-ink-secondary font-ui text-[11px]">{b.label}</text>
                </g>
              ))}
            </svg>
            <ul className="m-0 mt-auto flex list-none flex-col gap-2 p-0 pt-5">
              {data.reports.map((r) => (
                <li key={r.label} className="flex items-center justify-between gap-4 font-ui text-[14px] leading-5 text-ink-secondary">
                  <span className="text-[11px] leading-4 font-label tracking-[0.09em] text-ink-secondary uppercase">{r.label}</span>
                  {r.link ? (
                    <button type="button" className="inline-flex cursor-pointer items-center gap-1 font-label text-ink tabular-nums [&>span>svg]:h-[14px] [&>span>svg]:w-[14px] [&>span>svg]:text-ink-secondary">{r.value}{html(r.svg)}</button>
                  ) : (
                    <b className="font-label text-ink">{r.value}</b>
                  )}
                </li>
              ))}
            </ul>
          </Card>

          <Card className={`col-span-2 flex flex-col p-5 ${shadow}`}>
            <h2 className="m-0 mb-4 font-ui text-[17px] leading-6 font-title tracking-[-0.015em] text-ink">{data.qTitle}</h2>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {data.questions.map((q) => (
                <li key={q.q} className="flex items-center justify-between gap-4 font-ui text-[14px] leading-5 text-ink-secondary">
                  <span>{q.q}</span>
                  <Button variant="secondary" size="sm" className="flex-none [&_svg]:h-4 [&_svg]:w-4">{html(q.svg)}{q.btn}</Button>
                </li>
              ))}
            </ul>
          </Card>

          <Card className={`col-span-2 p-5 ${shadow}`}>
            <SegmentedControl aria-label="Calibration, sessions or assigned users" className="mb-4" value={tab} onChange={setTab} options={data.tabs.map((t) => ({ value: t.label.toLowerCase().split(" ")[0], label: t.label }))} />
            <div className="-mx-5 -mb-5 overflow-hidden rounded-b-lg">
              {data.cals.map((r, i) => (
                <button key={r.title} type="button" className={`flex w-full cursor-pointer items-center gap-4 px-5 py-[14px] text-left font-ui hover:bg-surface-sunken ${i ? "border-t border-line" : ""}`}>
                  <span className="flex min-w-0 flex-1 flex-col gap-[2px]">
                    <span className="truncate text-[14px] leading-5 font-label text-ink">{r.title}</span>
                    <span className="text-[13px] leading-[18px] text-ink-tertiary">{r.meta}</span>
                  </span>
                  <span aria-hidden="true" className="grid h-7 w-7 flex-none place-items-center text-ink-secondary [&>span>svg]:h-4 [&>span>svg]:w-4">{html(r.svg)}</span>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
