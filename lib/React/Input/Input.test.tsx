import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('should start with value', () => {
    render(<Input name="test" value="initial" setValue={() => {}} />);
    expect(screen.getByRole('textbox')).toHaveValue('initial');
  });
  it('should change value with user input', async () => {
    const setValue = vi.fn();
    render(<Input name="test" value="" setValue={setValue} />);
    await userEvent.type(screen.getByRole('textbox'), 'hello');
    expect(setValue).toHaveBeenCalledWith('h');
    expect(setValue).toHaveBeenCalledTimes(5);
  });
  it('should be accessible', () => {
    render(<Input name="email" value="" setValue={() => {}} label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
  it('should accept className', () => {
    const { container } = render(<Input name="test" value="" setValue={() => {}} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
  it('should be disabled when disabled prop is true', () => {
    render(<Input name="test" value="" setValue={() => {}} disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
  it('should show asterisk and required attr when required', () => {
    render(<Input name="test" value="" setValue={() => {}} label="Name" required />);
    expect(screen.getByText('Name*')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeRequired();
  });
  it('should show error state with aria attributes', () => {
    render(<Input name="test" value="" setValue={() => {}} error="Invalid input" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-errormessage', 'error-test');
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });
  it('should accept type prop', () => {
    render(<Input name="pass" value="" setValue={() => {}} type="password" />);
    expect(document.querySelector('input[name="pass"]')).toHaveAttribute('type', 'password');
  });
  it('should not render label when not provided', () => {
    render(<Input name="test" value="" setValue={() => {}} />);
    expect(document.querySelector('label')).not.toBeInTheDocument();
  });
  it('should have aria-describedby referencing label', () => {
    render(<Input name="email" value="" setValue={() => {}} label="Email" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'label-email');
  });
});
