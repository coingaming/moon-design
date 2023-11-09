import React, { Fragment, forwardRef } from 'react';
import { Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import type DropdownRootProps from './private/types/DropdownRootProps';
import type OptionProps from './private/types/OptionProps';
import type OptionsProps from './private/types/OptionsProps';
import type SelectProps from './private/types/SelectProps';
import type WithChildren from './private/types/WithChildren';
import DropdownContext from './private/utils/DropdownContext';
import useDropdownContext from './private/utils/useDropdownContext';
import useFormContext from '../form/private/utils/useFormContext';
import useFormItemContext from '../form/private/utils/useFormItemContext';
import GenericHint from '../hint/Hint';
import { SelectButton } from '../index';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const DropdownRoot = ({
  children,
  value,
  onChange,
  isError: dropdownError,
  disabled: dropdownDisabled,
  size: dropdownSize = 'md',
  className,
  onClear,
  position = 'bottom-start',
  ...rest
}: DropdownRootProps) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();

  const { size: formSize } = useFormContext('Input');
  const {
    size: formItemSize,
    disabled: formItemDisabled,
    error: formItemError,
  } = useFormItemContext('Input');
  const size = dropdownSize || formItemSize || formSize;
  const disabled = dropdownDisabled || formItemDisabled;
  const isError = dropdownError || formItemError;

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

  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const callableChildren = typeof children === 'function' && children;
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
                : childrens?.map((ch) => ch)}
            </div>
          )}
        </Listbox>
      </div>
    </DropdownContext.Provider>
  );
};

const HiddenInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
  const { value: innerValue } = useDropdownContext('Dropdown.Select');
  const currentValue = props?.value || innerValue;
  return <input ref={ref} hidden {...props} value={currentValue} />;
});

const Options = ({
  children,
  menuWidth,
  className,
  ...rest
}: WithChildren<OptionsProps>) => {
  const { pooper } = useDropdownContext('Dropdown.Options');
  return (
    <Listbox.Options
      ref={pooper?.setPopper}
      style={pooper?.styles?.popper}
      {...pooper?.attributes?.popper}
      className={mergeClassnames(
        menuWidth ? menuWidth : 'w-full min-w-[18.75rem]',
        'z-5 absolute p-1 my-2 rounded-moon-s-md box-border bg-goku shadow-moon-lg overflow-y-auto focus:outline-none',
        className && className
      )}
      {...rest}
    >
      {children}
    </Listbox.Options>
  );
};

const Option = ({ children, value }: OptionProps) => {
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

const Select = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  ...rest
}: WithChildren<SelectProps>) => {
  const { size, pooper, isError, disabled } =
    useDropdownContext('Dropdown.Select');
  return (
    <>
      {label && (
        <SelectButton.Label labelSize={size} idDisabled={disabled}>
          {label}
        </SelectButton.Label>
      )}
      <Listbox.Button as={Fragment}>
        <SelectButton
          size={size}
          open={open}
          isError={isError}
          idDisabled={disabled}
          ref={pooper?.setAnchor}
          {...rest}
        >
          <SelectButton.Input className={className}>
            {children ? (
              <SelectButton.Value>{children}</SelectButton.Value>
            ) : (
              <SelectButton.Placeholder>{placeholder}</SelectButton.Placeholder>
            )}
          </SelectButton.Input>
        </SelectButton>
      </Listbox.Button>
    </>
  );
};

//Dropdown.InsetSelect
const InsetSelect = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  ...rest
}: WithChildren<SelectProps>) => {
  const { size, pooper, isError, disabled } = useDropdownContext(
    'Dropdown.InsetSelect'
  );
  return (
    <Listbox.Button as={Fragment}>
      <SelectButton
        size={size}
        open={open}
        isError={isError}
        idDisabled={disabled}
        ref={pooper?.setAnchor}
        {...rest}
      >
        <SelectButton.InsetInput className={className}>
          <span className="flex flex-col items-start truncate">
            <SelectButton.FloatingLabel>{label}</SelectButton.FloatingLabel>
            {children ? (
              <SelectButton.Value>{children}</SelectButton.Value>
            ) : (
              <SelectButton.Placeholder>{placeholder}</SelectButton.Placeholder>
            )}
          </span>
        </SelectButton.InsetInput>
      </SelectButton>
    </Listbox.Button>
  );
};

//Dropdown.MultiSelect
const MultiSelect = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  counter = 0,
  ...rest
}: WithChildren<SelectProps & { counter?: number }>) => {
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
      <Listbox.Button as={Fragment}>
        <SelectButton
          size={size}
          open={open}
          isError={isError}
          idDisabled={disabled}
          ref={pooper?.setAnchor}
          {...rest}
        >
          <SelectButton.Input className={mergeClassnames(className)}>
            <span className="flex w-full gap-2 items-center">
              {counter > 0 && (
                <SelectButton.Chip onClear={onClear}>
                  {counter}
                </SelectButton.Chip>
              )}
              <SelectButton.Placeholder>{placeholder}</SelectButton.Placeholder>
            </span>
          </SelectButton.Input>
        </SelectButton>
      </Listbox.Button>
    </>
  );
};

//Dropdown.InsetMultiSelect
const InsetMultiSelect = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  counter = 0,
  ...rest
}: WithChildren<SelectProps & { counter?: number }>) => {
  const { size, pooper, isError, disabled, onClear } = useDropdownContext(
    'Dropdown.InsetMultiSelect'
  );
  return (
    <Listbox.Button as={Fragment}>
      <SelectButton
        size={size}
        open={open}
        isError={isError}
        idDisabled={disabled}
        ref={pooper?.setAnchor}
        {...rest}
      >
        <SelectButton.InsetInput
          className={mergeClassnames(className, '[&_>_span]:gap-4')}
        >
          {counter > 0 && (
            <SelectButton.Chip onClear={onClear}>{counter}</SelectButton.Chip>
          )}
          <span className="flex flex-col items-start truncate">
            <SelectButton.FloatingLabel>{label}</SelectButton.FloatingLabel>
            <SelectButton.Placeholder>{placeholder}</SelectButton.Placeholder>
          </span>
        </SelectButton.InsetInput>
      </SelectButton>
    </Listbox.Button>
  );
};

//Dropdown.Trigger
const Trigger = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => {
  const { pooper } = useDropdownContext('Dropdown.Trigger');
  return (
    <Listbox.Button
      ref={pooper?.setAnchor}
      className={className && className}
      {...rest}
    >
      {children}
    </Listbox.Button>
  );
};

//Dropdown.Hint
const Hint = ({
  children,
  className,
}: WithChildren<{ className?: string }>) => {
  const { isError, disabled } = useDropdownContext('Dropdown.Input');
  return (
    <GenericHint error={isError} disabled={disabled} className={className}>
      {children}
    </GenericHint>
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
  HiddenInput,
});

export default Dropdown;
//TODO: Remove SelectButton.Label and and use Label
