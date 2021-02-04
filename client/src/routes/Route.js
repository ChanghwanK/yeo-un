import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
