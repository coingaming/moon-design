import * as React from 'react';
import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';
import {
  typography,
  border,
  colors,
  breakpoints,
} from '@heathmont/sportsbet-tokens';
import { mq } from '@heathmont/sportsbet-utils';

const AddWalletButton = styled.a({
  fontSize: rem(14),
  textTransform: 'uppercase',
  fontWeight: typography.fontWeight.semibold,
  letterSpacing: rem(1),
  cursor: 'pointer',
  color: colors.neutral[20],
});

const AddWalletCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  minHeight: rem(170),
  borderRadius: border.radius.default,
  backgroundColor: colors.neutral[80],
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: colors.neutral[50],
  cursor: 'pointer',
});

export const AddWallet: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <AddWalletCard onClick={onClick}>
    <AddWalletButton>+ Add Wallet</AddWalletButton>
  </AddWalletCard>
);
