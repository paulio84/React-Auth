import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AuthIsLoaded from './AuthIsLoaded';

import Navbar from '../shared/components/Navbar';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import Messages from '../pages/Messages';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

const Routes = () => {
  return (
    <Router>
      <AuthIsLoaded>
        <Navbar />
        <Switch>
          <Redirect exact from='/' to='/messages' />
          <Route path='/messages' component={Messages} />
          <Route path='/profile' component={Profile} />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </AuthIsLoaded>
    </Router>
  );
};

export default Routes;
