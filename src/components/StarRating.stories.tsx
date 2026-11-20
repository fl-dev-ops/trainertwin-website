import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StarRating } from "./StarRating";

const meta = {
  title: "Foundations/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Five stars with `value` filled. The colour follows the value (5 success, 4 caution, 3 or less danger) unless `tone` is set. It is an image with its own label, so it never stands alone as the rating's name.",
      },
    },
  },
  argTypes: { value: { control: { type: "number", min: 0, max: 5 } }, tone: { control: "inline-radio", options: [undefined, "great", "good", "low"] } },
  args: { value: 4 },
} satisfies Meta<typeof StarRating>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const EveryValue: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {[5, 4, 3, 2, 1].map((n) => (
        <StarRating key={n} value={n} />
      ))}
    </div>
  ),
};
export const Large: Story = { args: { size: 20 } };
