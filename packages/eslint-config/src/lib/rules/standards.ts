const standardsConfig = {
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'error',
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: true
    }
  ],

  // https://eslint.org/docs/rules/array-callback-return
  // 'array-callback-return': [
  //   'error',
  //   {
  //     allowImplicit: false,
  //     checkForEach: true
  //   }
  // ],
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',
  // https://eslint.org/docs/rules/complexity
  // complexity: ['off', 11],
  // https://eslint.org/docs/rules/consistent-return
  // 'consistent-return': [
  //   'error',
  //   {
  //     treatUndefinedAsUnspecified: true
  //   }
  // ],
  // https://eslint.org/docs/rules/default-case
  'default-case': [
    'error',
    {
      commentPattern: '^no default$'
    }
  ],
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: [
    'error',
    'always',
    {
      null: 'ignore'
    }
  ],
  // https://eslint.org/docs/rules/getter-return
  'getter-return': [
    'error',
    {
      allowImplicit: true
    }
  ],
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],
  // https://eslint.org/docs/rules/object-property-newline
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: true
    }
  ],
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false
    }
  ],
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],
  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: true,
      allowUnboundThis: true
    }
  ],
  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }
  ],
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: false,
        object: false
      },
      VariableDeclarator: {
        array: false,
        object: true
      }
    },
    {
      enforceForRenamedProperties: false
    }
  ],
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',
  // https://eslint.org/docs/rules/radix
  radix: ['error', 'as-needed'],
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',
  // https://eslint.org/docs/rules/semi
  semi: ['error', 'always'],
  // https://eslint.org/docs/rules/prefer-template
  // 'prefer-template': 'error',
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': [
    'error',
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }
  ],
  // https://eslint.org/docs/rules/valid-jsdoc
  'valid-jsdoc': 'off',
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true
    }
  ],
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',
  // https://eslint.org/docs/rules/wrap-iife.html
  'wrap-iife': [
    'error',
    'outside',
    {
      functionPrototypeMethods: false
    }
  ]
};

const standardsIgnore: Record<string, string> = {
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': 'off'
};

export { standardsConfig, standardsIgnore };
