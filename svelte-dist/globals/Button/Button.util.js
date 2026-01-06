import { match } from 'ts-pattern';
import { baseButtonClasses, actionClasses, colorsClasses, sizeClasses } from './Button';
function getColorClass(action, color) {
    return match({ action, color })
        .with({ action: 'error' }, () => actionClasses.error)
        .with({ action: 'warning' }, () => actionClasses.warning)
        .with({ action: 'success' }, () => actionClasses.success)
        .with({ action: 'info' }, () => actionClasses.info)
        .with({ color: 'primary' }, () => colorsClasses.primary)
        .with({ color: 'secondary' }, () => colorsClasses.secondary)
        .otherwise(() => colorsClasses.default);
}
function getSizeClass(size) {
    return match(size)
        .with('small', () => sizeClasses.small)
        .with('medium', () => sizeClasses.medium)
        .with('full-width', () => sizeClasses['full-width'])
        .with(undefined, () => sizeClasses.medium)
        .exhaustive();
}
export function getFinalClassName(action, color, size, className) {
    const colorClass = getColorClass(action, color);
    const sizeClass = getSizeClass(size);
    return `${baseButtonClasses} ${colorClass} ${sizeClass} ${className || ''}`.trim();
}
