import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div>
          <form>
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
              <button>Continue</button>
            </div>
            <p>Already got an account? <StyledLink to='/signin'>Sign In</StyledLink></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
