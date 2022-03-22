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
    marginTop: '50%', // 50% *** higher value shrinks part1 (red, pink)
    height: '50%', // 50% *** higher value shrinks part1 (red, pink) --------------
    after: {
      width: '76%', // 80% higher value shrinks pink and blue --------------
      height: '154%', // 160% higher value shrinks red and pink --------------
      marginTop: '-38%', // -40%, *** higher negative value shrinks part2 (green, blue) --------------
      marginInlineStart: '12%', // 10% lower value shrinks green and red --------------
    },
  },
  small: {
    marginTop: '50%', // 50% *** higher value shrinks part1 (red, pink)
    height: '50%', // 50% *** higher value shrinks part1 (red, pink) --------------
    after: {
      width: '80%', // 80% higher value shrinks pink and blue --------------
      height: '160%', // 160% higher value shrinks red and pink --------------
      marginTop: '-40%', // -40%, *** higher negative value shrinks part2 (green, blue) --------------
      marginInlineStart: '10%', // 10% lower value shrinks green and red --------------
    },
  },
  medium: {
    marginTop: '49%', // 50% *** higher value shrinks part1 (red, pink)
    height: '51%', // 50% *** higher value shrinks part1 (red, pink) --------------
    after: {
      width: '78%', // 80% higher value shrinks pink and blue --------------
      height: '157%', // 160% higher value shrinks red and pink --------------
      marginTop: '-38%', // -40%, *** higher negative value shrinks part2 (green, blue) --------------
      marginInlineStart: '11%', // 10% lower value shrinks green and red --------------
    },
  },
  large: {
    marginTop: '50%', // 50% *** higher value shrinks part1 (red, pink)
    height: '50%', // 50% *** higher value shrinks part1 (red, pink) --------------
    after: {
      width: '80%', // 80% higher value shrinks pink and blue --------------
      height: '160%', // 160% higher value shrinks red and pink --------------
      marginTop: '-40%', // -40%, *** higher negative value shrinks part2 (green, blue) --------------
      marginInlineStart: '10%', // 10% lower value shrinks green and red --------------
    },
  },
  xlarge: {
    marginTop: '49%', // 50% *** higher value shrinks part1 (red, pink)
    height: '51%', // 50% *** higher value shrinks part1 (red, pink) --------------
    after: {
      width: '83%', // 80% higher value shrinks pink and blue --------------
      height: '162%', // 160% higher value shrinks red and pink --------------
      marginTop: '-40%', // -40%, *** higher negative value shrinks part2 (green, blue) --------------
      marginInlineStart: '8%', // 10% lower value shrinks green and red --------------
    },
  },
};

const InnerCircle = styled.span<Props>(({ color, size, theme }) => ({
  width: '100%',
  height: sizeAdjustments[size ?? 'large']['height'],
  position: 'absolute',
  marginTop: sizeAdjustments[size ?? 'large']['marginTop'], // 50% *** higher value shrinks part1 (red, pink)
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
    height: '102%', // 100% lower values puts spaces between part1 and part2
    position: 'absolute',
    marginTop: '-50%', // -50% higher negative values puts spaces between part1 and part2
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
    width: sizeAdjustments[size ?? 'large']['after']['width'], // 80% higher value shrinks pink and blue --------------
    height: sizeAdjustments[size ?? 'large']['after']['height'], // 160% higher value shrinks red and pink --------------
    marginTop: sizeAdjustments[size ?? 'large']['after']['marginTop'], // -40%, *** higher negative value shrinks part2 (green, blue) --------------
    marginInlineStart:
      sizeAdjustments[size ?? 'large']['after']['marginInlineStart'], // 10% lower value shrinks green and red --------------
    background: 'white',
    borderRadius: '50%',
    position: 'absolute',
  },
}));

export default InnerCircle;
