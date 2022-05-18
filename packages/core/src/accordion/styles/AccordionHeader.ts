import styled from 'styled-components';
import Size from '../../private/enums/Size';
import setFontSize from '../private/utils/setFontSize';
import setHeight from '../private/utils/setHeight';
import setSpacing from '../private/utils/setSpacing';
import type SizeProps from '../private/SizeProps';

type Props = {
  disabled?: boolean;
  isContentInside?: boolean;
  size?: SizeProps;
};

const AccordionHeader = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, disabled, isContentInside, size }) => ({
    backgroundColor: colorNew.gohan,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    padding: isContentInside ? 0 : setSpacing(true, size),
    borderRadius: isContentInside ? 0 : newTokens.borderRadius.medium,
    '> *:first-child': {
      flex: 1,
    },
    height: setHeight(isContentInside, size),
    '> h3': {
      fontSize: setFontSize(newTokens, size),
    },
    textTransform: size === Size.SMALL ? 'uppercase' : 'none',
  })
);

export default AccordionHeader;
