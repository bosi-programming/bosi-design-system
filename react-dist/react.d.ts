import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const actionClasses: Record<ButtonAction, string>;

export declare const baseButtonClasses = "hover:scale-110 rounded-lg cursor-pointer border-none outline-transparent text-body hover:brightness-75 disabled:cursor-not-allowed disabled:bg-gray-15";

export declare const Button: ({ children, className, color, size, action, ...props }: ButtonProps) => JSX.Element;

export declare type ButtonAction = 'error' | 'warning' | 'success' | 'info';

export declare interface ButtonBaseProps {
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    action?: ButtonAction;
}

export declare type ButtonColor = 'default' | 'primary' | 'secondary';

export declare interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color' | 'className'>, ButtonBaseProps {
    children: ReactNode;
}

export declare type ButtonSize = 'small' | 'medium' | 'full-width';

export declare function Card({ title, content, actions, className }: CardProps): JSX.Element;

export declare interface CardProps {
    title: ReactNode;
    content: ReactNode;
    actions?: ReactNode;
    className?: string;
}

export declare const colorsClasses: Record<ButtonColor, string>;

export declare const fakePlaceholderStyles = "dark:text-gray-400! text-gray-500";

export declare function getButtonFinalClassName(action: ButtonAction | undefined, color: ButtonColor | undefined, size: ButtonSize | undefined, className?: string): string;

export declare function getComponent(size: TypographyProps['size'], as: TypographyProps['as']): "h1" | "h2" | "h3" | "h4" | "details" | "a" | "p" | "h5" | "h6" | "span" | "label";

export declare function getTypographyFinalClassName(color: TypographyProps['color'], size: TypographyProps['size'], className?: string): string;

export declare function Input({ name, disabled, required, value, setValue, label, placeholder, className, type, error, }: InputProps): JSX.Element;

export declare const inputDarkClasses = "dark:border-emerald dark:focus:ring-emerald dark:focus:border-emerald dark:bg-green dark:text-white";

export declare const inputErrorClasses = "dark:border-red-400 border-red-700";

export declare interface InputProps {
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

export declare function Paper({ children, className, isCard, ...rest }: PaperProps): JSX.Element;

export declare interface PaperProps {
    children: ReactNode;
    isCard?: boolean;
    className?: string;
}

export declare const placeholderStyles = "dark:placeholder:text-gray-400! placeholder:text-gray-500";

export declare function Selector({ placeholder, options, label, name, required, disabled, error, className, ...rest }: SelectorProps): JSX.Element;

export declare const selectorBaseClasses = "rounded-xl border border-gray-300 bg-gray-50 px-2 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 md:mb-6 appearance-none cursor-pointer w-full";

export declare const selectorDarkClasses = "dark:bg-green dark:border-emerald dark:placeholder-emerald dark:text-white dark:focus:ring-emerald dark:focus:border-emerald";

export declare const selectorIconStyles = "pointer-events-none absolute right-2.5 top-3.5 ml-1 h-5 w-5 text-gray-500 dark:text-gray-400";

export declare interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    options: {
        id: string | number;
        label: React.ReactNode;
    }[];
}

export declare const sizeClasses: Record<ButtonSize, string>;

export declare type TColor = 'default' | 'primary' | 'secondary' | 'error';

export declare const textErrorClasses = "mt-1 text-red-700 dark:text-red-400";

export declare type TSize = 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'details';

export declare function Typography({ color, size, className, children, as, href, target, rel, htmlFor, id, }: TypographyProps_2): JSX.Element;

export declare interface TypographyProps {
    color?: TColor;
    size?: TSize;
    className?: string;
    as?: 'a' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'details' | 'label';
    href?: string;
    target?: HTMLAnchorElement['target'];
    rel?: HTMLAnchorElement['rel'];
    htmlFor?: string;
    id?: string;
}

declare interface TypographyProps_2 extends TypographyProps {
    children: ReactNode;
}

export { }
