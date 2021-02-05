import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import UploadYeoUnPage from 'pages/UploadYeoUnPage';
import PostDetailPage from 'pages/PostDetailPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signin" component={SignUpPage} />
        <Route exact path="/upload" component={UploadYeoUnPage} />
        <Route exact path="/post/:number" component={PostDetailPage} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
