import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Toast, ToastContainer } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

function ToastStack() {
  const [messages, setMessages] = useState(['Could not import this JSON file.', 'Could not read the budgets.']);
  return (
    <div style={{ minHeight: 200 }}>
      <Button onClick={() => setMessages(['Could not import this JSON file.'])}>Show toast</Button>
      <ToastContainer>
        {messages.map((message) => (
          <Toast
            key={message}
            message={message}
            closeLabel="Close"
            onClose={() => setMessages((current) => current.filter((item) => item !== message))}
          />
        ))}
      </ToastContainer>
    </div>
  );
}

export const Stack: Story = {
  render: () => <ToastStack />,
};
