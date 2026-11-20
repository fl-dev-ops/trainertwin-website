import { useState } from "react";
import { Modal } from "@components/Modal";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Button } from "@components/Button";

/** The "Contact support" dialog the rail's Support item opens (v3: `supportDialog`). */
export function SupportDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const ok = subject.trim() && msg.trim();
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Contact support"
      description="Ask us anything or tell us what went wrong. We'll reply to your email."
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button disabled={!ok} onClick={onClose}>Send</Button>
        </>
      }
    >
      <div className="flex flex-col gap-4">
        <Input label="Subject" placeholder="What's it about?" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <Textarea label="Message" rows={3} placeholder="Tell us the details..." value={msg} onChange={(e) => setMsg(e.target.value)} />
      </div>
    </Modal>
  );
}
