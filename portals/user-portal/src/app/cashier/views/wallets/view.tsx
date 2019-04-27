/** @jsx jsx */
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { useState } from 'react';
import { jsx } from '@emotion/core';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import { CashierNav } from './dumb-components/navigation';
import { BitcoinWallet } from './dumb-components/bitcoin-wallet';
import { TransactionDetailItem } from './dumb-components/transaction-details/item';
import { TransactionsHeader } from './dumb-components/transaction-details/header';
import {
  CashierLayout,
  CashierHeading,
  HeadingDescription,
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
import { Nav } from '../../../nav/dump-components/non-logged-in-nav';
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
  return (
    <React.Fragment>
      <Nav />
      <div css={{ marginTop: '10rem' }}>
        <CashierLayout>
          <CashierHeading>Wallet</CashierHeading>
          <HeadingDescription>
            Manage your profile, password and more.
          </HeadingDescription>
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
      </div>
    </React.Fragment>
  );
};
