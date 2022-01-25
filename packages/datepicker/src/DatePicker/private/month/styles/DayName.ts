import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const DayName = styled.div(({ theme }) => ({
  height: rem(40),
  color: theme.colorNew.trunks,
  fontSize: rem(12),
  lineHeight: rem(40),
  textTransform: 'uppercase',
  textAlign: 'center',
  userSelect: 'none',
}));

export default DayName;
