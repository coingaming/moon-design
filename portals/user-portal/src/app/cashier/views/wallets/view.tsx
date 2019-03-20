/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { container, spacing } from '@heathmont/sportsbet-utils';
import { Heading } from '@heathmont/sportsbet-components';
import { colors } from '@heathmont/sportsbet-tokens';
import { Layout, LayoutHeader, LayoutMain } from '../../components/layout';
import { CashierHeading } from '../exchange/dumb-components/heading';
import { BitcoinWallet } from '../exchange/dumb-components/bitcoin-wallet';
import { TransactionDetailItem } from './dumb-components/transaction-details/item';
import { TransactionDetailsHeader } from '../../components/transaction-details/header';

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
  minWidth: rem(320),
  marginRight: spacing('large'),
  scrollSnapAlign: 'center',
});

export const WalletsView = () => (
  <div css={container('large')}>
    <Layout asideWidth={390}>
      <LayoutHeader>
        <CashierHeading />
      </LayoutHeader>
      <LayoutMain>
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
          <TransactionDetailsHeader />
          <TransactionDetailItem />
          <TransactionDetailItem />
          <TransactionDetailItem />
          <TransactionDetailItem />
          <TransactionDetailItem />
          <TransactionDetailItem />
          <TransactionDetailItem />
        </div>
      </LayoutMain>
    </Layout>
  </div>
);
