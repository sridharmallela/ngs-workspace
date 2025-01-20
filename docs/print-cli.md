---
layout: page
title: 'Print CLI'
permalink: '/print-cli'
---

[![npm](https://img.shields.io/npm/v/print-cli.svg?style=plastic)](https://www.npmjs.com/package/print-cli) [![npm](https://img.shields.io/npm/dw/print-cli.svg?style=plastic)](https://www.npmjs.com/package/print-cli) [![npm](https://img.shields.io/npm/dm/print-cli.svg?style=plastic)](https://www.npmjs.com/package/print-cli) [![npm](https://img.shields.io/npm/dy/print-cli.svg?style=plastic)](https://www.npmjs.com/package/print-cli) [![npm](https://img.shields.io/npm/dt/print-cli.svg?style=plastic)](https://www.npmjs.com/package/print-cli)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/print-cli.svg?style=plastic)](https://github.com/sridharmallela/print-cli/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/print-cli.svg?style=plastic)](https://github.com/sridharmallela/print-cli/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/print-cli.svg?style=plastic)](https://github.com/sridharmallela/print-cli/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/print-cli.svg?style=plastic)](https://github.com/sridharmallela/print-cli/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/print-cli/main/LICENSE)

Generate a printable representation of ASCII text. Thanks to [Figlet](https://www.npmjs.com/package/figlet). Try it [here](http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20)

![intro](/assets/img/print-cli/intro.gif)

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Global CLI](#global-cli)
  - [Non CLI](#non-cli)
- [Usage](#usage)
  - [Non CLI](#non-cli)
  - [NPM Script](#npm-script)
  - [Options](#options)
    - [enableBanner -b|--banner](#enablebanner--b--banner)
    - [font -f|--font](#font--f--font)
    - [color -c|--color](#color--c--color)
    - [background color --bg-color](#background-color---bg-color)
- [Updating print-cli](#updating-print-cli)
- [License](#license)

<!-- /TOC -->

## Installation

### Global CLI

```bash
  $ npm i -g print-cli
```

### Non CLI

```bash
  $ npm i print-cli
```

## Usage

```bash
$ print-cli --banner --font slant "Hello World"
       __  __       __ __          _       __              __     __
      / / / /___   / // /____     | |     / /____   _____ / /____/ /
     / /_/ // _ \ / // // __ \    | | /| / // __ \ / ___// // __  /
    / __  //  __// // // /_/ /    | |/ |/ // /_/ // /   / // /_/ /
   /_/ /_/ \___//_//_/ \____/     |__/|__/ \____//_/   /_/ \__,_/

```

### Non CLI

```js
const { Printer } = require('print-cli');

Printer.printData('<text>', {
  banner: true | false,
  font: 'standard|doom|slant|bell|chunky',
  color: 'blue|black|cyan|green|grey|magenta|red|white|yellow',
  bgColor: 'bgBlack|bgBlue|bgCyan|bgGreen|bgMagenta|bgRed|bgWhite|bgYellow'
});
```

```ts
import { Printer } from 'print-cli';

Printer.printData('<text>', {
  banner: true | false,
  font: 'standard|doom|slant|bell|chunky',
  color: 'blue|black|cyan|green|grey|magenta|red|white|yellow',
  bgColor: 'bgBlack|bgBlue|bgCyan|bgGreen|bgMagenta|bgRed|bgWhite|bgYellow'
});
```

### NPM Script

```json
// package.json
{
  "scripts": {
    "print-banner": "print-cli -b -f standard -c green \"print-cli\""
  }
}
```

```bash
$ npm run print-banner

> print-cli -b -f standard -c green "print-cli"
               _         _                _  _
  _ __   _ __ (_) _ __  | |_         ___ | |(_)
 | '_ \ | '__|| || '_ \ | __|_____  / __|| || |
 | |_) || |   | || | | || |_|_____|| (__ | || |
 | .__/ |_|   |_||_| |_| \__|       \___||_||_|
 |_|

```

### Options

#### enableBanner (-b|--banner)

- specifies to enable ASCII banner

#### font (-f|--font)

- specifies font used to print the banner
  - standard (default)
  - doom
  - slant
  - bell
  - chunky

![Fonts-Usage](/assets/img/print-cli/fonts.gif)

#### color (-c|--color)

- specifies color of the text being printed
  - blue
  - black
  - cyan
  - green
  - grey
  - magenta
  - red
  - white
  - yellow
  - rainbow
  - zebra
  - america

![Colors-Usage](/assets/img/print-cli/colors.gif)

#### background color (--bg-color)

- specifies background color of the printed text
  - bgBlack
  - bgBlue
  - bgCyan
  - bgGreen
  - bgMagenta
  - bgRed
  - bgWhite
  - bgYellow

![Background-Colors-Usage](/assets/img/print-cli/bg-colors.gif)

## Updating print-cli

Global package:

```bash
  npx latest
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
