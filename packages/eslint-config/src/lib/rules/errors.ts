const errorsConfig = {
  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',
  // https://eslint.org/docs/latest/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'off',
  // https://eslint.org/docs/rules/no-console
  'no-console': [
    'error',
    {
      allow: ['log', 'warn', 'error']
    }
  ],
  // https://eslint.org/docs/rules/no-const-assign
  'no-const-assign': 'error',
  // https://eslint.org/docs/rules/no-constant-condition
  'no-constant-condition': 'error',
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',
  // https://eslint.org/docs/rules/no-control-regex
  'no-control-regex': 'error',
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'error',
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',
  // https://eslint.org/docs/rules/no-dupe-args
  'no-dupe-args': 'error',
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',
  // https://eslint.org/docs/rules/no-dupe-keys
  'no-dupe-keys': 'error',
  // https://eslint.org/docs/rules/no-duplicate-case
  'no-duplicate-case': 'error',
  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',
  // https://eslint.org/docs/rules/no-empty
  'no-empty': 'error',
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods']
    }
  ],
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',
  // https://eslint.org/docs/rules/no-extra-semi
  'no-extra-semi': 'error',
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',
  // https://eslint.org/docs/rules/no-floating-decimal
  'no-floating-decimal': 'error',
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': [
    'error',
    {
      exceptions: []
    }
  ],
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': [
    'off',
    {
      allow: [],
      boolean: false,
      number: true,
      string: true
    }
  ],
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',
  // https://eslint.org/docs/rules/no-irregular-whitespace
  'no-irregular-whitespace': 'error',
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',
  // https://eslint.org/docs/rules/no-labels
  'no-labels': [
    'error',
    {
      allowLoop: false,
      allowSwitch: false
    }
  ],
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',
  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': [
    'off',
    {
      detectObjects: false,
      enforceConst: true,
      ignore: [],
      ignoreArrayIndexes: true
    }
  ],
  // https://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': [
    'error',
    {
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
  ],
  // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': 'error',
  // https://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false
    }
  ],
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 1
    }
  ],
  // https://eslint.org/docs/rules/no-native-reassign
  'no-native-reassign': 'off',
  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',
  // https://eslint.org/docs/rules/no-new-object
  'no-new-object': 'error',
  // https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'off',
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',
  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      message: 'arguments.callee is deprecated',
      object: 'arguments',
      property: 'callee'
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'global',
      property: 'isFinite'
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'self',
      property: 'isFinite'
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'window',
      property: 'isFinite'
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'global',
      property: 'isNaN'
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'self',
      property: 'isNaN'
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'window',
      property: 'isNaN'
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineGetter__'
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineSetter__'
    },
    {
      message: 'Use the exponentiation operator (**) instead.',
      object: 'Math',
      property: 'pow'
    }
  ],
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'except-parens'],
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'error',
  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': [
    'error',
    {
      props: true
    }
  ],
  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',
  // https://eslint.org/docs/rules/no-spaced-func
  'no-spaced-func': 'error',
  // https://eslint.org/docs/rules/no-tabs
  'no-tabs': 'error',
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',
  // https://eslint.org/docs/rules/no-trailing-spaces
  'no-trailing-spaces': [
    'error',
    {
      ignoreComments: false,
      skipBlankLines: false
    }
  ],
  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'error',
  // https://eslint.org/docs/latest/rules/no-undef-init
  'no-undef-init': 'error',
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error',
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'off',
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false
    }
  ],
  // https://eslint.org/docs/rules/no-unreachable
  'no-unreachable': 'error',
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',
  // https://eslint.org/docs/rules/no-unused-vars
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all'
    }
  ],
  // https://eslint.org/docs/rules/no-use-before-define
  'no-use-before-define': [
    'error',
    {
      classes: true,
      functions: false,
      variables: true
    }
  ],
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',
  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': [
    'off',
    {
      location: 'start',
      terms: ['todo', 'fixme', 'xxx']
    }
  ],
  // https://eslint.org/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 'error',
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error'
};

const errorsIgnore: Record<string, string> = {
  // https://eslint.org/docs/rules/func-names
  'func-names': 'off',
  // https://eslint.org/docs/rules/no-console
  'no-console': 'off',
  // https://eslint.org/docs/rules/no-debugger
  'no-debugger': 'off',
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': 'off',
  // https://eslint.org/docs/rules/no-new
  'no-new': 'off',
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'off',
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'off',
  // https://eslint.org/docs/rules/no-undef
  'no-undef': 'off'
};

export { errorsConfig, errorsIgnore };
