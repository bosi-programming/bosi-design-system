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

export const inputDarkClasses =
  'dark:border-emerald dark:focus:ring-emerald dark:focus:border-emerald dark:bg-green dark:text-white';
export const inputErrorClasses = 'dark:border-red-400 border-red-700';
