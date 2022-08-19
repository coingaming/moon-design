import React from 'react';
import { Listbox } from '@headlessui/react';
import {
  ControlsChevronDown,
  ControlsChevronUp,
} from '@heathmont/moon-icons-tw';
import classNames from '../../private/utils/classnames';

type InputBtnProps = {
  size?: 'md' | 'lg' | 'xl' | string;
  isError?: boolean;
  open?: boolean;
  disabled?: boolean;
};

const getSelectSize = (size?: 'md' | 'lg' | 'xl' | string) => {
  switch (size) {
    case 'xl':
      return 'h-14 py-2 px-4';
    case 'lg':
      return 'h-12 py-3 px-4';
    case 'md':
    default:
      return 'h-10 py-2 px-3';
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
    className={classNames(
      'flex items-center justify-between',
      'w-full rounded-moon-i-md bg-gohan border-beerus',
      'shadow-input hover:shadow-input-hov transition-shadow duration-200 ',
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
        <ControlsChevronUp className="text-[1.5rem] text-trunks" />
      ) : (
        <ControlsChevronDown className="text-[1.5rem] text-trunks" />
      )}
    </div>
  </Listbox.Button>
);

export default InputBtn;
