import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Container = styled.strong(({ theme: { space } }) => ({
  display: 'inline-block',
  position: 'relative',
  width: rem(space.default),
  height: rem(space.default),
}));

export default Container;
