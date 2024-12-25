import { Config } from 'prettier';
import { prettierConfig } from './lib/prettier.js';

// needs this default
export default { ...prettierConfig } as Config;
