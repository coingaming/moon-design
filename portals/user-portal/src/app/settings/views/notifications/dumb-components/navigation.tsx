import * as React from 'react';
import {
  Tab,
  TabItem,
  CloseButton,
} from '@heathmont/sportsbet-user-portal-components';

export const NotificationsNav = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem to={'/bonuses/free-bets'}>Bonuses</TabItem>
    <TabItem active to={'/notifications'}>
      Notifications
    </TabItem>
    <TabItem to={'/account'}>Account</TabItem>
    <TabItem to={'/settings'}>Settings</TabItem>
  </Tab>
);
