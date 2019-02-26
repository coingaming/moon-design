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
  border: colors.neutral[40],
  background: 'transparent',
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
};
