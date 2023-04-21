import React from 'react';
import { Combobox as ComboboxHeadlessUI, Transition as TransitionHeadlessUI, Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { InsetInput, SelectButton, TextInput } from '../index';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import ButtonProps from './private/types/ButtonProps';
import ComboboxRootProps from './private/types/ComboboxRootProps';
import InputProps from './private/types/InputProps';
import SelectProps from './private/types/SelectProps';
import WithChildren from './private/types/WithChildren';
import { useComboboxContext, ComboboxContext } from './private/utils/useComboboxContext';
import type OptionProps from './private/types/OptionProps';
import type OptionsProps from './private/types/OptionsProps';

const ComboboxRoot = ({
  value,
  children,
  onChange,
  onQueryChange,
  isError,
  disabled,
  size = 'md',
  className,
  onClear,
  multiple,
  position = 'bottom-start',
  placeholder,
  displayValue,
  defaultValue,
  label,
  ref,
  ...rest
}: ComboboxRootProps) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();

  let { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const states = {
    value: value,
    displayValue: displayValue,
    isError: isError,
    size: size,
    disabled: disabled,
    multiple: multiple,
    onClear: onClear,
    popper: {
      styles: styles,
      attributes: attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
    },
  };

  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const callableChildren = typeof children === 'function' && children;

  return (
    <ComboboxContext.Provider value={states}>
      <div
        className={mergeClassnames('w-full relative', className)}
      >
        <ComboboxHeadlessUI
          value={value as {}[]}
          onChange={onChange}
          disabled={disabled}
          multiple={multiple as true}
          ref={ref as React.Ref<HTMLElement>}
          {...rest}
        >
          {({ open }) => (
            <>
              {typeof children === 'function'
                ? callableChildren && callableChildren({ open })
                : childrens?.map((ch) => ch)
              }
            </>
          )}
        </ComboboxHeadlessUI>
      </div>
    </ComboboxContext.Provider>
  );
};

const Input = ({
  displayValue,
  placeholder,
  type,
  className,
  onChange,
  onQueryChange,
  label,
  ...rest
}: InputProps) => {

  const { size, popper, disabled, isError } = useComboboxContext('Combobox.Input');

  return (
    <ComboboxHeadlessUI.Input
      inputSize={size}
      onChange={({ target: { value } }) => onQueryChange(value)}
      ref={popper?.setAnchor}
      as={TextInput}
      displayValue={displayValue}
      placeholder={placeholder}
      type={type ? type : 'text'}
      className={mergeClassnames(
        size === undefined || size === 'md' ? 'text-base' : `text-${size}`,
        className
      )}
      disabled={disabled}
      isError={isError}
      {...rest}
    />
  );
};

const InputInset = ({
  children,
  displayValue,
  placeholder,
  type,
  className,
  onChange,
  onQueryChange,
  label,
  ...rest
}: WithChildren<InputProps>) => {

  const { size, popper, disabled, isError } = useComboboxContext('Combobox.Input');

  return (
    <ComboboxHeadlessUI.Input
      onChange={({ target: { value } }) => onQueryChange(value)}
      ref={popper?.setAnchor}
      as={InsetInput}
      displayValue={displayValue}
      placeholder={placeholder}
      type={type ? type : 'text'}
      className={mergeClassnames(
        size === undefined || size === 'md' ? 'text-base' : `text-${size}`,
        className
      )}
      disabled={disabled}
      error={isError}
      {...rest}
    >
      <InsetInput.Label>{label}</InsetInput.Label>
      {children}
    </ComboboxHeadlessUI.Input>
  );
};

const Button = ({
  open,
  children,
  label,
  className,
  ...rest
}: WithChildren<ButtonProps>) => {
  const { size } = useComboboxContext('Combobox.Button');

  return (
      <ComboboxHeadlessUI.Button
        className={mergeClassnames(
          size === 'sm' ? 'text-moon-16' : 'text-moon-24',
          size === 'xl' && 'end-4',

          size === 'sm' && label && 'end-2',
          size == 'md' && label && 'end-2',
          size === 'lg' && label && 'end-2',
          size === 'xl' && !label && 'end-4',

          size === 'sm' && !label && 'end-2',
          size == 'md' && !label && 'end-2',
          size === 'lg' && !label && 'end-2',

          open && 'rotate-[-180deg]',
          className
        )}
        {...rest}
      >
        {children}
      </ComboboxHeadlessUI.Button>
  );
};

const Options = ({
  children,
  menuWidth,
  className,
  ...rest
}: WithChildren<OptionsProps>) => {
  const { popper } = useComboboxContext('Combobox.Options');
  return (
      <ComboboxHeadlessUI.Options
        ref={popper?.setPopper}
        style={popper?.styles?.popper}
        {...popper?.attributes?.popper}
        className={mergeClassnames(
          menuWidth ? menuWidth : 'w-full max-h-[18.75rem] py-2 px-1 my-2 rounded-moon-s-md box-border bg-gohan shadow-moon-lg z-10 absolute',
          'overflow-y-auto focus:outline-none',
          className
        )}
        {...rest}
      >
        {children}
      </ComboboxHeadlessUI.Options>
  );
};

const Option = ({ children, value }: OptionProps) => {
  return (
    <ComboboxHeadlessUI.Option as="span" value={value}>
      {({ selected, disabled, active }) =>
        typeof children === 'function'
        ? children({ selected, disabled, active })
        : children
      }
    </ComboboxHeadlessUI.Option>
  );
};

const Trigger = ({
  children,
  className,
  multiple,
  counter,
  ...rest
}: WithChildren<SelectProps>) => {
  const { popper } = useComboboxContext('Combobox.Trigger');

  return (
    <div
      className={mergeClassnames('relative', 'flex w-full', className)}
      ref={popper?.setAnchor}
    >
      {children}
    </div>
  );
};

const Counter = ({
  open,
  className,
  counter,
  ...rest
}: SelectProps) => {
  const { size, isError, disabled, onClear } = useComboboxContext('Combobox.Counter');

  return (
    <span className={mergeClassnames(
      'flex gap-2 items-center absolute left-1 flex-grow-0 flex-shrink-0 self-center',
      className
    )}>
      <SelectButton
        size={size}
        open={open}
        isError={isError}
        idDisabled={disabled}
        {...rest}
      >
      <SelectButton.Value>
        <SelectButton.Chip onClear={onClear}>
          {counter}
        </SelectButton.Chip>
      </SelectButton.Value>
      </SelectButton>
    </span>
  );
};

const Transition = ({
  children,
  onQueryChange,
  ...rest
}: WithChildren<InputProps>) => {
  const { popper } = useComboboxContext('Combobox.Transition');

  return (
    <TransitionHeadlessUI
      as={'div'}
      leave='transition ease-in duration-100'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      afterLeave={() => onQueryChange('')}
      {...rest}
    >
      {children}
    </TransitionHeadlessUI>
  );
}

const Select = ({
  open,
  label,
  placeholder,
  children,
  className,
  multiple,
  counter,
  ...rest
}: WithChildren<SelectProps>) => {
  const { size, popper, disabled } = useComboboxContext('Combobox.Select');

  return (
    <Listbox>
      {label && (
        <SelectButton.Label labelSize={size} idDisabled={disabled}>
          {label}
        </SelectButton.Label>
      )}
      <Listbox.Button
        open={open}
        as={Trigger}
        ref={popper?.setAnchor}
        className={className}
        multiple={multiple !== undefined}
        counter={counter}
        {...rest}
      >
        {children}
      </Listbox.Button>
    </Listbox>
  );
};

const MultiSelect = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  multiple = true,
  counter = 0,
  ...rest
}: WithChildren<SelectProps & { counter?: number }>) => {
  return (
    <Select
      open={open}
      label={label}
      placeholder={placeholder}
      className={className}
      multiple={true}
      counter={counter}
      {...rest}
    >
      {children}
    </Select>
  );
};

const Hint = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => {
  const { isError, disabled } = useComboboxContext('Combobox.Input');
  return (
    <p
      role="alert"
      className={mergeClassnames(
        'inline-block mt-2 ps-4 text-moon-12',
        isError ? 'text-chichi' : 'text-trunks',
        disabled && 'opacity-30 cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

const Combobox = Object.assign(ComboboxRoot, {
  Input,
  InputInset,
  Button,
  Options,
  Option,
  Trigger,
  Counter,
  Transition,
  Hint,
  Select,
  MultiSelect
});

export default Combobox;
