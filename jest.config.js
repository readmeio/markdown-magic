const path = require('path');

module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!jest.config.js', '!**/coverage/lcov-report/**'],
  coveragePathIgnorePatterns: ['<rootDir>/__tests__'],

  // per https://github.com/facebook/jest/issues/9396#issuecomment-573328488
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  coverageThreshold: {
    global: {
      branches: 88,
      functions: 88,
      lines: 90,
      statements: 90,
    },
  },
  setupFiles: [path.join(__dirname, '/__tests__/lib/enzyme')],
  testMatch: ['**/__tests__/**/(*.)+test.[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': path.join(__dirname, '/__tests__/lib/babel-jest'),
  },
  transformIgnorePatterns: ['/node_modules/(?!@readme/syntax-highlighter).+\\.js$'],
};
