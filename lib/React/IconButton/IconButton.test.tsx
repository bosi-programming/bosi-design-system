import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('should have the Penpot size and radius', () => {
    render(<IconButton action="edit" aria-label="Edit" />);
    expect(screen.getByRole('button', { name: 'Edit' })).toHaveClass('h-11', 'w-11', 'rounded-[10px]');
  });
  it('should use the delete colours in both themes', () => {
    const { container } = render(<IconButton action="delete" aria-label="Delete" />);
    expect(screen.getByRole('button')).toHaveClass('bg-error', 'text-white');
    expect(screen.getByRole('button')).not.toHaveClass('dark:text-black');
    expect(container.querySelector('path')?.getAttribute('d')?.startsWith('m14.74')).toBe(true);
  });
  it('should use the edit colours in both themes', () => {
    const { container } = render(<IconButton action="edit" aria-label="Edit" />);
    expect(screen.getByRole('button')).toHaveClass(
      'bg-primary-on-light',
      'text-white',
      'dark:bg-primary-on-dark',
      'dark:text-black',
    );
    expect(container.querySelector('path')?.getAttribute('d')?.startsWith('m16.862')).toBe(true);
  });
  it('should center a 24px icon', () => {
    const { container } = render(<IconButton action="edit" aria-label="Edit" />);
    expect(screen.getByRole('button')).toHaveClass('flex', 'items-center', 'justify-center');
    expect(container.querySelector('svg')).toHaveAttribute('width', '24px');
  });
  it('should forward button attributes', async () => {
    const onClick = vi.fn();
    render(<IconButton action="edit" aria-label="Edit" className="test" onClick={onClick} />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass('test');
    expect(button).toHaveAttribute('type', 'button');
  });
  it('should forward disabled', () => {
    render(<IconButton action="edit" aria-label="Edit" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
