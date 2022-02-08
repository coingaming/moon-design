import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LabelContainer = styled.div(({ theme} ) => ({
  fontSize: rem(14),
  lineHeight: rem(24),
  color: theme.colorNew.bulma,
  borderRadius: theme.newTokens.borderRadius.medium,
  padding: `${rem(8)} ${rem(12)}`,
  marginBottom: rem(4),
  cursor: 'pointer',
  '&:hover': {
    color: theme.colorNew.piccolo,
    backgroundColor: theme.hover.secondary,
  },
}));

export default LabelContainer;
