import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toast, ToastContainer } from './Toast';

describe('Toast', () => {
  it('should show the message as an alert', () => {
    render(<Toast message="Import failed" onClose={() => {}} closeLabel="Close" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Import failed');
  });
  it('should use the Penpot styles', () => {
    render(<Toast message="Import failed" onClose={() => {}} closeLabel="Close" />);
    expect(screen.getByRole('alert')).toHaveClass(
      'bg-error',
      'text-white',
      'rounded-xl',
      'pl-4',
      'pr-1',
      'py-1',
      'gap-2',
      'shadow-paper',
      'dark:shadow-paper-dark',
      'dark:border',
      'dark:border-white',
    );
    expect(screen.getByText('Import failed')).toHaveClass('text-body');
  });
  it('should have a 44px close button with a label', () => {
    render(<Toast message="Import failed" onClose={() => {}} closeLabel="Dismiss" />);
    expect(screen.getByRole('button', { name: 'Dismiss' })).toHaveClass('h-11', 'w-11');
  });
  it('should call onClose once from the button', async () => {
    const onClose = vi.fn();
    render(<Toast message="Import failed" onClose={onClose} closeLabel="Close" />);
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('should call onClose on a click outside and still run that click', async () => {
    const onClose = vi.fn();
    const onOutside = vi.fn();
    render(
      <div>
        <Toast message="Import failed" onClose={onClose} closeLabel="Close" />
        <button onClick={onOutside}>Outside</button>
      </div>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Outside' }));
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onOutside).toHaveBeenCalledTimes(1);
  });
  it('should not close on a click inside', async () => {
    const onClose = vi.fn();
    render(<Toast message="Import failed" onClose={onClose} closeLabel="Close" />);
    await userEvent.click(screen.getByText('Import failed'));
    expect(onClose).not.toHaveBeenCalled();
  });
  it('should not close by time', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(<Toast message="Import failed" onClose={onClose} closeLabel="Close" />);
    vi.advanceTimersByTime(60000);
    expect(onClose).not.toHaveBeenCalled();
    vi.useRealTimers();
  });
  it('should keep one listener across renders and call the latest onClose', async () => {
    const addListener = vi.spyOn(document, 'addEventListener');
    const first = vi.fn();
    const latest = vi.fn();
    const { rerender } = render(<Toast message="Import failed" onClose={first} closeLabel="Close" />);
    rerender(<Toast message="Import failed" onClose={latest} closeLabel="Close" />);
    expect(addListener.mock.calls.filter(([type]) => type === 'pointerdown')).toHaveLength(1);
    addListener.mockRestore();
    await userEvent.click(document.body);
    expect(first).not.toHaveBeenCalled();
    expect(latest).toHaveBeenCalledTimes(1);
  });
  it('should stop listening after it unmounts', async () => {
    const onClose = vi.fn();
    const { unmount } = render(<Toast message="Import failed" onClose={onClose} closeLabel="Close" />);
    unmount();
    await userEvent.click(document.body);
    expect(onClose).not.toHaveBeenCalled();
  });
});

describe('Toast stack', () => {
  const renderStack = () => {
    const first = vi.fn();
    const second = vi.fn();
    render(
      <div>
        <ToastContainer>
          <Toast message="First" onClose={first} closeLabel="Close first" />
          <Toast message="Second" onClose={second} closeLabel="Close second" />
        </ToastContainer>
        <p>Outside</p>
      </div>,
    );
    return { first, second };
  };

  it('should close all toasts on a click outside the stack', async () => {
    const { first, second } = renderStack();
    await userEvent.click(screen.getByText('Outside'));
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });
  it('should not close the others on a click inside a toast', async () => {
    const { first, second } = renderStack();
    await userEvent.click(screen.getByText('First'));
    expect(first).not.toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });
  it('should close only one toast with its button', async () => {
    const { first, second } = renderStack();
    await userEvent.click(screen.getByRole('button', { name: 'Close first' }));
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });
  it('should sit at the top on mobile and top right on desktop without blocking the page', () => {
    render(
      <ToastContainer data-testid="stack">
        <span>Item</span>
      </ToastContainer>,
    );
    expect(screen.getByTestId('stack')).toHaveClass(
      'pointer-events-none',
      'fixed',
      'inset-x-4',
      'top-4',
      'flex-col',
      'gap-2',
      'md:left-auto',
      'md:w-[360px]',
    );
  });
  it('should let the toast itself take clicks', () => {
    render(<Toast message="Import failed" onClose={() => {}} closeLabel="Close" />);
    expect(screen.getByRole('alert')).toHaveClass('pointer-events-auto', 'w-full');
  });
});
