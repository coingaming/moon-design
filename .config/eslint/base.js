module.exports = {
  extends: ['eslint-config-airbnb'].map(require.resolve),
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'implicit-arrow-linebreak': 'off', // https://github.com/prettier/prettier-eslint/issues/182
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off', // We prefer named
    'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'react/no-unescaped-entities': 'off', // We're not too fussed about HTML codes.
    'react/jsx-indent': 'off', // Disable for Prettier
    'react/jsx-closing-tag-location': 'off', // Disable for Prettier
    'react/jsx-wrap-multilines': 'off', // Disable for Prettier
    'react/jsx-one-expression-per-line': 'off', // Disable for Prettier
    'jsx-a11y/label-has-for': 'off', // Deprecated - https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
  },
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx', 'test.ts', '*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
