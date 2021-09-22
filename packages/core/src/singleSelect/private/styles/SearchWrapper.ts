import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const SearchWrapper = styled.div(({ theme: { border, color } }) => ({
  paddingBottom: rem(4),
  marginBottom: rem(4),
  borderBottom: border,
  borderColor: color.beerus[100],
}));

export default SearchWrapper;
