import * as React from 'react';
import { Route } from 'react-router';

import { WalletsView } from './cashier/views/wallets/view';
import { AccountView } from './settings/views/account/view';
import { SettingsView } from './settings/views/settings/view';
import { NotificationsView } from './settings/views/notifications/view';
import { MyBetsView } from './cashier/views/my-bets/view';
import { DepositView } from './cashier/views/deposit/view';

export const UserPortalRoutes = () => (
  <React.Fragment>
    <Route path="/" exact={true} component={WalletsView} />
    <Route path="/my-bets" exact={true} component={MyBetsView} />
    <Route path="/cashier" component={WalletsView} />
    <Route path="/deposit" exact={true} component={DepositView} />
    <Route path="/account" exact={true} component={AccountView} />
    <Route path="/settings" exact={true} component={SettingsView} />
    <Route path="/notifications" exact={true} component={NotificationsView} />
  </React.Fragment>
);
