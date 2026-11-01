import {
  useEffect,
  useId,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import {
  navigationBarClasses,
  navigationClasses,
  navigationDividerClasses,
  navigationLeftItemsClasses,
  navigationMenuButtonClasses,
  navigationOverlayClasses,
  navigationPanelClasses,
  navigationPanelClosedClasses,
  navigationPanelOpenClasses,
  navigationRightItemsClasses,
  navigationTitleClasses,
  navItemActiveClasses,
  navItemBaseClasses,
  navItemDefaultClasses,
} from '../../globals';
import { Close, Menu } from '../Icons';

export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export function NavItem({ active, className, children, ...props }: NavItemProps) {
  return (
    <a
      {...props}
      aria-current={active ? 'page' : undefined}
      className={`${navItemBaseClasses} ${active ? navItemActiveClasses : navItemDefaultClasses} ${className ?? ''}`}
    >
      {children}
    </a>
  );
}

export interface NavigationProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  leftItems: ReactNode;
  rightItems?: ReactNode;
  title?: ReactNode;
}

export function Navigation({ leftItems, rightItems, title, className, ...props }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const menuButton = menuButtonRef.current;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      menuButton?.focus();
    };
  }, [open]);

  const closeOnItemClick = (event: MouseEvent<HTMLDivElement>) => {
    const item = (event.target as Element).closest('a, button');
    if (item && !item.matches(':disabled')) setOpen(false);
  };

  return (
    <nav {...props} className={`${navigationClasses} ${className ?? ''}`}>
      <div className={`${navigationBarClasses} ${open ? 'invisible' : ''}`}>
        <span className={navigationTitleClasses}>{title}</span>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls={panelId}
          className={navigationMenuButtonClasses}
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>
      {open ? (
        <div data-testid="navigation-overlay" className={navigationOverlayClasses} onClick={() => setOpen(false)} />
      ) : null}
      <div
        id={panelId}
        className={`${navigationPanelClasses} ${open ? navigationPanelOpenClasses : navigationPanelClosedClasses}`}
      >
        <div className={navigationBarClasses}>
          <span className={navigationTitleClasses}>{title}</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            className={navigationMenuButtonClasses}
            onClick={() => setOpen(false)}
          >
            <Close />
          </button>
        </div>
        <div className={navigationLeftItemsClasses} onClick={closeOnItemClick}>
          {leftItems}
        </div>
        {rightItems ? (
          <>
            <hr className={navigationDividerClasses} />
            <div className={navigationRightItemsClasses} onClick={closeOnItemClick}>
              {rightItems}
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}
