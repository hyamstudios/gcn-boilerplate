import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

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
  const { alt, image, imageElement, children, reverse } = props;
  const img = (
    <div key="img" className="w-full md:w-1/2">
      {image ? <img alt={alt} className="w-full h-auto" src={image} /> : imageElement || false}
    </div>
  );
  const classForBox = cn('w-full md:w-1/2', {
    'pl-0 md:pl-4': !reverse,
    'pr-0 md:pr-4': reverse,
  });
  const box = (
    <div key="box" className={classForBox}>
      {children}
    </div>
  );
  const arr = [img, box];
  return (
    <div className="flex flex-wrap" {...props}>
      {reverse ? arr.reverse() : arr}
    </div>
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
