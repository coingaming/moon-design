import React, { createContext, useContext } from 'react';
import { Listbox } from '@headlessui/react';
import {
  ControlsChevronDown,
  ControlsChevronDownSmall,
  ControlsChevronUp,
  ControlsChevronUpSmall,
} from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';

type InputBtnState = {
  open?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  isError?: boolean;
  disabled?: boolean;
};

const InputBtnContext = createContext<InputBtnState>({});
InputBtnContext.displayName = 'InputBtnContext';

const useInputBtnContext = (component: string) => {
  const context = useContext(InputBtnContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <InputBtn /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useInputBtnContext);
    throw err;
  }
  return context;
};

type InputBtnProps = {
  size?: 'md' | 'lg' | 'xl' | string;
  isError?: boolean;
  open?: boolean;
  disabled?: boolean;
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  ref?: React.MutableRefObject<null>;
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

const InputBtnRoot: React.FC<InputBtnProps> = ({
  label,
  placeholder,
  size = 'md',
  isError,
  disabled,
  open,
  children,
  ref,
  ...rest
}) => {
  const states = {
    open: open,
    size: size,
    isError: isError,
    disabled: disabled,

    ...rest,
  };
  return (
    <InputBtnContext.Provider value={states}>
      <div className="relative">{children}</div>
    </InputBtnContext.Provider>
  );
};

type InputProps = {
  elRef?: React.MutableRefObject<null>;
};
const Input: React.FC<InputProps> = ({ children, elRef }) => {
  const { size, isError, disabled, ...rest } = useInputBtnContext('Input');
  console.log('ref in Input', elRef);
  return (
    <div ref={elRef}>
      <Listbox.Button
        {...rest}
        className={classNames(
          'flex items-center justify-between',
          'w-full bg-gohan border-beerus',
          'shadow-input hover:shadow-input-hov transition-shadow duration-200 ',
          'focus:shadow-input-focus focus:outline-none',
          getSelectSize(size),
          isError &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err',
          disabled && 'opacity-30 cursor-not-allowed'
        )}
      >
        <div className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
          {children}
        </div>
        <Control />
      </Listbox.Button>
    </div>
  );
};

const Value: React.FC = ({ children }) => {
  const { size } = useInputBtnContext('Label');
  return (
    <span
      className={classNames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'text-bulma'
      )}
    >
      {children}
    </span>
  );
};

const Label: React.FC = ({ children }) => {
  const { size } = useInputBtnContext('Label');
  return (
    <Listbox.Label
      className={classNames(
        'block text-bulma pb-2',
        size === 'sm' ? 'text-moon-14' : 'text-moon-16'
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
  const { size } = useInputBtnContext('Placeholder');
  return (
    <span
      className={classNames(
        size === 'sm' ? 'text-moon-14' : 'text-moon-16',
        'text-trunks'
      )}
    >
      {children}
    </span>
  );
};

const Control: React.FC = () => {
  const { open, size } = useInputBtnContext('Control');
  return (
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
  );
};
const InputBtn = Object.assign(InputBtnRoot, {
  Label,
  FloatingLabel,
  Placeholder,
  Control,
  Input,
  Value,
});

export default InputBtn;
