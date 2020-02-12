import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Layout from '../../shared/components/Layout';
import Message from './Message';

const Messages = ({ messages }) => {
  let content = null;
  if (isEmpty(messages)) {
    content = (
      <span>No messages found.</span>
    );
  } else {
    content = (
      <ul>
        {messages.map(m => <Message key={m.id} message={m} />)}
      </ul>
    );
  }

  return (
    <Layout title="Messages">
      {content}
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