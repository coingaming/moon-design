import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const SubtextWrapper = styled.div(({ theme }) => ({
  gridArea: 'description',
  fontSize: rem(12),
  lineHeight: rem(16),
  color: theme.color.trunks[100],
  display: 'flex',
  flex: 1,
  minWidth: 0,
}));

export default SubtextWrapper;
