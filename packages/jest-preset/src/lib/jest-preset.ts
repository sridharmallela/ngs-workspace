import isCI from 'is-ci';

const esModules = ['@commitlint', 'prettier'].join('|');

const JEST_CONFIG_SMALLELA = {
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

export { JEST_CONFIG_SMALLELA };
