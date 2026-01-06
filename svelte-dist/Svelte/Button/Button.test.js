import { render, screen, cleanup } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
import Button from './Button.svelte';
import { actionClasses, colorsClasses, sizeClasses } from '../../globals/Button';
afterEach(() => {
    cleanup();
});
describe('Button size options', () => {
    it('should have small classes', () => {
        render(Button, { props: { children: 'Test', size: 'small' } });
        expect(screen.getByRole('button')).toHaveClass(sizeClasses.small);
    });
    it('should have medium classes', () => {
        render(Button, { props: { children: 'Test', size: 'medium' } });
        expect(screen.getByRole('button')).toHaveClass(sizeClasses.medium);
    });
    it('should have full-width classes', () => {
        render(Button, { props: { children: 'Test', size: 'full-width' } });
        expect(screen.getByRole('button')).toHaveClass(sizeClasses['full-width']);
    });
});
describe('Button color options', () => {
    it('should have default color classes', () => {
        render(Button, { props: { children: 'Test' } });
        expect(screen.getByRole('button')).toHaveClass(colorsClasses.default);
    });
    it('should have primary color classes', () => {
        render(Button, { props: { children: 'Test', color: 'primary' } });
        expect(screen.getByRole('button')).toHaveClass(colorsClasses.primary);
    });
    it('should have secondary color classes', () => {
        render(Button, { props: { children: 'Test', color: 'secondary' } });
        expect(screen.getByRole('button')).toHaveClass(colorsClasses.secondary);
    });
});
describe('Button action options', () => {
    it('should have error classes', () => {
        render(Button, { props: { children: 'Test', action: 'error' } });
        expect(screen.getByRole('button')).toHaveClass(actionClasses.error);
    });
    it('should have info classes', () => {
        render(Button, { props: { children: 'Test', action: 'info' } });
        expect(screen.getByRole('button')).toHaveClass(actionClasses.info);
    });
    it('should have warning classes', () => {
        render(Button, { props: { children: 'Test', action: 'warning' } });
        expect(screen.getByRole('button')).toHaveClass(actionClasses.warning);
    });
    it('should have success classes', () => {
        render(Button, { props: { children: 'Test', action: 'success' } });
        expect(screen.getByRole('button')).toHaveClass(actionClasses.success);
    });
    it('should use action classes instead of colors', () => {
        render(Button, { props: { children: 'Test', action: 'success', color: 'primary' } });
        expect(screen.getByRole('button')).toHaveClass(actionClasses.success);
        expect(screen.getByRole('button')).not.toHaveClass(colorsClasses.primary);
    });
});
describe('Button extra properties', () => {
    it('should handle click events', async () => {
        let clicked = false;
        const onclick = () => {
            clicked = true;
        };
        render(Button, { props: { children: 'Test', onclick } });
        const button = screen.getByRole('button');
        button.click();
        expect(clicked).toBe(true);
    });
    it('should accept a className', () => {
        render(Button, { props: { children: 'Test', className: 'test' } });
        expect(screen.getByRole('button')).toHaveClass('test');
    });
    it('should support disabled attribute', () => {
        render(Button, { props: { children: 'Test', disabled: true } });
        expect(screen.getByRole('button')).toBeDisabled();
    });
    it('should render snippet children', () => {
        // Pass a function to exercise the snippet code path (non-string children)
        const snippetMock = () => { };
        const { container } = render(Button, {
            props: {
                children: snippetMock,
            },
        });
        expect(container.querySelector('button')).toBeTruthy();
    });
});
