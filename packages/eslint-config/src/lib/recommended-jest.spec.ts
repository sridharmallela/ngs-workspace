import { jestConfig } from './rules/jest';
import testCandidate from './recommended-jest';

describe('Recommended Jest ---', () => {
  test('should test recommended Jest Rules', () => {
    expect(testCandidate).toBeDefined();
    expect((testCandidate as any).env).toEqual({
      'jest/globals': true
    });
    expect((testCandidate as any).extends).toBeDefined();
    expect((testCandidate as any).extends[0]).toEqual(
      'plugin:jest/recommended'
    );
    expect((testCandidate as any).extends[1]).toEqual(
      'plugin:jest-formatting/recommended'
    );

    expect((testCandidate as any).rules).toEqual({ ...jestConfig });
  });
});
