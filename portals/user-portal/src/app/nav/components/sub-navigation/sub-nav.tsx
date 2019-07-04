import * as React from 'react';
import { Tab, TabItem } from '@heathmont/sportsbet-user-portal-components';

export const SubNavigation = () => (
  <Tab>
    <TabItem to="/cashier">Wallet</TabItem>
    <TabItem to="/my-bets">My bets</TabItem>
    <TabItem to="/bonuses">Bonuses</TabItem>
    <TabItem highlight to="/notifications">
      Notifications
    </TabItem>
    <TabItem to="/account">Account</TabItem>
    <TabItem to="/settings">Settings</TabItem>
  </Tab>
);
