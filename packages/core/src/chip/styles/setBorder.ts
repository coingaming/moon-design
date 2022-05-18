import { Theme } from '@heathmont/moon-themes';

const setBorder = (
  theme: Theme,
  isActive?: boolean,
  isStroke?: boolean,
  isHover?: boolean
) => {
  if ((isActive || isHover) && isStroke) {
    return {
      boxShadow: `0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.piccolo} inset`,
    };
  }
  return {};
};

export default setBorder;
