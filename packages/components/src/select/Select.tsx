import React from 'react';

import { Label, LabelSizing } from '../private/label/label';

import { SelectElement, SelectElementProps } from './private/element';

type SelectProps = LabelSizing &
  React.InputHTMLAttributes<HTMLSelectElement> &
  React.RefAttributes<HTMLSelectElement> & {
    label?: string;
    disabled?: boolean;
  } & SelectElementProps;

/**
 * Component
 */
const Select: React.FC<SelectProps> = ({
  children,
  disabled,
  label,
  fullWidth,
  flex,
  inputGrow,
  ...props
}) => {
  const SelectInput = (
    <SelectElement
      withIcon
      fullWidth={fullWidth}
      disabled={disabled}
      {...props}
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
};

export { SelectProps };

export default Select;
