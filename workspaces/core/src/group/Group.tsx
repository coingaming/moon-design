import React, { forwardRef } from 'react';
import type GroupComponentProps from './private/types/GroupComponentProps';
import type LabelProps from './private/types/LabelProps';
import type WithChildren from './private/types/WithChildren';
import GroupContext from './private/utils/GroupContext';
import useGroupContext from './private/utils/useGroupContext';
import Input from '../input/Input';
import type InputProps from '../input/private/types/InputProps';
import InsetInput from '../insetInput/InsetInput';
import type InsetInputProps from '../insetInput/private/types/InsetInputProps';
import InsetNativeSelect from '../insetNativeSelect/InsetNativeSelect';
import type InsetNativeSelectProps from '../insetNativeSelect/private/types/InsetNativeSelectProps';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import NativeSelect, { NativeSelectProps } from '../nativeSelect/NativeSelect';

const GroupRoot: GroupComponentProps = ({
  orientation = 'vertical',
  size = 'md',
  error,
  children,
  className,
  disabled,
  readOnly,
}) => {
  const states = {
    orientation,
    size,
    error,
    disabled,
    readOnly,
  };
  return (
    <GroupContext.Provider value={states}>
      <div
        className={mergeClassnames(
          'flex border-none shadow-input relative h-fit bg-goku',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
          size === 'sm' ? 'rounded-moon-i-xs' : 'rounded-moon-i-sm',
          error &&
            'shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-error',
          className && className
        )}
      >
        {children}
      </div>
    </GroupContext.Provider>
  );
};

const FirstInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error: inputError,
      disabled: inputDisabled,
      readOnly: inputReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      size,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('FirstInput');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const disabled = inputDisabled || groupDisabled;
    const readOnly = inputReadOnly || groupReadOnly;
    const error = inputError || groupError;
    return (
      <Input
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        placeholder="Placeholder"
        className={mergeClassnames(
          '[&:not(:read-only):not(:disabled)_+_.last-element:before]:hover:opacity-0',
          '[&:not(:read-only):not(:disabled)_+_.last-element:before]:focus:opacity-0',
          error && '[&_+_.last-element:before]:opacity-0',
          isVertical &&
            'rounded-b-none read-only:hover:input-bbb-clip-path read-only:focus:input-bbb-clip-path',
          isVertical && !error && 'input-bbb-hidden',
          isHorizontal &&
            'rounded-e-none flex-1 basis-1/2 rtl:read-only:hover:input-lsb-clip-path ltr:read-only:hover:input-rsb-clip-path rtl:read-only:focus:input-lsb-clip-path ltr:read-only:focus:input-rsb-clip-path',
          isHorizontal && !error && 'rtl:input-lsb-hidden ltr:input-rsb-hidden',
          className && className
        )}
        ref={ref}
        {...rest}
      />
    );
  }
);

const LastInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error: inputError,
      disabled: inputDisabled,
      readOnly: inputReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      size,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('LastInput');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = inputError || groupError;
    const disabled = inputDisabled || groupDisabled;
    const readOnly = inputReadOnly || groupReadOnly;
    return (
      <div
        className={mergeClassnames(
          'relative last-element before:absolute before:block before:bg-beerus  before:transition-opacity',
          isVertical && 'before:h-px before:top-0 before:inset-x-0',
          isHorizontal && 'before:w-px before:start-0 before:inset-y-0',
          error && 'before:opacity-0'
        )}
      >
        <Input
          error={error}
          disabled={disabled}
          readOnly={readOnly}
          size={size}
          className={mergeClassnames(
            isVertical && 'rounded-t-none',
            isVertical && !error && 'input-tbb-hidden',
            isHorizontal && 'rounded-s-none flex-1 basis-1/2',
            isHorizontal &&
              !error &&
              'rtl:input-rsb-hidden ltr:input-lsb-hidden',
            className && className
          )}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

const FirstInsetInputRoot = forwardRef<
  HTMLInputElement,
  WithChildren<InsetInputProps>
>(
  (
    {
      className,
      children,
      error: inputError,
      disabled: inputDisabled,
      readOnly: inputReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('FirstInsetInput');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = inputError || groupError;
    const disabled = inputDisabled || groupDisabled;
    const readOnly = inputReadOnly || groupReadOnly;
    return (
      <InsetInput
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        className={mergeClassnames(
          '[&:has(input:not(:disabled):not(:read-only):hover)_+_.last-element:before]:opacity-0',
          '[&:has(input:not(:disabled):not(:read-only):focus)_+_.last-element:before]:opacity-0',
          error && '[&_+_.last-element:before]:opacity-0',
          isVertical &&
            '[&_input]:rounded-b-none [&_input:read-only:hover]:input-bbb-clip-path [&_input:read-only:focus]:input-bbb-clip-path',
          isVertical && !error && '[&_input]:input-bbb-hidden',
          isHorizontal &&
            'flex-1 basis-1/2 [&_input]:rounded-e-none rtl:[&_input:read-only:hover]:input-lsb-clip-path rtl:[&_input:read-only:focus]:input-lsb-clip-path ltr:[&_input:read-only:hover]:input-rsb-clip-path ltr:[&_input:read-only:focus]:input-rsb-clip-path',
          isHorizontal &&
            !error &&
            'rtl:[&_input]:input-lsb-hidden ltr:[&_input]:input-rsb-hidden',
          className && className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </InsetInput>
    );
  }
);

const LastInsetInputRoot = forwardRef<
  HTMLInputElement,
  WithChildren<InsetInputProps>
>(
  (
    {
      className,
      children,
      error: inputError,
      disabled: inputDisabled,
      readOnly: inputReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('LastInsetInput');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = inputError || groupError;
    const disabled = inputDisabled || groupDisabled;
    const readOnly = inputReadOnly || groupReadOnly;
    return (
      <InsetInput
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        className={mergeClassnames(
          'last-element before:absolute before:block before:bg-beerus before:transition-opacity',
          isVertical &&
            !error &&
            ' [&_input]:input-tbb-hidden before:h-px before:top-0 before:inset-x-0',
          isVertical && '[&_input]:rounded-t-none',
          isHorizontal &&
            !error &&
            ' rtl:[&_input]:input-rsb-hidden ltr:[&_input]:input-lsb-hidden',
          isHorizontal &&
            '[&_input]:rounded-s-none flex-1 basis-1/2 before:w-px before:start-0 before:inset-y-0',
          className && className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </InsetInput>
    );
  }
);

const InputLabel = ({ children, className }: WithChildren<LabelProps>) => (
  <InsetInput.Label className={className}>{children}</InsetInput.Label>
);

const FirstSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<NativeSelectProps>
>(
  (
    {
      children,
      className,
      size,
      error: selectError,
      disabled: selectDisabled,
      readOnly: selectReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('FirstSelect');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = selectError || groupError;
    const disabled = selectDisabled || groupDisabled;
    const readOnly = selectReadOnly || groupReadOnly;
    return (
      <NativeSelect
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        className={mergeClassnames(
          '[&:has(select:not(:disabled):hover)_+_.last-element:before]:opacity-0',
          '[&:has(select:not(:disabled):focus)_+_.last-element:before]:opacity-0',
          error && '[&_+_.last-element:before]:opacity-0',
          isVertical &&
            '[&_select]:!rounded-b-none [&_select:disabled:hover]:input-bbb-clip-path [&_select:disabled:focus]:input-bbb-clip-path',
          isVertical && !error && '[&_select]:!input-bbb-hidden before:h-px',
          isHorizontal &&
            '[&_select]:!rounded-e-none flex-1 basis-1/2 rtl:[&_select:disabled:hover]:input-lsb-clip-path rtl:[&_select:disabled:focus]:input-lsb-clip-path ltr:[&_select:disabled:hover]:input-rsb-clip-path ltr:[&_select:disabled:focus]:input-rsb-clip-path',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:input-lsb-hidden ltr:[&_select]:input-rsb-hidden ',
          className && className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </NativeSelect>
    );
  }
);

const LastSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<NativeSelectProps>
>(
  (
    {
      children,
      className,
      size,
      error: selectError,
      disabled: selectDisabled,
      readOnly: selectReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('LastSelect');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = selectError || groupError;
    const disabled = selectDisabled || groupDisabled;
    const readOnly = selectReadOnly || groupReadOnly;
    return (
      <NativeSelect
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        className={mergeClassnames(
          'last-element before:absolute before:block before:bg-beerus before:transition-opacity',
          isVertical &&
            '[&_select]:!rounded-t-none before:h-px before:top-0 before:inset-x-0',
          isVertical && !error && '[&_select]:input-tbb-hidden',
          isHorizontal &&
            '[&_select]:!rounded-s-none flex-1 basis-1/2 before:w-px before:start-0 before:inset-y-0',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:input-rsb-hidden ltr:[&_select]:input-lsb-hidden',
          className && className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </NativeSelect>
    );
  }
);

const FirstInsetSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<InsetNativeSelectProps>
>(
  (
    {
      className,
      children,
      error: selectError,
      disabled: selectDisabled,
      readOnly: selectReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('FirstInsetSelect');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = selectError || groupError;
    const disabled = selectDisabled || groupDisabled;
    const readOnly = selectReadOnly || groupReadOnly;
    return (
      <InsetNativeSelect
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        className={mergeClassnames(
          '[&:has(select:not(:disabled):hover)_+_.last-element:before]:opacity-0',
          '[&:has(select:not(:disabled):focus)_+_.last-element:before]:opacity-0',
          error && '[&_+_.last-element:before]:opacity-0',
          isVertical &&
            '[&_select]:!rounded-b-none [&_select:disabled:hover]:input-bbb-clip-path [&_select:disabled:focus]:input-bbb-clip-path',
          isVertical && !error && '[&_select]:!input-bbb-hidden',
          isHorizontal &&
            '[&_select]:!rounded-e-none flex-1 basis-1/2 rtl:[&_select:disabled:hover]:input-lsb-clip-path rtl:[&_select:disabled:focus]:input-lsb-clip-path ltr:[&_select:disabled:hover]:input-rsb-clip-path ltr:[&_select:disabled:focus]:input-rsb-clip-path',
          isHorizontal &&
            !error &&
            ' rtl:[&_select]:input-lsb-hidden ltr:[&_select]:input-rsb-hidden ',
          className && className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </InsetNativeSelect>
    );
  }
);

const LastInsetSelect = forwardRef<
  HTMLSelectElement,
  WithChildren<InsetNativeSelectProps>
>(
  (
    {
      className,
      children,
      error: selectError,
      disabled: selectDisabled,
      readOnly: selectReadOnly,
      ...rest
    },
    ref
  ) => {
    const {
      orientation,
      error: groupError,
      disabled: groupDisabled,
      readOnly: groupReadOnly,
    } = useGroupContext('LastInsetSelect');
    const isVertical = orientation === 'vertical';
    const isHorizontal = orientation === 'horizontal';
    const error = selectError || groupError;
    const disabled = selectDisabled || groupDisabled;
    const readOnly = selectReadOnly || groupReadOnly;
    return (
      <InsetNativeSelect
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        className={mergeClassnames(
          'last-element before:absolute before:block before:bg-beerus before:transition-opacity',
          isVertical &&
            '[&_select]:!rounded-t-none before:h-px before:top-0 before:inset-x-0',
          isVertical && !error && '[&_select]:input-tbb-hidden',
          isHorizontal &&
            '[&_select]:!rounded-s-none flex-1 basis-1/2 before:w-px before:start-0 before:inset-y-0',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:input-rsb-hidden ltr:[&_select]:input-lsb-hidden',
          className && className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </InsetNativeSelect>
    );
  }
);

const FirstInsetInput = Object.assign(FirstInsetInputRoot, {
  Label: InputLabel,
});

const LastInsetInput = Object.assign(LastInsetInputRoot, { Label: InputLabel });

const Group = Object.assign(GroupRoot, {
  FirstInput,
  LastInput,
  FirstInsetInput,
  LastInsetInput,
  FirstSelect,
  LastSelect,
  FirstInsetSelect,
  LastInsetSelect,
});

export default Group;
