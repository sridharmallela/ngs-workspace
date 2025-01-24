import { errorsConfig, errorsIgnore } from './rules/errors';
import { formatterConfig, formatterIgnore } from './rules/formatters';
import { standardsConfig, standardsIgnore } from './rules/standards';

import { ignoresConfigAndTests } from './rules/matchers';
import testCandidate from './recommended-js';

describe('Recommended Rules ---', () => {
  test('should test recommended JS Rules', () => {
    expect(testCandidate).toBeDefined();
    expect((testCandidate as any).rules).toEqual({
      ...standardsConfig,
      ...errorsConfig,
      ...formatterConfig
    });
    expect((testCandidate as any).overrides).toBeDefined();
    expect((testCandidate as any).overrides).toBeDefined();
    expect((testCandidate as any).overrides.length).toEqual(1);
    expect((testCandidate as any).overrides[0]).toBeDefined();
    expect((testCandidate as any).overrides[0].files).toEqual(
      ignoresConfigAndTests
    );
    expect((testCandidate as any).overrides[0].rules).toEqual({
      ...standardsIgnore,
      ...errorsIgnore,
      ...formatterIgnore
    });
    expect((testCandidate as any).extends).toEqual(['eslint:recommended']);
  });
});
