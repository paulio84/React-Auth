import React, { Fragment, useState } from 'react';

const LogIn = () => {
  const [state, setState] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

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
            autoComplete='current-password'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
    </Fragment>
  );
};

export default LogIn;
