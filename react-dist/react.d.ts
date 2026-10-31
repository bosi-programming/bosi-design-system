import { HTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare const actionClasses: Record<ButtonAction, string>;

export declare function Banner({ type, children, className }: BannerProps): JSX.Element;

export declare const bannerBaseClasses = "w-full rounded-xl px-4 py-3 text-body text-white dark:border dark:border-white";

export declare interface BannerProps {
    type: BannerType;
    children: ReactNode;
    className?: string;
}

export declare type BannerType = 'error' | 'warning' | 'info';

export declare const bannerTypeClasses: Record<BannerType, string>;

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

export declare function ChevronDown({ className, size }: ChevronDownProps): JSX.Element;

export declare interface ChevronDownProps {
    className?: string;
    size?: string;
}

export declare function Close({ className, size }: CloseProps): JSX.Element;

export declare interface CloseProps {
    className?: string;
    size?: string;
}

export declare const colorsClasses: Record<ButtonColor, string>;

export declare const fakePlaceholderStyles = "dark:text-gray-68! text-gray-68!";

export declare const fieldDisabledClasses = "disabled:bg-gray-93 disabled:border-gray-68 disabled:text-gray-68 dark:disabled:bg-nav-background-on-dark dark:disabled:border-gray-68 dark:disabled:text-gray-68";

export declare const fieldLabelDisabledClasses = "text-gray-68! dark:text-gray-68!";

export declare function getButtonFinalClassName(action: ButtonAction | undefined, color: ButtonColor | undefined, size: ButtonSize | undefined, className?: string): string;

export declare function getComponent(size: TypographyProps['size'], as: TypographyProps['as']): "h1" | "h2" | "h3" | "h4" | "details" | "a" | "p" | "h5" | "h6" | "span" | "label";

export declare function getTypographyFinalClassName(color: TypographyProps['color'], size: TypographyProps['size'], className?: string): string;

export declare function Github({ className, size }: GithubProps): JSX.Element;

export declare interface GithubProps {
    className?: string;
    size?: string;
}

export declare function IconButton({ action, className, ...props }: IconButtonProps): JSX.Element;

export declare type IconButtonAction = 'delete' | 'edit';

export declare const iconButtonActionClasses: Record<IconButtonAction, string>;

export declare const iconButtonBaseClasses = "flex h-11 w-11 items-center justify-center rounded-[10px] cursor-pointer enabled:hover:brightness-75 disabled:cursor-not-allowed";

export declare interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'aria-label'> {
    action: IconButtonAction;
    'aria-label': string;
}

export declare function Input({ name, disabled, required, value, setValue, label, placeholder, className, type, error, }: InputProps): JSX.Element;

export declare const inputBorderClasses = "border-gray-68 dark:border-emerald";

export declare const inputDarkClasses = "dark:bg-background-on-dark dark:text-white";

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

export declare function Pencil({ className, size }: PencilProps): JSX.Element;

export declare interface PencilProps {
    className?: string;
    size?: string;
}

export declare const placeholderStyles = "dark:placeholder:text-gray-68! placeholder:text-gray-68";

export declare function Selector({ placeholder, options, label, name, required, disabled, error, className, value, defaultValue, onChange, onAddNew, addNewLabel, onClick, onKeyDown, ...rest }: SelectorProps): JSX.Element;

export declare const selectorAddNewClasses = "flex h-10 cursor-pointer items-center px-2 text-primary-on-light dark:text-primary-on-dark";

export declare const selectorBaseClasses = "h-11 rounded-xl border bg-white pl-2 pr-9 text-left text-black outline-none focus:border-emerald focus:ring-emerald focus-visible:ring-1 cursor-pointer w-full disabled:cursor-not-allowed";

export declare interface SelectorChangeEvent {
    target: {
        name?: string;
        value: string;
    };
}

export declare const selectorDarkClasses = "dark:bg-background-on-dark dark:text-white";

export declare const selectorIconDisabledStyles = "pointer-events-none absolute right-2.5 top-2.5 text-gray-68";

export declare const selectorIconStyles = "pointer-events-none absolute right-2.5 top-2.5 text-black dark:text-gray-68";

export declare const selectorMenuClasses = "absolute left-0 top-full z-10 mt-2 w-full rounded-xl border border-gray-68 bg-white py-1 dark:border-emerald dark:bg-background-on-dark";

export declare const selectorOpenBorderClasses = "border-emerald dark:border-emerald";

export declare const selectorOptionActiveClasses = "ring-1 ring-inset ring-emerald";

export declare const selectorOptionClasses = "flex h-10 cursor-pointer items-center px-2 text-black dark:text-white";

export declare const selectorOptionSelectedClasses = "bg-gray-93 dark:bg-nav-background-on-dark";

export declare interface SelectorProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange' | 'type' | 'role' | 'children'> {
    label?: string;
    placeholder?: string;
    error?: string;
    className?: string;
    required?: boolean;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (event: SelectorChangeEvent) => void;
    onAddNew?: () => void;
    addNewLabel?: React.ReactNode;
    options: {
        id: string | number;
        label: React.ReactNode;
    }[];
}

export declare const sizeClasses: Record<ButtonSize, string>;

export declare type TColor = 'default' | 'primary' | 'secondary' | 'error';

export declare const textErrorClasses = "mt-2 text-error dark:text-error-on-dark";

export declare function Toast({ message, onClose, closeLabel }: ToastProps): JSX.Element;

export declare const toastClasses = "pointer-events-auto flex w-full items-center gap-2 rounded-xl bg-error py-1 pl-4 pr-1 text-white shadow-paper dark:border dark:border-white dark:shadow-paper-dark";

export declare const toastCloseClasses = "flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center";

export declare function ToastContainer({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element;

export declare const toastContainerClasses = "pointer-events-none fixed inset-x-4 top-4 z-50 flex flex-col gap-2 md:left-auto md:w-[360px]";

export declare interface ToastProps {
    message: ReactNode;
    onClose: () => void;
    closeLabel: string;
}

export declare function Trash({ className, size }: TrashProps): JSX.Element;

export declare interface TrashProps {
    className?: string;
    size?: string;
}

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
