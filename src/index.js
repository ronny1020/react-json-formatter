import React from 'react'

export const JsonFormatter = ({ json, tabWith, JsonStyle }) => {
  const jsonObject = JSON.parse(json)

  const repeatTabSpace = (times) => {
    const repeatedTabSpace = []
    for (let i = 0; i < times; i++) {
      repeatedTabSpace.push(
        <span style={JsonStyle.tabSpaceStyle} key={i}>
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
        const dataJSX = <span style={JsonStyle.numberStyle}>{data}</span>

        return dataJSX
      }

      case '[object String]': {
        const dataJSX = <span style={JsonStyle.stringStyle}>"{data}"</span>
        return dataJSX
      }

      case '[object Boolean]': {
        const dataJSX = data ? (
          <span style={JsonStyle.booleanTrueStyle}>true</span>
        ) : (
          <span style={JsonStyle.booleanFalseStyle}>false</span>
        )
        return dataJSX
      }

      case '[object Object]': {
        const dataJSX = []
        dataJSX.push(
          <React.Fragment key={'{'}>
            <span style={JsonStyle.braceStyle}>{'{'}</span>
            <br />
          </React.Fragment>
        )
        const keys = Object.keys(data)
        TabSpaceRepeatTimes++
        for (const i in data) {
          dataJSX.push(
            <React.Fragment key={i}>
              {repeatTabSpace(TabSpaceRepeatTimes)}
              <span style={JsonStyle.propertyStyle}>{`"` + i + `"`}</span>
              <span style={JsonStyle.colonStyle}>: </span>
              {categorize(data[i])}
              {i === keys[keys.length - 1] ? null : (
                <span style={JsonStyle.commaStyle}>,</span>
              )}
              <br />
            </React.Fragment>
          )
        }
        TabSpaceRepeatTimes--
        dataJSX.push(
          <React.Fragment key={'}'}>
            {repeatTabSpace(TabSpaceRepeatTimes)}
            <span style={JsonStyle.braceStyle}>{'}'}</span>
          </React.Fragment>
        )
        return dataJSX
      }

      case '[object Array]': {
        const dataJSX = []

        dataJSX.push(
          <React.Fragment key='['>
            <span style={JsonStyle.bracketStyle}>[</span>
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
                <span style={JsonStyle.commaStyle}>,</span>
              )}
              <br />
            </React.Fragment>
          )
        }
        TabSpaceRepeatTimes--
        dataJSX.push(
          <React.Fragment key=']'>
            {repeatTabSpace(TabSpaceRepeatTimes)}
            <span style={JsonStyle.bracketStyle}>]</span>
          </React.Fragment>
        )
        return dataJSX
      }

      case '[object Null]': {
        const dataJSX = <span style={JsonStyle.nullStyle}>null</span>
        return dataJSX
      }
      default:
      // code block
    }
  }

  return (
    <div style={JsonStyle.style}>
      <div>{categorize(jsonObject)}</div>
    </div>
  )
}
