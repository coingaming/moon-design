import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const SelectLabel = styled.span(({ theme: { color } }) => ({
  display: 'block',
  fontSize: rem(16),
  lineHeight: rem(24),
  color: color.bulma[100],
  paddingBottom: rem(8),
}));

export default SelectLabel;
