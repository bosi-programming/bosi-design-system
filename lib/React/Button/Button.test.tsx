import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';
import { actionClasses, colorsClasses, sizeClasses } from '../../globals/Button';

describe('Button size options', () => {
  it('should have small classes', () => {
    render(<Button size="small">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(sizeClasses.small);
  });

  it('should have medium classes', () => {
    render(<Button size="medium">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(sizeClasses.medium);
  });

  it('should have full-width classes', () => {
    render(<Button size="full-width">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(sizeClasses['full-width']);
  });
});

describe('Button Penpot dimensions', () => {
  it.each([
    ['small', 'h-8.5', 'px-4'],
    ['medium', 'h-10.5', 'px-8'],
    ['full-width', 'h-12.5', 'px-8'],
  ] as const)('should give %s the Penpot height and padding', (size, height, padding) => {
    render(<Button size={size}>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(height, padding);
    expect(button.className).not.toMatch(/\bpy-/);
  });

  it('should have a 10px radius', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('rounded-[10px]');
    expect(screen.getByRole('button')).not.toHaveClass('rounded-lg');
  });
});

describe('Button secondary contrast', () => {
  it('should use gray-15 text on the light theme', () => {
    render(<Button color="secondary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-gray-15');
    expect(screen.getByRole('button')).not.toHaveClass('text-white');
  });
});

describe('Button disabled state', () => {
  it('should forward disabled to the element', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it.each([{ color: 'default' }, { color: 'primary' }, { color: 'secondary' }, { action: 'error' }] as const)(
    'should use the Penpot disabled colours for %o',
    (props) => {
      render(
        <Button disabled {...props}>
          Test
        </Button>,
      );
      expect(screen.getByRole('button')).toHaveClass(
        'disabled:bg-gray-68',
        'disabled:text-gray-15',
        'dark:disabled:bg-nav-background-on-dark',
        'dark:disabled:text-gray-68',
      );
    },
  );

  it('should only apply the hover effects when enabled', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('enabled:hover:scale-110', 'enabled:hover:brightness-75');
    expect(button).not.toHaveClass('hover:scale-110');
    expect(button).not.toHaveClass('hover:brightness-75');
  });
});

describe('Button color options', () => {
  it('should have default color classes', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(colorsClasses.default);
  });
  it('should have primary color classes', () => {
    render(<Button color="primary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(colorsClasses.primary);
  });
  it('should have secondary color classes', () => {
    render(<Button color="secondary">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(colorsClasses.secondary);
  });
});

describe('Button action options', () => {
  it('should have error classes', () => {
    render(<Button action="error">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(actionClasses.error);
  });
  it('should have info classes', () => {
    render(<Button action="info">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(actionClasses.info);
  });
  it('should have warning classes', () => {
    render(<Button action="warning">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(actionClasses.warning);
  });
  it('should have success classes', () => {
    render(<Button action="success">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass(actionClasses.success);
  });
  it('should have use action classes instead of colors', () => {
    render(
      <Button action="success" color="primary">
        Test
      </Button>,
    );
    expect(screen.getByRole('button')).toHaveClass(actionClasses.success);
    expect(screen.getByRole('button')).not.toHaveClass(colorsClasses.primary);
  });
});

describe('Button extra properties', () => {
  it('should have error classes', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Test</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should accept a className', () => {
    render(<Button className="test">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('test');
  });
});
