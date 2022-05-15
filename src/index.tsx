import React from 'react'

export type JsonObject =
  | { [key: string]: JsonObject }
  | string
  | number
  | boolean
  | null

interface JsonStyle {
  booleanStyle?: React.CSSProperties
  braceStyle?: React.CSSProperties
  bracketStyle?: React.CSSProperties
  commaStyle?: React.CSSProperties
  falseStyle?: React.CSSProperties
  nullStyle?: React.CSSProperties
  numberStyle?: React.CSSProperties
  propertyStyle?: React.CSSProperties
  stringStyle?: React.CSSProperties
  style?: React.CSSProperties
  tabSpaceStyle?: React.CSSProperties
  trueStyle?: React.CSSProperties
}

interface JsonFormatterProps {
  json: string
  jsonStyle?: JsonStyle
  tabWith?: number
}

export function JsonFormatter({
  json,
  tabWith = 2,
  jsonStyle = {}
}: JsonFormatterProps): JSX.Element {
  const jsonObject: JsonObject = JSON.parse(json)

  const repeatTabSpace = (times: number): JSX.Element[] => {
    const repeatedTabSpace = []
    for (let i = 0; i < times; i++) {
      repeatedTabSpace.push(
        <span key={i} style={jsonStyle.tabSpaceStyle}>
          {'\xa0'.repeat(tabWith || 4)}
        </span>
      )
    }
    return repeatedTabSpace
  }
  let TabSpaceRepeatTimes = 0

  function categorize(data: JsonObject): JSX.Element | JSX.Element[] {
    switch (Object.prototype.toString.call(data)) {
      case '[object Number]': {
        const dataJSX = <span style={jsonStyle.numberStyle}>{data}</span>

        return dataJSX
      }

      case '[object String]': {
        const dataJSX = <span style={jsonStyle.stringStyle}>{`"${data}"`}</span>
        return dataJSX
      }

      case '[object Boolean]': {
        const dataJSX = data ? (
          <span style={{ ...jsonStyle.booleanStyle, ...jsonStyle.trueStyle }}>
            true
          </span>
        ) : (
          <span style={{ ...jsonStyle.booleanStyle, ...jsonStyle.trueStyle }}>
            false
          </span>
        )
        return dataJSX
      }

      case '[object Object]': {
        const dataJSX = []
        dataJSX.push(
          <React.Fragment key='{'>
            <span style={jsonStyle.braceStyle}>{'{'}</span>
            <br />
          </React.Fragment>
        )
        const keys = Object.keys(data as Record<string, JsonObject>)
        TabSpaceRepeatTimes += 1
        Object.keys(data as Record<string, JsonObject>).forEach(
          (key, index) => {
            dataJSX.push(
              <React.Fragment key={index}>
                {repeatTabSpace(TabSpaceRepeatTimes)}
                <span style={jsonStyle.propertyStyle}>{`"${key}": `}</span>
                {categorize((data as Record<string, JsonObject>)[key])}
                {index !== keys.length - 1 && <span>,</span>}
                <br />
              </React.Fragment>
            )
          }
        )
        TabSpaceRepeatTimes -= 1
        dataJSX.push(
          <React.Fragment key='}'>
            {repeatTabSpace(TabSpaceRepeatTimes)}
            <span style={jsonStyle.braceStyle}>{'}'}</span>
          </React.Fragment>
        )
        return dataJSX
      }

      case '[object Array]': {
        const dataJSX = []

        dataJSX.push(
          <React.Fragment key='['>
            <span style={jsonStyle.bracketStyle}>[</span>
            <br />
          </React.Fragment>
        )
        TabSpaceRepeatTimes += 1
        for (let i = 0; i < (data as unknown as JsonObject[]).length; i++) {
          dataJSX.push(
            <React.Fragment key={i}>
              {repeatTabSpace(TabSpaceRepeatTimes)}
              {categorize((data as unknown as JsonObject[])[i])}
              {i === (data as unknown as JsonObject[]).length - 1 ? null : (
                <span style={jsonStyle.commaStyle}>,</span>
              )}
              <br />
            </React.Fragment>
          )
        }
        TabSpaceRepeatTimes -= 1
        dataJSX.push(
          <React.Fragment key=']'>
            {repeatTabSpace(TabSpaceRepeatTimes)}
            <span style={jsonStyle.bracketStyle}>]</span>
          </React.Fragment>
        )
        return dataJSX
      }

      case '[object Null]': {
        const dataJSX = <span style={jsonStyle.nullStyle}>null</span>
        return dataJSX
      }
      default:
        return <span>type error</span>
    }
  }

  return (
    <div style={jsonStyle.style}>
      <div>{categorize(jsonObject)}</div>
    </div>
  )
}
