import mergeClassnames from '../../../../mergeClassnames/mergeClassnames';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonCommonStyles = (
  disabled: ButtonSettingsProps['disabled']
): string =>
  mergeClassnames(
    'relative z-0 flex justify-center items-center font-medium no-underline overflow-hidden',
    'whitespace-nowrap select-none transition duration-200',
    disabled
      ? 'opacity-60 cursor-not-allowed'
      : 'active:scale-90 [&_+_span]:active:scale-90',
    '[&_.hover]:hover:bg-heles'
  );

export default getButtonCommonStyles;
