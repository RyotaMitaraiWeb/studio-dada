import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  ...eslintPluginAstro.configs['all'],
  js.configs.recommended,
  {
    rules: {
      'astro/no-set-html-directive': 'error',
      'astro/semi': 'error',
      '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true }],
      '@stylistic/semi': 'error',
      'sx-one-expression-per-line': 'off',
      '@stylistic/member-delimiter-style': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/max-len': ['error', { code: 80, ignoreStrings: true }],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    },
    plugins: {
      '@stylistic': stylistic,
    },
  },
];
