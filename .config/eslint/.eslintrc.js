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
    'no-unused-expressions': 'off', // Investigate `jsx;` alternative
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  overrides: [
    {
      /** Disable specific rules for SVGR config */
      files: ['design/icons/src/config/*'],
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
