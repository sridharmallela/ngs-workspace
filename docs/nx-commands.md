---
layout: page
title: 'Nx Commands'
permalink: '/nx-commands'
---

[![npm](https://img.shields.io/npm/v/nx-commands-ngs.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-ngs) [![npm](https://img.shields.io/npm/dw/nx-commands-ngs.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-ngs) [![npm](https://img.shields.io/npm/dm/nx-commands-ngs.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-ngs) [![npm](https://img.shields.io/npm/dy/nx-commands-ngs.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-ngs) [![npm](https://img.shields.io/npm/dt/nx-commands-ngs.svg?style=plastic)](https://www.npmjs.com/package/nx-commands-ngs)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/ngs-workspace/main/LICENSE)

This module exports all the commands that Nx supports programmatically.

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- /TOC -->

## Installation

```bash
  $ npm i --save-dev nx-commands-ngs
```

```bash
  $ yarn add --dev nx-commands-ngs
```

## Usage

```ts
import { NxCommands } from 'nx-commands-ngs';

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
