import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MainPage from 'pages/MainPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
