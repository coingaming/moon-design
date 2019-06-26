module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off', // We prefer named
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'], // Allow JSX in `.tsx`
      },
    ],
    'react/jsx-one-expression-per-line': 'off', // Disable for Prettier
    'jsx-a11y/label-has-for': 'off', // Deprecated - https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    //
    // @TODO Implementation
    //
    'import/first': 'off',
    'import/no-cycle': 'off',
    'import/no-named-default': 'off',
    'import/no-mutable-exports': 'off',
    'import/order': 'off',
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-key': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  settings: {
    // Extra settings to support TypeScript with the airbnb config
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        //
        // @TODO Implementation - Replace [1] with [2]
        //
        '@typescript-eslint/no-unused-vars': 'off', // [1]
        // '@typescript-eslint/no-unused-vars': [2, { args: 'none' }], // [2]
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
