import * as React from 'react';
import { Route } from 'react-router';
import { WalletsView } from './views/wallets/view';

export const CashierRoutes = () => (
  <React.Fragment>
    <Route path="/" exact={true} component={WalletsView} />
    <Route path="/cashier" component={WalletsView} />
  </React.Fragment>
);
