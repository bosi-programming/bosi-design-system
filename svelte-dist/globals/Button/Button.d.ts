export type ButtonColor = 'default' | 'primary' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'full-width';
export type ButtonAction = 'error' | 'warning' | 'success' | 'info';
export interface ButtonBaseProps {
    className?: string;
    color?: ButtonColor;
    size?: ButtonSize;
    action?: ButtonAction;
}
export declare const baseButtonClasses = "hover:scale-110 rounded-lg cursor-pointer border-none outline-transparent text-body hover:brightness-75 disabled:cursor-not-allowed disabled:bg-gray-15";
export declare const actionClasses: Record<ButtonAction, string>;
export declare const colorsClasses: Record<ButtonColor, string>;
export declare const sizeClasses: Record<ButtonSize, string>;
//# sourceMappingURL=Button.d.ts.map