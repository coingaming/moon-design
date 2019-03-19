import * as React from 'react';
import { Tab, TabItem } from '../../../components/tab/tab';

export const CashierHeading = () => (
  <Tab>
    <TabItem active>Wallet</TabItem>
    <TabItem>My bets</TabItem>
    <TabItem>Account</TabItem>
    <TabItem>Notifications</TabItem>
    <TabItem>Settings</TabItem>
    <TabItem divider>Return to sportsbook</TabItem>
  </Tab>
);
