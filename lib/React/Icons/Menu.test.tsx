import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Menu } from './index';

describe('Menu', () => {
  it('should draw three lines of 18 by 2 at x 3 and y 6, 11, 16', () => {
    const { container } = render(<Menu />);
    const lines = Array.from(container.querySelectorAll('rect'));
    expect(lines.map((line) => line.getAttribute('y'))).toEqual(['6', '11', '16']);
    lines.forEach((line) => {
      expect(line).toHaveAttribute('x', '3');
      expect(line).toHaveAttribute('width', '18');
      expect(line).toHaveAttribute('height', '2');
      expect(line).toHaveAttribute('rx', '1');
    });
  });
  it('should default to a decorative 24px icon in the current color', () => {
    const { container } = render(<Menu />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('fill', 'currentColor');
    expect(svg).toHaveAttribute('width', '24px');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
  it('should accept className and size', () => {
    const { container } = render(<Menu className="test" size="10px" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('test');
    expect(svg).toHaveAttribute('width', '10px');
  });
});
