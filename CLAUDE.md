# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-framework design system providing React and Svelte components. Single source of truth in `lib/`, dual build outputs.

## Commands

### Development

- `pnpm dev` - Start Storybook dev server (port 6006)
- `pnpm test` - Run all tests
- `pnpm test:watch` - Run tests in watch mode

### Build

- `pnpm build:lib` - Build both React and Svelte distributions (cleans dist dirs first)
- `pnpm build:react` - Build React package to `react-dist/`
- `pnpm build:svelte` - Build Svelte package to `svelte-dist/` (excludes React)
- `pnpm build` - Build Storybook static site

### Code Quality

- `pnpm lint` - Run Prettier check + ESLint
- `pnpm format` - Auto-format with Prettier

## Architecture

### Directory Structure

```
lib/
├── globals/          # Shared types, utilities, styles (framework-agnostic)
│   └── Typography/   # Shared Typography types and utilities
├── React/            # React-specific components
│   ├── Button/
│   ├── Card/
│   ├── Paper/
│   └── Typography/
├── Svelte/           # Svelte-specific components
│   └── Typography/
├── react.ts          # React package entry (imports global.css + exports)
├── svelte.ts         # Svelte package entry (imports global.css + exports)
└── global.css        # Tailwind CSS base styles
```

### Dual Export Strategy

Package exports both frameworks:

- `bosi-design-system/react` → `react-dist/react.{js,cjs}`
- `bosi-design-system/svelte` → `svelte-dist/svelte.js`
- `bosi-design-system/css` → `dist/global.css`

**Key pattern**: Shared logic in `lib/globals/`, framework-specific implementations in `lib/React/` and `lib/Svelte/`. Example: `lib/globals/Typography/Typography.util.ts` contains `getFinalClassName()` used by both React and Svelte Typography components.

### Build Configuration

**React build** (vite.config.ts):

- Uses Vite + React SWC plugin
- Excludes Svelte files explicitly (`filesPathToExclude`)
- Outputs ES + CJS formats
- Generates types with `vite-plugin-dts`

**Svelte build** (package.json):

- Uses `@sveltejs/package` (`svelte-package`)
- Removes React artifacts post-build
- Input: `./lib`, Output: `./svelte-dist`

### Component Pattern

Components share types and utilities but have separate implementations:

1. Define types in `lib/globals/[Component]/[Component].ts`
2. Create utilities in `lib/globals/[Component]/[Component].util.ts`
3. Implement React component in `lib/React/[Component]/[Component].tsx`
4. Implement Svelte component in `lib/Svelte/[Component]/[Component].svelte`

Example: Typography component uses `ts-pattern` for type-safe class matching in shared utilities, consumed by both React/Svelte implementations.

### Testing

- Vitest with jsdom environment
- Setup file: `lib/React/test/setup.ts`
- Coverage enabled by default
- Test files: `*.test.tsx` alongside components

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite`
- Custom design tokens in `global.css`
- Utility classes follow Tailwind v4 conventions
- Components use `tailwind-merge` for className composition

## Development Notes

- Run `pnpm build:lib` before publishing to generate fresh dist folders
- Storybook stories excluded from TypeScript compilation (tsconfig.json)
- Husky pre-commit hooks enforce linting/formatting
- Both React and Svelte depend on `ts-pattern` (peer dependency)
