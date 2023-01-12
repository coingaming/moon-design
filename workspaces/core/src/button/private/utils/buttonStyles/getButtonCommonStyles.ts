import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonCommonStyles = (
  disabled: ButtonSettingsProps['disabled']
): string =>
  mergeClassnames(
    'relative z-0 flex justify-center items-center font-medium no-underline overflow-hidden',
    'whitespace-nowrap select-none transition duration-200 active:scale-90',
    disabled && 'opacity-30 cursor-not-allowed'
  );

export default getButtonCommonStyles;
