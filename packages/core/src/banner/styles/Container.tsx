import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const setPadding = (isMobile?: boolean, isSingleLine?: boolean) => {
  if (isSingleLine) {
    return rem(8);
  }
  if (isMobile) {
    return rem(16);
  }
  return rem(24);
};

type Props = {
  hasButtons?: boolean;
  isMobile?: boolean;
  isSingleLine?: boolean;
};

const Container = styled.div<Props>(
  ({ hasButtons, isMobile, isSingleLine, theme: { newTokens, colorNew } }) => [
    {
      width: '100%',
      backgroundColor: colorNew.goten,
      padding: setPadding(isMobile, isSingleLine),
      borderRadius: newTokens.borderRadius.surface.small,
      display: hasButtons && !isMobile ? 'flex' : 'block',
    },
    hasButtons &&
      !isMobile && {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  ]
);

export default Container;
