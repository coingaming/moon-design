import React, { FC, useState, useEffect } from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import getSwitchSize from './private/utils/getSwitchSize';
import getSwitchSpanSize from './private/utils/getSwitchSpanSize';
import type SwitchProps from './private/types/SwitchProps';

const Switch: FC<SwitchProps> = ({
  size = 'sm',
  checked = false,
  disabled,
  name,
  value,
  onChange,
  onBgColor = 'bg-piccolo',
  offBgColor = 'bg-beerus',
  onIcon,
  offIcon,
  ...rest
}) => {
  const [enabled, setEnabled] = useState(checked);
  const setEnabledHandler = (data: boolean) => {
    onChange && onChange(data);
    setEnabled(data);
  };

  useEffect(() => {
    if (typeof checked !== undefined && checked !== enabled)
      setEnabled(!!checked);
  }, [checked]);

  return (
    <HeadlessSwitch
      name={name}
      value={value}
      checked={enabled}
      disabled={disabled}
      onChange={(data) => setEnabledHandler(data)}
      className={mergeClassnames(
        'block relative isolate cursor-pointer rounded-full transition focus:outline-none',
        getSwitchSize(size),
        enabled ? onBgColor : offBgColor,
        disabled && 'opacity-30 cursor-not-allowed select-none'
      )}
      {...rest}
    >
      <span className="block relative">
        {onIcon && (
          <span
            className={mergeClassnames(
              'z-1 absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 transition-opacity',
              enabled ? 'opacity-100' : 'opacity-0'
            )}
          >
            {onIcon}
          </span>
        )}
        {offIcon && (
          <span
            className={mergeClassnames(
              'z-1 absolute ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 transition-opacity',
              enabled ? 'opacity-0' : 'opacity-100'
            )}
          >
            {offIcon}
          </span>
        )}
        <span
          aria-hidden="true"
          className={mergeClassnames(
            'z-5 absolute top-1/2 -translate-y-1/2 shadow-moon-sm pointer-events-none rounded-full bg-goten transition-all',
            getSwitchSpanSize(size),
            enabled
              ? 'ltr:left-full rtl:right-full ltr:-translate-x-full rtl:translate-x-full'
              : 'ltr:left-0 rtl:right-0'
          )}
        />
      </span>
    </HeadlessSwitch>
  );
};

export default Switch;
