import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { StyledHeader, SiteLogoLink } from './Styles';

const Navbar = ({ auth }) => {
  return (
    <StyledHeader>
      <SiteLogoLink to='/'>ReactAuth</SiteLogoLink>
      <nav>
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </nav>
    </StyledHeader>
  );
};
Navbar.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
