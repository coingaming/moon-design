import React, { forwardRef } from 'react';

import CheckboxLabel from './styles/CheckboxLabel';
import CheckboxCaption from './styles/CheckboxCaption';
import CheckboxInput from './styles/CheckboxInput';

export interface CheckboxProps {
  disabled?: boolean;
  ariaLabel?: string;
  label?: JSX.Element | string;
  id?: string;
  variant?: Variants;
  checked?: boolean;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dir?: 'ltr' | 'rtl' | 'auto';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled, ariaLabel, label, id, variant, dir, ...inputProps }, ref) => (
    <CheckboxLabel htmlFor={id} variant={variant}>
      <CheckboxInput
        id={id}
        disabled={disabled}
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
      />
      <CheckboxCaption dir={dir}>{label}</CheckboxCaption>
    </CheckboxLabel>
  )
);

export default Checkbox;
