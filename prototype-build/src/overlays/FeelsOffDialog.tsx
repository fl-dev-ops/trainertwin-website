import { useState } from "react";
import { Modal } from "@components/Modal";
import { Button } from "@components/Button";
import { Textarea } from "@components/Textarea";
import { ChoiceChip } from "../local/ChoiceChip";

const REASONS = ["Too generic", "Too long", "Doesn’t sound like me", "Missing an example", "Something else"];

/** v3 `twin-off-dialog`: say why a reply feels off. Pick any reasons, add an optional note, Submit. */
export function FeelsOffDialog({ open, quote, onClose, onSubmit }: { open: boolean; quote: string; onClose: () => void; onSubmit: (reasons: string[], note: string) => void }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState("");
  // Start clean every time the dialog closes (Cancel, Escape, backdrop or Submit), so it opens empty next time.
  const reset = () => {
    setPicked([]);
    setNote("");
  };
  const close = () => {
    reset();
    onClose();
  };
  const toggle = (r: string) => setPicked((p) => (p.includes(r) ? p.filter((x) => x !== r) : [...p, r]));
  return (
    <Modal
      open={open}
      onClose={close}
      size="sm"
      title="Why does this feel off?"
      description="Pick what fits. Olga’s twin will learn from it."
      footer={
        <>
          <Button variant="secondary" onClick={close}>Cancel</Button>
          <Button onClick={() => { onSubmit(picked, note.trim()); reset(); }}>Submit</Button>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="m-0 rounded-md bg-fill-soft px-4 py-3 font-ui text-[14px] leading-5 text-ink-secondary">“{quote}”</p>
        <div role="group" aria-label="Reasons" className="flex flex-wrap gap-2">
          {REASONS.map((r) => (
            <ChoiceChip key={r} pressed={picked.includes(r)} onClick={() => toggle(r)}>{r}</ChoiceChip>
          ))}
        </div>
        <Textarea label="Anything to add? Optional" rows={2} placeholder="Say it the way Olga would" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
    </Modal>
  );
}
