import { useEffect, useState } from "react";
import { Aurora } from "@components/Aurora";
import { LogoSymbol } from "@components/Logo";
import data from "../data/try.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;

/**
 * v3 "Try as learner" / call room (`pageTwinDemo`): a full-screen takeover, no rail. The Session Shell is not in
 * Storybook yet, so the room (header, aurora stage, two video tiles, control cluster, End) is composed here from
 * tokens; it is the first candidate for a `SessionRoom` component.
 */
export function TryRoom({ onEnd }: { onEnd: () => void }) {
  const [secs, setSecs] = useState(1);
  const [view, setView] = useState("web");
  useEffect(() => {
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const clock = [secs / 3600, (secs / 60) % 60, secs % 60].map((n) => String(Math.floor(n)).padStart(2, "0")).join(":");
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-canvas font-ui text-ink">
      <header className="flex h-[72px] flex-none items-center justify-between gap-4 px-6">
        <div className="flex flex-[0_0_240px] items-center gap-2 text-ink">
          <LogoSymbol size={20} className="text-ink" />
          <span className="text-[16px] leading-none font-title tracking-[-0.02em]">TrainerTwin</span>
        </div>
        <p className="m-0 flex-1 text-center text-[15px] font-label">{data.title}</p>
        <div className="flex flex-[0_0_240px] items-center justify-end">
          <div role="group" aria-label="Screen size" className="mr-3 inline-flex items-center gap-[2px] rounded-full bg-fill-soft p-[3px]">
            {data.views.map((v) => (
              <button key={v.id} type="button" aria-pressed={view === v.id} aria-label={v.label ?? ""} title={v.label ?? ""} onClick={() => setView(v.id ?? "web")} className="grid h-[30px] w-[30px] cursor-pointer place-items-center rounded-full text-ink-secondary hover:text-ink aria-pressed:bg-surface aria-pressed:text-ink aria-pressed:shadow-[0_1px_2px_rgb(30_28_25/0.06),inset_0_0_0_1px_var(--tt-border)] [&>span>svg]:h-4 [&>span>svg]:w-4">
                {html(v.svg)}
              </button>
            ))}
          </div>
          <button type="button" className="flex h-9 cursor-pointer items-center gap-2 rounded-full border border-line bg-transparent px-4 text-[13px] font-label text-ink-secondary hover:border-line-field hover:text-ink [&>span>svg]:h-4 [&>span>svg]:w-4">
            {html(data.reportSvg)}
            {data.report}
          </button>
        </div>
      </header>
      <div className="flex min-h-0 flex-1 gap-5 px-6 pt-4">
        <div className="relative flex flex-1 items-center justify-center gap-8 overflow-hidden rounded-[24px] bg-surface-sunken">
          <div className="absolute inset-0 z-0 opacity-80" aria-hidden="true">
            <Aurora className="h-full w-full" colorStops={["--tt-primary-badge-border", "--tt-info-border", "--tt-success-border"]} speed={0.6} blend={1.4} amplitude={0.8} stage />
          </div>
          <div className="relative z-[1] h-[216px] w-[288px] flex-none">
            <div className="h-full w-full overflow-hidden rounded-[24px] shadow-e2">
              <video className="h-full w-full object-cover" style={{ objectPosition: "center 22%" }} src={data.face} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
            </div>
            <p className="absolute top-3 left-3 m-0 flex items-center gap-[6px] rounded-full bg-black/50 px-[10px] py-[3px] text-[12px] leading-[18px] text-white">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-live" /> Speaking
            </p>
            <p className="absolute bottom-3 left-4 m-0 rounded-full bg-black/50 px-[10px] py-[3px] text-[12px] leading-[18px] text-white">{data.speaker}</p>
          </div>
          <div className="relative z-[1] flex h-[216px] w-[288px] flex-none items-center justify-center rounded-[24px] bg-ink text-white shadow-e2">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-white/[0.14] text-[36px] font-label text-white">{data.selfInitial}</span>
            <span className="absolute bottom-3 left-4 text-[12px] text-white">{data.selfLabel}</span>
            <span className="absolute right-4 bottom-3 grid h-[22px] w-[22px] place-items-center text-white/70 [&>span>svg]:h-4 [&>span>svg]:w-4" aria-hidden="true">{html(data.selfMic)}</span>
          </div>
        </div>
      </div>
      <div className="flex h-[100px] flex-none items-center justify-between px-8 py-4">
        <p className="m-0 min-w-[100px] font-mono text-[14px] font-label">{clock}</p>
        <div className="flex items-center gap-2 rounded-full bg-fill-soft p-2">
          {data.ctrls.map((c) => (
            <button key={c.label} type="button" aria-label={c.label ?? ""} className={`grid h-10 w-10 cursor-pointer place-items-center rounded-full [&>span>svg]:h-[18px] [&>span>svg]:w-[18px] ${c.off ? "bg-danger text-white" : "text-ink hover:bg-line"}`}>
              {html(c.svg)}
            </button>
          ))}
        </div>
        <button type="button" onClick={onEnd} className="flex h-10 min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-full bg-danger px-5 text-[15px] font-label text-white hover:opacity-90 [&>span>svg]:h-4 [&>span>svg]:w-4">
          {html(data.endSvg)}
          {data.end}
        </button>
      </div>
    </div>
  );
}
