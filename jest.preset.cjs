const { default: nxPreset } = require('@nx/jest/preset');
const { default: isCI } = require('is-ci');

const esModules = ['@commitlint', 'prettier'].join('|');

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  collectCoverageFrom: '**/*.[jt]s?(x)',
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/coverage/',
    '/dist/',
    '/e2e/',
    '/generated/',
    '/node_modules/',
    '(.*)\\.d.ts',
    'index.[jt]s',
    'jest.config.ts',
    'test-setup.ts'
  ],
  coverageReporters: isCI
    ? /* istanbul ignore next */
      ['json', 'text', 'lcovonly', 'cobertura']
    : ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    '**/*': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  errorOnDeprecated: true,
  slowTestThreshold: 5,
  testTimeout: 20000,
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test|e2e).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '/coverage/',
    '/dist/',
    '/generated/',
    '/node_modules/'
  ],
  transformIgnorePatterns: [`node_modules/(?!${esModules}|.*\\.mjs)`],
  verbose: true
};
