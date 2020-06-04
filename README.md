# react-json-formatter

> React component to formate json data

[![NPM](https://img.shields.io/npm/v/react-json-formatter.svg)](https://www.npmjs.com/package/react-json-formatter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-json-formatter
```

## Usage

App.js

```jsx
import React from 'react'

import { JsonFormatter } from 'react-json-formatter'
import './index.css'

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

  return <JsonFormatter json={sample} tabWith='2' />
}

export default App
}
```

index.css

```css
.react-json-property {
  color: red;
}
```

## Demo

[Demo](https://ronny1020.github.io/react-json-formatter/)

## Attributes

### json : string(Json)

The string of Json to formate.

### tabWith : number

Number of spaces it should use per tab.
The default is 4.

## style

There is className for each part of the formatted Json.
Thus, the style can be changed by className.

| className           | part                                      |
| ------------------- | ----------------------------------------- |
| react-json          | The whole parts of the formatted Json.    |
| react-json-tabSpace | The space of the tabs at Object or Array. |
| react-json-number   | The numbers in Json.                      |
| react-json-string   | The strings in Json.                      |
| react-json-true     | The boolean values of true in Json.       |
| react-json-false    | The boolean values of false in Json.      |
| react-json-brace    | The braces of Object.                     |
| react-json-property | The properties of Object.                 |
| react-json-colon    | The colons of Object.                     |
| react-json-bracket  | The brackets of Array.                    |
| react-json-null     | The null values in Json                   |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [ronny1020](https://github.com/ronny1020)
