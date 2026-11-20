"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select } from "./Select";

const options = [
  { value: "twin", label: "Option one" },
  { value: "role", label: "Option two" },
  { value: "all", label: "Option three" },
];

const meta = {
  title: "Foundations/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A single-select dropdown on the shared listbox hook: keyboard-complete, typeahead, `aria-activedescendant`. Pass `error` to set the invalid state; say what to do, not what broke. `name` emits a hidden input so a real form submit carries the value.",
      },
    },
  },
  args: { label: "Label", options, value: "", onChange: () => {} },
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    return (
      <div className="w-[320px] max-w-full">
        <Select {...args} value={v} onChange={setV} />
      </div>
    );
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: "Placeholder" } };
export const WithHint: Story = { args: { hint: "Helper text." } };
export const Selected: Story = { args: { value: "twin" } };
export const Invalid: Story = { args: { error: "Error message that names the fix." } };
export const Disabled: Story = { args: { disabled: true, value: "all" } };
