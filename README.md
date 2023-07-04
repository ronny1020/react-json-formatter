# react-json-formatter

> React component to formate JSON data

[![NPM](https://img.shields.io/npm/v/react-json-formatter.svg)](https://www.npmjs.com/package/react-json-formatter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

### npm

```bash
npm i react-json-formatter
```

### yarn

```bash
yarn add react-json-formatter
```

### pnpm

```bash
pnpm i react-json-formatter
```

## Usage

App.js

```jsx
import React from 'react'

import JsonFormatter from 'react-json-formatter'

const App = () => {
  const sample = `{
   "string":"ABCDE",
   "number":1,
   "null":null,
   "boolean":true,
   "object":{
      "string":"ABCDE",
      "number":1,
      "null":null,
      "boolean":true
   },
   "array":[
      1,
      2,
      3,
      4,
      {
      "string":"ABCDE",
      "number":1,
      "null":null,
      "boolean":true,
         "array":[
      1,
      2,
      3,
      4,
      {
      "string":"ABCDE",
      "number":1,
      "null":null,
      "boolean":true
   }
   ]
   }
   ]
}
`

  const jsonStyle = {
    propertyStyle: { color: 'red' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
  }

  return <JsonFormatter json={sample} tabWith={4} jsonStyle={jsonStyle} />
}

export default App
```

## Demo

[Demo](https://master--64a2e29586ad3ad1694ee152.chromatic.com)

## Attributes

### json: string(Json) or valid json object

The string of Json to formate.

### tabWith: number

The number of spaces it should use per tab.
The default is 2.

## styles

Use the Object `jsonStyle` to control the style of formatted JSON.

| style         | part                                      |
| ------------- | ----------------------------------------- |
| propertyStyle | The properties of Object.                 |
| colonStyle    | The colons of Object.                     |
| style         | The whole parts of the formatted JSON.    |
| tabSpaceStyle | The space of the tabs at Object or Array. |
| numberStyle   | The numbers in JSON.                      |
| stringStyle   | The strings in JSON.                      |
| booleanStyle  | Both boolean values in JSON.              |
| trueStyle     | The boolean values of true in JSON.       |
| falseStyle    | The boolean values of false in JSON.      |
| nullStyle     | The null values in JSON                   |
| commaStyle    | The commas used in Array and Object       |
| braceStyle    | The braces of Object.                     |
| bracketStyle  | The brackets of Array.                    |

## ClassNames

Use the Object `jsonClassName` to add the className to formatted JSON.

| style             | part                                      |
| ----------------- | ----------------------------------------- |
| propertyClassName | The properties of Object.                 |
| colonClassName    | The colons of Object.                     |
| className         | The whole parts of the formatted JSON.    |
| tabSpaceClassName | The space of the tabs at Object or Array. |
| numberClassName   | The numbers in JSON.                      |
| stringClassName   | The strings in JSON.                      |
| booleanClassName  | Both boolean values in JSON.              |
| trueClassName     | The boolean values of true in JSON.       |
| falseClassName    | The boolean values of false in JSON.      |
| nullClassName     | The null values in JSON                   |
| commaClassName    | The commas used in Array and Object       |
| braceClassName    | The braces of Object.                     |
| bracketClassName  | The brackets of Array.                    |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [ronny1020](https://github.com/ronny1020)
