import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: 'Click me',
  },
};

export const Small: Story = {
  args: {
    children: 'Click me',
    size: 'small',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Click me',
    size: 'full-width',
  },
};

export const Primary: Story = {
  args: {
    children: 'Click me',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click me',
    color: 'secondary',
  },
};

export const Error: Story = {
  args: {
    children: 'Click me',
    action: 'error',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click me',
    color: 'primary',
    disabled: true,
  },
};
