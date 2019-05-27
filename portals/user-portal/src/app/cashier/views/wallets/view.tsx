/** @jsx jsx */
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { jsx } from '@emotion/core';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { container } from '@heathmont/sportsbet-utils/lib/container';
import { BitcoinWallet } from './dumb-components/bitcoin-wallet';
import { TransactionDetailItem } from './dumb-components/transaction-details/item';
import { TransactionsHeader } from './dumb-components/transaction-details/header';
import {
  CashierLayout,
  CashierHeading,
  WalletsContainer,
  WalletWrapper,
  TransactionsSection,
  LoadMore,
  AddWallet,
  AddWalletMobile,
} from '@heathmont/sportsbet-user-portal-components';
import { EuroWallet } from './dumb-components/euro-wallet';
import { InActiveTransactionDetailItem } from './dumb-components/transaction-details/inactive-item';
import { RequiredTransactionDetailItem } from './dumb-components/transaction-details/required-item';
import { CashierNav } from '../deposit/dumb-components/navigations';
import { NonLoggedNav } from '../../../nav/dump-components/non-logged-in-nav';
import { LoggedInNav } from '../../../nav/dump-components/logged-in-nav';
jsx;

const transactionItems = [
  <TransactionDetailItem />,
  <RequiredTransactionDetailItem />,
  <InActiveTransactionDetailItem />,
  <TransactionDetailItem />,
  <InActiveTransactionDetailItem />,
];

export const WalletsView = () => {
  const [items, loadMore] = useState(transactionItems);
  const [isUserLoggedIn, login] = useState(false);

  return (
    <React.Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <div
        css={[
          {
            position: 'sticky',
            top: 0,
            zIndex: 1,
          },
          { ...container('default') },
          {
            overflowX: 'auto',
          },
        ]}
      >
        <CashierNav />
      </div>
      <CashierLayout>
        <CashierHeading>Wallet</CashierHeading>
        <WalletsContainer>
          <WalletWrapper>
            <BitcoinWallet />
          </WalletWrapper>
          <WalletWrapper>
            <EuroWallet />
          </WalletWrapper>
          <WalletWrapper mobileHidden>
            <AddWallet onClick={() => console.log('Add wallet')} />
          </WalletWrapper>
        </WalletsContainer>
        <AddWalletMobile onClick={() => console.log('Add wallet')}>
          + Add Wallet
        </AddWalletMobile>
        <TransactionsSection>
          <CashierHeading>Transactions</CashierHeading>
          <TransactionsHeader />
          {items}
        </TransactionsSection>
        <LoadMore>
          <Button
            onClick={() => {
              loadMore([...items, ...transactionItems]);
            }}
            modifier="secondary"
          >
            Load more
          </Button>
        </LoadMore>
      </CashierLayout>
    </React.Fragment>
  );
};
