import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOutAction } from '../../../../store/actions/authActions';

import { NavLinks, NavLinksItem } from '../../../utils/Styles';

const SignedInLinks = ({ signOutAction }) => {
  return (
    <NavLinks>
      <NavLinksItem>
        <NavLink to='/messages'>Messages</NavLink>
      </NavLinksItem>
      <NavLinksItem>
        <NavLink to='/profile'>My Profile</NavLink>
      </NavLinksItem>
      <NavLinksItem>
        <a href="#!" onClick={signOutAction}>Sign Out</a>
      </NavLinksItem>
    </NavLinks>
  );
};
SignedInLinks.propTypes = {
  signOutAction: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutAction: () => dispatch(signOutAction())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
