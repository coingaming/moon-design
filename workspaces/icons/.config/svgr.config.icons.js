const base = require('./svgr.config.base.js');
const template = require('./templates/svgr.template.icons.js');

module.exports = {
  ...base,
  icon: true,
  template,
};
