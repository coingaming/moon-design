import React, { createContext, useCallback, useContext } from 'react';
import { Listbox } from '@headlessui/react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import ControlsCloseSmall from '../private/icons/ControlsCloseSmall';

type SelectButtonState = {
  open?: boolean;
  size?: 'sm' | 'md' | 'lg' | string;
  isError?: boolean;
  idDisabled?: boolean;
};

const SelectButtonContext = createContext<SelectButtonState>({});
SelectButtonContext.displayName = 'InputBtnContext';

const useSelectButtonContext = (component: string) => {
  const context = useContext(SelectButtonContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <SelectButton /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useInputBtnContext);
    throw err;
  }
  return context;
};

type SelectButtonProps = {
  size?: 'sm' | 'md' | 'lg' | string;
  isError?: boolean;
  open?: boolean;
  idDisabled?: boolean;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  children?: React.ReactNode;
};

const getSelectSize = (size?: 'sm' | 'md' | 'lg' | string) => {
  switch (size) {
    case 'lg':
      return 'h-12 p-3 rounded-moon-i-sm';
    case 'sm':
      return 'h-8 py-1 px-2 rounded-moon-i-xs';
    case 'md':
    default:
      return 'h-10 py-2 px-3 rounded-moon-i-sm';
  }
};

const SelectButtonRoot: React.FC<SelectButtonProps> = ({
  label,
  placeholder,
  size = 'md',
  isError,
  idDisabled,
  open,
  children,
  ...rest
}) => {
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

const Input: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  children,
  className,
}) => {
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
      <span className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </span>
      <Control />
    </button>
  );
};

const InsetInput: React.FC<{ className?: string; children?: React.ReactNode }> =
  ({ children, className }) => {
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

const Value: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { size } = useSelectButtonContext('SelectButton.Value');
  return (
    <span
      className={mergeClassnames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'text-bulma'
      )}
    >
      {children}
    </span>
  );
};

type LabelProps = {
  labelSize?: 'sm' | 'md' | 'lg' | 'xl' | string;
  idDisabled?: boolean;
  children?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ children, labelSize, idDisabled }) => {
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

const FloatingLabel: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Listbox.Label className="block text-moon-12 text-trunks">
      {children}
    </Listbox.Label>
  );
};

const Placeholder: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const { size } = useSelectButtonContext('SelectButton.Placeholder');
  return (
    <span
      className={mergeClassnames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'text-trunks'
      )}
    >
      {children}
    </span>
  );
};

const Control: React.FC = () => {
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

type ChipProps = { children: React.ReactNode; onClear?: () => void };
const Chip: React.FC<ChipProps> = ({ children, onClear }) => {
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
