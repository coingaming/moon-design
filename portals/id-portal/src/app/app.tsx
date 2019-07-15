import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const AppRoutes = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={() => <div>Welcome to the ID Portal!</div>}
    />
  </Switch>
);

export const ClientSideApp = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
