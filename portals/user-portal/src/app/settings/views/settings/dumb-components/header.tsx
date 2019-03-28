import * as React from 'react';
import {
  Tab,
  TabItem,
  CloseButton,
} from '../../../../cashier/components/tab/tab';

export const SettingsNav = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem to={'/account'}>Account</TabItem>
    <TabItem to={'/notifications'}>Notifications</TabItem>
    <TabItem active to={'/settings'}>
      Settings
    </TabItem>
    <TabItem to={'/'} divider>
      Return to sportsbook
      <CloseButton />
    </TabItem>
  </Tab>
);
