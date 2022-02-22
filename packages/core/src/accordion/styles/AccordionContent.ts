import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../private/Size';

const determineMarginTop = (isContentInside?: boolean, size?: Size) => {
  if (isContentInside) {
    switch (size) {
      case 'large':
        return rem(12);
      case 'medium':
        return rem(8);
      case 'small':
        return rem(4);
      default:
        return rem(16);
    }
  }
  return 0;
};

type Props = {
  isOpen?: boolean;
  isContentInside?: boolean;
  size?: Size;
};

const AccordionContent = styled.div<Props>(
  ({ theme: { newTokens }, isOpen, isContentInside, size }) => ({
    height: isOpen ? '100%' : '0',
    borderRadius: newTokens.borderRadius.xsmall,
    overflow: `hidden`,
    marginTop: isOpen ? determineMarginTop(isContentInside, size) : 0,
  })
);

export default AccordionContent;
