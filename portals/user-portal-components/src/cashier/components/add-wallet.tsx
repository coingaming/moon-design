/** @jsx jsx */
import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { jsx } from '@emotion/core';
import styled, { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import {
  typography,
  border,
  colors,
  breakpoints,
} from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
jsx;

const caption: CSSObject = {
  textTransform: 'uppercase',
  fontWeight: typography.fontWeight.semibold,
  letterSpacing: rem(1),
  cursor: 'pointer',
  color: colors.neutral[20],
  textDecoration: 'none',
};

const borderAddWallet: CSSObject = {
  backgroundColor: colors.neutral[90],
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: colors.neutral[70],
  borderRadius: border.radius.small,
  [mq(breakpoints.medium)]: {
    borderRadius: border.radius.default,
  },
  '&:hover': {
    backgroundColor: colors.neutral[70],
  },
};

const AddWalletCard = styled.div([
  borderAddWallet,
  caption,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: rem(170),
    cursor: 'pointer',
  },
]);

export const AddWallet: React.FC<NavLinkProps> = props => (
  <AddWalletCard>
    <NavLink css={caption} {...props}>
      {' '}
      {props.children}
    </NavLink>
  </AddWalletCard>
);

const WalletMobile = styled.button([
  borderAddWallet,
  {
    marginTop: spacing(),
    width: `calc(100% - ${spacing('large')} - ${spacing('large')})`,
    height: rem(50),
    marginLeft: spacing('large'),
    marginRight: spacing('large'),
    paddingTop: spacing(),
    paddingBottom: spacing(),
    [mq(breakpoints.medium)]: {
      display: 'none',
    },
  },
]);

export const AddWalletMobile: React.FC<NavLinkProps> = props => (
  <WalletMobile>
    <NavLink css={caption} {...props}>
      {' '}
      {props.children}
    </NavLink>
  </WalletMobile>
);
