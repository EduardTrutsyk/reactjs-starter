import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ProfilePage from './components/Profile/Profile';
import ProfileSettingsPage from './components/Profile/ProfileSettings';
import AdminPage from './components/Admin/Admin';
import App from './components/App';
import HomePage from './components/Home/Home';
import LoginPage from './components/Login/Login';
import NotFoundPage from './components/NotFound/NotFound';
import requireAuthentication from './components/AuthenticatedComponent/AuthenticatedComponent';

export default (
  <Route component={App} path="/">
    <IndexRoute component={HomePage}/>
    <Route component={requireAuthentication(AdminPage)} onEnter={AdminPage.onEnter} path="admin"/>
    <Route component={LoginPage} path="login"/>
    <Route component={ProfilePage} path="profile/:userName">
      <Route component={ProfileSettingsPage} path="settings"/>
    </Route>
    <Route component={NotFoundPage} path="*"/>
  </Route>
);
