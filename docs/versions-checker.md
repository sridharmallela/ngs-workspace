---
layout: page
title: 'Versions Checker'
permalink: '/versions-checker'
---

[![npm](https://img.shields.io/npm/v/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker) [![npm](https://img.shields.io/npm/dw/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker) [![npm](https://img.shields.io/npm/dm/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker) [![npm](https://img.shields.io/npm/dy/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker) [![npm](https://img.shields.io/npm/dt/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/smallela-workspace/main/LICENSE)

![introduction](/assets/img/versions-checker.gif)

Check installed versions of node, npm, yarn, and git

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Non CLI](#non-cli)
  - [NPM Script](#npm-script)
    - [validate](#validate)
    - [checkAll](#checkall)
  - [Options](#options)
- [License](#license)

<!-- /TOC -->

## Installation

```bash
  $ npm i --save-dev versions-checker
```

## Usage

```bash
$ versions-checker --help

  Usage: versions-checker [options]

  Options:

      --version           output the version number
      --all               lists all installed versions
    -s  --silent            will not exit even versions match
    -n  --node [version]    check node version
    -m  --npm [version]     check npm version
    -y  --yarn [version]    check yarn version
    -g  --git [version]     check git version
    -e  --eslint [version]  check eslint version
    -h, --help              output usage information

  Examples:

    $ versions-checker --node ">=4.2.1"
    $ versions-checker --help
```

### Non CLI

```ts
import { validate, checkAll } from 'versions-checker';

// returns boolean
const isValid = validate({
  node: '>=6.9.5',
  npm: '>1',
  yarn: '0.24 || 0.25',
  git: '2.14',
  eslint: '1.5.6'
});

const isNodeValid = validate({ node: '6.9.5' });

const versions = checkAll();

console.log('node version is ' + versions.node);
console.log('npm version is ' + versions.node);
```

### NPM Script

```json
// package.json
{
  "scripts": {
    "check-versions": "versions-checker --node \">=20\" --npm \">=10\""
  }
}
```

```bash
  $ npm run check-versions

  > versions-checker --node ">= 20.0.0" --npm ">=10.0.0"

    node: 6.9.5
    npm: 5.2.0
```

#### validate

- validates input versions against actual versions installed.

#### checkAll

- prints all the installed versions.

### Options

`help (-h|--help)`

- specifies how to use versions-checker

`version (--version)`

- specifies which version of versions-checker.

`all (--all)`

- specifies to print installed versions.

`silent (-s|--silent)`

- specifies to not exit command line if versions don't match.

`node (-n|--node)`

- checks which version of node is being used, and compares it with user input version.

```bash
  $ versions-checker --node ">4.5"
    node: 6.9.5
  $ versions-checker --node "<4.5"
    node: 6.9.5 but expected is <4.5
  $ versions-checker --node 4
    node: 6.9.5 but expected is 4
  $ versions-checker --node 6
    node: 6.9.5
  $ versions-checker -n 6.9
    node: 6.9.5
  $ versions-checker -n 6.10
    node: 6.9.5 but expected is 6.10
```

`npm (-m|--npm)`

- checks which version of npm is being used, and compares it with user input version.

```bash
  $ versions-checker --npm ">=2.5.0"
    npm: 5.2.0
  $ versions-checker --npm ">2.5.0"
    npm: 5.2.0
  $ versions-checker -m ">2.5"
    npm: 5.2.0
  $ versions-checker -m "<5.3"
    npm: 5.2.0
```

`yarn (-y|--yarn)`

- checks which version of yarn is being used, and compares it with user input version.

```bash
  $ versions-checker --yarn "0.27"
    yarn: 0.27.5
  $ versions-checker -y "0.27.5"
    yarn: 0.27.5
```

`Git (-g|--git)`

- checks which version of git is being used, and compares it with user input version.

```bash
  $ versions-checker -g "2"
    git: 2.14.1
  $ versions-checker --git "2.14"
    git: 2.14.1
```

`eslint (-e|--eslint)`

- checks which version of eslint is being used, and compares it with user input version.

```bash
  $ versions-checker --eslint "4.5"
    eslint: 4.5.0
  $ versions-checker -e "4"
    eslint: 4.5.0
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
