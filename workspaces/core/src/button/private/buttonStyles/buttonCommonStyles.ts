import classNames from '../../../private/utils/classnames';
import type { ButtonProps } from '../../Button';

const buttonCommonStyles = ({ disabled }: ButtonProps): string => {
  return classNames(
    'relative z-0 flex justify-center items-center font-medium no-underline overflow-hidden select-none outline-none transition-all duration-200 active:scale-90 focus-visible:shadow-focus',
    disabled && 'opacity-30 cursor-not-allowed'
  );
};

export default buttonCommonStyles;
