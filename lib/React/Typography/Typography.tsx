import type { ReactNode } from "react";
import { colorClass, getComponent, sizeClass } from "./Typography.util";

export type TColor = "default" | "primary" | "secondary";

export type TSize = "body" | "h1" | "h2" | "h3" | "h4" | "details";
export interface TypographyProps {
  color?: TColor;
  size?: TSize;
  className?: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "details";
  children: ReactNode;
}

export function Typography({ color = "default", size = "body", className, children, as }: TypographyProps) {
  const colorClassName = colorClass(color);
  const sizeClassName = sizeClass(size);
  const finalClassName = `${colorClassName} ${sizeClassName} ${className ? className : ""}`;
  const Component = getComponent(size, as);

  return <Component className={finalClassName}>{children}</Component>;
}
