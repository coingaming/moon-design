import {
  animation,
  border,
  colors,
  spacing,
} from '@heathmont/sportsbet-tokens';

const inputBorderWidth = border.width;
const inputAnimationSpeed = `${animation.speed.fast}s`;

const inputSpacing = spacing.default - inputBorderWidth * 2; // px

const inputIconSize = 20; // px
const inputIconPosition = spacing.small;
const inputIconOffset = inputIconSize + inputSpacing + inputIconPosition;

const inputColors = {
  label: colors.neutral[20],
  text: colors.neutral[10],
  icon: colors.neutral[30],
  border: colors.neutral[70],
  background: colors.neutral[75],
  disabled: colors.neutral[50],
};

const inputBorder = `${inputBorderWidth}px solid ${inputColors.border}`;

export {
  inputAnimationSpeed,
  inputBorder,
  inputBorderWidth,
  inputColors,
  inputIconSize,
  inputSpacing,
  inputIconOffset,
  inputIconPosition,
};
