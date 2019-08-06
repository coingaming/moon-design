const base = require('../../.config/jest/jest.config.base.js');

const package = require('./package.json');

module.exports = {
  ...base,
  roots: ['<rootDir>/design/objects'],
  name: package.name,
  displayName: package.name,
};
