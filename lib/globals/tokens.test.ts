import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { compile } from 'tailwindcss';
import { describe, expect, it } from 'vitest';
import { baseButtonClasses, colorsClasses } from './Button/Button';

const require = createRequire(import.meta.url);
const tailwindEntry = require.resolve('tailwindcss/index.css');
const globalCssPath = resolve(process.cwd(), 'lib/global.css');

async function buildCss(candidates: string[]) {
  const source = readFileSync(globalCssPath, 'utf8');
  const compiler = await compile(source, {
    base: dirname(globalCssPath),
    loadStylesheet: async (id, base) => {
      if (id === 'tailwindcss') {
        return { base: dirname(tailwindEntry), content: readFileSync(tailwindEntry, 'utf8') };
      }
      const path = id.startsWith('.') ? resolve(base, id) : require.resolve(`tailwindcss/${id.replace('./', '')}`);
      return { base: dirname(path), content: readFileSync(path, 'utf8') };
    },
  });
  return compiler.build(candidates);
}

function selector(candidate: string) {
  return `.${candidate.replace(/[:!]/g, '\\$&')} {`;
}

describe('design tokens', () => {
  it('should define the error colour for dark surfaces', async () => {
    const css = await buildCss(['text-error-on-dark']);
    expect(css).toContain('--color-error-on-dark: #ff6467');
  });

  it('should define the overlay colour', async () => {
    const css = await buildCss(['bg-overlay']);
    expect(css).toContain('--color-overlay: rgb(0 0 0 / 0.5)');
  });

  it('should use Roboto as the base font', async () => {
    const css = await buildCss([]);
    expect(css).toContain('--font-sans: Roboto, ui-sans-serif, system-ui, sans-serif');
  });

  it('should load the Roboto weights in use', () => {
    const source = readFileSync(globalCssPath, 'utf8');
    expect(
      source
        .trimStart()
        .startsWith(
          "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800&display=swap');",
        ),
    ).toBe(true);
  });
});

describe('Button disabled cascade', () => {
  const candidates = [baseButtonClasses, colorsClasses.primary, colorsClasses.secondary].join(' ').split(' ');

  it.each([
    ['dark:bg-primary-on-dark', 'dark:disabled:bg-nav-background-on-dark'],
    ['dark:bg-secondary-on-dark', 'dark:disabled:bg-nav-background-on-dark'],
    ['disabled:bg-gray-68', 'dark:disabled:bg-nav-background-on-dark'],
    ['dark:text-black', 'dark:disabled:text-gray-68'],
    ['disabled:text-gray-15', 'dark:disabled:text-gray-68'],
  ])('should emit %s before %s', async (earlier, later) => {
    const css = await buildCss(candidates);
    expect(css.indexOf(selector(earlier))).toBeGreaterThan(-1);
    expect(css.indexOf(selector(later))).toBeGreaterThan(css.indexOf(selector(earlier)));
  });
});
