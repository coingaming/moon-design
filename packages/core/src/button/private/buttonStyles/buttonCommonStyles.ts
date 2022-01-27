import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const buttonCommonStyles = ({ iconSize, disabled }: ButtonProps) => {
  const { newTokens } = useTheme();
  return [
    {
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: newTokens.font.weight.semibold,
      borderRadius: newTokens.borderRadius.interactive,
      textDecoration: 'none',
      fontFamily: 'inherit',
      overflow: 'hidden',
      userSelect: 'none',
      outline: 'none',
      transition: `all ${newTokens.transition.default.joined}`,
      '&:active': {
        transform: newTokens.transform,
      },
      '&:focus-visible': {
        boxShadow: newTokens.focus,
      },
      'img, svg': {
        display: 'block',
        width: rem(iconSize),
        height: rem(iconSize),
      },
    },
    disabled && {
      opacity: newTokens.opacity,
      cursor: 'not-allowed',
    },
  ];
};

export default buttonCommonStyles;
