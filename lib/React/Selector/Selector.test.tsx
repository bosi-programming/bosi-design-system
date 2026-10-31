import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Selector } from './Selector';

const defaultOptions = [
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
];

describe('Selector basics', () => {
  it('should show the label of the current value', () => {
    render(<Selector options={defaultOptions} value="1" onChange={() => {}} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 1');
  });
  it('should show the placeholder without a value', () => {
    render(<Selector options={defaultOptions} placeholder="Pick one" />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Pick one');
  });
  it('should call onChange with the chosen value on target', async () => {
    const onChange = vi.fn();
    render(<Selector options={defaultOptions} name="test" onChange={onChange} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'Option 2' }));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0]?.[0].target).toEqual({ name: 'test', value: '2' });
  });
  it('should not call onChange when the current option is chosen again', async () => {
    const onChange = vi.fn();
    render(<Selector options={defaultOptions} value="2" onChange={onChange} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'Option 2' }));
    expect(onChange).not.toHaveBeenCalled();
  });
  it('should keep the chosen value when uncontrolled', async () => {
    render(<Selector options={defaultOptions} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: 'Option 2' }));
    expect(screen.getByRole('combobox')).toHaveTextContent('Option 2');
  });
  it('should send the value in a form', () => {
    const { container } = render(<Selector options={defaultOptions} name="test" value="2" onChange={() => {}} />);
    expect(container.querySelector('input[type="hidden"][name="test"]')).toHaveValue('2');
  });
  it('should accept className', () => {
    const { container } = render(<Selector options={defaultOptions} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
  it('should be disabled when disabled prop is true', async () => {
    render(<Selector options={defaultOptions} disabled />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toBeDisabled();
    await userEvent.click(combobox);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
  it('should show asterisk and required attr when required', () => {
    render(<Selector options={defaultOptions} label="Test" name="test" required />);
    expect(screen.getByText('Test*')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeRequired();
  });
  it('should use the label as the accessible name', () => {
    render(<Selector options={defaultOptions} label="Budget type" name="test" />);
    expect(screen.getByRole('combobox', { name: 'Budget type' })).toBeInTheDocument();
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
  it('should link the combobox to the listbox while open', async () => {
    render(<Selector options={defaultOptions} name="test" />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveAttribute('aria-expanded', 'false');
    expect(combobox).toHaveAttribute('aria-haspopup', 'listbox');
    await userEvent.click(combobox);
    expect(combobox).toHaveAttribute('aria-expanded', 'true');
    expect(combobox).toHaveAttribute('aria-controls', screen.getByRole('listbox').id);
  });
  it('should mark the selected option', async () => {
    render(<Selector options={defaultOptions} value="2" onChange={() => {}} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Option 2' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('option', { name: 'Option 1' })).toHaveAttribute('aria-selected', 'false');
  });
});

describe('Selector options', () => {
  it('should not render options while closed', () => {
    render(<Selector options={defaultOptions} />);
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
  it('should skip options with empty id', async () => {
    render(
      <Selector
        options={[
          { id: '', label: 'Empty' },
          { id: '1', label: 'Option 1' },
        ]}
      />,
    );
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByRole('option', { name: 'Empty' })).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
  });
  it('should accept numeric ids', async () => {
    const onChange = vi.fn();
    render(<Selector options={[{ id: 7, label: 'Seven' }]} value={7} onChange={onChange} />);
    expect(screen.getByRole('combobox')).toHaveTextContent('Seven');
  });
  it('should close on a click outside', async () => {
    render(
      <div>
        <Selector options={defaultOptions} />
        <p>Outside</p>
      </div>,
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByText('Outside'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
  it('should stop listening for outside clicks after it closes', async () => {
    const removeListener = vi.spyOn(document, 'removeEventListener');
    render(<Selector options={defaultOptions} />);
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.keyboard('{Escape}');
    expect(removeListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
    removeListener.mockRestore();
  });
});

describe('Selector keyboard', () => {
  it.each(['{ArrowDown}', '{ArrowUp}', '{Enter}', ' '])('should open with %s', async (key) => {
    render(<Selector options={defaultOptions} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard(key);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
  it('should start on the selected option', async () => {
    render(<Selector options={defaultOptions} value="2" onChange={() => {}} />);
    const combobox = screen.getByRole('combobox');
    combobox.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(combobox).toHaveAttribute('aria-activedescendant', screen.getByRole('option', { name: 'Option 2' }).id);
  });
  it('should move with the arrows and wrap around', async () => {
    render(<Selector options={defaultOptions} />);
    const combobox = screen.getByRole('combobox');
    combobox.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    expect(combobox).toHaveAttribute('aria-activedescendant', screen.getByRole('option', { name: 'Option 2' }).id);
    await userEvent.keyboard('{ArrowDown}');
    expect(combobox).toHaveAttribute('aria-activedescendant', screen.getByRole('option', { name: 'Option 1' }).id);
    await userEvent.keyboard('{ArrowUp}');
    expect(combobox).toHaveAttribute('aria-activedescendant', screen.getByRole('option', { name: 'Option 2' }).id);
  });
  it('should choose with Enter and keep focus', async () => {
    const onChange = vi.fn();
    render(<Selector options={defaultOptions} onChange={onChange} />);
    const combobox = screen.getByRole('combobox');
    combobox.focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(onChange.mock.calls[0]?.[0].target.value).toBe('2');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(combobox).toHaveFocus();
  });
  it('should close with Escape without choosing', async () => {
    const onChange = vi.fn();
    render(<Selector options={defaultOptions} onChange={onChange} />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Escape}');
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
  it('should choose the active option and move on with Tab', async () => {
    const onChange = vi.fn();
    render(
      <div>
        <Selector options={defaultOptions} onChange={onChange} />
        <button>Next</button>
      </div>,
    );
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await userEvent.tab();
    expect(onChange.mock.calls[0]?.[0].target.value).toBe('2');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toHaveFocus();
  });
  it('should stay closed when Escape is pressed while closed', () => {
    render(<Selector options={defaultOptions} />);
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});

describe('Selector add new', () => {
  it('should not render the row without onAddNew', async () => {
    render(<Selector options={defaultOptions} addNewLabel="+ Add new category" />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.queryByText('+ Add new category')).not.toBeInTheDocument();
  });
  it('should call onAddNew on click, close, and keep the value', async () => {
    const onAddNew = vi.fn();
    const onChange = vi.fn();
    render(
      <Selector options={defaultOptions} onChange={onChange} onAddNew={onAddNew} addNewLabel="+ Add new category" />,
    );
    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByRole('option', { name: '+ Add new category' }));
    expect(onAddNew).toHaveBeenCalledTimes(1);
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
  it('should reach the row with the keyboard', async () => {
    const onAddNew = vi.fn();
    render(<Selector options={defaultOptions} onAddNew={onAddNew} addNewLabel="+ Add new category" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}{ArrowUp}{Enter}');
    expect(onAddNew).toHaveBeenCalledTimes(1);
  });
  it('should not call onAddNew when Tab leaves from the row', async () => {
    const onAddNew = vi.fn();
    render(<Selector options={defaultOptions} onAddNew={onAddNew} addNewLabel="+ Add new category" />);
    screen.getByRole('combobox').focus();
    await userEvent.keyboard('{ArrowDown}{ArrowUp}');
    await userEvent.tab();
    expect(onAddNew).not.toHaveBeenCalled();
  });
  it('should use the primary colour', async () => {
    render(<Selector options={defaultOptions} onAddNew={() => {}} addNewLabel="+ Add new category" />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: '+ Add new category' })).toHaveClass(
      'text-primary-on-light',
      'dark:text-primary-on-dark',
    );
  });
});

describe('Selector design', () => {
  it('should render the 24px ChevronDown icon', () => {
    const { container } = render(<Selector options={defaultOptions} />);
    const icon = container.querySelector('svg');
    expect(container.querySelector('svg path')).toHaveAttribute('d', 'm19.5 8.25-7.5 7.5-7.5-7.5');
    expect(icon).toHaveAttribute('width', '24px');
    expect(icon).toHaveClass('top-2.5', 'right-2.5', 'text-black', 'dark:text-gray-68');
  });
  it('should use gray-68 for the icon when disabled', () => {
    const { container } = render(<Selector options={defaultOptions} disabled />);
    expect(container.querySelector('svg')).toHaveClass('text-gray-68');
    expect(container.querySelector('svg')).not.toHaveClass('text-black');
  });
  it('should turn the icon only when open', async () => {
    const { container } = render(<Selector options={defaultOptions} />);
    expect(container.querySelector('svg')).not.toHaveClass('rotate-180');
    await userEvent.click(screen.getByRole('combobox'));
    expect(container.querySelector('svg')).toHaveClass('rotate-180');
  });
  it('should use the design field styles', () => {
    render(<Selector options={defaultOptions} />);
    expect(screen.getByRole('combobox')).toHaveClass(
      'h-11',
      'pl-2',
      'pr-9',
      'bg-white',
      'border-gray-68',
      'dark:bg-background-on-dark',
      'dark:border-emerald',
    );
  });
  it('should use the disabled styles of the Input table', () => {
    render(<Selector options={defaultOptions} label="Label" name="test" disabled />);
    expect(screen.getByRole('combobox')).toHaveClass(
      'disabled:bg-gray-93',
      'disabled:border-gray-68',
      'disabled:text-gray-68',
      'dark:disabled:bg-nav-background-on-dark',
      'dark:disabled:border-gray-68',
      'dark:disabled:text-gray-68',
    );
    expect(screen.getByText('Label')).toHaveClass('text-gray-68!', 'dark:text-gray-68!');
  });
  it('should use an emerald border while open', async () => {
    render(<Selector options={defaultOptions} />);
    const combobox = screen.getByRole('combobox');
    await userEvent.click(combobox);
    expect(combobox).toHaveClass('border-emerald');
    expect(combobox).not.toHaveClass('border-gray-68');
  });
  it('should use the Penpot menu styles', async () => {
    render(<Selector options={defaultOptions} />);
    await userEvent.click(screen.getByRole('combobox'));
    expect(screen.getByRole('listbox')).toHaveClass(
      'absolute',
      'top-full',
      'mt-2',
      'rounded-xl',
      'py-1',
      'bg-white',
      'border-gray-68',
      'dark:bg-background-on-dark',
      'dark:border-emerald',
    );
  });
  it('should use the Penpot option styles', async () => {
    render(<Selector options={defaultOptions} value="1" onChange={() => {}} />);
    await userEvent.click(screen.getByRole('combobox'));
    const selected = screen.getByRole('option', { name: 'Option 1' });
    const other = screen.getByRole('option', { name: 'Option 2' });
    expect(selected).toHaveClass(
      'h-10',
      'px-2',
      'text-black',
      'dark:text-white',
      'bg-gray-93',
      'dark:bg-nav-background-on-dark',
    );
    expect(other).not.toHaveClass('bg-gray-93');
  });
  it('should use the error border instead of the default one when there is an error', () => {
    render(<Selector options={defaultOptions} name="test" error="Error message" />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveClass('border-error', 'dark:border-error-on-dark');
    expect(combobox).not.toHaveClass('border-gray-68');
  });
  it('should use the Penpot error tokens on the message', () => {
    render(<Selector options={defaultOptions} name="test" error="Error message" />);
    const error = screen.getByText('Error message');
    expect(error).toHaveClass('dark:text-error-on-dark');
    expect(error).not.toHaveClass('dark:text-gray-93');
  });
  it('should use emerald on focus and show a ring for keyboard focus', () => {
    render(<Selector options={defaultOptions} name="test" />);
    const combobox = screen.getByRole('combobox');
    expect(combobox).toHaveClass('focus:border-emerald', 'focus:ring-emerald', 'focus-visible:ring-1');
    expect(combobox).not.toHaveClass('dark:focus:border-emerald');
  });
  it('should use gray-68 for the placeholder only', () => {
    const { rerender } = render(<Selector options={defaultOptions} name="test" />);
    expect(screen.getByRole('combobox')).toHaveClass('text-gray-68!', 'dark:text-gray-68!');
    rerender(<Selector options={defaultOptions} name="test" value="1" onChange={() => {}} />);
    expect(screen.getByRole('combobox')).not.toHaveClass('text-gray-68!');
  });
  it('should align label and error with the field and keep the error 8px below it', () => {
    render(<Selector options={defaultOptions} name="test" label="Label" error="Error message" />);
    expect(screen.getByText('Label')).not.toHaveClass('ml-2');
    const error = screen.getByText('Error message');
    expect(error).not.toHaveClass('ml-2');
    expect(error).toHaveClass('mt-2', 'text-error');
  });
});
