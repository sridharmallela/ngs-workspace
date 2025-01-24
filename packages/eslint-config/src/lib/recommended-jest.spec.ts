import * as testCandidate from './recommended-jest';

import { jestConfig } from './rules/jest';

describe('Recommended Jest ---', () => {
  test('should test recommended Jest Rules', () => {
    expect(testCandidate).toBeDefined();
    expect((testCandidate.default as any).env).toEqual({
      'jest/globals': true
    });
    expect((testCandidate.default as any).extends).toBeDefined();
    expect((testCandidate.default as any).extends[0]).toEqual(
      'plugin:jest/recommended'
    );
    expect((testCandidate.default as any).extends[1]).toEqual(
      'plugin:jest-formatting/recommended'
    );

    expect((testCandidate.default as any).rules).toEqual({ ...jestConfig });
  });
});
