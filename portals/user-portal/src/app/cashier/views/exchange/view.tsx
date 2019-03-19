/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { container, spacing } from '@heathmont/sportsbet-utils';
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutAside,
} from '../../components/layout';
import { CashierHeading } from './dumb-components/heading';
import { NeedHelpBanner } from './dumb-components/need-help-banner';
import {
  Heading,
  Card,
  CardToggle,
  CardBalance,
  Link,
} from '@heathmont/sportsbet-components';
import { IconBitcoin } from '@heathmont/sportsbet-icons';
import styled from '@emotion/styled';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { BitcoinWallet } from './dumb-components/bitcoin-wallet';
import rem from 'polished/lib/helpers/rem';

const Text = styled.p({
  color: colors.neutral[20],
});

const WalletsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  flexFlow: 'row nowrap',
  scrollSnapType: 'x proximity',
});

const WalletWrapper = styled.div({
  minWidth: rem(320),
  marginRight: spacing('large'),
  scrollSnapAlign: 'center',
});

export const ExchangeView = () => (
  <div css={container('large')}>
    <Layout asideWidth={390}>
      <LayoutHeader>
        <CashierHeading />
      </LayoutHeader>
      <LayoutMain>
        <Heading size="charlie" element="h1">
          Wallet
        </Heading>
        <Text>Manage your profile, password and more.</Text>
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
      </LayoutMain>
    </Layout>
  </div>
);
