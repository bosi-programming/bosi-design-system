import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const actionClasses: Record<ButtonAction, string>;

export declare const baseButtonClasses = "enabled:hover:scale-110 rounded-[10px] cursor-pointer border-none outline-transparent text-body enabled:hover:brightness-75 disabled:cursor-not-allowed disabled:bg-gray-68 disabled:text-gray-15 dark:disabled:bg-nav-background-on-dark dark:disabled:text-gray-68";

export declare function BrasilFlag({ className, size }: BrasilFlagProps): JSX.Element;

export declare interface BrasilFlagProps {
    className?: string;
    size?: string;
}

export declare const Button: ({ children, className, color, size, action, ...props }: ButtonProps) => JSX.Element;

export declare type ButtonAction = 'error' | 'warning' | 'success' | 'info';

export declare interface ButtonBaseProps {
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    action?: ButtonAction;
}

export declare type ButtonColor = 'default' | 'primary' | 'secondary';

export declare interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'className'>, ButtonBaseProps {
    children: ReactNode;
}

export declare type ButtonSize = 'small' | 'medium' | 'full-width';

export declare function BuyMeACoffee({ linkText, preText, className }: BuyMeACoffeeProps): JSX.Element;

declare interface BuyMeACoffeeProps {
    preText?: string;
    linkText: ReactNode;
    className?: string;
}

export declare function Card({ title, content, actions, className }: CardProps): JSX.Element;

export declare interface CardProps {
    title: ReactNode;
    content: ReactNode;
    actions?: ReactNode;
    className?: string;
}

export declare const colorsClasses: Record<ButtonColor, string>;

export declare const fakePlaceholderStyles = "dark:text-gray-68! text-gray-68!";

export declare function getButtonFinalClassName(action: ButtonAction | undefined, color: ButtonColor | undefined, size: ButtonSize | undefined, className?: string): string;

export declare function getComponent(size: TypographyProps['size'], as: TypographyProps['as']): "h1" | "h2" | "h3" | "h4" | "details" | "a" | "p" | "h5" | "h6" | "span" | "label";

export declare function getTypographyFinalClassName(color: TypographyProps['color'], size: TypographyProps['size'], className?: string): string;

export declare function Github({ className, size }: GithubProps): JSX.Element;

export declare interface GithubProps {
    className?: string;
    size?: string;
}

export declare function Input({ name, disabled, required, value, setValue, label, placeholder, className, type, error, }: InputProps): JSX.Element;

export declare const inputBorderClasses = "border-gray-68 dark:border-emerald";

export declare const inputDarkClasses = "dark:bg-green dark:text-white";

export declare const inputErrorClasses = "border-error dark:border-error-on-dark";

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

export declare function Instagram({ className, size }: InstagramProps): JSX.Element;

export declare interface InstagramProps {
    className?: string;
    size?: string;
}

export declare function Linkedin({ className, size }: LinkedinProps): JSX.Element;

export declare interface LinkedinProps {
    className?: string;
    size?: string;
}

export declare function Paper({ children, className, isCard, ...rest }: PaperProps): JSX.Element;

export declare interface PaperProps {
    children: ReactNode;
    isCard?: boolean;
    className?: string;
}

export declare const placeholderStyles = "dark:placeholder:text-gray-68! placeholder:text-gray-68";

export declare function Selector({ placeholder, options, label, name, required, disabled, error, className, ...rest }: SelectorProps): JSX.Element;

export declare const selectorBaseClasses = "h-11 rounded-xl border bg-white pl-2 pr-9 text-black outline-none focus:border-emerald focus:ring-emerald appearance-none cursor-pointer w-full";

export declare const selectorDarkClasses = "dark:bg-green dark:placeholder-gray-68 dark:text-white";

export declare const selectorIconStyles = "pointer-events-none absolute right-2.5 top-3 h-5 w-5 text-black dark:text-gray-68";

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

export declare const textErrorClasses = "mt-2 text-error dark:text-error-on-dark";

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

export declare function USAFlag({ className, size }: USAFlagProps): JSX.Element;

export declare interface USAFlagProps {
    className?: string;
    size?: string;
}

export { }
