jest.mock('is-ci', () => false);

import { JEST_CONFIG_SMALLELA } from './preset-rules.js';

describe('Prettier Config ---', () => {
  test('for valid', () => {
    expect(JEST_CONFIG_SMALLELA).toBeDefined();
    expect(JEST_CONFIG_SMALLELA).toEqual({
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
      coverageReporters: ['text', 'html'],
      coverageThreshold: {
        '**/*': {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
        },
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
        }
      },
      errorOnDeprecated: true,
      slowTestThreshold: 5,
      testEnvironment: 'node',
      testMatch: ['**/?(*.)+(spec|test|e2e).[tj]s?(x)'],
      testPathIgnorePatterns: [
        '/coverage/',
        '/dist/',
        '/generated/',
        '/node_modules/'
      ],
      testTimeout: 20000,
      transformIgnorePatterns: [
        'node_modules/(?!@commitlint|prettier|.*\\.mjs)'
      ],
      verbose: true
    });
  });
});
