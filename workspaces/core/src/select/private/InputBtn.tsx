import React from 'react';
import { Listbox } from '@headlessui/react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type { SelectSize } from '../Select';

type InputBtnProps = {
  size: SelectSize;
  isError?: boolean;
  open?: boolean;
  disabled?: boolean;
};

const getSelectSize = (size?: SelectSize) => {
  switch (size) {
    case 'xl':
      return 'h-14 py-2 px-4 rounded-moon-i-md';
    case 'lg':
      return 'h-12 py-3 px-4 rounded-moon-i-sm';
    case 'sm':
      return 'h-8 py-1 p-3 rounded-moon-i-xs';
    default:
      return 'h-10 py-2 px-3 rounded-moon-i-sm';
  }
};
const InputBtn: React.FC<InputBtnProps> = ({
  size,
  isError,
  disabled,
  open,
  children,
  ...rest
}) => (
  <Listbox.Button
    {...rest}
    className={mergeClassnames(
      'flex items-center justify-between w-full bg-gohan border-beerus shadow-input duration-200',
      'transition-shadow hover:shadow-input-hov focus:shadow-input-focus focus:outline-none',
      getSelectSize(size),
      isError &&
        'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
      disabled && 'cursor-not-allowed'
    )}
  >
    {children}
    <ControlsChevronDownSmall
      className={mergeClassnames(
        'flex-shrink-0 transition-transform',
        size === 'sm' ? 'text-moon-16' : 'text-moon-24',
        open && 'rotate-[-180deg]'
      )}
    />
  </Listbox.Button>
);

export default InputBtn;
