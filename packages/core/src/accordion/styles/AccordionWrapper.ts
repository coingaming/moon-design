import styled from 'styled-components';
import Size from '../private/Size';
import determineSpacing from '../private/utils/determineSpacing';

type Props = {
  isContentInside?: boolean;
  size?: Size;
};

const AccordionWrapper = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, isContentInside, size }) => ({
    padding: determineSpacing(newTokens, isContentInside, size),
    backgroundColor: isContentInside ? colorNew.gohan : 'transparent',
    width: '100%',
    borderRadius: newTokens.borderRadius.surface.small,
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })
);

export default AccordionWrapper;
