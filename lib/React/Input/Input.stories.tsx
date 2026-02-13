import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { useState } from 'react';

const meta = {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>;
export default meta;

export function InputStory({ error }: { error?: string }) {
  const [value, setValue] = useState('');
  const handleChange = (val: string) => {
    console.log(val);
    setValue(val);
  };
  return (
    <Input
      name="test-input"
      value={value}
      setValue={handleChange}
      label="Label"
      placeholder="placeholder"
      error={error}
    />
  );
}

type Story = StoryObj<typeof Input>;

export const ErrorInput: Story = {
  render: InputStory,
  args: {
    error: 'Error message',
  },
};
