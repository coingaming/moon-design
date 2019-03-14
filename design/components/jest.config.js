const package = require('./package.json');
const base = require('../../.config/jest/jest.config.base.js');

module.exports = {
  ...base,
  roots: ['<rootDir>/design/components'],
  name: package.name,
  displayName: package.name,
};
