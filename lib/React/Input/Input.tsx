import {
  inputBorderClasses,
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
        <Typography as="label" id={`label-${name}`} htmlFor={name} className="mb-2!">
          {label}
          {required ? '*' : null}
        </Typography>
      ) : null}
      <input
        required={required}
        id={name}
        className={`h-11 w-full rounded-xl border bg-white px-2 text-black focus:border-blue-500 focus:ring-blue-500 ${placeholderStyles} ${inputDarkClasses} ${error ? inputErrorClasses : inputBorderClasses}`}
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
        <Typography size="details" as="p" id={`error-${name}`} className={textErrorClasses}>
          {error}
        </Typography>
      ) : null}
    </div>
  );
}
