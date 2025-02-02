// Combination of Standard and recommended
// https://github.com/stylelint/stylelint-config-recommended/blob/master/index.js
// https://github.com/stylelint/stylelint-config-standard/blob/master/index.js
// https://stylelint.io/user-guide/configure

const KEBAB_CASE_RULE = [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: (name: string) => `expected "${name}" to be kebab-case`
  }
];

const STYLE_LINT_CONFIG = {
  rules: {
    // https://stylelint.io/user-guide/rules/alpha-value-notation
    'alpha-value-notation': [
      'percentage',
      {
        exceptProperties: [
          'opacity',
          'fill-opacity',
          'flood-opacity',
          'stop-opacity',
          'stroke-opacity'
        ]
      }
    ],
    // https://stylelint.io/user-guide/rules/annotation-no-unknown
    'annotation-no-unknown': true,
    // https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown
    'at-rule-descriptor-no-unknown': true,
    // https://stylelint.io/user-guide/rules/at-rule-descriptor-value-no-unknown
    'at-rule-descriptor-value-no-unknown': true,
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    // https://stylelint.io/user-guide/rules/at-rule-no-deprecated
    'at-rule-no-deprecated': true,
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'extend', 'keyframes']
      }
    ],
    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    'at-rule-no-vendor-prefix': true,
    // https://stylelint.io/user-guide/rules/at-rule-prelude-no-invalid
    'at-rule-prelude-no-invalid': [
      true,
      {
        ignoreAtRules: ['media']
      }
    ],
    // https://stylelint.io/user-guide/rules/at-rule-property-required-list
    // 'at-rule-property-required-list': false,
    // https://stylelint.io/user-guide/rules/block-no-empty
    'block-no-empty': true,
    // https://stylelint.io/user-guide/rules/color-function-notation
    'color-function-notation': 'modern',
    // https://stylelint.io/user-guide/rules/color-hex-alpha
    // 'color-hex-alpha': false,
    // https://stylelint.io/user-guide/rules/color-hex-length
    'color-hex-length': 'long',
    // https://stylelint.io/user-guide/rules/color-named
    // 'color-named': false,
    // https://stylelint.io/user-guide/rules/color-no-hex
    // 'color-no-hex': false,
    // https://stylelint.io/user-guide/rules/color-no-invalid-hex
    'color-no-invalid-hex': true,
    // https://stylelint.io/user-guide/rules/comment-empty-line-before
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands']
      }
    ],
    // https://stylelint.io/user-guide/rules/comment-no-empty
    'comment-no-empty': true,
    // https://stylelint.io/user-guide/rules/comment-pattern
    // 'comment-pattern': false,
    // https://stylelint.io/user-guide/rules/comment-whitespace-inside
    'comment-whitespace-inside': 'always',
    // https://stylelint.io/user-guide/rules/comment-word-disallowed-list
    // 'comment-word-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/custom-media-pattern
    'custom-media-pattern': KEBAB_CASE_RULE,
    // https://stylelint.io/user-guide/rules/custom-property-empty-line-before
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    // https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function
    'custom-property-no-missing-var-function': true,
    // https://stylelint.io/user-guide/rules/custom-property-pattern
    'custom-property-pattern': KEBAB_CASE_RULE,
    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties
    'declaration-block-no-duplicate-custom-properties': true,
    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates-with-different-syntaxes',
          'consecutive-duplicates-with-different-values'
        ]
      }
    ],
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    'declaration-block-no-redundant-longhand-properties': true,
    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
    'declaration-block-no-shorthand-property-overrides': true,
    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    'declaration-block-single-line-max-declarations': 1,
    // https://stylelint.io/user-guide/rules/declaration-empty-line-before
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    // https://stylelint.io/user-guide/rules/declaration-no-important
    // 'declaration-no-important': false,
    // https://stylelint.io/user-guide/rules/declaration-property-max-values
    'declaration-property-max-values': true,
    // https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list
    // 'declaration-property-unit-allowed-list': false,
    // https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list
    // 'declaration-property-unit-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list
    // 'declaration-property-value-allowed-list': false,
    // https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list
    // 'declaration-property-value-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated
    'declaration-property-value-keyword-no-deprecated': true,
    // https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown
    'declaration-property-value-no-unknown': true,
    // https://stylelint.io/user-guide/rules/font-family-name-quotes
    'font-family-name-quotes': 'always-where-required',
    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
    'font-family-no-duplicate-names': true,
    // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
    'font-family-no-missing-generic-family-keyword': true,
    // https://stylelint.io/user-guide/rules/font-weight-notation
    // 'font-weight-notation': false,
    // https://stylelint.io/user-guide/rules/function-allowed-list
    // 'function-allowed-list': false,
    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
    'function-calc-no-unspaced-operator': true,
    // https://stylelint.io/user-guide/rules/function-disallowed-list
    // 'function-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
    'function-linear-gradient-no-nonstandard-direction': true,
    // https://stylelint.io/user-guide/rules/function-name-case
    'function-name-case': 'lower',
    // https://stylelint.io/user-guide/rules/function-no-unknown
    // 'function-no-unknown': false,
    // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
    // 'function-url-no-scheme-relative': false,
    // https://stylelint.io/user-guide/rules/function-url-quotes
    'function-url-quotes': 'always',
    // https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list
    // 'function-url-scheme-allowed-list': false,
    // https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list
    // 'function-url-scheme-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/hue-degree-notation
    'hue-degree-notation': 'angle',
    // https://stylelint.io/user-guide/rules/import-notation
    'import-notation': 'url',
    // https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors
    'keyframe-block-no-duplicate-selectors': true,
    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
    'keyframe-declaration-no-important': true,
    // https://stylelint.io/user-guide/rules/keyframe-selector-notation
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    // https://stylelint.io/user-guide/rules/keyframes-name-pattern
    'keyframes-name-pattern': KEBAB_CASE_RULE,
    // https://stylelint.io/user-guide/rules/length-zero-no-unit
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties']
      }
    ],
    // https://stylelint.io/user-guide/rules/lightness-notation
    'lightness-notation': 'percentage',
    // https://stylelint.io/user-guide/rules/max-nesting-depth
    // 'max-nesting-depth': false,
    // https://stylelint.io/user-guide/rules/media-feature-name-allowed-list
    // 'media-feature-name-allowed-list': false,
    // https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list
    // 'media-feature-name-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
    'media-feature-name-no-unknown': true,
    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    'media-feature-name-no-vendor-prefix': true,
    // https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list
    // 'media-feature-name-unit-allowed-list': false,
    // https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list
    // 'media-feature-name-value-allowed-list': false,
    // https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown
    'media-feature-name-value-no-unknown': true,
    // https://stylelint.io/user-guide/rules/media-feature-range-notation
    'media-feature-range-notation': 'context',
    // https://stylelint.io/user-guide/rules/media-query-no-invalid
    'media-query-no-invalid': true,
    // https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid
    'named-grid-areas-no-invalid': true,
    // https://stylelint.io/user-guide/rules/no-descending-specificity
    'no-descending-specificity': true,
    // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
    'no-duplicate-at-import-rules': true,
    // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    'no-duplicate-selectors': true,
    // https://stylelint.io/user-guide/rules/no-empty-source
    'no-empty-source': true,
    // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
    'no-invalid-double-slash-comments': true,
    // https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule
    'no-invalid-position-at-import-rule': true,
    // https://stylelint.io/user-guide/rules/no-irregular-whitespace
    'no-irregular-whitespace': true,
    // https://stylelint.io/user-guide/rules/no-unknown-animations
    // 'no-unknown-animations': false,
    // https://stylelint.io/user-guide/rules/no-unknown-custom-media
    // 'no-unknown-custom-media': false,
    // https://stylelint.io/user-guide/rules/no-unknown-custom-properties
    // 'no-unknown-custom-properties': false,
    // https://stylelint.io/user-guide/rules/number-max-precision
    'number-max-precision': 4,
    // https://stylelint.io/user-guide/rules/property-allowed-list
    // 'property-allowed-list': false,
    // https://stylelint.io/user-guide/rules/property-disallowed-list
    // 'property-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/property-no-unknown
    'property-no-unknown': true,
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    'property-no-vendor-prefix': true,
    // https://stylelint.io/user-guide/rules/rule-empty-line-before
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested', 'after-single-line-comment'],
        ignore: ['after-comment']
      }
    ],
    // https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list
    // 'rule-selector-property-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable
    'selector-anb-no-unmatchable': true,
    // https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list
    // 'selector-attribute-name-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list
    // 'selector-attribute-operator-allowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list
    // 'selector-attribute-operator-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-attribute-quotes
    'selector-attribute-quotes': 'always',
    // https://stylelint.io/user-guide/rules/selector-class-pattern
    'selector-class-pattern': KEBAB_CASE_RULE,
    // https://stylelint.io/user-guide/rules/selector-combinator-allowed-list
    // 'selector-combinator-allowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list
    // 'selector-combinator-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-disallowed-list
    // 'selector-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-id-pattern
    'selector-id-pattern': KEBAB_CASE_RULE,
    // https://stylelint.io/user-guide/rules/selector-max-attribute
    // 'selector-max-attribute': false,
    // https://stylelint.io/user-guide/rules/selector-max-class
    // 'selector-max-class': false,
    // https://stylelint.io/user-guide/rules/selector-max-combinators
    // 'selector-max-combinators': false,
    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    // 'selector-max-compound-selectors': false,
    // https://stylelint.io/user-guide/rules/selector-max-id
    // 'selector-max-id': false,
    // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    // 'selector-max-pseudo-class': false,
    // https://stylelint.io/user-guide/rules/selector-max-specificity
    // 'selector-max-specificity': false,
    // https://stylelint.io/user-guide/rules/selector-max-type
    // 'selector-max-type': false,
    // https://stylelint.io/user-guide/rules/selector-max-universal
    // 'selector-max-universal': false,
    // https://stylelint.io/user-guide/rules/selector-nested-pattern
    // 'selector-nested-pattern': false,
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    // 'selector-no-qualifying-type': false,
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    'selector-no-vendor-prefix': true,
    // https://stylelint.io/user-guide/rules/selector-not-notation
    'selector-not-notation': 'complex',
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list
    // 'selector-pseudo-class-allowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list
    // 'selector-pseudo-class-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
    'selector-pseudo-class-no-unknown': true,
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list
    // 'selector-pseudo-element-allowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
    'selector-pseudo-element-colon-notation': 'double',
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list
    // 'selector-pseudo-element-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ],
    // https://stylelint.io/user-guide/rules/selector-type-case
    'selector-type-case': 'lower',
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    'shorthand-property-no-redundant-values': true,
    // https://stylelint.io/user-guide/rules/string-no-newline
    'string-no-newline': [
      true,
      {
        ignore: ['at-rule-preludes', 'declaration-values']
      }
    ],
    // https://stylelint.io/user-guide/rules/time-min-milliseconds
    // 'time-min-milliseconds': false,
    // https://stylelint.io/user-guide/rules/unit-allowed-list
    // 'unit-allowed-list': false,
    // https://stylelint.io/user-guide/rules/unit-disallowed-list
    // 'unit-disallowed-list': false,
    // https://stylelint.io/user-guide/rules/unit-no-unknown
    // 'unit-no-unknown': false,
    // https://stylelint.io/user-guide/rules/value-keyword-case
    'value-keyword-case': 'lower',
    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box', 'inline-box']
      }
    ]
  },
  ignoreFiles: ['**/*.js']
};

export { STYLE_LINT_CONFIG, KEBAB_CASE_RULE };
