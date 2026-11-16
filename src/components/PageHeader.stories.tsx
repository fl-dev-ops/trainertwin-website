import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PageHeader, SectionHeading, BackBar } from "./PageHeader";
import { Button } from "./Button";
import { EyeIcon } from "./UiIcons";

const meta = {
  title: "Structure/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The per-page header every product page opens with: title left (16/22, 600, with an optional 28px icon box), a tools cluster right, 40px high (32px when it holds only small filters). One secondary tool button may sit top-right (Usage's \"Action\", Billing's \"Support\"); it never competes with the page's one primary action. The title size is off the type scale (§10), built as measured.",
      },
    },
  },
  args: { title: "Page title" },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = { args: { icon: <EyeIcon /> } };
export const WithTools: Story = {
  args: { title: "Page title", tools: <Button variant="secondary" size="sm">Action</Button> },
};
export const WithFilters: Story = {
  args: {
    title: "Page title",
    compact: true,
    tools: (
      <>
        <Button variant="secondary" size="sm">Filter</Button>
        <Button variant="secondary" size="sm">Filter</Button>
      </>
    ),
  },
  parameters: { docs: { description: { story: "Compact (32px): the tools are only small filters." } } },
};

export const PageSkeleton: Story = {
  parameters: { docs: { description: { story: "Header, then a section heading 32px below it." } } },
  render: () => (
    <div className="max-w-[720px]">
      <PageHeader title="Page title" tools={<Button variant="secondary" size="sm">Action</Button>} />
      <SectionHeading>Section heading</SectionHeading>
    </div>
  ),
};

export const BackBars: Story = {
  parameters: { docs: { description: { story: "Detail and builder pages: 64px, canvas, padding 0 32, back link at 14/20 with a 16px arrow, optional actions right." } } },
  render: () => (
    <BackBar label="Back" onBack={() => {}} actions={<Button size="sm">Action</Button>} />
  ),
};
