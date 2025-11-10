import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const Button: ({ children, className, onClick, color, size, action, ...props }: ButtonProps) => JSX.Element;

export declare interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    color?: "default" | "primary" | "secondary";
    size?: "small" | "medium" | "full-width";
    action?: "error" | "warning" | "success" | "info";
}

export declare function Card({ title, content, actions, className }: CardProps): JSX.Element;

export declare interface CardProps {
    title: ReactNode;
    content: ReactNode;
    actions?: ReactNode;
    className?: string;
}

export declare function Paper({ children, className, isCard, ...rest }: PaperProps): JSX.Element;

export declare interface PaperProps {
    children: ReactNode;
    isCard?: boolean;
    className?: string;
}

export declare type TColor = "default" | "primary" | "secondary";

export declare type TSize = "body" | "h1" | "h2" | "h3" | "h4" | "details";

export declare function Typography({ color, size, className, children, as }: TypographyProps): JSX.Element;

export declare interface TypographyProps {
    color?: TColor;
    size?: TSize;
    className?: string;
    as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "details";
    children: ReactNode;
}

export { }
