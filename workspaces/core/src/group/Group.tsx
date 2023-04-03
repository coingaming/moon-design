import React, { createContext, ReactNode, useContext, forwardRef } from 'react';
import Input, { InputProps } from '../input/Input';
import InsetInput, { InsetInputProps } from '../insetInput/InsetInput';
import InsetNativeSelect, {
  InsetNativeSelectProps,
} from '../insetNativeSelect/InsetNativeSelect';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import NativeSelect, { NativeSelectProps } from '../nativeSelect/NativeSelect';

type WithChildren<T = {}> = T & { children?: ReactNode };
type Orientation = 'vertical' | 'horizontal';
type Size = 'sm' | 'md' | 'lg';
type GroupProps = {
  orientation?: Orientation;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
};
type GroupComponentProps = (
  props: WithChildren<GroupProps>
) => React.ReactElement | null;
type GroupState = {
  orientation?: Orientation;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};

const GroupContext = createContext<GroupState>({});
GroupContext.displayName = 'GroupContext';

const useGroupContext = (component: string) => {
  const context = useContext(GroupContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Group /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useGroupContext);
    throw err;
  }
  return context;
};

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
    orientation: orientation,
    size: size,
    error: error,
    disabled,
    readOnly,
  };

  return (
    <GroupContext.Provider value={states}>
      <div
        className={mergeClassnames(
          'flex border-none shadow-input relative h-fit bg-gohan',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
          size === 'sm' ? 'rounded-moon-i-xs' : 'rounded-moon-i-sm',
          orientation === 'horizontal' &&
            !error &&
            'after:content-[""] after:absolute after:top-0 after:bottom-0 after:w-px after:left-1/2 after:translate-x-[-50%] after:bg-beerus after:x-[3] ',
          orientation === 'vertical' &&
            !error &&
            'after:content-[""] after:absolute after:top-1/2 after:bottom-0 after:w-full after:h-px after:left-0 after:translate-y-[-50%] after:bg-beerus after:x-[3]',
          !disabled &&
            !readOnly &&
            'hover:after:hidden focus-within:after:hidden',
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
          isVertical &&
            !error &&
            'rounded-bl-none rounded-br-none input-bbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:rounded-bl-none rtl:rounded-tl-none rtl:input-lsb-hidden ltr:rounded-br-none ltr:rounded-tr-none ltr:input-rsb-hidden flex-1 basis-1/2',
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
      <Input
        error={error}
        disabled={disabled}
        readOnly={readOnly}
        size={size}
        className={mergeClassnames(
          isVertical &&
            !error &&
            'rounded-tl-none rounded-tr-none input-tbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:rounded-tr-none rtl:rounded-br-none rtl:input-rsb-hidden ltr:rounded-tl-none ltr:rounded-bl-none ltr:input-lsb-hidden flex-1 basis-1/2',
          className && className
        )}
        ref={ref}
        {...rest}
      />
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
          isVertical &&
            !error &&
            '[&_input]:rounded-bl-none [&_input]:rounded-br-none [&_input]:input-bbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:[&_input]:rounded-bl-none rtl:[&_input]:rounded-tl-none rtl:[&_input]:input-lsb-hidden ltr:[&_input]:rounded-br-none ltr:[&_input]:rounded-tr-none ltr:[&_input]:input-rsb-hidden flex-1 basis-1/2',
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
          isVertical &&
            !error &&
            '[&_input]:rounded-tl-none [&_input]:rounded-tr-none [&_input]:input-tbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:[&_input]:rounded-tr-none rtl:[&_input]:rounded-br-none rtl:[&_input]:input-rsb-hidden ltr:[&_input]:rounded-tl-none ltr:[&_input]:rounded-bl-none ltr:[&_input]:input-lsb-hidden flex-1 basis-1/2',
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

type LabelProps = { className?: string };
const InputLabel: React.FC<WithChildren<LabelProps>> = ({
  children,
  className,
}) => {
  return <InsetInput.Label className={className}>{children}</InsetInput.Label>;
};

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
          isVertical &&
            !error &&
            '[&_select]:rounded-bl-none [&_select]:rounded-br-none [&_select]:input-bbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:rounded-bl-none rtl:[&_select]:rounded-tl-none rtl:[&_select]:input-lsb-hidden ltr:[&_select]:rounded-br-none ltr:[&_select]:rounded-tr-none ltr:[&_select]:input-rsb-hidden flex-1 basis-1/2',
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
          isVertical &&
            !error &&
            '[&_select]:rounded-tl-none [&_select]:rounded-tr-none [&_select]:input-tbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:rounded-tr-none rtl:[&_select]:rounded-br-none rtl:[&_select]:input-rsb-hidden ltr:[&_select]:rounded-tl-none ltr:[&_select]:rounded-bl-none ltr:[&_select]:input-lsb-hidden flex-1 basis-1/2',
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
          isVertical &&
            !error &&
            '[&_select]:rounded-bl-none [&_select]:rounded-br-none [&_select]:input-bbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:rounded-bl-none rtl:[&_select]:rounded-tl-none rtl:[&_select]:input-lsb-hidden ltr:[&_select]:rounded-br-none ltr:[&_select]:rounded-tr-none ltr:[&_select]:input-rsb-hidden flex-1 basis-1/2',
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
          isVertical &&
            !error &&
            '[&_select]:rounded-tl-none [&_select]:rounded-tr-none [&_select]:input-tbb-hidden',
          isHorizontal &&
            !error &&
            'rtl:[&_select]:rounded-tr-none rtl:[&_select]:rounded-br-none rtl:[&_select]:input-rsb-hidden ltr:[&_select]:rounded-tl-none ltr:[&_select]:rounded-bl-none ltr:[&_select]:input-lsb-hidden flex-1 basis-1/2',
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
//TODO: error - separate and both
