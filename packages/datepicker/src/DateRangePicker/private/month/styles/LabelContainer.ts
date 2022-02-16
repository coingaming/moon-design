import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LabelContainer = styled.div(
  ({ theme: { newTokens, colorNew, hover } }) => ({
    fontSize: rem(14),
    lineHeight: rem(24),
    color: colorNew.bulma,
    borderRadius: newTokens.borderRadius.medium,
    padding: `${rem(8)} ${rem(12)}`,
    marginBottom: rem(4),
    cursor: 'pointer',
    '&:hover': {
      color: colorNew.piccolo,
      backgroundColor: hover.secondary,
    },
  })
);

export default LabelContainer;
