import * as React from 'react';

import { Label, LabelSizing } from '../private/label/label';

import { SelectElement, selectWidthAuto } from './private/element';

type SelectProps = LabelSizing &
  React.InputHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    fullWidth?: boolean;
    disabled?: boolean;
  };

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
      css={[!fullWidth && selectWidthAuto]}
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

export { Select, SelectProps };
