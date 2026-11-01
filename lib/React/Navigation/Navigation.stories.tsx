import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { NavItem, Navigation } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

const args = {
  'aria-label': 'Main',
  title: 'Salary',
  leftItems: (
    <>
      <NavItem href="#salary" active>
        Salary
      </NavItem>
      <NavItem href="#budgets">Budgets</NavItem>
      <NavItem href="#result">Result</NavItem>
    </>
  ),
  rightItems: (
    <>
      <Button color="primary" size="small">
        Import
      </Button>
      <Button color="primary" size="small">
        Export
      </Button>
    </>
  ),
};

const mobileViewport = {
  viewport: {
    viewports: {
      mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
    },
    defaultViewport: 'mobile',
  },
};

export const DefaultNavigation: Story = { args };

export const MobileLight: Story = {
  args,
  parameters: mobileViewport,
  globals: { theme: 'light' },
};

export const MobileDark: Story = {
  args,
  parameters: mobileViewport,
  globals: { theme: 'dark' },
};
