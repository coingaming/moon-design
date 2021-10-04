import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const InnerLabel = styled.div(({ theme: { color } }) => ({
  color: color.trunks[100],
  fontSize: rem(12),
  lineHeight: rem(16),
}));

export default InnerLabel;
