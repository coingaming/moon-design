import React, { createContext, forwardRef, useContext, ReactNode } from 'react';
import mergeClassnames from '../utils/mergeClassnames';

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

type FormProps = {
  size: 'sm' | 'md' | 'lg';
  className?: string;
};
const FormRoot = forwardRef<HTMLFormElement, WithChildren<FormProps>>(
  ({ children, size, className, ...rest }) => {
    const state = {
      size: size,
    };
    return (
      <FormContext.Provider value={state}>
        <form {...rest} className={mergeClassnames(className)}>
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

const Item: React.FC<ItemProps> = ({
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

{
  /* <Form size="sm" className="flex gap-4 justify-between p-5">
<Form.Item>
  <Label for="test-1" className="text-piccolo">
    Label
  </Label>
  <Input
    placeholder="tkgmrtkhmrt"
    id="test-1"
    className="rounded-none"
  />
  <Hint error>Informative message holder</Hint>
</Form.Item>
<Form.Item>
  <Label>Label</Label>
  <Input placeholder="tkgmrtkhmrt" />
  <Hint>Informative message holder</Hint>
</Form.Item>
</Form> */
}
