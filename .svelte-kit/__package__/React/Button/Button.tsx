import { type ReactNode } from 'react';
import { baseButtonClasses, sizeClasses } from './Button.styles';
import { getColor } from './Button.utils';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'full-width';
  action?: 'error' | 'warning' | 'success' | 'info';
}

export const Button = ({
  children,
  className,
  onClick,
  color = 'default',
  size = 'medium',
  action,
  ...props
}: ButtonProps) => {
  const colorClass = getColor(action, color);
  const sizeClass = sizeClasses[size];
  const buttonClasses = `
    ${baseButtonClasses}${' '}
    ${colorClass}${' '}
    ${sizeClass}${' '}
    ${className ? className : ''}
  `;

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
