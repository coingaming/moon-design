import * as React from 'react';
import { Route } from 'react-router';

import { ExchangeView } from './views/exchange/view';

export const CashierRoutes = () => (
  <React.Fragment>
    <Route path="/" exact={true} component={ExchangeView} />
    <Route path="/cashier" component={ExchangeView} />
  </React.Fragment>
);
