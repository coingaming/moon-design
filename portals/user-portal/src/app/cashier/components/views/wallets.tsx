import styled, { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';

export const WalletText = styled.p({
  color: colors.neutral[20],
});

export const WalletsContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  flexFlow: 'row nowrap',
  scrollSnapType: 'x mandatory',
  marginTop: spacing('large'),
  marginLeft: spacing('large'),
  marginRight: spacing('large'),
  [mq(breakpoints.medium)]: {
    marginLeft: 0,
    marginRight: 0,
  },
});

const walletWrapper: CSSObject = {
  minWidth: rem(256),
  marginRight: spacing(),
  scrollSnapAlign: 'center',
  [mq(breakpoints.small)]: {
    minWidth: rem(320),
    marginRight: spacing('large'),
  },
};

export const WalletWrapper = styled.div<{ mobileHidden?: boolean }>(
  ({ mobileHidden = false }) => [
    mobileHidden
      ? {
          display: 'none',
          [mq(breakpoints.medium)]: {
            display: 'block',
            ...walletWrapper,
          },
        }
      : walletWrapper,
  ]
);

export const TransactionsSection = styled.section({
  marginTop: spacing('medium'),
});

export const LoadMore = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: spacing('large'),
  marginBottom: spacing('large'),
});
