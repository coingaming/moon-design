module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-emotion'],
  setupFilesAfterEnv: ['./.config/jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  globals: {
    'ts-jest': {
      tsConfig: 'packages/tsconfig.json',
    },
  },
};
