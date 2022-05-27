import { SharedTheme } from '@heathmont/moon-themes';

const makeBorderRadius = (
  borderRadius: SharedTheme['newTokens']['borderRadius'],
  isSharpLeftSide?: boolean,
  isSharpRightSide?: boolean,
  isSharpTopSide?: boolean,
  isSharpBottomSide?: boolean
) => {
  return {
    borderTopLeftRadius:
      isSharpLeftSide || isSharpTopSide ? 0 : borderRadius.surface.medium,
    borderTopRightRadius:
      isSharpRightSide || isSharpTopSide ? 0 : borderRadius.surface.medium,
    borderBottomLeftRadius:
      isSharpLeftSide || isSharpBottomSide ? 0 : borderRadius.surface.medium,
    borderBottomRightRadius:
      isSharpRightSide || isSharpBottomSide ? 0 : borderRadius.surface.medium,
  };
};

export default makeBorderRadius;
