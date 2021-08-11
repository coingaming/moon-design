const base = require('./svgr.config.base');
const template = require('./templates/svgr.template.js');
const dimensions = require('./transform/dimensions');

module.exports = {
  ...base,
  template,
  plugins: ['@svgr/plugin-jsx'],
  jsx: {
    babelConfig: {
      plugins: [dimensions],
    },
  },
};
