import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Foundations/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Eight semantic tones and no free-form colour prop: a palette anyone can add to is not a palette (D05). `brand` marks the one recommended option on a card and nothing else; for a category use `neutral`. Severity rides on fill, icon and text, never colour alone (SC 1.4.1). `live` and `available` keep a border because their background is transparent.",
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "brand", "success", "info", "caution", "danger", "live", "available"],
    },
    size: { control: "inline-radio", options: ["sm", "md"] },
    dot: { control: "boolean" },
  },
  args: { children: "Badge", tone: "neutral", size: "md", dot: false },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {(["neutral", "brand", "success", "info", "caution", "danger", "live", "available"] as const).map((t) => (
        <Badge key={t} {...args} tone={t}>
          {t}
        </Badge>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args} size="sm">sm &middot; counts, flags</Badge>
      <Badge {...args} size="md">md &middot; the default pill</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  parameters: {
    docs: {
      description: { story: "The dot means STATE (active, inactive, live), never category." },
    },
  },
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args} tone="success" dot>Active</Badge>
      <Badge {...args} tone="neutral" dot>Inactive</Badge>
      <Badge {...args} tone="live" dot>Live</Badge>
    </div>
  ),
};
