import type { ReactNode } from 'react';
import { getComponent, getFinalClassName, type TypographyProps as BaseTypographyProps } from '../../globals/Typography';

interface TypographyProps extends BaseTypographyProps {
  children: ReactNode;
}

export function Typography({
  color = 'default',
  size = 'body',
  className,
  children,
  as,
  href,
  target,
  rel,
}: TypographyProps) {
  const finalClassName = getFinalClassName(color, size, className);
  const Component = getComponent(size, as);

  if (Component === 'a') {
    return (
      <Component className={finalClassName} href={href} target={target} rel={rel}>
        {children}
      </Component>
    );
  }

  return <Component className={finalClassName}>{children}</Component>;
}
