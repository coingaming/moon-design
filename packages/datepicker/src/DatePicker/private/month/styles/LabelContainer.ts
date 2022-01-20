import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LabelContainer = styled.div(({ theme: { color, newTokens } }) => ({
  fontSize: rem(14),
  lineHeight: rem(24),
  color: color.bulma[100],
  borderRadius: newTokens.borderRadius.medium,
  padding: `${rem(8)} ${rem(12)}`,
  marginBottom: rem(4),
  cursor: 'pointer',
  '&:hover': {
    color: color.piccolo[100],
    backgroundColor: newTokens.hover.secondary,
  },
}));

export default LabelContainer;
