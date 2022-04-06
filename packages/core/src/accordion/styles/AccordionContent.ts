import styled from 'styled-components';
import Size from '../private/Size';
import determineSpacing from '../private/utils/determineSpacing';

type Props = {
  isOpen?: boolean;
  isContentInside?: boolean;
  size?: Size;
};

const AccordionContent = styled.div<Props>(
  ({ theme: { newTokens }, isOpen, isContentInside, size }) => ({
    height: isOpen ? '100%' : '0',
    borderRadius: newTokens.borderRadius.xsmall,
    overflow: 'hidden',
    marginTop: isOpen ? determineSpacing(newTokens, isContentInside, size) : 0,
  })
);

export default AccordionContent;
