jest.mock('is-ci', () => false);

import { JEST_CONFIG_SMALLELA } from './preset-rules';

describe('Prettier Config ---', () => {
  test('for valid', () => {
    expect(JEST_CONFIG_SMALLELA).toBeDefined();
    expect(JEST_CONFIG_SMALLELA).toEqual({
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
      coverageReporters: ['html', 'json', 'text'],
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
      moduleFileExtensions: ['js', 'cjs', 'mjs', 'json', 'ts'],
      slowTestThreshold: 5,
      testEnvironment: 'node',
      testMatch: ['<rootDir>/**/?(*.)+(spec|test|e2e).[tj]s?(x)'],
      testPathIgnorePatterns: [
        '/coverage/',
        '/dist/',
        '/generated/',
        '/node_modules/'
      ],
      testTimeout: 20000,
      transform: {
        '^.+\\.[tj]s$': 'ts-jest'
      },
      transformIgnorePatterns: [
        'node_modules/(?!@commitlint|prettier|.*\\.mjs)'
      ],
      verbose: true
    });
  });
});
