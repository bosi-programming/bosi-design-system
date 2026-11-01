import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../Button';
import { NavItem, Navigation } from './Navigation';

describe('Navigation', () => {
  const renderNav = (exportDisabled = false) =>
    render(
      <Navigation
        aria-label="Main"
        title="Salary"
        leftItems={
          <>
            <NavItem href="#salary" active>
              Salary
            </NavItem>
            <NavItem href="#budgets">Budgets</NavItem>
          </>
        }
        rightItems={
          <>
            <Button color="primary" size="small">
              Import
            </Button>
            <Button color="primary" size="small" disabled={exportDisabled}>
              Export
            </Button>
          </>
        }
      />,
    );
  const menuButton = () => screen.getByRole('button', { name: 'Open menu' });
  const closeButton = () => screen.getByRole('button', { name: 'Close menu' });
  const panel = () => document.getElementById(menuButton().getAttribute('aria-controls') ?? '');

  it('should render a nav landmark with left and right items', () => {
    renderNav();
    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Salary' }));
    expect(nav).toContainElement(screen.getByRole('button', { name: 'Export' }));
  });
  it('should use the Penpot background', () => {
    renderNav();
    expect(screen.getByRole('navigation')).toHaveClass('bg-nav-background-on-light', 'dark:bg-nav-background-on-dark');
  });
  it('should keep the desktop layout from md up', () => {
    renderNav();
    expect(panel()).toHaveClass(
      'md:static',
      'md:flex',
      'md:flex-row',
      'md:items-center',
      'md:justify-between',
      'md:gap-2',
      'md:px-6',
      'md:py-3',
      'md:shadow-none',
    );
  });
  it('should keep 8px between items on desktop', () => {
    renderNav();
    expect(screen.getByRole('link', { name: 'Salary' }).parentElement).toHaveClass('md:flex-row', 'md:gap-2');
    expect(screen.getByRole('button', { name: 'Import' }).parentElement).toHaveClass('gap-2');
  });
  it('should accept className', () => {
    render(<Navigation className="test" leftItems={null} />);
    expect(screen.getByRole('navigation')).toHaveClass('test');
  });
  it('should not pass title on to the nav element', () => {
    renderNav();
    expect(screen.getByRole('navigation')).not.toHaveAttribute('title');
  });

  describe('mobile bar', () => {
    it('should be 56px high with the Penpot padding, and hidden from md up', () => {
      renderNav();
      expect(menuButton().parentElement).toHaveClass('flex', 'h-14', 'justify-between', 'pl-4', 'pr-1.5', 'md:hidden');
    });
    it('should show the title in Roboto 18 weight 500', () => {
      renderNav();
      const title = within(menuButton().parentElement as HTMLElement).getByText('Salary');
      expect(title).toHaveClass('text-[18px]', 'font-medium', 'text-black', 'dark:text-white');
    });
    it('should use a 44px menu button with radius 8 and no fill', () => {
      renderNav();
      expect(menuButton()).toHaveClass('h-11', 'w-11', 'rounded-lg', 'text-black', 'dark:text-white');
    });
    it('should draw the menu icon in the menu button', () => {
      renderNav();
      expect(menuButton().querySelectorAll('rect')).toHaveLength(3);
    });
  });

  describe('panel', () => {
    it('should be hidden below md while closed', () => {
      renderNav();
      expect(panel()).toHaveClass('hidden');
      expect(panel()).not.toHaveClass('flex');
      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
    });
    it('should open over the page with the Penpot panel styles', async () => {
      renderNav();
      await userEvent.click(menuButton());
      expect(panel()).toHaveClass(
        'flex',
        'absolute',
        'inset-x-0',
        'top-0',
        'flex-col',
        'gap-2',
        'pb-4',
        'bg-nav-background-on-light',
        'dark:bg-nav-background-on-dark',
        'shadow-[0_4px_12px_rgb(0_0_0/0.2)]',
      );
      expect(panel()).not.toHaveClass('hidden');
      expect(menuButton()).toHaveAttribute('aria-expanded', 'true');
    });
    it('should keep the bar in place but out of reach while open', async () => {
      renderNav();
      const bar = menuButton().parentElement;
      await userEvent.click(menuButton());
      expect(bar).toHaveClass('invisible');
    });
    it('should show a header with the same title and a close button', async () => {
      renderNav();
      await userEvent.click(menuButton());
      const header = closeButton().parentElement as HTMLElement;
      expect(panel()).toContainElement(header);
      expect(header).toHaveClass('flex', 'h-14', 'pl-4', 'pr-1.5', 'md:hidden');
      expect(within(header).getByText('Salary')).toHaveClass('text-[18px]', 'font-medium');
      expect(closeButton()).toHaveClass('h-11', 'w-11', 'rounded-lg');
    });
    it('should order header, left items, divider, right items', () => {
      renderNav();
      const children = Array.from(panel()?.children ?? []);
      expect(children[0]).toContainElement(closeButton());
      expect(children[1]).toContainElement(screen.getByRole('link', { name: 'Budgets' }));
      expect(children[2]).toBe(screen.getByRole('separator'));
      expect(children[3]).toContainElement(screen.getByRole('button', { name: 'Import' }));
    });
    it('should lay out left items as a 4px column with 16px sides', () => {
      renderNav();
      expect(screen.getByRole('link', { name: 'Salary' }).parentElement).toHaveClass('flex-col', 'gap-1', 'px-4');
    });
    it('should lay out right items as an equal, 44px row', () => {
      renderNav();
      expect(screen.getByRole('button', { name: 'Import' }).parentElement).toHaveClass(
        'flex',
        'gap-2',
        'px-4',
        'pt-2',
        'max-md:[&>*]:h-11',
        'max-md:[&>*]:flex-1',
      );
    });
    it('should render a 1px gray-68 divider on mobile only', () => {
      renderNav();
      expect(screen.getByRole('separator')).toHaveClass('mx-4', 'h-px', 'border-0', 'bg-gray-68', 'md:hidden');
    });
    it('should render no divider without right items', () => {
      render(<Navigation leftItems={<NavItem href="#a">A</NavItem>} />);
      expect(screen.queryByRole('separator')).not.toBeInTheDocument();
    });
  });

  describe('closing', () => {
    const expectClosed = () => {
      expect(panel()).toHaveClass('hidden');
      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton()).toHaveFocus();
    };

    it('should move focus into the panel on open', async () => {
      renderNav();
      await userEvent.click(menuButton());
      expect(closeButton()).toHaveFocus();
    });
    it('should not take focus on mount', () => {
      renderNav();
      expect(document.body).toHaveFocus();
    });
    it('should close from the close button', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.click(closeButton());
      expectClosed();
    });
    it('should close from a click outside the panel', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.click(screen.getByTestId('navigation-overlay'));
      expectClosed();
      expect(screen.queryByTestId('navigation-overlay')).not.toBeInTheDocument();
    });
    it('should show the overlay on mobile only', async () => {
      renderNav();
      await userEvent.click(menuButton());
      expect(screen.getByTestId('navigation-overlay')).toHaveClass('fixed', 'inset-0', 'bg-overlay', 'md:hidden');
    });
    it('should close from Esc', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.keyboard('{Escape}');
      expectClosed();
    });
    it('should close from a click on a left item', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.click(screen.getByRole('link', { name: 'Budgets' }));
      expectClosed();
    });
    it('should close from a click on a right item', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.click(screen.getByRole('button', { name: 'Import' }));
      expectClosed();
    });
    it('should stay open when clicking between items', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.click(screen.getByRole('link', { name: 'Budgets' }).parentElement as HTMLElement);
      expect(panel()).not.toHaveClass('hidden');
    });
    it('should keep a disabled right item visible and stay open on click', async () => {
      renderNav(true);
      await userEvent.click(menuButton());
      const disabled = screen.getByRole('button', { name: 'Export' });
      expect(disabled).toBeDisabled();
      await userEvent.click(disabled);
      expect(panel()).not.toHaveClass('hidden');
    });
    it('should stop listening for Esc once closed', async () => {
      renderNav();
      await userEvent.click(menuButton());
      await userEvent.click(closeButton());
      const focus = vi.spyOn(menuButton(), 'focus');
      await userEvent.keyboard('{Escape}');
      expect(focus).not.toHaveBeenCalled();
    });
  });
});

describe('NavItem', () => {
  it('should use the Penpot base styles', () => {
    render(<NavItem href="/a">Item</NavItem>);
    expect(screen.getByRole('link')).toHaveClass('px-3', 'py-2', 'rounded-lg', 'text-body', 'leading-[18px]');
  });
  it('should be full width and 44px high below md', () => {
    render(<NavItem href="/a">Item</NavItem>);
    expect(screen.getByRole('link')).toHaveClass('max-md:block', 'max-md:w-full', 'max-md:py-[13px]');
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
