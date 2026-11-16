import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip, InfoHint } from "./Tooltip";
import { Button } from "./Button";

const meta = {
  title: "Foundations/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Inverted (`--tt-text-primary` background, `--tt-canvas` text). Tooltips explain; they never hold the only copy of something required. Opens on hover after 250ms and on keyboard focus at once; closes on leave, blur and Escape. `role=\"tooltip\"` linked with `aria-describedby`, and `pointer-events: none` so it can never trap the pointer. Wrap one focusable element; for a non-interactive thing give it `tabIndex={0}`.",
      },
    },
  },
  args: { content: "Tooltip text", side: "top", children: null },
  argTypes: { side: { control: "inline-radio", options: ["top", "bottom"] } },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary">Button</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = { args: { side: "bottom" }, render: Default.render };

export const OnANonInteractiveThing: Story = {
  parameters: { docs: { description: { story: "A ring with a share in words. It is given `tabIndex={0}` so a keyboard user can reach the tooltip too." } } },
  render: (args) => (
    <Tooltip {...args} content="Tooltip text">
      <span tabIndex={0} className="grid h-16 w-16 place-items-center rounded-full border-4 border-success font-ui text-[13px] font-title">
        20%
      </span>
    </Tooltip>
  ),
};

export const InfoHintStory: Story = {
  name: "InfoHint (info icon)",
  parameters: { docs: { description: { story: "A hint behind an info icon. The icon is a real button, so keyboard focus shows it, and the same text is also in the page for assistive tech, so the tooltip is never the only copy." } } },
  render: () => (
    <div className="flex items-center gap-1 font-ui text-[14px] text-ink">
      Roleplay
      <InfoHint id="story-hint">Supporting text.</InfoHint>
    </div>
  ),
};
