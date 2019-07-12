const path = require('path');
const merge = require('webpack-merge');
const common = require('../../../../.config/webpack/common');

module.exports = merge(common, {
  context: path.join(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
  },
});
