import React from 'react';
import PropTypes from 'prop-types';

import { MessageContainer, MessageQuote, MessageFooter } from './Styles';

const Message = ({ message }) => (
  <MessageContainer>
    <MessageQuote>
      {message.text}
      <MessageFooter>{`${message.authorFirstName} ${message.authorLastName}`}</MessageFooter>
    </MessageQuote>
  </MessageContainer>
);
Message.propTypes = {
  message: PropTypes.shape({
    authorFirstName: PropTypes.string.isRequired,
    authorLastName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
