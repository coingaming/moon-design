import React, { createContext, ReactNode, useContext } from 'react';
import Input, { InputProps } from '../input/Input';
import InsetInput, { InsetInputProps } from '../insetInput/InsetInput';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import { default as MoonSelect } from './private/Select';

type WithChildren<T = {}> = T & { children?: ReactNode };
type Orientation = 'vertical' | 'horizontal';
type Size = 'sm' | 'md' | 'lg';
type InputGroupProps = {
  orientation: Orientation;
  size?: Size;
  error?: boolean;
};
type InputGroupComponentProps = (
  props: WithChildren<InputGroupProps>
) => React.ReactElement | null;
type InputGroupState = {
  orientation?: Orientation;
  size?: Size;
  error?: boolean;
};

const InputGroupContext = createContext<InputGroupState>({});
InputGroupContext.displayName = 'InputGroupContext';

const useInputGroupContext = (component: string) => {
  const context = useContext(InputGroupContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <InputGroup /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
};

const InputGroupRoot: InputGroupComponentProps = ({
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
    <InputGroupContext.Provider value={states}>
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
    </InputGroupContext.Provider>
  );
};

const FirstInput: React.FC<InputProps> = ({ className, ...rest }) => {
  const { orientation, size, error } = useInputGroupContext('FirstInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';

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

const LastInput: React.FC<InputProps> = ({ className, ...rest }) => {
  const { orientation, size, error } = useInputGroupContext('LastInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';

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
  ...rest
}) => {
  const { orientation, error } = useInputGroupContext('FirstInsetInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';

  return (
    <InsetInput
      error={error}
      placeholder="Placeholder"
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
  ...rest
}) => {
  const { orientation, error } = useInputGroupContext('LastInsetInput');
  const isVertical = orientation === 'vertical';
  const isHorizontal = orientation === 'horizontal';

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
const Label: React.FC<LabelProps> = ({ children, className }) => {
  return <InsetInput.Label className={className}>{children}</InsetInput.Label>;
};

const FirstInsetInput = Object.assign(FirstInsetInputRoot, { Label });
const LastInsetInput = Object.assign(LastInsetInputRoot, { Label });

const Select: React.FC = ({ children }) => {
  return <MoonSelect>{children}</MoonSelect>;
};
const InputGroup = Object.assign(InputGroupRoot, {
  FirstInput,
  LastInput,
  FirstInsetInput,
  LastInsetInput,
  Select,
});

export default InputGroup;
//TODO: error - separate and both
