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
  ({ color, colorNew }: Theme) => {
    const themedColor: InputColors = {
      label: colorNew.trunks,
      text: colorNew.bulma,
      icon: colorNew.trunks,
      placeholder: colorNew.trunks,
      borderDefault: colorNew.beerus,
      borderHover: color.goku[40],
      background: colorNew.gohan,
      disabled: color.goku[80],
    };

    return themedColor[key];
  };

const CheckboxInbox = styled.span(({ theme, dir }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: inputColors('label')(theme),
  borderRadius: theme.newTokens.borderRadius.xsmall,
  width: rem(24),
  height: rem(24),
  position: 'relative',
  transition: 'background-color 0.4s',
  ...(dir === 'rtl'
    ? { marginLeft: theme.newTokens.space.twoxsmall }
    : { marginRight: theme.newTokens.space.twoxsmall }),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },
  /* Psuedo Checkbox */
  '&::after': {
    content: '""',
    width: rem(16),
    height: rem(16),
    transition: theme.newTokens.transition.default,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `inset 0 0 0 0.1rem ${theme.colorNew.trunks}`,
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

export default CheckboxInbox;
