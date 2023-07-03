import React, { useCallback } from 'react';
import { Listbox } from '@headlessui/react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import ControlsCloseSmall from '../private/icons/ControlsCloseSmall';
import getSelectSize from './private/utils/getSelectSize';
import SelectButtonContext from './private/utils/SelectButtonContext';
import useSelectButtonContext from './private/utils/useSelectButtonContext';
import type ChipProps from './private/types/ChipProps';
import type InputProps from './private/types/InputProps';
import type LabelProps from './private/types/LabelProps';
import type SelectButtonProps from './private/types/SelectButtonProps';

const SelectButtonRoot = ({
  label,
  placeholder,
  size = 'md',
  isError,
  idDisabled,
  open,
  children,
  ...rest
}: SelectButtonProps) => {
  const states = {
    open: open,
    size: size,
    isError: isError,
    idDisabled: idDisabled,
    ...rest,
  };
  return (
    <div className="relative">
      <SelectButtonContext.Provider value={states}>
        {children}
      </SelectButtonContext.Provider>
    </div>
  );
};

const Input = ({ children, className }: InputProps) => {
  const { size, isError, idDisabled, ...rest } =
    useSelectButtonContext('SelectButton.Input');
  return (
    <button
      {...rest}
      className={mergeClassnames(
        'flex items-center justify-between',
        'w-full bg-gohan border-beerus',
        'shadow-input hover:shadow-input-hov transition-shadow duration-200 ',
        'focus:shadow-input-focus focus:outline-none',
        getSelectSize(size),
        isError &&
          'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
        idDisabled && 'opacity-30 cursor-not-allowed hover:shadow-input',
        className && className
      )}
    >
      <span className="flex flex-col items-start">{children}</span>
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
        'w-full bg-gohan border-beerus',
        'shadow-input hover:shadow-input-hov transition-shadow duration-200 ',
        'focus:shadow-input-focus focus:outline-none',
        'h-14 py-2 px-4 rounded-moon-i-md',
        isError &&
          'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
        idDisabled && 'opacity-30 cursor-not-allowed hover:shadow-input',
        className && className
      )}
    >
      <span className="flex gap-2 items-center">{children}</span>
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
        idDisabled && 'opacity-30 cursor-not-allowed'
      )}
    >
      {children}
    </Listbox.Label>
  );
};

const FloatingLabel = ({ children }: { children?: React.ReactNode }) => (
  <Listbox.Label className="block text-moon-12 text-trunks">
    {children}
  </Listbox.Label>
);

const Placeholder = ({ children }: { children?: React.ReactNode }) => {
  const { size } = useSelectButtonContext('SelectButton.Placeholder');
  return (
    <span
      className={mergeClassnames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'w-full text-trunks truncate'
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

const Chip = ({ children, onClear }: ChipProps) => {
  const { size } = useSelectButtonContext('SelectButton.Control');
  const cliclHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      onClear && onClear();
    },
    [onClear]
  );
  return (
    <span
      onClick={cliclHandler}
      className={mergeClassnames(
        'chip bg-bulma text-gohan flex items-center justify-center rounded-moon-s-xs cursor-pointer',
        size === 'sm' ? 'text-moon-12 h-4 px-0.5' : 'text-moon-14 h-6 px-1'
      )}
    >
      <span className={mergeClassnames(size === 'sm' ? 'px-0.5' : 'px-1')}>
        {children}
      </span>
      <ControlsCloseSmall
        className={mergeClassnames(
          'text-gohan',
          size === 'sm' ? 'text-moon-12' : 'text-moon-14'
        )}
      />
    </span>
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
