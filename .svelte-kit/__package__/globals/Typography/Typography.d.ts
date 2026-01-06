export type TColor = 'default' | 'primary' | 'secondary' | 'error';
export type TSize = 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'details';
export interface TypographyProps {
  color?: TColor;
  size?: TSize;
  className?: string;
  as?: 'a' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'details' | 'label';
  href?: string;
  target?: HTMLAnchorElement['target'];
  rel?: HTMLAnchorElement['rel'];
}
//# sourceMappingURL=Typography.d.ts.map
