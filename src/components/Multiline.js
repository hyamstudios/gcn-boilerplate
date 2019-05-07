import React, { Fragment } from 'react';

const Multiline = props => {
  const a = props.children.split('\n').map((s, index, array) => (
    <Fragment key={s}>
      {s}
      {index === array.length - 1 ? false : <br />}
    </Fragment>
  ));
  return a;
};

export default Multiline;
