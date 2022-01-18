import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const SelectLabel = styled.span(({ theme: { colorNew } }) => ({
  display: 'block',
  fontSize: rem(16),
  lineHeight: rem(24),
  color: colorNew.bulma,
  paddingBottom: rem(8),
}));

export default SelectLabel;
