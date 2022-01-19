import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const CollapseTarget = styled.div<{ isOpen: boolean }>(
  ({ isOpen, theme: { space, colorNew, transitionDuration, boxShadow } }) => ({
    fontSize: rem(space.small),
    padding: rem(space.small),
    background: colorNew.gohan,
    transitionProperty: 'opacity color',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: `${transitionDuration.slow}s`,
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    opacity: isOpen ? 0 : 1,
    boxShadow,
    color: colorNew.trunks,
    '&:hover': {
      color: colorNew.piccolo,
    },
    ...(isOpen
      ? {
          position: 'absolute',
          top: rem(space.large),
          transform: 'translateY(-50%)',
          right: 0,
        }
      : {
          marginLeft: rem(space.small),
        }),
  })
);
