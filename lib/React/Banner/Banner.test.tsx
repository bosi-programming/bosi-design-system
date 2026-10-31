import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Banner } from './Banner';

describe('Banner', () => {
  it.each([
    ['error', 'bg-error'],
    ['warning', 'bg-warning'],
    ['info', 'bg-info'],
  ] as const)('should use the %s background', (type, background) => {
    render(<Banner type={type}>Message</Banner>);
    expect(screen.getByText('Message')).toHaveClass(background);
  });
  it('should use the Penpot layout', () => {
    render(<Banner type="info">Message</Banner>);
    expect(screen.getByText('Message')).toHaveClass(
      'w-full',
      'rounded-xl',
      'px-4',
      'py-3',
      'text-body',
      'text-white',
      'dark:border',
      'dark:border-white',
    );
  });
  it('should announce errors as alerts', () => {
    render(<Banner type="error">Message</Banner>);
    expect(screen.getByRole('alert')).toHaveTextContent('Message');
  });
  it.each(['warning', 'info'] as const)('should announce %s as a status', (type) => {
    render(<Banner type={type}>Message</Banner>);
    expect(screen.getByRole('status')).toHaveTextContent('Message');
  });
  it('should accept className', () => {
    render(
      <Banner type="info" className="test">
        Message
      </Banner>,
    );
    expect(screen.getByText('Message')).toHaveClass('test');
  });
});
