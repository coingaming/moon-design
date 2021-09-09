const path = require('path');

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    //
    // @TODO Implementation
    //
    'import/first': 'off', // Unnecessarily compresses JSX comment
    // 'import/no-cycle': 'off',
    'import/export': 'off', // We have both default export as well as named ones for now
    'no-unused-expressions': 'off', // Investigate `jsx;` alternative
    'no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // Prevents a bug https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
  },
  overrides: [
    {
      /** Disable specific rules for SVGR config */
      files: ['packages/icons/src/config/*'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
