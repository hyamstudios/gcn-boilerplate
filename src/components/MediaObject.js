import React from 'react'
import PropTypes from 'prop-types'
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

const MediaObject = props => {
  const img = (
    <Box key="img" width={[1, 1 / 2]}>
      {props.image ? (
        <Image width="100%" height="auto" src={props.image} />
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
    <Flex flexWrap="wrap" {...props}>
      {props.reverse ? arr.reverse() : arr}
    </Flex>
  )
}
MediaObject.propTypes = {
  reverse: PropTypes.bool,
  image: PropTypes.string,
}

export default MediaObject
