import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

export const TransactionDetailsHeader = styled.div({
  marginTop: spacing(),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: rem(48),
  backgroundColor: colors.neutral[70],
  color: colors.neutral[20],
});
