import { iconButtonActionClasses, iconButtonBaseClasses, type IconButtonAction } from '../../globals';
import { Pencil, Trash } from '../Icons';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'aria-label'> {
  action: IconButtonAction;
  'aria-label': string;
}

export function IconButton({ action, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`${iconButtonBaseClasses} ${iconButtonActionClasses[action]} ${className ?? ''}`}
      {...props}
    >
      {action === 'delete' ? <Trash /> : <Pencil />}
    </button>
  );
}
