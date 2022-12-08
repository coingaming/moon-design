import mergeClassnames from '../../../utils/mergeClassnames';
import type { ButtonSettingsProps } from '../types/ButtonProps';

const buttonCommonStyles = ({ disabled }: ButtonSettingsProps): string => {
  return mergeClassnames(
    'relative z-0 flex justify-center items-center font-medium no-underline overflow-hidden select-none outline-none transition duration-200 active:scale-90 focus-visible:shadow-focus',
    disabled && 'opacity-30 cursor-not-allowed'
  );
};

export default buttonCommonStyles;
