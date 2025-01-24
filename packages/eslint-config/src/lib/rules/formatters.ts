const formatterConfig = {
  // https://eslint.org/docs/rules/array-bracket-spacing
  'array-bracket-spacing': ['error', 'never'],
  // https://eslint.org/docs/rules/arrow-spacing
  'arrow-spacing': [
    'error',
    {
      after: true,
      before: true
    }
  ],
  // https://eslint.org/docs/rules/block-spacing
  'block-spacing': ['error', 'always'],
  // https://eslint.org/docs/rules/camelcase
  camelcase: [
    'error',
    {
      ignoreDestructuring: false,
      properties: 'never'
    }
  ],
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': [
    'off',
    'never',
    {
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
    }
  ],
  // https://eslint.org/docs/rules/comma-spacing
  'comma-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  // https://eslint.org/docs/rules/comma-style
  'comma-style': [
    'error',
    'last',
    {
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
  ],
  // https://eslint.org/docs/rules/computed-property-spacing
  'computed-property-spacing': ['error', 'never'],
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'multi-line'],
  // https://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],
  // https://eslint.org/docs/rules/eol-last
  'eol-last': ['error', 'always'],
  // https://eslint.org/docs/rules/function-call-argument-newline
  // 'function-call-argument-newline': ['off', 'consistent'],
  // https://eslint.org/docs/rules/func-call-spacing
  'func-call-spacing': ['error', 'never'],
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': [
    'off',
    'always',
    {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false
    }
  ],
  // https://eslint.org/docs/rules/func-names
  'func-names': 'warn',
  // https://eslint.org/docs/rules/jsx-quotes
  // 'jsx-quotes': ['off', 'prefer-double'],
  // https://eslint.org/docs/rules/key-spacing
  'key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false
    }
  ],
  // https://eslint.org/docs/rules/keyword-spacing
  'keyword-spacing': [
    'error',
    {
      after: true,
      before: true,
      overrides: {
        case: {
          after: true
        },
        return: {
          after: true
        },
        throw: {
          after: true
        }
      }
    }
  ],
  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': [
    'error',
    {
      applyDefaultPatterns: true,
      position: 'above'
    }
  ],
  // https://eslint.org/docs/rules/linebreak-style
  // 'linebreak-style': ['error', 'unix'],
  // https://eslint.org/docs/rules/lines-around-comment
  'lines-around-comment': 'off',
  // https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': [
    'error',
    {
      after: 'always',
      before: 'always'
    }
  ],
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': [
    'error',
    'always',
    {
      exceptAfterSingleLine: false
    }
  ],
  // https://eslint.org/docs/rules/max-depth
  'max-depth': ['off', 4],
  // https://eslint.org/docs/rules/max-len
  'max-len': [
    'error',
    160,
    4,
    {
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: false,
      ignoreUrls: true
    }
  ],
  // https://eslint.org/docs/rules/max-lines
  // 'max-lines': [
  //   'off',
  //   {
  //     max: 300,
  //     skipBlankLines: true,
  //     skipComments: true
  //   }
  // ],
  // https://eslint.org/docs/rules/max-lines-per-function
  // 'max-lines-per-function': [
  //   'off',
  //   {
  //     max: 50,
  //     skipBlankLines: true,
  //     skipComments: true,
  //     IIFEs: true
  //   }
  // ],
  // https://eslint.org/docs/rules/max-nested-callbacks
  // 'max-nested-callbacks': 'off',
  // https://eslint.org/docs/rules/max-params
  // 'max-params': ['off', 3],
  // https://eslint.org/docs/rules/max-statements
  // 'max-statements': ['off', 10],
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': [
    'error',
    {
      max: 1
    }
  ],
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['error', 'separate-lines'],
  // https://eslint.org/docs/rules/multiline-ternary
  // 'multiline-ternary': ['off', 'never'],
  // https://eslint.org/docs/rules/new-cap
  // 'new-cap': [
  //   'error',
  //   {
  //     newIsCap: true,
  //     newIsCapExceptions: [],
  //     capIsNew: false,
  //     capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
  //   }
  // ],
  // https://eslint.org/docs/rules/new-parens
  'new-parens': 'error',
  // https://eslint.org/docs/rules/newline-before-return
  // 'newline-before-return': 'error',
  // https://eslint.org/docs/rules/newline-per-chained-call
  // 'newline-per-chained-call': [
  //   'error',
  //   {
  //     ignoreChainWithDepth: 4
  //   }
  // ],
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  'nonblock-statement-body-position': [
    'error',
    'beside',
    {
      overrides: {}
    }
  ],
  // https://eslint.org/docs/rules/object-curly-newline
  'object-curly-newline': [
    'error',
    {
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
  ],
  // https://eslint.org/docs/rules/object-curly-spacing
  'object-curly-spacing': ['error', 'always'],
  // https://eslint.org/docs/rules/operator-linebreak
  // 'operator-linebreak': [
  //   'error',
  //   'before',
  //   {
  //     overrides: {
  //       '?': 'ignore',
  //       ':': 'ignore'
  //     }
  //   }
  // ],
  // https://eslint.org/docs/rules/padded-blocks
  // 'padded-blocks': [
  //   'error',
  //   {
  //     blocks: 'never',
  //     classes: 'never',
  //     switches: 'never'
  //   },
  //   {
  //     allowSingleLineBlocks: true
  //   }
  // ],
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'any',
      next: 'return',
      prev: '*'
    },
    {
      blankLine: 'any',
      next: '*',
      prev: ['const', 'let', 'var']
    },
    {
      blankLine: 'any',
      next: ['const', 'let', 'var'],
      prev: ['const', 'let', 'var']
    }
  ],
  // https://eslint.org/docs/rules/quote-props.html
  'quote-props': [
    'error',
    'as-needed',
    {
      keywords: false,
      numbers: false,
      unnecessary: true
    }
  ],
  // https://eslint.org/docs/rules/quotes
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true
    }
  ],
  // https://eslint.org/docs/rules/semi-spacing
  'semi-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  // https://eslint.org/docs/rules/semi-style
  'semi-style': ['error', 'last'],
  // https://eslint.org/docs/rules/sort-keys
  // 'sort-keys': [
  //   'off',
  //   'asc',
  //   {
  //     caseSensitive: false,
  //     natural: true
  //   }
  // ],
  // https://eslint.org/docs/rules/sort-vars
  // 'sort-vars': 'off',
  // https://eslint.org/docs/rules/space-before-blocks
  'space-before-blocks': 'error',
  // https://eslint.org/docs/rules/space-before-function-paren
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }
  ],
  // https://eslint.org/docs/rules/space-in-parens
  'space-in-parens': ['error', 'never'],
  // https://eslint.org/docs/rules/space-infix-ops
  'space-infix-ops': 'error',
  // https://eslint.org/docs/rules/space-unary-ops
  'space-unary-ops': [
    'error',
    {
      nonwords: false,
      overrides: {},
      words: true
    }
  ],
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': [
    'error',
    'always',
    {
      block: {
        balanced: true,
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::']
      },
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/']
      }
    }
  ],
  // https://eslint.org/docs/rules/switch-colon-spacing
  'switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false
    }
  ],
  // https://eslint.org/docs/rules/template-curly-spacing
  'template-curly-spacing': 'error',
  // https://eslint.org/docs/rules/template-tag-spacing
  'template-tag-spacing': ['error', 'never'],
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never']
};

const formatterIgnore: Record<string, string> = {
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': 'off'
};

export { formatterConfig, formatterIgnore };
