import { tsConfig, tsIgnore } from './typescript';

describe('JS Doc ---', () => {
  describe('should test tsConfig ---', () => {
    let testCandidate: any;

    beforeAll(() => {
      expect(tsConfig).toBeDefined();
      testCandidate = tsConfig;
      expect(testCandidate).toBeDefined();
    });

    test.each([
      '@typescript-eslint/array-type',
      '@typescript-eslint/ban-ts-comment',
      '@typescript-eslint/ban-tslint-comment',
      '@typescript-eslint/consistent-type-definitions',
      '@typescript-eslint/consistent-type-imports',
      '@typescript-eslint/no-import-type-side-effects',
      '@typescript-eslint/no-inferrable-types',
      '@typescript-eslint/no-require-imports',
      '@typescript-eslint/no-shadow',
      '@typescript-eslint/no-unused-expressions',
      '@typescript-eslint/no-useless-constructor',
      '@typescript-eslint/no-var-requires',
      '@typescript-eslint/prefer-function-type',
      '@typescript-eslint/unified-signatures'
    ])('should test rule "%s"', rule => {
      expect(testCandidate[rule]).toEqual('error');
    });

    test.each([
      {
        rule: '@typescript-eslint/no-unused-vars',
        opts: { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }
      },
      {
        rule: '@typescript-eslint/triple-slash-reference',
        opts: { lib: 'never', path: 'never', types: 'never' }
      },
      {
        rule: '@typescript-eslint/naming-convention',
        opts: {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid'
        }
      }
    ])('for"$rule"', ({ rule, opts }) => {
      expect(testCandidate[rule]).toBeDefined();
      expect(testCandidate[rule][0]).toEqual('error');
      expect(testCandidate[rule][1]).toEqual(opts);
    });
  });

  describe('should test tsIgnore ---', () => {
    test.each([
      '@typescript-eslint/ban-types',
      '@typescript-eslint/explicit-function-return-type',
      '@typescript-eslint/explicit-member-accessibility',
      '@typescript-eslint/explicit-module-boundary-types',
      '@typescript-eslint/no-empty-function',
      '@typescript-eslint/no-explicit-any',
      '@typescript-eslint/no-inferrable-types',
      '@typescript-eslint/no-non-null-assertion',
      '@typescript-eslint/no-unused-expressions',
      '@typescript-eslint/no-unused-vars',
      '@typescript-eslint/no-var-requires'
    ])('for "%s"', rule => {
      expect(tsIgnore[rule]).toEqual('off');
    });
  });
});
