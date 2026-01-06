import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import jestDom from 'eslint-plugin-jest-dom';
import storybook from 'eslint-plugin-storybook';
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));
const prettierignorePath = fileURLToPath(new URL('./.prettierignore', import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(prettierignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  reactRefresh.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  jestDom.configs['flat/recommended'],
  storybook.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,
);
