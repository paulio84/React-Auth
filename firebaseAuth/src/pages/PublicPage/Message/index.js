import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <li>
    <span>{`${message.firstname} ${message.lastname}`}</span>
    <span>{message.message}</span>
  </li>
);
Message.propTypes = {
  message: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
