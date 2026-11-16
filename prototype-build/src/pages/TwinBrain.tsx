import { useState } from "react";
import { FlowNode, FlowSource } from "@components/FlowNode";
import { Button } from "@components/Button";
import { SegmentedControl } from "@components/SegmentedControl";
import data from "../data/knowledge.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const TAGS = { info: "bg-info-subtle text-info", caution: "bg-caution-subtle text-caution", success: "bg-success-subtle text-success" } as const;
const BARS = [8, 14, 6, 18, 10, 16, 7, 12];

/** A node sits at a fixed spot on the board; FlowNode is the card. */
function At({ left, top, width, height, children }: { left: number; top: number; width: number; height?: string; children: React.ReactNode }) {
  return (
    <div className="absolute z-[1]" style={{ left, top, width, height: height && height !== "auto" ? height : undefined }}>
      {children}
    </div>
  );
}

export function TwinBrain() {
  const [tab, setTab] = useState("knowledge");
  const k = data.knowledge, st = data.style, v = data.voice;
  const dot = (label: string) => <span role="img" aria-label={label} className="h-2 w-2 flex-none rounded-full bg-primary" />;
  return (
    <div className="relative flex h-full min-h-0 bg-surface" style={{ backgroundImage: "radial-gradient(circle, var(--tt-border) 1.15px, transparent 1.15px)", backgroundSize: "18px 18px" }}>
      <div className="m-auto flex-none">
        <div className="relative" style={{ width: data.board.w, height: data.board.h }}>
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible fill-none stroke-ink-tertiary [&_circle]:fill-ink-tertiary [&_circle]:stroke-none [&_path]:stroke-[1.5]" viewBox={`0 0 ${data.board.w} ${data.board.h}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: data.board.links }} />
          {data.tags.map((t) => (
            <span key={t.text} className={`absolute z-[2] rounded-full px-[10px] py-1 font-ui text-[12px] leading-4 font-label whitespace-nowrap ${TAGS[t.tone as keyof typeof TAGS]}`} style={{ left: t.left, top: t.top }}>
              {t.text}
            </span>
          ))}

          <At left={k.left} top={k.top} width={k.width}>
            <FlowNode kicker={k.kicker} title="" className="gap-[10px] [&>span:nth-child(2)]:hidden">
              <span className="flex w-full flex-col gap-2">
                {k.lines.map((l) => (
                  <span key={l.label} className="flex justify-between gap-3 font-ui text-[13px] leading-[18px] text-ink-secondary">
                    <span className="flex items-start gap-2">
                      {l.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={l.img} alt="" className="h-[18px] w-[18px] flex-none rounded-full bg-fill-soft object-cover" />
                      ) : (
                        <span className="grid h-[18px] w-[18px] flex-none place-items-center rounded-full bg-fill-soft [&>svg]:h-3 [&>svg]:w-3">{html(l.glyph)}</span>
                      )}
                      {l.label}
                    </span>
                    <span className="tabular-nums">{l.value}</span>
                  </span>
                ))}
              </span>
              <span className="flex w-full flex-col gap-[6px]">
                {k.sources.map((s) => (
                  <FlowSource key={s.label} icon={html(s.svg)}>
                    <span>{s.label}</span>
                    {s.connected ? (
                      <span className="ml-auto inline-flex items-center gap-[3px] rounded-full bg-success-subtle py-[2px] pr-[7px] pl-[5px] text-[11px] leading-4 font-label text-success">Connected</span>
                    ) : (
                      <span className="ml-auto text-[12px] text-ink-tertiary">{s.status}</span>
                    )}
                  </FlowSource>
                ))}
              </span>
            </FlowNode>
          </At>

          <At left={st.left} top={st.top} width={st.width}>
            <FlowNode kicker={st.kicker} title="" className="gap-[10px] [&>span:nth-child(2)]:hidden">
              <span className="block text-left font-ui text-[14px] leading-5 text-ink">{st.overview}</span>
              <span className="flex w-full flex-col gap-[6px]">
                {st.rules.map((r) => (
                  <FlowSource key={r.label} icon={html(r.svg)}>
                    {r.label}
                  </FlowSource>
                ))}
              </span>
              <Button variant="secondary" size="sm" iconOnly aria-label="Edit" title="Edit" className="mt-1">{html(data.editSvg)}</Button>
            </FlowNode>
          </At>

          <At left={v.left} top={v.top} width={v.width}>
            <FlowNode kicker={v.kicker} title="" className="items-center gap-[10px] text-center [&>span:nth-child(2)]:hidden" >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={v.portrait} alt="" className="h-14 w-14 rounded-full object-cover" />
              <span className="font-ui text-[15px] leading-[22px] font-title">{v.title}</span>
              <span className="font-ui text-[13px] leading-[18px] text-ink-secondary">{v.note}</span>
              <span className="mt-2 flex items-center gap-2" aria-hidden="true">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-fill-soft text-ink [&>svg]:h-3 [&>svg]:w-3">{html(v.play)}</span>
                <span className="flex items-center gap-[3px]">
                  {BARS.map((h, i) => (
                    <i key={i} className="block w-[3px] rounded-full bg-line-field" style={{ height: h }} />
                  ))}
                </span>
              </span>
              <span className="mt-2 flex items-center gap-2">
                <Button variant="secondary" size="sm" iconOnly aria-label="Edit" title="Edit">{html(data.editSvg)}</Button>
                <Button variant="secondary" size="sm">{html(v.talkSvg)}{v.talk}</Button>
              </span>
            </FlowNode>
          </At>
        </div>
      </div>

      <div className="absolute top-4 right-4 left-4 z-[6] flex h-9 items-center justify-between">
        <button type="button" className="inline-flex items-center gap-2 font-ui text-[14px] leading-5 text-ink cursor-pointer [&>svg]:h-4 [&>svg]:w-4">
          {html(data.backSvg)}
          {data.back}
        </button>
        <span className="font-ui text-[14px] leading-5 text-ink-tertiary">{data.updated}</span>
        <Button>{data.done}</Button>
      </div>
      <div className="absolute top-16 left-1/2 z-[6] -translate-x-1/2">
        <SegmentedControl
          aria-label={data.tabsLabel}
          className="bg-surface shadow-e2"
          value={tab}
          onChange={setTab}
          options={data.tabs.map((t) => ({ value: t.label.toLowerCase(), label: t.label, badge: t.dot ? dot(t.dotLabel) : undefined }))}
        />
      </div>
      <div className="absolute right-4 bottom-4 z-[6] flex items-center gap-2 rounded-full border border-line-card bg-surface p-[6px] shadow-e1" role="group" aria-label="Zoom">
        <Button variant="secondary" size="sm" iconOnly aria-label="Zoom out">−</Button>
        <span className="min-w-10 text-center font-ui text-[13px] leading-[18px] tabular-nums">100%</span>
        <Button variant="secondary" size="sm" iconOnly aria-label="Zoom in">+</Button>
      </div>
    </div>
  );
}
