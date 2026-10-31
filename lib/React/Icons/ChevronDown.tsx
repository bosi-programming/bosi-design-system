export interface ChevronDownProps {
  className?: string;
  size?: string;
}

export function ChevronDown({ className, size }: ChevronDownProps) {
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
      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
