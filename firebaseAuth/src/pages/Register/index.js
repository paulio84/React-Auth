import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { signUpAction } from '../../store/actions/authActions';

import Layout from '../../shared/components/Layout';

import { StyledLink } from './Styles';

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.signUpAction(this.state);
  }

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to='/' />;
    }

    return (
      <Layout title="Register">
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <label htmlFor="email">Firstname</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleOnChange}
                autoComplete="off" />
            </div>
            <div>
              <label htmlFor="email">Lastname</label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleOnChange}
                autoComplete="off" />
            </div>
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
              <button>Continue</button>
              {authError ? <p>{authError}</p> : null}
            </div>
            <p>
              Already got an account?
              <StyledLink to='/signin'>Sign In</StyledLink>
            </p>
          </form>
        </div>
      </Layout>
    );
  }
}
Register.propTypes = {
  auth: PropTypes.object,
  authError: PropTypes.string,
  signUpAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpAction: (newUser) => dispatch(signUpAction(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
