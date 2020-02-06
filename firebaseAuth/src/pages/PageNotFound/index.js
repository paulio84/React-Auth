import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { StyledPageNotFound } from './Styles';

class PageNotFound extends Component {
  render() {
    return (
      <StyledPageNotFound>
        <p>404!</p>
        <p>Doh! Page Doesn&apos;t Seem To Exist...</p>
        <Link to="/">Go Home</Link>
      </StyledPageNotFound>
    );
  }
}

export default PageNotFound;
