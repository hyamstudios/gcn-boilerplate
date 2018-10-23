// @flow
import * as React from 'react'
import { Flex, Box, Image } from 'rebass'

/**
 *
 * Media Object
 *
 * named by Nicole Sullivan (http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
 *
 * recipe on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects
 *
 */

type Props = {
  image: string,
  imageElement: React.Node,
  reverse: boolean,
  children: React.Node,
}

const MediaObject = (props: Props) => {
  const img = (
    <Box key="img" width={[1, 1 / 2]}>
      {props.image ? (
        <Image width={'100%'} height="auto" src={props.image} />
      ) : props.imageElement ? (
        props.imageElement
      ) : (
        false
      )}
    </Box>
  )
  const box = (
    <Box
      key="box"
      width={[1, 1 / 2]}
      pl={props.reverse ? [0] : [0, `5%`]}
      pr={!props.reverse ? [0] : [0, `5%`]}
    >
      {props.children}
    </Box>
  )
  const arr = [img, box]
  return (
    <Flex flexWrap={'wrap'} {...props}>
      {props.reverse ? arr.reverse() : arr}
    </Flex>
  )
}

export default MediaObject
