/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { Heading } from '@heathmont/sportsbet-components/lib/heading/';
import { CashierHeading } from './dumb-components/navigation';
import { BitcoinWallet } from './dumb-components/bitcoin-wallet';
import { TransactionDetailItem } from './dumb-components/transaction-details/item';
import { TransactionsHeader } from './dumb-components/transaction-details/header';
import { CashierLayout } from '../../components/layout';
import {
  WalletText,
  WalletsContainer,
  WalletWrapper,
} from '../../components/views/wallets';
import { EuroWallet } from './dumb-components/euro-wallet';
import { AddWallet, AddWalletMobile } from '../../components/add-wallet';

export const WalletsView = () => (
  <CashierLayout>
    <CashierHeading />
    <Heading size="charlie" element="h1">
      Wallet
    </Heading>
    <WalletText>Manage your profile, password and more.</WalletText>
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
    <div>
      <Heading size="charlie" element="h2">
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
    </div>
  </CashierLayout>
);
