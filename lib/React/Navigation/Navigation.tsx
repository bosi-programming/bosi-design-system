import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import {
  navigationClasses,
  navigationGroupClasses,
  navItemActiveClasses,
  navItemBaseClasses,
  navItemDefaultClasses,
} from '../../globals';

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

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
  items: ReactNode;
  actions?: ReactNode;
}

export function Navigation({ items, actions, className, ...props }: NavigationProps) {
  return (
    <nav {...props} className={`${navigationClasses} ${className ?? ''}`}>
      <div className={navigationGroupClasses}>{items}</div>
      {actions ? <div className={navigationGroupClasses}>{actions}</div> : null}
    </nav>
  );
}
