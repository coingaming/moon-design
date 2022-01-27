import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SearchWrapper = styled.div(({ theme: { colorNew, newTokens } }) => ({
  paddingBottom: rem(4),
  marginBottom: rem(4),
  borderBottom: newTokens.border.default.join,
  borderColor: colorNew.beerus,
}));

export default SearchWrapper;
