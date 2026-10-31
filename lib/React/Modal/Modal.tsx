import { useEffect, useId, useRef, type ReactNode } from 'react';
import {
  modalActionsClasses,
  modalContentClasses,
  modalDialogClasses,
  modalFocusableSelector,
  modalOverlayClasses,
} from '../../globals';
import { Typography } from '../Typography';

export interface ModalProps {
  open: boolean;
  title: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, actions, onClose }: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const latestOnClose = useRef(onClose);

  useEffect(() => {
    latestOnClose.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    const focusable = () => Array.from(dialog?.querySelectorAll<HTMLElement>(modalFocusableSelector) ?? []);
    (focusable()[0] ?? dialog)?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        latestOnClose.current();
        return;
      }
      if (event.key !== 'Tab') return;
      const controls = focusable();
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first || !last) {
        event.preventDefault();
        return;
      }
      const active = document.activeElement;
      const outside = !dialog?.contains(active) || active === dialog;
      if (event.shiftKey && (active === first || outside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || outside)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      opener?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={modalOverlayClasses}
      onMouseDown={(event) => {
        if (event.target !== event.currentTarget) return;
        event.preventDefault();
        onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={modalDialogClasses}
      >
        <Typography as="h3" id={titleId} size="h3" color="primary">
          {title}
        </Typography>
        <div className={modalContentClasses}>{children}</div>
        {actions ? <div className={modalActionsClasses}>{actions}</div> : null}
      </div>
    </div>
  );
}
