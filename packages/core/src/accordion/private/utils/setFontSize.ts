import { SharedTheme } from '@heathmont/moon-themes';
import Size from '../../../private/enums/Size';
import SizeProps from '../SizeProps';

const setFontSize = (newTokens: SharedTheme['newTokens'], size?: SizeProps) => {
  switch (size) {
    case Size.LARGE:
      return `calc(${newTokens.font.size} * 0.875)`;
    case Size.MEDIUM:
      return `calc(${newTokens.font.size} * 0.75)`;
    case Size.SMALL:
      return `calc(${newTokens.font.size} * 0.625)`;
    default:
      return newTokens.font.size;
  }
};

export default setFontSize;
