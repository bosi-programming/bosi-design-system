import type { Meta, StoryObj } from '@storybook/react';
import { Selector, type SelectorProps } from './Selector';
import { useState } from 'react';

const meta = {
  title: 'Components/Selector',
  component: Selector,
} satisfies Meta<typeof Selector>;
export default meta;

export function SelectorStory({ error, disabled, onAddNew, addNewLabel }: Partial<SelectorProps>) {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: 240, minHeight: 280 }}>
      <Selector
        name="test-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        label="Label"
        placeholder="Placeholder"
        error={error}
        disabled={disabled}
        onAddNew={addNewLabel ? onAddNew : undefined}
        addNewLabel={addNewLabel}
        options={[
          { id: 'one', label: 'Option 1' },
          { id: 'two', label: 'Option 2' },
          { id: 'three', label: 'Option 3' },
        ]}
      />
    </div>
  );
}

type Story = StoryObj<typeof Selector>;

export const DefaultSelector: Story = {
  render: SelectorStory,
};

export const AddNew: Story = {
  render: SelectorStory,
  args: {
    onAddNew: () => {},
    addNewLabel: '+ Add new category',
  },
};

export const ErrorSelector: Story = {
  render: SelectorStory,
  args: {
    error: 'Error message',
  },
};

export const DisabledSelector: Story = {
  render: SelectorStory,
  args: {
    disabled: true,
  },
};
