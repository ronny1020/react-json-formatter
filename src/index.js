import React from 'react'

export const JsonFormatter = ({ json }) => {
  const jsonObject = JSON.parse(json)

  function category(data) {
    switch (Object.prototype.toString.call(data)) {
      case '[object Number]': {
        const dataJSX = isNaN(data) ? (
          <span className='react-json-nan'>NaN</span>
        ) : (
          <span className='react-json-number'>{data}</span>
        )
        return dataJSX
      }
      case '[object String]': {
        const dataJSX = <span className='react-json-string'>"{data}"</span>
        return dataJSX
      }
      case '[object Boolean]': {
        const dataJSX = data ? (
          <span className='react-json-true'>true</span>
        ) : (
          <span className='react-json-false'>false</span>
        )
        return dataJSX
      }
      case '[object Object]': {
        const dataJSX = []
        dataJSX.push(<span className='react-json-brace'>{'{'}</span>)
        for (const i in data) {
          dataJSX.push(
            <div>
              <span className='react-json-key'>{i}</span>
              <span className='react-json-colon'>:</span>
              {category(data[i])}
            </div>
          )
        }
        dataJSX.push(<span className='react-json-brace'>{'}'}</span>)
        return dataJSX
      }

      case '[object Array]': {
        const dataJSX = []
        dataJSX.push(<span className='react-json-bracket'>[</span>)
        for (const i of data) {
          dataJSX.push(category(i))
        }
        dataJSX.push(<span className='react-json-bracket'>]</span>)
        return dataJSX
      }
      case '[object Undefined]': {
        const dataJSX = <span className='react-json-undefined'>undefined</span>
        return dataJSX
      }
      case '[object Null]': {
        const dataJSX = <span className='react-json-null'>null</span>
        return dataJSX
      }
      default:
      // code block
    }
  }

  return (
    <div className='react-json'>
      <div>{category(jsonObject)}</div>
    </div>
  )
}
