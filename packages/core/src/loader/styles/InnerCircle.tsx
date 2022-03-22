import { ColorProps, Theme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { Size } from '../private/Size';

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
  size?: Size;
}

const sizeAdjustments = {
  xsmall: {
    marginTop: '50%',
    height: '50%',
    after: {
      width: '76%',
      height: '154%',
      marginTop: '-38%',
      marginInlineStart: '12%',
    },
  },
  small: {
    marginTop: '50%',
    height: '50%',
    after: {
      width: '80%',
      height: '160%',
      marginTop: '-40%',
      marginInlineStart: '10%',
    },
  },
  medium: {
    marginTop: '49%',
    height: '51%',
    after: {
      width: '79%',
      height: '157%',
      marginTop: '-39%',
      marginInlineStart: '10%',
    },
  },
  large: {
    marginTop: '50%',
    height: '50%',
    after: {
      width: '80%',
      height: '160%',
      marginTop: '-40%',
      marginInlineStart: '10%',
    },
  },
  xlarge: {
    marginTop: '49%',
    height: '51%',
    after: {
      width: '83%',
      height: '162%',
      marginTop: '-40%',
      marginInlineStart: '8%',
    },
  },
};

const InnerCircle = styled.span<Props>(({ color, size, theme }) => ({
  width: '100%',
  height: sizeAdjustments[size ?? 'large']['height'],
  position: 'absolute',
  marginTop: sizeAdjustments[size ?? 'large']['marginTop'],
  background: `linear-gradient(90deg, ${determineColor(
    theme,
    color,
    true
  )}, ${determineColor(theme, color, false)})`,
  // Dark part
  '&::before': {
    content: '""',
    width: '100%',
    height: '102%',
    position: 'absolute',
    marginTop: '-50%',
    background: `linear-gradient(90deg, ${determineColor(
      theme,
      color,
      false
    )}, ${determineColor(theme, color, false)})`,
  },
  // Light part
  '&::after': {
    content: '""',
    width: sizeAdjustments[size ?? 'large']['after']['width'],
    height: sizeAdjustments[size ?? 'large']['after']['height'],
    marginTop: sizeAdjustments[size ?? 'large']['after']['marginTop'],
    marginInlineStart:
      sizeAdjustments[size ?? 'large']['after']['marginInlineStart'],
    background: 'white',
    borderRadius: '50%',
    position: 'absolute',
  },
}));

export default InnerCircle;
