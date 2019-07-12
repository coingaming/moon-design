const merge = require('webpack-merge');
const common = require('../../../../.config/webpack/common');

const client = {
  entry: {
    main: 'client.tsx',
  },
};

module.exports = merge(common, client);
