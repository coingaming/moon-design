import React, {
  createContext,
  useContext,
  ReactChild,
  ReactPortal,
} from 'react';
import { Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { SelectButton } from '../index';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
type Placement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left';

type DropdownState = {
  value?: any;
  isError?: boolean;
  disabled?: boolean;
  onClear?: () => void;
  pooper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
  size?: 'sm' | 'md' | 'lg' | string;
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

type CallableChildren = (data: { open?: boolean }) => React.ReactNode;

type ReactNode =
  | CallableChildren
  | ReactChild
  | Iterable<ReactNode>
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;

//Dropdown
type DropdownRootProps = {
  value: unknown;
  onChange(value: unknown): void;
  onClear?: () => void;
  isError?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  className?: string;
  multiple?: boolean;
  position?: Placement;
};

type WithChildren<T = {}> = T & { children?: React.ReactNode };

const DropdownRoot: React.FC<WithChildren<DropdownRootProps>> = ({
  children,
  value,
  onChange,
  isError,
  disabled,
  size = 'md',
  className,
  onClear,
  position = 'bottom-start',
  ...rest
}) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();

  let { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const states = {
    value: value,
    isError: isError,
    size: size,
    disabled: disabled,
    onClear: onClear,
    pooper: {
      styles: styles,
      attributes: attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
    },
  };

  const childrens = React.Children.toArray(children);
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <DropdownContext.Provider value={states}>
      <div
        className={mergeClassnames('w-full relative', className && className)}
      >
        <Listbox
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        >
          {({ open }) => (
            <div className="relative">
              {typeof children === 'function'
                ? callableChildren && callableChildren({ open })
                : childrens.map((ch) => ch)}
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
  className?: string;
};

const Options: React.FC<WithChildren<OptionsProps>> = ({
  children,
  menuWidth,
  className,
  ...rest
}) => {
  const { pooper } = useDropdownContext('Dropdown.Options');
  return (
    <Listbox.Options
      ref={pooper?.setPopper}
      style={pooper?.styles?.popper}
      {...pooper?.attributes?.popper}
      className={mergeClassnames(
        menuWidth ? menuWidth : 'w-full min-w-[18.75rem]',
        'z-5 absolute p-1 my-2 rounded-moon-s-md box-border bg-gohan shadow-moon-lg overflow-y-auto focus:outline-none',
        className && className
      )}
      {...rest}
    >
      {children}
    </Listbox.Options>
  );
};

//Dropdown.Option
type OptionProps = {
  value?: unknown;
  children: (data: {
    selected?: boolean;
    active?: boolean;
  }) => React.ReactElement;
};

const Option: React.FC<OptionProps> = ({ children, value }) => {
  return (
    <Listbox.Option as="span" value={value}>
      {({ selected, active }) =>
        typeof children === 'function'
          ? children({ selected, active })
          : children
      }
    </Listbox.Option>
  );
};

//Dropdown.Select
type SelectProps = {
  label?: JSX.Element | string;
  placeholder?: JSX.Element | string;
  open?: boolean;
  value?: undefined;
  innerLabel?: boolean;
  className?: string;
};

const Select: React.FC<WithChildren<SelectProps>> = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  ...rest
}) => {
  const { size, pooper, isError, disabled } =
    useDropdownContext('Dropdown.Select');
  return (
    <>
      {label && (
        <SelectButton.Label labelSize={size} idDisabled={disabled}>
          {label}
        </SelectButton.Label>
      )}
      <Listbox.Button as={'div'} ref={pooper?.setAnchor}>
        <div>
          <SelectButton
            size={size}
            open={open}
            isError={isError}
            idDisabled={disabled}
            {...rest}
          >
            <SelectButton.Input className={className}>
              {children ? (
                <SelectButton.Value>{children}</SelectButton.Value>
              ) : (
                <SelectButton.Placeholder>
                  {placeholder}
                </SelectButton.Placeholder>
              )}
            </SelectButton.Input>
          </SelectButton>
        </div>
      </Listbox.Button>
    </>
  );
};

//Dropdown.InsetSelect
const InsetSelect: React.FC<WithChildren<SelectProps>> = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  ...rest
}) => {
  const { size, pooper, isError, disabled } = useDropdownContext(
    'Dropdown.InsetSelect'
  );
  return (
    <Listbox.Button as={'div'} ref={pooper?.setAnchor}>
      <div>
        <SelectButton
          size={size}
          open={open}
          isError={isError}
          idDisabled={disabled}
          {...rest}
        >
          <SelectButton.InsetInput className={className}>
            <span className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
              <SelectButton.FloatingLabel>{label}</SelectButton.FloatingLabel>
              {children ? (
                <SelectButton.Value>{children}</SelectButton.Value>
              ) : (
                <SelectButton.Placeholder>
                  {placeholder}
                </SelectButton.Placeholder>
              )}
            </span>
          </SelectButton.InsetInput>
        </SelectButton>
      </div>
    </Listbox.Button>
  );
};

