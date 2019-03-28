import * as React from 'react';
import {
  Tab,
  TabItem,
  CloseButton,
} from '../../../../cashier/components/tab/tab';

export const AccountNav = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem active to={'/account'}>
      Account
    </TabItem>
    <TabItem to={'/notifications'}>Notifications</TabItem>
    <TabItem to={'/settings'}>Settings</TabItem>
    <TabItem to={'/'} divider>
      Return to sportsbook
      <CloseButton />
    </TabItem>
  </Tab>
);
