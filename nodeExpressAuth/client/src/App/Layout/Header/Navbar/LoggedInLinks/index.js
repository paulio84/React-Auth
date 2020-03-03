import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
  return (
    <Fragment>
      <li><NavLink to='/places'>Places</NavLink></li>
      <li>Log Out</li>
    </Fragment>
  );
};

export default LoggedInLinks;
