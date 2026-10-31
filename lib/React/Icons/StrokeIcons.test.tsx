import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChevronDown, Close, Pencil, Trash } from './index';

describe.each([
  ['Trash', Trash, 'm14.74 9-.346 9'],
  ['Pencil', Pencil, 'm16.862 4.487 1.687-1.688'],
  ['ChevronDown', ChevronDown, 'm19.5 8.25-7.5 7.5-7.5-7.5'],
  ['Close', Close, 'M6 18 18 6M6 6l12 12'],
])('%s', (_name, Icon, pathStart) => {
  it('should draw the Penpot path', () => {
    const { container } = render(<Icon />);
    expect(container.querySelector('path')?.getAttribute('d')?.startsWith(pathStart)).toBe(true);
  });
  it('should follow the stroke icon format', () => {
    const { container } = render(<Icon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('stroke', 'currentColor');
    expect(svg).toHaveAttribute('stroke-width', '1.5');
    expect(svg).toHaveAttribute('stroke-linecap', 'round');
    expect(svg).toHaveAttribute('width', '24px');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
  it('should accept className and size', () => {
    const { container } = render(<Icon className="test" size="10px" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('test');
    expect(svg).toHaveAttribute('width', '10px');
  });
});
