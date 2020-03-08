import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Register = ({ authToken }) => {
  if (authToken) {
    return <Redirect to='/places' />;
  } else {
    return (
      <h1>Register</h1>
    );
  }
};

const mapState = (state) => {
  return {
    authToken: state.auth.token
  };
};

export default connect(mapState)(Register);
