import { KEBAB_CASE_RULE, STYLE_LINT_CONFIG } from './stylelint-config';

describe('Style Lint Config ---', () => {
  let rules: any;

  beforeAll(() => {
    expect(STYLE_LINT_CONFIG).toBeDefined();
    expect(STYLE_LINT_CONFIG.ignoreFiles).toEqual(['**/*.js']);
    expect(STYLE_LINT_CONFIG.rules).toBeDefined();
    rules = STYLE_LINT_CONFIG.rules;
    expect(rules).toBeDefined();
    expect(KEBAB_CASE_RULE).toBeDefined();
    expect(KEBAB_CASE_RULE.length).toEqual(2);
    expect(KEBAB_CASE_RULE[0]).toEqual('^([a-z][a-z0-9]*)(-[a-z0-9]+)*$');
    expect(KEBAB_CASE_RULE[1]).toBeDefined();
  });

  describe('should test KEBAB_CASE_RULE  ---', () => {
    test('when default', () => {
      expect(KEBAB_CASE_RULE).toBeDefined();
      expect(KEBAB_CASE_RULE.length).toEqual(2);
      expect(KEBAB_CASE_RULE[0]).toEqual('^([a-z][a-z0-9]*)(-[a-z0-9]+)*$');
      expect(KEBAB_CASE_RULE[1]).toBeDefined();
      const { message } = KEBAB_CASE_RULE[1] as any;
      expect(message).toBeDefined();
      expect(message('TEST')).toEqual('expected "TEST" to be kebab-case');
    });
  });

  describe('should test rule ---', () => {
    test.each([
      'annotation-no-unknown',
      'at-rule-descriptor-no-unknown',
      'at-rule-descriptor-value-no-unknown',
      'at-rule-no-deprecated',
      'at-rule-no-vendor-prefix',
      'block-no-empty',
      'color-no-invalid-hex',
      'comment-no-empty',
      'custom-property-no-missing-var-function',
      'declaration-block-no-duplicate-custom-properties',
      'declaration-block-no-redundant-longhand-properties',
      'declaration-block-no-shorthand-property-overrides',
      'declaration-property-max-values',
      'declaration-property-value-keyword-no-deprecated',
      'declaration-property-value-no-unknown',
      'font-family-no-duplicate-names',
      'font-family-no-missing-generic-family-keyword',
      'function-calc-no-unspaced-operator',
      'function-linear-gradient-no-nonstandard-direction',
      'keyframe-block-no-duplicate-selectors',
      'keyframe-declaration-no-important',
      'media-feature-name-no-unknown',
      'media-feature-name-no-vendor-prefix',
      'media-feature-name-value-no-unknown',
      'media-query-no-invalid',
      'named-grid-areas-no-invalid',
      'no-descending-specificity',
      'no-duplicate-at-import-rules',
      'no-duplicate-selectors',
      'no-empty-source',
      'no-invalid-double-slash-comments',
      'no-invalid-position-at-import-rule',
      'no-irregular-whitespace',
      'property-no-unknown',
      'property-no-vendor-prefix',
      'selector-anb-no-unmatchable',
      'selector-no-vendor-prefix',
      'selector-pseudo-class-no-unknown',
      'shorthand-property-no-redundant-values'
    ])('for "%s" >> "true"', rule => {
      expect(rules[rule]).toEqual(true);
    });

    test.each([
      'comment-whitespace-inside',
      'function-url-quotes',
      'selector-attribute-quotes'
    ])('for "%s" >> "always"', rule => {
      expect(rules[rule]).toEqual('always');
    });

    test.each([
      'function-name-case',
      'selector-type-case',
      'value-keyword-case'
    ])('for "%s" >> "lower"', rule => {
      expect(rules[rule]).toEqual('lower');
    });

    test.each([
      'custom-media-pattern',
      'custom-property-pattern',
      'keyframes-name-pattern',
      'selector-class-pattern',
      'selector-id-pattern'
    ])('for "%s"', rule => {
      expect(rules[rule]).toEqual(KEBAB_CASE_RULE);
    });

    test.each([
      { rule: 'color-function-notation', val: 'modern' },
      { rule: 'color-hex-length', val: 'long' },
      { rule: 'declaration-block-single-line-max-declarations', val: 1 },
      { rule: 'font-family-name-quotes', val: 'always-where-required' },
      { rule: 'hue-degree-notation', val: 'angle' },
      { rule: 'import-notation', val: 'url' },
      {
        rule: 'keyframe-selector-notation',
        val: 'percentage-unless-within-keyword-only-block'
      },
      {
        rule: 'lightness-notation',
        val: 'percentage'
      },
      {
        rule: 'media-feature-range-notation',
        val: 'context'
      },
      {
        rule: 'number-max-precision',
        val: 4
      },
      { rule: 'selector-not-notation', val: 'complex' },
      { rule: 'selector-pseudo-element-colon-notation', val: 'double' }
    ])('for "$rule" >> "$val"', ({ rule, val }) => {
      expect(rules[rule]).toEqual(val);
    });

    test.each([
      {
        rule: 'at-rule-no-unknown',
        ignoreAtRules: ['include', 'extend', 'keyframes']
      },
      {
        rule: 'at-rule-prelude-no-invalid',
        ignoreAtRules: ['media']
      },
      {
        rule: 'declaration-block-no-duplicate-properties',
        ignore: [
          'consecutive-duplicates-with-different-syntaxes',
          'consecutive-duplicates-with-different-values'
        ]
      },
      {
        rule: 'length-zero-no-unit',
        ignore: ['custom-properties']
      },
      {
        rule: 'selector-pseudo-element-no-unknown',
        ignorePseudoElements: ['ng-deep']
      },
      {
        rule: 'selector-type-no-unknown',
        ignore: ['custom-elements']
      },
      {
        rule: 'string-no-newline',
        ignore: ['at-rule-preludes', 'declaration-values']
      },
      {
        rule: 'value-no-vendor-prefix',
        ignoreValues: ['box', 'inline-box']
      }
    ])(
      'for "$rule" >> "true"',
      ({ rule, ignore, ignoreValues, ignoreAtRules, ignorePseudoElements }) => {
        expect(rules[rule]).toBeDefined();
        expect(rules[rule][0]).toBeDefined();
        expect(rules[rule][0]).toEqual(true);
        expect(rules[rule][1]).toBeDefined();
        expect(rules[rule][1].ignore).toEqual(ignore);
        expect(rules[rule][1].ignoreValues).toEqual(ignoreValues);
        expect(rules[rule][1].ignoreAtRules).toEqual(ignoreAtRules);
        expect(rules[rule][1].ignorePseudoElements).toEqual(
          ignorePseudoElements
        );
      }
    );

    test.each([
      {
        rule: 'at-rule-empty-line-before',
        val: {
          except: ['blockless-after-same-name-blockless', 'first-nested'],
          ignore: ['after-comment']
        }
      },
      {
        rule: 'comment-empty-line-before',
        val: {
          except: ['first-nested'],
          ignore: ['after-comment', 'stylelint-commands']
        }
      },
      {
        rule: 'custom-property-empty-line-before',
        val: {
          except: ['after-custom-property', 'first-nested'],
          ignore: ['after-comment', 'inside-single-line-block']
        }
      },
      {
        rule: 'declaration-empty-line-before',
        val: {
          except: ['after-declaration', 'first-nested'],
          ignore: ['after-comment', 'inside-single-line-block']
        }
      }
    ])('for "$rule"', ({ rule, val }) => {
      expect(rules[rule]).toBeDefined();
      expect(rules[rule][0]).toBeDefined();
      expect(rules[rule][0]).toEqual('always');
      expect(rules[rule][1]).toBeDefined();
      expect(rules[rule][1]).toEqual(val);
    });

    test.each([
      {
        rule: 'alpha-value-notation',
        val: {
          exceptProperties: [
            'opacity',
            'fill-opacity',
            'flood-opacity',
            'stop-opacity',
            'stroke-opacity'
          ]
        },
        opts: 'percentage'
      },

      {
        rule: 'rule-empty-line-before',
        val: {
          except: ['first-nested', 'after-single-line-comment'],
          ignore: ['after-comment']
        },
        opts: 'always-multi-line'
      }
    ])('for "$rule"', ({ rule, val, opts }) => {
      expect(rules[rule]).toBeDefined();
      expect(rules[rule][0]).toBeDefined();
      expect(rules[rule][0]).toEqual(opts);
      expect(rules[rule][1]).toBeDefined();
      expect(rules[rule][1]).toEqual(val);
    });
  });
});
