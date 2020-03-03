import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return (
    <Fragment>
      <li><NavLink to='/login'>Log In</NavLink></li>
      <li><NavLink to='/register'>Register</NavLink></li>
    </Fragment>
  );
};

export default LoggedOutLinks;
