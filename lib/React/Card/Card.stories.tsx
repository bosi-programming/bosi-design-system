import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Button } from "../Button";
import { Typography } from "../Typography";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    title: "Card",
    content: <Typography>Content</Typography>,
    actions: <Button action="success">Click me</Button>,
  },
};
