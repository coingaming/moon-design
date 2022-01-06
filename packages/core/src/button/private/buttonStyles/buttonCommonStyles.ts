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
      fontWeight: newTokens.fontWeight.semibold,
      borderRadius: newTokens.radius.full,
      textDecoration: 'none',
      fontFamily: 'inherit',
      overflow: 'hidden',
      userSelect: 'none',
      outline: 'none',
      transition: `all ${newTokens.transition.default}`,
      '&:active': {
        transform: newTokens.transform.active,
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
      opacity: newTokens.opacity.disabled,
      cursor: 'not-allowed',
    },
  ];
};

export default buttonCommonStyles;
