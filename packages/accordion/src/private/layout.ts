import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const AccordionWrapper = styled.div(
  ({ theme: { colorNew, newTokens } }) => ({
    width: '100%',
    padding: rem(16),
    background: colorNew.gohan,
    borderRadius: newTokens.borderRadius.medium,
    color: colorNew.bulma,
  })
);

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
  ({ theme: { colorNew, newTokens }, disabled }) => ({
    padding: newTokens.space.xsmall,
    verticalAlign: 'middle',
    fontSize: newTokens.space.xsmall,
    lineHeight: 0,
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: colorNew.trunks,
    borderColor: 'transparent',
    backgroundColor: colorNew.gohan,
  })
);

export const Divider = styled.div(({ theme: { colorNew } }) => ({
  margin: `0 ${rem(8)} 0 ${rem(16)}`,
  width: 1,
  height: rem(16),
  background: colorNew.beerus,
}));
