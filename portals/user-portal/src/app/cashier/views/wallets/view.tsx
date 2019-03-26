/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { container, spacing, mq } from '@heathmont/sportsbet-utils';
import { Heading } from '@heathmont/sportsbet-components/lib/heading/';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { CashierHeading } from './dumb-components/navigation';
import { BitcoinWallet } from '../exchange/dumb-components/bitcoin-wallet';
import { TransactionDetailItem } from './dumb-components/transaction-details/item';
import { TransactionsHeader } from './dumb-components/transaction-details/header';

const WalletText = styled.p({
  color: colors.neutral[20],
});

const WalletsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  flexFlow: 'row nowrap',
  scrollSnapType: 'x mandatory',
});

const WalletWrapper = styled.div({
  minWidth: rem(256),
  marginRight: spacing(),
  scrollSnapAlign: 'center',
  [mq(breakpoints.small)]: {
    minWidth: rem(320),
    marginRight: spacing('large'),
  },
});

export const WalletsView = () => (
  <div css={container('large')}>
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
        <BitcoinWallet />
      </WalletWrapper>
      <WalletWrapper>
        <BitcoinWallet />
      </WalletWrapper>
    </WalletsContainer>
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
  </div>
);
