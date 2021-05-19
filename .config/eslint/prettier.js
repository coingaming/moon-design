const prettierConfig = require('@heathmont/prettier-config-sportsbet');

module.exports = {
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