//Dropdown.MultiSelect
const MultiSelect: React.FC<WithChildren<SelectProps & { counter?: number }>> =
  ({
    open,
    value,
    label,
    placeholder,
    children,
    className,
    counter = 0,
    ...rest
  }) => {
    const { size, pooper, isError, disabled, onClear } = useDropdownContext(
      'Dropdown.MultiSelect'
    );
    return (
      <>
        {label && (
          <SelectButton.Label labelSize={size} idDisabled={disabled}>
            {label}
          </SelectButton.Label>
        )}
        <Listbox.Button as={'div'} ref={pooper?.setAnchor}>
          <div>
            <SelectButton
              size={size}
              open={open}
              isError={isError}
              idDisabled={disabled}
              {...rest}
            >
              <SelectButton.Input className={mergeClassnames(className)}>
                <span className="flex gap-2 items-center">
                  {counter > 0 && (
                    <SelectButton.Value>
                      <SelectButton.Chip onClear={onClear}>
                        {counter}
                      </SelectButton.Chip>
                    </SelectButton.Value>
                  )}
                  <SelectButton.Placeholder>
                    {placeholder}
                  </SelectButton.Placeholder>
                </span>
              </SelectButton.Input>
            </SelectButton>
          </div>
        </Listbox.Button>
      </>
    );
  };

//Dropdown.InsetMultiSelect
const InsetMultiSelect: React.FC<
  WithChildren<SelectProps & { counter?: number }>
> = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  counter = 0,
  ...rest
}) => {
  const { size, pooper, isError, disabled, onClear } = useDropdownContext(
    'Dropdown.InsetMultiSelect'
  );
  return (
    <Listbox.Button as={'div'} ref={pooper?.setAnchor}>
      <div>
        <SelectButton
          size={size}
          open={open}
          isError={isError}
          idDisabled={disabled}
          {...rest}
        >
          <SelectButton.InsetInput
            className={mergeClassnames(className, '[&_>_span]:gap-4')}
          >
            {counter > 0 && (
              <SelectButton.Value>
                <SelectButton.Chip onClear={onClear}>
                  {counter}
                </SelectButton.Chip>
              </SelectButton.Value>
            )}
            <span className="flex flex-col items-start overflow-hidden text-ellipsis whitespace-nowrap">
              <SelectButton.FloatingLabel>{label}</SelectButton.FloatingLabel>
              <SelectButton.Placeholder>{placeholder}</SelectButton.Placeholder>
            </span>
          </SelectButton.InsetInput>
        </SelectButton>
      </div>
    </Listbox.Button>
  );
};

//Dropdown.Trigger
const Trigger: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const { pooper } = useDropdownContext('Dropdown.Trigger');
  return (
    <Listbox.Button as={'div'} ref={pooper?.setAnchor}>
      <div className={className && className}>{children}</div>
    </Listbox.Button>
  );
};

//Dropdown.Hint
const Hint: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const { isError, disabled } = useDropdownContext('Dropdown.Input');
  return (
    <p
      role="alert"
      className={mergeClassnames(
        'inline-block mt-2 ps-4 text-moon-12',
        isError ? 'text-chichi' : 'text-trunks',
        disabled && 'opacity-30 cursor-not-allowed',
        className && className
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
  InsetSelect,
  MultiSelect,
  InsetMultiSelect,
});

export default Dropdown;
//TODO: Remove SelectButton.Label and and use Label
