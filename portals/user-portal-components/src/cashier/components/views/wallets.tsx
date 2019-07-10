import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import {
  userPortalContainer,
  userPortalContainerInner,
} from '../../../container';
import { USER_PORTAL_CONTAINER_SIZE } from '../../../globals';

export const WalletsContainer = styled.div({
  ...userPortalContainer,
  ...userPortalContainerInner,
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  flexFlow: 'row nowrap',
  scrollSnapType: 'x mandatory',
  marginTop: spacing('large'),
});

export const WalletWrapper = styled.div<{ mobileHidden?: boolean }>(
  ({ mobileHidden }) => [
    {
      minWidth: rem(280),
      paddingRight: spacing(),
      scrollSnapAlign: 'center',
      [mq(breakpoints.small)]: {
        minWidth: rem(USER_PORTAL_CONTAINER_SIZE / 3),
        paddingRight: spacing('large'),
      },
    },
    mobileHidden && {
      [mq(breakpoints.medium, 'max-width')]: {
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
