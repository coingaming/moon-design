import React, { Fragment, ReactNode, useState } from 'react';
import { Combobox as HeadlessCombobox, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import Radio from '../radio/Radio';
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

type ComboboxRootProps = {
  value?: BaseOptionType;
  onChange(value: BaseOptionType): void;
  onQueryChange(value: string): void;
  onClear?: () => void;
  displayValue?: (value: BaseOptionType) => string;
  isError?: boolean;
  disabled?: boolean;
  size?: InputSize;
  className?: string;
  position?: Placement;
  children: ReactNode | (({ open }: { open: boolean }) => ReactNode);
  label?: string;
  placeholder?: string;
};

type OptionProps = {
  value: BaseOptionType;
  displayRadioIcon?: boolean;
  children?:
    | ReactNode
    | (({
        active,
        disabled,
        selected,
      }: {
        active: boolean;
        selected: boolean;
        disabled: boolean;
      }) => ReactNode);
  className?: string;
};

const ComboboxRoot: React.FC<ComboboxRootProps> = ({
  children,
  value,
  onChange,
  onQueryChange,
  isError = false,
  disabled = false,
  size = 'md',
  className = '',
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

  return (
    <div className={mergeClassnames('w-full relative', className)}>
      <HeadlessCombobox
        value={value}
        onChange={onChange}
        disabled={disabled}
        multiple={multiple}
        nullable
      >
        {({ open }) => (
          <>
            <div className="relative" ref={setAnchorEl}>
              <HeadlessCombobox.Input
                onChange={({ target: { value } }) => onQueryChange(value)}
                as={TextInput}
                displayValue={displayValue}
                label={label}
                placeholder={placeholder}
                inputSize={size}
                type="text"
                isError={isError}
              />
              <HeadlessCombobox.Button
                className={mergeClassnames(
                  'text-bulma absolute top-4 flex-shrink-0 transition-transform',
                  size === 'sm' ? 'text-moon-16' : 'text-moon-24',
                  size === 'xl' && 'top-4 end-4',

                  size === 'sm' && label && 'top-10 end-2',
                  size == 'md' && label && 'top-10 end-2',
                  size === 'lg' && label && 'top-11 end-2',
                  size === 'xl' && !label && 'top-4 end-4',

                  size === 'sm' && !label && 'top-2 end-2',
                  size == 'md' && !label && 'top-2 end-2',
                  size === 'lg' && !label && 'top-3 end-2',

                  open && 'rotate-[-180deg]'
                )}
              >
                <ControlsChevronDownSmall />
              </HeadlessCombobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => onQueryChange('')}
            >
              <HeadlessCombobox.Options
                ref={setPopperEl}
                style={styles}
                {...attributes?.popper}
                className={mergeClassnames(
                  'w-full min-w-[18.75rem] max-h-[18.75rem] py-2 px-1 my-2 rounded-moon-s-md box-border bg-gohan shadow-moon-lg overflow-y-auto z-5 absolute',
                  'focus:outline-none'
                )}
              >
                {typeof children === 'function' ? children({ open }) : children}
              </HeadlessCombobox.Options>
            </Transition>
          </>
        )}
      </HeadlessCombobox>
    </div>
  );
};

const Option: React.FC<OptionProps> = ({
  value,
  children,
  displayRadioIcon = false,
  className = '',
}) => {
  return (
    <HeadlessCombobox.Option value={value}>
      {({ active, disabled, selected }) => (
        <div
          className={mergeClassnames(
            'p-2 flex items-center justify-between cursor-pointer mb-1 last:mb-0 text-moon-14 text-bulma rounded-moon-s-sm hover:bg-goku',
            active && 'bg-goku',
            className
          )}
        >
          <div>
            {typeof children === 'function'
              ? children({ active, disabled, selected })
              : children}
          </div>
          {displayRadioIcon && <Radio />}
        </div>
      )}
    </HeadlessCombobox.Option>
  );
};

const Combobox = Object.assign(ComboboxRoot, { Option });

export default Combobox;
