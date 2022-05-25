import { ColorProps, SharedTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const makeBorderRadius = (
  borderRadius: SharedTheme['newTokens']['borderRadius'],
  isSharpLeftSide?: boolean,
  isSharpRightSide?: boolean,
  isSharpTopSide?: boolean,
  isSharpBottomSide?: boolean
) => {
  return {
    borderTopLeftRadius:
      isSharpLeftSide || isSharpTopSide ? 0 : borderRadius.interactive.medium,
    borderTopRightRadius:
      isSharpRightSide || isSharpTopSide ? 0 : borderRadius.interactive.medium,
    borderBottomLeftRadius:
      isSharpLeftSide || isSharpBottomSide
        ? 0
        : borderRadius.interactive.medium,
    borderBottomRightRadius:
      isSharpRightSide || isSharpBottomSide
        ? 0
        : borderRadius.interactive.medium,
  };
};

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
