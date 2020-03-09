import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoginAction } from '../../store/actions/authActions';

const LogIn = ({ loginAction, authToken, errorMessage }) => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    loginAction(state);
  };

  const handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  if (authToken) {
    return <Redirect to='/places' />;
  } else {
    return (
      <Fragment>
        <h1>Log In</h1>
        {/* Can this be made more generic Log In and Register are essentially the same form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={state.email}
              autoComplete='email'
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={state.password}
              autoComplete='current-password'
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button>Log In</button>
            <p>{errorMessage}</p>
          </div>
        </form>
      </Fragment>
    );
  }
};

const mapState = (state) => {
  return {
    authToken: state.auth.token,
    errorMessage: state.auth.error
  };
};

const mapDispath = (dispatch) => {
  return {
    loginAction: (userCredentials) => dispatch(LoginAction(userCredentials))
  };
};

export default connect(mapState, mapDispath)(LogIn);
