import * as React from 'react';
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';
import { CashierApp } from './cashier/cashier-app';
import { ProfileApp } from './profile/profile-app';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" exact={true} component={CashierApp} />
    <Route path="/profile" component={ProfileApp} />
  </Switch>
);

export const ClientSideApp = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export const ServerSideApp: React.FC<{ req: Request }> = ({ req }) => (
  <StaticRouter location={req.url} context={{}}>
    <AppRoutes />
  </StaticRouter>
);
