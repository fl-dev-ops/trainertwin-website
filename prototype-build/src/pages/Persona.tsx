import { useState } from "react";
import { Page } from "@components/Page";
import { PageHeader } from "@components/PageHeader";
import { Button } from "@components/Button";
import { SegmentedControl } from "@components/SegmentedControl";
import { ListTable, ListRow } from "@components/ListTable";
import { Menu, type MenuEntry } from "@components/Menu";
import { Icon, MenuIcon, html } from "../Svg";
import data from "../data/rpsettings.json";

const COLS = "40px minmax(150px,1.1fr) minmax(130px,1fr) minmax(0,2fr) minmax(90px,.8fr) 36px";
const noop = () => {};
const actions: MenuEntry[] = [
  { label: "Edit", icon: <MenuIcon name="edit" />, onSelect: noop },
  { label: "Remove", icon: <MenuIcon name="trash" />, danger: true, onSelect: noop },
];

export function Persona() {
  const [view, setView] = useState("list");
  return (
    <Page size="fluid">
      <PageHeader
        title={data.title}
        icon={<Icon name="rpsettings" />}
        tools={
          <Button>
            {html(data.createSvg)}
            {data.create}
          </Button>
        }
      />
      <div className="mt-8 flex items-start justify-between gap-4">
        <div>
          <h2 className="m-0 font-ui text-[20px] leading-7 font-title tracking-[-0.01em] text-ink">{data.panelTitle}</h2>
          <p className="mt-2 mb-4 font-ui text-[14px] leading-5 text-ink-tertiary">{data.intro}</p>
        </div>
        <SegmentedControl aria-label="View" value={view} onChange={setView} className="flex-none" options={data.view.map((v) => ({ value: v.id, label: "", icon: html(v.svg) }))} />
      </div>
      <ListTable label={data.panelTitle} className="mt-2 !overflow-visible">
        <ListRow head columns={COLS} className="px-4! gap-4! rounded-t-[calc(var(--tt-radius-lg)-1px)]">
          {data.head.map((h, i) => (
            <span key={i} aria-hidden="true">{h}</span>
          ))}
        </ListRow>
        {data.rows.map((r) => (
          <ListRow key={r.name} columns={COLS} className="cursor-pointer px-4! py-3! gap-4! text-[14px] hover:bg-fill-soft">
            {r.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={r.photo} alt="" className="h-10 w-10 rounded-full bg-fill-soft object-cover" />
            ) : (
              <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-fill-soft text-[15px] font-label text-ink-secondary">{r.initial}</span>
            )}
            <span className="flex min-w-0 flex-col">
              <span className="text-[14px] leading-5 font-title">{r.name}</span>
              <span className="truncate text-[13px] leading-[18px] text-ink-secondary">{r.place}</span>
            </span>
            <span className="text-[14px] leading-5 text-ink">{r.role}</span>
            <span className="flex min-w-0 flex-nowrap gap-1">
              <span className="overflow-hidden rounded-full bg-fill-soft px-[10px] py-[2px] text-[12px] leading-5 font-label whitespace-nowrap text-ellipsis text-ink-secondary">{r.tag}</span>
              {r.more ? <span className="rounded-full bg-fill-soft px-[10px] py-[2px] text-[12px] leading-5 font-label whitespace-nowrap text-ink-secondary">{r.more}</span> : null}
            </span>
            <span />
            <span className="justify-self-end"><Menu label={`Actions for ${r.name}`} items={actions} /></span>
          </ListRow>
        ))}
      </ListTable>
    </Page>
  );
}
