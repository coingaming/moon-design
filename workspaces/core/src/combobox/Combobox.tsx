import React, { createContext, Fragment, ReactNode, useState } from 'react';
import { Combobox as HUICombobox, Transition } from '@headlessui/react';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import { usePopper } from 'react-popper';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import RadioButton from '../radioButton/RadioButton';
import { BaseOptionType } from '../select/Select';
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
type RenderProp = (data: { open?: boolean }) => ReactNode;
type OptionsRenderProp = (data: {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}) => ReactNode;

type ComboboxRootProps = {
  value: BaseOptionType;
  onChange(value: T): void;
  onQueryChange(value: string): void;
  onClear?: () => void;
  displayValue?: (value: T) => string;
  isError?: boolean;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  position?: Placement;
  children: ReactNode | RenderProp;
  label?: string;
  placeholder?: string;
};

type OptionProps = {
  value: BaseOptionType;
  displayRadioIcon?: boolean;
  children?: ReactNode | OptionsRenderProp;
};

const ComboboxRoot: React.FC<ComboboxRootProps> = ({
  children,
  value,
  onChange,
  onQueryChange,
  isError = false,
  disabled = false,
  size = 'md',
  className,
  position = 'bottom-start',
  label,
  placeholder,
  displayValue,
}) => {
  const multiple = false;
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const hasRenderProp = typeof children === 'function';

  return (
    <div className={mergeClassnames('w-full relative', className && className)}>
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
                  'w-full min-w-[18.75rem] max-h-[18.75rem] z-1 py-2 px-1 my-2 rounded-moon-s-md box-border bg-gohan shadow-moon-lg overflow-y-auto',
                  'focus:outline-none'
                )}
              >
                {hasRenderProp ? children?.({ open }) : children}
              </HUICombobox.Options>
            </Transition>
          </>
        )}
      </HUICombobox>
    </div>
  );
};

const Option: React.FC<OptionProps> = ({
  value,
  children,
  displayRadioIcon = false,
}) => {
  const hasRenderProp = typeof children === 'function';
  return (
    <HUICombobox.Option value={value}>
      {({ active, disabled, selected }) => (
        <div
          className={mergeClassnames(
            'p-2 flex items-center justify-between cursor-pointer mb-1 last:mb-0 text-moon-14 text-bulma rounded-moon-s-sm hover:bg-goku',
            active && 'bg-goku'
          )}
        >
          <div>
            {hasRenderProp
              ? children?.({ active, disabled, selected })
              : children}
          </div>
          {displayRadioIcon && <RadioButton checked={selected} />}
        </div>
      )}
    </HUICombobox.Option>
  );
};

const Combobox = Object.assign(ComboboxRoot, { Option });

export default Combobox;
