import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

const Inner = styled.div<{ bgColor?: ColorProps }>(({ theme, bgColor }) => ({
  width: '100%',
  maxWidth: '100%',
  position: 'relative',
  borderRadius: rem(theme.radius.largest),
  backgroundColor: !bgColor ? 'transparent' : themed('color', bgColor)(theme),
}));

export default Inner;
