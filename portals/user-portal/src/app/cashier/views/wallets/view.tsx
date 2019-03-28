/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { Heading } from '@heathmont/sportsbet-components/lib/heading/';
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
} from '../../components/views/wallets';
import { EuroWallet } from './dumb-components/euro-wallet';
import { AddWallet, AddWalletMobile } from '../../components/add-wallet';
import { spacing } from '@heathmont/sportsbet-utils';

export const WalletsView = () => (
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
      <Heading
        size="charlie"
        element="h2"
        css={{ paddingLeft: spacing('large') }}
      >
        Transactions
      </Heading>
      <TransactionsHeader />
      <TransactionDetailItem />
      <TransactionDetailItem />
      <TransactionDetailItem />
      <TransactionDetailItem />
      <TransactionDetailItem />
      <TransactionDetailItem />
      <TransactionDetailItem />
    </TransactionsSection>
  </CashierLayout>
);
