import React from 'react';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <LoggedInLinks />
        <LoggedOutLinks />
      </ul>
    </nav>
  );
};

export default Navbar;
