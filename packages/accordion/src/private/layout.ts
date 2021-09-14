import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const AccordionWrapper = styled.div(({ theme: { color, radius } }) => ({
  width: '100%',
  padding: rem(16),
  background: color.gohan[100],
  borderRadius: rem(radius.small),
  color: color.bulma[100],
}));

export const AccordionContent = styled.div(
  ({ isOpen }: { isOpen: boolean }) => ({
    overflow: 'hidden',
    height: isOpen ? '100%' : '0',
  })
);

export const ChildrenWrapper = styled.div(() => ({
  paddingTop: rem(16),
}));

export const AccordionHeader = styled.div<{ disabled?: boolean }>(
  ({ disabled }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    '> *:first-child': {
      flex: 1,
    },
  })
);

export const AccordionToggle = styled.button(
  ({ theme: { color, space }, disabled }) => ({
    padding: rem(space.small),
    verticalAlign: 'middle',
    fontSize: rem(space.small),
    lineHeight: 0,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: color.trunks[100],
    borderColor: 'transparent',
    backgroundColor: color.gohan[100],
  })
);

export const Divider = styled.div(({ theme: { color } }) => ({
  margin: `0 ${rem(8)} 0 ${rem(16)}`,
  width: 1,
  height: rem(16),
  background: color.beerus[100],
}));
