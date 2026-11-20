import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Foundations/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "`border-top: var(--tt-border-thin) solid var(--tt-border)`. Use one only where whitespace has already failed: most things read better with more space and no line. Decorative by default (`aria-hidden`); pass `semantic` where the rule separates two regions a screen reader should know about.",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-[360px] max-w-full font-ui text-[14px] text-ink">
      <p>Needs a look</p>
      <Divider {...args} className="my-6" />
      <p>Sessions</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-6 items-center gap-3 font-ui text-[14px] text-ink">
      Filter <Divider {...args} /> Search <Divider {...args} /> Export
    </div>
  ),
};
