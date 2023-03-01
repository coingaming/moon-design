import styled from 'styled-components';
import setSpacing from '../private/utils/setSpacing';
import type SizeProps from '../private/SizeProps';

type Props = {
  isContentInside?: boolean;
  size?: SizeProps;
};

const AccordionWrapper = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, isContentInside, size }) => ({
    padding: setSpacing(isContentInside, size),
    backgroundColor: isContentInside ? colorNew.gohan : 'transparent',
    width: '100%',
    borderRadius: newTokens.borderRadius.surface.small,
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  })
);

export default AccordionWrapper;
