import * as React from 'react';
import {
  Tab,
  TabItem,
  CloseButton,
} from '@heathmont/sportsbet-user-portal-components';

export const AccountNav = () => (
  <Tab>
    <TabItem to={'/cashier'}>Wallet</TabItem>
    <TabItem to={'/my-bets'}>My bets</TabItem>
    <TabItem to={'/bonuses/free-bets'}>Bonuses</TabItem>
    <TabItem to={'/notifications'}>Notifications</TabItem>
    <TabItem active to={'/account'}>
      Account
    </TabItem>
    <TabItem to={'/settings'}>Settings</TabItem>
    <TabItem to={'#'} rightAligned>
      Log out
    </TabItem>
  </Tab>
);
