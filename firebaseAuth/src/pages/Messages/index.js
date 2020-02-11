import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages && messages.map(message =>
          <Message key={message.id} message={message} />
        )}
      </ul>
    </div >
  );
};
Messages.propTypes = {
  messages: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    messages: state.firestore.ordered.messages
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'messages' }])
)(Messages);