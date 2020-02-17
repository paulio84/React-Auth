import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../../utils/Styles';

const Layout = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};
Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};

export default Layout;