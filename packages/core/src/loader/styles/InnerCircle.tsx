import { ColorProps, SharedTheme, Theme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const determineColor = (
  theme: Theme,
  color?: ColorProps,
  isTransparent?: boolean
) => {
  const colorToUse = color ?? theme.colorNew.bulma;
  const colorValue = themed('color', colorToUse)(theme);
  return colorValue + (isTransparent ? '00' : '99');
};

export interface Props {
  color?: ColorProps;
}

const InnerCircle = styled.span<Props>(({ color, theme }) => ({
  width: '100%',
  height: '50%',
  position: 'absolute',
  marginTop: '50%',
  background: `linear-gradient(90deg, ${determineColor(
    theme,
    color,
    true
  )}, ${determineColor(theme, color, false)})`,
  '&::before': {
    content: '""',
    width: '100%',
    height: '100%',
    position: 'absolute',
    marginTop: '-50%',
    background: `linear-gradient(90deg, ${determineColor(
      theme,
      color,
      false
    )}, ${determineColor(theme, color, false)})`,
  },
  '&::after': {
    content: '""',
    width: '80%',
    height: '160%',
    position: 'absolute',
    marginTop: '-40%',
    marginInlineStart: '10%',
    background: 'white',
    borderRadius: '50%',
  },
}));

export default InnerCircle;
