import React from 'react';
import { Combobox as ComboboxHeadlessUI, Transition as TransitionHeadlessUI, Listbox } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { InsetInput as InputInset, SelectButton, Input as NativeInput } from '../index';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
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
  nullable,
  position = 'bottom-start',
  placeholder,
  displayValue,
  defaultValue,
  ref,
  ...rest
}: ComboboxRootProps) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);

  let { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const states = {
    value: value,
    displayValue: displayValue,
    isError: isError,
    size: size,
    disabled: disabled,
    input: {
      isFocused: isInputFocused,
      setIsFocused: setIsInputFocused,
    },
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
          nullable={nullable as true}
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

const Trigger = ({
  children,
  className,
  isInset,
}: WithChildren<SelectProps> & { isInset?: boolean }) => {
  const { size, input, popper, disabled, isError } = useComboboxContext('Combobox.Trigger');

  return (
    <div
      tabIndex={-1}
      className={mergeClassnames(
        'relative',
        'flex flex-nowrap w-full align-middle rounded-lg py-2 px-3 bg-gohan gap-x-2',
        size === 'sm' && 'py-1.5 px-2 rounded',
        (size === 'sm' || (isInset !== undefined && isInset)) && 'py-2 px-3 rounded-md gap-x-3',
        size === 'lg' && 'py-3 px-3',
        (size === 'xl' || (isInset !== undefined && isInset)) && 'py-3 px-4 rounded-xl gap-x-4',
        input?.isFocused ? 'shadow-input-focus hover:shadow-input-focus' : 'shadow-input hover:shadow-input-hov',
        'focus:shadow-input-focus focus:outline-none',
        'focus-visible::shadow-input-focus focus-visible::outline-none',
        isError && 'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
        disabled && 'opacity-30 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed',
        className)}
      ref={popper?.setAnchor}
    >
      {children}
    </div>
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

  const { size, popper, disabled, isError, input } = useComboboxContext('Combobox.Input');

  return (
    <ComboboxHeadlessUI.Input
      onChange={({ target: { value } }) => onQueryChange(value)}
      ref={popper?.setAnchor}
      as={NativeInput}
      displayValue={displayValue}
      placeholder={placeholder}
      type={type ? type : 'text'}
      className={mergeClassnames(
        'flex-grow h-full border-0 bg-transparent px-0',
        '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
        size === undefined || size === 'md' ? 'text-base' : `text-${size}`,
        className
      )}
      disabled={disabled}
      isError={isError}
      onFocus={() => input?.setIsFocused(true)}
      onBlur={() => input?.setIsFocused(false)}
      {...rest}
    />
  );
};

const InsetInput = ({
  displayValue,
  placeholder,
  type,
  className,
  onChange,
  onQueryChange,
  label,
  ...rest
}: InputProps) => {

  const { size, popper, disabled, isError, input } = useComboboxContext('Combobox.InsetInput');

  return (
    <span className={mergeClassnames(
        'relative',
        'flex flex-grow w-full'
      )}
    >
      <ComboboxHeadlessUI.Input
        onChange={({ target: { value } }) => onQueryChange(value)}
        ref={popper?.setAnchor}
        as={NativeInput}
        displayValue={displayValue}
        placeholder={placeholder}
        type={type ? type : 'text'}
        disabled={disabled}
        className={mergeClassnames(
          'flex-grow h-full border-0 bg-transparent px-0',
          '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
          label !== undefined && label.length > 0 && 'input-xl pt-[.75rem] input-xl-dt-label',
          size === undefined || size === 'md' ? 'text-base' : `text-${size}`,
          className
        )}
        isError={isError}
        onFocus={() => input?.setIsFocused(true)}
        onBlur={() => input?.setIsFocused(false)}
        {...rest}
      />
      <InputInset.Label className='top-[-.125rem] rtl:right-0 ltr:left-0'>{label}</InputInset.Label>
    </span>
  );
};

const Button = ({
  open,
  children,
  label,
  className,
  ...rest
}: WithChildren<ButtonProps>) => {
  const { size, disabled } = useComboboxContext('Combobox.Button');

  return (
      <ComboboxHeadlessUI.Button
        className={mergeClassnames(
          'w-6 h-6',
          size === 'sm' ? 'text-moon-16' : 'text-moon-24',
          size === 'sm' && 'w-4 h-4',
          open && 'rotate-[-180deg]',
          'text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center',
          disabled && 'cursor-not-allowed',
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

const Counter = ({
  open,
  className,
  counter,
  ...rest
}: SelectProps) => {
  const { size, isError, disabled, onClear } = useComboboxContext('Combobox.Counter');

  return (
    <span className={mergeClassnames(
      'flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center',
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
}: WithChildren<{ onQueryChange: (value: string) => void }>) => {

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
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<SelectProps & InputProps>) => {
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
        <Input
          open={open}
          placeholder={placeholder}
          onChange={onChange}
          onQueryChange={onQueryChange}
          displayValue={displayValue}
        />
        <Button open={open}>
          {children}
        </Button>
      </Listbox.Button>
    </Listbox>
  );
};

const MultiSelect = ({
  open,
  label,
  placeholder,
  children,
  className,
  multiple = true,
  counter,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<SelectProps & InputProps>) => {
  const { size, popper, disabled } = useComboboxContext('Combobox.MultiSelect');

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
        {counter !== undefined && counter > 0 && (
          <Counter counter={counter} />
        )}
        <Input
          open={open}
          placeholder={placeholder}
          onChange={onChange}
          onQueryChange={onQueryChange}
          displayValue={displayValue}
        />
        <Button open={open}>
          {children}
        </Button>
      </Listbox.Button>
    </Listbox>
  );
};

const InsetSelect = ({
  open,
  label,
  placeholder,
  children,
  className,
  multiple,
  counter,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<SelectProps & InputProps>) => {
  const { popper } = useComboboxContext('Combobox.Select');

  return (
    <Listbox>
      <Listbox.Button
        open={open}
        as={Trigger}
        ref={popper?.setAnchor}
        className={className}
        multiple={multiple !== undefined}
        counter={counter}
        isInset={true}
        {...rest}
      >
        <InsetInput
          open={open}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onQueryChange={onQueryChange}
          displayValue={displayValue}
        />
        <Button open={open}>
          {children}
        </Button>
      </Listbox.Button>
    </Listbox>
  );
};

const InsetMultiSelect = ({
  open,
  label,
  placeholder,
  children,
  className,
  multiple = true,
  counter,
  onChange,
  onQueryChange,
  displayValue,
  ...rest
}: WithChildren<SelectProps & InputProps>) => {
  const { popper } = useComboboxContext('Combobox.MultiSelect');

  return (
    <Listbox>
      <Listbox.Button
        open={open}
        as={Trigger}
        ref={popper?.setAnchor}
        className={className}
        multiple={multiple !== undefined}
        counter={counter}
        isInset={true}
        {...rest}
      >
        {counter !== undefined && counter > 0 && (
          <Counter counter={counter} />
        )}
        <InsetInput
          open={open}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onQueryChange={onQueryChange}
          displayValue={displayValue}
        />
        <Button open={open}>
          {children}
        </Button>
      </Listbox.Button>
    </Listbox>
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
  InsetInput,
  Button,
  Options,
  Option,
  Trigger,
  Counter,
  Transition,
  Hint,
  Select,
  MultiSelect,
  InsetSelect,
  InsetMultiSelect
});

export default Combobox;
