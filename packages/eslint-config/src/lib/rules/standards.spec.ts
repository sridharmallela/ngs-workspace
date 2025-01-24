import { standardsConfig, standardsIgnore } from './standards';

describe('JS Doc ---', () => {
  describe('should test standardsConfig ---', () => {
    let testCandidate: any;

    beforeAll(() => {
      expect(standardsConfig).toBeDefined();
      testCandidate = standardsConfig;
      expect(testCandidate).toBeDefined();
    });

    test.each([
      'prefer-named-capture-group',
      'require-await',
      'require-unicode-regexp',
      'valid-jsdoc'
    ])('for"%s"', rule => {
      expect(testCandidate[rule]).toEqual('off');
    });

    test.each([
      'accessor-pairs',
      'block-scoped-var',
      'guard-for-in',
      'prefer-numeric-literals',
      'prefer-spread',
      'vars-on-top'
    ])('for"%s"', rule => {
      expect(testCandidate[rule]).toEqual('error');
    });

    test.each([
      {
        rule: 'arrow-body-style',
        opts: 'as-needed',
        extra: { requireReturnForObjectLiteral: true }
      },
      { rule: 'eqeqeq', extra: { null: 'ignore' } },
      {
        rule: 'object-shorthand',
        extra: { avoidQuotes: true, ignoreConstructors: false }
      }
    ])('for"$rule"', ({ rule, opts, extra }) => {
      expect(testCandidate[rule]).toBeDefined();
      expect(testCandidate[rule][0]).toEqual('error');
      expect(testCandidate[rule][1]).toEqual(opts ?? 'always');
      expect(testCandidate[rule][2]).toEqual(extra);
    });

    test.each([
      { rule: 'default-case', opts: { commentPattern: '^no default$' } },
      { rule: 'getter-return', opts: { allowImplicit: true } },
      { rule: 'max-classes-per-file', opts: 1 },
      {
        rule: 'object-property-newline',
        opts: { allowAllPropertiesOnSameLine: true }
      },
      { rule: 'one-var', opts: 'never' },
      { rule: 'one-var-declaration-per-line' },
      { rule: 'operator-assignment' },
      {
        rule: 'prefer-arrow-callback',
        opts: { allowNamedFunctions: true, allowUnboundThis: true }
      },
      {
        rule: 'prefer-const',
        opts: { destructuring: 'any', ignoreReadBeforeAssign: true }
      },
      {
        rule: 'prefer-destructuring',
        opts: {
          AssignmentExpression: { array: false, object: false },
          VariableDeclarator: { array: false, object: true }
        }
      },
      { rule: 'radix', opts: 'as-needed' },
      { rule: 'semi' },
      {
        rule: 'sort-imports',
        opts: {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }
      },
      { rule: 'valid-typeof', opts: { requireStringLiterals: true } },
      { rule: 'wrap-iife', opts: 'outside' }
    ])('for"$rule"', ({ rule, opts }) => {
      expect(testCandidate[rule]).toBeDefined();
      expect(testCandidate[rule][0]).toEqual('error');
      expect(testCandidate[rule][1]).toEqual(opts ?? 'always');
    });
  });

  describe('should test standardsIgnore ---', () => {
    test.each(['accessor-pairs', 'max-classes-per-file'])('for "%s"', rule => {
      expect(standardsIgnore[rule]).toEqual('off');
    });
  });
});
