import { MainColors } from '../../supportColors/supportColors';

const baseFontSize = 16;

const rem = (value: number) => `${value / baseFontSize}rem`;

const getFocusTokens = (mainColors: MainColors) => ({
  focus: `0 0 0 ${rem(4)} ${mainColors.piccolo}20`,
});

export default getFocusTokens;
