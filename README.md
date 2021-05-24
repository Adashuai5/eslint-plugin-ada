# eslint-plugin-ada

Naming rules plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ada`:

```
$ npm install eslint-plugin-ada --save-dev
```

## Usage

Add `ada` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```
module.exports = {
  extends: [ 'plugin:ada/recommended' ]
```

or

```json
{
  "plugins": ["ada"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "ada/jsx-events-naming": "error"
  }
}
```

## Supported Rules

- Fill in provided rules here

```

```
