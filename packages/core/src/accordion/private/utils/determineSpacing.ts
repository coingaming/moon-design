import { SharedTheme } from '@heathmont/moon-themes';
import Size from '../Size';

const determineSpacing = (
  newTokens: SharedTheme['newTokens'],
  isContentInside?: boolean,
  size?: Size
) => {
  if (isContentInside) {
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
  }
  return 0;
};

export default determineSpacing;
