import React, { forwardRef, useEffect, useState } from 'react';
import {
  Combobox as HeadlessCombobox,
  Transition as HeadlessTransition,
  Listbox,
} from '@headlessui/react';
import { usePopper } from 'react-popper';
import ButtonProps from './private/types/ButtonProps';
import { ComboboxRootProps } from './private/types/ComboboxRootProps';
import InputProps from './private/types/InputProps';
import type OptionProps from './private/types/OptionProps';
import type OptionsProps from './private/types/OptionsProps';
import SelectProps from './private/types/SelectProps';
import WithChildren from './private/types/WithChildren';
import { getSizeStyles, getTextSizes } from './private/utils/getSizeStyles';
import {
  useComboboxContext,
  ComboboxContext,
} from './private/utils/useComboboxContext';
import GenericHint from '../hint/Hint';
import {
  InsetInput as InputInset,
  SelectButton,
  Input as NativeInput,
} from '../index';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const ComboboxRoot = ({
  value,
  children,
  onChange,
  isError,
  disabled,
  size = 'md',
  className,
  onClear,
  onQueryChange,
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

  let { styles, attributes, forceUpdate } = usePopper(anchorEl, popperEl, {
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
    onQueryChange: onQueryChange,
    popper: {
      forceUpdate,
      styles,
      attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
    },
  };

  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const callableChildren = typeof children === 'function' && children;

  return (
    <ComboboxContext.Provider value={states}>
      <div className={mergeClassnames('w-full relative', className)}>
        <HeadlessCombobox
          // type coercion due to following issues in HeadlessUI combobox
          // https://github.com/tailwindlabs/headlessui/issues/2438
          // https://github.com/tailwindlabs/headlessui/issues/2434
          // https://codesandbox.io/s/festive-curran-ic7y9n?file=/src/ComboboxMultiple.tsx:527-565
          value={value as {}[]}
          multiple={multiple as true}
          nullable={nullable as true}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...rest}
        >
          {({ open }) => (
            <>
              {typeof children === 'function'
                ? callableChildren && callableChildren({ open })
                : childrens?.map((ch) => ch)}
            </>
          )}
        </HeadlessCombobox>
      </div>
    </ComboboxContext.Provider>
  );
};

const Trigger = forwardRef<HTMLDivElement, WithChildren<SelectProps>>(
  ({ children, className, innerLabel, open, onClose }, ref) => {
    const { value, size, input, popper, disabled, isError } =
      useComboboxContext('Combobox.Trigger');

    useEffect(() => {
      if (!open && typeof onClose === 'function') {
        onClose(value);
      }
    }, [open, value]);

    return (
      <div
        tabIndex={-1}
        className={mergeClassnames(
          'relative',
          'flex flex-nowrap w-full align-middle items-center rounded-lg py-2 px-3 bg-goku gap-x-2',
          getSizeStyles(size as string, innerLabel as boolean),
          input?.isFocused
            ? 'shadow-input-focus hover:shadow-input-focus'
            : 'shadow-input hover:shadow-input-hov',
          'focus:shadow-input-focus focus:outline-none',
          'focus-visible::shadow-input-focus focus-visible::outline-none',
          isError &&
          'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err',
          disabled &&
          'opacity-60 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed',
          className
        )}
        ref={popper?.setAnchor}
      >
        {children}
      </div>
    );
  }
);

const Input = ({
  displayValue,
  placeholder,
  type,
  className,
  label,
  ...rest
}: InputProps) => {
  const { size, popper, disabled, isError, input, onQueryChange } =
    useComboboxContext('Combobox.Input');
  return (
    <HeadlessCombobox.Input
      onChange={({ target: { value } }) => {
        onQueryChange ? onQueryChange(value) : () => { };
      }}
      as={NativeInput}
      displayValue={displayValue}
      placeholder={placeholder}
      type={type ? type : 'text'}
      className={mergeClassnames(
        'flex-grow h-full border-0 !rounded-none bg-transparent px-0',
        '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
        getTextSizes(size),
        className
      )}
      disabled={disabled}
      error={isError}
      onFocus={() => input?.setIsFocused(true)}
      onBlur={() => input?.setIsFocused(false)}
      aria-label={rest['aria-label']}
      {...rest}
      ref={popper?.setAnchor}
    />
  );
};

const InsetInput = ({
  displayValue,
  placeholder,
  type,
  className,
  label,
  ...rest
}: InputProps) => {
  const { size, popper, disabled, isError, input, onQueryChange } =
    useComboboxContext('Combobox.InsetInput');
  return (
    <span className={mergeClassnames('relative', 'flex flex-grow w-full')}>
      <HeadlessCombobox.Input
        onChange={({ target: { value } }) => {
          onQueryChange ? onQueryChange(value) : () => { };
        }}
        as={NativeInput}
        displayValue={displayValue}
        placeholder={placeholder === undefined ? '' : `${placeholder}`}
        type={type ? type : 'text'}
        disabled={disabled}
        className={mergeClassnames(
          'flex-grow h-full border-0 !rounded-none bg-transparent px-0',
          '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
          label !== undefined &&
          label.length > 0 &&
          (placeholder === undefined || placeholder.length === 0) &&
          'input-xl',
          label !== undefined && label.length > 0 && 'pt-3 input-xl-dt-label',
          getTextSizes(size),
          className,
          'leading-5'
        )}
        error={isError}
        onFocus={() => input?.setIsFocused(true)}
        onBlur={() => input?.setIsFocused(false)}
        aria-label={rest['aria-label']}
        {...rest}
        ref={popper?.setAnchor}
      />
      <InputInset.Label className="w-auto -top-0.5 !inset-x-0 whitespace-nowrap overflow-x-hidden">
        {label}
      </InputInset.Label>
    </span>
  );
};

const VisualSelectInput = ({
  displayValue,
  placeholder,
  type,
  className,
  label,
  ...rest
}: InputProps) => {
  const { value, size, popper, disabled, isError, onQueryChange } =
    useComboboxContext('Combobox.VisualSelectInput');
  const selected = value as [];

  return (
    <span
      className={mergeClassnames(
        'w-full flex flex-col',
        !selected.length ? 'gap-y-0' : 'gap-y-1'
      )}
    >
      <div className="flex flex-wrap justify-start items-start gap-1">
        {selected.map(({ id, label }) => {
          return <SelectedItem index={id} label={label} />;
        })}
      </div>
      <HeadlessCombobox.Input
        onChange={({ target: { value } }) => {
          onQueryChange ? onQueryChange(value) : () => { };
        }}
        as={NativeInput}
        displayValue={displayValue}
        placeholder={placeholder === undefined ? '' : `${placeholder}`}
        type={type ? type : 'text'}
        disabled={disabled}
        className={mergeClassnames(
          'flex-grow w-full h-full border-0 !rounded-none bg-transparent px-0',
          '!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none',
          label !== undefined &&
          label.length > 0 &&
          (placeholder === undefined || placeholder.length === 0) &&
          'input-xl',
          label !== undefined && label.length > 0 && 'pt-3 input-xl-dt-label',
          getTextSizes(size),
          className,
          'leading-5'
        )}
        error={isError}
        aria-label={rest['aria-label']}
        {...rest}
        ref={popper?.setAnchor}
      />
    </span>
  );
};

const Button = ({
  open,
  children,
  label,
  className,
  ['aria-label']: ariaLabel,
  ...rest
}: WithChildren<ButtonProps>) => {
  const { size, disabled } = useComboboxContext('Combobox.Button');
  const ariaLabelValue = ariaLabel ? ariaLabel : open ? 'Close' : 'Open';
  return (
    <HeadlessCombobox.Button
      className={mergeClassnames(
        'w-6 h-6',
        size === 'sm' ? 'w-4 h-4 text-moon-16' : 'text-moon-24',
        open && '-rotate-180',
        'text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center',
        disabled && 'cursor-not-allowed',
        className
      )}
      aria-label={ariaLabelValue}
      {...rest}
    >
      {children}
    </HeadlessCombobox.Button>
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
    <HeadlessCombobox.Options
      ref={popper?.setPopper}
      style={popper?.styles?.popper}
      {...popper?.attributes?.popper}
      className={mergeClassnames(
        menuWidth
          ? menuWidth
          : 'w-full max-h-[18.75rem] py-2 px-1 my-1 rounded-moon-s-md box-border bg-goku shadow-moon-lg z-10 absolute',
        'overflow-y-auto focus:outline-none',
        className
      )}
      {...rest}
    >
      {children}
    </HeadlessCombobox.Options>
  );
};

const Option = ({ children, value }: OptionProps) => {
  return (
    <HeadlessCombobox.Option as="span" value={value}>
      {({ selected, disabled, active }) =>
        typeof children === 'function'
          ? children({ selected, disabled, active })
          : children
      }
    </HeadlessCombobox.Option>
  );
};

const Counter = ({ open, className, counter, ...rest }: SelectProps) => {
  const { size, isError, disabled, onClear } =
    useComboboxContext('Combobox.Counter');

  return (
    <span
      className={mergeClassnames(
        'flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center',
        className
      )}
    >
      <SelectButton
        size={size}
        open={open}
        isError={isError}
        idDisabled={disabled}
        {...rest}
      >
        <SelectButton.Value>
          <SelectButton.Chip onClear={onClear}>{counter}</SelectButton.Chip>
        </SelectButton.Value>
      </SelectButton>
    </span>
  );
};

const SelectedItem = ({
  open,
  className,
  index,
  label,
  ...rest
}: {
  index: number | string;
  label: number | string;
} & SelectProps) => {
  const { size, isError, disabled, onClear } =
    useComboboxContext('Combobox.Counter');

  return (
    <span
      className={mergeClassnames(
        'flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center',
        className
      )}
    >
      <SelectButton
        size={size}
        open={open}
        isError={isError}
        idDisabled={disabled}
        {...rest}
      >
        <SelectButton.Value>
          <SelectButton.Chip onClear={() => onClear && onClear(index)}>
            {label}
          </SelectButton.Chip>
        </SelectButton.Value>
      </SelectButton>
    </span>
  );
};

const Transition = ({ children, ...rest }: WithChildren) => {
  const { onQueryChange } = useComboboxContext('Combobox.Counter');

  return (
    <HeadlessTransition
      as="div"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={onQueryChange ? () => onQueryChange('') : () => { }}
      {...rest}
    >
      {children}
    </HeadlessTransition>
  );
};

const Select = ({
  open,
  label,
  placeholder,
  children,
  className,
  multiple,
  counter,
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
          displayValue={displayValue}
          aria-label={rest['aria-label']}
        />
        <Button open={open}>{children}</Button>
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
        multiple={multiple}
        counter={counter}
        {...rest}
      >
        {counter !== undefined && counter > 0 && <Counter counter={counter} />}
        <Input
          open={open}
          placeholder={placeholder}
          displayValue={displayValue}
          aria-label={rest['aria-label']}
        />
        <Button open={open}>{children}</Button>
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
        innerLabel={true}
        {...rest}
      >
        <InsetInput
          open={open}
          label={label}
          placeholder={placeholder}
          displayValue={displayValue}
          aria-label={rest['aria-label']}
        />
        <Button open={open}>{children}</Button>
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
        multiple={multiple}
        counter={counter}
        innerLabel={true}
        {...rest}
      >
        {counter !== undefined && counter > 0 && <Counter counter={counter} />}
        <InsetInput
          open={open}
          label={label}
          placeholder={placeholder}
          displayValue={displayValue}
          aria-label={rest['aria-label']}
        />
        <Button open={open}>{children}</Button>
      </Listbox.Button>
    </Listbox>
  );
};

const VisualMultiSelect = ({
  open,
  label,
  placeholder,
  children,
  className,
  multiple = true,
  counter,
  displayValue,
  forceUpdate,
  ...rest
}: WithChildren<SelectProps & InputProps> & { forceUpdate?: boolean }) => {
  const { size, popper, disabled, value } = useComboboxContext('Combobox.VisualMultiSelect');

  useEffect(() => {
    // Do nothing if forceUpdate is false.
    if (!forceUpdate) {
      return;
    }
    if (typeof popper?.forceUpdate === 'function') {
      popper.forceUpdate();
    }
  }, [value]);

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
        multiple={multiple}
        {...rest}
      >
        <VisualSelectInput
          open={open}
          placeholder={placeholder}
          displayValue={displayValue}
          aria-label={rest['aria-label']}
        />
        <Button open={open}>{children}</Button>
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
    <GenericHint error={isError} disabled={disabled} className={className}>
      {children}
    </GenericHint>
  );
};

const Combobox = Object.assign(ComboboxRoot, {
  Input,
  InsetInput,
  VisualSelectInput,
  Button,
  Options,
  Option,
  Trigger,
  Counter,
  SelectedItem,
  Transition,
  Hint,
  Select,
  MultiSelect,
  InsetSelect,
  InsetMultiSelect,
  VisualMultiSelect,
});

export default Combobox;
