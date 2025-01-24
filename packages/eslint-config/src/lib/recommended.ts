import { errorsConfig, errorsIgnore } from './rules/errors';
import { formatterConfig, formatterIgnore } from './rules/formatters';
import { importsConfig, importsIgnore } from './rules/imports';
import { standardsConfig, standardsIgnore } from './rules/standards';
import { tsConfig, tsIgnore } from './rules/typescript';

import { ignoresConfigAndTests } from './rules/matchers';

export default {
  rules: {
    ...standardsConfig,
    ...errorsConfig,
    ...formatterConfig,
    ...tsConfig,
    ...importsConfig
  },
  overrides: [
    {
      files: ignoresConfigAndTests,
      rules: {
        ...standardsIgnore,
        ...errorsIgnore,
        ...formatterIgnore,
        ...tsIgnore,
        ...importsIgnore
      }
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ]
};
