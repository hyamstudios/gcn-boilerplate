/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import './Button.css';

const Button = ({ className, ...rest }) => {
  return <button className={cn('btn', className)} {...rest} />;
};
Button.Variants = {
  Primary: 'btn-primary',
  Secondary: 'btn-secondary',
  Generic: 'btn-generic',
};
Button.defaultProps = {
  variant: '',
  className: '',
};

export default Button;
