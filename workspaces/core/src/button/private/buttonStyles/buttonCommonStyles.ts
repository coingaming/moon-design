import classNames from '../../../private/utils/classnames';
import type { ButtonProps } from '../../Button';

//TODO: focus-visible:shadow-piccolo-20 - should or not to be in tw config '#4e46b420',
const buttonCommonStyles = ({ iconSize, disabled }: ButtonProps): string => {
  return classNames(
    'relative z-0 flex justify-center items-center font-medium rounded-interactive no-underline overflow-hidden select-none outline-none transition-all duration-75 active:scale-90 focus-visible:shadow-[0_0_0_4px] focus-visible:shadow-piccolo-20',
    disabled && 'opacity-30 cursor-not-allowed'
  );
  //  {
  //     fontFamily: 'inherit',
  //     'img, svg': {
  //       display: 'block',
  //       width: rem(iconSize as number),
  //       height: rem(iconSize as number),
  //     },
  //   },
};

export default buttonCommonStyles;
