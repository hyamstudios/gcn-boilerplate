/* eslint-disable */

import React from 'react'
import Multiline from '../Multiline.js'
import { create } from 'react-test-renderer'

describe('component Multiline', () => {
  test('snapshot - no line break', () => {
    const component = create(<Multiline>{'1'}</Multiline>)
    expect(component.toJSON()).toMatchSnapshot()
  })
  test('snapshot - line breaks', () => {
    const component = create(<Multiline>{'1\n2\n3'}</Multiline>)
    expect(component.toJSON()).toMatchSnapshot()
  })
  test('snapshot - no trailing new lines', () => {
    const noTrailingNewLine = create(<Multiline>{'1\n2\n3\n'}</Multiline>)
    expect(noTrailingNewLine.toJSON()).toMatchSnapshot()
  })
})
