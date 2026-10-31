import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button';
import { NavItem, Navigation } from './Navigation';

describe('Navigation', () => {
  const renderNav = () =>
    render(
      <Navigation
        aria-label="Main"
        items={
          <>
            <NavItem href="/salary" active>
              Salary
            </NavItem>
            <NavItem href="/budgets">Budgets</NavItem>
          </>
        }
        actions={
          <>
            <Button color="primary" size="small">
              Import
            </Button>
            <Button color="primary" size="small">
              Export
            </Button>
          </>
        }
      />,
    );

  it('should render a nav landmark with items and actions', () => {
    renderNav();
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Salary' }));
    expect(nav).toContainElement(screen.getByRole('button', { name: 'Export' }));
  });
  it('should use the Penpot background and layouts', () => {
    renderNav();
    expect(screen.getByRole('navigation')).toHaveClass(
      'bg-nav-background-on-light',
      'dark:bg-nav-background-on-dark',
      'flex',
      'flex-col',
      'gap-2',
      'px-4',
      'py-3',
      'md:flex-row',
      'md:justify-between',
      'md:px-6',
    );
  });
  it('should keep 8px between items and between actions', () => {
    renderNav();
    expect(screen.getByRole('link', { name: 'Salary' }).parentElement).toHaveClass('flex', 'gap-2');
    expect(screen.getByRole('button', { name: 'Import' }).parentElement).toHaveClass('flex', 'gap-2');
  });
  it('should put items before actions', () => {
    renderNav();
    const nav = screen.getByRole('navigation');
    expect(nav.children[0]).toContainElement(screen.getByRole('link', { name: 'Salary' }));
    expect(nav.children[1]).toContainElement(screen.getByRole('button', { name: 'Import' }));
  });
  it('should accept className', () => {
    render(<Navigation className="test" items={null} />);
    expect(screen.getByRole('navigation')).toHaveClass('test');
  });
});

describe('NavItem', () => {
  it('should use the Penpot base styles', () => {
    render(<NavItem href="/a">Item</NavItem>);
    expect(screen.getByRole('link')).toHaveClass('px-3', 'py-2', 'rounded-lg', 'text-body', 'leading-[18px]');
  });
  it('should use the default colours', () => {
    render(<NavItem href="/a">Item</NavItem>);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-black', 'dark:text-white');
    expect(link).not.toHaveClass('bg-primary-on-light');
    expect(link).not.toHaveAttribute('aria-current');
  });
  it('should use the active colours and aria-current', () => {
    render(
      <NavItem href="/a" active>
        Item
      </NavItem>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-primary-on-light', 'text-white', 'dark:bg-primary-on-dark', 'dark:text-black');
    expect(link).not.toHaveClass('text-black');
    expect(link).toHaveAttribute('aria-current', 'page');
  });
  it('should forward link attributes', async () => {
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <NavItem href="/a" className="test" onClick={onClick}>
        Item
      </NavItem>,
    );
    await userEvent.click(screen.getByRole('link'));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('link')).toHaveClass('test');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/a');
  });
});
