import styled, { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { CarouselSlider } from '@heathmont/sportsbet-components';
import { USER_PORTAL_CONTAINER_SIZE } from '../../../shared/globals';

export const WalletsContainer = styled(CarouselSlider)({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  flexFlow: 'row nowrap',
  marginTop: spacing('large'),
});

export const walletItemStyle: CSSObject = {
  paddingRight: spacing(),
  /**
   * For the first child, below the container, add extra spacing
   */
  [mq(USER_PORTAL_CONTAINER_SIZE, 'max-width')]: {
    '&:first-of-type': {
      marginLeft: spacing(),
    },
  },
  /**
   * From small upwards, display in a row of 3.
   */
  [mq(breakpoints.small)]: {
    minWidth: rem(USER_PORTAL_CONTAINER_SIZE / 3),
    paddingRight: spacing('large'),
  },
};

export const WalletWrapper = styled.div<{ mobileHidden?: boolean }>(
  ({ mobileHidden }) => [
    {
      minWidth: rem(280),
    },
    mobileHidden && {
      [mq(breakpoints.medium, 'max-width')]: {
        minWidth: 0,
        display: 'none',
      },
    },
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
