import React, { forwardRef } from 'react';

import CheckboxLabel from './styles/CheckboxLabel';
import CheckboxHiddenInput from './styles/CheckboxHiddenInput';
import CheckboxStyledInput from './styles/CheckboxStyledInput';
import CheckboxCaption from './styles/CheckboxCaption';

export interface CheckboxProps {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  variant?: Variants;
  checked?: boolean;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, ariaLabel, label, id, variant, ...inputProps }, ref) => (
    <CheckboxLabel htmlFor={id} variant={variant}>
      <CheckboxHiddenInput
        disabled={disabled}
        aria-label={ariaLabel}
        id={id}
        ref={ref}
        {...inputProps}
      />
      <CheckboxStyledInput />
      {label && <CheckboxCaption>{label}</CheckboxCaption>}
    </CheckboxLabel>
  )
);

export default Checkbox;
