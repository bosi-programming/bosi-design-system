import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Typography, type TSize } from './Typography';

describe("Typography as and size options", () => {
  it("should render as", () => {
    render(
      <Typography size="body" as="h1">
        Test
      </Typography>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
  it("should render a paragraphy", () => {
    render(<Typography size="body">Test</Typography>);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
  [1, 2, 3, 4].forEach((num) =>
    it(`should render a h${num}`, () => {
      render(<Typography size={`h${num}` as TSize}>Test</Typography>);
      expect(screen.getByRole('heading', { level: num })).toBeInTheDocument();
    }),
  );
  it('should render a details', () => {
    render(<Typography size="details">Test</Typography>);
    expect(screen.getByText("Test").tagName).toBe("DETAILS");
  });
  it("should render a paragraphy", () => {
    render(<Typography as="p">Test</Typography>);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
  [1, 2, 3, 4, 5, 6].forEach((num) =>
    it(`should render a h${num}`, () => {
      render(<Typography as={`h${num}` as 'h1'}>Test</Typography>);
      expect(screen.getByRole('heading', { level: num })).toBeInTheDocument();
    }),
  );
  it('should render a span', () => {
    render(<Typography as="span">Test</Typography>);
    expect(screen.getByText("Test").tagName).toBe("SPAN");
  });
  it("should render a details", () => {
    render(<Typography as="details">Test</Typography>);
    expect(screen.getByText("Test").tagName).toBe("DETAILS");
  });
  it("should render a paragraphy if !as and !size", () => {
    render(<Typography>Test</Typography>);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});

describe("Typography color options", () => {
  it("should have default color classes", () => {
    render(<Typography color="default">Test</Typography>);
    expect(screen.getByRole("paragraph")).toHaveClass("light:text-black dark:text-gray-93");
  });
  it("should have primary color classes", () => {
    render(<Typography color="primary">Test</Typography>);
    expect(screen.getByRole("paragraph")).toHaveClass("text-primary-on-light dark:text-primary-on-dark");
  });
  it("should have secondary color classes", () => {
    render(<Typography color="secondary">Test</Typography>);
    expect(screen.getByRole("paragraph")).toHaveClass("text-secondary-on-light dark:text-secondary-on-dark");
  });
});

describe("Typography size classes", () => {
  it("should have default classes", () => {
    render(<Typography>Test</Typography>);
    expect(screen.getByRole("paragraph")).toHaveClass("text-body mb-4");
  });
  it("should have h1 classes", () => {
    render(<Typography size="h1">Test</Typography>);
    expect(screen.getByRole("heading")).toHaveClass("text-h1 font-bold");
  });
  it("should have h2 classes", () => {
    render(<Typography size="h2">Test</Typography>);
    expect(screen.getByRole("heading")).toHaveClass("text-h2 font-bold");
  });
  it("should have h3 classes", () => {
    render(<Typography size="h3">Test</Typography>);
    expect(screen.getByRole("heading")).toHaveClass("text-h3 font-bold");
  });
  it("should have h4 classes", () => {
    render(<Typography size="h4">Test</Typography>);
    expect(screen.getByRole("heading")).toHaveClass("text-h4 font-bold");
  });
  it("should have details classes", () => {
    render(<Typography size="details">Test</Typography>);
    expect(screen.getByText("Test")).toHaveClass("text-details");
  });
});

describe("Typography extra properties", () => {
  it("should accept a className", () => {
    render(<Typography className="test">Test</Typography>);
    expect(screen.getByRole("paragraph")).toHaveClass("test");
  });
});
