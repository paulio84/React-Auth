import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouterSwitch from './AppRouterSwitch';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouterSwitch />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
