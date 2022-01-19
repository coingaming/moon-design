import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const MetaWrapper = styled.span(({ theme }) => ({
  gridArea: 'meta',
  color: theme.colorNew.trunks,
  fontSize: rem(12),
  lineHeight: theme.newTokens.size.twoxsmall,
  marginLeft: theme.newTokens.space.xsmall,
  alignSelf: 'center',
}));

export default MetaWrapper;
