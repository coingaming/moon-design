import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Container = styled.strong(({ theme: { newTokens } }) => ({
  display: 'inline-block',
  position: 'relative',
  width: newTokens.space.small,
  height: newTokens.space.small,
}));

export default Container;
