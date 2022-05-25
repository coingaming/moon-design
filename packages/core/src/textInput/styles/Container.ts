import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import makeBorderRadius from '../private/makeBorderRadius';

type ContainerProps = {
  disabled?: boolean;
  isSharpLeftSide?: boolean;
  isSharpRightSide?: boolean;
  isSharpTopSide?: boolean;
  isSharpBottomSide?: boolean;
  bgColor?: ColorProps;
};

const Container = styled.div<ContainerProps>(
  ({
    disabled,
    isSharpLeftSide,
    isSharpRightSide,
    isSharpTopSide,
    isSharpBottomSide,
    bgColor = 'gohan',
    theme: currentTheme,
    theme: {
      newTokens: { borderRadius },
    },
  }) => [
    {
      width: '100%',
      maxWidth: '100%',
      position: 'relative',
      zIndex: 0,
      backgroundColor: !bgColor
        ? 'transparent'
        : themed('colorNew', bgColor)(currentTheme),
      ...makeBorderRadius(
        borderRadius,
        isSharpLeftSide,
        isSharpRightSide,
        isSharpTopSide,
        isSharpBottomSide
      ),
    },
    disabled && {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  ]
);

export default Container;
