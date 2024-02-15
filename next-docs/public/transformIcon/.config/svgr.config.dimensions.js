const template = require('./templates/template_tw.svgrrc.js');
const dimensions = require('./transform/dimensions');

module.exports = {
  svgProps: { xmlns: 'http://www.w3.org/2000/svg' },
  replaceAttrValues: { '#DE1E7E': 'currentColor' },
  template,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  jsx: {
    babelConfig: {
      plugins: [dimensions],
    },
  },
  typescript: true,
};
