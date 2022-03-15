import { ColorProps, Theme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const determineColor = (
  theme: Theme,
  color?: ColorProps,
  isTransparent?: boolean
) => {
  const colorToUse = color ?? theme.colorNew.bulma;
  const colorValue = themed('color', colorToUse)(theme);
  return colorValue + (isTransparent ? '00' : 'FF');
};

export interface Props {
  color?: ColorProps;
}

const InnerCircle = styled.span<Props>(({ color, theme }) => ({
  width: '100%',
  height: '50%', // 50%
  position: 'absolute',
  marginTop: '40%', // 50%
  // background: `linear-gradient(90deg, ${determineColor(
  //   theme,
  //   color,
  //   true
  // )}, ${determineColor(theme, color, false)})`,
  background: `linear-gradient(90deg, red, pink)`,
  // Dark part
  '&::before': {
    content: '""',
    width: '100%', // 100%
    height: '100%', // 100%
    position: 'absolute',
    marginTop: '-55%', // -50%
    // background: `linear-gradient(90deg, ${determineColor(
    //   theme,
    //   color,
    //   false
    // )}, ${determineColor(theme, color, false)})`,
    background: `linear-gradient(90deg, green, blue)`,
  },
  // Light part
  '&::after': {
    content: '""',
    width: '80%', // 80%
    height: '160%', // 160%
    position: 'absolute',
    marginTop: '-30%', // -40%,
    marginInlineStart: '10%', // 10%
    background: 'white',
    borderRadius: '50%',
  },
}));

export default InnerCircle;
