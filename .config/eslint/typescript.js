module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  settings: {
    // Extra settings to support TypeScript with the base (airbnb) config
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'], // Allow JSX in `.tsx`
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off', // Not compatible with `type`
        'import/named': 'off', // Not compatible with exported `type`
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        '@typescript-eslint/prefer-interface': 'off', // We're not fussy about `interface` vs `type`
      },
    },
  ],
};
