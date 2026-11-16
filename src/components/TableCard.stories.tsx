import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TableCard } from "./TableCard";
import { Button } from "./Button";

const meta = {
  title: "Data/TableCard",
  component: TableCard.Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The container for a table: a header row (title, optional count badge and description, trailing actions) over a body you supply. Compose `TableCard.Root` + `TableCard.Header` + `Table`.",
      },
    },
  },
  args: { title: "Title", badge: "24", description: "Description." },
} satisfies Meta<typeof TableCard.Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <TableCard.Root className="w-[720px] max-w-full">
      <TableCard.Header {...args} />
      <div className="px-6 py-8 text-[14px] text-ink-tertiary">Table goes here.</div>
    </TableCard.Root>
  ),
};

export const WithActions: Story = {
  render: (args) => (
    <TableCard.Root className="w-[720px] max-w-full">
      <TableCard.Header
        {...args}
        contentTrailing={<Button variant="secondary" size="sm">Action</Button>}
      />
      <div className="px-6 py-8 text-[14px] text-ink-tertiary">Table goes here.</div>
    </TableCard.Root>
  ),
};
