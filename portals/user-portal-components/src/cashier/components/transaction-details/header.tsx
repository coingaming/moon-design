import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { container, mq, spacing } from '@heathmont/sportsbet-utils';

import {
  USER_PORTAL_CONTAINER_SIZE,
  USER_PORTAL_CONTAINER_SIZE_FLUSH,
} from '../../../shared/globals';
import { ListHeading } from '../layout';

export const TransactionDetailsHeader = styled.div({
  marginTop: spacing(),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: rem(48),
  backgroundColor: colors.neutral[70],
  color: colors.neutral[20],
  [mq(USER_PORTAL_CONTAINER_SIZE)]: {
    ...container(USER_PORTAL_CONTAINER_SIZE_FLUSH, 0),
  },
});

export const TransactionListHeading = styled(ListHeading)({
  [mq(USER_PORTAL_CONTAINER_SIZE, 'max-width')]: {
    paddingRight: 0,
  },
  Select: {
    width: 'auto',
    marginLeft: spacing('xsmall'),
    fontSize: rem(12),
    [mq(USER_PORTAL_CONTAINER_SIZE, 'max-width')]: {
      fontSize: rem(8),
    },
  },
});
