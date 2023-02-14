import React, { createContext, forwardRef, useContext, ReactNode } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

type WithChildren<T = {}> = T & { children?: ReactNode };

//Form
type FormState = {
  size?: 'sm' | 'md' | 'lg';
};

const FormContext = createContext<FormState>({});
FormContext.displayName = 'FormContext';

export const useFormContext = (component: string) => {
  const context = useContext(FormContext);
  if (context === null) {
    const err = new Error(`<${component}> is missing root <Form /> component.`);
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuItemContext);
    throw err;
  }
  return context;
};

interface FormProps
  extends Omit<
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >,
    'size'
  > {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onSubmit?: () => void;
}
const FormRoot = forwardRef<HTMLFormElement, WithChildren<FormProps>>(
  ({ children, size = 'md', className, onSubmit, ...rest }, ref) => {
    const state = {
      size: size,
    };
    return (
      <FormContext.Provider value={state}>
        <form
          {...rest}
          className={mergeClassnames(className)}
          onSubmit={onSubmit}
          ref={ref}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

// Form.Item
type ItemState = {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  error?: boolean;
};

const ItemContext = createContext<ItemState>({});
ItemContext.displayName = 'ItemContext';

export const useFormItemContext = (component: string) => {
  const context = useContext(ItemContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing root <Form.Item /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuItemContext);
    throw err;
  }
  return context;
};

type ItemProps = {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  error?: boolean;
  className?: string;
};

const Item: React.FC<WithChildren<ItemProps>> = ({
  children,
  size,
  disabled,
  error,
  className,
}) => {
  const { size: formSize } = useFormContext('Form.Item');

  const state = {
    size: size || formSize,
    disabled: disabled,
    error: error,
  };
  return (
    <ItemContext.Provider value={state}>
      <div
        className={mergeClassnames(
          'w-full max-w-full relative z-0',
          disabled && 'opacity-30 cursor-not-allowed',
          className && className
        )}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
};

const Form = Object.assign(FormRoot, { Item });

export default Form;
