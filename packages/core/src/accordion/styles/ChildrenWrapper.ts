import { SharedTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../private/Size';

const determineVerticalPadding = (
  newTokens: SharedTheme['newTokens'],
  size?: Size
) => {
  switch (size) {
    case 'large':
      return newTokens.space.xsmall;
    case 'medium':
      return newTokens.space.twoxsmall;
    case 'small':
      return newTokens.space.threexsmall;
    default:
      return newTokens.space.small;
  }
};

type Props = {
  size?: Size;
};

const ChildrenWrapper = styled.div<Props>(({ theme: { newTokens }, size }) => ({
  display: 'block',
  padding: determineVerticalPadding(newTokens, size),
}));

export default ChildrenWrapper;
