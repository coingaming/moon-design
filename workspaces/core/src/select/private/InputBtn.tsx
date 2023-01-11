import React from 'react';
import { Listbox } from '@headlessui/react';
import {
  ControlsChevronDown,
  ControlsChevronDownSmall,
  ControlsChevronUp,
  ControlsChevronUpSmall,
} from '@heathmont/moon-icons-tw';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';

type InputBtnProps = {
  size?: 'md' | 'lg' | 'xl' | string;
  isError?: boolean;
  open?: boolean;
  disabled?: boolean;
};

const getSelectSize = (size?: 'sm' | 'md' | 'lg' | 'xl' | string) => {
  switch (size) {
    case 'xl':
      return 'h-14 py-2 px-4 rounded-moon-i-md';
    case 'lg':
      return 'h-12 py-3 px-4 rounded-moon-i-sm';
    case 'sm':
      return 'h-8 py-1 p-3 rounded-moon-i-xs';
    case 'md':
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
      'flex items-center justify-between',
      'w-full bg-gohan border-beerus',
      'shadow-input hover:shadow-input-hov transition-shadow duration-200',
      'focus:shadow-input-focus focus:outline-none',
      getSelectSize(size),
      isError &&
        'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
      disabled && 'opacity-30 cursor-not-allowed'
    )}
  >
    {children}
    <div className="flex-shrink-0">
      {open ? (
        size === 'sm' ? (
          <ControlsChevronUpSmall className="text-[1.5rem] text-trunks" />
        ) : (
          <ControlsChevronUp className="text-[1.5rem] text-trunks" />
        )
      ) : size === 'sm' ? (
        <ControlsChevronDownSmall className="text-[1.5rem] text-trunks" />
      ) : (
        <ControlsChevronDown className="text-[1.5rem] text-trunks" />
      )}
    </div>
  </Listbox.Button>
);

export default InputBtn;
