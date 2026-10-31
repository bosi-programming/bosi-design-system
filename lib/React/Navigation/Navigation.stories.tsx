import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { NavItem, Navigation } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const DefaultNavigation: Story = {
  args: {
    'aria-label': 'Main',
    items: (
      <>
        <NavItem href="#salary" active>
          Salary
        </NavItem>
        <NavItem href="#budgets">Budgets</NavItem>
        <NavItem href="#result">Result</NavItem>
      </>
    ),
    actions: (
      <>
        <Button color="primary" size="small">
          Import
        </Button>
        <Button color="primary" size="small">
          Export
        </Button>
      </>
    ),
  },
};
