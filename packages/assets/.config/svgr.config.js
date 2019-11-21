const config = require('../../../.config/svgr/svgr.config.js');
const dimensions = require('../../../.config/svgr/transform/dimensions');

module.exports = {
  ...config,
  plugins: ['@svgr/plugin-jsx'],
  jsx: {
    babelConfig: {
      plugins: [dimensions],
    },
  },
};

