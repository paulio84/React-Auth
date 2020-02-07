import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavLinks, NavLinksItem } from '../../../utils/Styles';

const SignedInLinks = () => {
  return (
    <NavLinks>
      <NavLinksItem>
        <NavLink to='/public'>Public Page</NavLink>
      </NavLinksItem>
      <NavLinksItem>
        <NavLink to='/profile'>My Profile</NavLink>
      </NavLinksItem>
      <NavLinksItem>Sign Out</NavLinksItem>
    </NavLinks>
  );
};

export default SignedInLinks;
