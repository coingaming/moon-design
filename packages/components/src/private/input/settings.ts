import { Theme } from '@heathmont/moon-themes';

const inputBorderWidth = ({ borderWidth }: Theme) => borderWidth;
const inputAnimationSpeed = ({ transitionDuration }: Theme) =>
  `${transitionDuration.default}s`;

const inputFontSize = 16;
const inputLineHeight = inputFontSize * 1.5;

const inputSpacingX = (theme: Theme) =>
  theme.space.default - inputBorderWidth(theme); // px
const inputSpacingY = (theme: Theme) => 10 - inputBorderWidth(theme); // px

const inputIconSize = 20; // px
const inputIconPosition = (theme: Theme) => inputSpacingX(theme);
const inputIconOffset = (theme: Theme) =>
  inputIconSize + inputSpacingX(theme) + inputIconPosition(theme);

type ColorValue = string | undefined;

type InputColors = {
  label: ColorValue;
  text: ColorValue;
  icon: ColorValue;
  placeholder: ColorValue;
  borderDefault: ColorValue;
  borderHover: ColorValue;
  background: ColorValue;
  disabled: ColorValue;
  [key: string]: ColorValue;
};

const inputColors =
  (key: keyof InputColors) =>
  ({ color }: Theme) => {
    const themedColor: InputColors = {
      label: color.trunks[100],
      text: color.bulma[100],
      icon: color.trunks[100],
      placeholder: color.trunks[100],
      borderDefault: color.beerus[100],
      borderHover: color.goku[40],
      background: color.gohan[100],
      disabled: color.goku[80],
    };

    return themedColor[key];
  };

const inputBorder = (theme: Theme) =>
  `${inputBorderWidth(theme)}px solid ${inputColors('borderDefault')(theme)}`;

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
