import { useState, type ReactNode } from "react";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { Textarea } from "@components/Textarea";
import { Menu, type MenuEntry } from "@components/Menu";
import { AVATAR_TONES } from "./bits";
import inbox from "../data/brain-inbox.json";
import ui from "../data/brain-ui.json";

const html = (svg: string) => <span aria-hidden="true" className="contents" dangerouslySetInnerHTML={{ __html: svg }} />;
const tone = (name: string) => AVATAR_TONES[(name.length % 5)];
const Who = ({ name, detail }: { name: string; detail?: string }) => (
  <span className="flex min-w-0 items-center gap-2">
    <Avatar alt={name} initials={name[0]} size="xs" tone={tone(name)} className="h-[22px] w-[22px] text-[11px]" />
    <span className="truncate font-ui text-[13px] leading-5 font-title text-ink">{name}</span>
    {detail ? <span className="flex-none text-[12px] text-ink-tertiary">{detail}</span> : null}
  </span>
);
const Agent = ({ children }: { children: ReactNode }) => (
  <span className="inline-block max-w-full truncate rounded-full bg-fill-soft px-[10px] py-[2px] font-ui text-[12px] leading-5 text-ink-secondary">{children}</span>
);
const Dot = ({ label }: { label: string }) => <b role="img" aria-label={label} className="h-2 w-2 flex-none rounded-full bg-primary" />;

export type InboxStore = ReturnType<typeof useInboxStore>;
/** The Questions / Issues state, kept by the page so it survives switching tabs. */
export function useInboxStore() {
  const [questions, setQuestions] = useState(inbox.questions);
  const [history, setHistory] = useState(inbox.history as { id: string; q: string; who: string; agent: string; when: string; answer: string }[]);
  const [issues, setIssues] = useState(inbox.issues);
  const [resolved, setResolved] = useState(inbox.resolved);
  const [corrected, setCorrected] = useState(inbox.corrected);
  return { questions, setQuestions, history, setHistory, issues, setIssues, resolved, setResolved, corrected, setCorrected };
}

