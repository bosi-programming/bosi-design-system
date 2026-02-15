import {
  inputDarkClasses,
  inputErrorClasses,
  placeholderStyles,
  textErrorClasses,
  type InputProps,
} from '../../globals';
import { Typography } from '../Typography';

export function Input({
  name,
  disabled,
  required,
  value,
  setValue,
  label,
  placeholder,
  className,
  type = 'text',
  error,
}: InputProps) {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      {label ? (
        <Typography as="label" id={`label-${name}`} htmlFor={name} className="mb-2! ml-2">
          {label}
          {required ? '*' : null}
        </Typography>
      ) : null}
      <input
        required={required}
        id={name}
        className={`w-full rounded-xl border border-gray-300 bg-gray-50 px-2 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 ${placeholderStyles} ${inputDarkClasses} ${error ? inputErrorClasses : null}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
        type={type}
        disabled={disabled}
        aria-invalid={!!error}
        aria-errormessage={error ? `error-${name}` : undefined}
        aria-describedby={label ? `label-${name}` : undefined}
      />
      {error ? (
        <Typography size="details" as="p" id={`error-${name}`} className={`ml-2 ${textErrorClasses}`}>
          {error}
        </Typography>
      ) : null}
    </div>
  );
}
