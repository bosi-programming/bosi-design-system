export interface CloseProps {
  className?: string;
  size?: string;
}

export function Close({ className, size }: CloseProps) {
  const finalSize = size || '24px';
  return (
    <svg
      className={className}
      height={finalSize}
      width={finalSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}
