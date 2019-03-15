const merge = require('webpack-merge');
const common = require('./common');

const client = {
  entry: {
    main: 'client.tsx',
  },
};

module.exports = merge(common, client);
