import React, { forwardRef } from 'react';
import { RadioGroup } from '@headlessui/react';
import type OptionProps from './private/types/OptionProps';
import type RadioProps from './private/types/RadioProps';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const RadioRoot = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      defaultValue,
      value,
      onChange,
      children,
      className,
      disabled,
      name,
      ...rest
    },
    ref
  ) => (
    <RadioGroup
      ref={ref}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      name={name}
      {...rest}
    >
      {children}
    </RadioGroup>
  )
);

const Option = ({ value, children, className, disabled }: OptionProps) => {
  const ariaLabelValue = value ? value.toString() : 'Radio option';
  return (
    <RadioGroup.Option
      value={value}
      disabled={disabled}
      className={mergeClassnames(
        'flex gap-2 cursor-pointer text-moon-14 text-bulma moon-disabled:opacity-60',
        'moon-disabled:cursor-default',
        className
      )}
      aria-label={ariaLabelValue}
    >
      {children}
    </RadioGroup.Option>
  );
};

const Indicator = ({ className }: { className?: string }) => (
  <div
    className={mergeClassnames(
      'relative flex items-center justify-center w-4 h-4 aspect-square m-1 rounded-full border',
      'transition-colors after:absolute after:w-0 after:h-0 after:rounded-full after:top-1/2',
      'after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:transition-all',
      'moon-checked:after:w-2 moon-checked:after:h-2 border-trunks moon-checked:border-piccolo',
      'after:bg-piccolo',
      className
    )}
  />
);

const Radio = Object.assign(RadioRoot, { Option, Indicator });

export default Radio;
