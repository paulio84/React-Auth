import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavLinks, NavLinksItem } from '../../../utils/Styles';

const SignedOutLinks = () => {
  return (
    <NavLinks>
      <NavLinksItem>
        <NavLink to='/messages'>Messages</NavLink>
      </NavLinksItem>
      <NavLinksItem>
        <NavLink to='/signin'>Sign In</NavLink>
      </NavLinksItem>
      <NavLinksItem>
        <NavLink to='/register'>Register</NavLink>
      </NavLinksItem>
    </NavLinks>
  );
};

export default SignedOutLinks;
