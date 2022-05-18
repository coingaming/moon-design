import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type Props = {
  isRtl?: boolean;
  isOpen: boolean;
};

export const CollapseTarget = styled.div<Props>(
  ({ isOpen, isRtl, theme: { colorNew, transitionDuration, boxShadow } }) => ({
    fontSize: rem(4),
    padding: rem(4),
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
          top: rem(32),
          transform: 'translateY(-50%)',
          ...(isRtl ? { left: 0 } : { right: 0 }),
        }
      : {
          marginInlineEnd: rem(4),
        }),
  })
);
