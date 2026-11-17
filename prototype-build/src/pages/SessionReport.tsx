import { useState } from "react";
import { Card } from "@components/Card";
import { Badge } from "@components/Badge";
import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";
import { ChatBubble, ChatThread } from "@components/ChatBubble";
import { Stars, AVATAR_TONES } from "../local/bits";
import detail from "../data/agent-detail.json";
import all from "../data/twin-session-detail.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const h = "m-0 mb-3 font-ui text-[16px] leading-6 font-title text-ink";

/** v3 `pageTwinSessionReport`: one conversation (learner, recording, feedback, topics, transcript with "Feels like me / off"). */
export function SessionReport({ index, onBack }: { index: number; onBack: () => void }) {
  const d = all[index];
  const [rated, setRated] = useState<Record<number, string>>({});
  if (!d) return null;
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex min-h-16 flex-none items-center gap-3 bg-canvas px-8">
        <button type="button" onClick={onBack} className="inline-flex cursor-pointer items-center gap-2 font-ui text-[14px] leading-5 text-ink [&>span>svg]:h-4 [&>span>svg]:w-4">
          {html(detail.backSvg)}
          {d.back}
        </button>
      </header>
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-4 px-8 pt-6 pb-8">
        <Card className="px-6 py-5">
          <div className="flex items-center justify-between gap-6">
          <div className="min-w-0 flex-1 font-ui">
            <div className="flex items-center gap-2">
              <Avatar alt={d.name} initials={d.name[0]} tone={AVATAR_TONES[(d.tone - 1) % 5]} className="h-7 w-7 text-[13px]" />
              <h1 className="m-0 text-[18px] leading-6 font-title tracking-[-0.015em] text-ink">{d.name}</h1>
            </div>
            {d.subs.map((s) => (
              <p key={s} className="m-0 mt-[2px] text-[14px] leading-5 text-ink-tertiary">{s}</p>
            ))}
          </div>
          <figure className="m-0 flex w-[240px] flex-none flex-col gap-1">
            <video controls preload="metadata" playsInline aria-label="Recording of this conversation" src={d.video} className="block aspect-video w-full rounded-md bg-fill-soft object-cover" />
            <figcaption className="font-ui text-[12px] leading-4 text-ink-tertiary">{d.caption}</figcaption>
          </figure>
          </div>
        </Card>
        {d.fb.stars != null ? (
          <Card className="px-6 py-5 font-ui">
            <h2 className={h}>Learner feedback</h2>
            <p className="m-0 flex items-center gap-2 text-[14px] leading-5">
              <Stars n={d.fb.stars} tone={d.fb.tone} size={20} />
              <b className="text-[18px] font-title tabular-nums text-ink">{d.fb.num}</b>
              <span className="text-ink-secondary">{d.fb.rest}</span>
            </p>
            {d.fb.quote ? <p className="mt-3 mb-0 text-[15px] leading-[23px] text-ink-secondary">{d.fb.quote}</p> : null}
            {d.issues.length ? (
              <>
                <h3 className={`${h} mt-6`}>Issues reported</h3>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {d.issues.map((i) => (
                    <li key={i.badge} className="flex items-center gap-3"><Badge tone="caution">{i.badge}</Badge><span className="text-[14px] leading-5 text-ink-secondary">{i.note}</span></li>
                  ))}
                </ul>
              </>
            ) : null}
          </Card>
        ) : null}
        <Card className="px-6 py-5 font-ui">
          <h2 className={h}>Topic discussed</h2>
          <div className="flex flex-wrap gap-2">
            {d.topics.map((t) => (
              <span key={t} className="rounded-full bg-fill-soft px-[14px] py-1 text-[14px] leading-6 font-label text-ink-secondary">{t}</span>
            ))}
          </div>
        </Card>
        <Card className="overflow-hidden px-6 pt-5 pb-0 font-ui">
          <h2 className={h}>Transcript</h2>
          <ChatThread well className="-mx-6 rounded-none px-6">
            {d.lines.map((l, i) =>
              l.twin ? (
                <div key={i} className="flex max-w-[78%] flex-col gap-2 self-start">
                  <ChatBubble variant="transcript" side="twin" name={l.who} className="max-w-none">{l.text}</ChatBubble>
                  <div className="flex items-center gap-2 pl-1">
                    {(["like", "off"] as const).map((v, k) => (
                      <Button key={v} variant="secondary" size="sm" aria-pressed={rated[i] === v} onClick={() => setRated((r) => ({ ...r, [i]: v }))} className="px-[18px] [&_svg]:h-4 [&_svg]:w-4">
                        {html(d.rateSvgs[k])}
                        {v === "like" ? "Feels like me" : "Feels off"}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <ChatBubble key={i} variant="transcript" side="you" name={l.who}>{l.text}</ChatBubble>
              ),
            )}
          </ChatThread>
        </Card>
      </div>
    </div>
  );
}
