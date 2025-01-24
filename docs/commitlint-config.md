---
layout: page
title: 'CommitLint Config'
permalink: '/commitlint-config'
---

[![npm](https://img.shields.io/npm/v/commitlint-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/commitlint-config-smallela) [![npm](https://img.shields.io/npm/dw/commitlint-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/commitlint-config-smallela) [![npm](https://img.shields.io/npm/dm/commitlint-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/commitlint-config-smallela) [![npm](https://img.shields.io/npm/dy/commitlint-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/commitlint-config-smallela) [![npm](https://img.shields.io/npm/dt/commitlint-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/commitlint-config-smallela)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/smallela-workspace/main/LICENSE)

This package is a [`commitlint`](https://github.com/conventional-changelog/commitlint) configuration for commit message conventions and enforcement. It's a modified variation of [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional), with the following enhancements:

- Commit message header-length is extended to 80 characters, _provoked by lengthy Greenkeeper's commit message subject lines_.

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Using package.json file](#using-packagejson-file)
  - [Using .commitlintrc.json file](#using-commitlintrcjson-file)
  - [Using .commitlintrc.yml file](#using-commitlintrcyml-file)
  - [Using commitlint.config.js, .commitlintrc.js file](#using-commitlintconfigjs-commitlintrcjs-file)
- [Custom Configuration](#custom-configuration)
  - [Using JSON](#using-json)
  - [Using YAML](#using-yaml)
  - [Using JavaScript](#using-javascript)
- [License](#license)

<!-- /TOC -->

## Installation

```bash
  $ npm i --save-dev commitlint-config-smallela
```

```bash
  $ yarn add --dev commitlint-config-smallela
```

## Usage

### Using `package.json` file

```json
{
  "commitlint": {
    "extends": ["smallela"]
  }
}
```

### Using `.commitlintrc.json` file

```json
{
  "extends": ["smallela"]
}
```

### Using `.commitlintrc.yml` file

```yaml
extends: [smallela]
```

### Using `commitlint.config.js`, `.commitlintrc.js` file

```js
module.exports = {
  extends: ['smallela']
};
```

## Custom Configuration <a id="custom-configuration"></a>

There are many ways to implement custom configurations. Review [the complete list of possible rules](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md) to learn more.

You can override the rules immediately following the `extends` property. See the following examples.

### Using JSON

```json
{
  "extends": ["smallela"],
  "rules": {
    "header-max-length": [0, "always", 100]
  }
}
```

### Using YAML

```yaml
extends: [smallela]
rules:
  header-max-length: [0, 'always', 100]
```

### Using JavaScript

```js
module.exports = {
  extends: ['smallela'],
  rules: {
    'header-max-length': [0, 'always', 100]
  }
};
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
