import { useRef } from "react";
import { Page } from "@components/Page";
import { BackBar } from "@components/PageHeader";
import { Card } from "@components/Card";
import { Badge } from "@components/Badge";
import { Avatar } from "@components/Avatar";
import { ChatBubble, ChatThread } from "@components/ChatBubble";
import { AVATAR_TONES } from "../local/bits";
import { FeedbackCard } from "../local/FeedbackCard";
import all from "../data/rp-sessions.json";

export type RpSession = (typeof all)[number];

const h = "m-0 mb-3 font-ui text-[16px] leading-6 font-title text-ink";
const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5l10 -10" />
  </svg>
);
const bang = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 7v6" />
    <path d="M12 17v.01" />
  </svg>
);
const goalTone = { Met: "success", Partly: "caution", Missed: "neutral" } as const;

/**
 * v3 `pageSessionReport`: one roleplay (learner and the client they spoke to, recording, feedback, scoring rubric,
 * learner goals, what went well / to work on with a "Jump" to the moment in the recording, transcript).
 * Composed from Storybook's Card, Badge, Avatar, StarRating and ChatBubble; the rubric rows and the note rows are plain
 * markup (NOT IN STORYBOOK YET: `ScoreRow`, `NoteRow`).
 */
export function RoleplayReport({ index, onBack }: { index: number; onBack: () => void }) {
  const d = all[index];
  const video = useRef<HTMLVideoElement>(null);
  if (!d) return null;
  const r = d.report;
  const jump = (t: number) => {
    const v = video.current;
    if (!v) return;
    const go = () => {
      try {
        v.currentTime = Math.min(t, (v.duration || t) - 0.1);
      } catch {
        /* not seekable yet */
      }
      void v.play().catch(() => {});
    };
    if (v.readyState >= 1) go();
    else v.addEventListener("loadedmetadata", go, { once: true });
    v.scrollIntoView({ block: "center", behavior: "smooth" });
  };
  return (
    <div className="flex min-h-full flex-col">
      <BackBar label={r.back} onBack={onBack} />
      <Page size="reading" className="flex flex-col gap-4">
        <Card className="px-6 py-5">
          <div className="flex items-center justify-between gap-6">
            <div className="min-w-0 flex-1 font-ui">
              <div className="flex items-center gap-2">
                <Avatar alt={r.name} initials={r.name[0]} tone={AVATAR_TONES[(d.tone - 1) % 5]} className="h-7! w-7! text-[13px]" />
                <h1 className="m-0 text-[18px] leading-6 font-title tracking-[-0.015em] text-ink">{r.name}</h1>
              </div>
              {r.subs.map((s, i) => (
                <p key={s} className={`m-0 text-[14px] leading-5 text-ink-tertiary ${i === 0 ? "mt-2" : ""}`}>{s}</p>
              ))}
              <p className="m-0 mt-3 flex items-center gap-2 text-[13px] leading-5 text-ink-secondary">
                {r.client.face ? <img src={r.client.face.replace("../media/", "/media/")} alt="" className="h-6 w-6 rounded-full object-cover" style={{ objectPosition: "center 20%" }} /> : null}
                <span>Spoke with <b className="font-label text-ink">{r.client.name}</b></span>
              </p>
            </div>
            <figure className="m-0 flex w-[240px] flex-none flex-col gap-1">
              <video ref={video} controls preload="metadata" playsInline aria-label="Recording of this session" src={r.video.replace("../media/", "/media/")} className="block aspect-video w-full rounded-md bg-fill-soft object-cover" />
              <figcaption className="font-ui text-[12px] leading-4 text-ink-tertiary">{r.caption}</figcaption>
            </figure>
          </div>
        </Card>

        <FeedbackCard fb={r.fb} issues={r.issues} />

        <Card className="px-6 py-5 font-ui">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className={`${h} mb-3`}>Scoring rubric</h2>
            <p className="m-0 text-[14px] leading-5 text-ink-secondary tabular-nums">
              <span className="text-[18px] leading-6 font-title text-ink">{r.rubric.total.split(" / ")[0]}</span> / {r.rubric.total.split(" / ")[1]}
            </p>
          </div>
          <ul className="m-0 flex list-none flex-col p-0">
            {r.rubric.lines.map((l) => (
              <li key={l.name} className="grid grid-cols-[minmax(0,1fr)_120px_64px] items-center gap-4 border-t border-line py-3 text-[14px] leading-5 text-ink-secondary first:border-t-0">
                <span>{l.name}</span>
                <span aria-hidden="true" className="block h-[6px] overflow-hidden rounded-full bg-fill-soft"><span className="block h-full rounded-full bg-primary" style={{ width: `${l.pct}%` }} /></span>
                <span className="text-right text-ink tabular-nums">{l.pts}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="px-6 py-5 font-ui">
          <h2 className={h}>Learner goals</h2>
          <ul className="m-0 flex list-none flex-col p-0">
            {r.goals.map((g) => (
              <li key={g.text} className="flex items-center justify-between gap-4 border-t border-line py-3 text-[14px] leading-5 text-ink-secondary first:border-t-0">
                <span>{g.text}</span>
                <Badge tone={goalTone[g.status as keyof typeof goalTone] ?? "neutral"}>{g.status}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        {r.notes.map((n, k) => (
          <Card key={n.h} className="px-6 py-5 font-ui">
            <h2 className={h}>{n.h}</h2>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {n.items.map((it) => (
                <li key={it.title} className="flex items-start gap-3">
                  <span aria-hidden="true" className={`grid h-7 w-7 flex-none place-items-center rounded-full text-white [&_svg]:h-[15px] [&_svg]:w-[15px] ${k === 0 ? "bg-success" : "bg-caution"}`}>{k === 0 ? check : bang}</span>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="m-0 text-[14px] leading-5 font-label text-ink">{it.title}</p>
                      {it.at != null ? (
                        <button type="button" onClick={() => jump(it.at as number)} className="flex-none cursor-pointer border-0 bg-transparent p-0 font-ui text-[13px] font-label text-info hover:underline hover:underline-offset-[3px]">
                          {clock(it.at)} Jump
                        </button>
                      ) : null}
                    </div>
                    <p className="m-0 mt-[2px] text-[14px] leading-5 text-ink-secondary">{it.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ))}

        <Card className="overflow-hidden px-6 pt-5 pb-0 font-ui">
          <h2 className={h}>Transcript</h2>
          <ChatThread well className="-mx-6 rounded-none px-6">
            {r.lines.map((l, i) => (
              <ChatBubble key={i} variant="transcript" nameWeight="title" side={l.twin ? "twin" : "you"} name={l.who}>{l.text}</ChatBubble>
            ))}
          </ChatThread>
        </Card>
      </Page>
    </div>
  );
}
