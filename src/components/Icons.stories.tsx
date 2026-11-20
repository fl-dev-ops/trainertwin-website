import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Ui from "./UiIcons";
import * as More from "./icons";

const all = Object.entries({ ...Ui, ...More })
  .filter(([n, v]) => n.endsWith("Icon") && typeof v === "function")
  .sort(([a], [b]) => a.localeCompare(b)) as [string, (p: { size?: number }) => React.ReactElement][];

const meta = {
  title: "Foundations/Icons",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Every outline icon the product uses, by name: 24 viewBox, stroke 2, round caps and joins, `currentColor`, decorative (`aria-hidden`). Import `{ SearchIcon } from \"@/components/icons\"` (or `UiIcons` for the first dozen). Default size 16; size with the `size` prop or a width/height class. Most were generated from the glyphs the V3 prototype draws (`scripts/prototype-build/gen-icons.py`), so they match it. Brand marks (Google Drive, Notion) are not in this set.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3 p-0 font-ui">
      {all.map(([name, Icon]) => (
        <li key={name} className="flex items-center gap-3 rounded-md border border-line-card bg-surface px-3 py-2 text-ink">
          <Icon size={20} />
          <span className="truncate text-[12px] leading-4 text-ink-secondary">{name.replace(/Icon$/, "")}</span>
        </li>
      ))}
    </ul>
  ),
};
