import type { IconButtonSettingsProps } from '../../types/IconButtonProps';

const getButtonSize = ({ size }: IconButtonSettingsProps): string => {
  if (size === 'xs') {
    return 'h-6 p-1 gap-1 text-moon-12 rounded-moon-i-xs';
  }
  if (size === 'sm') {
    return 'h-8 p-1 gap-1 text-moon-14 rounded-moon-i-sm';
  }
  if (size === 'lg') {
    return 'h-12 p-3 gap-2 text-moon-16 rounded-moon-i-sm';
  }
  if (size === 'xl') {
    return 'h-14 p-4 gap-2 text-moon-16 rounded-moon-i-md';
  }
  return 'h-10 p-2 gap-2 text-moon-14 rounded-moon-i-sm';
};

export default getButtonSize;
