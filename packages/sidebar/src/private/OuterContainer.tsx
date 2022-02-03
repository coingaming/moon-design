import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { CollapseTarget } from './CollapseTarget';

export const OuterContainer = styled.div<{
  isOpen: boolean;
  openWidth: number;
  collapseWidth: number;
}>(({ isOpen, openWidth, collapseWidth, theme: { space } }) => ({
  height: isOpen ? '100vh' : rem(2 * space.large),
  width: rem(isOpen ? openWidth : collapseWidth),
  paddingRight: rem(0.75 * space.default),
  position: 'relative',
  [`&:hover > ${CollapseTarget}`]: {
    opacity: 1,
  },
  ...(isOpen
    ? {}
    : {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
      }),
}));
