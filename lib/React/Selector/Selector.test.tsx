import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { fakePlaceholderStyles } from '../../globals';
import { Selector } from './Selector';

const defaultOptions = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
];

describe('Selector basics', () => {
  it('should start with value', () => {
    render(<Selector options={defaultOptions} value="1" onChange={() => {}} />);
    expect(screen.getByRole('combobox')).toHaveValue('1');
  });
  it('should change value with user input', async () => {
    const onChange = vi.fn();
    render(<Selector options={defaultOptions} onChange={onChange} />);
    await userEvent.selectOptions(screen.getByRole('combobox'), '2');
    expect(onChange).toHaveBeenCalled();
  });
  it('should accept className', () => {
    const { container } = render(<Selector options={defaultOptions} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
  it('should be disabled when disabled prop is true', () => {
    render(<Selector options={defaultOptions} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
  it('should show asterisk and required attr when required', () => {
    render(<Selector options={defaultOptions} label="Test" name="test" required />);
    expect(screen.getByText('Test*')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeRequired();
  });
  it('should not render label when not provided', () => {
    render(<Selector options={defaultOptions} name="test" />);
    expect(screen.queryByLabelText('test')).not.toBeInTheDocument();
  });
});

describe('Selector accessibility', () => {
  it('should show error state with aria attributes', () => {
    render(<Selector options={defaultOptions} name="test" error="Error message" />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-invalid', 'true');
    expect(combobox).toHaveAttribute('aria-errormessage', 'error-test');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
  it('should have aria-describedby referencing label', () => {
    render(<Selector options={defaultOptions} label="Test Label" name="test" />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-describedby', 'label-test');
  });
});

describe('Selector placeholder and options', () => {
  it('should render placeholder in disabled option', () => {
    render(<Selector options={defaultOptions} placeholder="Select an option" />);
    const placeholder = screen.getByRole('option', { name: 'Select an option' });
    expect(placeholder).toBeDisabled();
    expect(placeholder).toHaveValue('');
  });
  it('should skip options with empty id', () => {
    const optionsWithEmpty = [
      { id: '', label: 'Empty' },
      { id: '1', label: 'Option 1' },
    ];
    render(<Selector options={optionsWithEmpty} />);
    expect(screen.queryByRole('option', { name: 'Empty' })).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
  });
  it('should render all valid options', () => {
    render(<Selector options={defaultOptions} />);
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
  });
});

describe('Selector hover styles', () => {
  it('should apply placeholder styles when no value and not hovered', () => {
    render(<Selector options={defaultOptions} />);
    expect(screen.getByRole('combobox')).toHaveClass(fakePlaceholderStyles);
  });
  it('should remove placeholder styles on hover', async () => {
    render(<Selector options={defaultOptions} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.hover(combobox.parentElement!);
    expect(combobox).not.toHaveClass(fakePlaceholderStyles);
  });
});

describe('Selector design', () => {
  it('should render a chevron that points down', () => {
    const { container } = render(<Selector options={defaultOptions} />);
    expect(container.querySelector('svg path')).toHaveAttribute('d', 'm19.5 8.25-7.5 7.5-7.5-7.5');
  });
  it('should center the chevron in the field', () => {
    const { container } = render(<Selector options={defaultOptions} />);
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('top-3', 'right-2.5', 'h-5', 'w-5', 'text-black');
    expect(icon).not.toHaveClass('top-3.5');
  });
  it('should use the design field styles', () => {
    render(<Selector options={defaultOptions} />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveClass('h-11', 'pl-2', 'pr-9', 'bg-white', 'border-gray-68');
    expect(combobox).not.toHaveClass('md:mb-6');
  });
  it('should use the error border instead of the default one when there is an error', () => {
    render(<Selector options={defaultOptions} name="test" error="Error message" />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveClass('border-error');
    expect(combobox).not.toHaveClass('border-gray-68');
  });
  it('should use the Penpot error tokens on the dark theme', () => {
    render(<Selector options={defaultOptions} name="test" error="Error message" />);
    expect(screen.getByRole('combobox')).toHaveClass('dark:border-error-on-dark');
    const error = screen.getByText('Error message');
    expect(error).toHaveClass('dark:text-error-on-dark');
    expect(error).not.toHaveClass('dark:text-gray-93');
  });

  it('should use emerald on focus in both themes', () => {
    render(<Selector options={defaultOptions} name="test" />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveClass('focus:border-emerald', 'focus:ring-emerald', 'dark:placeholder-gray-68');
    expect(combobox).not.toHaveClass('focus:border-blue-500');
    expect(combobox).not.toHaveClass('dark:placeholder-emerald');
    expect(combobox).not.toHaveClass('dark:focus:border-emerald');
    expect(combobox).not.toHaveClass('dark:focus:ring-emerald');
  });

  it('should use gray-68 for the empty value and the icon on the dark theme', () => {
    const { container } = render(<Selector options={defaultOptions} name="test" />);
    expect(screen.getByRole('combobox')).toHaveClass('dark:text-gray-68!', 'text-gray-68!');
    expect(container.querySelector('svg')).toHaveClass('dark:text-gray-68');
  });

  it('should align label and error with the field and keep the error 8px below it', () => {
    render(<Selector options={defaultOptions} name="test" label="Label" error="Error message" />);
    expect(screen.getByText('Label')).not.toHaveClass('ml-2');
    const error = screen.getByText('Error message');
    expect(error).not.toHaveClass('ml-2');
    expect(error).toHaveClass('mt-2', 'text-error');
  });
  it('should use the design placeholder color', () => {
    render(<Selector options={defaultOptions} />);
    expect(screen.getByRole('combobox')).toHaveClass('text-gray-68!');
  });
});
