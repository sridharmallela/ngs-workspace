import { jestConfig } from './rules/jest';

export default {
  env: {
    'jest/globals': true
  },
  rules: {
    ...jestConfig
  },
  extends: ['plugin:jest/recommended', 'plugin:jest-formatting/recommended']
};
