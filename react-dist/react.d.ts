import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const Button: ({ children, className, color, size, action, ...props }: ButtonProps) => JSX.Element;

declare type ButtonAction = 'error' | 'warning' | 'success' | 'info';

declare type ButtonColor = 'default' | 'primary' | 'secondary';

export declare interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color' | 'className'>, ButtonProps_2 {
    children: ReactNode;
}

declare interface ButtonProps_2 {
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    action?: ButtonAction;
}

declare type ButtonSize = 'small' | 'medium' | 'full-width';

export declare function Card({ title, content, actions, className }: CardProps): JSX.Element;

export declare interface CardProps {
    title: ReactNode;
    content: ReactNode;
    actions?: ReactNode;
    className?: string;
}

export declare function getComponent(size: TypographyProps['size'], as: TypographyProps['as']): "h1" | "h2" | "h3" | "h4" | "details" | "a" | "p" | "h5" | "h6" | "span" | "label";

export declare function getFinalClassName(color: TypographyProps['color'], size: TypographyProps['size'], className?: string): string;

export declare function Paper({ children, className, isCard, ...rest }: PaperProps): JSX.Element;

export declare interface PaperProps {
    children: ReactNode;
    isCard?: boolean;
    className?: string;
}

export declare type TColor = 'default' | 'primary' | 'secondary' | 'error';

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
