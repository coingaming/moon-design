import * as React from 'react';
import { Route, Switch } from 'react-router';

import { Settings } from './view/settings';
import { UserInfo } from './view/user-info';
import { ChangePassword } from './view/change-password';
import { GoogleAuthenticator } from './view/google-authenticator';
import { VerifyAccount } from './view/verify-account';

export const ProfileRoutes = () => (
  <Switch>
    <Route path="/profile/settings" exact={true} component={Settings} />
    <Route path="/profile/info" component={UserInfo} />
    <Route path="/profile/changed-password" component={ChangePassword} />
    <Route
      path="/profile/google-authenticator"
      component={GoogleAuthenticator}
    />
    <Route path="/profile/verify-account" component={VerifyAccount} />
  </Switch>
);
