import { rem, media } from '@heathmont/moon-utils';
import styled from 'styled-components';

const ButtonWrapper = styled.div(({ theme: { newTokens } }) => ({
  marginBottom: rem(8),
  [media(newTokens.breakpoint.medium)]: {
    marginBottom: 0,
    marginLeft: rem(8),
  },
}));

export default ButtonWrapper;
