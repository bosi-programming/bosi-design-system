import { render, screen, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
import Typography from './Typography.svelte';

afterEach(() => {
  cleanup();
});

describe('Typography as and size options', () => {
  it('should render as h1 when specified', () => {
    render(Typography, {
      props: {
        size: 'body',
        as: 'h1',
        children: 'Test',
      },
    });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render a paragraph for body size', () => {
    render(Typography, {
      props: {
        size: 'body',
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  [1, 2, 3, 4].forEach((num) =>
    it(`should render a h${num} for size h${num}`, () => {
      render(Typography, {
        props: {
          size: `h${num}` as 'h1' | 'h2' | 'h3' | 'h4',
          children: 'Test',
        },
      });
      expect(screen.getByRole('heading', { level: num })).toBeInTheDocument();
    }),
  );

  it('should render a details element', () => {
    render(Typography, {
      props: {
        size: 'details',
        children: 'Test',
      },
    });
    expect(screen.getByText('Test').tagName).toBe('DETAILS');
  });

  it('should render a paragraph when as="p"', () => {
    render(Typography, {
      props: {
        as: 'p',
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  [1, 2, 3, 4, 5, 6].forEach((num) =>
    it(`should render a h${num} when as="h${num}"`, () => {
      render(Typography, {
        props: {
          as: `h${num}` as 'h1',
          children: 'Test',
        },
      });
      expect(screen.getByRole('heading', { level: num })).toBeInTheDocument();
    }),
  );

  it('should render a span', () => {
    render(Typography, {
      props: {
        as: 'span',
        children: 'Test',
      },
    });
    expect(screen.getByText('Test').tagName).toBe('SPAN');
  });

  it('should render a details when as="details"', () => {
    render(Typography, {
      props: {
        as: 'details',
        children: 'Test',
      },
    });
    expect(screen.getByText('Test').tagName).toBe('DETAILS');
  });

  it('should render a paragraph if !as and !size', () => {
    render(Typography, {
      props: {
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  it('should render a link when as="a"', () => {
    render(Typography, {
      props: {
        as: 'a',
        href: 'https://example.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        children: 'Test Link',
      },
    });
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('Typography color options', () => {
  it('should have default color classes', () => {
    render(Typography, {
      props: {
        color: 'default',
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toHaveClass('light:text-black dark:text-gray-93');
  });

  it('should have primary color classes', () => {
    render(Typography, {
      props: {
        color: 'primary',
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toHaveClass('text-primary-on-light dark:text-primary-on-dark');
  });

  it('should have secondary color classes', () => {
    render(Typography, {
      props: {
        color: 'secondary',
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toHaveClass('text-secondary-on-light dark:text-secondary-on-dark');
  });
});

describe('Typography size classes', () => {
  it('should have default classes', () => {
    render(Typography, {
      props: {
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toHaveClass('text-body mb-4');
  });

  it('should have h1 classes', () => {
    render(Typography, {
      props: {
        size: 'h1',
        children: 'Test',
      },
    });
    expect(screen.getByRole('heading')).toHaveClass('text-h1 font-bold');
  });

  it('should have h2 classes', () => {
    render(Typography, {
      props: {
        size: 'h2',
        children: 'Test',
      },
    });
    expect(screen.getByRole('heading')).toHaveClass('text-h2 font-bold');
  });

  it('should have h3 classes', () => {
    render(Typography, {
      props: {
        size: 'h3',
        children: 'Test',
      },
    });
    expect(screen.getByRole('heading')).toHaveClass('text-h3 font-bold');
  });

  it('should have h4 classes', () => {
    render(Typography, {
      props: {
        size: 'h4',
        children: 'Test',
      },
    });
    expect(screen.getByRole('heading')).toHaveClass('text-h4 font-bold');
  });

  it('should have details classes', () => {
    render(Typography, {
      props: {
        size: 'details',
        children: 'Test',
      },
    });
    expect(screen.getByText('Test')).toHaveClass('text-details');
  });
});

describe('Typography extra properties', () => {
  it('should accept a className', () => {
    render(Typography, {
      props: {
        className: 'test',
        children: 'Test',
      },
    });
    expect(screen.getByRole('paragraph')).toHaveClass('test');
  });
});

describe('Typography children types', () => {
  it('should render string children', () => {
    render(Typography, {
      props: {
        children: 'String content',
      },
    });
    expect(screen.getByText('String content')).toBeInTheDocument();
  });

  it('should render snippet children', () => {
    const snippetMock = () => {};
    render(Typography, {
      props: {
        children: snippetMock,
      },
    });
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
});
