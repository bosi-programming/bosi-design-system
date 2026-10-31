import { useEffect, useId, useRef, useState } from 'react';
import {
  fakePlaceholderStyles,
  fieldDisabledClasses,
  fieldLabelDisabledClasses,
  inputBorderClasses,
  inputErrorClasses,
  selectorAddNewClasses,
  selectorBaseClasses,
  selectorDarkClasses,
  selectorIconDisabledStyles,
  selectorIconStyles,
  selectorMenuClasses,
  selectorOpenBorderClasses,
  selectorOptionActiveClasses,
  selectorOptionClasses,
  selectorOptionSelectedClasses,
  textErrorClasses,
} from '../../globals';
import { ChevronDown } from '../Icons';
import { Typography } from '../Typography';

export interface SelectorChangeEvent {
  target: { name?: string; value: string };
}

export interface SelectorProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'value' | 'defaultValue' | 'onChange' | 'type' | 'role' | 'children'
  > {
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  required?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: SelectorChangeEvent) => void;
  onAddNew?: () => void;
  addNewLabel?: React.ReactNode;
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
  value,
  defaultValue,
  onChange,
  onAddNew,
  addNewLabel = '+ Add new',
  onClick,
  onKeyDown,
  ...rest
}: SelectorProps) {
  const generatedId = useId();
  const fieldId = name ?? generatedId;
  const listboxId = `${fieldId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [innerValue, setInnerValue] = useState(String(defaultValue ?? ''));
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentValue = String(value ?? innerValue);
  const items = options.filter(({ id }) => id !== '');
  const selectedIndex = items.findIndex(({ id }) => String(id) === currentValue);
  const selected = items[selectedIndex];
  const addNewIndex = onAddNew ? items.length : -1;
  const rowCount = items.length + (onAddNew ? 1 : 0);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, [open]);

  const openMenu = () => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };

  const chooseOption = (index: number) => {
    const item = items[index];
    if (!item) return;
    const nextValue = String(item.id);
    if (nextValue === currentValue) return;
    setInnerValue(nextValue);
    onChange?.({ target: { name, value: nextValue } });
  };

  const commitRow = (index: number) => {
    if (index === addNewIndex) onAddNew?.();
    else chooseOption(index);
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
        event.preventDefault();
        openMenu();
      }
      return;
    }
    if (event.key === 'Tab') {
      if (activeIndex !== addNewIndex) chooseOption(activeIndex);
      setOpen(false);
      return;
    }
    if (event.key === 'ArrowDown') setActiveIndex((activeIndex + 1) % rowCount);
    else if (event.key === 'ArrowUp') setActiveIndex((activeIndex - 1 + rowCount) % rowCount);
    else if (event.key === 'Enter' || event.key === ' ') commitRow(activeIndex);
    else if (event.key === 'Escape') setOpen(false);
    else return;
    event.preventDefault();
  };

  const rowId = (index: number) => `${fieldId}-option-${index}`;
  const openOrDefaultBorder = open ? selectorOpenBorderClasses : inputBorderClasses;

  return (
    <div className={`flex w-full flex-col ${className ?? ''}`} ref={rootRef}>
      {label ? (
        <Typography
          as="label"
          id={`label-${name}`}
          htmlFor={fieldId}
          className={`mb-2! ${disabled ? fieldLabelDisabledClasses : ''}`}
        >
          {label}
          {required ? '*' : null}
        </Typography>
      ) : null}
      <div className="relative">
        <button
          {...rest}
          type="button"
          role="combobox"
          id={fieldId}
          disabled={disabled}
          className={`${selectorBaseClasses} ${selectorDarkClasses} ${error ? inputErrorClasses : openOrDefaultBorder} ${fieldDisabledClasses} ${selected ? '' : fakePlaceholderStyles}`}
          onClick={(event) => {
            onClick?.(event);
            if (open) setOpen(false);
            else openMenu();
          }}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-activedescendant={open && rowCount > 0 ? rowId(activeIndex) : undefined}
          aria-labelledby={label ? `label-${name}` : undefined}
          aria-required={required}
          aria-invalid={!!error}
          aria-errormessage={error ? `error-${name}` : undefined}
          aria-describedby={label ? `label-${name}` : undefined}
        >
          {selected ? selected.label : placeholder}
        </button>
        {name ? <input type="hidden" name={name} value={currentValue} /> : null}
        <ChevronDown
          className={`${disabled ? selectorIconDisabledStyles : selectorIconStyles} ${open ? 'rotate-180' : ''}`}
        />
        {open ? (
          <ul
            id={listboxId}
            role="listbox"
            aria-labelledby={label ? `label-${name}` : undefined}
            className={selectorMenuClasses}
          >
            {items.map(({ id, label: optionLabel }, index) => (
              <li
                key={id}
                id={rowId(index)}
                role="option"
                aria-selected={index === selectedIndex}
                className={`${selectorOptionClasses} ${index === selectedIndex ? selectorOptionSelectedClasses : ''} ${index === activeIndex ? selectorOptionActiveClasses : ''}`}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => commitRow(index)}
              >
                {optionLabel}
              </li>
            ))}
            {onAddNew ? (
              <li
                id={rowId(addNewIndex)}
                role="option"
                aria-selected={false}
                className={`${selectorAddNewClasses} ${activeIndex === addNewIndex ? selectorOptionActiveClasses : ''}`}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(addNewIndex)}
                onClick={() => commitRow(addNewIndex)}
              >
                {addNewLabel}
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
      {error ? (
        <Typography size="details" as="p" color="error" id={`error-${name}`} className={textErrorClasses}>
          {error}
        </Typography>
      ) : null}
    </div>
  );
}
