import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { Header, HeaderBox, SiteLogoLink } from './Styles';
import { Container } from '../../utils/Styles';

const Navbar = ({ auth }) => {
  return (
    <Header>
      <Container>
        <HeaderBox>
          <SiteLogoLink to='/'>ReactAuth</SiteLogoLink>
          <nav>
            {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
          </nav>
        </HeaderBox>
      </Container>
    </Header>
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
