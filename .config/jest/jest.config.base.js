module.exports = {
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.cache/', '/lib/'],
  transform: {
    '^.+\\.[t|j]sx?$': '<rootDir>/.config/jest/preprocess.js',
  },
};
