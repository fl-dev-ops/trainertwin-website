import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spinner } from "./Spinner";

const meta = {
  title: "Foundations/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The loading mark is the brand's own 3×3 grid with a brightness sweep, on `currentColor`: white on a primary button, near-black on a light one. It is one of the five licensed motion cases (ingest progress, thinking). Pass a specific `label` when the caller has context, e.g. \"Loading label\".",
      },
    },
  },
  argTypes: { size: { control: "inline-radio", options: ["sm", "md"] } },
  args: { size: "sm", label: "Loading" },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Medium: Story = { args: { size: "md", label: "Loading label" } };
export const OnPrimary: Story = {
  render: (args) => (
    <span className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-on-primary">
      <Spinner {...args} /> Saving
    </span>
  ),
};
