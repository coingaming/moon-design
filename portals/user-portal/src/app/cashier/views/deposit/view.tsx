/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import { CashierLayout, CashierHeading } from '../../components/layout';
import { CashierNav } from './dumb-components/navigations';

export const DepositView = () => {
  return (
    <CashierLayout>
      <CashierNav />
      <CashierHeading>Deposit</CashierHeading>
    </CashierLayout>
  );
};
