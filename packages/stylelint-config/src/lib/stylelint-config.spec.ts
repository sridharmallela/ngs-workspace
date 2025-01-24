import { STYLE_LINT_CONFIG as testCandidate } from './stylelint-config';

describe('Style Lint Config ---', () => {
  let rules: any;

  beforeAll(() => {
    expect(testCandidate).toBeDefined();
    expect(testCandidate.ignoreFiles).toEqual(['**/*.js']);
    expect(testCandidate.rules).toBeDefined();
    rules = testCandidate.rules;
    expect(rules).toBeDefined();
  });

  describe('should test rule ---', () => {
    test.each([
      {
        rule: 'at-rule-empty-line-before',
        val: {
          except: ['blockless-after-same-name-blockless', 'first-nested'],
          ignore: ['after-comment']
        }
      },
      {
        rule: 'at-rule-no-unknown',
        val: { ignoreAtRules: ['include', 'extend', 'keyframes'] },
        opts: true
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
        rule: 'declaration-block-no-duplicate-properties',
        val: { ignore: ['consecutive-duplicates-with-different-values'] },
        opts: true
      },
      {
        rule: 'declaration-empty-line-before',
        val: {
          except: ['after-declaration', 'first-nested'],
          ignore: ['after-comment', 'inside-single-line-block']
        }
      },
      {
        rule: 'length-zero-no-unit',
        val: { ignore: ['custom-properties'] },
        opts: true
      },
      {
        rule: 'rule-empty-line-before',
        val: {
          except: ['after-single-line-comment'],
          ignore: ['after-comment']
        },
        opts: 'always-multi-line'
      },
      {
        rule: 'selector-pseudo-element-no-unknown',
        val: { ignorePseudoElements: ['ng-deep'] },
        opts: true
      },
      {
        rule: 'selector-type-no-unknown',
        val: { ignoreTypes: ['/^mat-/', '/^ng-/', '/^pvd-/', '/^pwe-/'] },
        opts: true
      }
    ])('"$rule"', ({ rule, val, opts }) => {
      expect(rules[rule]).toBeDefined();
      expect(rules[rule][0]).toBeDefined();
      expect(rules[rule][0]).toEqual(opts ?? 'always');
      expect(rules[rule][1]).toBeDefined();
      expect(rules[rule][1]).toEqual(val);
    });

    test.each([
      { rule: 'block-no-empty' },
      { rule: 'color-hex-length', val: 'short' },
      { rule: 'color-no-invalid-hex' },
      { rule: 'comment-no-empty' },
      { rule: 'comment-whitespace-inside', val: 'always' },
      { rule: 'declaration-block-no-shorthand-property-overrides' },
      { rule: 'declaration-block-single-line-max-declarations', val: 1 },
      { rule: 'font-family-name-quotes', val: 'always-where-required' },
      { rule: 'font-family-no-duplicate-names' },
      { rule: 'font-family-no-missing-generic-family-keyword' },
      { rule: 'function-calc-no-unspaced-operator' },
      { rule: 'function-linear-gradient-no-nonstandard-direction' },
      { rule: 'function-name-case', val: 'lower' },
      { rule: 'function-url-quotes', val: 'always' },
      { rule: 'keyframe-declaration-no-important' },
      { rule: 'media-feature-name-no-unknown' },
      { rule: 'no-duplicate-at-import-rules' },
      { rule: 'no-duplicate-selectors' },
      { rule: 'no-empty-source' },
      { rule: 'no-invalid-double-slash-comments' },
      { rule: 'property-no-unknown' },
      { rule: 'selector-attribute-quotes', val: 'always' },
      { rule: 'selector-pseudo-class-no-unknown' },
      { rule: 'selector-pseudo-element-colon-notation', val: 'single' },
      { rule: 'selector-type-case', val: 'lower' },
      { rule: 'string-no-newline' }
    ])('"$rule"', ({ rule, val }) => {
      expect(rules[rule]).toEqual(val ?? true);
    });
  });
});
