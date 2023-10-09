import React, { Ref, forwardRef, useCallback } from 'react';
import { Listbox } from '@headlessui/react';
import type ChipProps from './private/types/ChipProps';
import type InputProps from './private/types/InputProps';
import type LabelProps from './private/types/LabelProps';
import type SelectButtonProps from './private/types/SelectButtonProps';
import getSelectSize from './private/utils/getSelectSize';
import SelectButtonContext from './private/utils/SelectButtonContext';
import useSelectButtonContext from './private/utils/useSelectButtonContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import ControlsCloseSmall from '../private/icons/ControlsCloseSmall';
import Tag from '../tag/Tag';

const SelectButtonRoot = forwardRef(
  (
    {
      label,
      placeholder,
      size = 'md',
      isError,
      idDisabled,
      open,
      children,
      isUppercase,
      ...rest
    }: SelectButtonProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const states = {
      open: open,
      size: size,
      isError: isError,
      idDisabled: idDisabled,
      ...rest,
    };
    return (
      <div className="relative" ref={ref}>
        <SelectButtonContext.Provider value={states}>
          {children}
        </SelectButtonContext.Provider>
      </div>
    );
  }
);

const Input = ({ children, className }: InputProps) => {
  const { size, isError, idDisabled, ...rest } =
    useSelectButtonContext('SelectButton.Input');
  return (
    <button
      {...rest}
      className={mergeClassnames(
        'flex items-center justify-between gap-2',
        'w-full bg-goku border-beerus',
        'shadow-input hover:shadow-input-hov transition-shadow duration-200 ',
        'focus:shadow-input-focus focus:outline-none',
        getSelectSize(size),
        isError &&
          'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
        idDisabled && 'opacity-60 cursor-not-allowed hover:shadow-input',
        className && className
      )}
    >
      <span className="flex w-full flex-col items-start text-start overflow-hidden">
        {children}
      </span>
      <Control />
    </button>
  );
};

const InsetInput = ({ children, className }: InputProps) => {
  const { isError, idDisabled, ...rest } =
    useSelectButtonContext('SelectButton.Input');
  return (
    <button
      {...rest}
      className={mergeClassnames(
        'flex items-center justify-between',
        'w-full bg-goku border-beerus',
        'shadow-input hover:shadow-input-hov transition-shadow duration-200 ',
        'focus:shadow-input-focus focus:outline-none',
        'h-14 py-2 px-4 rounded-moon-i-md',
        isError &&
          'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
        idDisabled && 'opacity-60 cursor-not-allowed hover:shadow-input',
        className && className
      )}
    >
      <span className="flex gap-2 items-center overflow-hidden">
        {children}
      </span>
      <Control />
    </button>
  );
};

const Value = ({ children }: { children?: React.ReactNode }) => {
  const { size } = useSelectButtonContext('SelectButton.Value');
  return (
    <span
      className={mergeClassnames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'w-full text-bulma truncate'
      )}
    >
      {children}
    </span>
  );
};

const Label = ({ children, labelSize, idDisabled }: LabelProps) => {
  const { size } = useSelectButtonContext('SelectButton.Label');
  const currentSize = labelSize || size;
  return (
    <Listbox.Label
      className={mergeClassnames(
        'block text-bulma pb-2',
        currentSize === 'sm' ? 'text-moon-14' : 'text-moon-16',
        idDisabled && 'opacity-60 cursor-not-allowed'
      )}
    >
      {children}
    </Listbox.Label>
  );
};

const FloatingLabel = ({ children }: { children?: React.ReactNode }) => (
  <Listbox.Label className="w-full text-moon-12 text-trunks text-start truncate">
    {children}
  </Listbox.Label>
);

const Placeholder = ({ children }: { children?: React.ReactNode }) => {
  const { size } = useSelectButtonContext('SelectButton.Placeholder');
  return (
    <span
      className={mergeClassnames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'w-full text-trunks text-start truncate'
      )}
    >
      {children}
    </span>
  );
};

const Control = () => {
  const { open, size } = useSelectButtonContext('SelectButton.Control');
  return (
    <ControlsChevronDownSmall
      className={mergeClassnames(
        'text-trunks flex-shrink-0 transition-transform',
        size === 'sm' ? 'text-moon-16' : 'text-moon-24',
        open && 'rotate-[-180deg]'
      )}
    />
  );
};

const Chip = ({ children, onClear, isUppercase, ...rest }: ChipProps) => {
  const { size } = useSelectButtonContext('SelectButton.Control');
  const clickHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      onClear && onClear();
    },
    [onClear]
  );
  return (
    <Tag
      size={size === 'sm' ? '2xs' : 'xs'}
      iconRight={
        <ControlsCloseSmall onClick={clickHandler} className="cursor-pointer" />
      }
      isUppercase={isUppercase}
      {...rest}
    >
      {children}
    </Tag>
  );
};

const SelectButton = Object.assign(SelectButtonRoot, {
  Label,
  FloatingLabel,
  Placeholder,
  Control,
  Input,
  Value,
  Chip,
  InsetInput,
});

export default SelectButton;
