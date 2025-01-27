import { prettierConfig } from './prettier';

describe('Prettier Config ---', () => {
  test('for valid', () => {
    expect(prettierConfig).toBeDefined();
    expect(prettierConfig).toEqual({
      $schema: 'http://json.schemastore.org/prettierrc',
      arrowParens: 'avoid',
      bracketSameLine: true,
      bracketSpacing: true,
      endOfLine: 'lf',
      htmlWhitespaceSensitivity: 'css',
      insertPragma: false,
      jsxSingleQuote: false,
      overrides: [
        {
          files: [
            '*.cjs',
            '*.cts',
            '*.js',
            '*.jsx',
            '*.mjs',
            '*.mts',
            '*.ts',
            '*.tsx'
          ],
          options: { jsxSingleQuote: true }
        },
        {
          files: [
            '*.htm',
            '*.html',
            '*.shtm',
            '*.shtml',
            '*.xhtm',
            '*.xhtml',
            '*.yaml',
            '*.yml'
          ],
          options: { singleQuote: false }
        },
        {
          files: ['*.ejs', '*.handlebars', '*.hbs'],
          options: { parser: 'lwc', singleQuote: false }
        },
        {
          files: ['*.md', '*.mdx', '*.markdown'],
          options: { parser: 'mdx', proseWrap: 'never' }
        },
        {
          files: [
            '*.code-snippets',
            '.commitlintrc',
            '.eslintrc',
            '.lintstagedrc',
            '.nycrc',
            '.prettierrc',
            '.stylelintrc'
          ],
          options: { parser: 'json' }
        },
        { files: ['*.svg'], options: { parser: 'html' } },
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
