import type { ReactNode } from 'react';
import { type TypographyProps as BaseTypographyProps } from '../../globals/Typography';
interface TypographyProps extends BaseTypographyProps {
  children: ReactNode;
}
export declare function Typography({
  color,
  size,
  className,
  children,
  as,
  href,
  target,
  rel,
}: TypographyProps): import('react/jsx-runtime').JSX.Element;
export {};
//# sourceMappingURL=Typography.d.ts.map
