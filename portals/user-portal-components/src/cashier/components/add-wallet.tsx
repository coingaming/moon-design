/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled, { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import {
  typography,
  border,
  colors,
  breakpoints,
  animation,
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

export const AddWalletCardContainer = styled.div([
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

export const WalletMobileButton = styled.button([
  borderAddWallet,
  caption,
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

const switcher: CSSObject = {
  position: 'relative',
  display: 'inline-block',
  flexShrink: 0,
  width: rem(24),
  height: rem(14),
};

const inputStyle: CSSObject = {
  opacity: 0,
  width: 0,
  height: 0,
  '&:checked + .slider:before': {
    transform: 'translateX(10px)',
  },
};

const slider: CSSObject = {
  position: 'absolute',
  width: rem(24),
  height: rem(14),
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  cursor: 'pointer',
  backgroundColor: colors.brand,
  transition: `${animation.speed.default}s`,
  borderRadius: rem(34),
  '&::before': {
    position: 'absolute',
    content: '""',
    height: rem(10),
    width: rem(10),
    left: rem(2.4),
    bottom: rem(1.6),
    backgroundColor: colors.neutral[10],
    transition: `${animation.speed.default}s`,
    borderRadius: '50%',
  },
};

export const CurrencySwitch: React.FC<
  React.InputHTMLAttributes<HTMLInputElement>
> = props => {
  return (
    /* Disable as `label` wraps input */
    /* eslint-disable-next-line jsx-a11y/label-has-associated-control */
    <label css={switcher}>
      <input css={inputStyle} type="checkbox" {...props} />
      <span css={slider} className="slider" />
    </label>
  );
};

export const CurrencySwitchLayout = styled.div({
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  border: 'none',
  fontSize: rem(12),
  position: 'absolute',
  top: spacing(),
  right: spacing(),
});
