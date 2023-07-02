import { CSSProperties, useMemo, useCallback, Fragment } from 'react'

export type JsonObject =
  | { [key: string]: JsonObject }
  | string
  | number
  | boolean
  | null

interface JsonStyle {
  booleanStyle?: CSSProperties
  braceStyle?: CSSProperties
  bracketStyle?: CSSProperties
  commaStyle?: CSSProperties
  falseStyle?: CSSProperties
  nullStyle?: CSSProperties
  numberStyle?: CSSProperties
  propertyStyle?: CSSProperties
  stringStyle?: CSSProperties
  style?: CSSProperties
  tabSpaceStyle?: CSSProperties
  trueStyle?: CSSProperties
}

interface JsonClassName {
  booleanClassName?: string
  braceClassName?: string
  bracketClassName?: string
  className?: string
  commaClassName?: string
  falseClassName?: string
  nullClassName?: string
  numberClassName?: string
  propertyClassName?: string
  stringClassName?: string
  tabSpaceClassName?: string
  trueClassName?: string
}

interface JsonFormatterProps {
  json: string
  jsonClassName?: JsonClassName
  jsonStyle?: JsonStyle
  tabWith?: number
}

export default function JsonFormatter({
  json,
  jsonClassName: {
    booleanClassName = '',
    braceClassName = '',
    bracketClassName = '',
    className = '',
    commaClassName = '',
    falseClassName = '',
    nullClassName = '',
    numberClassName = '',
    propertyClassName = '',
    stringClassName = '',
    tabSpaceClassName = '',
    trueClassName = ''
  } = {},
  jsonStyle: {
    booleanStyle = {},
    braceStyle = {},
    bracketStyle = {},
    commaStyle = {},
    falseStyle = {},
    nullStyle = {},
    numberStyle = {},
    propertyStyle = {},
    stringStyle = {},
    style = {},
    tabSpaceStyle = {},
    trueStyle = {}
  } = {},
  tabWith = 2
}: JsonFormatterProps): JSX.Element {
  const jsonObject: JsonObject = useMemo(() => JSON.parse(json), [json])

  const repeatTabSpace = useCallback(
    (times: number): JSX.Element[] => {
      const repeatedTabSpace = []
      for (let i = 0; i < times; i++) {
        repeatedTabSpace.push(
          <span className={tabSpaceClassName} key={i} style={tabSpaceStyle}>
            {'\xa0'.repeat(tabWith || 4)}
          </span>
        )
      }
      return repeatedTabSpace
    },
    [tabSpaceClassName, tabSpaceStyle, tabWith]
  )

  const categorize = useCallback(
    (data: JsonObject): JSX.Element | JSX.Element[] => {
      let TabSpaceRepeatTimes = 0

      switch (Object.prototype.toString.call(data)) {
        case '[object Number]': {
          const dataJSX = (
            <span className={numberClassName} style={numberStyle}>
              {data as number}
            </span>
          )

          return dataJSX
        }

        case '[object String]': {
          const dataJSX = (
            <span
              className={stringClassName}
              style={stringStyle}
            >{`"${data}"`}</span>
          )
          return dataJSX
        }

        case '[object Boolean]': {
          const dataJSX = data ? (
            <span
              className={`${booleanClassName} ${trueClassName}`}
              style={{ ...booleanStyle, ...trueStyle }}
            >
              true
            </span>
          ) : (
            <span
              className={`${booleanClassName} ${falseClassName}`}
              style={{ ...booleanStyle, ...falseStyle }}
            >
              false
            </span>
          )
          return dataJSX
        }

        case '[object Object]': {
          const dataJSX = []
          dataJSX.push(
            <Fragment key='{'>
              <span className={braceClassName} style={braceStyle}>
                {'{'}
              </span>
              <br />
            </Fragment>
          )
          const keys = Object.keys(data as Record<string, JsonObject>)
          TabSpaceRepeatTimes += 1
          Object.keys(data as Record<string, JsonObject>).forEach(
            (key, index) => {
              dataJSX.push(
                <Fragment key={index}>
                  {repeatTabSpace(TabSpaceRepeatTimes)}
                  <span
                    className={propertyClassName}
                    style={propertyStyle}
                  >{`"${key}": `}</span>
                  {categorize((data as Record<string, JsonObject>)[key])}
                  {index !== keys.length - 1 && <span>,</span>}
                  <br />
                </Fragment>
              )
            }
          )
          TabSpaceRepeatTimes -= 1
          dataJSX.push(
            <Fragment key='}'>
              {repeatTabSpace(TabSpaceRepeatTimes)}
              <span className={braceClassName} style={braceStyle}>
                {'}'}
              </span>
            </Fragment>
          )
          return dataJSX
        }

        case '[object Array]': {
          const dataJSX = []

          dataJSX.push(
            <Fragment key='['>
              <span className={bracketClassName} style={bracketStyle}>
                [
              </span>
              <br />
            </Fragment>
          )
          TabSpaceRepeatTimes += 1
          for (let i = 0; i < (data as unknown as JsonObject[]).length; i++) {
            dataJSX.push(
              <Fragment key={i}>
                {repeatTabSpace(TabSpaceRepeatTimes)}
                {categorize((data as unknown as JsonObject[])[i])}
                {i === (data as unknown as JsonObject[]).length - 1 ? null : (
                  <span className={commaClassName} style={commaStyle}>
                    ,
                  </span>
                )}
                <br />
              </Fragment>
            )
          }
          TabSpaceRepeatTimes -= 1
          dataJSX.push(
            <Fragment key=']'>
              {repeatTabSpace(TabSpaceRepeatTimes)}
              <span className={bracketClassName} style={bracketStyle}>
                ]
              </span>
            </Fragment>
          )
          return dataJSX
        }

        case '[object Null]': {
          const dataJSX = (
            <span className={nullClassName} style={nullStyle}>
              null
            </span>
          )
          return dataJSX
        }
        default:
          return <span>type error</span>
      }
    },
    [
      booleanClassName,
      booleanStyle,
      braceClassName,
      braceStyle,
      bracketClassName,
      bracketStyle,
      commaClassName,
      commaStyle,
      falseClassName,
      falseStyle,
      nullClassName,
      nullStyle,
      numberClassName,
      numberStyle,
      propertyClassName,
      propertyStyle,
      repeatTabSpace,
      stringClassName,
      stringStyle,
      trueClassName,
      trueStyle
    ]
  )

  const result = useMemo(() => categorize(jsonObject), [categorize, jsonObject])

  return (
    <div className={className} style={style}>
      <div>{result}</div>
    </div>
  )
}
