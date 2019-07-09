import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { WalletsView } from './cashier/views/wallets/view';
import { MyBetsView } from './cashier/views/my-bets/view';
import { DepositViewBTC } from './cashier/views/deposit/view-btc';
import { AccountView } from './settings/views/account/view';
import { SettingsView } from './settings/views/settings/view';
import { NotificationsView } from './settings/views/notifications/view';
import { AddWalletView } from './cashier/views/wallets/add-wallet/view';
import { PriceBoostsView } from './cashier/views/bonuses/price-boosts/view';
import { FreeBetsView } from './cashier/views/bonuses/free-bets/view';
import { WithdrawViewBTC } from './cashier/views/withdraw-btc/view';

export const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={WalletsView} />
    <Route path="/my-bets" exact component={MyBetsView} />
    <Route path="/cashier" component={WalletsView} />
    <Route path="/add-wallet" exact component={AddWalletView} />
    <Route path="/deposit-btc" exact component={DepositViewBTC} />
    <Route path="/withdraw-btc" exact component={WithdrawViewBTC} />
    <Route path="/account" exact component={AccountView} />
    <Route path="/settings" exact component={SettingsView} />
    <Route path="/notifications" exact component={NotificationsView} />
    <Route path="/bonuses" exact component={FreeBetsView} />
    <Route path="/bonuses/price-boosts" exact component={PriceBoostsView} />
    <Route path="/bonuses/free-bets" exact component={FreeBetsView} />
    <Route
      path="/bonuses/casino"
      exact
      component={() => <div>In Progress</div>}
    />
  </Switch>
);

export const ClientSideApp = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
