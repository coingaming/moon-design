import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const AppRoutes = () => (
  <Switch>
    <Route path="/login" exact={true} component={() => <p>Login</p>} />
  </Switch>
);

export const ClientSideApp = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
