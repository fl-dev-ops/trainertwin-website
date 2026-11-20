"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Foundations/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "18px, the 0.5px form border and the 4px `xs` radius. Checked fills with `--tt-cta-strong` and marks in `--tt-on-cta-strong`, never brand orange. The tick is a 1px stroke (two borders on a rotated box), and the indeterminate dash is 1px to match. A native checkbox under a label, so the label is part of the hit target and Space toggles it.",
      },
    },
  },
  args: { label: "Label" },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const WithHint: Story = { args: { hint: "Supporting text.", defaultChecked: true } };
export const TooltipHint: Story = {
  args: { hintStyle: "tooltip", hint: "Supporting text.", defaultChecked: true },
};
export const Disabled: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Checkbox {...args} disabled />
      <Checkbox {...args} disabled defaultChecked />
    </div>
  ),
};

export const Indeterminate: Story = {
  parameters: {
    docs: { description: { story: "A parent whose children are partly selected. The parent's own state is derived from the children, never stored." } },
  },
  render: function Render() {
    const [items, setItems] = useState({ a: true, b: false, c: true });
    const n = Object.values(items).filter(Boolean).length;
    const all = n === 3;
    const none = n === 0;
    return (
      <div className="flex flex-col gap-3">
        <Checkbox
          label="Select all"
          checked={all}
          indeterminate={!all && !none}
          onChange={() => setItems({ a: !all, b: !all, c: !all })}
        />
        <div className="ml-7 flex flex-col gap-3">
          {(["a", "b", "c"] as const).map((k) => (
            <Checkbox key={k} label={`Item ${k.toUpperCase()}`} checked={items[k]} onChange={() => setItems({ ...items, [k]: !items[k] })} />
          ))}
        </div>
      </div>
    );
  },
};
