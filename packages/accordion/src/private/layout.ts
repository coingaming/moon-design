import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

export const AccordionWrapper = styled.div(({ theme: { color, radius } }) => ({
  width: '100%',
  padding: rem(16),
  background: color.gohan[100],
  borderRadius: rem(radius.default),
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

export const AccordionHeader = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  > *:first-child {
    flex: 1;
  }
`;
