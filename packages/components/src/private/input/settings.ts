import {
  animation,
  border,
  colors,
  spacing,
} from '@heathmont/sportsbet-tokens';

const inputBorderWidth = border.width;
const inputAnimationSpeed = `${animation.speed.fast}s`;

const inputFontSize = 16;
const inputLineHeight = inputFontSize * 1.5;

const inputSpacingX = spacing.default - inputBorderWidth; // px
const inputSpacingY = 10 - inputBorderWidth;

const inputIconSize = 20; // px
const inputIconPosition = inputSpacingX;
const inputIconOffset = inputIconSize + inputSpacingX + inputIconPosition;

const inputColors = {
  label: colors.palette.trunks[100],
  text: colors.neutral[10],
  icon: colors.neutral[20],
  placeholder: colors.palette.gohan[40],
  border: {
    default: colors.palette.gohan[80],
    hover: colors.palette.gohan[60],
  },
  background: colors.palette.hit[80],
  disabled: colors.neutral[50],
};

const inputBorder = `${inputBorderWidth}px solid ${inputColors.border.default}`;

export {
  inputAnimationSpeed,
  inputBorder,
  inputBorderWidth,
  inputColors,
  inputFontSize,
  inputLineHeight,
  inputIconSize,
  inputSpacingX,
  inputSpacingY,
  inputIconOffset,
  inputIconPosition,
};
