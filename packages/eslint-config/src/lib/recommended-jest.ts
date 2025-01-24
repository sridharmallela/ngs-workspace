import { jestConfig } from './rules/jest';

export = {
  env: {
    'jest/globals': true
  },
  rules: {
    ...jestConfig
  },
  extends: ['plugin:jest/recommended', 'plugin:jest-formatting/recommended']
};
