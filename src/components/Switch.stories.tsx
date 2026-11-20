"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";

const meta = {
  title: "Foundations/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An on/off setting that takes effect the moment it is flipped (a module on or off, a notification). If the change needs a Save, use a Checkbox. 40 × 24 track, 20px thumb. On is brand orange (`--tt-primary`), off is `--tt-border`, the thumb is always the surface colour. Orange for a switch is the one exception to the rule that state is never orange (D04, D107), decided 16 Nov 2026: the V3 prototype's switch is orange and stays so. Checkbox and selected tiles stay neutral. `role=\"switch\"` on a button: Space and Enter toggle.",
      },
    },
  },
  args: { checked: false, onChange: () => {}, label: "Label" },
  render: function Render(args) {
    const [on, setOn] = useState(args.checked);
    return <Switch {...args} checked={on} onChange={setOn} />;
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};
export const On: Story = { args: { checked: true } };
export const WithHint: Story = {
  args: { checked: true, hint: "Supporting text." },
  parameters: { docs: { description: { story: "The hint sits behind an info icon and shows as a tooltip on hover and keyboard focus. It is also in the page for assistive tech, so it is never tooltip-only." } } },
};
export const InlineHint: Story = {
  args: { checked: true, hintStyle: "inline", hint: "Supporting text." },
  parameters: { docs: { description: { story: "`hintStyle=\"inline\"` for a hint the user needs to read without hovering." } } },
};
export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Switch {...args} checked={false} disabled />
      <Switch {...args} checked disabled />
    </div>
  ),
};
export const SettingsRows: Story = {
  parameters: { docs: { description: { story: "The Settings page: a row heading with its own switch. With no visible label of its own the switch takes `aria-label`." } } },
  render: function Render() {
    const [m, setM] = useState({ one: true, two: true, three: false });
    const rows = [
      ["one", "Setting one", "Supporting text."],
      ["two", "Setting two", "Supporting text."],
      ["three", "Setting three", "Supporting text."],
    ] as const;
    return (
      <div className="w-[460px] max-w-full divide-y divide-line rounded-md border border-line-card bg-surface shadow-card">
        {rows.map(([k, t, d]) => (
          <div key={k} className="flex items-center justify-between gap-4 px-5 py-4 font-ui">
            <div>
              <div className="text-[14px] leading-5 font-title text-ink">{t}</div>
              <div className="text-[13px] leading-5 text-ink-tertiary">{d}</div>
            </div>
            <Switch aria-label={t} checked={m[k]} onChange={(v) => setM({ ...m, [k]: v })} />
          </div>
        ))}
      </div>
    );
  },
};
