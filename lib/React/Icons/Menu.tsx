export interface MenuProps {
  className?: string;
  size?: string;
}

export function Menu({ className, size }: MenuProps) {
  const finalSize = size || '24px';
  return (
    <svg
      className={className}
      height={finalSize}
      width={finalSize}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="6" width="18" height="2" rx="1" />
      <rect x="3" y="11" width="18" height="2" rx="1" />
      <rect x="3" y="16" width="18" height="2" rx="1" />
    </svg>
  );
}
