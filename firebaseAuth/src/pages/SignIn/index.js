import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signInAction } from '../../store/actions/authActions';

import { StyledLink } from './Styles';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.signInAction(this.state);
  }

  render() {
    const { authError } = this.props;

    return (
      <div>
        <h1>Sign In</h1>
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleOnChange}
                autoComplete="off" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleOnChange}
                autoComplete="off" />
            </div>
            <div>
              <button>Sign In</button>
              {authError ? <p>{authError}</p> : null}
            </div>
            <p>
              Need an account?
              <StyledLink to='/register'>Register</StyledLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
SignIn.propTypes = {
  authError: PropTypes.string,
  signInAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInAction: (userCredentials) => dispatch(signInAction(userCredentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
