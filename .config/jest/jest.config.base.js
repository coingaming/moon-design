module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.cache/', '/lib/'],
  globals: {
    'ts-jest': {
      tsConfig: './.config/ts/tsconfig.base.json',
    },
  },
};
