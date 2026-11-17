import { useEffect, useState } from "react";
import { BackBar } from "@components/PageHeader";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Icon, html } from "../Svg";
import { AgentForm } from "./AgentEdit";
import detail from "../data/agent-detail.json";
import data from "../data/create.json";

const card = "shadow-[0_2px_4px_rgb(30_28_25/0.035),0_8px_20px_rgb(30_28_25/0.055)]";

/**
 * v3 "Create use case": describe the agent to TeeTee (or pick a suggestion), or fill the form by hand. Sending a
 * description opens the form with a title made from it and a short loading state on the knowledge row. The TeeTee
 * card's animated orange glow is a WebGL shader in v3; here it is a static radial wash (not in Storybook).
 */
export function CreateAgent({ onBack }: { onBack: () => void }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(data.manualTitle);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, [loading]);
  const send = () => {
    if (!text.trim()) return;
    setTitle(text.trim().split(/\s+/).slice(0, 5).join(" "));
    setOpen(true);
    setLoading(true);
  };
  return (
    <div className="flex min-h-full flex-col">
      <BackBar label={data.back} onBack={onBack} />
      <div className="mx-auto w-full max-w-[718px] pt-10 pb-12">
        <section aria-label="Ask TeeTee" className={`relative flex min-h-[234px] flex-col overflow-hidden rounded-[24px] bg-fill-soft p-6 ${card}`}>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 55% at 50% 100%, color-mix(in srgb, var(--tt-primary) 14%, transparent), transparent 70%)" }} />
          <div className="relative flex flex-1 flex-col">
            <div className="max-w-[566px]">
            <p className="m-0 font-ui text-[15px] leading-[22px] font-title text-ink">{data.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.suggestions.map((s) => (
                <button key={s.label} type="button" onClick={() => setText(s.label)} aria-pressed={text === s.label} className="inline-flex h-[30px] cursor-pointer items-center gap-2 rounded-full bg-surface px-3 font-ui text-[13px] leading-5 text-ink shadow-[0_0_0_1px_var(--tt-border)] hover:shadow-[0_0_0_1px_var(--tt-border-interactive)] aria-pressed:bg-ink aria-pressed:text-surface [&>span>svg]:h-[14px] [&>span>svg]:w-[14px]">
                  {html(s.svg)}
                  {s.label}
                </button>
              ))}
            </div>
            </div>
            <form className="mt-auto flex items-center gap-2 rounded-lg bg-surface py-2 pr-2 pl-[18px] shadow-[0_1px_2px_rgb(30_28_25/0.05),0_4px_14px_rgb(30_28_25/0.07)]" onSubmit={(e) => { e.preventDefault(); send(); }}>
              <label className="sr-only" htmlFor="bot-ask">Tell TeeTee what the twin agent should help with</label>
              <textarea id="bot-ask" rows={1} placeholder={data.placeholder} value={text} onChange={(e) => setText(e.target.value)} className="h-9 min-w-0 flex-1 resize-none border-0 bg-transparent p-0 pt-2 font-ui text-[15px] leading-5 text-ink outline-none placeholder:text-ink-tertiary" />
              <button type="button" aria-label="Dictate" className="grid h-9 w-9 flex-none cursor-pointer place-items-center rounded-full bg-fill-soft text-ink-secondary hover:bg-fill-soft-hover [&>span>svg]:h-4 [&>span>svg]:w-4">{html(data.micSvg)}</button>
              <Button type="submit" iconOnly aria-label={data.submitLabel} className="flex-none">{html(data.submitSvg)}</Button>
            </form>
          </div>
        </section>
        <Card className={`mt-4 overflow-hidden rounded-[24px] p-0 ${card}`}>
          <button type="button" aria-expanded={open} aria-controls="manual-body" onClick={() => setOpen((o) => !o)} className="flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent p-6 text-left font-ui text-ink hover:bg-surface-sunken">
            <span className="flex flex-col gap-[2px]">
              <span className="text-[15px] leading-[22px] font-title">{title}</span>
              <span className="text-[13px] leading-[18px] text-ink-secondary">{data.manualSub}</span>
            </span>
            <span aria-hidden="true" className={`flex-none text-ink-secondary transition-transform duration-(--tt-duration-quick) [&>span>svg]:h-4 [&>span>svg]:w-4 ${open ? "rotate-180" : ""}`}>{html(data.chevron)}</span>
          </button>
          {open ? (
            <div id="manual-body" className="px-6 pb-6">
              <AgentForm matches={false} knowledgeLoading={loading} saveLabel="Save and create" onSave={onBack} />
            </div>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
