import * as React from 'react';
import { Tab, TabItem } from '@heathmont/sportsbet-user-portal-components';

export const RewardsNav = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem active to={'/bonuses/free-bets'}>
      Bonuses
    </TabItem>
    <TabItem to={'/notifications'}>Notifications</TabItem>
    <TabItem to={'/account'}>Account</TabItem>
    <TabItem to={'/settings'}>Settings</TabItem>
    <TabItem to={'#'} rightAligned>
      Log out
    </TabItem>
  </Tab>
);
