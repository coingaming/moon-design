const base = require('./jest.config.base.js');

module.exports = {
  ...base,
  projects: ['<rootDir>/design/*/jest.config.js'],
};
