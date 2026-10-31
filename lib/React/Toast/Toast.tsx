import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { toastClasses, toastCloseClasses, toastContainerClasses } from '../../globals';
import { Close } from '../Icons';

export interface ToastProps {
  message: ReactNode;
  onClose: () => void;
  closeLabel: string;
}

export function Toast({ message, onClose, closeLabel }: ToastProps) {
  const latestOnClose = useRef(onClose);

  useEffect(() => {
    latestOnClose.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest('[data-toast]')) return;
      latestOnClose.current();
    };
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, []);

  return (
    <div role="alert" data-toast className={toastClasses}>
      <p className="text-body flex-1">{message}</p>
      <button type="button" aria-label={closeLabel} className={toastCloseClasses} onClick={onClose}>
        <Close />
      </button>
    </div>
  );
}

export function ToastContainer({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${toastContainerClasses} ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
}
