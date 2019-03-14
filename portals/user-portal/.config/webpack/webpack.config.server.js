const merge = require('webpack-merge');
const common = require('./common');

const server = {
  target: 'node',
  entry: {
    server: 'server/index.tsx',
  },
};

module.exports = merge(common, server);
