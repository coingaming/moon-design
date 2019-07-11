/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {
  colors,
  border,
  breakpoints,
  typography,
} from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { userPortalContainerFlush } from '../../../shared/container';

jsx;

const SummaryContainer = styled.summary<{
  inactive?: boolean;
  details?: boolean;
}>(({ inactive = false, details = false }) => [
  {
    /* arrow */
    '&::-webkit-details-marker': {
      color: colors.neutral[20],
      position: 'absolute',
      right: spacing('xsmall'),
      top: `calc(${spacing('large')} - 5px)`,
      [mq(breakpoints.medium)]: {
        right: spacing('small'),
      },
    },
    listStyle: 'none',
  },
  inactive && {
    color: colors.neutral[20],
  },
  !details && {
    listStyle: 'none',
    '&::-webkit-details-marker': {
      display: 'none',
    },
  },
]);

const SummaryInner = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: rem(64),
  alignItems: 'center',
  borderBottom: `${border.width}px solid ${colors.neutral[40]}`,
});

export const Summary: React.FC<{ inactive?: boolean; details?: boolean }> = ({
  inactive = false,
  details = false,
  children,
}) => (
  <SummaryContainer inactive={inactive} details={details}>
    <SummaryInner>{children}</SummaryInner>
  </SummaryContainer>
);

export const Details = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: spacing('large'),
  paddingLeft: spacing('large'),
  paddingRight: spacing('large'),
  paddingBottom: spacing('large'),
  borderBottom: `${border.width}px solid ${colors.neutral[40]}`,
  [mq(breakpoints.medium)]: {
    marginRight: spacing('xlarge'),
  },
});

export const TransactionHistory = styled.details<{ open?: boolean }>({
  ...userPortalContainerFlush,
  position: 'relative',
  fontWeight: typography.fontWeight.semibold,
  '&[open]': {
    backgroundColor: colors.neutral[70],
  },
});

export const DetailColumns = styled.div({
  // marginTop: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const DetailColumn = styled.div({
  [mq(breakpoints.medium)]: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});
