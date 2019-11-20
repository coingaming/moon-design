module.exports = {
  extends: ['@heathmont/eslint-config-sportsbet'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    //
    // @TODO Implementation
    //
    'import/first': 'off', // Unnecessarily compresses JSX comment
    'import/no-cycle': 'off',
    'import/export': 'off', // We have both default export as well as named ones for now
    'no-unused-expressions': 'off', // Investigate `jsx;` alternative
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  overrides: [
    {
      /** Disable specific rules for SVGR config */
      files: ['packages/icons/src/config/*'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
    /**
     * We use TypeScript instead to check for this, as it doesn't support
     * exported named types.
     */
    {
      files: ['index.ts', 'index.tsx'],
      rules: {
        'import/export': 0,
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
