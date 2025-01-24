import type { Config } from 'prettier';

const prettierConfig: Config = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
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
      options: {
        jsxSingleQuote: true
      }
    },
    {
      files: ['*.html', '*.yml'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['*.hbs'],
      options: {
        parser: 'lwc',
        singleQuote: false
      }
    },
    {
      files: ['*.md'],
      options: {
        proseWrap: 'never'
      }
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
      options: {
        parser: 'json'
      }
    },
    {
      files: ['*.xml'],
      options: {
        parser: 'xml',
        plugins: ['@prettier/plugin-xml'],
        xmlWhitespaceSensitivity: 'preserve'
      }
    }
  ]
};

export { prettierConfig };
