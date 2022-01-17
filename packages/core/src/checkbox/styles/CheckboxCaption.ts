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

const CheckboxCaption = styled.span(({ theme, dir }) => ({
  display: 'inline-block',
  ...(dir === 'rtl'
    ? { marginRight: theme.newTokens.space.medium }
    : { marginLeft: theme.newTokens.space.medium }),
  color: inputColors('label')(theme),
  '&::before, &::after': {
    content: '""',
    width: theme.newTokens.size.twoxsmall,
    height: theme.newTokens.size.twoxsmall,
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
    border: `${rem(2)} solid ${theme.color.trunks[100]}`,
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

export default CheckboxCaption;
