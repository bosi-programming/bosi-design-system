import { type ReactNode } from "react";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    color?: "default" | "primary" | "secondary";
    size?: "small" | "medium" | "full-width";
    action?: "error" | "warning" | "success" | "info";
}
export declare const Button: ({ children, className, onClick, color, size, action, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map