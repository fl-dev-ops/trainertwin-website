"use client";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pagination } from "./Pagination";

const meta = {
  title: "Data/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Previous, \"Page N of M\", Next. No numbered buttons: at ten pages they add six identical-looking targets, and the count says the same thing in one line.",
      },
    },
  },
  args: { page: 1, total: 10 },
  render: function Render(args) {
    const [p, setP] = useState(args.page);
    return <Pagination {...args} page={p} onPageChange={setP} />;
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Middle: Story = { args: { page: 5 } };
export const LastPage: Story = { args: { page: 10 } };
export const SinglePage: Story = { args: { page: 1, total: 1 } };
