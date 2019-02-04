import { colors, spacing } from '@heathmont/sportsbet-tokens';

const inputSpacing = {
  y: spacing.small,
  x: spacing.default,
};

const inputIconSize = 10; // px
const inputIconOffset = inputIconSize + inputSpacing.x * 2;

const inputColors = {
  text: colors.neutral[20],
  icon: colors.neutral[30],
  border: colors.neutral[50],
  background: 'transparent',
  disabled: colors.neutral[50],
};

export { inputColors, inputIconSize, inputSpacing, inputIconOffset };
