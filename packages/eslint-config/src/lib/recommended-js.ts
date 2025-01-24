import { errorsConfig, errorsIgnore } from './rules/errors';
import { formatterConfig, formatterIgnore } from './rules/formatters';
import { standardsConfig, standardsIgnore } from './rules/standards';

import { ignoresConfigAndTests } from './rules/matchers';

export default {
  rules: {
    ...standardsConfig,
    ...errorsConfig,
    ...formatterConfig
  },
  overrides: [
    {
      files: ignoresConfigAndTests,
      rules: {
        ...standardsIgnore,
        ...errorsIgnore,
        ...formatterIgnore
      }
    }
  ],
  extends: ['eslint:recommended']
};
