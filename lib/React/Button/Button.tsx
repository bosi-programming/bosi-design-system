import { type ReactNode } from 'react';
import { type ButtonBaseProps, getButtonFinalClassName } from '../../globals';

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color' | 'className'>,
    ButtonBaseProps {
  children: ReactNode;
}

export const Button = ({ children, className, color = 'default', size = 'medium', action, ...props }: ButtonProps) => {
  const buttonClasses = getButtonFinalClassName(action, color, size, className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
