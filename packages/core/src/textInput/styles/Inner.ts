import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Inner = styled.div(({ theme: { radius } }) => ({
  width: '100%',
  maxWidth: '100%',
  position: 'relative',
  borderRadius: rem(radius.largest),
}));

export default Inner;
