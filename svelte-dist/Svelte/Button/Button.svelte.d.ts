import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import { type ButtonProps } from '../../globals/Button';
interface Props extends ButtonProps, Omit<HTMLButtonAttributes, 'color' | 'class' | 'children'> {
    children: Snippet | string;
}
declare const Button: import("svelte").Component<Props, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
//# sourceMappingURL=Button.svelte.d.ts.map