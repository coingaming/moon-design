import * as React from 'react';
import {
  Tab,
  TabItem,
  CloseButton,
} from '../../../../cashier/components/tab/tab';

export const NotificationsHeader = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem to={'/account'}>Account</TabItem>
    <TabItem active to={'/notifications'}>
      Notifications
    </TabItem>
    <TabItem to={'/settings'}>Settings</TabItem>
    <TabItem to={'/'} divider>
      Return to sportsbook
      <CloseButton />
    </TabItem>
  </Tab>
);
