import React, { Fragment } from 'react';

/**
 *
 * @param {{ children: string }} props
 *
 * This component render multiline strings into multiline texts in HTML
 * by adding <br /> to the end of every line.
 *
 */
const Multiline = ({ children }) => {
  const a = children.split('\n').map((s, index, array) => (
    <Fragment key={s}>
      {s}
      {index === array.length - 1 ? false : <br />}
    </Fragment>
  ));
  return a;
};

export default Multiline;
