import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Message from './Message';

class Messages extends Component {
  render() {
    const { messages } = this.props;

    return (
      <div>
        <h1>Messages</h1>
        <ul>
          {messages.map(message => <Message key={message.id} message={message} />)}
        </ul>
      </div >
    );
  }
}
Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    messages: state.user.messages
  };
};

export default connect(mapStateToProps)(Messages);