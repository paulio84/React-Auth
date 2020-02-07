import React from 'react';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { StyledHeader, SiteLogoLink } from './Styles';

const Navbar = () => {
  return (
    <StyledHeader>
      <SiteLogoLink to='/'>ReactAuth</SiteLogoLink>
      <nav>
        <SignedInLinks />
        <SignedOutLinks />
      </nav>
    </StyledHeader>
  );
};

export default Navbar;
