import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const LabelInner = styled.label(({ theme: { color, transitionDuration } }) => ({
  position: 'absolute',
  left: rem(16),
  fontSize: rem(12),
  lineHeight: rem(12),
  color: color.trunks[100],
  top: rem(11),
  zIndex: 3,
  transition: `all ${transitionDuration.default}s ease`,
}));

export default LabelInner;
