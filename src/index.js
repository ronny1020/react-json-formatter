import React from 'react'

export const JsonFormatter = ({ json }) => {
  const jsonObject = JSON.parse(json)

  return (
    <React.Fragment>
      <span>{'{'}</span>
      <div>{json}</div>
      <span>{'}'}</span>
    </React.Fragment>
  )
}
