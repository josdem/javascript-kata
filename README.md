## JavaScript Katas

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub](https://github.com/josdem/javascript-katas/actions/workflows/main.yml/badge.svg)](https://github.com/josdem/javascript-katas/actions)

This project contains some fun [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) katas using [Mocha Testing Framework](https://mochajs.org/).

#### To build

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### To run tests

```bash
npm test
```

#### To run a specific test

```bash
npm test -- test/${test-file}
```

Where:

- `${test-file}` is a JavaScript test file name to run

In order to execute previous commands you should have installed:

- [NVM](https://github.com/nvm-sh/nvm)
- [NodeJS](https://nodejs.org/en/)
