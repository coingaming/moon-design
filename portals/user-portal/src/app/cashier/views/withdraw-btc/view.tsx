/** @jsx jsx */
import { useState, default as React } from 'react';
import { jsx } from '@emotion/core';
import {
  CashierLayout,
  StickyNav,
} from '@heathmont/sportsbet-user-portal-components';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { CashierNav } from '../wallets/dumb-components/navigation';
jsx;

export const WithdrawViewBTC = () => {
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <CashierNav />
      </StickyNav>

      <CashierLayout>Withdraw btc</CashierLayout>
    </React.Fragment>
  );
};
