module.exports = {
  extends: ['@heathmont/eslint-config-sportsbet'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'import/first': 'off', // Unnecessarily compresses JSX comment
    //
    // @TODO Implementation
    //
    'no-unused-vars': 'off',
    'import/no-cycle': 'off',
    'no-unused-expressions': 'off', // Investigate `jsx;` alternative
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // @TODO Implementation - Remove
        '@typescript-eslint/no-unused-vars': 'off',
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
