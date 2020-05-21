import React from 'react';
import { connect } from 'react-redux';

import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const Navbar = ({ authToken }) => {
  return (
    <nav>
      {authToken ? <LoggedInLinks /> : <LoggedOutLinks />}
    </nav>
  );
};

const mapState = (state) => {
  return {
    authToken: state.auth.token
  };
};

export default connect(mapState)(Navbar);
