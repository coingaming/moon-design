import { SharedTheme } from '@heathmont/moon-themes';
import styled from 'styled-components';
import Size from '../private/Size';

const determinePadding = (
  newTokens: SharedTheme['newTokens'],
  isContentInside?: boolean,
  size?: Size
) => {
  if (isContentInside) {
    switch (size) {
      case 'large':
        return newTokens.space.xsmall;
      case 'medium':
        return newTokens.space.twoxsmall;
      case 'small':
        return newTokens.space.threexsmall;
      default:
        return newTokens.space.small;
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
    padding: determinePadding(newTokens, isContentInside, size),
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
