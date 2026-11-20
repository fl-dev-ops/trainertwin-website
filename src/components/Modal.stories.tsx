"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Modal, ConfirmDialog, SidePanel } from "./Modal";
import { Button } from "./Button";
import { Textarea } from "./Textarea";
import { ToastProvider, useToast } from "./Toast";

const meta = {
  title: "Foundations/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal, confirm dialog and side panel are the native `<dialog>` opened with `showModal()`: focus is trapped, the page behind is inert, Escape closes, and it sits in the browser's top layer, so stacking is free. Reserved for decisions that must be made now, or that are destructive. The confirm button takes the variant of the ACTION. To the V3 prototype (decided 16 Nov 2026): every popup shares the confirm dialog's surface, a soft grey-to-white gradient, a 4px white border, a 24px radius and one drop shadow, with the icon in a framed tile (danger-coloured for a destructive dialog, ink for a calm one). The side panel is 480 wide with square edges.",
      },
    },
  },
  decorators: [(Story) => <ToastProvider><Story /></ToastProvider>],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Confirm: Story = {
  args: { open: false, onClose: () => {}, title: "" },
  parameters: { docs: { description: { story: "A delete dialog confirms with the danger button." } } },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>Open confirm dialog</Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          title="Delete item?"
          description="One line of consequence: what happens, and whether it can be undone."
          confirmLabel="Delete"
          confirmVariant="danger"
          onConfirm={() => {
            setOpen(false);
            toast("Item deleted.", { type: "success" });
          }}
        />
      </>
    );
  },
};

export const Form: Story = {
  args: { open: false, onClose: () => {}, title: "" },
  parameters: { docs: { description: { story: "A form dialog: 520 wide, a form, Send disabled until there is text. No icon tile here, since it is a form, not a confirmation." } } },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open form dialog</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          closeOnBackdrop={false}
          title="Dialog title"
          description="Supporting text."
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button disabled={!text.trim()} onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <Textarea label="Label" rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Placeholder" hint="Helper text." />
        </Modal>
      </>
    );
  },
};

export const PlainSurface: Story = {
  args: { open: false, onClose: () => {}, title: "" },
  parameters: { docs: { description: { story: "`surface=\"plain\"`: flat white instead of the grey-to-white gradient, for a dialog that holds a list or a table (the assign-learners dialog). Everything else about the dialog is unchanged." } } },
  render: function Render() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open plain dialog</Button>
        <Modal open={open} onClose={() => setOpen(false)} surface="plain" size="lg" title="Dialog title" description="Supporting text." footer={<Button onClick={() => setOpen(false)}>Done</Button>}>
          <div className="rounded-md border border-line p-4 text-[14px] text-ink-secondary">A list or table goes here.</div>
        </Modal>
      </>
    );
  },
};

export const Panel: Story = {
  args: { open: false, onClose: () => {}, title: "" },
  parameters: { docs: { description: { story: "480 wide (the prototype's), full height, square edges, slides in from the right once. `width` sets another. Open a dialog from a row to see stacking: Escape closes the dialog first, then the panel." } } },
  render: function Render() {
    const [panel, setPanel] = useState(false);
    const [dlg, setDlg] = useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setPanel(true)}>Open panel</Button>
        <SidePanel open={panel} onClose={() => setPanel(false)} title="Panel title" description="Supporting text.">
          <ul className="divide-y divide-line font-ui">
            {["Item one", "Item two", "Item three"].map((r) => (
              <li key={r} className="flex items-center justify-between gap-4 py-4">
                <span className="text-[14px] text-ink">{r}</span>
                <Button size="sm" variant="secondary" onClick={() => setDlg(true)}>Open form dialog</Button>
              </li>
            ))}
          </ul>
        </SidePanel>
        <Modal open={dlg} onClose={() => setDlg(false)} title="Dialog title" footer={<Button variant="secondary" onClick={() => setDlg(false)}>Close</Button>}>
          <p className="font-ui text-[14px] text-ink-secondary">This dialog is later in the top layer, so it sits above the panel.</p>
        </Modal>
      </>
    );
  },
};
