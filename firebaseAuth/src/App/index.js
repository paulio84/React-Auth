import React, { Fragment } from 'react';

import BaseStyles from './BaseStyles';
import NormalizedStyles from './NormalizedStyles';
import Routes from './Routes';

const App = () => {
  return (
    <Fragment>
      <NormalizedStyles />
      <BaseStyles />
      <Routes />
    </Fragment>
  );
};

export default App;
