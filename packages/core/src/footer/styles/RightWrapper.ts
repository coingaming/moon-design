import { media } from '@heathmont/moon-utils';
import styled from 'styled-components';

const RightWrapper = styled.div(({ theme: { newTokens } }) => ({
  display: 'flex',
  flexDirection: 'column',
  [media(newTokens.breakpoint.medium)]: {
    flexDirection: 'row-reverse',
  },
}));

export default RightWrapper;
