/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import { CashierLayout, CashierHeading } from '../../components/layout';
import { CashierNav } from './dumb-components/navigations';
import {
  CashierGrid,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
} from '../../components/grid';

export const DepositView = () => {
  return (
    <CashierLayout>
      <CashierNav />
      <CashierGrid asideWidth={280}>
        <LayoutHeader>
          <CashierHeading>Deposit</CashierHeading>
        </LayoutHeader>
        <LayoutMain>Main</LayoutMain>
        <LayoutAside>Aside</LayoutAside>
      </CashierGrid>
    </CashierLayout>
  );
};
