import { utils } from '@commitlint/config-nx-scopes';

export default {
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
  rules: {
    'scope-enum': async ctx => [
      2,
      'always',
      ['repo', ...(await utils.getProjects(ctx))]
    ]
  }
};
