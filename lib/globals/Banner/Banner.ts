export type BannerType = 'error' | 'warning' | 'info';

export const bannerBaseClasses = 'w-full rounded-xl px-4 py-3 text-body text-white dark:border dark:border-white';

export const bannerTypeClasses: Record<BannerType, string> = {
  error: 'bg-error',
  warning: 'bg-warning',
  info: 'bg-info',
};
