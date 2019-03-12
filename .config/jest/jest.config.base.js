module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-emotion'],
  setupFilesAfterEnv: ['./.config/jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.cache/', '/lib/'],
  globals: {
    'ts-jest': {
      tsConfig: './.config/ts/tsconfig.base.json',
    },
  },
};
