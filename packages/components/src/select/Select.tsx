import React, { forwardRef } from 'react';

import { Label, LabelSizing } from '../private/label/label';

import { SelectElement, SelectElementProps } from './private/element';

type SelectProps = LabelSizing &
  React.InputHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    disabled?: boolean;
    dir?: 'ltr' | 'rtl' | 'auto';
  } & SelectElementProps;

/**
 * Component
 */
const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    children,
    disabled,
    label,
    fullWidth,
    flex,
    inputGrow,
    dir,
    ...rest
  } = props;
  const SelectInput = (
    <SelectElement
      withIcon
      fullWidth={fullWidth}
      disabled={disabled}
      dir={dir}
      ref={ref}
      {...rest}
    >
      {children}
    </SelectElement>
  );

  return label ? (
    <Label
      dir={dir}
      disabled={disabled}
      text={label}
      flex={flex}
      inputGrow={inputGrow}
    >
      {SelectInput}
    </Label>
  ) : (
    SelectInput
  );
});

export type { SelectProps };

export default Select;
