import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';

const Caption = styled.span(({ theme, color }) => ({
  color,
  fontSize: rem(14),
  lineHeight: 1,
  fontWeight: theme.fontWeight.semibold,
}));

export default Caption;
