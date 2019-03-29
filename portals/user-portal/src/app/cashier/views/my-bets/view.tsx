/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  CashierHeading,
  HeadingDescription,
} from '../../components/layout';
import { MyBetsNav } from './dumb-components/my-bets-nav';

export const MyBetsView = () => {
  return (
    <CashierLayout>
      <MyBetsNav />
      <CashierHeading>My bets</CashierHeading>
      <HeadingDescription>In progress</HeadingDescription>
    </CashierLayout>
  );
};
