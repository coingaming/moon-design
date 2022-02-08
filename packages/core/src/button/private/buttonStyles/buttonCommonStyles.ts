import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const buttonCommonStyles = ({ iconSize, disabled }: ButtonProps) => {
  const theme = useTheme();
  return [
    {
      position: 'relative',
      zIndex: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: theme.newTokens.font.weight.semibold,
      borderRadius: theme.newTokens.borderRadius.interactive,
      textDecoration: 'none',
      fontFamily: 'inherit',
      overflow: 'hidden',
      userSelect: 'none',
      outline: 'none',
      transition: `all ${theme.newTokens.transition.default}`,
      '&:active': {
        transform: theme.newTokens.transform,
      },
      '&:focus-visible': {
        boxShadow: theme.focus,
      },
      'img, svg': {
        display: 'block',
        width: rem(iconSize as number),
        height: rem(iconSize as number),
      },
    },
    disabled && {
      opacity: theme.newTokens.opacity,
      cursor: 'not-allowed',
    },
  ];
};

export default buttonCommonStyles;
