import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Foundations/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Four sizes (24 / 28 / 32 / 44, the `--tt-size-avatar-*` ladder). `alt` is required: it is the alt text and the source of the initials, which are derived, never passed in. The fallback is a neutral disc, not orange: avatars repeat, and who someone is has never been a thing to press.",
      },
    },
  },
  argTypes: { size: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] } },
  args: { alt: "Alex Morgan", size: "md" },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const WithImage: Story = { args: { src: "/tt/avatar-learner.png", alt: "Sam Patel" } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-3">
      {(["xs", "sm", "md", "lg"] as const).map((s) => (
        <Avatar key={s} {...args} size={s} />
      ))}
    </div>
  ),
};

export const Stack: Story = {
  parameters: {
    docs: { description: { story: "The learner stack on a Twin agent card: 28px, overlapped by 8, a 2px ring in the surface colour, then a `+N` disc." } },
  },
  render: () => (
    <div className="flex items-center">
      {["Alex Morgan", "Jo Chen", "Kim Lee", "Rae Ortiz"].map((n, i) => (
        <Avatar key={n} alt={n} size="sm" className={i ? "-ml-2 ring-2 ring-surface" : "ring-2 ring-surface"} />
      ))}
      <span className="-ml-2 grid h-7 w-7 place-items-center rounded-full bg-fill-soft-hover text-[11px] font-medium text-ink-secondary ring-2 ring-surface">+1</span>
    </div>
  ),
};
