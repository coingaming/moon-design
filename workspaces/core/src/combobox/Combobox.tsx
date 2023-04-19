import React, { useEffect } from 'react';
import { Combobox as ComboboxHeadlessUI, Transition, Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { SelectButton, TextInput } from '../index';
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
  const [open, setOpen] = React.useState<boolean>(false);

  let { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const states = {
    value: value,
    displayValue: displayValue,
    isError: isError,
    size: size,
    open: open,
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

  useEffect(() => {
    if (!open) {
      onQueryChange('');
    }
  }, [open]);

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
              {setOpen(open)}
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
      className={mergeClassnames(isError ? 'text-red-600' : '', className)}
      disabled={disabled}
      isError={isError}
      {...rest}
    />
  );
};

const Button = ({
  children,
  label,
  className,
  ...rest
}: WithChildren<ButtonProps>) => {
  const { size, open } = useComboboxContext('Combobox.Button');

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

const Select = ({
  label,
  placeholder,
  children,
  className,
  inputClassName,
  buttonClassName,
  type,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<SelectProps & InputProps & {inputClassName?: string, buttonClassName?: string}>) => {
  const { size, popper, isError, disabled } = useComboboxContext('Combobox.Select');

  return (
    <Listbox>
      {label && (
        <SelectButton.Label labelSize={size} idDisabled={disabled}>
          {label}
        </SelectButton.Label>
      )}
      <Listbox.Button
        as={Trigger}
        onChange={onChange}
        onQueryChange={onQueryChange}
        displayValue={displayValue}
        placeholder={placeholder}
        type={type}
        ref={popper?.setAnchor}
        className={className}
        inputClassName={inputClassName}
        buttonClassName={buttonClassName}
        {...rest}
      >
        <ControlsChevronDownSmall />
      </Listbox.Button>
    </Listbox>
  );
};

const Trigger = ({
  children,
  placeholder,
  className,
  inputClassName,
  buttonClassName,
  type,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<InputProps & {inputClassName?: string, buttonClassName?: string}>) => {
  const { size, popper } = useComboboxContext('Combobox.Trigger');

  const textSize = (size === undefined || size === 'md') ? 'text-base' : `text-${size}`;

  return (
    <div className={mergeClassnames('relative', 'flex w-full', className)} ref={popper?.setAnchor}>
      <Input
        displayValue={displayValue}
        onChange={onChange}
        onQueryChange={onQueryChange}
        placeholder={placeholder}
        className={`${inputClassName} ${textSize}`}
        type={type}
      />
      <Button
        className={`${buttonClassName} ${textSize}`}
      >
        {children}
      </Button>
    </div>
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
  Button,
  Options,
  Option,
  Trigger,
  Hint,
  Select,
});

export default Combobox;
