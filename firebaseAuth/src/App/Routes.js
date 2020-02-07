import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Navbar from '../shared/components/Navbar';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import PublicPage from '../pages/PublicPage';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Redirect exact from='/' to='/public' />
        <Route path='/public'>
          <PublicPage />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
