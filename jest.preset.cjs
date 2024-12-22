const { default: isCI } = require('is-ci');
const { default: nxPreset } = require('@nx/jest/preset');

const esModules = ['@commitlint', 'prettier'].join('|');

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  coverageReporters: isCI
    ? ['json', 'text', 'lcovonly', 'cobertura']
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
  transformIgnorePatterns: [`node_modules/(?!${esModules}|.*\\.mjs)`]
};
