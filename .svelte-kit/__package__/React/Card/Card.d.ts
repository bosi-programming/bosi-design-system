import { type ReactNode } from 'react';
export interface CardProps {
  title: ReactNode;
  content: ReactNode;
  actions?: ReactNode;
  className?: string;
}
export declare function Card({
  title,
  content,
  actions,
  className,
}: CardProps): import('react/jsx-runtime').JSX.Element;
//# sourceMappingURL=Card.d.ts.map
