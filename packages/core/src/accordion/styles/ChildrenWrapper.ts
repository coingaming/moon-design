import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../private/Size';

const determineVerticalPadding = (isContentInside?: boolean, size?: Size) => {
  switch (size) {
    case 'large':
      return rem(12);
    case 'medium':
      return rem(8);
    case 'small':
      return rem(4);
    default:
      return rem(16);
  }
};

type Props = {
  isContentInside?: boolean;
  size?: Size;
};

const ChildrenWrapper = styled.div<Props>(({ isContentInside, size }) => ({
  display: 'block',
  padding: determineVerticalPadding(isContentInside, size),
}));

export default ChildrenWrapper;
