export interface InputProps {
  name: string;
  value: string;
  setValue: (val: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: HTMLInputElement['type'];
  disabled?: boolean;
  required?: boolean;
  error?: string;
}

export const inputDarkClasses = 'dark:bg-background-on-dark dark:text-white';
export const inputBorderClasses = 'border-gray-68 dark:border-emerald';
export const inputErrorClasses = 'border-error dark:border-error-on-dark';
