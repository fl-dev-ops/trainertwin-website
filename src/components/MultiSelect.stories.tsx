"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MultiSelect } from "./MultiSelect";

const options = [
  { value: "sales", label: "Option one" },
  { value: "support", label: "Option two" },
  { value: "coaching", label: "Option three" },
  { value: "interview", label: "Option four" },
  { value: "onboarding", label: "Option five" },
];

const meta = {
  title: "Foundations/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pick several. Selected values show as removable chips; `max` caps the count, and at the cap the remaining options stop being selectable rather than disappearing. `name` emits one hidden input per value.",
      },
    },
  },
  args: { label: "Label", options, value: [], onChange: () => {} },
  render: function Render(args) {
    const [v, setV] = useState<string[]>([...args.value]);
    return (
      <div className="w-[360px] max-w-full">
        <MultiSelect {...args} value={v} onChange={setV} />
      </div>
    );
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: "Placeholder" } };
export const Preselected: Story = { args: { value: ["sales", "coaching"] } };
export const Capped: Story = {
  args: { max: 2, value: ["sales", "support"], hint: "Helper text." },
};
export const Invalid: Story = { args: { error: "Error message that names the fix." } };
