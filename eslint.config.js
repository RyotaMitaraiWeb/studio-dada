import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
    ...eslintPluginAstro.configs['all'],
    stylistic.configs['all-flat'],
    js.configs.recommended,
    {
        rules: {
            'astro/no-set-html-directive': 'error',
            'astro/semi': 'error',
            '@stylistic/quotes': [
                'error',
                'single',
                {allowTemplateLiterals: true}
            ],
            'jsx-one-expression-per-line': 'off',
            '@stylistic/eol-last': 'error',
            '@stylistic/max-len': [
                'error',
                {code: 80,
                    ignoreStrings: true}
            ],
            '@stylistic/quote-props': [
                'error',
                'consistent-as-needed'
            ]
        },
        plugins: {
            '@stylistic': stylistic
        }
    }
];
