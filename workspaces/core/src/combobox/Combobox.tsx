import React, {
  Children,
  createContext,
  forwardRef,
  Fragment,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { Combobox as HUICombobox, Transition } from '@headlessui/react';
import {
  ControlsChevronDownSmall,
  ControlsCloseSmall,
} from '@heathmont/moon-icons-tw';
import { usePopper } from 'react-popper';
import Checkbox from '../checkbox/Checkbox';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import RadioButton from '../radioButton/RadioButton';
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
  multiple: boolean;
  withRadioIcon: boolean;
};

type CallableChildren = (data: { open?: boolean }) => ReactNode;

type CallableOptionChildren = (data: {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}) => ReactNode;

type ComboboxRootProps<T> = {
  value: T | null;
  onChange(value: T): void;
  onQueryChange(value: string): void;
  onClear?: () => void;
  displayValue?: (value: T) => string;
  isError?: boolean;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  // multiple?: boolean;
  position?: Placement;
  children: ReactNode | CallableChildren;
  label?: string;
  placeholder?: string;
  withRadioIcon?: boolean;
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

const ComboboxRoot = <T,>({
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
  label,
  placeholder,
  displayValue,
  withRadioIcon = true,
}: ComboboxRootProps<T>) => {
  const multiple = false;
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const states = {
    multiple,
    withRadioIcon,
  };

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
          nullable
        >
          {({ open }) => (
            <>
              <div className="relative" ref={setAnchorEl}>
                <HUICombobox.Input
                  onChange={({ target: { value } }) => onQueryChange(value)}
                  as={TextInput}
                  displayValue={displayValue}
                  label={label}
                  placeholder={placeholder}
                  inputSize={size}
                  type="text"
                  disabled={disabled}
                  isError={isError}
                />
                <HUICombobox.Button
                  className={mergeClassnames(
                    'text-bulma absolute top-4 flex-shrink-0 transition-transform',
                    size === 'sm' ? 'text-moon-16' : 'text-moon-24',
                    size === 'xl' && 'top-4 right-4',
                    size == 'md' && 'top-10 right-2',
                    size === 'lg' && 'top-11 right-2',
                    size === 'sm' && 'top-10 right-2',
                    open && 'rotate-[-180deg]'
                  )}
                >
                  <ControlsChevronDownSmall />
                </HUICombobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => onQueryChange('')}
              >
                <HUICombobox.Options
                  ref={setPopperEl}
                  style={styles}
                  {...attributes?.popper}
                  className={mergeClassnames(
                    'z-5 w-full absolute p-1 my-2 rounded-moon-s-md box-border bg-gohan shadow-moon-lg overflow-y-auto focus:outline-none'
                  )}
                >
                  {typeof children === 'function'
                    ? callableChildren && callableChildren({ open })
                    : Children.toArray(children).map((ch) => ch)}
                </HUICombobox.Options>
              </Transition>
            </>
          )}
        </HUICombobox>
      </div>
    </ComboboxContext.Provider>
  );
};

/**
 * TODO: FIX BULMA
 */
const Option = ({
  value,
  children,
}: {
  value: unknown;
  children?: ReactNode | CallableOptionChildren;
}) => {
  const { withRadioIcon } = useComboboxContext('Combobox.Option');
  const callableChildren =
    typeof children === 'function' && (children as CallableOptionChildren);
  return (
    <HUICombobox.Option value={value}>
      {({ active, disabled, selected }) => (
        <div
          className={mergeClassnames(
            'p-2 rounded-moon-s-xs flex items-center justify-between cursor-pointer',
            active && 'bg-bulma/[0.04]'
          )}
        >
          <div>
            {typeof children === 'function'
              ? callableChildren &&
                callableChildren({ active, disabled, selected })
              : Children.toArray(children).map((ch) => ch)}
          </div>
          {withRadioIcon && <RadioButton checked={selected} />}
        </div>
      )}
    </HUICombobox.Option>
  );
};

const Combobox = Object.assign(ComboboxRoot, { Option });

export default Combobox;
