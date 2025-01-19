# my-workspace

## Post Steps for Scaffold

- Replace `"../` to `"./../`
- Replace `'../` to `'./../`
- In `jest.config.ts`, update `coverageDirectory: './../../coverage/..'`
- In `tsconfig.lib.json`, update `"tsBuildInfoFile": "./out-tsc/tsconfig.lib.tsbuildinfo"` and `"outDir": "./dist",`
- In `.eslintrc.json`, update `@nx/dependency-checks` with `"ignoredDependencies": ["tslib"],`
- In `package.json`

  - remove `tslib` from `dependencies`
  - update

  ```json
  {
    "name": "<pkg-name>",
    "version": "0.0.1",
    "description": "",
    "author": "Sridhar Mallela",
    "license": "MIT",
    "homepage": "https://sridharmallela.github.io/my-workspace/packages/<pkg-name>/",
    "type": "commonjs",
    "main": "./dist/index.js",
    "types": "./dist/index.d.ts",
    "typings": "./dist/index.d.ts",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/sridharmallela/my-workspace.git",
      "directory": "packages/<pkg-name>"
    },
    "bugs": {
      "url": "https://github.com/sridharmallela/my-workspace/issues"
    },
    "config": {
      "unsafe-perm": true
    },
    "keywords": []
  }
  ```
