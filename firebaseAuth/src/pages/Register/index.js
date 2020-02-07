import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  state = {
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
            <p>Already got an account? <Link to='/signin'>Sign In</Link></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
