import styled from 'styled-components';
import setSpacing from '../private/utils/setSpacing';
import type SizeProps from '../private/SizeProps';

type Props = {
  isOpen?: boolean;
  isContentInside?: boolean;
  size?: SizeProps;
};

const AccordionContent = styled.div<Props>(
  ({ theme: { newTokens }, isOpen, isContentInside, size }) => ({
    height: isOpen ? '100%' : '0',
    borderRadius: newTokens.borderRadius.surface.xsmall,
    overflow: `hidden`,
    marginTop: isOpen ? setSpacing(isContentInside, size) : 0,
  })
);

export default AccordionContent;
