import { SharedTheme } from '@heathmont/moon-components/node_modules/@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Size from '../private/Size';

const determineHeight = (isContentInside?: boolean, size?: Size) => {
  if (isContentInside) {
    return rem(24);
  } else {
    switch (size) {
      case 'large':
        return rem(48);
      case 'medium':
        return rem(40);
      case 'small':
        return rem(32);
      default:
        return rem(56);
    }
  }
};

const determineFontSize = (
  newTokens: SharedTheme['newTokens'],
  size?: Size
) => {
  switch (size) {
    case 'large':
      return `calc(${newTokens.font.size} * 0.875)`;
    case 'medium':
      return `calc(${newTokens.font.size} * 0.75)`;
    case 'small':
      return `calc(${newTokens.font.size} * 0.625)`;
    default:
      return newTokens.font.size;
  }
};

const determinePaddingForContentOutside = (size?: Size) => {
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
};

type Props = {
  disabled?: boolean;
  isContentInside?: boolean;
  size?: Size;
};

const AccordionHeader = styled.div<Props>(
  ({ theme: { colorNew, newTokens }, disabled, isContentInside, size }) => ({
    backgroundColor: colorNew.gohan,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    position: 'relative',
    padding: isContentInside ? 0 : determinePaddingForContentOutside(size),
    borderRadius: isContentInside ? 0 : newTokens.borderRadius.medium,
    '> *:first-child': {
      flex: 1,
    },
    height: determineHeight(isContentInside, size),
    '> h3': {
      fontSize: determineFontSize(newTokens, size),
    },
    textTransform: size === 'small' ? 'uppercase' : 'none',
  })
);

export default AccordionHeader;
