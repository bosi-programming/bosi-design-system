import type { Meta, StoryObj } from '@storybook/react';
import { Selector } from './Selector';
import { useState } from 'react';

const meta = {
  title: 'Components/Selector',
  component: Selector,
} satisfies Meta<typeof Selector>;
export default meta;

export function SelectorStory({ error }: { error?: string }) {
  const [value, setValue] = useState('');
  const handleChange = (val: string) => {
    console.log(val);
    setValue(val);
  };
  return (
    <Selector
      name="test-input"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      labelChildren="Label"
      options={[
        {
          id: 'default',
          label: 'test',
        },
        {
          id: 'two',
          label: 'Two',
        },
      ]}
    />
  );
}

type Story = StoryObj<typeof Selector>;

// export const ErrorSelector: Story = {
//   render: SelectorStory,
//   args: {
//     error: 'Error message',
//   },
// };
