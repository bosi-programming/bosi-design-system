import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button';
import { Modal } from './Modal';

const actions = (
  <>
    <Button action="error">Cancel</Button>
    <Button color="primary">Confirm</Button>
  </>
);

function Harness({ onClose }: { onClose?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal
        open={open}
        title="Title"
        actions={actions}
        onClose={() => {
          onClose?.();
          setOpen(false);
        }}
      >
        Content
      </Modal>
    </div>
  );
}

describe('Modal rendering', () => {
  it('should render nothing while closed', () => {
    render(
      <Modal open={false} title="Title" onClose={() => {}}>
        Content
      </Modal>,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('should show title, content and actions', () => {
    render(
      <Modal open title="Title" actions={actions} onClose={() => {}}>
        Content
      </Modal>,
    );
    expect(screen.getByRole('heading', { name: 'Title' })).toHaveClass('text-h3', 'text-primary-on-light');
    expect(screen.getByText('Content')).toHaveClass('text-body');
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });
  it('should be a labelled modal dialog', () => {
    render(
      <Modal open title="Title" onClose={() => {}}>
        Content
      </Modal>,
    );
    const dialog = screen.getByRole('dialog', { name: 'Title' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });
});

describe('Modal design', () => {
  const renderOpen = () =>
    render(
      <Modal open title="Title" actions={actions} onClose={() => {}}>
        Content
      </Modal>,
    );

  it('should use the Penpot overlay', () => {
    renderOpen();
    expect(screen.getByRole('dialog').parentElement).toHaveClass(
      'fixed',
      'inset-0',
      'bg-overlay',
      'flex',
      'items-center',
      'justify-center',
      'px-4',
    );
  });
  it('should use the Penpot dialog styles', () => {
    renderOpen();
    expect(screen.getByRole('dialog')).toHaveClass(
      'bg-background-on-light',
      'dark:bg-background-on-dark',
      'border',
      'border-black',
      'dark:border-white',
      'rounded-xl',
      'shadow-paper',
      'dark:shadow-paper-dark',
      'gap-4',
      'w-full',
      'md:w-[480px]',
      'px-5',
      'py-6',
      'md:p-6',
    );
  });
  it('should stack Confirm above Cancel on mobile and keep the order on desktop', () => {
    renderOpen();
    const row = screen.getByRole('button', { name: 'Cancel' }).parentElement;
    expect(row).toHaveClass('flex', 'flex-col-reverse', 'gap-2', 'md:flex-row', 'md:justify-end');
    const buttons = row?.querySelectorAll('button');
    expect(buttons?.[0]).toHaveTextContent('Cancel');
    expect(buttons?.[1]).toHaveTextContent('Confirm');
  });
  it('should not render the actions row without actions', () => {
    render(
      <Modal open title="Title" onClose={() => {}}>
        Content
      </Modal>,
    );
    expect(screen.getByRole('dialog').children).toHaveLength(2);
  });
});

describe('Modal closing', () => {
  it('should call onClose with Escape', async () => {
    const onClose = vi.fn();
    render(
      <Modal open title="Title" onClose={onClose}>
        Content
      </Modal>,
    );
    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('should call onClose on a click on the overlay', async () => {
    const onClose = vi.fn();
    render(
      <Modal open title="Title" onClose={onClose}>
        Content
      </Modal>,
    );
    await userEvent.click(screen.getByRole('dialog').parentElement!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('should not call onClose on a click inside the dialog', async () => {
    const onClose = vi.fn();
    render(
      <Modal open title="Title" onClose={onClose}>
        Content
      </Modal>,
    );
    await userEvent.click(screen.getByText('Content'));
    await userEvent.click(screen.getByRole('dialog'));
    expect(onClose).not.toHaveBeenCalled();
  });
  it('should ignore Escape while closed', async () => {
    const onClose = vi.fn();
    render(
      <Modal open={false} title="Title" onClose={onClose}>
        Content
      </Modal>,
    );
    await userEvent.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });
});

describe('Modal focus', () => {
  it('should move focus to the first control when it opens', async () => {
    render(<Harness />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus();
  });
  it('should focus the dialog when it has no controls', () => {
    render(
      <Modal open title="Title" onClose={() => {}}>
        Content
      </Modal>,
    );
    expect(screen.getByRole('dialog')).toHaveFocus();
  });
  it('should keep Tab inside the dialog in both directions', async () => {
    render(<Harness />);
    await userEvent.click(screen.getByRole('button', { name: 'Open' }));
    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Confirm' })).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus();
    await userEvent.tab({ shift: true });
    expect(screen.getByRole('button', { name: 'Confirm' })).toHaveFocus();
  });
  it('should keep Tab inside when the dialog itself has focus', async () => {
    render(
      <div>
        <button>Behind</button>
        <Modal open title="Title" onClose={() => {}}>
          Content
        </Modal>
      </div>,
    );
    await userEvent.tab();
    expect(screen.getByRole('dialog')).toHaveFocus();
  });
  it('should stop the overlay mousedown from taking focus', () => {
    render(
      <Modal open title="Title" onClose={() => {}}>
        Content
      </Modal>,
    );
    const notPrevented = fireEvent.mouseDown(screen.getByRole('dialog').parentElement!);
    expect(notPrevented).toBe(false);
  });
  it('should return focus to the opener when it closes', async () => {
    render(<Harness />);
    const opener = screen.getByRole('button', { name: 'Open' });
    await userEvent.click(opener);
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(opener).toHaveFocus();
  });
});
