import React, {
  Fragment,
  createContext,
  useContext,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { SelectButton } from '../index';
import classNames from '../private/utils/classnames';

type DropdownState = {
  value?: any;
  isError?: boolean;
  disabled?: boolean;
  pooper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    referenceElement: React.MutableRefObject<null>;
    popperElement: React.MutableRefObject<null>;
  };
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
};

const DropdownContext = createContext<DropdownState>({});
DropdownContext.displayName = 'DropdownContext';

const useDropdownContext = (component: string) => {
  const context = useContext(DropdownContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Dropdown /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useDropdownContext);
    throw err;
  }
  return context;
};

//Dropdown
type DropdownRootProps = {
  children: (data: {
    open?: boolean;
    referenceElement?: React.MutableRefObject<null>;
  }) => React.ReactElement;
  value: unknown;
  onChange(value: unknown): void;
  isError?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
};

const DropdownRoot: React.FC<DropdownRootProps> = ({
  children,
  value,
  onChange,
  isError,
  disabled,
  size = 'md',
  ...rest
}) => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(referenceElement.current);
  const [popperElementRef, setPopperElementRef] = React.useState(
    popperElement.current
  );

  useEffect(() => {
    setAnchorEl(referenceElement.current);
    setPopperElementRef(popperElement.current);
  });

  let { styles, attributes } = usePopper(anchorEl, popperElementRef, {
    placement: 'bottom-start',
  });

  const states = {
    value: value,
    isError: isError,
    size: size,
    disabled: disabled,
    pooper: {
      styles: styles,
      attributes: attributes,
      referenceElement: referenceElement,
      popperElement: popperElement,
    },
  };

  console.log('states', states);
  return (
    <DropdownContext.Provider value={states}>
      <div className="w-full">
        <Listbox
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        >
          {({ open }) => (
            <div className="relative mt-1">
              {typeof children === 'function'
                ? children({ open, referenceElement })
                : children}
            </div>
          )}
        </Listbox>
      </div>
    </DropdownContext.Provider>
  );
};

//Dropdown.Options
type OptionsProps = {
  menuWidth?: string;
};

const Options: React.FC<OptionsProps> = ({ children, menuWidth, ...rest }) => {
  const { pooper } = useDropdownContext('Dropdown.Options');
  return (
    <div
      ref={pooper?.popperElement}
      style={pooper?.styles?.popper}
      {...pooper?.attributes?.popper}
      className="z-5 absolute"
    >
      <Listbox.Options
        className={classNames(
          menuWidth ? menuWidth : 'w-full min-w-[18.75rem]',
          'z-1 p-1 my-2 rounded-moon-i-md box-border bg-gohan shadow-moon-lg overflow-y-auto',
          'focus:outline-none'
        )}
        {...rest}
      >
        {children}
      </Listbox.Options>
    </div>
  );
};

//Dropdown.Option
type OptionProps = {
  value?: undefined;
  index?: number;
  children: (data: {
    selected?: boolean;
    active?: boolean;
  }) => React.ReactElement;
};

const Option: React.FC<OptionProps> = ({ children, value, index }) => {
  return (
    <Listbox.Option
      as="span"
      key={index}
      value={value}
      // className="p-2 mb-1 last:mb-0 cursor-pointer text-moon-14 text-bulma"
    >
      {({ selected, active }) =>
        typeof children === 'function'
          ? children({ selected, active })
          : children
      }
    </Listbox.Option>
  );
};

type SelectProps = {
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  open?: boolean;
  value?: undefined;
  innerLabel?: boolean;
};

//Dropdown.Select
const Select: React.FC<SelectProps> = ({
  open,
  value,
  label,
  placeholder,
  children,
  ...rest
}) => {
  const { size, pooper, isError, disabled } =
    useDropdownContext('Dropdown.Select');
  if (size === 'xl') {
    return (
      <div ref={pooper?.referenceElement}>
        <Listbox.Button as={Fragment}>
          <SelectButton
            size={size}
            open={open}
            isError={isError}
            idDisabled={disabled}
            {...rest}
          >
            <SelectButton.Input>
              <SelectButton.FloatingLabel>{label}</SelectButton.FloatingLabel>
              {children ? (
                <SelectButton.Value>{children}</SelectButton.Value>
              ) : (
                <SelectButton.Placeholder>
                  {placeholder}
                </SelectButton.Placeholder>
              )}
            </SelectButton.Input>
          </SelectButton>
        </Listbox.Button>
      </div>
    );
  }
  return (
    <>
      <SelectButton.Label labelSize={size} idDisabled={disabled}>
        {label}
      </SelectButton.Label>
      <div ref={pooper?.referenceElement}>
        <Listbox.Button as={Fragment}>
          <SelectButton
            size={size}
            open={open}
            isError={isError}
            idDisabled={disabled}
            {...rest}
          >
            <SelectButton.Input>
              {children ? (
                <SelectButton.Value>{children}</SelectButton.Value>
              ) : (
                <SelectButton.Placeholder>
                  {placeholder}
                </SelectButton.Placeholder>
              )}
            </SelectButton.Input>
          </SelectButton>
        </Listbox.Button>
      </div>
    </>
  );
};

//Dropdown.Trigger
const Trigger: React.FC = ({ children }) => {
  const { pooper } = useDropdownContext('Dropdown.Trigger');
  return (
    <div ref={pooper?.referenceElement}>
      <Listbox.Button as={Fragment}>{children}</Listbox.Button>
    </div>
  );
};

//Dropdown.Hint
const Hint: React.FC = ({ children }) => {
  const { isError, disabled } = useDropdownContext('Dropdown.Input');
  return (
    <p
      role="alert"
      className={classNames(
        'inline-block mt-2 ps-4 text-moon-12',
        isError ? 'text-chiChi' : 'text-trunks',
        disabled && 'opacity-30 cursor-not-allowed'
      )}
    >
      {children}
    </p>
  );
};

//Dropdown
const Dropdown = Object.assign(DropdownRoot, {
  Options,
  Option,
  Trigger,
  Hint,
  Select,
});

export default Dropdown;
