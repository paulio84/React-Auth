import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/profile' />
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signIn'>
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
