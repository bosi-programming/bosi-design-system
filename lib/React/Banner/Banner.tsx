import type { ReactNode } from 'react';
import { bannerBaseClasses, bannerTypeClasses, type BannerType } from '../../globals';

export interface BannerProps {
  type: BannerType;
  children: ReactNode;
  className?: string;
}

export function Banner({ type, children, className }: BannerProps) {
  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      className={`${bannerBaseClasses} ${bannerTypeClasses[type]} ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
