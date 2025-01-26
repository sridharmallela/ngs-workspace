import { utils } from '@commitlint/config-nx-scopes';
import { RuleConfigSeverity } from '@commitlint/types';

export default {
  extends: ['ngs', '@commitlint/config-nx-scopes'],
  rules: {
    'scope-enum': async ctx => [
      RuleConfigSeverity.Error,
      'always',
      ['repo', ...(await utils.getProjects(ctx))]
    ]
  }
};
