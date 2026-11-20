import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Foundations/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Multi-line text field. Same border (0.5px `--tt-border-field`, firming to `--tt-border-interactive` on hover and focus), radius and label / hint / error wiring as `Input`; only the height and padding differ. Default is the prototype's measured 72px box, 12px padding, 23px line height: three lines of 14px text. Fixed by default (`resize: none`); `vertical` for long free text. The error replaces the hint and should name the fix, not the failure. With `limit` the counter turns danger and bold once over.",
      },
    },
  },
  argTypes: { resize: { control: "inline-radio", options: ["none", "vertical"] } },
  args: { label: "Label", placeholder: "Placeholder" },
  decorators: [(Story) => <div className="max-w-[420px]"><Story /></div>],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithHint: Story = { args: { hint: "Helper text." } };
export const Filled: Story = { args: { defaultValue: "Entered text that fills the field." } };
export const Invalid: Story = {
  args: { error: "Error message that names the fix.", defaultValue: "" },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: "Disabled value." } };
export const ReadOnly: Story = { args: { readOnly: true, defaultValue: "Read-only value." } };
export const Counter: Story = {
  args: { limit: 80, defaultValue: "Entered text that runs past the limit, so the counter warns that it is over." },
  parameters: { docs: { description: { story: "`limit` allows typing past it, so the counter can warn. `maxLength` stops the browser at the cap instead." } } },
};
export const Tall: Story = { args: { rows: 6, resize: "vertical", hint: "Helper text. Drag the corner to grow it." } };
