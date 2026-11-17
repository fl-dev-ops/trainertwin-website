import { useState } from "react";
import { Page } from "@components/Page";
import { html } from "../Svg";
import { BackBar } from "@components/PageHeader";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";
import { ChatBubble, ChatThread } from "@components/ChatBubble";
import { AVATAR_TONES } from "../local/bits";
import { FeedbackCard } from "../local/FeedbackCard";
import { useToast } from "@components/Toast";
import { FeelsOffDialog } from "../overlays/FeelsOffDialog";
import all from "../data/twin-session-detail.json";

const h = "m-0 mb-3 font-ui text-[16px] leading-6 font-title text-ink";

/** v3 `pageTwinSessionReport`: one conversation (learner, recording, feedback, topics, transcript with "Feels like me / off"). */
export function SessionReport({ index, onBack }: { index: number; onBack: () => void }) {
  const d = all[index];
  type Rating = { v: "like" | "off"; reasons?: string[]; note?: string };
  const [rated, setRated] = useState<Record<number, Rating>>({});
  const [asking, setAsking] = useState<number | null>(null);
  const { toast } = useToast();
  if (!d) return null;
  const likes = Object.values(rated).filter((r) => r.v === "like").length;
  const offs = Object.values(rated).filter((r) => r.v === "off").length;
  return (
    <div className="flex min-h-full flex-col">
      <BackBar label={d.back} onBack={onBack} />
      <Page size="reading" className="flex flex-col gap-4">
        <Card className="px-6 py-5">
          <div className="flex items-center justify-between gap-6">
          <div className="min-w-0 flex-1 font-ui">
            <div className="flex items-center gap-2">
              <Avatar alt={d.name} initials={d.name[0]} tone={AVATAR_TONES[(d.tone - 1) % 5]} className="h-7! w-7! text-[13px]" />
              <h1 className="m-0 text-[18px] leading-6 font-title tracking-[-0.015em] text-ink">{d.name}</h1>
            </div>
            {d.subs.map((s, i) => (
              <p key={s} className={`m-0 text-[14px] leading-5 text-ink-tertiary ${i === 0 ? "mt-2" : ""}`}>{s}</p>
            ))}
          </div>
          <figure className="m-0 flex w-[240px] flex-none flex-col gap-1">
            <video controls preload="metadata" playsInline aria-label="Recording of this conversation" src={d.video} className="block aspect-video w-full rounded-md bg-fill-soft object-cover" />
            <figcaption className="font-ui text-[12px] leading-4 text-ink-tertiary">{d.caption}</figcaption>
          </figure>
          </div>
        </Card>
        <FeedbackCard fb={d.fb} issues={d.issues} />
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
          {likes + offs > 0 ? (
            <p className="m-0 mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-2 text-[14px] leading-5 text-ink-tertiary">
              Your calibration
              <span className="font-label text-ink">{likes} feels like me · {offs} feels off</span>
            </p>
          ) : null}
          <ChatThread well className="-mx-6 rounded-none px-6">
            {d.lines.map((l, i) =>
              l.twin ? (
                <div key={i} className="flex max-w-[78%] flex-col gap-2 self-start">
                  <ChatBubble variant="transcript" nameWeight="title" side="twin" name={l.who} className="max-w-none">{l.text}</ChatBubble>
                  {rated[i] ? (
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pl-1">
                      <p className="m-0 inline-flex items-center gap-[6px] font-ui text-[12px] leading-4 text-ink-secondary [&_svg]:h-[14px] [&_svg]:w-[14px]">
                        {html(d.rateSvgs[rated[i].v === "like" ? 0 : 1])}
                        {rated[i].v === "like" ? "Feels like me" : "Feels off"}
                      </p>
                      {rated[i].reasons?.length || rated[i].note ? (
                        <span className="font-ui text-[13px] leading-[18px] text-ink-tertiary">{[...(rated[i].reasons ?? []), ...(rated[i].note ? [rated[i].note] : [])].join(" · ")}</span>
                      ) : null}
                      <Button variant="ghost" size="sm" onClick={() => setRated((r) => { const n = { ...r }; delete n[i]; return n; })}>Change</Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 pl-1">
                      {(["like", "off"] as const).map((v, k) => (
                        <Button
                          key={v}
                          variant="secondary"
                          size="sm"
                          onClick={() => {
                            if (v === "like") {
                              setRated((r) => ({ ...r, [i]: { v: "like" } }));
                              toast("Noted. This one feels like Olga.", { type: "success" });
                            } else setAsking(i);
                          }}
                          className="px-[18px] [&_svg]:h-4 [&_svg]:w-4"
                        >
                          {html(d.rateSvgs[k])}
                          {v === "like" ? "Feels like me" : "Feels off"}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <ChatBubble key={i} variant="transcript" nameWeight="title" side="you" name={l.who}>{l.text}</ChatBubble>
              ),
            )}
          </ChatThread>
        </Card>
      </Page>
      <FeelsOffDialog
        open={asking !== null}
        quote={asking !== null ? d.lines[asking].text : ""}
        onClose={() => setAsking(null)}
        onSubmit={(reasons, note) => {
          if (asking !== null) setRated((r) => ({ ...r, [asking]: { v: "off", reasons, note } }));
          setAsking(null);
          toast("Thanks. Olga’s twin will learn from this.", { type: "success" });
        }}
      />
    </div>
  );
}
