import React from 'react'

export const JsonFormatter = ({ json, tabWith }) => {
  const jsonObject = JSON.parse(json)

  const repeatTabSpace = (times) => {
    const repeatedTabSpace = []
    for (let i = 0; i < times; i++) {
      repeatedTabSpace.push(
        <span className='react-json-tabSpace' key={i}>
          {'\xa0'.repeat(tabWith || 4)}
        </span>
      )
    }
    return repeatedTabSpace
  }
  let TabSpaceRepeatTimes = 0

  function categorize(data) {
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
        dataJSX.push(
          <React.Fragment key={'{'}>
            <span className='react-json-brace'>{'{'}</span>
            <br />
          </React.Fragment>
        )
        const keys = Object.keys(data)
        TabSpaceRepeatTimes++
        for (const i in data) {
          dataJSX.push(
            <React.Fragment key={i}>
              {repeatTabSpace(TabSpaceRepeatTimes)}
              <span className='react-json-property'>{i}</span>
              <span className='react-json-colon'>: </span>
              {categorize(data[i])}
              {i === keys[keys.length - 1] ? null : (
                <span className='react-json-comma'>,</span>
              )}
              <br />
            </React.Fragment>
          )
        }
        TabSpaceRepeatTimes--
        dataJSX.push(
          <React.Fragment key={'}'}>
            {repeatTabSpace(TabSpaceRepeatTimes)}
            <span className='react-json-brace'>{'}'}</span>
          </React.Fragment>
        )
        return dataJSX
      }

      case '[object Array]': {
        const dataJSX = []

        dataJSX.push(
          <React.Fragment key='['>
            <span className='react-json-bracket'>[</span>
            <br />
          </React.Fragment>
        )
        TabSpaceRepeatTimes++
        for (let i = 0; i < data.length; i++) {
          dataJSX.push(
            <React.Fragment key={i}>
              {repeatTabSpace(TabSpaceRepeatTimes)}
              {categorize(data[i])}
              {i === data.length - 1 ? null : (
                <span className='react-json-comma'>,</span>
              )}
              <br />
            </React.Fragment>
          )
        }
        TabSpaceRepeatTimes--
        dataJSX.push(
          <React.Fragment key=']'>
            {repeatTabSpace(TabSpaceRepeatTimes)}
            <span className='react-json-bracket'>]</span>
          </React.Fragment>
        )
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
      <div>{categorize(jsonObject)}</div>
    </div>
  )
}
