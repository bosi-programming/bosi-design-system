import type { Meta, StoryObj } from "@storybook/react";
import { Paper } from "./Paper";
import { Typography } from "../Typography";

const meta = {
  title: "Components/Paper",
  component: Paper,
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof Paper>;

export const DefaultPaper: Story = {
  args: {
    children: <Typography>Content</Typography>,
  },
};
