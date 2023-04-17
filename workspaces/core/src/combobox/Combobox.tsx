import React from 'react';
import { Combobox as ComboboxHeadlessUI, Transition, Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { SelectButton, TextInput } from '../index';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsChevronDownSmall from '../private/icons/ControlsChevronDownSmall';
import ComboboxRootProps from './private/types/ComboboxRootProps';
import InputProps from './private/types/InputProps';
import SelectProps from './private/types/SelectProps';
import WithChildren from './private/types/WithChildren';
import ComboboxContext from './private/utils/ComboboxContext';
import useComboboxContext from './private/utils/useComboboxContext';
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

  const resetQuery = (openState: boolean) => {
    if ((open !== openState) && open) {
      onQueryChange('');
    }
  }

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
              {resetQuery(open)}
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
}: WithChildren<SelectProps>) => {
  const { size, open } = useComboboxContext('Combobox.Button');

  return (
      <ComboboxHeadlessUI.Button className={mergeClassnames(
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
  type,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<SelectProps & InputProps>) => {
  const { size, popper, isError, disabled } = useComboboxContext('Combobox.Select');

  const triggerCSS = 'flex-nowrap align-middle';
  const inputCSS = 'flex-grow pr-8';
  const buttonCSS = 'absolute text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center';

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
        className={`${triggerCSS}, ${inputCSS}, ${buttonCSS}`}
        {...rest}
      >
        <ControlsChevronDownSmall />
      </Listbox.Button>
    </Listbox>
  );
};
/*
const InsetSelect = ({
  open,
  value,
  label,
  placeholder,
  children,
  className,
  ...rest
}: WithChildren<SelectProps>) => {
  const { size, popper, isError, disabled } = useComboboxContext(
    'Combobox.InsetSelect'
  );
  return (
    <Listbox.Button as={'div'} ref={popper?.setAnchor}>
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
  const { size, popper, isError, disabled, onClear } = useComboboxContext(
    'Combobox.MultiSelect'
  );
  return (
    <>
      {label && (
        <SelectButton.Label labelSize={size} idDisabled={disabled}>
          {label}
        </SelectButton.Label>
      )}
      <Listbox.Button as={'div'} ref={popper?.setAnchor}>
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
  const { size, popper, isError, disabled, onClear } = useComboboxContext(
    'Combobox.InsetMultiSelect'
  );
  return (
    <Listbox.Button as={'div'} ref={popper?.setAnchor}>
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
*/
const Trigger = ({
  children,
  placeholder,
  className,
  type,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<InputProps>) => {
  const { size, popper } = useComboboxContext('Combobox.Trigger');

  const textSize = (size === undefined || size === 'md') ? 'text-base' : `text-${size}`;

  let classNames: string[] = [];
  if (className) {
    classNames = className.split(',').map((cName) => {
      return cName.trim();
    });
  }
  while (classNames.length < 3) classNames.push('');

  return (
    <div className={mergeClassnames('relative', 'flex w-full', classNames[0])} ref={popper?.setAnchor}>
      <Input
        displayValue={displayValue}
        onChange={onChange}
        onQueryChange={onQueryChange}
        placeholder={placeholder}
        className={`${classNames[1]} ${textSize}`}
        type={type}
      />
      <Button
        className={`${classNames[2]} ${textSize}`}
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
  /*InsetSelect,
  MultiSelect,
  InsetMultiSelect*/
});

export default Combobox;
