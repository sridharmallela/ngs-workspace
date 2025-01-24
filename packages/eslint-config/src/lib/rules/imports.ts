const importsConfig = {
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
  'import/default': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
  'import/export': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
  'import/group-exports': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
  'import/newline-after-import': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 'error',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
  'import/no-self-import': 'error'
};

const importsIgnore: Record<string, string> = {
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
  'import/no-duplicates': 'off',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 'off',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'off',
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
  'import/no-unresolved': 'off'
};

export { importsConfig, importsIgnore };
