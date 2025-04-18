import { errorsConfig, errorsIgnore } from './rules/errors';
import { formatterConfig, formatterIgnore } from './rules/formatters';
import { importsConfig, importsIgnore } from './rules/imports';
import { standardsConfig, standardsIgnore } from './rules/standards';
import { tsConfig, tsIgnore } from './rules/typescript';

import { ignoresConfigAndTests } from './rules/matchers';
import testCandidate from './recommended';

describe('Recommended Typescript ---', () => {
  test('should test recommended Typescript Rules', () => {
    expect(testCandidate).toBeDefined();
    expect((testCandidate as any).rules).toEqual({
      ...standardsConfig,
      ...errorsConfig,
      ...formatterConfig,
      ...tsConfig,
      ...importsConfig
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
      ...formatterIgnore,
      ...tsIgnore,
      ...importsIgnore
    });
    expect((testCandidate as any).extends).toEqual([
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript'
    ]);
  });
});
