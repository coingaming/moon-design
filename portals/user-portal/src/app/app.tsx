import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { WalletsView } from './cashier/views/wallets/view';
import { MyBetsView } from './cashier/views/my-bets/view';
import { DepositView } from './cashier/views/deposit/view';
import { DepositViewBTC } from './cashier/views/deposit/view-btc';
import { AccountView } from './settings/views/account/view';
import { SettingsView } from './settings/views/settings/view';
import { NotificationsView } from './settings/views/notifications/view';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" exact={true} component={WalletsView} />
    <Route path="/my-bets" exact={true} component={MyBetsView} />
    <Route path="/cashier" component={WalletsView} />
    <Route path="/deposit" exact={true} component={DepositView} />
    <Route path="/deposit-btc" exact={true} component={DepositViewBTC} />
    <Route path="/account" exact={true} component={AccountView} />
    <Route path="/settings" exact={true} component={SettingsView} />
    <Route path="/notifications" exact={true} component={NotificationsView} />
  </Switch>
);

export const ClientSideApp = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
