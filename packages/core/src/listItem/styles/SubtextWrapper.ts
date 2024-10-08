import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SubtextWrapper = styled.div(({ theme }) => ({
  gridArea: 'description',
  fontSize: rem(12),
  lineHeight: rem(16),
  color: theme.colorNew.trunks,
  display: 'flex',
  flex: 1,
  minWidth: 0,
}));

export default SubtextWrapper;
