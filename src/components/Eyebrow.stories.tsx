import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Eyebrow } from "./Eyebrow";

const meta = {
  title: "Foundations/Eyebrow",
  component: Eyebrow,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The small uppercase label above a value or a section: 11/12, 600, +.09em, tertiary (V3 `.overline`). No margin of its own. A label, not a heading.",
      },
    },
  },
  args: { children: "Label" },
} satisfies Meta<typeof Eyebrow>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AboveAValue: Story = {
  render: () => (
    <div className="font-ui">
      <Eyebrow className="mb-2">Label</Eyebrow>
      <p className="m-0 text-[24px] leading-[30px] font-title">112</p>
    </div>
  ),
};
