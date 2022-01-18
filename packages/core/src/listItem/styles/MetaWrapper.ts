import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const MetaWrapper = styled.span(({ theme }) => ({
  gridArea: 'meta',
  color: theme.colorNew.trunks,
  fontSize: rem(12),
  lineHeight: rem(16),
  marginLeft: rem(8),
  alignSelf: 'center',
}));

export default MetaWrapper;
