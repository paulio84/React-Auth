import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <li>
    <span>{`${message.authorFirstName} ${message.authorLastName}`}</span>
    <span>{message.text}</span>
  </li>
);
Message.propTypes = {
  message: PropTypes.shape({
    authorFirstName: PropTypes.string.isRequired,
    authorLastName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
