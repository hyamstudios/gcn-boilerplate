import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Image } from 'rebass';

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
  const { image, imageElement, children, reverse } = props;
  const img = (
    <Box key="img" width={[1, 1 / 2]}>
      {image ? <Image width="100%" height="auto" src={image} /> : imageElement || false}
    </Box>
  );
  const box = (
    <Box key="box" width={[1, 1 / 2]} pl={reverse ? [0] : [0, `5%`]} pr={!reverse ? [0] : [0, `5%`]}>
      {children}
    </Box>
  );
  const arr = [img, box];
  return (
    <Flex flexWrap="wrap" {...props}>
      {reverse ? arr.reverse() : arr}
    </Flex>
  );
};
MediaObject.propTypes = {
  reverse: PropTypes.bool,
  image: PropTypes.string,
};
MediaObject.defaultProps = {
  reverse: false,
  image: undefined,
};

export default MediaObject;
