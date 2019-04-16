const package = require('./package.json');
const base = require('../../.config/jest/jest.config.base.js');

module.exports = {
  ...base,
  roots: ['<rootDir>/portals/user-portal-components'],
  name: package.name,
  displayName: package.name,
};
