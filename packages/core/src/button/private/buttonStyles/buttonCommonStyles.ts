import { useTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import type { ButtonProps } from '../../Button';

const buttonCommonStyles = ({ iconSize, disabled }: ButtonProps) => {
  const { fontWeight, radius, transitionDuration } = useTheme();
  return [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: fontWeight.semibold,
      borderRadius: rem(radius.largest),
      textDecoration: 'none',
      fontFamily: 'inherit',
      transition: `all ${transitionDuration.default}s ease-in-out`,
      '&:active': {
        transform: 'scale(0.9)',
      },
      img: {
        display: 'block',
        width: rem(iconSize),
        height: rem(iconSize),
      },
      svg: {
        display: 'block',
        width: rem(iconSize),
        height: rem(iconSize),
      },
    },
    disabled && {
      opacity: 0.32,
      cursor: 'not-allowed',
    },
  ];
};

export default buttonCommonStyles;
