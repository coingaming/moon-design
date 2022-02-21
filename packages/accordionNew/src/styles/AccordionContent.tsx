import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const AccordionContent = styled.div<{ isOpen?: boolean }>(
  ({ theme: { newTokens }, isOpen }) => ({
    height: isOpen ? '100%' : '0',
    backgroundColor: `rgba(78, 70, 180, 0.12)`, //TODO add a new color name
    borderRadius: newTokens.borderRadius.xsmall,
    overflow: `hidden`,
    marginTop: isOpen ? rem(16) : 0,
  })
);

export default AccordionContent;
