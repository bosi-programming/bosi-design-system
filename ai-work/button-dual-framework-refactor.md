# Button Component: Dual-Framework Refactor

**Date**: 2026-01-05
**Task**: Refactor Button component from React-only to dual-framework (React + Svelte)

## Overview

Refactored Button component following Typography pattern: extracted shared logic to `lib/globals/`, maintained React implementation, created new Svelte implementation with full test coverage.

## Changes Made

### 1. Created Shared Globals (`lib/globals/Button/`)

- **Button.ts**: Types (`ButtonColor`, `ButtonSize`, `ButtonAction`, `ButtonProps`) + style constants (`baseButtonClasses`, `actionClasses`, `colorsClasses`, `sizeClasses`)
- **Button.util.ts**: Type-safe utilities using `ts-pattern`
  - `getColorClass()`: Action priority over color
  - `getSizeClass()`: Size class mapping
  - `getFinalClassName()`: Combines all classes
- **index.ts**: Re-exports

### 2. Refactored React Button (`lib/React/Button/`)

- Updated `Button.tsx`: Import from globals, simplified component
- Updated `Button.test.tsx`: Import test constants from globals
- Deleted: `Button.styles.ts`, `Button.utils.ts` (moved to globals)
- Fixed type conflict: `Omit<HTMLAttributes, 'color' | 'className'>` for HTMLButtonElement color attribute

### 3. Created Svelte Button (`lib/Svelte/Button/`)

- **Button.svelte**: Svelte 5 implementation
  - Uses `$props()` rune
  - Uses `$derived` for reactive classes
  - Supports `Snippet | string` children
  - Props: `ButtonProps` + `Omit<HTMLButtonAttributes, 'color' | 'class' | 'children'>`
- **Button.test.ts**: 15 comprehensive tests
  - Size options (small, medium, full-width)
  - Color options (default, primary, secondary)
  - Action options (error, info, warning, success)
  - Action priority over color
  - Click events, className, disabled
  - Snippet children (covers both code paths)
- **index.ts**: Export

### 4. Testing Infrastructure

**Installed dependencies** (with `--save-exact`):

- `@testing-library/svelte@5.3.1`
- `@sveltejs/vite-plugin-svelte@6.2.1`

**Configuration**:

- Created `svelte.config.js`: Vite preprocessing
- Updated `vite.config.ts`:
  - Added Svelte plugin for test mode
  - Set `resolve.conditions: ['browser']` for client-side Svelte
- Added `afterEach(cleanup)` to Svelte tests

### 5. Updated Exports

- `lib/Svelte/index.ts`: Added Button export
- Maintained backward compatibility

### 6. Created CLAUDE.md

Project documentation for future Claude Code instances with commands, architecture, and patterns.

## Test Results

- **Total tests**: 105 (90 React + 15 Svelte)
- **All passing**: ✅
- **Coverage**:
  - React Button: 100% (statements, branches, functions, lines)
  - Svelte Button: 100% (statements, branches, functions, lines)
  - globals/Button: 100% (statements, branches, functions, lines)

## Key Patterns

1. **Shared logic in globals**: Types, constants, utility functions
2. **ts-pattern for exhaustive checking**: Action priority encoded in match order
3. **Framework-specific rendering**: Each implements same interface differently
4. **Type safety**: Omit conflicting HTML attributes, extend base props
5. **Svelte 5 patterns**: `$props()`, `$derived`, Snippet support

## Files Modified

**Created**:

- `lib/globals/Button/Button.ts`
- `lib/globals/Button/Button.util.ts`
- `lib/globals/Button/index.ts`
- `lib/Svelte/Button/Button.svelte`
- `lib/Svelte/Button/Button.test.ts`
- `lib/Svelte/Button/index.ts`
- `svelte.config.js`
- `CLAUDE.md`

**Modified**:

- `lib/React/Button/Button.tsx`
- `lib/React/Button/Button.test.tsx`
- `lib/Svelte/index.ts`
- `vite.config.ts`
- `package.json` (deps)
- `pnpm-lock.yaml`

**Deleted**:

- `lib/React/Button/Button.styles.ts`
- `lib/React/Button/Button.utils.ts`

## Issues Noted

1. **ESLint error in generated file**: `.svelte-kit/__package__/Svelte/Typography/Typography.svelte.d.ts` has `@typescript-eslint/no-empty-object-type` error. Consider adding `.svelte-kit` to `.gitignore` as it's build artifacts.
2. **Pre-existing**: TypeScript casing warning for `lib/react.ts` vs `lib/React/` on case-insensitive filesystems.

## Next Steps (Suggested)

- Apply same pattern to Card and Paper components
- Add `.svelte-kit` to `.gitignore`
- Run `pnpm build:lib` to generate fresh distributions
- Consider Storybook stories for Svelte components
