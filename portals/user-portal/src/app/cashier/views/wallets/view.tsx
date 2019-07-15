/** @jsx jsx */
import { useState, Fragment } from 'react';
import { jsx } from '@emotion/core';
import { Button } from '@heathmont/sportsbet-components/lib/button';
import {
  CashierLayout,
  CashierHeading,
  WalletsContainer,
  WalletWrapper,
  TransactionsSection,
  LoadMore,
  AddWalletCardContainer,
  WalletMobileButton,
  StickyNav,
  TransactionListHeading,
  UserPortalContainer,
} from '@heathmont/sportsbet-user-portal-components';
import { NavLink } from 'react-router-dom';
import { Heading, Select } from '@heathmont/sportsbet-components';
import { BitcoinWallet } from './dumb-components/bitcoin-wallet';
import { TransactionDetailItem } from './dumb-components/transaction-details/item';
import { TransactionsHeader } from './dumb-components/transaction-details/header';
import { EuroWallet } from './dumb-components/euro-wallet';
import { InActiveTransactionDetailItem } from './dumb-components/transaction-details/inactive-item';
import { RequiredTransactionDetailItem } from './dumb-components/transaction-details/required-item';
import { NonLoggedNav } from '../../../nav/dumb-components/non-logged-in-nav';
import { LoggedInNav } from '../../../nav/dumb-components/logged-in-nav';
import { SubNavigation } from '../../../nav/components/sub-navigation/sub-nav';

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
    <Fragment>
      {isUserLoggedIn ? (
        <LoggedInNav />
      ) : (
        <NonLoggedNav login={() => login(true)} />
      )}
      <StickyNav>
        <SubNavigation />
      </StickyNav>
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
            <AddWalletCardContainer to="/add-wallet" as={NavLink}>
              + Add Wallet
            </AddWalletCardContainer>
          </WalletWrapper>
        </WalletsContainer>
        <WalletMobileButton to="/add-wallet" as={NavLink}>
          + Add Wallet
        </WalletMobileButton>
        <TransactionsSection>
          <UserPortalContainer>
            <TransactionListHeading>
              <Heading size="charlie" as="h1">
                Transactions
              </Heading>
              <div>
                <Select>
                  <option value="">Withdrawals</option>
                  <option value="">Deposits</option>
                </Select>
                <Select>
                  <option value="">BTC</option>
                  <option value="">SOC</option>
                  <option value="">EUR</option>
                </Select>
              </div>
            </TransactionListHeading>
          </UserPortalContainer>
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
    </Fragment>
  );
};
