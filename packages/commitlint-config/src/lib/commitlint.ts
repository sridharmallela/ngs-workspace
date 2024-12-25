import type { UserConfig } from '@commitlint/types';

// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference/rules.md
export default {
  rules: {
    'body-case': [2, 'always', ['sentence-case', 'lower-case']],
    'body-empty': [2, 'always'],
    // 'body-full-stop',
    'body-leading-blank': [2, 'never'],
    'body-max-length': [2, 'always', 200],
    'body-max-line-length': [2, 'always', 200],
    'body-min-length': [2, 'always', 20],
    'footer-empty': [2, 'always'],
    'footer-leading-blank': [2, 'never'],
    'footer-max-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 100],
    'footer-min-length': [2, 'always', 35],
    'header-case': [2, 'always', ['sentence-case', 'lower-case']],
    // 'header-full-stop',
    'header-max-length': [2, 'always', 200],
    'header-min-length': [2, 'always', 35],
    'header-trim': [2, 'always'],
    // 'references-empty',
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [2, 'never'],
    // 'scope-enum',
    'scope-max-length': [2, 'always', 50],
    'scope-min-length': [2, 'always', 3],
    // 'signed-off-by',
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
    'subject-empty': [2, 'never'],
    // 'subject-full-stop',
    'subject-max-length': [2, 'always', 200],
    'subject-min-length': [2, 'always', 35],
    // 'trailer-exists',
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'test']
    ],
    'type-max-length': [2, 'always', 10],
    'type-min-length': [2, 'always', 3]
  }
} as UserConfig;
