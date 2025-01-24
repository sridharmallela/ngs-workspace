import { errorsConfig, errorsIgnore } from './errors';

describe('Error Rules ---', () => {
  let testCandidate: any;

  describe('should test errorsConfig ---', () => {
    beforeAll(() => {
      expect(errorsConfig).toBeDefined();
      testCandidate = errorsConfig;
      expect(testCandidate).toBeDefined();
    });

    test.each([
      'no-array-constructor',
      'no-async-promise-executor',
      'no-bitwise',
      'no-caller',
      'no-const-assign',
      'no-constant-condition',
      'no-constructor-return',
      'no-control-regex',
      'no-debugger',
      'no-dupe-args',
      'no-dupe-class-members',
      'no-dupe-keys',
      'no-duplicate-case',
      'no-empty',
      'no-empty-pattern',
      'no-eval',
      'no-extend-native',
      'no-extra-bind',
      'no-extra-label',
      'no-extra-semi',
      'no-fallthrough',
      'no-floating-decimal',
      'no-implied-eval',
      'no-irregular-whitespace',
      'no-iterator',
      'no-lone-blocks',
      'no-mixed-spaces-and-tabs',
      'no-new',
      'no-new-func',
      'no-new-object',
      'no-new-symbol',
      'no-new-wrappers',
      'no-octal',
      'no-octal-escape',
      'no-proto',
      'no-redeclare',
      'no-regex-spaces',
      'no-return-await',
      'no-self-compare',
      'no-sequences',
      'no-spaced-func',
      'no-tabs',
      'no-throw-literal',
      'no-undef',
      'no-undef-init',
      'no-unexpected-multiline',
      'no-unreachable',
      'no-unsafe-finally',
      'no-unsafe-negation',
      'no-unused-labels',
      'no-useless-catch',
      'no-useless-concat',
      'no-useless-constructor',
      'no-useless-escape',
      'no-useless-return',
      'no-var',
      'no-whitespace-before-property',
      'no-with'
    ])('for "%s"', rule => {
      expect(testCandidate[rule]).toEqual('error');
    });

    test.each([
      'no-case-declarations',
      'no-div-regex',
      'no-duplicate-imports',
      'no-eq-null',
      'no-implicit-globals',
      'no-invalid-this',
      'no-native-reassign',
      'no-prototype-builtins',
      'no-unmodified-loop-condition',
      'no-useless-call'
    ])('for "%s"', rule => {
      expect(testCandidate[rule]).toEqual('off');
    });

    test.each([
      {
        rule: 'no-console',
        opts: { allow: ['log', 'warn', 'error'] }
      },
      {
        rule: 'no-empty-function',
        opts: { allow: ['arrowFunctions', 'functions', 'methods'] }
      },
      { rule: 'no-global-assign', opts: { exceptions: [] } },
      {
        rule: 'no-implicit-coercion',
        opts: { allow: [], boolean: false, number: true, string: true },
        sev: 'off'
      },
      { rule: 'no-labels', opts: { allowLoop: false, allowSwitch: false } },
      {
        rule: 'no-magic-numbers',
        opts: {
          detectObjects: false,
          enforceConst: true,
          ignore: [],
          ignoreArrayIndexes: true
        },
        sev: 'off'
      },
      {
        rule: 'no-mixed-operators',
        opts: {
          allowSamePrecedence: false,
          groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['/', '*'],
            ['&', '|', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!=='],
            ['&&', '||']
          ]
        }
      },
      { rule: 'no-multi-spaces', opts: { ignoreEOLComments: false } },
      {
        rule: 'no-multiple-empty-lines',
        opts: { max: 1, maxBOF: 0, maxEOF: 1 }
      },
      { rule: 'no-return-assign', opts: 'except-parens' },
      { rule: 'no-self-assign', opts: { props: true } },
      {
        rule: 'no-trailing-spaces',
        opts: { ignoreComments: false, skipBlankLines: false }
      },
      { rule: 'no-unneeded-ternary', opts: { defaultAssignment: false } },
      {
        rule: 'no-unused-vars',
        opts: { args: 'after-used', ignoreRestSiblings: true, vars: 'all' }
      },
      {
        rule: 'no-use-before-define',
        opts: { classes: true, functions: false, variables: true }
      },
      {
        rule: 'no-warning-comments',
        opts: { location: 'start', terms: ['todo', 'fixme', 'xxx'] },
        sev: 'off'
      }
    ])('for "$rule"', ({ rule, opts, sev }) => {
      expect(testCandidate[rule]).toBeDefined();
      expect(testCandidate[rule][0]).toEqual(sev ?? 'error');
      expect(testCandidate[rule][1]).toEqual(opts);
    });
  });

  describe('should test errorsIgnore ---', () => {
    test.each([
      'func-names',
      'no-console',
      'no-debugger',
      'no-empty-function',
      'no-new',
      'no-restricted-imports',
      'no-return-await',
      'no-throw-literal',
      'no-undef'
    ])('for "%s"', (rule: string) => {
      expect(errorsIgnore[rule]).toEqual('off');
    });
  });
});
