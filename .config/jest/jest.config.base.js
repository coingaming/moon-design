module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-emotion'],
  setupTestFrameworkScriptFile: './.config/jest/setup.ts'
};
