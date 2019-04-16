/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  CashierHeading,
  HeadingDescription,
} from '@heathmont/sportsbet-user-portal-components';
import { MyBetsNav } from './dumb-components/my-bets-nav';
jsx;

export const MyBetsView = () => {
  return (
    <CashierLayout>
      <MyBetsNav />
      <CashierHeading>My bets</CashierHeading>
      <HeadingDescription>In progress</HeadingDescription>
    </CashierLayout>
  );
};
