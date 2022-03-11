import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { Size } from '../private/Size';

const determineDimensions = (size?: Size) => {
  switch (size) {
    case 'small':
      return {
        width: rem(24),
        height: rem(24),
      };
    case 'medium':
      return {
        width: rem(32),
        height: rem(32),
      };
    case 'large':
      return {
        width: rem(40),
        height: rem(40),
      };
    case 'xlarge':
      return {
        width: rem(48),
        height: rem(48),
      };
    default:
      return {
        width: rem(16),
        height: rem(16),
      };
  }
};

type Props = {
  size?: Size;
};

const Container = styled.div<Props>(({ size }) => ({
  display: 'inline-block',
  position: 'relative',
  ...determineDimensions(size),
}));

export default Container;
