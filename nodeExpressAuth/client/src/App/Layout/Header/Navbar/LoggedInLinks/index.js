import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { LogoutAction } from '../../../../../store/actions/authActions';

const LoggedInLinks = ({ logout }) => {
  return (
    <Fragment>
      <li><NavLink to='/places'>Places</NavLink></li>
      <li><a href='#!' onClick={logout}>Log Out</a></li>
    </Fragment>
  );
};

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(LogoutAction(null))
  };
};

export default connect(null, mapDispatch)(LoggedInLinks);
