import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const MonthYearLabel = styled.div(({ theme }) => ({
  fontSize: rem(14),
  lineHeight: rem(24),
  color: theme.colorNew.bulma,
  marginBottom: rem(8),
  width: '100%',
  textAlign: 'center',
  userSelect: 'none',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default MonthYearLabel;
