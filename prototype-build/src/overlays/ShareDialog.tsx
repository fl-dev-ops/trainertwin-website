import { useState } from "react";
import { Modal } from "@components/Modal";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const share = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" />
  </svg>
);
const copy = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
  </svg>
);

/** v3 `botShareDialog`: a calm modal with the agent's distribution link and a copy button. */
export function ShareDialog({ open, onClose, botId, botTitle }: { open: boolean; onClose: () => void; botId: string; botTitle: string }) {
  const link = `https://trainertwin.app/b/${botId}`;
  const [copied, setCopied] = useState(false);
  return (
    <Modal open={open} onClose={onClose} iconTone="calm" icon={share} title={`Share ${botTitle}`} description="Send this link to your learners so they can ask the bot.">
      <p className="mt-0 mb-2 font-ui text-[15px] leading-[22px] font-label text-ink">Distribution link</p>
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1"><Input label="Distribution link" labelHidden readOnly value={link} /></div>
        <Button
          variant="secondary"
          className="h-10 flex-none font-medium! [&_svg]:h-4 [&_svg]:w-4"
          onClick={() => {
            navigator.clipboard?.writeText(link).catch(() => {});
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          {copy}
          {copied ? "Copied" : "Copy link"}
        </Button>
      </div>
    </Modal>
  );
}
