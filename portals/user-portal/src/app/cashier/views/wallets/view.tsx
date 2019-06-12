/** @jsx jsx */
import { useState, default as React } from 'react';
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
import { CashierNav } from '../deposit/dumb-components/navigation';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { Heading } from '@heathmont/sportsbet-components';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
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
            <AddWallet to={'/add-wallet'}>+ Add Wallet</AddWallet>
          </WalletWrapper>
        </WalletsContainer>
        <AddWalletMobile to={'/add-wallet'}>+ Add Wallet</AddWalletMobile>
        <TransactionsSection>
          {/*<CashierHeading>Transactions</CashierHeading>*/}
          <Heading
            size="charlie"
            as="h1"
            css={{
              marginTop: spacing('large'),
              paddingLeft: spacing('large'),
              paddingTop: spacing('large'),
              paddingBottom: spacing('large'),
              [mq(breakpoints.medium)]: {
                paddingLeft: 0,
              },
            }}
          >
            Transactions
          </Heading>
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
