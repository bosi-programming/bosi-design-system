import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const DefaultTypography: Story = {
  args: {
    color: "primary",
    size: "body",
    children: "Text",
  },
};
