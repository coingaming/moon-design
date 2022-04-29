import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../../private/enums/Size';
import IconProps from '../private/types/IconProps';

const IconLeftWrapper = styled.span<IconProps>(({ size }) => ({
  marginInlineEnd: rem(4),
  '& svg': {
    fontSize: size === Size.TWOXSMALL ? rem(12) : rem(16),
  },
}));

export default IconLeftWrapper;
