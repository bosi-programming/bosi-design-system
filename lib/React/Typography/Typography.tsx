import type { ReactNode } from 'react';
import { getComponent, getTypographyFinalClassName, type TypographyProps as BaseTypographyProps } from '../../globals';

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
  htmlFor,
  id,
}: TypographyProps) {
  const finalClassName = getTypographyFinalClassName(color, size, className);
  const Component = getComponent(size, as);

  if (Component === 'a') {
    return (
      <Component id={id} className={finalClassName} href={href} target={target} rel={rel}>
        {children}
      </Component>
    );
  }

  return (
    <Component id={id} htmlFor={htmlFor} className={finalClassName}>
      {children}
    </Component>
  );
}
