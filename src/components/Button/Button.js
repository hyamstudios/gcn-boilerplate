/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import './Button.css';

const Button = ({ variant, className, ...rest }) => {
  return <button className={cn('btn', variant, className)} {...rest} />;
};
Button.Variants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Generic: 'generic',
};
Button.defaultProps = {
  variant: Button.Variants.Primary,
  className: '',
};

export default Button;
