import { useMemo, useState } from "react";
import { Modal } from "@components/Modal";
import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { Avatar } from "@components/Avatar";
import { FilterSelect } from "@components/FilterSelect";
import { SearchField } from "@components/SearchField";
import { AVATAR_TONES } from "../local/bits";
import data from "../data/assign.json";

/**
 * v3 `roleAssignDialog`: pick learners (by cohort, by search) and give each some minutes. Rows already assigned are
 * ticked, dimmed and locked. Composed from Modal, Checkbox, Avatar and Button; the cohort filter and the minutes
 * pill are local pieces.
 */
export function AssignDialog({ open, onClose, botTitle }: { open: boolean; onClose: () => void; botTitle: string }) {
  const [cohort, setCohort] = useState("all");
  const [q, setQ] = useState("");
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const rows = useMemo(
    () => data.rows.filter((r) => (cohort === "all" || r.cohort === cohort) && `${r.name} ${r.email} ${r.phone}`.toLowerCase().includes(q.toLowerCase())),
    [cohort, q],
  );
  const open_ = rows.filter((r) => !r.done);
  const n = Object.values(picked).filter(Boolean).length;
  const all = open_.length > 0 && open_.every((r) => picked[r.email]);
  return (
    <Modal open={open} onClose={onClose} size="lg" title={data.title} description={`${botTitle} · ${data.assigned} assigned${n ? ` · ${n} selected` : ""}`}
      footer={
        <div className="flex w-full items-center justify-between gap-4">
          <p className="m-0 flex items-center gap-2 font-ui text-[13px] leading-5 text-ink-secondary">
            <svg className="h-4 w-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
            {data.note}
          </p>
          <Button disabled={n === 0} onClick={onClose}>Save and Assign</Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FilterSelect width={148} label="Filter by cohort" options={data.cohorts.map(([v, l]) => ({ value: v, label: l }))} value={cohort} onChange={setCohort} />
          <SearchField label="Search users" appearance="field" placeholder={data.search} value={q} onChange={setQ} className="min-w-0 flex-1" />
        </div>
        <div role="table" aria-label="Learners" className="max-h-[340px] overflow-y-auto rounded-md border border-line">
          <div role="row" className="sticky top-0 z-[1] grid grid-cols-[44px_44px_1fr_auto] items-center gap-3 bg-surface-sunken px-4 py-[13px] font-ui text-[12px] leading-4 text-ink-secondary">
            <Checkbox label="Select all learners" labelHidden checked={all} onChange={(e) => setPicked(Object.fromEntries(open_.map((r) => [r.email, e.target.checked])))} />
            <span className="col-span-2">Learner</span>
            <span className="w-[96px]">Minutes</span>
          </div>
          {rows.length === 0 ? <p className="m-0 p-4 text-center font-ui text-[13px] text-ink-secondary">No one matches that search.</p> : null}
          {rows.map((r) => {
            const on = r.done || !!picked[r.email];
            return (
              <label key={r.email} className={`flex items-center gap-3 border-t border-line px-4 py-3 first:border-t-0 ${r.done ? "cursor-default" : "cursor-pointer hover:bg-fill-soft"}`}>
                <Checkbox label={`Assign ${r.name}`} labelHidden checked={on} disabled={r.done} onChange={(e) => setPicked((p) => ({ ...p, [r.email]: e.target.checked }))} />
                <span className={`flex min-w-0 flex-1 items-center gap-3 ${r.done ? "opacity-60" : ""}`}>
                  <Avatar alt={r.name} initials={r.initial} size="md" tone={AVATAR_TONES[(r.tone - 1) % 5]} />
                  <span className="flex min-w-0 flex-col font-ui">
                    <span className="text-[14px] leading-5 font-label">{r.name}</span>
                    <span className="truncate text-[12px] leading-4 text-ink-secondary">{r.email}</span>
                    <span className="truncate text-[12px] leading-4 text-ink-secondary">{r.phone}</span>
                  </span>
                </span>
                <span className={`inline-flex h-8 min-w-[96px] flex-none items-center justify-between gap-2 rounded-full pr-3 pl-4 font-ui text-[13px] leading-5 ${on && !picked[r.email] ? "border border-line-field bg-surface text-ink" : on ? "border border-line-field bg-surface text-ink" : "bg-fill-soft text-ink-tertiary"}`}>
                  {r.min} min
                  <svg className="h-3 w-3 flex-none text-ink-secondary" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
