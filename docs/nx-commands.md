---
layout: page
title: 'Nx Commands'
permalink: '/nx-commands'
---

[![npm](https://img.shields.io/npm/v/nx-commands-smallela.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-smallela) [![npm](https://img.shields.io/npm/dw/nx-commands-smallela.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-smallela) [![npm](https://img.shields.io/npm/dm/nx-commands-smallela.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-smallela) [![npm](https://img.shields.io/npm/dy/nx-commands-smallela.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-smallela) [![npm](https://img.shields.io/npm/dt/nx-commands-smallela.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-smallela)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/smallela-workspace.svg?style=plastic)](https://github.com/sridharmallela/smallela-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/smallela-workspace/main/LICENSE)

This module exports all the commands that Nx supports programmatically.

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- /TOC -->license)

<!-- /TOC -->

## Installation

```bash
  $ npm i --save-dev nx-commands-smallela
```

## Usage

```ts
import { NxCommands } from 'nx-commands-smallela';

// check what things have been modified for Nx Project
affected = await NxCommands.getAffected(destBranch);

// retrieve all projects with publish task
projects = await NxCommands.getProjectsWithTask('publish');

// get project info
projectInfo = await NxCommands.getProjectInfo('test-project');
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
