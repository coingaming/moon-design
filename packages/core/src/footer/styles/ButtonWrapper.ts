import styled from 'styled-components';
import { rem, mq } from '@heathmont/moon-utils';

const ButtonWrapper = styled.div(({ theme: { breakpoint } }) => ({
  marginBottom: rem(8),
  [mq(breakpoint.medium)]: {
    marginBottom: 0,
    marginLeft: rem(8),
  },
}));

export default ButtonWrapper;
