import type { TypographyProps } from "./Typography";
export declare function colorClass(color: TypographyProps["color"]): "text-primary-on-light dark:text-primary-on-dark" | "text-secondary-on-light dark:text-secondary-on-dark" | "text-error dark:text-error-on-dark" | "light:text-black dark:text-gray-93";
export declare function sizeClass(size: TypographyProps["size"]): "text-h1 font-bold" | "text-h2 font-bold" | "text-h3 font-bold" | "text-h4 font-bold" | "text-details" | "text-body mb-4";
export declare function getComponent(size: TypographyProps["size"], as: TypographyProps["as"]): "h1" | "h2" | "h3" | "h4" | "details" | "a" | "p" | "h5" | "h6" | "span" | "label";
//# sourceMappingURL=Typography.utils.d.ts.map