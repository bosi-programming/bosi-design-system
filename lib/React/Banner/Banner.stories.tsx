import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta = {
  title: 'Components/Banner',
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof Banner>;

export const ErrorBanner: Story = {
  args: {
    type: 'error',
    children: 'Percentage budgets sum to more than 100%.',
  },
};

export const WarningBanner: Story = {
  args: {
    type: 'warning',
    children: 'Fixed budgets exceed the salary.',
  },
};

export const InfoBanner: Story = {
  args: {
    type: 'info',
    children: 'Your data stays in this browser.',
  },
};
