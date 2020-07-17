import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import NotFound from '../pages/NotFound';
import Places from '../pages/Places';
import Register from '../pages/Register';

const AppRouterSwitch = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/places' />
      </Route>
      <Route path='/places'>
        <Places />
      </Route>
      <Route path='/login'>
        <LogIn />
      </Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRouterSwitch;
