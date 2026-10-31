import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Delete: Story = {
  args: {
    action: 'delete',
    'aria-label': 'Delete',
  },
};

export const Edit: Story = {
  args: {
    action: 'edit',
    'aria-label': 'Edit',
  },
};
