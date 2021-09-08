import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const MetaWrapper = styled.span(({ theme }) => ({
  gridArea: 'meta',
  color: theme.color.trunks[100],
  fontSize: rem(12),
  lineHeight: rem(16),
  marginLeft: rem(8),
  alignSelf: 'center',
}));

export default MetaWrapper;
