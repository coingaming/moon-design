import React, { forwardRef, ReactNode } from 'react';
import { useFormContext, useFormItemContext } from '../form/Form';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import getLabelSize from './private/getLabelSize';

type WithChildren<T = {}> = T & { children?: ReactNode };

interface LabelProps
  extends Omit<
    React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    'size'
  > {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Label = forwardRef<HTMLLabelElement, WithChildren<LabelProps>>(
  (
    {
      children,
      size: labelSize,
      disabled: labelDisabled,
      className,
      ...rest
    }: LabelProps,
    ref
  ) => {
    const { size: formSize } = useFormContext('Label');
    const { size: formItemSize, disabled: formItemDisabled } =
      useFormItemContext('Label');
    const size = labelSize || formItemSize || formSize;
    const disabled = labelDisabled || formItemDisabled;
    return (
      <label
        ref={ref}
        className={mergeClassnames(
          'w-full block text-bulma pb-2',
          getLabelSize(size),
          disabled && 'opacity-30 cursor-not-allowed',
          className && className
        )}
        {...rest}
      >
        {children}
      </label>
    );
  }
);

export default Label;
