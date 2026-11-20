import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Link } from "./Link";

const meta = {
  title: "Foundations/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Underlined, always: colour alone cannot tell a link from its text (WCAG 1.4.1). `--tt-primary-ink`, which clears AA as text. The underline thickens on hover (1px to 2px) instead of the colour changing. `href` renders an anchor; an `onClick` without `href` renders a button styled the same, for an in-page action like \"Show all\". `arrow` adds the 14px redirect icon.",
      },
    },
  },
  args: { href: "#", children: "Link text" },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithArrow: Story = { args: { arrow: true, children: "Link text" } };
export const AsButton: Story = {
  args: { href: undefined, onClick: () => {}, children: "Link text" },
};
export const InText: Story = {
  render: () => (
    <p className="max-w-[46ch] font-ui text-[14px] leading-6 text-ink-secondary">
      Body text with an inline <Link href="#">link</Link> and a second one that <Link href="#" arrow>leaves the page</Link>.
    </p>
  ),
};
