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
