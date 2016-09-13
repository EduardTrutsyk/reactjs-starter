import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ProfilePage from './containers/Profile/Profile';
import ProfileSettingsPage from './containers/Profile/ProfileSettings';
import AdminPage from './containers/Admin/Admin';
import App from './containers/App';
import HomePage from './containers/Home/Home';
import LoginPage from './containers/Login/Login';
import NotFoundPage from './containers/NotFound/NotFound';
import requireAuthentication from './components/AuthenticatedComponent/AuthenticatedComponent';

export default (
  <Route component={App} path="/">
    <IndexRoute component={HomePage}/>
    <Route component={requireAuthentication(AdminPage)} path="admin"/>
    <Route component={LoginPage} path="login"/>
    <Route component={ProfilePage} path="profile/:userName">
      <Route component={ProfileSettingsPage} path="settings"/>
    </Route>
    <Route component={NotFoundPage} path="*"/>
  </Route>
);
