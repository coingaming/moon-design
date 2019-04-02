import * as React from 'react';
import { BrowserRouter, StaticRouter, Switch } from 'react-router-dom';
import { UserPortalRoutes } from './routes';

export const AppRoutes = () => (
  <Switch>
    <UserPortalRoutes />
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
