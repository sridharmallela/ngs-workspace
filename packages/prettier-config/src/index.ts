import { Config } from 'prettier';
import { prettierConfig } from './lib/prettier.js';

export default { ...prettierConfig } as Config;
