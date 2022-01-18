import { ColorValue, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

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

const checkboxSize = (theme: Theme) => theme.space.default;
const checkboxGap = (theme: Theme) => theme.space.xsmall * 2;
const captionMargin = (theme: Theme) =>
  rem(checkboxSize(theme) + checkboxGap(theme));
const inputColors =
  (key: keyof InputColors) =>
  ({ color, colorNew }: Theme) => {
    const themedColor: InputColors = {
      label: colorNew.trunks,
      text: colorNew.bulma,
      icon: colorNew.trunks,
      placeholder: colorNew.trunks,
      borderDefault: color.beerus[100],
      borderHover: color.goku[40],
      background: color.gohan[100],
      disabled: color.goku[80],
    };

    return themedColor[key];
  };

const CheckboxCaption = styled.span(({ theme, dir }) => ({
  display: 'inline-block',
  ...(dir === 'rtl'
    ? { marginRight: captionMargin(theme) }
    : { marginLeft: captionMargin(theme) }),
  color: inputColors('label')(theme),
  '&::before, &::after': {
    content: '""',
    width: rem(checkboxSize(theme)),
    height: rem(checkboxSize(theme)),
    position: 'absolute',
    ...(dir === 'rtl' ? { right: 0 } : { left: 0 }),
    top: '50%',
    transform: 'translate(0%, -50%)',
    transitionDuration: `${theme.transitionDuration.default}s`,
    transitionTimingFunction: 'ease',
  },
  /* Pseudo Checkbox Circle */
  '&::before': {
    position: 'absolute',
    top: '15%',
    transform: 'translate(0%, -15%)',
    backgroundColor: inputColors('borderHover')(theme),
    borderRadius: '50%',
    opacity: 0,
    transitionProperty: 'background-color, transform, opacity',
    willChange: 'transform, opacity',
  },
  /* Psuedo Checkbox */
  '&::after': {
    border: `${rem(2)} solid ${theme.colorNew.trunks}`,
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

export default CheckboxCaption;
