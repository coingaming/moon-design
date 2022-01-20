import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Caption = styled.span(({ theme, color }) => ({
  color,
  fontSize: rem(14),
  lineHeight: 1,
  fontWeight: theme.newTokens.font.weight.semibold,
}));

export default Caption;
