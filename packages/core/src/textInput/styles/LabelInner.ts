import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const LabelInner = styled.label(
  ({ theme: { colorNew, transitionDuration } }) => ({
    position: 'absolute',
    left: rem(16),
    fontSize: rem(12),
    lineHeight: rem(12),
    color: colorNew.trunks,
    top: rem(11),
    zIndex: 1,
    transition: `all ${transitionDuration.default}s ease`,
  })
);

export default LabelInner;
