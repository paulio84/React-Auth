import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text, children }) => (
  <div>
    <button type={type}>{text}</button>
    {children}
  </div>
);
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element
};

export default Button;
