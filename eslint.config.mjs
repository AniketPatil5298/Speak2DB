import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script', // For CommonJS-style files
      globals: {
        ...globals.node, // Enables `require`, `module`, etc.
        ...globals.browser,
      },
    },
    rules: {
      'no-undef': 'off', // optional, if `require` is flagged
      'no-var': 'off', // optional, if using var with require
    },
  },
]);
