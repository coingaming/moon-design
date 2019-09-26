const base = require('../../../../.config/svgr/svgr.config.base.js');

const template = require('./svgr.template');

module.exports = {
  ...base,
  icon: true,
  template,
};
