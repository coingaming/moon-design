import { SharedTheme } from '@heathmont/moon-themes';
import styled from 'styled-components';

const determinePadding = (
  newTokens: SharedTheme['newTokens'],
  isMobile?: boolean,
  isSingleLine?: boolean
) => {
  if (isSingleLine) {
    return newTokens.space.twoxsmall;
  }
  if (isMobile) {
    return newTokens.space.small;
  }
  return newTokens.space.medium;
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
      padding: determinePadding(newTokens, isMobile, isSingleLine),
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
