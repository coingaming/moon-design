import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const InnerLabel = styled.div(({ theme: { colorNew } }) => ({
  color: colorNew.trunks,
  fontSize: rem(12),
  lineHeight: rem(16),
}));

export default InnerLabel;
