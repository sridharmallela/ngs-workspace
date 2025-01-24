import { formatterConfig, formatterIgnore } from './formatters';

describe('Formatter Rules ---', () => {
  let testCandidate: any;

  describe('should test formatterConfig ---', () => {
    beforeAll(() => {
      expect(formatterConfig).toBeDefined();
      testCandidate = formatterConfig;
      expect(testCandidate).toBeDefined();
    });

    test.each([
      'new-parens',
      'space-before-blocks',
      'space-infix-ops',
      'template-curly-spacing'
    ])('for"%s"', rule => {
      expect(testCandidate[rule]).toEqual('error');
    });

    test.each(['func-names'])('for"%s"', rule => {
      expect(testCandidate[rule]).toEqual('warn');
    });

    test.each(['lines-around-comment'])('for"%s"', rule => {
      expect(testCandidate[rule]).toEqual('off');
    });

    test.each([
      { rule: 'array-bracket-spacing' },
      { rule: 'arrow-spacing', opts: { after: true, before: true } },
      { rule: 'block-spacing', opts: 'always' },
      {
        rule: 'camelcase',
        opts: { ignoreDestructuring: false, properties: 'never' }
      },
      { rule: 'comma-spacing', opts: { after: true, before: false } },
      { rule: 'computed-property-spacing' },
      { rule: 'curly', opts: 'multi-line' },
      { rule: 'dot-location', opts: 'property' },
      { rule: 'eol-last', opts: 'always' },
      { rule: 'func-call-spacing' },
      { rule: 'key-spacing', opts: { afterColon: true, beforeColon: false } },
      {
        rule: 'keyword-spacing',
        opts: {
          after: true,
          before: true,
          overrides: {
            case: { after: true },
            return: { after: true },
            throw: { after: true }
          }
        }
      },
      {
        rule: 'line-comment-position',
        opts: { applyDefaultPatterns: true, position: 'above' }
      },
      {
        rule: 'lines-around-directive',
        opts: { after: 'always', before: 'always' }
      },
      { rule: 'max-statements-per-line', opts: { max: 1 } },
      { rule: 'multiline-comment-style', opts: 'separate-lines' },
      {
        rule: 'object-curly-newline',
        opts: {
          ExportDeclaration: {
            consistent: true,
            minProperties: 8,
            multiline: true
          },
          ImportDeclaration: {
            consistent: true,
            minProperties: 8,
            multiline: true
          },
          ObjectExpression: {
            consistent: true,
            minProperties: 12,
            multiline: true
          },
          ObjectPattern: {
            consistent: true,
            minProperties: 12,
            multiline: true
          }
        }
      },
      { rule: 'object-curly-spacing', opts: 'always' },
      {
        rule: 'padding-line-between-statements',
        opts: { blankLine: 'any', next: 'return', prev: '*' }
      },
      { rule: 'semi-spacing', opts: { after: true, before: false } },
      { rule: 'semi-style', opts: 'last' },
      {
        rule: 'space-before-function-paren',
        opts: { anonymous: 'always', asyncArrow: 'always', named: 'never' }
      },
      { rule: 'space-in-parens' },
      {
        rule: 'space-unary-ops',
        opts: { nonwords: false, overrides: {}, words: true }
      },
      { rule: 'switch-colon-spacing', opts: { after: true, before: false } },
      { rule: 'template-tag-spacing' },
      { rule: 'unicode-bom' }
    ])('for"$rule"', ({ rule, opts }) => {
      expect(testCandidate[rule]).toBeDefined();
      expect(testCandidate[rule][0]).toEqual('error');
      expect(testCandidate[rule][1]).toEqual(opts ?? 'never');
    });

    test.each([
      {
        rule: 'capitalized-comments',
        opts: 'never',
        extras: {
          block: {
            ignoreConsecutiveComments: true,
            ignoreInlineComments: true,
            ignorePattern: '.*'
          },
          line: {
            ignoreConsecutiveComments: true,
            ignoreInlineComments: true,
            ignorePattern: '.*'
          }
        },
        sev: 'off'
      },
      {
        rule: 'comma-style',
        opts: 'last',
        extras: {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            NewExpression: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false
          }
        }
      },
      {
        rule: 'func-name-matching',
        opts: 'always',
        extras: {
          considerPropertyDescriptor: true,
          includeCommonJSModuleExports: false
        },
        sev: 'off'
      },
      {
        rule: 'lines-between-class-members',
        opts: 'always',
        extras: { exceptAfterSingleLine: false }
      },
      { rule: 'max-len', opts: 160, extras: 4 },
      {
        rule: 'nonblock-statement-body-position',
        opts: 'beside',
        extras: { overrides: {} }
      },
      {
        rule: 'quote-props',
        opts: 'as-needed',
        extras: { keywords: false, numbers: false, unnecessary: true }
      },
      { rule: 'quotes', opts: 'single', extras: { avoidEscape: true } },
      {
        rule: 'spaced-comment',
        opts: 'always',
        extras: {
          block: {
            balanced: true,
            exceptions: ['-', '+'],
            markers: ['=', '!', ':', '::']
          },
          line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] }
        }
      }
    ])('for"$rule"', ({ rule, opts, extras, sev }) => {
      expect(testCandidate[rule]).toBeDefined();
      expect(testCandidate[rule][0]).toEqual(sev ?? 'error');
      expect(testCandidate[rule][1]).toEqual(opts);
      expect(testCandidate[rule][2]).toEqual(extras);
    });
  });

  describe('should test formatterIgnore ---', () => {
    test('for "padding-line-between-statements"', () => {
      expect(formatterIgnore['padding-line-between-statements']).toEqual('off');
    });
  });
});
