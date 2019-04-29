# Wage Calculator Demo

[![Maintainability](https://api.codeclimate.com/v1/badges/04be7c2024a6497e2802/maintainability)](https://codeclimate.com/github/NklsJ/wage-calculation-demo/maintainability)

Demo app made as a coding assignment.

## What is this?

This app is done with React 16.8. using hooks where needed. App is bootstrapped with [CRA](https://github.com/facebook/create-react-app) (not ejected) and includes Jest, Enzyme, Flow and ESlint.

The purpose of this app is to upload 1 or multiple CSV files from input field and display the data in human readable format.

The CSV files are parsed into JSON (using [papaparse](https://www.npmjs.com/package/papaparse)) and passed through an example [ajv](https://github.com/epoberezkin/ajv) validator. (Validator doesn't actually validate that the input is in correct format, just that the required columns are found from CSV!). Check `data`-folder for examples of both valid and invalid CSV files.

After parsing, the app displays either an error message or the actual wages of each person by month. Each row in the list can be opened to find more details about the wage calculation.

This project also includes examples of tests in `__tests__` folders.

## Setup

Install packages:
```
yarn
```

Run app:
```
yarn start
```

## Running tests

Run CI environment tests with coverage:
```
yarn ci
```

Note: You can also run tests and proofreading (flow & eslint) separately

Proofreading
```
yarn proofead
```

Tests (interactive mode)
```
yarn test
```
