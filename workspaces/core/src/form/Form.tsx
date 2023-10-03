import React, { forwardRef } from 'react';
import type FormProps from './private/types/FormProps';
import type ItemProps from './private/types/ItemProps';
import type WithChildren from './private/types/WithChildren';
import FormContext from './private/utils/FormContext';
import ItemContext from './private/utils/ItemContext';
import useFormContext from './private/utils/useFormContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

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

const Item = ({
  children,
  size,
  disabled,
  error,
  className,
}: WithChildren<ItemProps>) => {
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
          disabled && 'opacity-60 cursor-not-allowed',
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
