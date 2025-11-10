import { match, P } from 'ts-pattern';
import { type TypographyProps } from './Typography';

export function colorClass(color: TypographyProps['color']) {
  return match(color)
    .with('primary', () => 'text-primary-on-light dark:text-primary-on-dark')
    .with('secondary', () => 'text-secondary-on-light dark:text-secondary-on-dark')
    .with(P._, () => 'light:text-black dark:text-gray-93')
    .exhaustive();
}

export function sizeClass(size: TypographyProps['size']) {
  return match(size)
    .with('h1', () => 'text-h1 font-bold')
    .with('h2', () => 'text-h2 font-bold')
    .with('h3', () => 'text-h3 font-bold')
    .with('h4', () => 'text-h4 font-bold')
    .with('details', () => 'text-details')
    .with(P._, () => 'text-body mb-4')
    .exhaustive();
}

export function getComponent(size: TypographyProps["size"], as: TypographyProps["as"]) {
  if (as) return as;
  if (size === "body") return "p";
  return size || "p";
}
