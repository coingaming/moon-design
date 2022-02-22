import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../private/Size';

const determinePadding = (isContentInside?: boolean, size?: Size) => {
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
  isContentInside?: boolean;
  size?: Size;
};

const AccordionWrapper = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, isContentInside, size }) => ({
    padding: determinePadding(isContentInside, size),
    backgroundColor: isContentInside ? colorNew.gohan : 'transparent',
    width: '100%',
    borderRadius: newTokens.borderRadius.medium,
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })
);

export default AccordionWrapper;
