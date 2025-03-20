import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import packageJson from 'eslint-plugin-package-json';
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['dist', '**/*.config.{js,cjs,mjs,ts,cts,mts}'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/consistent-type-exports': 'error',
      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            named: true,
            direct: true,
          },
        },
      ],
    },
  },
  packageJson.configs.recommended,
);
