"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Calendar, DateField, todayIso } from "./Calendar";
import { Modal } from "./Modal";
import { Button } from "./Button";

const meta = {
  title: "Foundations/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "**Orange marks today; the dark CTA marks the selection.** A day number is about 13px, far too small for white-on-orange, so selected is never orange (D76). The calendar is 288px, Sunday-first, 34px day circles; days before `min` (today) are disabled at 45% and the footer says why. Keyboard: arrows by day and week, PageUp / PageDown by month, Home / End to the week's ends. The `DateField` always keeps the typable `<input type=\"date\">` (typing \"17 sep\" beats four taps, and it is the route that works with a screen reader), hides the native picker, draws its own icon, and never calls `showPicker()`. Escape closes the popover first and leaves a surrounding dialog open.",
      },
    },
  },
  args: { value: "", onChange: () => {}, today: "2026-11-16" },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [v, setV] = useState("2026-11-24");
    return <Calendar {...args} value={v} onChange={setV} />;
  },
};

export const Field: Story = {
  parameters: { docs: { description: { story: "Click anywhere on the field to open the popover, or type a date. The popover closes on pick, Escape, or a click outside." } } },
  render: function Render(args) {
    const [v, setV] = useState("");
    return (
      <div className="min-h-[380px] w-[260px]">
        <DateField label="Label" value={v} onChange={setV} today={args.today} min={args.today} hint="Helper text." />
      </div>
    );
  },
};

export const CompactInPopup: Story = {
  parameters: { docs: { description: { story: "150 × 32, for a field in a popup row (the Assign dialog)." } } },
  render: function Render(args) {
    const [v, setV] = useState("2026-11-30");
    return (
      <div className="min-h-[380px]">
        <DateField compact label="Label" value={v} onChange={setV} today={args.today} min={args.today} />
      </div>
    );
  },
};

export const InDialog: Story = {
  parameters: { docs: { description: { story: "Escape closes the calendar first and the dialog second. The footer words are a prop (`disabledReason`); product copy goes there." } } },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    const [v, setV] = useState("");
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Dialog title" footer={<Button onClick={() => setOpen(false)}>Confirm</Button>}>
          <div className="min-h-[360px]">
            <DateField label="Label" value={v} onChange={setV} today={args.today} min={args.today} />
          </div>
        </Modal>
      </>
    );
  },
};

export const RealToday: Story = {
  args: { today: todayIso() },
  render: function Render(args) {
    const [v, setV] = useState("");
    return <Calendar {...args} value={v} onChange={setV} />;
  },
};
