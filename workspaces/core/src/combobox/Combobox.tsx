import React, {
  Children,
  createContext,
  Fragment,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { Combobox as HUICombobox, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import TextInput from '../textInput/TextInput';

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

type InputSize = 'sm' | 'md' | 'lg' | 'xl';

type ComboboxState = {
  /**
   * There must be some way we can have proper types for this.
   */
  value?: any;
  isError: boolean;
  disabled: boolean;
  onClear?: () => void;
  onQueryChange(value: string): void;
  multiple: boolean;
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null>>;
    setPopper: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  };
  size?: InputSize;
};

type CallableChildren = (data: { open?: boolean }) => ReactNode;

type CallableOptionChildren = (data: {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}) => ReactNode;

type ComboboxRootProps = {
  value: unknown;
  onChange(value: unknown): void;
  onQueryChange(value: string): void;
  onClear?: () => void;
  isError?: boolean;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  multiple?: boolean;
  position?: Placement;
  children: ReactNode | CallableChildren;
  label?: string;
  placeholder?: string;
};

const ComboboxContext = createContext<ComboboxState | null>(null);
ComboboxContext.displayName = 'ComboboxContext';

const useComboboxContext = (component: string) => {
  const context = useContext(ComboboxContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Combobox /> component.`
    );
    throw err;
  }
  return context;
};

const ComboboxRoot = ({
  children,
  value,
  onChange,
  onQueryChange,
  isError = false,
  disabled = false,
  size = 'md',
  className,
  onClear,
  position = 'bottom-start',
  multiple = false,
  label,
  placeholder,
}: ComboboxRootProps) => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  /**
   * Does this update state when, for example, anchorEl gets updated?
   */
  const states = {
    value,
    isError,
    size,
    disabled,
    onClear,
    multiple,
    onQueryChange,
    popper: {
      styles: styles,
      attributes: attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
    },
  };

  const childrens = Children.toArray(children);
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <ComboboxContext.Provider value={states}>
      <div
        className={mergeClassnames('w-full relative', className && className)}
      >
        <HUICombobox
          value={value}
          onChange={onChange}
          disabled={disabled}
          multiple={multiple}
        >
          {({ open }) => (
            <>
              <HUICombobox.Input
                onChange={({ target: { value } }) => onQueryChange(value)}
                as={TextInput}
                label={label}
                placeholder={placeholder}
                inputSize={size}
                type="text"
                disabled={disabled}
              />
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => onQueryChange('')}
              >
                <HUICombobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {typeof children === 'function'
                    ? callableChildren && callableChildren({ open })
                    : childrens.map((ch) => ch)}
                </HUICombobox.Options>
              </Transition>
            </>
          )}
        </HUICombobox>
      </div>
    </ComboboxContext.Provider>
  );
};

const Option = ({
  value,
  children,
}: {
  value: unknown;
  children: ReactNode | CallableOptionChildren;
}) => {
  const childrens = Children.toArray(children);
  const callableChildren =
    typeof children === 'function' && (children as CallableOptionChildren);
  /**
   * For some reason not showing >:()
   */
  return (
    <HUICombobox.Option value={value}>
      {({ active, disabled, selected }) => {
        typeof children === 'function'
          ? callableChildren && callableChildren({ active, disabled, selected })
          : childrens.map((ch) => ch);
      }}
    </HUICombobox.Option>
  );
};

const Combobox = Object.assign(ComboboxRoot, { Option });

export default Combobox;