/** A toolbar chip with a listbox under it (v3 `.bq-chip` + `.twin-hero-ask-menu`). */
function ChipSelect({ label, icon, options, value, onChange }: { label: string; icon: string; options: [string, string][]; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const on = value !== options[0][0];
  return (
    <div className="relative">
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((o) => !o)} onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setOpen(false); }} className={`inline-flex h-8 cursor-pointer items-center gap-2 rounded-full border px-[14px] text-[13px] leading-5 text-ink hover:border-line-interactive [&>span>svg]:h-4 [&>span>svg]:w-4 [&>span>svg]:text-ink-secondary ${on ? "border-line-interactive bg-fill-soft" : "border-line-field bg-surface"}`}>
        {html(icon)}{label}
      </button>
      {open ? (
        <div role="listbox" aria-label={label} className="absolute top-[calc(100%+4px)] left-0 z-20 min-w-[180px] rounded-md bg-surface-raised p-2 shadow-e2">
          {options.map(([v, l]) => (
            <button key={v} type="button" role="option" aria-selected={v === value} onMouseDown={(e) => e.preventDefault()} onClick={() => { onChange(v); setOpen(false); }} className={`flex min-h-10 w-full cursor-pointer items-center rounded-sm px-3 text-left text-[14px] leading-5 text-ink ${v === value ? "bg-fill-soft" : "hover:bg-fill-soft"}`}>{l}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/**
 * NOT IN STORYBOOK YET. The Questions / Issues card on Twin's brain (v3 `.brain-card--split`): a left menu with
 * counts, a header, filter chips with a search, and a list of rows. Questions can be answered inline; an issue's ⋮ menu
 * corrects or resolves it. One component for both would be a good Storybook candidate (`InboxPane`).
 */
export function BrainPane({ kind, store, onCorrect }: { kind: "questions" | "issues"; store: InboxStore; onCorrect: () => void }) {
  const q = kind === "questions";
  const [view, setView] = useState("open");
  const { questions, setQuestions, history, setHistory, issues, setIssues, resolved, setResolved, corrected, setCorrected } = store;
  const [agentF, setAgentF] = useState("all");
  const [dateF, setDateF] = useState("any");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [answering, setAnswering] = useState<string | null>(null);
  const [text, setText] = useState("");
  const m = (q ? ui.questions : ui.issues).menu;
  const counts = { open: q ? questions.length : issues.length };
  const head = (q ? ui.questions : ui.issues).head;
  const chips = (q ? ui.questions : ui.issues).chips;
  const cols = q ? (view === "open" ? "130px 256px minmax(0,1fr) 108px" : "130px 384px minmax(0,1fr)") : "130px 328px minmax(0,1fr) 40px";
  const title = q ? (view === "open" ? ui.questions.title : ui.historyPane.title) : view === "open" ? ui.issues.title : view === "resolved" ? ui.resolvedPane.title : ui.correctedPane.title;
  const sub = q ? (view === "open" ? ui.questions.sub : ui.historyPane.sub) : view === "open" ? ui.issues.sub : view === "resolved" ? ui.resolvedPane.sub : ui.correctedPane.sub;

  const issueMenu = (id: string): MenuEntry[] => [
    { label: ui.issueMenu[0].label, icon: html(ui.issueMenu[0].svg), onSelect: () => { const it = issues.find((i) => i.id === id)!; setIssues((l) => l.filter((i) => i.id !== id)); setCorrected((l) => [{ id: it.id, who: it.who, agent: it.agent, where: "Just now", reason: it.reason }, ...l]); onCorrect(); } },
    { label: ui.issueMenu[1].label, icon: html(ui.issueMenu[1].svg), onSelect: () => { const it = issues.find((i) => i.id === id)!; setIssues((l) => l.filter((i) => i.id !== id)); setResolved((l) => [{ id: it.id, who: it.who, agent: it.agent, where: "Just now", reason: it.reason }, ...l]); } },
  ];
  const isToday = (t: string) => /today/i.test(t);
  const pass = (agent: string, when: string, text: string) =>
    (agentF === "all" || agent === agentF) && (dateF === "any" || (dateF === "today" ? isToday(when) : !isToday(when))) && text.toLowerCase().includes(search.trim().toLowerCase());
  const fq = questions.filter((r) => pass(r.agent, r.when, `${r.who} ${r.q}`));
  const fh = history.filter((r) => pass(r.agent, r.when, `${r.who} ${r.q} ${r.answer}`));
  const fi = issues.filter((r) => pass(r.agent, r.where, `${r.who} ${r.reason}`));
  const lst = view === "resolved" ? resolved : corrected;
  const fl = lst.filter((r) => pass(r.agent, r.where, `${r.who} ${r.reason}`));
  const agents = [...new Set([...questions, ...history, ...issues, ...resolved, ...corrected].map((r) => r.agent))];
  const row = "grid items-center gap-4 border-t border-line px-4 py-2 first:border-t-0";

  return (
    <div className="absolute inset-x-0 top-[120px] bottom-0 z-[4] px-4 pb-8">
      <section aria-label={q ? "Questions" : "Issues"} role="tabpanel" className="grid h-full grid-cols-[214px_1fr] overflow-hidden rounded-[20px] border border-line-card bg-surface font-ui shadow-[0_1px_2px_rgb(30_28_25/0.05),0_4px_14px_rgb(30_28_25/0.07)]">
        <nav aria-label={q ? "Questions" : "Issues"} className="flex flex-col gap-1 border-r border-line p-3 pt-5">
          {m.map((it) => {
            const on = view === it.id;
            return (
              <button key={it.id} type="button" aria-current={on ? "page" : undefined} onClick={() => setView(it.id ?? "open")} className={`flex min-h-8 w-full cursor-pointer items-center justify-between gap-2 rounded-sm px-3 text-left text-[14px] leading-5 font-label ${on ? "bg-surface text-primary-ink shadow-e1" : "text-ink-secondary hover:bg-fill-soft hover:text-ink"}`}>
                <span className={`flex items-center gap-2 [&>span>svg]:h-4 [&>span>svg]:w-4 ${on ? "[&>span>svg]:text-primary" : ""}`}>{html(it.svg)}{it.label}</span>
                {it.dot && it.id === "open" && counts.open ? <Dot label={`${counts.open} waiting`} /> : null}
              </button>
            );
          })}
        </nav>
        <div className="min-w-0 overflow-y-auto p-6 pt-5">
          <header>
            <h2 className="m-0 flex items-center gap-2 text-[17px] leading-6 font-title tracking-[-0.01em] text-ink">{title}</h2>
            <p className="m-0 mt-1 text-[14px] leading-5 text-ink-secondary">{sub}</p>
          </header>
          <div className="mt-6 flex items-center gap-2">
            {chips.map((c, i) => (
              <ChipSelect key={c.label} label={c.label} icon={c.svg} value={i === 0 ? agentF : dateF} onChange={i === 0 ? setAgentF : setDateF}
                options={i === 0 ? [["all", "All agents"], ...agents.map((a): [string, string] => [a, a])] : [["any", "Any time"], ["today", "Today"], ["earlier", "Earlier"]]} />
            ))}
            <span className="flex-1" />
            {searchOpen ? (
              <label className="flex h-8 w-[220px] items-center gap-2 rounded-full border border-line-field bg-surface pr-1 pl-3 text-ink-secondary focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary [&>span>svg]:h-4 [&>span>svg]:w-4">
                {html(ui.questions.searchSvg)}
                <input autoFocus type="search" aria-label={ui.questions.searchLabel} placeholder={q ? "Search questions" : "Search issues"} value={search} onChange={(e) => setSearch(e.target.value)} className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[13px] leading-5 text-ink outline-none placeholder:text-ink-tertiary" />
                <Button variant="ghost" size="sm" iconOnly aria-label="Close search" onClick={() => { setSearch(""); setSearchOpen(false); }} className="h-6! w-6! min-h-0!">{html('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6l-12 12M6 6l12 12"/></svg>')}</Button>
              </label>
            ) : (
              <Button variant="ghost" size="sm" iconOnly aria-label={q ? "Search questions" : "Search issues"} onClick={() => setSearchOpen(true)}>{html(ui.questions.searchSvg)}</Button>
            )}
          </div>
          <div className="mt-4 rounded-md border border-line-card bg-surface">
            {(q ? view === "open" : view === "open") ? (
              <div className={`${row} rounded-t-md bg-surface-sunken py-2 text-[12px] leading-4 font-label text-ink-secondary`} style={{ gridTemplateColumns: cols }} aria-hidden="true">
                {head.map((h) => <span key={h}>{h}</span>)}
                <span />
              </div>
            ) : null}
            {q && view === "open" && fq.map((r) => (
              <div key={r.id} className="border-t border-line first:border-t-0">
                <div className={`${row} border-t-0`} style={{ gridTemplateColumns: cols }}>
                  <Who name={r.who} />
                  <span className="truncate text-[14px] leading-5 font-label text-ink">“{r.q}”</span>
                  <Agent>{r.agent}</Agent>
                  {answering === r.id ? <span /> : (
                    <span className="flex items-center justify-end gap-1">
                      <Button variant="secondary" size="sm" onClick={() => { setAnswering(r.id); setText(""); }}>Answer</Button>
                      <Button variant="ghost" size="sm" iconOnly aria-label="Dismiss this question" onClick={() => setQuestions((l) => l.filter((x) => x.id !== r.id))}>{html(ui.questions.delSvg)}</Button>
                    </span>
                  )}
                </div>
                {answering === r.id ? (
                  <div className="px-4 pb-4">
                    <Textarea label="Your answer" labelHidden rows={3} placeholder="Write the answer the way you would say it" value={text} onChange={(e) => setText(e.target.value)} />
                    <div className="mt-3 flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setAnswering(null)}>Cancel</Button>
                      <Button size="sm" disabled={!text.trim()} onClick={() => { setHistory((h) => [{ id: r.id, q: r.q, who: r.who, agent: r.agent, when: "Just now", answer: text }, ...h]); setQuestions((l) => l.filter((x) => x.id !== r.id)); setAnswering(null); }}>Send answer</Button>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
            {q && view === "history" && fh.map((r) => (
              <div key={r.id} className="border-t border-line px-4 py-[11px] first:border-t-0">
                <div className="grid items-center gap-4" style={{ gridTemplateColumns: cols }}>
                  <Who name={r.who} />
                  <span className="truncate text-[14px] leading-5 font-label text-ink">“{r.q}”</span>
                  <Agent>{r.agent}</Agent>
                </div>
                <p className="m-0 mt-[2px] text-[11px] leading-4 font-label tracking-[0.09em] text-ink-secondary uppercase">Your answer</p>
                <p className="m-0 text-[14px] leading-5 text-ink-secondary">{r.answer}</p>
              </div>
            ))}
            {!q && view === "open" && fi.map((r) => (
              <div key={r.id} className={row} style={{ gridTemplateColumns: cols }}>
                <Who name={r.who} />
                <span className="truncate text-[14px] leading-5 font-label text-ink">{r.reason}</span>
                <Agent>{r.agent}</Agent>
                <span className="justify-self-end"><Menu label={`Actions for ${r.who}’s issue`} items={issueMenu(r.id)} /></span>
              </div>
            ))}
            {!q && view !== "open" && fl.map((r) => (
              <div key={r.id} className={row} style={{ gridTemplateColumns: "130px 220px minmax(0,1fr) 140px" }}>
                <Who name={r.who} />
                <span className="truncate text-[14px] leading-5 font-label text-ink">{r.reason}</span>
                <Agent>{r.agent}</Agent>
                <span className="text-[13px] text-ink-tertiary">{r.where}</span>
              </div>
            ))}
            {(q ? (view === "open" ? fq.length === 0 : fh.length === 0) : view === "open" ? fi.length === 0 : fl.length === 0) ? (
              <p className="m-0 p-6 text-center text-[14px] text-ink-secondary">{search || agentF !== "all" || dateF !== "any" ? "Nothing matches these filters." : "Nothing here."}</p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
