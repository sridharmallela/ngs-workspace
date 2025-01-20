---
layout: page
title: 'Prettier Config'
permalink: '/prettier-config'
---

[![npm](https://img.shields.io/npm/v/prettier-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/prettier-config-smallela) [![npm](https://img.shields.io/npm/dw/prettier-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/prettier-config-smallela) [![npm](https://img.shields.io/npm/dm/prettier-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/prettier-config-smallela) [![npm](https://img.shields.io/npm/dy/prettier-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/prettier-config-smallela) [![npm](https://img.shields.io/npm/dt/prettier-config-smallela.svg?style=plastic)](https://www.npmjs.com/package/prettier-config-smallela)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/smallela-workspace/main/LICENSE)

A **[Prettier](https://prettier.io/)** [shareable config](https://prettier.io/docs/en/configuration.html#sharing-configurations) for web projects.

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- /TOC -->

## Installation

```bash
$ npm i --save-dev prettier prettier-config-smallela
```

## Usage

Reference it in `package.json` using the `prettier` property:

```json
{
  "name": "",
  "prettier": "prettier-config-smallela",
  "devDependencies": {
    "prettier-config-smallela": "~1.0.0"
  }
}
```

If you don't want to use `package.json`, you can use any of the supported extensions to export a string:

```jsonc
// `.prettierrc.json`
"prettier-config-smallela"
```

```js
// `prettier.config.js` or `.prettierrc.js`
module.exports = 'prettier-config-smallela';
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
