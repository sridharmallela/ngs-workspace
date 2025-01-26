import isCI from 'is-ci';

const esModules = ['@commitlint', 'prettier'].join('|');

const JEST_CONFIG = {
  collectCoverage: true,
  collectCoverageFrom: '<rootDir>/**/*.[jt]s?(x)',
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/coverage/',
    '/dist/',
    '/e2e/',
    '/generated/',
    '/node_modules/',
    '(.*)\\.d.ts',
    'index.[jt]s',
    'main.[jt]s',
    'jest.config.ts',
    'test-setup.ts'
  ],
  coverageReporters: isCI
    ? /* istanbul ignore next */
      ['json', 'text', 'lcovonly', 'cobertura']
    : ['html', 'json', 'text'],
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
  moduleFileExtensions: ['cjs', 'cts', 'js', 'json', 'mjs', 'mts', 'ts'],
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
  transform: {
    '^.+\\.[tj]s$': 'ts-jest'
  },
  transformIgnorePatterns: [`node_modules/(?!${esModules}|.*\\.mjs)`],
  verbose: true
};

export { JEST_CONFIG };
