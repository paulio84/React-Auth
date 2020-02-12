import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { signInAction } from '../../store/actions/authActions';

import Button from '../../shared/components/Form/Controls/Button';
import Input from '../../shared/components/Form/Controls/Input';
import Layout from '../../shared/components/Layout';

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
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to='/' />;
    }

    return (
      <Layout title="Sign In">
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <Input
              id="email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange} />
            <Input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange} />
            <Button type="submit" text="Sign In">
              {authError ? <p>{authError}</p> : null}
            </Button>
            <p>
              Need an account?
              <StyledLink to='/register'>Register</StyledLink>
            </p>
          </form>
        </div>
      </Layout>
    );
  }
}
SignIn.propTypes = {
  auth: PropTypes.object,
  authError: PropTypes.string,
  signInAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInAction: (userCredentials) => dispatch(signInAction(userCredentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
