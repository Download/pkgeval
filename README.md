# pkgeval <sup><sub>0.8.0</sub></sup>
## One configuration to rule them all

[![npm](https://img.shields.io/npm/v/pkgeval.svg?maxAge=2592000)](https://npmjs.com/package/pkgeval)
[![license](https://img.shields.io/npm/l/pkgeval.svg)](https://creativecommons.org/licenses/by/4.0/)
[![travis](https://img.shields.io/travis/Download/pkgeval.svg)](https://travis-ci.org/Download/pkgeval)
[![greenkeeper](https://img.shields.io/david/Download/pkgeval.svg?maxAge=2592000)](https://greenkeeper.io/)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)

<sup><sub><sup><sub>.</sub></sup></sub></sup>

**[pkgcfg](https://npmjs.com/package/pkgcfg) tag to evaluate Javascript expressions in package.json.**

<sup><sub><sup><sub>.</sub></sup></sub></sup>

## Installation
```sh
npm install --save pkgeval
```

## Registration
The `{eval}` tag from `pkgeval` will be auto-discovered by `pkgcfg` because it
follows the package naming convention. You can also register it explicitly by
adding `'eval'` to the array of `pkgcfg` `tags` in `package.json`. See the pkgcfg
docs on [using external tags](https://www.npmjs.com/package/pkgcfg#using-external-tags)
for more information.

## Usage
_package.json:_
```json
{
  "eval": "{eval 3 > 5}",
  "evalIndirect": "{eval {pkg data} > 5}",
  "data": "8",
}
```

Then, read your `package.json` with [pkgcfg](https://npmjs.com/package/pkgcfg):
```js
var cfg = require('pkgcfg')();
console.info(cfg.test.eval) // false
console.info(cfg.test.evalIndirect); // true
```

## {eval expr}
Evaluate Javascript expressions.

### expr
Required String. The expression to evaluate.

## Issues
Add an issue in this project's [issue tracker](https://github.com/download/pkgenv/issues)
to let me know of any problems you find, or questions you may have.

## Copyright
Copyright 2016 by [Stijn de Witt](http://StijnDeWitt.com). Some rights reserved.

## License
[Creative Commons Attribution 4.0 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)
