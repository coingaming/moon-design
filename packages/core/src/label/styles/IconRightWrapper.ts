import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../../private/enums/Size';
import IconProps from '../types/IconProps';

const IconRightWrapper = styled.span<IconProps>(({ size }) => ({
  marginInlineStart: rem(4),
  '& svg': {
    fontSize: size === Size.TWOXSMALL ? rem(12) : rem(16),
  },
}));

export default IconRightWrapper;
