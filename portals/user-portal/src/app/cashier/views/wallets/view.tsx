/** @jsx jsx */ jsx;
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
} from '../../components/layout';
import {
  WalletsContainer,
  WalletWrapper,
  TransactionsSection,
  LoadMore,
} from '../../components/views/wallets';
import { EuroWallet } from './dumb-components/euro-wallet';
import { AddWallet, AddWalletMobile } from '../../components/add-wallet';
import { InActiveTransactionDetailItem } from './dumb-components/transaction-details/inactive-item';
import { RequiredTransactionDetailItem } from './dumb-components/transaction-details/required-item';

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
    <CashierLayout>
      <CashierNav />
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
  );
};
