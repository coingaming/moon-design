import * as React from 'react';
import { Route } from 'react-router';

import { WalletsView } from './cashier/views/wallets/view';
import { AccountView } from './settings/views/account/view';
import { SettingsView } from './settings/views/settings/view';
import { NotificationsView } from './settings/views/notifications/view';
import { MyBetsView } from './cashier/views/my-bets/view';

// const NotImplemented = () => <p>Not Implemented</p>;

export const UserPortalRoutes = () => (
  <React.Fragment>
    <Route path="/" exact={true} component={WalletsView} />
    <Route path="/my-bets" exact={true} component={MyBetsView} />
    <Route path="/cashier" component={WalletsView} />
    <Route path="/account" exact={true} component={AccountView} />
    <Route path="/settings" exact={true} component={SettingsView} />
    <Route path="/notifications" exact={true} component={NotificationsView} />
  </React.Fragment>
);
