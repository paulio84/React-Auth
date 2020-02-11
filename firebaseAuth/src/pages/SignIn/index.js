import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <div>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
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
            </div>
            <p>Need an account? <StyledLink to='/register'>Register</StyledLink></p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
