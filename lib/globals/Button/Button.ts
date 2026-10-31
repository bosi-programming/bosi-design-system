export type ButtonColor = 'default' | 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'full-width';
export type ButtonAction = 'error' | 'warning' | 'success' | 'info';

export interface ButtonBaseProps {
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  action?: ButtonAction;
}

export const baseButtonClasses =
  'enabled:hover:scale-110 rounded-[10px] cursor-pointer border-none outline-transparent text-body enabled:hover:brightness-75 disabled:cursor-not-allowed disabled:bg-gray-68 disabled:text-gray-15 dark:disabled:bg-nav-background-on-dark dark:disabled:text-gray-68';

export const actionClasses: Record<ButtonAction, string> = {
  error: 'bg-error text-white',
  info: 'bg-info text-white',
  warning: 'bg-warning text-white',
  success: 'bg-success text-white',
};

export const colorsClasses: Record<ButtonColor, string> = {
  default: actionClasses['info'],
  primary: 'bg-primary-on-light text-white dark:bg-primary-on-dark dark:text-black',
  secondary: 'bg-secondary-on-light text-gray-15 dark:bg-secondary-on-dark dark:text-black',
};

export const sizeClasses: Record<ButtonSize, string> = {
  small: 'h-8.5 px-4',
  medium: 'h-10.5 px-8',
  'full-width': 'h-12.5 w-full px-8',
};
