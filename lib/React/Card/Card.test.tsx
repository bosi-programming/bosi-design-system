import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('should show title, content and actions', () => {
    render(<Card title="Title" content="Content" actions="Actions" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });
  it('should stretch the actions row and keep 8px between actions', () => {
    render(<Card title="Title" content="Content" actions={<span>Action</span>} />);
    expect(screen.getByText('Action').parentElement).toHaveClass('flex', 'w-full', 'justify-center', 'gap-2');
  });
  it('should get its background from Paper', () => {
    render(<Card title="Title" content="Content" />);
    expect(screen.getByTestId('card')).toHaveClass('bg-background-on-light', 'dark:bg-background-on-dark');
  });
  it('should accept className', () => {
    render(<Card title="Title" content="Content" className="test" />);
    expect(screen.getByTestId('card')).toHaveClass('test');
  });
});
