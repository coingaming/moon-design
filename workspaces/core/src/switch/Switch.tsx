import React, { FC, useState } from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import classNames from '../private/utils/classnames';

type SwitchProps = {
  size?: '2xs' | 'xs' | 'sm' | string;
  checked: boolean;
  onChange?: (data: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
  bgColor?: string;
  twWidth?: string;
  onIcon?: JSX.Element | string;
  offIcon?: JSX.Element | string;
};

const getSwitchSize = (size?: '2xs' | 'xs' | 'sm' | string) => {
  switch (size) {
    case '2xs':
      return 'w-8 h-4 p-[0.125rem]';
    case 'xs':
      return 'w-11 h-6 p-1';
    case 'sm':
    default:
      return 'w-[3.75rem] h-8 p-1';
  }
};

const getSwitchSpanSize = (size?: '2xs' | 'xs' | 'sm' | string) => {
  switch (size) {
    case '2xs':
      return 'w-3 h-3';
    case 'xs':
      return 'w-4 h-4';
    case 'sm':
    default:
      return 'w-6 h-6';
  }
};

const Switch: FC<SwitchProps> = ({
  size = 'sm',
  checked = false,
  disabled,
  name,
  value,
  onChange,
  bgColor = 'bg-piccolo',
  twWidth,
  onIcon,
  offIcon,
  ...rest
}) => {
  const [enabled, setEnabled] = useState(checked);
  const setEnabledHandler = (data: boolean) => {
    onChange && onChange(data);
    setEnabled(data);
  };
  return (
    <HeadlessSwitch
      name={name}
      value={value}
      checked={enabled}
      disabled={disabled}
      onChange={(data) => setEnabledHandler(data)}
      className={classNames(
        'block relative p-1 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none',
        getSwitchSize(size),
        twWidth && twWidth,
        enabled ? bgColor : 'bg-beerus',
        disabled && 'opacity-30 cursor-not-allowed select-none'
      )}
      {...rest}
    >
      <span className="block relative">
        {onIcon && (
          <span
            className={classNames(
              'z-1 absolute left-0 top-1/2 translate-y-[-50%] opacity-0',
              enabled && 'opacity-100'
            )}
          >
            {onIcon}
          </span>
        )}
        {offIcon && (
          <span
            className={classNames(
              'z-1 absolute right-0 top-1/2 translate-y-[-50%] opacity-0',
              !enabled && 'opacity-100'
            )}
          >
            {offIcon}
          </span>
        )}
        <span
          aria-hidden="true"
          className={classNames(
            'z-5 absolute top-1/2 translate-y-[-50%] shadow-moon-sm pointer-events-none transform rounded-full bg-goten transition-all duration-200 ease-in-out',
            getSwitchSpanSize(size),
            enabled ? 'left-full translate-x-[-100%]' : 'left-0'
          )}
        />
      </span>
    </HeadlessSwitch>
  );
};

export default Switch;
