import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptyState, GateCard } from "./EmptyState";
import { Button } from "./Button";

const meta = {
  title: "Structure/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A dashed `--tt-border-interactive` container, a title, one line of copy and EXACTLY ONE action. Say what the space is for and what to do next, not that it is empty. The gate card is a different surface (radius 16, a 1px border, no shadow, a gradient hero band, 420 wide, centred) for the screens that show before a twin exists, and may carry two actions.",
      },
    },
  },
  args: {
    title: "Title",
    description: "One line that says what this space is for and what to do next.",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="max-w-[640px]">
      <EmptyState {...args} action={<Button>Action</Button>} />
    </div>
  ),
};

export const NoAction: Story = {
  args: { title: "Title", description: "Description." },
  render: (args) => <div className="max-w-[640px]"><EmptyState {...args} /></div>,
};

export const Gate: Story = {
  parameters: { docs: { description: { story: "The gate: Home, Analytics and Roleplay before a twin exists. To the prototype: radius 16, a 1px border, no shadow, centred, 420 wide, with a pastel hero band that holds the illustration (a placeholder here)." } } },
  render: () => (
    <GateCard
      illustration={<div className="h-24 w-1/2 rounded-lg bg-surface" />}
      title="Title"
      description="Supporting text."
      actions={
        <>
          <Button variant="strong">Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
        </>
      }
    />
  ),
};
