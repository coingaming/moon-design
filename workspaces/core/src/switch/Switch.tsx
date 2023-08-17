import React, { useState, useEffect, forwardRef } from 'react';
import { Switch as HeadlessSwitch } from '@headlessui/react';
import type SwitchProps from './private/types/SwitchProps';
import getIconSize from './private/utils/getIconSize';
import getSwitchSize from './private/utils/getSwitchSize';
import getTogglePosition from './private/utils/getTogglePosition';
import getToggleSize from './private/utils/getToggleSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      size = 'sm',
      checked = false,
      name,
      value,
      onChange,
      onBgColor, // deprecated
      offBgColor, // deprecated
      onIcon,
      offIcon,
      className,
      ...rest
    },
    ref
  ) => {
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
        ref={ref}
        name={name}
        value={value}
        checked={enabled}
        disabled={rest?.disabled}
        onChange={(data) => setEnabledHandler(data)}
        className={mergeClassnames(
          'block cursor-pointer rounded-full transition',
          getSwitchSize(size),
          enabled ? onBgColor : offBgColor,
          !onBgColor && !offBgColor && 'bg-beerus moon-checked:bg-piccolo',
          rest?.disabled && 'opacity-60 cursor-not-allowed select-none',
          className
        )}
        aria-readonly={rest?.disabled}
        {...rest}
      >
        <span className="block relative h-full w-full">
          {onIcon && (
            <span
              className={mergeClassnames(
                'z-1 absolute start-0 top-1/2 -translate-y-1/2 transition-opacity',
                'text-goten',
                getIconSize(size),
                enabled ? 'opacity-100' : 'opacity-0'
              )}
              aria-hidden="true"
            >
              {onIcon}
            </span>
          )}
          {offIcon && (
            <span
              className={mergeClassnames(
                'z-1 absolute end-0 top-1/2 -translate-y-1/2 transition-opacity',
                'text-bulma',
                getIconSize(size),
                enabled ? 'opacity-0' : 'opacity-100'
              )}
              aria-hidden="true"
            >
              {offIcon}
            </span>
          )}
          <span
            aria-hidden="true"
            className={mergeClassnames(
              'slider z-5 absolute top-1/2 -translate-y-1/2 shadow-moon-sm pointer-events-none rounded-full',
              'bg-goten transition-all',
              getToggleSize(size),
              enabled ? getTogglePosition(size) : 'start-0'
            )}
          />
        </span>
      </HeadlessSwitch>
    );
  }
);

export default Switch;
