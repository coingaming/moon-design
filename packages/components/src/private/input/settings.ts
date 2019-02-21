import { border, colors, spacing } from '@heathmont/sportsbet-tokens';

const inputBorderWidth = border.width;
const inputAnimationSpeed = '0.2s';

const inputSpacing = spacing.default - inputBorderWidth * 2; // px

const inputIconSize = 10; // px
const inputIconOffset = inputIconSize + inputSpacing * 2;

const inputColors = {
  label: colors.neutral[20],
  text: colors.neutral[10],
  icon: colors.neutral[30],
  border: colors.neutral[50],
  background: 'transparent',
  disabled: colors.neutral[50],
};

export {
  inputAnimationSpeed,
  inputBorderWidth,
  inputColors,
  inputIconSize,
  inputSpacing,
  inputIconOffset,
};
