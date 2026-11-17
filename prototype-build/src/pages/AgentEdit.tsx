import { useState } from "react";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Switch } from "@components/Switch";
import { Badge } from "@components/Badge";
import { XIcon } from "@components/UiIcons";
import { TWIN_BOTS } from "../generated";
import detail from "../data/agent-detail.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const FILES: [string, string][] = [
  ["PDF", "Three-stage process guide.pdf"],
  ["PDF", "Dubai map and price per sq ft.pdf"],
  ["DOCX", "Presentation meeting checklist.docx"],
];
const h2 = "m-0 font-ui text-[15px] leading-[22px] font-label text-ink";

/** v3 "Edit twin agent for a specific use case": knowledge match, course materials, extra settings, Save. */
export function AgentEdit({ id, onBack }: { id: string; onBack: () => void }) {
  const bot = TWIN_BOTS.find((b) => b.id === id);
  const [on, setOn] = useState({ knowledge: true, share: true, upload: true });
  const [files, setFiles] = useState(FILES);
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex min-h-16 flex-none items-center gap-3 bg-canvas px-8">
        <button type="button" onClick={onBack} className="inline-flex cursor-pointer items-center gap-2 font-ui text-[14px] leading-5 text-ink [&>span>svg]:h-4 [&>span>svg]:w-4">
          {html(detail.backSvg)}
          {bot?.title ?? "Back"}
        </button>
      </header>
      <div className="mx-auto w-full max-w-[718px] pt-10 pb-12">
        <Card className="p-6 shadow-[0_1px_2px_rgb(30_28_25/0.05),0_4px_14px_rgb(30_28_25/0.07)]">
          <h1 className="m-0 font-ui text-[18px] leading-6 font-title tracking-[-0.015em] text-ink">Edit twin agent for a specific use case</h1>
          <div className="mt-4 flex items-center gap-4 rounded-md border border-line-card px-4 py-3 font-ui">
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-[14px] leading-5 font-title text-ink">Source matches from your knowledge</span>
              <span className="text-[13px] leading-[18px] text-ink-secondary">Your website, social profiles and everything in your knowledge base.</span>
            </span>
            <button type="button" className="cursor-pointer text-[13px] leading-5 text-ink-secondary">15 sources match</button>
            <Switch aria-label="All your knowledge" checked={on.knowledge} onChange={(v) => setOn((s) => ({ ...s, knowledge: v }))} />
          </div>
          <h2 className={`${h2} mt-8`}>Course materials</h2>
          <label className="mt-3 flex cursor-pointer flex-col items-center gap-0 rounded-md bg-fill-soft px-6 py-6 text-center font-ui">
            <span className="inline-flex items-center gap-2 text-[14px] leading-5 text-ink">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg>
              <span className="font-label">Drop your course materials here, or <u>browse</u></span>
            </span>
            <span className="text-[13px] leading-5 text-ink-secondary">Video, PDF, slides, documents</span>
            <input type="file" multiple className="sr-only" accept="video/*,.pdf,.ppt,.pptx,.doc,.docx,.txt,.md,.key" />
          </label>
          <ul className="m-0 mt-4 flex list-none flex-col items-start gap-2 p-0">
            {files.map(([kind, name]) => (
              <li key={name} className="flex items-center gap-2 rounded-sm border border-line-card bg-surface py-1 pr-1 pl-3 font-ui shadow-e1">
                <span aria-hidden="true" className="text-[9px] leading-none font-title text-danger">{kind}</span>
                <span className="text-[14px] leading-5 font-label text-ink">{name}</span>
                <Badge tone="success">Processed</Badge>
                <Button variant="ghost" size="sm" iconOnly aria-label={`Remove ${name}`} onClick={() => setFiles((f) => f.filter((x) => x[1] !== name))}><XIcon /></Button>
              </li>
            ))}
          </ul>
          <h2 className={`${h2} mt-8`}>Additional settings</h2>
          <div className="mt-2 flex flex-col">
            <div className="py-3"><Switch side="end" hintStyle="inline" label="Enable screen share" hint="Learners can share their screen while they ask a doubt." checked={on.share} onChange={(v) => setOn((s) => ({ ...s, share: v }))} /></div>
            <div className="border-t border-line py-3"><Switch side="end" hintStyle="inline" label="Enable upload" hint="Learners can upload an image or a file for doubt clearance." checked={on.upload} onChange={(v) => setOn((s) => ({ ...s, upload: v }))} /></div>
          </div>
          <div className="mt-6 flex justify-end"><Button onClick={onBack}>Save changes</Button></div>
        </Card>
      </div>
    </div>
  );
}
