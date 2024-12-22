import { prettierConfig as testCandidate } from './prettier.js';

describe('Prettier Config ---', () => {
  test('for valid', () => {
    expect(testCandidate).toBeDefined();
    expect(testCandidate).toEqual({
      arrowParens: 'avoid',
      bracketSameLine: true,
      bracketSpacing: true,
      endOfLine: 'lf',
      htmlWhitespaceSensitivity: 'css',
      insertPragma: false,
      jsxSingleQuote: false,
      overrides: [
        {
          files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.mjs', '*.cjs'],
          options: { jsxSingleQuote: true }
        },
        { files: ['*.html', '*.yml'], options: { singleQuote: false } },
        { files: ['*.md'], options: { proseWrap: 'never' } },
        {
          files: ['.prettierrc', '*.code-snippets'],
          options: { parser: 'json' }
        },
        {
          files: ['*.xml'],
          options: {
            parser: 'xml',
            plugins: ['@prettier/plugin-xml'],
            xmlWhitespaceSensitivity: 'preserve'
          }
        }
      ],
      printWidth: 80,
      proseWrap: 'preserve',
      quoteProps: 'as-needed',
      requirePragma: false,
      semi: true,
      singleAttributePerLine: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'none',
      useTabs: false
    });
  });
});
