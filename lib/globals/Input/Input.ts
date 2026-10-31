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

export const inputDarkClasses = 'dark:focus:ring-emerald dark:focus:border-emerald dark:bg-green dark:text-white';
export const inputBorderClasses = 'border-gray-68 dark:border-emerald';
export const inputErrorClasses = 'border-error dark:border-red-400';
