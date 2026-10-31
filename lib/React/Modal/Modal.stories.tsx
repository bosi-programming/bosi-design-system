import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../Button';
import { Modal } from './Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

function ModalStory() {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ minHeight: 320 }}>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        title="Modal title"
        onClose={() => setOpen(false)}
        actions={
          <>
            <Button action="error" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        Modal content. Explain the action and what happens next.
      </Modal>
    </div>
  );
}

export const DefaultModal: Story = {
  render: () => <ModalStory />,
};
