import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SelectorContainer = styled.div(({ theme: { newTokens, colorNew } }) => ({
  zIndex: 100,
  height: rem(260),
  overflow: 'scroll',
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: colorNew.gohan,
  borderRadius: newTokens.borderRadius.large,
  boxShadow: newTokens.boxShadow.large,
  padding: `${rem(6)} ${rem(8)}`,
}));

export default SelectorContainer;
