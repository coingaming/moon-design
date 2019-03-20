import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';

export const TransactionDetailsHeader = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: rem(48),
  backgroundColor: colors.neutral[70],
  color: colors.neutral[20],
});
