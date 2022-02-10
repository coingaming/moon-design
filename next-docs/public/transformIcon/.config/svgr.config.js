const template = require('./templates/template.svgrrc.js');
const dimensions = require('./transform/dimensions');

module.exports = {
  svgProps: { xmlns: 'http://www.w3.org/2000/svg' },
  replaceAttrValues: { '#DE1E7E': 'currentColor' },
  template,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  typescript: true,
};
