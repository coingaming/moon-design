import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Inner = styled.div<{ bgColor?: ColorProps }>(
  ({
    theme: currentTheme,
    theme: {
      newTokens: { borderRadius },
    },
    bgColor,
  }) => ({
    width: '100%',
    maxWidth: '50%',
    position: 'relative',
    borderRadius: borderRadius.surface.medium,
    backgroundColor: !bgColor
      ? 'transparent'
      : themed('colorNew', bgColor)(currentTheme),
  })
);

export default Inner;
