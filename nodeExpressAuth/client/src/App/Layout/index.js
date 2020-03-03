import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <h1>React/Node Auth</h1>
        <nav>
          <ul>
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/places'>Places</NavLink></li>
            <li>Log Out</li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
