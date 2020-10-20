import React, { forwardRef } from 'react';

import { Label, LabelSizing } from '../private/label/label';

import { SelectElement, SelectElementProps } from './private/element';

type SelectProps = LabelSizing &
  React.InputHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    disabled?: boolean;
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
    ...rest
  } = props;
  const SelectInput = (
    <SelectElement
      withIcon
      fullWidth={fullWidth}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </SelectElement>
  );

  return label ? (
    <Label disabled={disabled} text={label} flex={flex} inputGrow={inputGrow}>
      {SelectInput}
    </Label>
  ) : (
    SelectInput
  );
});

export { SelectProps };

export default Select;
