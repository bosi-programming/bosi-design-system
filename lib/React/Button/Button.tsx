import { type ReactNode } from 'react';
import { type ButtonProps as BaseButtonProps, getFinalClassName } from '../../globals/Button';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color' | 'className'>,
    BaseButtonProps {
  children: ReactNode;
}

export const Button = ({ children, className, color = 'default', size = 'medium', action, ...props }: ButtonProps) => {
  const buttonClasses = getFinalClassName(action, color, size, className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
