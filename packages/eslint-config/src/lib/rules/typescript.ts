const tsConfig = {
  // https://typescript-eslint.io/rules/array-type
  '@typescript-eslint/array-type': 'error',
  // https://typescript-eslint.io/rules/ban-ts-comment
  '@typescript-eslint/ban-ts-comment': 'error',
  // https://typescript-eslint.io/rules/ban-tslint-comment
  '@typescript-eslint/ban-tslint-comment': 'error',
  // https://typescript-eslint.io/rules/consistent-type-definitions
  '@typescript-eslint/consistent-type-definitions': 'error',
  // https://typescript-eslint.io/rules/consistent-type-imports
  '@typescript-eslint/consistent-type-imports': 'error',
  // https://typescript-eslint.io/rules/naming-convention
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variableLike',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid'
    },
    {
      selector: 'typeLike',
      format: ['PascalCase']
    },
    {
      selector: 'function',
      modifiers: ['exported'],
      format: ['camelCase', 'PascalCase']
    }
  ],
  // https://typescript-eslint.io/rules/no-extra-semi
  '@typescript-eslint/no-extra-semi': 'error',
  // https://typescript-eslint.io/rules/no-import-type-side-effects
  '@typescript-eslint/no-import-type-side-effects': 'error',
  // https://typescript-eslint.io/rules/no-inferrable-types
  '@typescript-eslint/no-inferrable-types': 'error',
  // https://typescript-eslint.io/rules/no-require-imports
  '@typescript-eslint/no-require-imports': 'error',
  // https://typescript-eslint.io/rules/no-shadow
  '@typescript-eslint/no-shadow': 'error',
  // https://typescript-eslint.io/rules/no-unused-expressions
  '@typescript-eslint/no-unused-expressions': 'error',
  // https://typescript-eslint.io/rules/no-unused-vars
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all'
    }
  ],
  // https://typescript-eslint.io/rules/no-useless-constructor
  '@typescript-eslint/no-useless-constructor': 'error',
  // https://typescript-eslint.io/rules/no-var-requires
  '@typescript-eslint/no-var-requires': 'error',
  // https://typescript-eslint.io/rules/prefer-function-type
  '@typescript-eslint/prefer-function-type': 'error',
  // https://typescript-eslint.io/rules/triple-slash-reference
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'never',
      path: 'never',
      types: 'never'
    }
  ],
  // https://typescript-eslint.io/rules/unified-signatures
  '@typescript-eslint/unified-signatures': 'error'
};

const tsIgnore: Record<string, string> = {
  // https://typescript-eslint.io/rules/ban-types
  '@typescript-eslint/ban-types': 'off',
  // https://typescript-eslint.io/rules/explicit-function-return-type
  '@typescript-eslint/explicit-function-return-type': 'off',
  // https://typescript-eslint.io/rules/explicit-member-accessibility
  '@typescript-eslint/explicit-member-accessibility': 'off',
  // https://typescript-eslint.io/rules/explicit-module-boundary-types
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  // https://typescript-eslint.io/rules/no-empty-function
  '@typescript-eslint/no-empty-function': 'off',
  // https://typescript-eslint.io/rules/no-explicit-any
  '@typescript-eslint/no-explicit-any': 'off',
  // https://typescript-eslint.io/rules/no-inferrable-types
  '@typescript-eslint/no-inferrable-types': 'off',
  // https://typescript-eslint.io/rules/no-non-null-assertion
  '@typescript-eslint/no-non-null-assertion': 'off',
  // https://typescript-eslint.io/rules/no-unused-expressions
  '@typescript-eslint/no-unused-expressions': 'off',
  // https://typescript-eslint.io/rules/no-unused-vars
  '@typescript-eslint/no-unused-vars': 'off',
  // https://typescript-eslint.io/rules/no-var-requires
  '@typescript-eslint/no-var-requires': 'off'
};

export { tsConfig, tsIgnore };
