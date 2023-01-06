import mergeClassnames from '../../../../utils/mergeClassnames';
import getLgPadding from './getLgPadding';
import getMdPadding from './getMdPadding';
import getSmPadding from './getSmPadding';
import getXlPadding from './getXlPadding';
import getXsPadding from './getXsPadding';
import type ButtonSettingsProps from '../../types/ButtonSettingsProps';

const getButtonSize = ({
  size,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  fullWidth,
}: ButtonSettingsProps): string => {
  if (size === 'xs') {
    return mergeClassnames(
      getXsPadding({ icon, iconLeft, iconRight, iconOnly, fullWidth }),
      'h-6 py-1 gap-1 text-moon-12 rounded-moon-i-xs'
    );
  }
  if (size === 'sm') {
    return mergeClassnames(
      getSmPadding({ icon, iconLeft, iconRight, iconOnly, fullWidth }),
      'h-8 py-1 gap-1 text-moon-14 rounded-moon-i-sm'
    );
  }
  if (size === 'lg') {
    return mergeClassnames(
      getLgPadding({ icon, iconLeft, iconRight, iconOnly, fullWidth }),
      'h-12 py-3 gap-2 text-moon-16 rounded-moon-i-sm'
    );
  }
  if (size === 'xl') {
    return mergeClassnames(
      getXlPadding({ icon, iconLeft, iconRight, iconOnly, fullWidth }),
      'h-14 py-4 gap-2 text-moon-16 rounded-moon-i-md'
    );
  }
  return mergeClassnames(
    getMdPadding({ icon, iconLeft, iconRight, iconOnly, fullWidth }),
    'h-10 py-2 gap-2 text-moon-14 rounded-moon-i-sm'
  );
};

export default getButtonSize;
