// @flow
import * as React from 'react'

type Props = {
  children: string,
  removeTrailingNewLines: boolean,
}

const Multiline = (props: Props) => {
  let arr: string[] = props.children.split('\n')
  if (props.removeTrailingNewLines) {
    const indexOfLastNonEmptyString: number = arr.reduce(
      (pointer, value, index) => {
        if (value !== '') {
          return index
        } else {
          return pointer
        }
      },
      0
    )
    arr = arr.slice(0, indexOfLastNonEmptyString + 1)
  }
  const a = arr.map((s, index, array) => (
    <React.Fragment key={index}>
      {s}
      {index === array.length - 1 ? false : <br />}
    </React.Fragment>
  ))
  return a
}

export default Multiline
