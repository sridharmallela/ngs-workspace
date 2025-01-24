import { jestConfig } from './jest';

describe('JEST ---', () => {
  let testCandidate: any;

  beforeAll(() => {
    expect(jestConfig).toBeDefined();
    testCandidate = jestConfig;
    expect(testCandidate).toBeDefined();
  });

  test.each([
    'jest/max-expects',
    'jest/no-conditional-expect',
    'jest/no-conditional-in-test',
    'jest/no-hooks',
    'jest/no-standalone-expect',
    'jest/no-untyped-mock-factory',
    'jest/padding-around-all',
    'jest/padding-around-expect-groups',
    'jest/prefer-called-with',
    'jest/prefer-expect-assertions',
    'jest/prefer-importing-jest-globals',
    'jest/prefer-lowercase-title',
    'jest/prefer-strict-equal',
    'jest/prefer-to-be'
  ])('should test rule "%s"', rule => {
    expect(testCandidate[rule]).toEqual('off');
  });

  test.each(['jest/no-commented-out-tests', 'jest/no-duplicate-hooks'])(
    'should test rule "%s"',
    rule => {
      expect(testCandidate[rule]).toEqual('warn');
    }
  );

  test.each([
    'jest/no-alias-methods',
    'jest/no-confusing-set-timeout',
    'jest/no-deprecated-functions',
    'jest/no-disabled-tests',
    'jest/no-done-callback',
    'jest/no-export',
    'jest/no-focused-tests',
    'jest/no-identical-title',
    'jest/no-interpolation-in-snapshots',
    'jest/no-jasmine-globals',
    'jest/no-large-snapshots',
    'jest/no-mocks-import',
    'jest/no-restricted-jest-methods',
    'jest/no-restricted-matchers',
    'jest/no-test-prefixes',
    'jest/no-test-return-statement',
    'jest/padding-around-after-all-blocks',
    'jest/padding-around-after-each-blocks',
    'jest/padding-around-before-all-blocks',
    'jest/padding-around-before-each-blocks',
    'jest/padding-around-describe-blocks',
    'jest/padding-around-test-blocks',
    'jest/prefer-comparison-matcher',
    'jest/prefer-each',
    'jest/prefer-equality-matcher',
    'jest/prefer-expect-resolves',
    'jest/prefer-hooks-in-order',
    'jest/prefer-hooks-on-top',
    'jest/prefer-jest-mocked',
    'jest/prefer-mock-promise-shorthand',
    'jest/prefer-snapshot-hint',
    'jest/prefer-spy-on',
    'jest/prefer-to-contain',
    'jest/prefer-to-have-length',
    'jest/prefer-todo',
    'jest/require-hook',
    'jest/require-to-throw-message',
    'jest/require-top-level-describe',
    'jest/valid-describe-callback',
    'jest/valid-expect',
    'jest/valid-expect-in-promise',
    'jest/valid-title'
  ])('should test rule "%s"', rule => {
    expect(testCandidate[rule]).toEqual('error');
  });

  test.each([
    {
      rule: 'jest/consistent-test-it',
      opts: { fn: 'test', withinDescribe: 'test' }
    },
    {
      rule: 'jest/expect-expect',
      opts: {
        assertFunctionNames: ['expect*', 'request.**.expect']
      }
    },
    { rule: 'jest/max-nested-describe', opts: { max: 6 } }
  ])('should test rule "$rule"', ({ rule, opts }) => {
    expect(testCandidate[rule]).toBeDefined();
    expect(testCandidate[rule][0]).toEqual('error');
    expect(testCandidate[rule][1]).toEqual(opts);
  });
});
