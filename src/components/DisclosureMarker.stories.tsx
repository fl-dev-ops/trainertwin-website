import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DisclosureMarker } from "./DisclosureMarker";

const meta = {
  title: "Session/DisclosureMarker",
  component: DisclosureMarker,
  parameters: {
    docs: {
      description: {
        component:
          "Persistent, quiet, and never orange — orange means *the platform is acting*, and this is a statement of fact rather than a call to action. It names the trainer on purpose: the trust being extended is theirs, so \"AI assistant\" is not a disclosure and \"AI twin of Priya Raman\" is. There is no dismiss affordance, by construction.",
      },
    },
  },
  argTypes: {
    trainerName: { control: "text" },
    overlay: { control: "boolean" },
  },
  args: {
    trainerName: "Priya Raman",
  },
} satisfies Meta<typeof DisclosureMarker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InSessionHeader: Story = {};

export const LongName: Story = {
  args: { trainerName: "Venkataraman Subramanian" },
  parameters: {
    docs: {
      description: {
        story:
          "No fixed widths anywhere in this component — the marker grows with the name. This matters more than it looks: the same rule is what keeps the layout intact when the UI is translated and labels expand by ~35%.",
      },
    },
  },
};

export const VideoOverlay: Story = {
  args: { overlay: true },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "In video mode the marker appears **twice** — once in the session header and once composited inside the video frame. A likeness of a real person that can be screen-recorded has to carry its disclosure inside the pixels, not beside them.",
      },
    },
  },
  render: (args) => (
    <div className="relative aspect-video w-[420px] max-w-full overflow-hidden rounded-lg bg-surface-sunken">
      <div className="grid h-full w-full place-items-center font-ui text-[13px] text-ink-tertiary">
        video stage
      </div>
      <div className="absolute bottom-3 left-3">
        <DisclosureMarker {...args} />
      </div>
    </div>
  ),
};
