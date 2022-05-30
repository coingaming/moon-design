import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { CollapseTarget } from './CollapseTarget';

type Props = {
  isOpen: boolean;
  openWidth: number;
  collapseWidth: number;
};

export const OuterContainer = styled.div<Props>(
  ({ isOpen, openWidth, collapseWidth }) => ({
    height: isOpen ? '100vh' : rem(64),
    width: rem(isOpen ? openWidth : collapseWidth),
    paddingInlineEnd: rem(12),
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
  })
);
