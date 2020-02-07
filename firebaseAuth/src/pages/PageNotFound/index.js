import React from 'react';
import { Link } from 'react-router-dom';

import { StyledPageNotFound } from './Styles';

const PageNotFound = () => {
  return (
    <StyledPageNotFound>
      <h1>404!</h1>
      <p>Doh! Page Doesn&apos;t Seem To Exist...</p>
      <Link to="/">Go Home</Link>
    </StyledPageNotFound>
  );
};

export default PageNotFound;
