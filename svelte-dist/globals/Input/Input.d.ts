export interface InputProps {
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
export declare const inputDarkClasses = "dark:bg-background-on-dark dark:text-white";
export declare const inputBorderClasses = "border-gray-68 dark:border-emerald";
export declare const inputErrorClasses = "border-error dark:border-error-on-dark";
//# sourceMappingURL=Input.d.ts.map