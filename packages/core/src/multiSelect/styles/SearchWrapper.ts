import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SearchWrapper = styled.div(({ theme: { border, colorNew } }) => ({
  paddingBottom: rem(4),
  marginBottom: rem(4),
  borderBottom: border,
  borderColor: colorNew.beerus,
}));

export default SearchWrapper;
