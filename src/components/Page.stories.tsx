import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Page, type PageSize } from "./Page";
import { PageHeader } from "./PageHeader";

const meta = {
  title: "Structure/Page",
  component: Page,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The page body: centred, a max width and its padding, in five sizes (`library` 1024, `account` 1000, `fluid`, `reading` 720, `form` 718). Put a `PageHeader` first. The padding sits on the page, not on the sheet around it.",
      },
    },
  },
  argTypes: { size: { control: "inline-radio", options: ["library", "account", "fluid", "reading", "form"] satisfies PageSize[] } },
  args: { children: null },
} satisfies Meta<typeof Page>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Library: Story = {
  render: (args) => (
    <div className="min-h-[300px] bg-canvas">
      <Page {...args}>
        <PageHeader title="Page title" />
        <div className="mt-6 h-32 rounded-lg border border-dashed border-line bg-surface" />
      </Page>
    </div>
  ),
  args: { size: "library" },
};
export const Reading: Story = { ...Library, args: { size: "reading" } };
export const Form: Story = { ...Library, args: { size: "form" } };
