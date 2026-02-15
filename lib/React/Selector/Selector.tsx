import { useState } from 'react';
import {
  fakePlaceholderStyles,
  selectorBaseClasses,
  selectorDarkClasses,
  selectorIconStyles,
  textErrorClasses,
} from '../../globals';
import { Typography } from '../Typography';

export interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  options: { id: string | number; label: React.ReactNode }[];
}

export function Selector({
  placeholder,
  options,
  label,
  name,
  required,
  disabled,
  error,
  className,
  ...rest
}: SelectorProps) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={`flex w-full flex-col ${className}`}>
      {label ? (
        <Typography as="label" id={`label-${name}`} htmlFor={name} className="mb-2! ml-2">
          {label}
          {required ? '*' : null}
        </Typography>
      ) : null}
      <div className="relative" onMouseEnter={() => setClicked(!clicked)} onMouseLeave={() => setClicked(!clicked)}>
        <select
          {...rest}
          name={name}
          id={name}
          required={required}
          className={`${selectorBaseClasses} ${selectorDarkClasses} ${!rest.value && !clicked ? fakePlaceholderStyles : ''}`}
          disabled={disabled}
          aria-label={label}
          aria-invalid={!!error}
          aria-errormessage={error ? `error-${name}` : undefined}
          aria-describedby={label ? `label-${name}` : undefined}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map(({ id, label }) => {
            if (id === '') return null;
            return (
              <option key={id} value={id}>
                {label}
              </option>
            );
          })}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className={selectorIconStyles}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </div>
      {error ? (
        <Typography size="details" as="p" id={`error-${name}`} className={`ml-2 ${textErrorClasses}`}>
          {error}
        </Typography>
      ) : null}
    </div>
  );
}
