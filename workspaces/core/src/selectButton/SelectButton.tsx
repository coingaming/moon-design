import React, { createContext, useContext } from 'react';
import { Listbox } from '@headlessui/react';
import {
  ControlsChevronDown,
  ControlsChevronDownSmall,
  ControlsChevronUp,
  ControlsChevronUpSmall,
} from '@heathmont/moon-icons-tw';
import mergeClassnames from '../utils/mergeClassnames';

type SelectButtonState = {
  open?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
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
  size?: 'md' | 'lg' | 'xl' | string;
  isError?: boolean;
  open?: boolean;
  idDisabled?: boolean;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
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

const Input: React.FC = ({ children }) => {
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
        idDisabled && 'opacity-30 cursor-not-allowed hover:shadow-input'
      )}
    >
      <span className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </span>
      <Control />
    </button>
  );
};

const Value: React.FC = ({ children }) => {
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

const FloatingLabel: React.FC = ({ children }) => {
  return (
    <Listbox.Label className="block text-moon-12 text-trunks">
      {children}
    </Listbox.Label>
  );
};

const Placeholder: React.FC = ({ children }) => {
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
    <span className="flex-shrink-0">
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
});

export default SelectButton;
