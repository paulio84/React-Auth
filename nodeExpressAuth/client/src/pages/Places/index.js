import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Places = ({ authToken }) => {
  if (!authToken) {
    return <Redirect to='/login' />;
  } else {
    return (
      <h1>Places</h1>
    );
  }
};

const mapState = (state) => {
  return {
    authToken: state.auth.token
  };
};

export default connect(mapState)(Places);
