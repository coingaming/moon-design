import { ColorProps, Theme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { Size } from '../private/Size';

const determineColor = (
  theme: Theme,
  color?: ColorProps,
  isStartColor?: boolean,
  isEndGradient?: boolean
) => {
  const colorToUse = color ?? theme.colorNew.bulma;
  const colorValue = themed('color', colorToUse)(theme);
  if (isStartColor && !isEndGradient) {
    return colorValue + 'FF';
  } else if (isStartColor && isEndGradient) {
    return colorValue + '80';
  } else if (!isStartColor && !isEndGradient) {
    return colorValue + '80';
  }
  return colorValue + '00';
};

export interface Props {
  color?: ColorProps;
  size?: Size;
}

const sizeAdjustments = {
  twoxsmall: {
    marginTop: '50%',
    height: '50%',
    after: {
      width: '76%',
      height: '154%',
      marginTop: '-38%',
      marginInlineStart: '12%',
    },
  },
  xsmall: {
    marginTop: '50%',
    height: '50%',
    after: {
      width: '80%',
      height: '160%',
      marginTop: '-40%',
      marginInlineStart: '10%',
    },
  },
  small: {
    marginTop: '49%',
    height: '51%',
    after: {
      width: '78%',
      height: '152%',
      marginTop: '-38%',
      marginInlineStart: '11%',
    },
  },
  medium: {
    marginTop: '50%',
    height: '50%',
    after: {
      width: '80%',
      height: '160%',
      marginTop: '-40%',
      marginInlineStart: '10%',
    },
  },
  large: {
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
  background: `linear-gradient(90deg,
    ${determineColor(theme, color, false, false)}, ${determineColor(
    theme,
    color,
    true,
    false
  )})`,
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
      true,
      true
    )}, ${determineColor(theme, color, false, true)})`,
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
