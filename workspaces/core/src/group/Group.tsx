import React, { createContext, ReactNode, useContext } from 'react';
import Input, { InputProps } from '../input/Input';
import InsetInput, { InsetInputProps } from '../insetInput/InsetInput';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import InsetSelect, { InsetSelectProps } from './private/InsetSelect';
import Select, { SelectProps } from './private/Select';

type WithChildren<T = {}> = T & { children?: ReactNode };
type Orientation = 'vertical' | 'horizontal';
type Size = 'sm' | 'md' | 'lg';
type GroupProps = {
  orientation: Orientation;
  size?: Size;
  error?: boolean;
};
type GroupComponentProps = (
  props: WithChildren<GroupProps>
) => React.ReactElement | null;
type GroupState = {
  orientation?: Orientation;
  size?: Size;
  error?: boolean;
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
  orientation,
  size = 'md',
  error,
  children,
}) => {
  const states = {
    orientation: orientation,
    size: size,
    error: error,
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
            'after:content-[""] after:absolute after:top-0 after:bottom-0 after:w-px after:left-1/2 after:translate-x-[-50%] after:bg-beerus after:x-[3] hover:after:hidden focus-within:after:hidden',
          orientation === 'vertical' &&
            !error &&
            'after:content-[""] after:absolute after:top-1/2 after:bottom-0 after:w-full after:h-px after:left-0 after:translate-y-[-50%] after:bg-beerus after:x-[3] hover:after:hidden focus-within:after:hidden'
        )}
      >
        {children}
      </div>
    </GroupContext.Provider>
  );
};

const FirstInput: React.FC<InputProps> = ({
  className,
  error: inputError,
  ...rest
}) => {
  const {
    orientation,
    size,
    error: groupError,
  } = useGroupContext('FirstInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';

  const error = inputError || groupError;
  return (
    <Input
      error={error}
      size={size}
      placeholder="Placeholder"
      className={mergeClassnames(
        isVertical &&
          !error &&
          'rounded-bl-none rounded-br-none input-bbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:rounded-bl-none rtl:rounded-tl-none rtl:input-lsb-hidden ltr:rounded-br-none ltr:rounded-tr-none ltr:input-rsb-hidden',
        className && className
      )}
      {...rest}
    />
  );
};

const LastInput: React.FC<InputProps> = ({
  className,
  error: inputError,
  ...rest
}) => {
  const { orientation, size, error: groupError } = useGroupContext('LastInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  const error = inputError || groupError;
  return (
    <Input
      error={error}
      size={size}
      className={mergeClassnames(
        isVertical &&
          !error &&
          'rounded-tl-none rounded-tr-none input-tbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:rounded-tr-none rtl:rounded-br-none rtl:input-rsb-hidden ltr:rounded-tl-none ltr:rounded-bl-none ltr:input-lsb-hidden',
        className && className
      )}
      {...rest}
    />
  );
};

const FirstInsetInputRoot: React.FC<WithChildren<InsetInputProps>> = ({
  className,
  children,
  error: inputError,
  ...rest
}) => {
  const { orientation, error: groupError } = useGroupContext('FirstInsetInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  const error = inputError || groupError;
  return (
    <InsetInput
      error={error}
      className={mergeClassnames(
        isVertical &&
          !error &&
          '[&_input]:rounded-bl-none [&_input]:rounded-br-none [&_input]:input-bbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:[&_input]:rounded-bl-none rtl:[&_input]:rounded-tl-none rtl:[&_input]:input-lsb-hidden ltr:[&_input]:rounded-br-none ltr:[&_input]:rounded-tr-none ltr:[&_input]:input-rsb-hidden',
        className && className
      )}
      {...rest}
    >
      {children}
    </InsetInput>
  );
};

const LastInsetInputRoot: React.FC<WithChildren<InsetInputProps>> = ({
  className,
  children,
  error: inputError,
  ...rest
}) => {
  const { orientation, error: groupError } = useGroupContext('LastInsetInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  const error = inputError || groupError;
  return (
    <InsetInput
      error={error}
      className={mergeClassnames(
        isVertical &&
          !error &&
          '[&_input]:rounded-tl-none [&_input]:rounded-tr-none [&_input]:input-tbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:[&_input]:rounded-tr-none rtl:[&_input]:rounded-br-none rtl:[&_input]:input-rsb-hidden ltr:[&_input]:rounded-tl-none ltr:[&_input]:rounded-bl-none ltr:[&_input]:input-lsb-hidden',
        className && className
      )}
      {...rest}
    >
      {children}
    </InsetInput>
  );
};

type LabelProps = { className?: string };
const InputLabel: React.FC<LabelProps> = ({ children, className }) => {
  return <InsetInput.Label className={className}>{children}</InsetInput.Label>;
};

const FirstSelect: React.FC<WithChildren<SelectProps>> = ({
  children,
  className,
  size,
  error: selectError,
  ...rest
}) => {
  const { orientation, error: groupError } = useGroupContext('FirstSelect');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  const error = selectError || groupError;
  return (
    <Select
      error={error}
      size={size}
      className={mergeClassnames(
        isVertical &&
          !error &&
          'rounded-bl-none rounded-br-none input-bbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:rounded-bl-none rtl:rounded-tl-none rtl:input-lsb-hidden ltr:rounded-br-none ltr:rounded-tr-none ltr:input-rsb-hidden',
        className && className
      )}
      {...rest}
    >
      {children}
    </Select>
  );
};

const FirstInsetSelect: React.FC<WithChildren<InsetSelectProps>> = ({
  className,
  children,
  error: selectError,
  ...rest
}) => {
  const { orientation, error: groupError } =
    useGroupContext('FirstInsetSelect');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  const error = selectError || groupError;
  return (
    <InsetSelect
      error={error}
      className={mergeClassnames(
        isVertical &&
          !error &&
          '[&_select]:rounded-bl-none [&_select]:rounded-br-none [&_select]:input-bbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:[&_select]:rounded-bl-none rtl:[&_select]:rounded-tl-none rtl:[&_select]:input-lsb-hidden ltr:[&_select]:rounded-br-none ltr:[&_select]:rounded-tr-none ltr:[&_select]:input-rsb-hidden',
        className && className
      )}
      {...rest}
    >
      {children}
    </InsetSelect>
  );
};

const LastInsetSelect: React.FC<WithChildren<InsetSelectProps>> = ({
  className,
  children,
  error: selectError,
  ...rest
}) => {
  const { orientation, error: groupError } = useGroupContext('LastInsetSelect');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';
  const error = selectError || groupError;
  return (
    <InsetSelect
      error={error}
      className={mergeClassnames(
        isVertical &&
          !error &&
          '[&_select]:rounded-tl-none [&_select]:rounded-tr-none [&_select]:input-tbb-hidden',
        isHorizontal &&
          !error &&
          'rtl:[&_select]:rounded-tr-none rtl:[&_select]:rounded-br-none rtl:[&_select]:input-rsb-hidden ltr:[&_select]:rounded-tl-none ltr:[&_select]:rounded-bl-none ltr:[&_select]:input-lsb-hidden',
        className && className
      )}
      {...rest}
    >
      {children}
    </InsetSelect>
  );
};

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
  FirstInsetSelect,
  LastInsetSelect,
});

export default Group;
//TODO: error - separate and both
