"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stepper } from "./Stepper";
import { Button } from "./Button";

const steps = ["Step one", "Step two", "Step three"];

const meta = {
  title: "Foundations/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A numbered row of linear steps: 24px circles, 13/500 numerals, labels 14/20. The current step is `--tt-text-primary` with a white numeral; done steps show a check; upcoming steps are grey. Pass `onSelect` to let people return to a DONE step; upcoming steps are never clickable. A real `<ol>` with `aria-current=\"step\"`.",
      },
    },
  },
  args: { steps, current: 2, "aria-label": "Steps" },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FirstStep: Story = { args: { current: 1 } };
export const LastStep: Story = { args: { current: 3 } };
export const Interactive: Story = {
  render: function Render(args) {
    const [n, setN] = useState(2);
    return (
      <div className="flex flex-col items-center gap-6">
        <Stepper {...args} current={n} onSelect={setN} />
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" disabled={n === 1} onClick={() => setN(n - 1)}>Back</Button>
          <Button size="sm" disabled={n === 3} onClick={() => setN(n + 1)}>Next</Button>
        </div>
      </div>
    );
  },
};
