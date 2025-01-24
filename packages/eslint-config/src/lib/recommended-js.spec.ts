import * as testCandidate from './recommended-js';

import { errorsConfig, errorsIgnore } from './rules/errors';
import { formatterConfig, formatterIgnore } from './rules/formatters';
import { standardsConfig, standardsIgnore } from './rules/standards';

import { ignoresConfigAndTests } from './rules/matchers';

describe('Recommended Rules ---', () => {
  test('should test recommended JS Rules', () => {
    expect(testCandidate).toBeDefined();
    expect((testCandidate.default as any).rules).toEqual({
      ...standardsConfig,
      ...errorsConfig,
      ...formatterConfig
    });
    expect((testCandidate.default as any).overrides).toBeDefined();
    expect((testCandidate.default as any).overrides).toBeDefined();
    expect((testCandidate.default as any).overrides.length).toEqual(1);
    expect((testCandidate.default as any).overrides[0]).toBeDefined();
    expect((testCandidate.default as any).overrides[0].files).toEqual(
      ignoresConfigAndTests
    );
    expect((testCandidate.default as any).overrides[0].rules).toEqual({
      ...standardsIgnore,
      ...errorsIgnore,
      ...formatterIgnore
    });
    expect((testCandidate.default as any).extends).toEqual([
      'eslint:recommended'
    ]);
  });
});
