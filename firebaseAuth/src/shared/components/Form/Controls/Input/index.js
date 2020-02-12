import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { id } = props;
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input
        {...props}
        autoComplete="off" />
    </div>
  );
};
Input.propTypes = {
  id: PropTypes.string
};

export default Input;