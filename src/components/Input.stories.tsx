import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";

const meta = {
  title: "Foundations/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Form controls use `--tt-border-form` (0.5px). On a 2x display that is a true one-device-pixel rule; on 1x, browsers round up to 1px rather than dropping it, so the boundary never vanishes. Thinness doesn't lower the contrast bar — the border stays `--tt-border-interactive`, clearing the 3:1 that WCAG 1.4.11 requires of an interactive boundary in both themes.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Source name",
    placeholder: "Sprint Planning — week 3",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "Shown to learners when the twin cites this source." },
};

export const WithError: Story = {
  args: {
    error: "Add a name so learners can see where an answer came from.",
    defaultValue: "",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error copy names the fix, not the failure. \"This field is required\" tells someone they did something wrong; this tells them what to do and why it matters.",
      },
    },
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "Processing…" },
};

export const HairlineAtScale: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Four stacked fields — the case where hairline borders earn their keep. At 1px these read as a heavy ladder; at 0.5px the form recedes and the content leads.",
      },
    },
  },
  render: () => (
    <div className="flex max-w-[380px] flex-col gap-4">
      <Input label="Trainer name" defaultValue="Priya Raman" />
      <Input label="Specialism" defaultValue="System design interviews" />
      <Input label="Session length" defaultValue="45 minutes" />
      <Input
        label="Source name"
        placeholder="Sprint Planning — week 3"
        hint="Shown to learners when the twin cites this source."
      />
    </div>
  ),
};
