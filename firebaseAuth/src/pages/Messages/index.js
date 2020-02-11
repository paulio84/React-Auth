import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Layout from '../../shared/components/Layout';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <Layout title="Messages">
      <ul>
        {messages && messages.map(message =>
          <Message key={message.id} message={message} />
        )}
      </ul>
    </Layout>
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